import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IERC721Burnable is IERC721 {
  function burn(uint256) external; 
}

contract Shop {
  uint256 public nftPrice;
  IERC721Burnable public collection;

  constructor(uint256 _nftPrice, address _collection) {
    nftPrice = _nftPrice;
    collection = IERC721Burnable(_collection);
  }

  modifier onlyNftOwner(uint256 tokenId, address sender) {
    require(collection.ownerOf(tokenId) == sender, "Ownly NFT owner can execute this function");
    _;
  } 

  function buy(uint256 tokenId) public payable onlyNftOwner(tokenId, address(this)) {
    require(msg.value >= nftPrice, "Not enough ETH to buy the NFT");
    collection.safeTransferFrom(address(this), msg.sender, tokenId);
  }
  
  function transfer(address to, uint256 tokenId) public payable onlyNftOwner(tokenId, msg.sender) {
    collection.safeTransferFrom(msg.sender, to, tokenId);
  }

  function burn(uint256 tokenId) public onlyNftOwner(tokenId, address(this)) {
    collection.burn(tokenId);
  }
}