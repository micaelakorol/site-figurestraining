import Nav from "./Navigation/Nav";
import Amenities from "./OurAmenities/Amenities";
import Presentation from "./Navigation/Presentation";
import Footer from "./Footer/Footer";
const PageIndex = () => {
  return (
    <>
      <Nav />
      <Presentation />
      <Amenities />
      <Footer/>
    </>
  );
};

export default PageIndex;
