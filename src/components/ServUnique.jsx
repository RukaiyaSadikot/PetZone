import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GoHeart } from 'react-icons/go';
import { LuSearch } from 'react-icons/lu';
import { FaRegStar, FaStar } from 'react-icons/fa';

import paw from '../assets/images/paw.svg';
import unq1 from '../assets/images/unique/serv1.jpg';
import unq2 from '../assets/images/unique/serv2.jpg';
import unq3 from '../assets/images/unique/serv3.jpg';
import unq4 from '../assets/images/unique/serv4.jpg';
import tear from '../assets/images/unique/tear.svg';
import shop1 from '../assets/images/unique/shop1.webp';
import shop2 from '../assets/images/unique/shop2.webp';
import shop3 from '../assets/images/unique/shop3.webp';

export default function ServUnique() {
    return (
        <section className="unq-service text-center">
            <div className="container">
                <img src={paw} alt="" height="37px" width="37px" />
                <p><br />UNIQUE SERVICES</p>
                <br />
                <h1 className='title'>From Tails To Tales, Explore Pet Stories</h1>
                <Swiper
                    className="clean-swiper"
                    spaceBetween={8}
                    slidesPerView={5}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    <SwiperSlide>
                        <div className="unq-card ">
                            <div className='unq-bg'>
                                <img src={tear} alt="" height="160px" width="160px" />
                            </div>
                            <div className="unq-card-inner">
                                <img src={unq1} alt="Specialized Pet Training" className='userv-img' />

                                <div className='d-flex justify-content-between'>

                                    <p className=' rating '>
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </p>
                                    <div className=''>3 weeks ago</div>

                                </div>
                            </div>
                            <div className="unq-content text-left">

                                <p>Specialised Pet Training</p>
                                <span className='text-desc'> <br />Aliquam pretium vitae quam eget tincidunt. Integer at efficitur turpis. Praesent sed imperdiet est.</span>
                            </div>
                            <hr className="unq-divider" />
                            <div className="prod d-flex">
                                <div className="prod-img">
                                    <img src={shop1} alt="" />
                                </div>
                                <div>
                                    <h4>Dental Dog Rope</h4>
                                </div>
                            </div>
                            <button className="btn-primary unq-btn">Select Options</button>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="unq-card ">
                            <div className='unq-bg'>
                                <img src={tear} alt="" height="160px" width="160px" />
                            </div>
                            <div className="unq-card-inner">
                                <img src={unq4} alt="Specialized Pet Training" className='userv-img' />

                                <div className='d-flex justify-content-between'>

                                    <p className=' rating '>
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </p>
                                    <div className=''>3 weeks ago</div>

                                </div>
                            </div>
                            <div className="unq-content text-left">

                                <p>Health Exam & Vaccination</p>
                                <span className='text-desc'> <br />Praesent sed imperdiet est. Aliquam pretium vitae quam eget tincidunt. Integer at efficitur turpis. </span>
                            </div>
                            <hr className="unq-divider" />
                            <div className="prod d-flex">
                                <div className="prod-img">
                                    <img src={shop2} alt="" />
                                </div>
                                <div>
                                    <h4>chicken Dry Food</h4>
                                </div>
                            </div>
                            <button className="btn-primary unq-btn">Select Options</button>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="unq-card ">
                            <div className='unq-bg'>
                                <img src={tear} alt="" height="160px" width="160px" />
                            </div>
                            <div className="unq-card-inner">
                                <img src={unq3} alt="Specialized Pet Training" className='userv-img' />

                                <div className='d-flex justify-content-between'>

                                    <p className=' rating '>
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </p>
                                    <div className=''>3 weeks ago</div>

                                </div>
                            </div>
                            <div className="unq-content text-left">

                                <p> Pet Photography</p>
                                <span className='text-desc'> <br />
                                Integer at efficitur turpis. Praesent sed imperdiet est. Aliquam pretium vitae quam eget tincidunt. </span>
                            </div>
                            <hr className="unq-divider" />
                            <div className="prod d-flex">
                                <div className="prod-img">
                                    <img src={shop3} alt="" />
                                </div>
                                <div>
                                    <h4>Nylon Dog Collar</h4>
                                </div>
                            </div>
                            <button className="btn-primary unq-btn">Select Options</button>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="unq-card ">
                            <div className='unq-bg'>
                                <img src={tear} alt="" height="160px" width="160px" />
                            </div>
                            <div className="unq-card-inner">
                                <img src={unq1} alt="Specialized Pet Training" className='userv-img' />

                                <div className='d-flex justify-content-between'>

                                    <p className=' rating '>
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </p>
                                    <div className=''>3 weeks ago</div>

                                </div>
                            </div>
                            <div className="unq-content text-left">

                                <p>Specialised Pet Training</p>
                                <span className='text-desc'> <br />Aliquam pretium vitae quam eget tincidunt. Integer at efficitur turpis. Praesent sed imperdiet est.</span>
                            </div>
                            <hr className="unq-divider" />
                            <div className="prod d-flex">
                                <div className="prod-img">
                                    <img src={shop1} alt="" />
                                </div>
                                <div>
                                    <h4>Dental Dog Rope</h4>
                                </div>
                            </div>
                            <button className="btn-primary unq-btn">Select Options</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}