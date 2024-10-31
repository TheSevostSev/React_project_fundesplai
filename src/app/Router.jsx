import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamsPage from "../pages/TeamsPage";
import TeamPage from "../pages/TeamPage";
import TeamSelectorPage from "../pages/TeamSelectorPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<TeamsPage />} />
      <Route path="/teams/:id" element={<TeamPage />} />
      <Route path="/teams/selector" element={<TeamSelectorPage />} />

      {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
