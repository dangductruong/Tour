import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import introVideo from "./Spectacular.mp4";

import {
  listCategories,
  listDestinations,
  listMonth,
  listSortByDate,
} from "./Select/DataSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "./Select";

import {
  faChevronCircleUp,
  faDollar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import StandardWrapper from "./StandardWrapper";
import TourImage from "./TourImage";
import TourItem from "./TourItem";
import ReasonsItem from "./ReasonsItem";
import Articles from "./Articles";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Content() {
  const [show, setShow] = useState(false);
  return (
    <div className={cx("wrapper-content")}>
      <div className={cx("container-center")}>
        <div className={cx("video-wrapper")}>
          <video
            className={cx("video-intro")}
            src={introVideo}
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div className={cx("content-intro")}>
          <div className={cx("center-intro")}>
            <div className={cx("title-intro-content")}>
              <StandardWrapper
                style={{ color: "white" }}
                title={"Where do you want to go?"}
                tagline={"Trips, experiences, and places. All in one service."}
              />
            </div>
            <div className={cx("button-wrapper")}>
              <div className={cx("wrapper-input")}>
                <input
                  className={cx("input")}
                  placeholder="Destination, city"
                ></input>
                <FontAwesomeIcon className={cx("icon")} icon={faSearch} />
              </div>
              <div className={cx("select")}>
                <Select list={listMonth} />
              </div>
              <div className={cx("select")}>
                <Select list={listSortByDate} />
              </div>

              <Link to={"/TourSearch"} className={cx("button-search")}>
                Search
              </Link>
            </div>
            {show && (
              <div className={cx("button-wrapper-more")}>
                <div className={cx("select")}>
                  <Select list={listCategories} />
                </div>
                <div className={cx("select")}>
                  <Select list={listDestinations} />
                </div>
                <div className={cx("wrapper-input")}>
                  <input
                    className={cx("input")}
                    placeholder="Max budget ex.500"
                  ></input>
                  <FontAwesomeIcon className={cx("icon")} icon={faDollar} />
                </div>
                <button className={cx("button-fake")}></button>
              </div>
            )}
            <div className={cx("click-show")}>
              <FontAwesomeIcon
                className={cx("icon-click-show")}
                icon={faChevronCircleUp}
              />

              <a
                href="#"
                className={cx("a-click-show")}
                onClick={() => setShow(!show)}
              >
                Advanced Search
              </a>
            </div>
          </div>
        </div>
        <div className={cx("center")}>
          <div className={cx("content-trip")}>
            <div className={cx("title-trip")}>
              <StandardWrapper
                title={"Popular Destinations"}
                tagline={"World's best tourist destinations"}
              />
            </div>
            <div className={cx("content-trip-inner")}>
              <div className={cx("container-25")}>
                <TourImage
                  href={"/tokyo"}
                  nameImage={"Tokyo"}
                  srcImage={
                    "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy.jpg"
                  }
                />
              </div>
              <div className={cx("container-25")}>
                <TourImage
                  href={"/seoul"}
                  nameImage={"Seoul"}
                  srcImage={
                    "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488.jpg"
                  }
                />
              </div>
              <div className={cx("container-25")}>
                <TourImage
                  href={"/paris"}
                  nameImage={"Paris"}
                  srcImage={
                    "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4.jpg"
                  }
                />
              </div>
              <div className={cx("container-25")}>
                <TourImage
                  href={"/vietnam"}
                  nameImage={"Viet Nam"}
                  srcImage={
                    "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg"
                  }
                />
              </div>
            </div>
            <div className={cx("title-trip")}>
              <StandardWrapper
                title={"Best Value Trips"}
                tagline={"Best offers trips from us"}
              />
            </div>
            <div className={cx("content-trip")}>
              <div className={cx("content-trip-inner")}>
                <div className={cx("container-33")}>
                  <TourItem
                    srcItem={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051.jpeg"
                    }
                    nameItem={"French Autumn"}
                    target={"City Tours, Urban"}
                    time={"5"}
                    price={"5,000"}
                  />
                </div>
                <div className={cx("container-33")}>
                  <TourItem
                    srcItem={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                    }
                    nameItem={"Grand Switzerland"}
                    target={"Shopping, Mountain, Snow & Ice"}
                    time={"6"}
                    price={"6,000"}
                  />
                </div>

                <div className={cx("container-33")}>
                  <TourItem
                    srcItem={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                    }
                    nameItem={"Discover Japan"}
                    target={"City Tours, Iconic"}
                    time={"4"}
                    cancelPrice={"3,000"}
                    price={"2,500"}
                  />
                </div>
              </div>
            </div>
            <div className={cx("title-trip")}>
              <StandardWrapper
                title={"Why Choose Us"}
                tagline={"Here are reasons you should plan trip with us"}
              />
            </div>
            <div className={cx("content-trip")}>
              <div className={cx("content-trip-inner")}>
                <div className={cx("container-33")}>
                  <ReasonsItem
                    src={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                    }
                    title={"Handpicked Hotels"}
                    tagline={
                      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                    }
                  />
                </div>
                <div className={cx("container-33")}>
                  <ReasonsItem
                    src={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
                    }
                    title={"World Class Service"}
                    tagline={
                      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                    }
                  />
                </div>
                <div className={cx("container-33")}>
                  <ReasonsItem
                    src={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                    }
                    title={"Best Price Guarantee"}
                    tagline={
                      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                    }
                  />
                </div>
              </div>
            </div>
            <div className={cx("width-max")}>
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
                className={cx("img-content")}
              />
            </div>
            <div className={cx("title-trip")}>
              <StandardWrapper
                title={"Articles & Tips"}
                tagline={"Explore some of the best tips from around the world"}
              />
            </div>
            <div className={cx("content-trip")}>
              <div className={cx("content-trip-inner")}>
                <div className={cx("container-33")}>
                  <Articles
                    src={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                    }
                    title={"Memorial Day to Someone Told Me to Travel"}
                    time={"DECEMBER 10, 2016"}
                    tagline={
                      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                    }
                  />
                </div>
                <div className={cx("container-33")}>
                  <Articles
                    src={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                    }
                    title={"Taking A Travel Blog Victory Lap"}
                    time={"DECEMBER 10, 2016"}
                    tagline={
                      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                    }
                  />
                </div>
                <div className={cx("container-33")}>
                  <Articles
                    src={
                      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                    }
                    title={"7 Tips For Nomads On A Budget Trips"}
                    time={"DECEMBER 10, 2016"}
                    tagline={
                      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
