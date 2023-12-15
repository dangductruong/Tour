import classNames from "classnames/bind";
import styles from "./TourSearch.module.scss";
import TourItem from "../../components/Layout/Content/TourItem";

const cx = classNames.bind(styles);
function TourSearch() {
  return (
    <div className={cx("tour-search")}>
      <div className={cx("image-main")}>
        <img
          className={cx("image-main-content")}
          src="https://themes.themegoods.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
        />
        <div className={cx("image-main-title")}>
          <h1 className={cx("image-h1")}>Grand Tour</h1>
          <span style={{ color: "#d3d2d2" }}>
            This is sample of page tagline and you can set it up using page
            option
          </span>
        </div>
      </div>
      <div className={cx("content-trip")}>
        <div className={cx("content-trip-inner")}>
          <div className={cx("container-33")}>
            <TourItem
              srcItem={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051.jpeg"
              }
              nameItem={"French Autumn"}
              target={"City Tours, Urban"}
              time={"5"}
              price={"5,000"}
            />
          </div>
          <div className={cx("container-33")}>
            <TourItem
              srcItem={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
              }
              nameItem={"Grand Switzerland"}
              target={"Shopping, Mountain, Snow & Ice"}
              time={"6"}
              price={"6,000"}
            />
          </div>

          <div className={cx("container-33")}>
            <TourItem
              srcItem={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
              }
              nameItem={"Discover Japan"}
              target={"City Tours, Iconic"}
              time={"4"}
              cancelPrice={"3,000"}
              price={"2,500"}
            />
          </div>
        </div>
        <div className={cx("content-trip-inner")}>
          <div className={cx("container-33")}>
            <TourItem
              srcItem={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051.jpeg"
              }
              nameItem={"French Autumn"}
              target={"City Tours, Urban"}
              time={"5"}
              price={"5,000"}
            />
          </div>
          <div className={cx("container-33")}>
            <TourItem
              srcItem={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
              }
              nameItem={"Grand Switzerland"}
              target={"Shopping, Mountain, Snow & Ice"}
              time={"6"}
              price={"6,000"}
            />
          </div>

          <div className={cx("container-33")}>
            <TourItem
              srcItem={
                "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
              }
              nameItem={"Discover Japan"}
              target={"City Tours, Iconic"}
              time={"4"}
              cancelPrice={"3,000"}
              price={"2,500"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourSearch;
