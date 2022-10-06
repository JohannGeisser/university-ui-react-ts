import React, { ChangeEvent } from "react";
import StudentService from "../services/StudentService";
import { Student } from "./interfaces/Student";
import { useDispatch } from "react-redux";
import { addStudent } from "../app/features/students/studentSlice";

interface FormState {
  student: Student;
}

const INITIAL_STUDENT_STATE: Student = {
  studentId: 0,
  firstName: "",
  lastName: "",
};

export default function Forms() {
  const dispatch = useDispatch();

  const [student, setStudent] = React.useState<FormState["student"]>(
    INITIAL_STUDENT_STATE
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  }

  function clearFields() {
    setStudent({
      firstName: "",
      lastName: "",
    });
  }

  function saveStudent() {
    StudentService.saveStudent(student)
      .then((response) => {
        clearFields();
        console.log(response);
        dispatch(addStudent(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <h3>Student Form</h3>
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h4>Add New Student</h4>
        </div>
        <div className="input--form">
          <label className="label--form">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="input--form">
          <label className="label--form">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveStudent} className="rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
