import svg1 from '../assets/images/achievements/building.svg';
import svg2 from '../assets/images/achievements/svg2.svg';
import svg3 from '../assets/images/achievements/svg3.svg';
import svg4 from '../assets/images/achievements/svg4.svg';
import paw from '../assets/images/paw.svg';

export default function Achievements() {
    return (
        <section className="achievements ">
            <div className="container text-center justify-content-between">
                <img src={paw} alt="" height="37px" width="37px" className='' />
                <p className=''>WHAT WE DO</p>
                <h1 className='title'>Our Successful Achievements</h1>

                <div className="row justify-content-between">
                    <div className='achievement-domain'>
                        <button className='svg-btn btn1'>
                            <img src={svg1} alt="" />
                        </button>
                        <h3 className="title">
                            10K
                        </h3>
                        <h5>Worldwide <br /> Branches</h5>
                    </div>
                    <div className='achievement-domain'>
                        <button className='svg-btn btn2'>
                            <img src={svg2} alt="" />
                        </button>
                        <h3 className="title">
                            70K
                        </h3>
                        <h5>Client <br /> Fulfillment</h5>
                    </div><div className='achievement-domain'>
                        <button className='svg-btn btn3'>
                            <img src={svg3} alt="" />
                        </button>
                        <h3 className="title">
                            160+
                        </h3>
                        <h5>Profiecient <br /> Experts</h5>
                    </div><div className='achievement-domain'>
                        <button className='svg-btn btn4'>
                            <img src={svg4} alt="" />
                        </button>
                        <h3 className="title">
                            5+
                        </h3>
                        <h5>Years in the <br /> Field</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}