import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Header from "./components/common/Header"
import LanguagePage from "./pages/LanguagePage"
import CityPage from './pages/CityPage';
import CategoryPage from './pages/CategoryPage';
import MainPage1 from './pages/MainPage1';
import MainPage from './pages/MainPage';
import TalkPage from './pages/TalckPage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/main" element={<MainPage1 />} />
          <Route path="/talk" element={<TalkPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
