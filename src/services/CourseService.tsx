import axios from "axios";
import { Course } from "../components/interfaces/Course";
import { Student } from "../components/interfaces/Student";

const COURSE_API_BASE_URL = "http://localhost:8080/course";

class CourseService {
  getCourses() {
    return axios.get<Array<Course>>(COURSE_API_BASE_URL);
  }

  getCourseById(id: string) {
    return axios.get<Course>(COURSE_API_BASE_URL + "/" + id);
  }

  saveCourse(course: Course) {
    return axios.post<Course>(COURSE_API_BASE_URL, course);
  }

  deleteCourse(id: string) {
    return axios.delete<string>(COURSE_API_BASE_URL + "/" + id);
  }

  enrollStudent(id: string | undefined, student: Student) {
    return axios.put<Student>(COURSE_API_BASE_URL + "/" + id, student);
  }

  removeStudent(id: string | undefined, student: Student) {
    return axios.put(COURSE_API_BASE_URL + "/remove/" + id, student);
  }

  getCoursesByDepartmentId(id: string) {
    return axios.get<Array<Course>>(COURSE_API_BASE_URL + "/dep/" + id);
  }
}

export default new CourseService();
