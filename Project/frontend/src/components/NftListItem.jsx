import React from 'react'

function NftListItem(item) {
  
  const file = item.item.metadata;
  return (
    <div>
      <p>Name: {file.name}</p>
      <p>Type: {file.description}</p>
      <img src={`https://${file.image}`} style={{ height: "320px" }} />
    </div>
  )
}

export default NftListItem