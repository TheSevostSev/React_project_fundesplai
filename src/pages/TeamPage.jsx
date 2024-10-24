import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTeam } from "../api/team";

const TeamPage = () => {
  const params = useParams();

  const { data: data } = useQuery({
    queryKey: ["teams", params.id],
    queryFn: () => getTeam(params.id),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const textStyle = {
    textAlign: "center",
    width: "100%",
  };

  const imgStyleLogo = {
    width: "50px",
    height: "50px",
  };

  return (
    <>
      <h2 style={textStyle}>Team {data?.equipo.nombre} Player List</h2>
      <div style={containerStyle}>
        <img
          src={"http://localhost:8080/" + data?.equipo.fotoEscudo}
          alt={`${data?.equipo.nombre} Logo`}
          style={imgStyleLogo}
        />
        <img
          src={"http://localhost:8080/" + data?.equipo.fotoEquipo}
          alt={`${data?.equipo.nombre} team photo`}
        />
      </div>
      <div style={containerStyle}>
        <ul>
          {data?.jugadores.map((jugador) => (
            <li key={jugador}>{jugador.nombre}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeamPage;
