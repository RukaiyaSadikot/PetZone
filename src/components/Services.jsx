import serv1 from '../assets/images/services/service1.jpeg';
import serv2 from '../assets/images/services/service2.jpeg';
import serv3 from '../assets/images/services/service3.jpeg';
import serv4 from '../assets/images/services/service4.jpeg';
import serv5 from '../assets/images/services/service5.jpeg';
import serv6 from '../assets/images/services/service6.jpeg';
import paw from '../assets/images/paw.svg';

export default function Services() {
    return (
        <section className="services ">
            <div className="container text-center justify-content-between">
                <img src={paw} alt="" height="37px" width="37px" className='' />
                <p className=''>OUR SERVICES</p>
                <h1 className='title'>Compassionate Care, Happy Pets</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="service-card">
                            <img src={serv1} alt="" />
                            <h5 className='title'>Dog Boarding</h5>
                            <p className='text-desc'>Rhoncus est pellentesque elit ullamcorper dignissim pulvinar etiam tincidunt lobortis. </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card">
                            <img src={serv2} alt="" />
                            <h5 className='title'>Dog Daycare</h5>
                            <p className='text-desc'>
                                Malesuada bibendum arcu vitae elementum curabitur. Donec pre vulputate sapien nec. </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card">
                            <img src={serv3} alt="" />
                            <h5 className='title'>Pet Food</h5>
                            <p className='text-desc'>Odio aenean sed adipiscing diam. Amet tellus aliquet eget adipiscing enim turpis. </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card">
                            <img src={serv4} alt="" />
                            <h5 className='title'>Veterinary Care</h5>
                            <p className='text-desc'>Tristique et egestas quis ipsum suspendisse. Dictum varius duis at consectetur donec. </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card">
                            <img src={serv5} alt="" />
                            <h5 className='title'>Dog Training</h5>
                            <p className='text-desc'>Tristique et egestas quis ipsum suspendisse. Dictum varius duis at consectetur donec. </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card">
                            <img src={serv6} alt="" />
                            <h5 className='title'>Dog Grooming</h5>
                            <p className='text-desc'>Auctor urna nunc id cursus metus aliquam. Tempor nisl mi. Ac feugiat lectus vestibulum. </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}