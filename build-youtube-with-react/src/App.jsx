import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import useLocationChange from "./hooks/useLocationChange";
import Channel from "./pages/Channel";
import History from "./pages/History";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LikedVideos from "./pages/LikedVideos";
import MyVideos from "./pages/MyVideos";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Subscriptions from "./pages/Subscriptions";
import Trending from "./pages/Trending";
import WatchVideo from "./pages/WatchVideo";
import Container from "./styles/Container";

function App() {
  return (
    <>
      {/* Navbar */}
      {/* Sidebar */}
      {/* MobileNavbar */}
      <Container>{/* Routes */}</Container>
    </>
  );
}

export default App;
