import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("footer-wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("out-awards")}>
          <h2 className={cx("out-awards-title")}>Our Awards</h2>
          <p className={cx("out-awards-content")}>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <img
            className={cx("out-awards-img")}
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
          ></img>
        </div>
        <div className={cx("contact-info")}>
          <h2 className={cx("contact-info-title")}>Contact Info</h2>
          <div className={cx("info")}>
            <FontAwesomeIcon className={cx("icon-info")} icon={faPhone} />
            <p className={cx("text-info")}>1-567-124-44227</p>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon className={cx("icon-info")} icon={faMap} />
            <p className={cx("text-info")}>
              184 Main Street East Perl Habour 8007
            </p>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon className={cx("icon-info")} icon={faClock} />
            <p className={cx("text-info")}>
              Mon - Sat 8.00 - 18.00 Sunday CLOSED
            </p>
          </div>
          <div className={cx("info")}>
            <FontAwesomeIcon
              style={{ color: "#2d5f9a" }}
              className={cx("icon-app")}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              style={{ color: "#00c3f3" }}
              className={cx("icon-app")}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              style={{ color: "#cc181e" }}
              className={cx("icon-app")}
              icon={faYoutube}
            />
            <FontAwesomeIcon
              style={{ color: "#bd081c" }}
              className={cx("icon-app")}
              icon={faPinterest}
            />
          </div>
        </div>
        <div className={cx("recent-trips")}>
          <h2 className={cx("recent-trips-title")}>Recent Trips</h2>
          <div className={cx("inner-recent-trips")}>
            <a className={cx("recent-trips-img")}>
              <img
                className={cx("style-img")}
                src={
                  "	https://live.staticflickr.com/8688/28760131762_e4a64b20c4_b.jpg"
                }
              />
            </a>
            <a className={cx("recent-trips-img")}>
              <img
                className={cx("style-img")}
                src={
                  "	https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                }
              />
            </a>
            <a className={cx("recent-trips-img")}>
              <img
                className={cx("style-img")}
                src={
                  "	https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                }
              />
            </a>
            <a className={cx("recent-trips-img")}>
              <img
                className={cx("style-img")}
                src={
                  "	https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                }
              />
            </a>
            <a className={cx("recent-trips-img")}>
              <img
                className={cx("style-img")}
                src={
                  "	https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                }
              />
            </a>
            <a className={cx("recent-trips-img")}>
              <img
                className={cx("style-img")}
                src={
                  "https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                }
              />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
