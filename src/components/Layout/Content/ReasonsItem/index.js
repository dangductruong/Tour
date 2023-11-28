import classNames from "classnames/bind";
import styles from "./ReasonsItem.module.scss";
const cx = classNames.bind(styles);
function ReasonsItem({ src, title, tagline }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("img")} src={src}></img>
      <div className={cx("content")}>
        <h2 className={cx("title")}>{title}</h2>
        <p className={cx("tagline")}>{tagline}</p>
      </div>
    </div>
  );
}

export default ReasonsItem;
