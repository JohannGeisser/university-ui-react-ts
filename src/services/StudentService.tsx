import axios from "axios";
import { Student } from "../components/interfaces/Student";

const STUDENT_API_BASE_URL = "http://localhost:8080/student";

class StudentService {
  getStudents() {
    return axios.get<Array<Student>>(STUDENT_API_BASE_URL);
  }

  getStudentById(id: string) {
    return axios.get<Student>(STUDENT_API_BASE_URL + "/" + id);
  }

  saveStudent(student: Student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  editStudent(id: string, student: Student) {
    return axios.put(STUDENT_API_BASE_URL + "/" + id, student);
  }

  deleteStudent(id: string) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + id);
  }

  getStudentByCourseId(id: string) {
    return axios.get<Array<Student>>(STUDENT_API_BASE_URL + "/enrollment/" + id);
  }

  getStudentNotEnrolled(id: string) {
    return axios.get<Array<Student>>(STUDENT_API_BASE_URL + "/noenrollment/" + id);
  }
}

export default new StudentService();
