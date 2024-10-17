import PropTypes from "prop-types";

const Film = ({ title, genre, year, director }) => (
  <p>
    title: {title} genre: {genre} year:{year} director:{director}
  </p>
);

Film.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  director: PropTypes.string,
};

export default Film;
