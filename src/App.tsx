import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { ArticleDetails } from "./components/ArticleDetails";
import { Main } from './components/Main';
import NotFound from "./components/NotFound";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/details/:id' element={<ArticleDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
