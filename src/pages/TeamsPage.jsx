import { useQuery } from "@tanstack/react-query";
import { getTeams } from "../api/team";
import { useNavigate } from "react-router-dom";

const TeamsPage = () => {
  const { data: teams } = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const navigate = useNavigate();

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

  const cardStyle = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "16px",
    margin: "10px",
    width: "calc(20% - 20px)",
    boxSizing: "border-box",
    textAlign: "left",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
  };

  return (
    <>
      <h2 style={textStyle}>Teams List</h2>
      <div style={containerStyle}>
        {teams?.map((team) => (
          <div
            onClick={() => navigate(`/teams/${team.equipoCod}`)}
            key={team.id}
            style={cardStyle}
          >
            <p>{team.nombre}</p>
            <p>{team.fundacion}</p>
            <p>{team.presidente}</p>
            <img
              src={"http://localhost:8080/" + team.fotoEscudo}
              alt={`${team.nombre} Logo`}
              style={imgStyle}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamsPage;
