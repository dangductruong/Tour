import classNames from "classnames/bind";
import styles from "./StandardWrapper.module.scss";
const cx = classNames.bind(styles);
function StandardWrapper({ title, tagline, style }) {
  return (
    <div className={cx("standard-wrapper")}>
      <h2 className={cx("title")} style={style}>
        {title}
      </h2>
      <div className={cx("page-tagline")}>{tagline}</div>
    </div>
  );
}

export default StandardWrapper;
