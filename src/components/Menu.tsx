import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="main--header">
        <h1>University Management</h1>
      </header>
      <div className="buttons">
        <button className="main--button" onClick={() => navigate("/courses")}>
          Courses
        </button>
        <button className="main--button" onClick={() => navigate("/students")}>
          Students
        </button>
        <button
          className="main--button"
          onClick={() => navigate("/departments")}
        >
          Departments
        </button>
      </div>
      <div className="modal-footer">
        <p>
          <strong>La Paz</strong>
          <br></br>
          <b>Calacoto +591 725 64503 </b>
          <b>ucb@acad.com</b>
        </p>
      </div>
    </div>
  );
}
