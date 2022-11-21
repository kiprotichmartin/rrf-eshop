import "../style/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth, onAuthStateChanged } from "../utils/firebase";
import { login, logout, selectUser } from "../features/user/userSlice";
import AboutPage from "../common/pages/AboutPage";
import ContactPage from "../common/pages/ContactPage";
import HomePage from "../common/pages/HomePage";
import Error404Page from "../common/pages/Error404Page";
import LoginPage from "../common/pages/LoginPage";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import ProductCard from "../features/product/ProductCard";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <div className="App">
          <Header />
          <LoginPage />
          <Footer />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="home" element={<ProductCard />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
