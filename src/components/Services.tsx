import { IServiceItem } from "../types/servicesItem";
import { ServiceItem } from "./ServiceItem";
import { useEffect, useState } from "react";

export function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return (
        <section className="service">
        <div className="container">
            <h2>
            The service we offer is specifically designed to meet your needs.
            </h2>
            <div className="service-list">
            {services.map((service: IServiceItem) => (
                <ServiceItem
                    key={service.id}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                />
            ))}
            </div>
        </div>
        </section>
    );
}
