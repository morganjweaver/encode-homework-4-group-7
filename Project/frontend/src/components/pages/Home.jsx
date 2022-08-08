import React, { useEffect, useState } from "react";
import agent from "../../agent";
import NftListItem from "../NftListItem";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await agent.File.list();

      setItems(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1 class="text-3xl font-bold underline mb-8 ml-16">
        Superb Laser Cats NFT Collection
      </h1>
      <div class="grid grid-flow-row grid-cols-2 grid-rows-5 justify-center items-center">
        {items &&
          items.map((item) => <NftListItem key={item.fileId} item={item} />)}
      </div>
    </>
  );
}

export default Home;
