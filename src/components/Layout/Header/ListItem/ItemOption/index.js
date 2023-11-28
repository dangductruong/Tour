import classNames from "classnames/bind";
import styles from "./ItemOption.module.scss";
function ItemOption({ list = [] }) {
  const cx = classNames.bind(styles);
  return (
    <div>
      {list.map((item, index) => {
        return (
          <li className={cx("item-option")} key={index}>
            <a className={cx("link-option", "br-after")}>{item.text}</a>
          </li>
        );
      })}
    </div>
  );
}

export default ItemOption;
