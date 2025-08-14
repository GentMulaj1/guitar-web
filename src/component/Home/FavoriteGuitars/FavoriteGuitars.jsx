import "./FavoriteGuitars.scss";

const FavoriteGuitars = () => {
  return (
    <div className="FavoriteGuitars">
      <div className="FavoriteGuitars__Left">
        <p className="FavoriteGuitars__title satoshi48">
          Browse and buy your{" "}
          <span className="orangeFont">favorite guitars</span> with VibeStrings.
        </p>

        <div className="FavoriteGuitars__Left__apps">
          <span className="googleplay" />
          <span className="appstore" />
        </div>
      </div>

      <div className="FavoriteGuitars__Right"></div>
    </div>
  );
};

export default FavoriteGuitars;
