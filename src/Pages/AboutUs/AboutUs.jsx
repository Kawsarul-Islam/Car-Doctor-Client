import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 right-5 top-1/2 absolute rounded-lg shadow-2xl border-white border-8" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-3xl text-orange-500 font-bold mb-5'>About Us</h3>
                    <h1 className="text-5xl font-bold w-[400px] leading-tight">We are qualified & of experience in this field</h1>
                    <p className="mt-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <p className="mt-5 mb-8">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] hover:bg-[#ed4827] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;