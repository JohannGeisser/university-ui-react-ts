import React, { useState } from "react";
import CourseService from "../services/CourseService";
import { Course } from "./interfaces/Course";

interface Props {
  courseId: string;
}

interface State {
  courseName: Course;
}

const INITIAL_COURSE_STATE: Course = {
  courseId: 0,
  courseName: "",
  department: {},
  students: [],
};

export default function CourseNavSpec({ courseId }: Props) {
  const [courseName, setCourseName] =
    useState<State["courseName"]>(INITIAL_COURSE_STATE);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CourseService.getCourseById(courseId);
        setCourseName(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="main--header">
      <h1>Course Management - {courseName.courseName}</h1>
    </header>
  );
}
