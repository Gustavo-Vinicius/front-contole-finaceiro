import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ControleFinaceiro } from "../pages/controlefinaceiro";
import { BASENAME } from "../shared/configs/app";

export const AppRoutes = () => {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<ControleFinaceiro/>}/>
        <Route path="/*" element={<Navigate to ="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
};
