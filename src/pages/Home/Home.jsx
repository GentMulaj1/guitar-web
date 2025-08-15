import "./Home.scss";
import { useEffect, useState } from "react";
import BrowseTopQuality from "../../component/Home/BrowseTopQuality/BrowseTopQuality";
import FeaturingTheBestBrand from "../../component/Home/FeaturingTheBestBrand/FeaturingTheBestBrand";
import WhyTryVibeStrings from "../../component/Home/WhyTryVibeStrings/WhyTryVibeStrings";
import FavoriteGuitars from "../../component/Home/FavoriteGuitars/FavoriteGuitars";
import { useFindAllBrands } from "../../hooks/useFindAllBrands";
import Loading from "../../component/shared/Loading/Loading";
import Footer from "../../component/shared/Footer/Footer";

const Home = () => {
  const { error, loading, data } = useFindAllBrands();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoading) return <Loading />;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="Home">
      <BrowseTopQuality />
      <FeaturingTheBestBrand linksForBrands={data} />
      <WhyTryVibeStrings />
      <FavoriteGuitars />
      <Footer/>
    </div>
  );
};

export default Home;
