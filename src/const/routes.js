import {Home, NotFound, Classify, ProductDetail } from "../pages";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: ["/home", "/"],
    exact: true,
    component: () => {
      return (<Home />);
    },
  },
  {
    path: ["/category/:category"],
    exact: true,
    component: () => {
      return (<Classify />);
    },
  },
  {
    path: ["/product/:product"],
    exact: true,
    component: () => {
      return (<ProductDetail />);
    },
  },
  {
    path: "/YWRtaW4=",
    component: Home,
    exact: true,
  },
  {
    path: ["*"],
    exact: true,
    component: NotFound,
  },
];