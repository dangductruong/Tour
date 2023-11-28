import classNames from "classnames/bind";
import styles from "./Articles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Articles({ src, title, tagline, time }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("img")} src={src}></img>
      <div className={cx("content")}>
        <p className={cx("time")}>{time}</p>
        <h2 className={cx("title")}>{title}</h2>
        <p className={cx("tagline")}>{tagline}</p>
        <div className={cx("more")}>
          <p className={cx("text-more")}>Read More</p>
          <FontAwesomeIcon
            className={cx("icon-more")}
            icon={faChevronCircleRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
