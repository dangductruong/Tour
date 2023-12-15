import Tokyo from "../Page/Home/PopularDestinations/Tokyo";
import Home from "../Page/Home";
import Paris from "../Page/Home/PopularDestinations/Paris";
import Seoul from "../Page/Home/PopularDestinations/Seoul";
import VietNam from "../Page/Home/PopularDestinations/VietNam";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Tokyo", component: Tokyo },
  { path: "/paris", component: Paris },
  { path: "/seoul", component: Seoul },
  { path: "/vietnam", component: VietNam },
];

export { publicRoutes };
