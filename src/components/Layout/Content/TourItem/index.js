import classNames from "classnames/bind";
import styles from "./TourItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);
function TourItem({ nameItem, cancelPrice, price, srcItem, target, time }) {
  return (
    <a className={cx("tour-item-link")}>
      <div className={cx("img")}>
        <img className={cx("item-img")} src={srcItem}></img>
        <div className={cx("price-wrapper")}>
          {cancelPrice && (
            <div className={cx("price-center")}>
              <FontAwesomeIcon className={cx("icon-cancel")} icon={faDollar} />
              <p className={cx("price-cancel")}>{cancelPrice}</p>
            </div>
          )}
          <div className={cx("price-center")}>
            <FontAwesomeIcon className={cx("icon-price")} icon={faDollar} />
            <p className={cx("price")}>{price}</p>
          </div>
        </div>
      </div>
      <div className={cx("content-wrapper")}>
        <h2 className={cx("name-item")}>{nameItem}</h2>
        <p className={cx("target-item")}>{target}</p>
        <div className={cx("icon-item")}>
          <div className={cx("icon-star")}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            <p className={cx("text-review")}>4 reviews</p>
          </div>
          <span className={cx("icon-clock")}>
            <FontAwesomeIcon icon={faClock} />
            <p className={cx("text-day")}>{time} days</p>
          </span>
        </div>
      </div>

      {cancelPrice && <div className={cx("stickerSale")}>sale</div>}
    </a>
  );
}

export default TourItem;
