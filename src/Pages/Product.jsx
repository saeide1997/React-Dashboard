import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="flex-4 p-5 items-start">
            <div className=" flex justify-between items-center">
        <h1 className="">ویرایش محصولات</h1>
        <Link to={'/newProduct'}>
        <button className="w-20 p-1 bg-teal-500 rounded text-white ">
          ایجاد
        </button>
        </Link>
      </div>
        </div>
    );
};

export default Product;