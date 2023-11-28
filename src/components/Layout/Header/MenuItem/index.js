import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import ListItem from "../ListItem";

const cx = classNames.bind(styles);
function MenuItem({ datas = [], title }) {
  const renderitem = () => {
    return datas.map((data, index) => {
      return <ListItem key={index} list={data} index={index} />;
    });
  };

  return (
    <Tippy
      interactive={true}
      placement="bottom-start"
      render={(attrs) => (
        <ul className={cx("menu-list-tippy")} tabIndex="-1" {...attrs}>
          {renderitem()}
        </ul>
      )}
    >
      <div className={cx("item")}>
        <a href="#" className={cx("title-item")}>
          {title}
        </a>
        <FontAwesomeIcon
          className={cx("icon-item")}
          icon={faAngleDown}
        ></FontAwesomeIcon>
      </div>
    </Tippy>
  );
}

export default MenuItem;
