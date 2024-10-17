import PropTypes from "prop-types";

const PersonShow = ({ person }) => {
  return (
    <>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.age}</td>
    </>
  );
};

PersonShow.propTypes = {
  person: PropTypes.object,
};

export default PersonShow;
