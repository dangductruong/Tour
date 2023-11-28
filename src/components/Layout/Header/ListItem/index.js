import classNames from "classnames/bind";
import styles from "./ListItem.module.scss";
import Tippy from "@tippyjs/react/headless";
import ItemOption from "./ItemOption";
const cx = classNames.bind(styles);
function ListItem({ list, index }) {
  return (
    <Tippy
      interactive={true}
      placement="right-start"
      render={(attrs) => (
        <ul className={cx("list-option")} tabIndex="-1" {...attrs}>
          <ItemOption list={list.option} key={index} />
        </ul>
      )}
    >
      <li className={cx("link-wrapper")}>
        <a href="#" className={cx("link", "br")}>
          {list.title}
        </a>
        <span className={cx("icon")}>{list.icon}</span>
      </li>
    </Tippy>
  );
}

export default ListItem;
