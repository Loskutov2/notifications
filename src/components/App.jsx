import DetailsPage from "Pages/DetailsPage";
import MainPage from "Pages/MainPage";
import NotFound from "Pages/NotFound";
import NotiFormPage from "Pages/NotiFormPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path=":id" element={<DetailsPage/>}/>
      <Route path="edit/:id" element={<NotiFormPage/>}/>
      <Route path="new" element={<NotiFormPage/>}/>
      <Route path="*" element={<NotFound reason='adress'/>}/>
      <Route path="notFound" element={<NotFound reason='id'/>}/>     
    </Routes>
  );
};
