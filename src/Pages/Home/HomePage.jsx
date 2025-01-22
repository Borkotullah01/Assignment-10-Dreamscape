import ArtAndCraft from "../../Components/ArtAndCraft";
import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";

const HomePage = () => {

    return (
    <>
      <div className="h-[300px] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
      <Slider/>
      </div>
      <ArtAndCraft/>
    </>
    );
};

export default HomePage;