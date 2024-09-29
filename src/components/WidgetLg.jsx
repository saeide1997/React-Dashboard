import React from "react";

const WidgetLg = () => {
  return (
    <div className="flex-2 shadow p-5 ml-5">
     <span className="text-3xl">آخرین تراکنشها</span>
     <table className="border-separate border-spacing-6 w-full">
        <thead className="text-justify">
            <th className="">مشتری</th>
            <th className="">تاریخ</th>
            <th className="">مقدار</th>
            <th className="">وضعیت</th>
        </thead>
        <tbody className="">
            <td className="flex">
                <img className="w-10 h-10 object-cover rounded-full ml-5" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                <span className="">سعیده تاج مهر</span>
            </td>
            <td className="mr-6 text-gray-500">1403/01/01
            </td>
        <td className="mr-6 text-gray-500">200000</td>
            <td className="mr-6">
                <button className=" p-1 rounded-l bg-green-100 text-green-700">تایید شده</button>
            </td>
        </tbody>
     </table>
    </div>
  );
};

export default WidgetLg;
