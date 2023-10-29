import image1 from '../../assets/images/banner/1.jpg'
import image2 from '../../assets/images/banner/2.jpg'
import image3 from '../../assets/images/banner/3.jpg'
import image4 from '../../assets/images/banner/4.jpg'
import image5 from '../../assets/images/banner/5.jpg'
import image6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel h-[650px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-24">
                    <div className='space-y-7 w-1/3'>
                        <h2 className='text-6xl text-white text-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 mr-5 text-lg font-semibold'>Discover More</button>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-24">
                    <div className='space-y-7 w-1/3'>
                        <h2 className='text-6xl text-white text-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 mr-5 text-lg font-semibold'>Discover More</button>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-24">
                    <div className='space-y-7 w-1/3'>
                        <h2 className='text-6xl text-white text-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 mr-5 text-lg font-semibold'>Discover More</button>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-24">
                    <div className='space-y-7 w-1/3'>
                        <h2 className='text-6xl text-white text-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 mr-5 text-lg font-semibold'>Discover More</button>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={image5} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-24">
                    <div className='space-y-7 w-1/3'>
                        <h2 className='text-6xl text-white text-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 mr-5 text-lg font-semibold'>Discover More</button>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={image6} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-24">
                    <div className='space-y-7 w-1/3'>
                        <h2 className='text-6xl text-white text-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 mr-5 text-lg font-semibold'>Discover More</button>
                            <button className='btn btn-outline border-white text-white hover:bg-orange-600 text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;