import classNames from "classnames/bind";
import styles from "./ItemMobieMenu.module.scss";
const cx = classNames.bind(styles);
function ItemMobieMenu({ list = [] }) {
  console.log(list);
  return (
    <>
      {list.map((item, index) => {
        return (
          <li className={cx("item-mobieMenu")} key={index}>
            <a className={cx("link-mobieMenu")}>{item.title}</a>
          </li>
        );
      })}{" "}
    </>
  );
}

export default ItemMobieMenu;
