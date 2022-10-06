import { Student } from "./Student";
import { Department } from "./Department";

export interface Course {
  courseId?: number;
  courseName: string;
  department: Department;
  students: Array<Student>;
}
