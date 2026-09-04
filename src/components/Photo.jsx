import dog from '../assets/images/dogs.png';

export default function Photo() {
    return (
        <section className="photo ">
            <div className="container">
                <img src={dog} alt="" />
                </div>  
        </section>
    );
}