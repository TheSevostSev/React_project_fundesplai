import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../api/patient";
import { useNavigate } from "react-router-dom";
import { Table, Button, Typography } from "antd";

const { Title } = Typography;

const PatientsList = () => {
  const { data: patients } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const navigate = useNavigate();

  // Columns definition for Ant Design Table
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text, record) => (
        <Button type="link" onClick={() => navigate(`/patients/${record.id}`)}>
          {text}
        </Button>
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Charge Date",
      dataIndex: "chargeDate",
    },
    {
      title: "Discharge Date",
      dataIndex: "dischargeDate",
    },
  ];

  return (
    <>
      <Title level={2}>Patients List</Title>
      <Table
        dataSource={patients}
        columns={columns}
        rowKey="id"
        pagination={false}
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>
              <Table.Summary.Cell>Total Patients</Table.Summary.Cell>
              <Table.Summary.Cell colSpan={5}>
                {patients?.length || 0}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </>
  );
};

export default PatientsList;
