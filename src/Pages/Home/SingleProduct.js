import React from 'react' 
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const { name, img, price } = product;
    const navigate = useNavigate();
    return (
        <div className='w-full p-6 rounded-md shadow-md m-4'>
            <img src={img} alt="" />
            <h2 className='text-left font-medium text-lg my-2 mb-auto'>{name}</h2>
            <div className='flex justify-between items-center mt-16 mb-0 pt-full'>
                <h2 className='text-4xl text-secondary font-mono'>${price} </h2>
                <button type='button' className='btn btn-primary btn-sm m-0 ' onClick={()=> navigate(`/purchase/${product._id}`)}>Purchase</button>
            </div>
        </div>
    )
}
export default SingleProduct