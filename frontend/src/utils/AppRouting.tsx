import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Templates from "@/pages/templates/Templates";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="templates" />} />
        <Route path="templates" element={<Templates />} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
