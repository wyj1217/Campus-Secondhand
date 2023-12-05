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
import Search from "../views/Search";
import InverstmentAndWithdrawal from "../views/Home/InvestmentAndWithdrawal";

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
    path: "/InverstmentAndWithdrawal",
    element: <InverstmentAndWithdrawal />,
  },
]);
