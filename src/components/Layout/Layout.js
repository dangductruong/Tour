import className from "classnames/bind";
import styles from "./Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./Content/ButtonToTop";
const cx = className.bind(styles);
function Layout({ children }) {
  return (
    <div className={cx("wrapper-app")}>
      <div className={cx("header")}>
        <Header />
      </div>
      <div className={cx("content")}>
        {children}
        <div className={cx("footer")}>
          <Footer />
        </div>
      </div>
      <div className={cx("btn-to-top")}>
        <BackToTop />
      </div>
    </div>
  );
}

export default Layout;
