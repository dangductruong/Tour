import Home from "../Page/Home";
import Tokyo from "../Page/PopularDestinations/Tokyo";
import Paris from "../Page/PopularDestinations/Paris";
import Seoul from "../Page/PopularDestinations/Seoul";
import VietNam from "../Page/PopularDestinations/VietNam";
import TourSearch from "../Page/TourSearch";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Tokyo", component: Tokyo },
  { path: "/paris", component: Paris },
  { path: "/seoul", component: Seoul },
  { path: "/vietnam", component: VietNam },
  { path: "/TourSearch", component: TourSearch },
];

export { publicRoutes };
