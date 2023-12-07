import className from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import {
  listBlog,
  listBocking,
  listDestinations,
  listHome,
  listPages,
  listShop,
  listShortcodes,
  listTours,
  listMobieMenu,
} from "./DataListMenu/list";
import ItemMobieMenu from "./ItemMobieMenu";

const cx = className.bind(styles);
function Header() {
  function handle(event) {
    const { checked } = event.target;
    if (checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <div className={cx("wrapper-header")}>
      <div className={cx("wrapper-header-center")}>
        <div className={cx("logo-wrapper")}>
          <div className={cx("logo-align")}>
            <img
              width="92px"
              height="22px"
              src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
              alt=""
            />
          </div>
        </div>
        <div className={cx("menu-center")}>
          <div className={cx("menu")}>
            <div className={cx("menu-wrapper")}>
              <ul className={cx("list-menu")}>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Home"} datas={listHome} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Tours"} datas={listTours} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Booking"} datas={listBocking} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Destinations"} datas={listDestinations} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Pages"} datas={listPages} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Blog"} datas={listBlog} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Shortcodes"} datas={listShortcodes} />
                </li>
                <li className={cx("menu-item")}>
                  <MenuItem title={"Shop"} datas={listShop} />
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("logo-right-option")}>
            <label className={cx("bar-icon")} htmlFor="checkbox-show">
              <FontAwesomeIcon icon={faBars} />
            </label>
            <a className={cx("shop-icon")}>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </a>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="checkbox-show"
        className={cx("bar-checkbox")}
        onChange={handle}
        hidden
      ></input>
      <label htmlFor="checkbox-show" className={cx("layout")}></label>
      <div className={cx("mobieMenu")}>
        <label htmlFor="checkbox-show" className={cx("btn-close")}>
          <FontAwesomeIcon icon={faXmark} />
        </label>
        <ul className={cx("list-mobieMenu")}>
          <ItemMobieMenu list={listMobieMenu} />
        </ul>
      </div>
    </div>
  );
}

export default Header;
