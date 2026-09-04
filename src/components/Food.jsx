import paw from '../assets/images/paw.svg';

export default function Food() {
    return (
        <section className="food ">
            <div className="container">
                <img src={paw} alt="" height="37px" width="37px" className='' />
                <p className=''>FOOD & SUPPLEMENTS</p>
                <h1 className='title'>Explore Categories</h1>
                <div className="row">
                    <div className="food-card">
                        <div className="food-card-img card1"></div>
                        <div className="food-card-content">
                            <h3>Wet Foods</h3>
                            <p>156 items</p>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-card-img card2"></div>
                        <div className="food-card-content">
                            <h3>Flavoured Foods</h3>
                            <p>226 items</p>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-card-img card3"></div>
                        <div className="food-card-content">
                            <h3>Dry Foods</h3>
                            <p>200 items</p>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-card-img card4"></div>
                        <div className="food-card-content">
                            <h3>Seed Mixes</h3>
                            <p>100 items</p>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-card-img card5"></div>
                        <div className="food-card-content">
                            <h3>Pellete Foods</h3>
                            <p>125 items</p>
                        </div>
                    </div>

                </div>
                </div>
        </section>
    );
}