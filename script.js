import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const logoSrc =
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("header", { className: "App-header" }, /*#__PURE__*/
    React.createElement("img", { src: logoSrc, className: "App-logo", alt: "logo" }), /*#__PURE__*/
    React.createElement("p", null, "Edit ", /*#__PURE__*/
    React.createElement("code", null, "src/App.js"), "!"), /*#__PURE__*/

    React.createElement("a", {
      className: "App-link",
      href: "https://reactjs.org",
      target: "_blank",
      rel: "noopener noreferrer" }, "Learn React"))));






}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));