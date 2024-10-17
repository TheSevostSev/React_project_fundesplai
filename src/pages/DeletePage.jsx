import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePerson } from "../api/people";
import PeopleList from "../components/PeopleList";

const DeletePage = () => {
  const [deletePersonID, setDeletePersonID] = useState();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePerson,
    onSuccess: () => {
      queryClient.invalidateQueries(["people"]);
      setDeletePersonID(0);
    },
    onError: (error) => {
      console.error("Error deleting person:", error);
    },
  });

  return (
    <>
      <PeopleList />
      <h2>Please put the id of the person you would like to delete</h2>
      <input
        type="text"
        value={deletePersonID}
        onChange={(e) => setDeletePersonID(Number(e.target.value))}
      />
      <button
        onClick={() => {
          if (deletePersonID) {
            mutation.mutate(deletePersonID);
          }
        }}
      >
        Delete
      </button>
    </>
  );
};

export default DeletePage;
