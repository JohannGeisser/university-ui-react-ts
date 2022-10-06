import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function List() {
  const students = useSelector((state: RootState) => state.students);
  const navigate = useNavigate();

  const studentElements = students.map((student) => (
    <li
      key={student.studentId}
      className="link--student"
      onClick={() => navigate(`/editStudent/${student.studentId}`)}
    >
      {student.firstName + " " + student.lastName}
    </li>
  ));

  return (
    <div>
      <h3>Student List</h3>
      <ol>{studentElements}</ol>
    </div>
  );
}
