import classNames from "classnames/bind";
import styles from "./Tokyo.module.scss";

const cx = classNames.bind(styles);
function Tokyo() {
  return (
    <div className={cx("Tokyo")}>
      <div className={cx("image-main")}>
        <img
          className={cx("image-main-content")}
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy.jpg"
        />
        <h1 className={cx("image-main-title")}>Tokyo</h1>
      </div>
      <div className={cx("content")}>
        <div className={cx("center")}>
          <h2>
            Today, Tokyo offers a seemingly unlimited choice of shopping,
            entertainment, culture and dining to its visitors.
          </h2>
          <br />
          <h1>Exploring the Area</h1>
          <p>
            Exercitation photo booth stumptown tote bag Banksy, elit small batch
            freegan sed. Craft beer elit seitan exercitation, photo booth et
            8-bit kale chips proident chillwave deep v laborum. Aliquip veniam
            delectus.
          </p>
          <img
            className={cx("img-content")}
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-1024x683.jpeg"
          />
          <h2>How to Get Around</h2>
          <p>
            Exercitation photo booth stumptown tote bag Banksy, elit small batch
            freegan sed. Craft beer elit seitan exercitation, photo booth et
            8-bit kale chips proident chillwave deep v laborum. Aliquip veniam
            delectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tokyo;
