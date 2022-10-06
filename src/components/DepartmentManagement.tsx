/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import DepartmentNavbar from "./DepartmentNavbar";
import DepartmentList from "./DepartmentList";
import DepartmentForm from "./DepartmentForm";
import DepartmentService from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initDepartments } from "../app/features/departments/departmentSlice";

const DepartmentManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DepartmentService.getDepartments();
        dispatch(initDepartments(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DepartmentNavbar />
      <DepartmentList />
      <DepartmentForm />
      <div>
        <button onClick={() => navigate("/")} className="rounded--back">
          Back
        </button>
      </div>
    </div>
  );
};

export default DepartmentManagement;
