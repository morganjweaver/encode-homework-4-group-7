import React, { useEffect, useState } from "react";
import agent from "../../agent";
import NftListItem from "../NftListItem";
import axios from "axios";

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
    <div>
      <h1 className="text-3xl font-bold underline">
        Superb Laser Cats NFT Collection
      </h1>
      {items &&
        items.map((item) => <NftListItem key={item.fileId} item={item} />)}
    </div>
  );
}

export default Home;
