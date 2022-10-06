import React, { ChangeEvent } from "react";
import Select, { SingleValue } from "react-select";
import CourseService from "../services/CourseService";
import { Course } from "./interfaces/Course";
import { Department } from "./interfaces/Department";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface SelectProps {
  label: string;
  value: Department;
}

interface FormState {
  course: Course;
}

type HandleInputChange = ChangeEvent<HTMLInputElement>;

const CourseForm = () => {
  const departments = useSelector((state: RootState) => state.departments);

  const [course, setCourse] = React.useState<FormState["course"]>({
    courseId: 0,
    courseName: "",
    department: {},
    students: [],
  });

  const departmentsData = departments.map((department): SelectProps => {
    return {
      label: department.depName ?? "",
      value: department,
    };
  });

  const handleSelectChange = (event: SingleValue<SelectProps>): void => {
    if (!event) {
      return;
    }
    const { value } = event;
    setCourse((prevCourse) => ({
      ...prevCourse,
      department: value,
    }));
  };

  function handleChange(event: HandleInputChange) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  }

  const saveCourse = () => {
    CourseService.saveCourse(course)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <h3>Course Form</h3>
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h4>Add New Course</h4>
        </div>
        <div className="input--form">
          <label className="label--form">Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={course.courseName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="input--form">
          <label className="label--form">Department:</label>
          <Select
            options={departmentsData}
            onChange={handleSelectChange}
            className="select"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveCourse} className="rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
