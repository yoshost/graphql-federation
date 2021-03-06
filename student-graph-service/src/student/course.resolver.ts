import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { Course } from './entities/course.entity';

@Resolver((of) => Course)
export class CourseResolver {
  constructor(private readonly studentService: StudentService) { }


  @ResolveField((of) => [Student])
  students(@Parent() course: Course): Promise<Student[]> {
    return this.studentService.findForCourse(course.id);
  }

}
