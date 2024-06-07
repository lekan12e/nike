import ServiceCard from "../components/ServiceCard"
import { services } from "../consts"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((services) => (
        <ServiceCard imgURL={services.imgURL} label={services.label} subtext={services.subtext} />
      ))}
    </section>
  )
}

export default Services