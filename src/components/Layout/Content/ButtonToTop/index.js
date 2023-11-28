import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BackToTop.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button className={cx("btn-to-top")} onClick={scroll}>
          <FontAwesomeIcon className={cx("icon")} icon={faChevronUp} />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
