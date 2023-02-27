import { useEffect } from "react";
import Home from "./components/Home";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
