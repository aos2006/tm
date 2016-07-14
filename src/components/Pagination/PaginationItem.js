import React, { PropTypes } from 'react';import {Link} from 'react-router';function PaginationItem(props) {  const {item, index, section} = props;  console.log(props);  return (    <li className="pagination__item" key={index}>      <Link className="pagination__link" to={`/${section}/${item}`} activeClassName="pagination__link--active">        {item}      </Link>    </li>  )}PaginationItem.propTypes = {};export default PaginationItem