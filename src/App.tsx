import React from "react";
import StudentManagement from "./components/StudentManagement";
import CourseManagement from "./components/CourseManagement";
import UpdateStudent from "./components/UpdateStudent";
import DepartmentManagement from "./components/DepartmentManagement";
import DepartmentDetail from "./components/DepartmentDetail";
import CourseEnrollment from "./components/CourseEnrollment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/" element={<Menu />} />
          <Route path="/courses" element={<CourseManagement />} />
          <Route path="/departments" element={<DepartmentManagement />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/editStudent/:id" element={<UpdateStudent />} />
          <Route path="/enrollment/:id" element={<CourseEnrollment />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
