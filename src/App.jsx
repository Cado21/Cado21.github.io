import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CustomPage from "./pages/CustomPage";
import SearchGlassPage from "./pages/SearchGlassPage";
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route exact  path="/" element={<SearchGlassPage />}/>
        <Route path="/stitch" element={<CustomPage />} />
        <Route path="/users" element={<Users />}/>
      </Routes>
    </div>
  );
}

function Home() {
  return <div className="container">
    <h2>Home</h2>
    </div>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;