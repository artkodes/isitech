import React, { useRef, useState } from "react";

//ant css
import "antd/dist/antd.css";

//routes
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Model from "./pages/model";
import BookModel from "./pages/book";
import BecamModel from "./pages/becam_model";
import AllModels from "./pages/all_models";

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./responsive/responsive.scss";

//redux
import { Provider } from "react-redux";
import store from "./redux/stores";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/model/:id", name: "Home", Component: Model },
  { path: "/book-model/:id", name: "Home", Component: BookModel },
  { path: "/becam-model", name: "Home", Component: BecamModel },
  { path: "/models", name: "Models", Component: AllModels }
];

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
