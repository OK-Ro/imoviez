import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/nav";
import PagesRoutes from "./Pages/PagesRoutes";
import MovieContextProvider from "./context/movieContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <MovieContextProvider>
          <PagesRoutes />
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
