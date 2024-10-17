import PropTypes from "prop-types";

const Book = ({ title, author, year }) => (
  <p>
    title: {title} author: {author} year:{year}
  </p>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.string,
};

export default Book;
