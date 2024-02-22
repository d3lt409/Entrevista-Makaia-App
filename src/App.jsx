import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "./hooks/useCheckAuth";
import HeaderLaptop from "./components/header/headerLaptop";
import Home from "./pages/home/home";
import Form from "./components/Form/Form";
import Login from "./pages/login/Login";
import Entrevista from "./components/Entrevista/Entrevista";
import Agenda from "./components/Agenda/Agenda";

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
          <main className="pt-8 p-2">
            <Routes>
              <>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/entrevista" element={<Entrevista />} />
                <Route path="/agenda" element={<Agenda />} />
              </>
            </Routes>
          </main>
        </>
      ) : (
        status !== "checking" && (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aspirante:code"  element={<Login />} />
          </Routes>
        )
      )}
    </BrowserRouter>
  );
};

export default App;
