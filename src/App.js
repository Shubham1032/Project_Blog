import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Home from "./Pages/Home";
import Hollywood from "./Pages/Hollywood";
import Bollywood from "./Pages/Bollywood";
import Technology from "./Pages/Technology";
import Fitness from "./Pages/Fitness";
import Food from "./Pages/Food";
import SingleBlogPage from "./Pages/SingleBlogPage";
import Details from "./Pages/Details";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Details>
        <Header />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path=":category/articleid" element={<SingleBlogPage />} />
            <Route path="*" element={<DetailPage/>} />
          </Routes>
        </BrowserRouter>
      </Details>
    </div>
  )
}
export default App;