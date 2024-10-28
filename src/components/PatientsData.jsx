import PropTypes from "prop-types";
import { Input, Button, DatePicker, Row, Col } from "antd";
import moment from "moment"; // Ensure you have moment imported

const PatientsData = ({ patient, setPatient, mutate, buttonText }) => {
  return (
    <Row gutter={16} style={{ marginBottom: "16px", alignItems: "flex-end" }}>
      {/* First Name */}
      <Col span={5}>
        <label>First Name</label>
        <Input
          placeholder="Enter first name"
          value={patient?.firstName || ""}
          onChange={(e) =>
            setPatient({ ...patient, firstName: e.target.value })
          }
        />
      </Col>

      {/* Last Name */}
      <Col span={5}>
        <label>Last Name</label>
        <Input
          placeholder="Enter last name"
          value={patient?.lastName || ""}
          onChange={(e) => setPatient({ ...patient, lastName: e.target.value })}
        />
      </Col>

      {/* Age */}
      <Col span={4}>
        <label>Age</label>
        <Input
          type="number"
          placeholder="Enter age"
          value={patient?.age || ""}
          onChange={(e) =>
            setPatient({ ...patient, age: Number(e.target.value) })
          }
        />
      </Col>

      {/* Discharge Date */}
      <Col span={6}>
        <label>Discharge Date</label>
        <DatePicker
          style={{ width: "100%" }}
          value={patient?.dischargeDate ? moment(patient.dischargeDate) : null}
          onChange={(date, dateString) =>
            setPatient({ ...patient, dischargeDate: dateString })
          }
        />
      </Col>

      {/* Button */}
      <Col span={4}>
        <Button type="primary" onClick={mutate} style={{ width: "100%" }}>
          {buttonText}
        </Button>
      </Col>
    </Row>
  );
};

PatientsData.propTypes = {
  patient: PropTypes.object.isRequired,
  setPatient: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

export default PatientsData;
