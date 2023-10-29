import PropTypes from 'prop-types';

const ProductsCard = ({ product }) => {
    const { image, title, price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl" />
            </figure>
            <div className="rating flex justify-center mt-5">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-[#FF3811] text-xl'>Price: ${price}</p>
            </div>
        </div>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object
};

export default ProductsCard;