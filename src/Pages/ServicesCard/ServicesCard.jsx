import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ServicesCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-[#FF3811] text-xl'>Price: ${price}</p>
                <div className="card-actions flex justify-end">
                    <button className="text-[#ff3811] text-2xl">
                        <BsFillArrowRightCircleFill/>
                    </button>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object
}

export default ServicesCard;