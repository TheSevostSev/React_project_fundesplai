import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../api/patient";

const tableStyles = {
  borderCollapse: "collapse",
  border: "2px solid rgb(140, 140, 140)",
  fontFamily: "sans-serif",
  fontSize: "0.8rem",
  letterSpacing: "1px",
  width: "100%",
};

const theadTfootStyles = {
  backgroundColor: "rgb(228, 240, 245)",
};

const thTdStyles = {
  border: "1px solid rgb(160, 160, 160)",
  padding: "8px 10px",
};

const lastTdStyles = {
  textAlign: "center",
};

const evenRowStyles = {
  backgroundColor: "rgb(237, 238, 242)",
};

const footerThStyles = {
  textAlign: "right",
};

const footerTdStyles = {
  fontWeight: "bold",
};

const PatientsList = () => {
  const { data: patients } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <>
      <h2>Patients List</h2>
      <table style={tableStyles}>
        <thead style={theadTfootStyles}>
          <tr>
            <th scope="col" style={thTdStyles}>
              Id
            </th>
            <th scope="col" style={thTdStyles}>
              First Name
            </th>
            <th scope="col" style={thTdStyles}>
              Last Name
            </th>
            <th scope="col" style={thTdStyles}>
              Age
            </th>
            <th scope="col" style={thTdStyles}>
              Charge Date
            </th>
            <th scope="col" style={thTdStyles}>
              Discharge Date
            </th>
          </tr>
        </thead>
        <tbody>
          {patients?.map((patient, index) => (
            <tr key={patient.id} style={index % 2 === 0 ? evenRowStyles : {}}>
              <td style={thTdStyles}>{patient.id}</td>
              <td style={thTdStyles}>{patient.firstName}</td>
              <td style={thTdStyles}>{patient.lastName}</td>
              <td style={thTdStyles}>{patient.age}</td>
              <td style={thTdStyles}>{patient.chargeDate}</td>
              <td style={{ ...thTdStyles, ...lastTdStyles }}>
                {patient.dischargeDate}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot style={theadTfootStyles}>
          <tr>
            <th style={footerThStyles}>Total Patients</th>
            <td colSpan="5" style={footerTdStyles}>
              {patients?.length || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default PatientsList;
