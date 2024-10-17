import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
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
          <li style={{ marginRight: "15px" }}>
            <h2>
              <Link to="/">Home</Link>
            </h2>
            <h2>
              <Link to="/query">Query</Link>
            </h2>
          </li>
          <li style={{ marginRight: "15px" }}>
            <h2>
              <Link to="/create">Create</Link>
            </h2>
          </li>
          <li style={{ marginRight: "15px" }}>
            <h2>
              <Link to="/delete">Delete</Link>
            </h2>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
