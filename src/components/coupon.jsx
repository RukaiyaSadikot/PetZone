import dog from '../assets/images/coupon/dog.png';
import leash from '../assets/images/coupon/leash.png';

export default function Coupon() {
    return (
        <section className="coupon ">
            <div className="container">
                <img src={leash} alt="" className='coupon-leash' />
                <h2>Don't Miss Out! Save 20% on Everything    </h2>
<button className="btn-coupon">
  <svg className="btn-coupon-border" width="100%" height="100%">
    <rect x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="10" ry="10" />
  </svg>
  <span>WERKOKT12</span>
</button>                <img src={dog} alt="" className='coupon-pup' />
            </div>
        </section>
    );
}