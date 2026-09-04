import { FaRegStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../assets/images/clean/img1.webp';
import img2 from '../assets/images/clean/img2.webp';
import img3 from '../assets/images/clean/img3.png';
import img4 from '../assets/images/clean/img4.webp';
import img5 from '../assets/images/clean/img5.webp';
import img6 from '../assets/images/clean/img6.webp';
import img7 from '../assets/images/clean/img7.webp';
import img8 from '../assets/images/clean/img8.png';
import paw from '../assets/images/paw.svg';

export default function CleanFood() {
    return (
        <section className="clean-food">
            <div className="container text-start justify-content-between">
                <div className="clean-food-inner">
                    <img src={paw} alt="" height="37px" width="37px" className='' />
                    <br />
                    <p className=''>CLEAN FOODS</p>
                    <br />
                    <h1 className='title'>Choose Best - Reviewed <br /> Pet Foods</h1>

                    <Swiper
                        className="clean-swiper"
                        spaceBetween={8}
                        slidesPerView={5}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img1} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>High Protien Dry Foods</p>
                                    <span>$6.15-$6.35</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img2} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>High Nutrition Foods</p>
                                    <span>$4.80-$5.30</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img3} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>Meat Dry Cat Food</p>
                                    <span>$5.40-$8.85</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img4} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>Chicken Dry Foods</p>
                                    <span>$8.30-$10.70</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img5} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>Chicken Flavour bisquit</p>
                                    <span>$8.15-$9.20</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img6} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>Canine Bone Meals</p>
                                    <span>$7.40-$8.50</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img7} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>Tuna Flavour Dog Food</p>
                                    <span>$8.10-$8.85</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="clean-card text-center">
                                <div className="clean-card-img">
                                    <img src={img8} alt="Specialized Pet Training" />
                                    <div className="clean-icon">
                                        <GoHeart />
                                        <br />
                                        <LuSearch />
                                    </div>
                                </div>
                                <div className="clean-content">
                                    <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                                    <br />
                                    <p>Chicken Flavour Chunks</p>
                                    <span>$8.85-$9.85</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="btn-swiper">
                        <button>Prev</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>

        </section>
    );
}