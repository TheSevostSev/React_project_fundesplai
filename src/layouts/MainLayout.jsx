import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>
              <Link to="/">Home</Link>
            </h2>
            <h2 style={{ margin: "0 0 0 15px" }}>
              <Link to="/patients">Patients</Link>
            </h2>
          </li>
          <li
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>
              <Link to="/patients/create">Add patient</Link>
            </h2>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
