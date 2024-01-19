import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import { useCheckAuth } from "./hooks/useCheckAuth";
import HeaderLaptop from "./components/header/headerLaptop";
import Home from "./pages/home/home";

const App = () => {
  const { isAuthenticated, status } = useCheckAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    console.log(status);
    // Cuando la autenticación se haya verificado, actualiza el estado
    setAuthChecked(true);
  }, [isAuthenticated, status]);

  // No renderiza nada hasta que la autenticación se haya verificado
  if (!authChecked && status !== "checking") {
    return null;
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <HeaderLaptop />
          <main className="lg:mx-5 pt-4 sm:mx-1 container">
            <Routes>
              <>
                <Route path="/" element={<Home />} />
              </>
            </Routes>
          </main>
        </>
      ) : (
        status !== "checking" && (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )
      )}
    </BrowserRouter>
  );
};

export default App;
