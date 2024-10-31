import { useQuery } from "@tanstack/react-query";
import { getTeams, getTeam } from "../api/team";
import { useEffect, useState } from "react";

const TeamSelectorPage = () => {
  const [teamId, setTeamId] = useState();
  const [tableTeam, setTableTeam] = useState(<></>);
  const [tableQuality, setTableQuality] = useState(<></>);

  const { data: teams } = useQuery({
    queryKey: ["teams"],
    queryFn: () => getTeams(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    getTeam(teamId).then((team) => {
      if (team?.jugadores) {
        const rows1 = [];
        const rows2 = [];

        team.jugadores.forEach((jugador) => {
          rows1.push(
            <tr key={jugador.jugadorCod}>
              <td>{jugador.numeroCamiseta}</td>
              <td>{jugador.nombre}</td>
            </tr>
          );

          rows2.push(
            <div
              key={jugador.jugadorCod}
              style={{ marginRight: "10px" }}
              className="flex-row"
            >
              <div
                className=" border d-flex align-items-end"
                style={{ height: "100px", width: "100%" }}
              >
                <div
                  style={{
                    backgroundColor: "red",
                    color: "red",
                    height: jugador.calidad * 10,
                    width: "100%",
                  }}
                />
              </div>
              <div className="border p-2">{jugador.numeroCamiseta}</div>
            </div>
          );
        });

        setTableTeam(
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Number of T-shirt</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>{rows1}</tbody>
          </table>
        );

        setTableQuality(rows2);
      }
    });
  }, [teamId]);

  return (
    <>
      <div className="container-sm">
        <figure className="text-center">
          <blockquote className="blockquote">
            <h1 className="display-3"> Team {teams?.nombre} Player List</h1>
          </blockquote>
          <select
            onChange={(e) => setTeamId(e.target.value)}
            className="form-select form-select-md"
            aria-label="Small select example"
          >
            <option selected>Open this select menu</option>
            {teams?.map((team) => (
              <option key={team.equipoCod} value={team.equipoCod}>
                {team.nombre}
              </option>
            ))}
          </select>
        </figure>
        <div className="row">
          <div className="col"> {tableTeam}</div>
          <div className="col">
            <div className="container">
              <div className="d-inline-flex">{tableQuality}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSelectorPage;
