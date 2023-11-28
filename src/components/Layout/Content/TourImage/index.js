import classNames from "classnames/bind";
import styles from "./TourImage.module.scss";

const cx = classNames.bind(styles);
function TourImage({ srcImage, nameImage }) {
  return (
    <a className={cx("tour-image-link")}>
      <img className={cx("image-tour")} src={srcImage}></img>
      <h2 className={cx("name-image")}>{nameImage}</h2>
    </a>
  );
}

export default TourImage;
