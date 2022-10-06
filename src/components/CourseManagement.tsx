/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import CourseNavbar from "./CourseNavbar";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";
import CourseService from "../services/CourseService";
import DepartmentService from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initCourses } from "../app/features/courses/courseSlice";
import { initDepartments } from "../app/features/departments/departmentSlice";

const CourseManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await CourseService.getCourses();
        const departmentResponse = await DepartmentService.getDepartments();
        dispatch(initCourses(courseResponse.data));
        dispatch(initDepartments(departmentResponse.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CourseNavbar />
      <CourseList />
      <CourseForm />
      <div>
        <button onClick={() => navigate("/")} className="rounded--back">
          Back
        </button>
      </div>
    </div>
  );
};

export default CourseManagement;
