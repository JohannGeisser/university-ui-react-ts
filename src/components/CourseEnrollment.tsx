/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../services/CourseService";
import StudentService from "../services/StudentService";
import CourseNavSpec from "./CourseNavSpec";
import { Student } from "./interfaces/Student";
import { useDispatch, useSelector } from "react-redux";
import {
  initStudents,
  addStudent,
  remStudent,
} from "../app/features/students/studentSlice";
import {
  initNotEnrolled,
  newEnroll,
  newAvailable,
} from "../app/features/students/enrollSlice";
import { RootState } from "../app/store";

const CourseEnrollment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const studentList = useSelector((state: RootState) => state.students);
  const completeStudentList = useSelector((state: RootState) => state.enroll);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentByCourseId(id!);
        const responseAll = await StudentService.getStudentNotEnrolled(id!);
        dispatch(initStudents(response.data));
        dispatch(initNotEnrolled(responseAll.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const studentArr = studentList.map((student: Student) => {
    return (
      <li key={student.studentId}>
        {student.firstName + " " + student.lastName}
        <button
          onClick={() => removeStudent(student)}
          className="rounded--remove"
        >
          Remove
        </button>
      </li>
    );
  });

  const enrollStudent = (student: Student) => {
    CourseService.enrollStudent(id, student)
      .then((response) => {
        console.log(response);
        dispatch(addStudent(student));
        dispatch(newEnroll(student));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeStudent = (student: Student) => {
    CourseService.removeStudent(id, student)
      .then((response) => {
        console.log(response);
        dispatch(remStudent(student));
        dispatch(newAvailable(student));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCourse = () => {
    if (window.confirm("Are you sure you wish to delete this course?")) {
      CourseService.deleteCourse(id!)
        .then((response) => {
          console.log(response);
          navigate("/courses");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <CourseNavSpec courseId={id!} />
      <h3>Enrolled Students</h3>
      <ol>{studentArr}</ol>
      <h3>Enroll Students</h3>
      <div>
        <ol>
          {completeStudentList.map((student, idx) => {
            return (
              <div key={idx + "complete" + student.studentId}>
                <li>
                  {student.firstName + " " + student.lastName}
                  <button
                    onClick={() => enrollStudent(student)}
                    className="rounded--enroll"
                  >
                    Enroll
                  </button>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
      <div>
        <button onClick={() => navigate("/courses")} className="rounded--back">
          Back
        </button>
        <button onClick={deleteCourse} className="rounded--back">
          Delete Course
        </button>
      </div>
    </div>
  );
};

export default CourseEnrollment;
