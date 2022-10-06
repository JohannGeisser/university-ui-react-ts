import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const CourseList = () => {
  const navigate = useNavigate();

  const courses = useSelector((state: RootState) => state.courses);

  const courseArray = courses.map((course) => {
    return (
      <li
        key={course.courseId}
        className="link--student"
        onClick={() => navigate(`/enrollment/${course.courseId}`)}
      >
        {course.courseName}
      </li>
    );
  });

  return (
    <div>
      <h3>Course List</h3>
      <ol>{courseArray}</ol>
    </div>
  );
};

export default CourseList;
