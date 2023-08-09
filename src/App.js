import { Route, Routes } from "react-router";
import './App.css';
import { Homepage } from "./pages/Homepage";
import { Header } from "./component/header/Header";
import { NavigationLeft } from "./component/navigationLeft/NavigationLeft";
import { NavigationRight } from "./component/NavigationRight/NavigationRight";
import { Comment } from "./comment/Comment";



function App() {
  return (
    <>
      <Header />
      <div className="App">



        <div>
          <NavigationLeft />
        </div>

        <div className="midContainer">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/comments/:postId" element={<Comment />} />
          </Routes>
        </div>

        <div>
          <NavigationRight />
        </div>

      </div>
    </>
  );
}

export default App;
