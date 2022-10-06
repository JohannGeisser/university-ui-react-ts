import React, { ChangeEvent } from "react";
import StudentService from "../services/StudentService";

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  studentId: string
}

interface QueryState {
  studentName: string
}

export default function Query({handleChange, studentId} : Props) {
  const [studentName, setStudentName] = React.useState<QueryState["studentName"]>("");

  async function searchStudent() {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentById(studentId);
        console.log(response.data);
        const student = response.data;
        if (student.studentId!.toString() === studentId.toString()) {
          setStudentName(student.firstName);
        }
      } catch (error) {
        setStudentName("");
        alert("Student not found");
        console.log(error);
      }
    };
    fetchData();
  }

  return (
    <div>
      <h3>Search a Student</h3>
      <input type="text" placeholder="Student ID" onChange={handleChange} />
      <button onClick={searchStudent}>Search</button>
      {studentName && <p>{studentName}</p>}
    </div>
  );
}
