import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from '../../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);
  return (
    <div>
      <h1>Categories</h1>
      <button type="button" onClick={() => dispatch(checkCategory())}>Check status</button>
      <p className="status">{status}</p>
    </div>
  );
};

export default CategoriesPage;
