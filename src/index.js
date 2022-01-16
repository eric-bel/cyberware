import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useMediaQuery } from "react-responsive";

const BigScreen = ({ children }) => {
  const isBigScreen = useMediaQuery({ minWidth: 1367 });
  return isBigScreen ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1366 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <BigScreen>BigScreen</BigScreen>
      {/* <Default>Desktop or laptop or tablet</Default> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
