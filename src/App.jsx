import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import MoviesView from "./views/MoviesView";
import GenreView from "./views/GenreView";
import DetailView from "./views/DetailView";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/register" element={<RegisterView/>}/>
          <Route path="/movies" element={<MoviesView/>}>
            <Route path="genre/:genre_id" element={<GenreView/>}/>
            <Route path="details/:id" element={<DetailView/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App