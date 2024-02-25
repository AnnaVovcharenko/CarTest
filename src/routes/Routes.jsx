
import { Route, Routes } from "react-router-dom"; //Navigate,
// import { Layout } from "./Layout";
import { Home } from "../pages/Homepage";
import  { CatalogPage }  from "../pages/Catalogpage";
import { Favorites } from "../pages/Favoritepage";

export const AppRoutes = () => {
  return (
    <Routes>
           
        <Route index element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      
    </Routes>
  );
};

    // element={<Layout />}

