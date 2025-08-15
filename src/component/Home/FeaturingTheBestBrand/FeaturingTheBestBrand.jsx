import { useFindAllBrands } from "../../../hooks/useFindAllBrands";
import "./FeaturingTheBestBrand.scss";
import { Link } from "react-router-dom";

const FeaturingTheBestBrand = ({linksForBrands}) => {

  

  return (
    <div className="FeaturingTheBestBrand">
      <div className="FeaturingTheBestBrand__texts">
        <p className="satoshi44">
          Featuring the
          <span className="orangeFont"> Best Brands</span>
        </p>

        <p className="satoshi16">
          Select your preferred brand and explore our exquisite collection.
        </p>
      </div>

      <div className="FeaturingTheBestBrand__Brands">
        {linksForBrands.findAllBrands.map((brand) => {
          return <Link to={`guitars/${brand.name}/${brand.id}`} key={brand.id} style={{ backgroundImage: `url(${brand.image})` }} />;
        })}
      </div>
    </div>
  );
};

export default FeaturingTheBestBrand;
