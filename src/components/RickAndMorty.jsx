import PropTypes from "prop-types";

function RickAndMorty({ character }) {
  return (
    <>
      <h2>Basic info</h2>
      <p>
        id: {character.id} name:{character.name} status:{character.status},
        species:
        {character.species} type:
        {character.type} gender:{character.gender}
      </p>
      <h3>Origin</h3>
      <p>Name: {character.origin.name}</p>
      <h3>Location</h3>
      <p>Name: {character.location.name}</p>
      <h3>Image</h3>
      <img src={character.image} alt="" />
    </>
  );
}

RickAndMorty.propTypes = {
  character: PropTypes.object,
};

export default RickAndMorty;
