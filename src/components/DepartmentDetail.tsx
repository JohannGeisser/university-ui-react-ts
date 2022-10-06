/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DepartmentNavbar from "./DepartmentNavbar";
import CourseService from "../services/CourseService";
import DepartmentService from "../services/DepartmentService";
import { Course } from "./interfaces/Course";
import { Department } from "./interfaces/Department";

interface DetailState {
  courseList: Array<Course>;
  department: Department;
}

const DepartmentDetail = () => {
  const { id } = useParams();
  const [courseList, setCourseList] = React.useState<DetailState["courseList"]>(
    []
  );
  const [department, setDepartment] = React.useState<DetailState["department"]>(
    {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CourseService.getCoursesByDepartmentId(id!);
        const responseDep = await DepartmentService.getDepartmentById(id!);
        setCourseList(response.data);
        setDepartment(responseDep.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DepartmentNavbar />
      <h3>Courses in {department.depName} Department</h3>
      <ol>
        {courseList.map((course) => {
          return <li key={course.courseId}>{course.courseName}</li>;
        })}
      </ol>
      <div>
        <button
          onClick={() => navigate("/departments")}
          className="rounded--back"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DepartmentDetail;
