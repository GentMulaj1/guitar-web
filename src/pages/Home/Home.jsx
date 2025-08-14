import "./Home.scss";
import BrowseTopQuality from "../../component/Home/BrowseTopQuality/BrowseTopQuality";
import FeaturingTheBestBrand from "../../component/Home/FeaturingTheBestBrand/FeaturingTheBestBrand";
import WhyTryVibeStrings from "../../component/Home/WhyTryVibeStrings/WhyTryVibeStrings";
import FavoriteGuitars from "../../component/Home/FavoriteGuitars/FavoriteGuitars";

const Home = () => {
  return (
    <div className="Home">
      <BrowseTopQuality />
      <FeaturingTheBestBrand />
      <WhyTryVibeStrings />
      <FavoriteGuitars />
    </div>
  );
};

export default Home;
