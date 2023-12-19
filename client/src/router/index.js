import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GuidePage from "../views/Guide-Page";

import Home from "../views/Home";
import TreasureHouse from "../views/TreasureHouse";
import Publish from "../views/Publish";
import Book from '../views/Publish/Book'
import Unused from '../views/Publish/Unused'
import Recycle from '../views/Publish/Recycle'
import Message from "../views/Message";
import My from "../views/My";
import Taren from "../views/My/Taren/Taren"
import Goumai from "../views/My/Dingdan/Goumai"
import Fabu from "../views/My/Dingdan/Fabu"
import Shoucang from "../views/My/Dingdan/Shoucang"
import Maichu from "../views/My/Dingdan/Maichu"
import Search from "../views/Search";
import SearchResult from "../views/searchResult";
import InverstmentAndWithdrawal from "../views/Home/InvestmentAndWithdrawal";
import ToDoorRecycling from "../views/Home/ToDoorRecycling";
import NowRecycling from '../views/Home/ToDoorRecycling/NowRecycling'
import Youzhi from '../views/Home/Youzhi'
import Good from "../views/Home/Good";
import Detail from "../views/Home/Good/Detail";
import HotTopic from "../views/Home/HotTopic";
import TopicDetail from "../views/Home/HotTopic/TopicDetail";
import MyOrder from "../views/Home/ToDoorRecycling/MyOrder";
import Liao from "../views/Message/Liao";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GuidePage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/treasureHouse",
        element: <TreasureHouse />,
      },

      {
        path: "/message",
        element: <Message />,

      },
      {
        path: "/my",
        element: <My />,
      },
    ],

  },
  {
    path: "/liao",
    element: < Liao />,
  },
  //发布
  {
    path: "/publish",
    element: <Publish />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/unused",
    element: <Unused />,
  },
  {
    path: "/recycle",
    element: <Recycle />,
  },
  //搜索
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: '/searchResult',
    element: <SearchResult />
  },
  {
    path: "/InverstmentAndWithdrawal",
    element: <InverstmentAndWithdrawal />,
  },
  {
    path: '/toDoorRecycling',
    element: <ToDoorRecycling />
  },
  {
    path: '/nowRecycling',
    element: <NowRecycling />
  },
  {
    path: '/myorder',
    element: <MyOrder />
  },
  {
    path: '/youzhi',
    element: <Youzhi />
  },
  {
    path: '/good',
    element: <Good />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  //热门话题
  {
    path: '/hotTopic',
    element: <HotTopic />
  },
  //话题详情
  {
    path: '/topicDetail',
    element: <TopicDetail />
  },
  // 订单
  {
    path: "/goumai",
    element: <Goumai />
  },
  {
    path: "/maichu",
    element: <Maichu />
  },
  {
    path: "/fabu",
    element: <Fabu />
  },
  {
    path: "/shoucang",
    element: <Shoucang />
  },
  {
    path: "/taren",
    element: <Taren />
  }
]);
