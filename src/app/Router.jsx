import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import NarutoPage from "../pages/NarutoPage";
import Layout from "../layouts/MainLayout";
import QueryPage from "../pages/QueryPage";
import CreatePage from "../pages/CreatePage";
import DeletePage from "../pages/DeletePage";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/naruto-characters/:id" element={<NarutoPage />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/delete" element={<DeletePage />} />

        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
