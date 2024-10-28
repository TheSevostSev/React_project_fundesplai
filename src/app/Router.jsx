import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PatientsPage from "../pages/PatientsPage";
import CreatePatientPage from "../pages/CreatePatientPage";
import PatientPage from "../pages/PatientPage";

const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/patients/:id" element={<PatientPage />} />
        <Route path="/patients/create" element={<CreatePatientPage />} />

        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default Router;
