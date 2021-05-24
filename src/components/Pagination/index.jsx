import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const items = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    items.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
        {items.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="/" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
