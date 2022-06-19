import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from '../../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);
  return (
    <main className="categoriesContainer">
      <button className="checkStatus" type="button" onClick={() => dispatch(checkCategory())}>Check status</button>
      <h1 className="status">{status}</h1>
    </main>
  );
};

export default CategoriesPage;
