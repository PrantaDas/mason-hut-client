import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const { _id, name, img, description, minOrderQty, availableQty, pricePU } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl border border-r-red-200">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p><span className='text-success font-bold'>Min. Order Quantity: </span>{minOrderQty}</p>
                <p><span className='text-success font-bold'>Available Quantity: </span>{availableQty}</p>
                <p><span className='text-success font-bold'>Price: </span>{pricePU} $<small>(per unit)</small></p>
                <div class="card-actions">
                    <Link to={`/tools/${_id}`}><button class="btn btn-secondary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;