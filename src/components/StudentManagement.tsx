/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from "react";
import StudentNavbar from "./StudentNavbar";
import Forms from "./Forms";
import Query from "./Query";
import List from "./List";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";
import { Student } from "./interfaces/Student";
import { useDispatch, useSelector } from "react-redux";
import { initStudents } from "../app/features/students/studentSlice";
import { RootState } from "../app/store";

interface ManagementState {
  studentList: Array<Student>;
  id: string;
}

export default function StudentManagement() {
  const dispatch = useDispatch();
  const studentList = useSelector((state: RootState) => state.students);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudents();
        dispatch(initStudents(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [studentIdQuery, setStudentIdQuery] =
    React.useState<ManagementState["id"]>("");
  const navigate = useNavigate();

  function updateValue(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setStudentIdQuery(value);
  }

  return (
    <>
      <StudentNavbar />
      <List />
      {studentList ? (
        <Query handleChange={updateValue} studentId={studentIdQuery} />
      ) : null}
      <Forms />
      <div>
        <button onClick={() => navigate("/")} className="rounded--back">
          Back
        </button>
      </div>
    </>
  );
}
