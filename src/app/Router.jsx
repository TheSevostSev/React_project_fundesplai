import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import SendMessagePage from "../pages/SendMessagePage";
import PrivateRoute from "../components/PrivateRouter";
import MyMessagesPage from "../pages/MyMessagesPage";

const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/send-message"
          element={<PrivateRoute component={SendMessagePage} />}
        ></Route>
        <Route
          path="/my-messages"
          element={<PrivateRoute component={MyMessagesPage} />}
        ></Route>

        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default Router;
