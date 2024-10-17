import { useEffect, useState } from "react";
import { getCharacter } from "../api/api";
import { useParams } from "react-router-dom";

const NarutoPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacter(id).then(setCharacter);
  }, [id]);

  return (
    <>
      <h2>Name:</h2>
      {character?.name}
      <br />
      <h2>Tools</h2>
      <br />
      {character?.tools?.map((tool) => (
        <p key={tool}>{tool}</p>
      ))}
      <br />
      <h2>Jutsu</h2>
      <br />
      {character?.jutsu?.map((jutsu) => (
        <p key={jutsu}>{jutsu}</p>
      ))}
      <br />
      <h2>Images:</h2>
      <br />
      {character?.images?.map((image) => (
        <img key="image" src={image} alt="" />
      ))}
    </>
  );
};

export default NarutoPage;
