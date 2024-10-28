import { deletePatient, editPatient, getPatient } from "../api/patient";
import { useParams, useNavigate } from "react-router-dom";
import PatientsData from "../components/PatientsData";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Row, Button } from "antd";

const PatientPage = () => {
  const params = useParams();
  const [patient, setPatient] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getPatient(params.id).then((data) => setPatient(data));
  }, [params.id]);

  const queryClient = useQueryClient();

  const mutationEdit = useMutation({
    mutationFn: () => editPatient(patient),
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
      navigate("/patients");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: () => deletePatient(params.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
      navigate("/patients");
    },
  });

  return (
    <>
      <Row gutter={16} style={{ marginBottom: "16px", alignItems: "flex-end" }}>
        <PatientsData
          patient={patient}
          setPatient={setPatient}
          buttonText="Edit"
          mutate={mutationEdit.mutate}
        />
        <Button
          type="danger" // Change this to 'danger' to make the button red
          danger
          onClick={() => mutationDelete.mutate()}
          style={{ marginLeft: "16px" }} // Add some space between the button and the PatientsData component
        >
          Delete
        </Button>
      </Row>
    </>
  );
};

export default PatientPage;
