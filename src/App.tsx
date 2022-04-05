import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

const ROUTES = [{ path: "/", component: <HomePage></HomePage> }];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
