import ServicesCss from './Services.module.css';
import ServiceImag1 from './../../assets/Image/service-icon1.png';
import ServiceImag2 from './../../assets/Image/service-icon2.png';
import { servicesData } from '../../assets/Data/Data';

const Services = () => {
    return (
        <section className={ServicesCss.services}>
            <div className={ServicesCss.service_head}>
                <h2>What We do</h2>
            </div>

            <img
                src={ServiceImag1}
                alt=""
                className={ServicesCss.service_shape}
            />
            <img
                src={ServiceImag2}
                alt=""
                className={`${ServicesCss.service_shape} ${ServicesCss.service_shape2}`}
            />

            <div className={ServicesCss.service_content}>
                {servicesData.map((service) => (
                    <div key={service.id} className={ServicesCss.service_item}>
                        <span>{service.id}</span>
                        <h1>{service.title}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
