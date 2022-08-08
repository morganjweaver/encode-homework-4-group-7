import React from "react";

function NftListItem(item) {
  const file = item.item.metadata;
  return (
    <div className="justify-center items-center ml-32">
      <p>Name: {file.name}</p>
      <p>Description: {file.description}</p>
      <img
        className="mb-8 mt-2"
        src={`https://${file.image}`}
        style={{ height: "320px" }}
        alt=""
      />
    </div>
  );
}

export default NftListItem;
