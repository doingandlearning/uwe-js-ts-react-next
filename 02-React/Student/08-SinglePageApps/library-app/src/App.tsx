import React from 'react';
import DataProvider from './DataProvider'
import Menu from './Menu';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Books from './Books';
import Films from './Films';
import MoreStuff from './MoreStuff';
import PageNotFound from './PageNotFound';

function App() {

  const books = DataProvider.getAllBooks()
  const films = DataProvider.getAllFilms()

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} format="TABLE" />} />
        <Route path="/films" element={<Films films={films} format="TABLE" />} />
        <Route path="/morestuff" element={<MoreStuff books={books} films={films} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
