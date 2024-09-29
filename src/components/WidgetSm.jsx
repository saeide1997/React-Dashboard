import React from 'react';
import { Visibility } from "@mui/icons-material";


const WidgetSm = () => {
    return (
        <div className='flex-1 shadow p-5 '>
             <span className="text-3xl">کاربران جدید</span>
      <ul className="m-0 p-0 w-full ">
        <li className="flex items-center justify-center my-5">
            <img className="w-10 h-10 rounded-full object-cover " src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
            <div className="flex flex-col mx-5">
                <span className="">سعیده تاجمهر</span>
                <span className="">برنامه نویس فرانت</span>
            </div>
            <button
            className="flex items-center border-none rounded-lg p-2 bg-violet-400/50 text-gray-800 cursor-pointer">
                <Visibility className="text-lg ml-1"/>
                مشاهده
            </button>
        </li>
      </ul>
        </div>
    );
};

export default WidgetSm;