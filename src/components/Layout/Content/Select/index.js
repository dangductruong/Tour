import classNames from "classnames/bind";
import styles from "./Select.module.scss";
const cx = classNames.bind(styles);
function Select({ list = [] }) {
  return (
    <div className={cx("select-wrapper")}>
      <select className={cx("select")}>
        {list.map((item, index) => {
          return <option key={index}>{item.value}</option>;
        })}
      </select>
    </div>
  );
}

export default Select;
