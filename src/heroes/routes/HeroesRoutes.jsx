import { Navbar } from "../../ui";
import { Route, Routes, Navigate } from "react-router-dom";
import { Dc, Hero, Marvel, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<Dc />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
