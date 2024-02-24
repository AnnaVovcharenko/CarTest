
import { Route, Routes } from "react-router-dom"; //Navigate,
// import { Layout } from "./Layout";
// import { Home } from "../pages/Home";
import  CatalogPage  from "./pages/Catalogpage";
// import { Favorites } from "../pages/Favorites";

export const App = () => {
  return (
    <Routes>
      
{/* <Route path="catalog" element={<CatalogPage />} /> */}

      <Route path="/" element={<CatalogPage />}  >
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="catalog" element={<CatalogPage />} /> */}
        {/* <Route path="favorites" element={<Favorites />} /> */}
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Route>
    </Routes>
  );
};

    // element={<Layout />}





// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import { Provider } from "react-redux";

// import {CarGalleryItem } from './components/CarGalleryItem/CarGalleryItem'

// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>  <Provider>
// <CarGalleryItem/>
//     </Provider>
     
//     </>
//   )
// }

// export default App