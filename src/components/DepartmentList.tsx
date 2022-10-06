import DepartmentService from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeDepartment } from "../app/features/departments/departmentSlice";

const DepartmentList = () => {
  const departments = useSelector((state: RootState) => state.departments);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const departmentArray = departments.map((department) => {
    const id = department.departmentId;
    return (
      <div className="dep">
        <li
          key={department.departmentId}
          onClick={() => navigate(`/departments/${id}`)}
        >
          {department.depName}
        </li>
        <button
          className="dep--rem"
          onClick={() => {
            deleteDepartment(id!);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  const deleteDepartment = (id: number) => {
    DepartmentService.deleteDepartment(id)
      .then((response) => {
        console.log(response);
        dispatch(removeDepartment(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Department List</h3>
      <ol>{departmentArray}</ol>
    </div>
  );
};

export default DepartmentList;
