import { useState } from "react";
import { createPerson } from "../api/people";
import PeopleList from "../components/PeopleList";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreatePage = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => createPerson({ name: name, age: age }),
    onSuccess: () => {
      queryClient.invalidateQueries(["people"]);
      setName("");
      setAge("");
    },
    onError: (error) => {
      console.error("Error deleting person:", error);
    },
  });

  return (
    <>
      <PeopleList></PeopleList>
      <h2>This is Create page for person</h2>

      <input
        type="text"
        placeholder="Put name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Put age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button onClick={() => mutation.mutate()}>Create</button>
    </>
  );
};

export default CreatePage;
