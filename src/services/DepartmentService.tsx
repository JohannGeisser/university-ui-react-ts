import axios from "axios";
import { Department } from "../components/interfaces/Department";

const DEPARTMENT_API_BASE_URL = "http://localhost:8080/department";

class DepartmentService {
  getDepartments() {
    return axios.get<Array<Department>>(DEPARTMENT_API_BASE_URL);
  }

  getDepartmentById(id: string) {
    return axios.get<Department>(DEPARTMENT_API_BASE_URL + "/" + id);
  }

  saveDepartment(department: Department) {
    return axios.post(DEPARTMENT_API_BASE_URL, department);
  }

  deleteDepartment(id: number) {
    return axios.delete(DEPARTMENT_API_BASE_URL + "/" + id);
  }
}

export default new DepartmentService();
