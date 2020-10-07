import React from "react";

export default function Character({ character }) {
  return (
    <div className="card">
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}
