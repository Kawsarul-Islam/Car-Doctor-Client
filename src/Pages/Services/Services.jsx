import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-xl text-orange-500 font-bold text-center mb-5">Service</h3>
                <h2 className="text-5xl text-[#151515] font-bold text-center mb-5">Our Services</h2>
                <div className="w-[700px] mx-auto">
                    <p className="text-base font-normal text-center mb-12">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    services?.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-orange-400 text-orange-400 hover:text-orange-500 hover:bg-white hover:border-orange-600 text-base text-center mb-36">More Services</button>
            </div>
        </div>
    );
};



export default Services;