import girl from '../assets/images/hero/girl1.jpeg';
import plate from '../assets/images/hero/plate.svg';
import catGrey from '../assets/images/hero/cat-grey.png';
import catPeach from '../assets/images/hero/cat-peach.png';
import catYellow from '../assets/images/hero/cat-yellow.jpg';
import user from '../assets/images/hero/users.png';
import paw from '../assets/images/paw.svg';

export default function Hero() {
    return (
        <section className="hero row">
            <div className="col-6 hero-content">
                <img src={girl} alt="Woman holding a small dog" className="hero-portrait" />

                <h1 className="hero-title">
                    Committed To Pet Welfare <br />
                    <span className="hero-title-row">
                        <img src={catGrey} alt="" className="hero-title-thumb" />

                        Pets Family
                    </span>
                </h1>

                <p className='text-desc'>Ultrices dui sapien eget mi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.</p>

                <ul className="hero-checklist">
                    <li>
                        <span className="hero-paw">
                            <img src={paw} alt="" />
                        </span>
                        Training
                    </li>
                    <li>
                        <span className="hero-paw">
                            <img src={paw} alt="" />
                        </span>
                        Exercise And Play
                    </li>
                    <li>
                        <span className="hero-paw">
                            <img src={paw} alt="" />
                        </span>
                        Nutrition &amp; Feeding
                    </li>
                    <li>
                        <span className="hero-paw">
                            <img src={paw} alt="" />
                        </span>
                        Grooming
                    </li>
                    <li>
                        <span className="hero-paw">
                            <img src={paw} alt="" />
                        </span>
                        Walking
                    </li>
                    <li>
                        <span className="hero-paw">
                            <img src={paw} alt="" />
                        </span>
                        Medical Check-Ups
                    </li>
                </ul>
                <div className='cta'>
                    <button className='btn-primary'>
                        SHOP NOW
                    </button>
                    <img src={user} alt="" height="30px"  width="70px" />
                    <span>Pet Addicts</span>
                     
                </div>
            </div>

            <div className="col-6 hero-visual">
                <img src={plate} alt="" className="hero-plate" width="70" height="70" />
                <div className="hero-blob hero-blob-peach">
                    <img src={catPeach} alt="Fluffy white cat" />
                </div>
                <div className="hero-blob hero-blob-yellow">
                    <img src={catYellow} alt="Ginger kitten" />
                </div>
            </div>
        </section>
    );
}