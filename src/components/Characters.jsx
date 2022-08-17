import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => (
          <div className="col">
            <>
              <img className="character__img" src={character.image} alt="" />
              <h2 className="character__name">{character.name}</h2>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;