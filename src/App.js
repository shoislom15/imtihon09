import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Books from "./containers/Books";
import Categories from "./containers/Categories";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import MainSection from "./containers/MainSection";
import store from "./redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MainSection />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/books/:categoryBooks" element={<Books />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
