import React, { useRef, useState } from "react";

//ant css
import "antd/dist/antd.css";

//routes
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Home from "./pages/home";

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//redux
import { Provider } from "react-redux";
import store from "./redux/stores";

const routes = [{ path: "/", name: "Home", Component: Home }];

function App() {
  let mouseCursor = useRef(null);
  window.addEventListener("mousemove", cursor);

  function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  }
  return (
    <Provider store={store}>
      <Router>
        <div id='link' className='wrapper'>
          <Navbar />
          <div ref={el => (mouseCursor = el)} className='cursor'></div>
          {routes.map(({ path, Component, name }) => (
            <Route key={name} exact path={path} component={Component} />
          ))}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
