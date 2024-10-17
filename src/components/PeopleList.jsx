import { useQuery } from "@tanstack/react-query";
import PersonShow from "./PersonShow";
import { getPeople } from "../api/people";

const PeopleList = () => {
  const { data: people } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <>
      <h2>This is People list</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {people?.map((person) => {
          return (
            <tr key={person.id}>
              <PersonShow person={person} />
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default PeopleList;
