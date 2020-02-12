import React, { useState } from "react";
// import React, { useState, lazy, Suspense } from "react";
// import { render } from "react-dom";
import { Router, Link } from "@reach/router";
// import ThemeContext from "./ThemeContext";
import { Provider } from "react-redux";
import Details from "./Details";
import SearchParams from "./SearchParams";
import store from "./store";

// const Details = lazy(() => import("./Details"));

// const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  // const theme = useState("darkblue");
  return (
    // <ThemeContext.Provider value={theme}>
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        {/* <NavBar /> */}
        {/* <Suspense fallback={<h1>loading route ...</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </Provider>
    /* // </ThemeContext.Provider> */
  );
};

export default App;
