import classNames from "classnames/bind";
import styles from "./TourImage.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function TourImage({ srcImage, nameImage, href }) {
  return (
    <>
      <Link to={href} className={cx("tour-image-link")}>
        <img className={cx("image-tour")} src={srcImage}></img>
        <h2 className={cx("name-image")}>{nameImage}</h2>
      </Link>
    </>
  );
}

export default TourImage;
