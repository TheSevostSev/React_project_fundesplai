import PatientsList from "../components/PatientsList";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPatient } from "../api/patient";
import PatientsData from "../components/PatientsData";

const CreatePatientPage = () => {
  const [patient, setPatient] = useState({});

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => createPatient(patient),
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
      setPatient({});
    },
    onError: (error) => {
      console.error("Error creating patient:", error);
    },
  });

  return (
    <>
      <PatientsList />
      <PatientsData
        mutate={mutation.mutate}
        patient={patient}
        setPatient={setPatient}
        buttonText="Create"
      ></PatientsData>
    </>
  );
};

export default CreatePatientPage;
