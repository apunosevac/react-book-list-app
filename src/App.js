import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

import BooksPage from "./pages/BooksPage";
import Detail from "./pages/Detail";
import bookData from "./bookData.json";

export const MyContext = createContext(null);

const App = () => {

  return (
    <MyContext.Provider value={bookData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<BooksPage />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}
 
export default App;
