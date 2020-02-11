// import React, { useState, lazy, Suspense } from "react";
import React, { useState } from "react";
//import { render } from "react-dom";
import { Router, Link } from "@reach/router";
// import NavBar from "./NavBar";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import SearchParams from "./SearchParams";

//const Details = lazy(() => import("./Details"));

//const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
};

export default App;
