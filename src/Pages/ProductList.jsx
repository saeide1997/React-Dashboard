import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

const ProductList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'productName', headerName: 'نام ', width: 250,
          renderCell: (params)=>{
            return(
              <div className='flex justify-center items-center'>
                <img className='w-10 h-10 ml-2' src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="userImage" />
                {params.row.productName}
              </div>
            )
          }
         },
        { field: 'stock', headerName: 'موجودی', width: 150 },
        { field: 'price', headerName: 'قیمت', width: 150 },
        // { field: 'transaction', headerName: 'تراکنش', width: 150 },
        { field: 'action', headerName: 'عملیات', width: 150, renderCell:(params)=>{
          return(
            <>
            <Link to={"/product/"+params.row.id}>
              <button className='ml-2 bg-green-600 h-7 w-11 flex justify-center text-white rounded-md items-center'>ویرایش</button>
            </Link>
            <DeleteOutline className='text-red-700' onClick={()=>handleDelete(params.row.id)}/>
            </>
          )
        }
       },
      ];

    const rows = [
        { id: 1, productName: 'Hello', stock: 'World', price: 120000 },
        { id: 2, productName: 'DataGridPro', stock: 'is Awesome', price: 120000  },
        { id: 3, productName: 'MUI', stock: 'is Amazing', price: 120000  },
      ];

      const [data, setData] = useState(rows)

  const handleDelete=(id)=>{
    setData(data.filter((item)=> item.id !== id))
  }

    return (
        <div className='flex-4 mx-[50px] h-[85vh] mb-5 mt-2' >
             <DataGrid className='w-[95%]' rows={rows} disableRowSelectionOnClick columns={columns} checkboxSelection />
        </div>
    );
};

export default ProductList;