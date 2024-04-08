import {
  ContainerAmenities,
  ContainerCard,
  TitleAmenities,
} from "../../../styles/OurAmenities";
import { Link } from "react-router-dom";
import cardsAmenities from "./data/CardAmenities";

const Amenities = () => {
  return (
    <ContainerAmenities>
      <TitleAmenities>Our Amenities</TitleAmenities>
      <ContainerCard>
        {cardsAmenities.map((item) => (
          <ul key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <li>{item.description}</li>
            <Link to='/'>{item.button}</Link>
          </ul>
        ))}
      </ContainerCard>
    </ContainerAmenities>
  );
};

export default Amenities;
