export class CreateCourseDto {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  readonly createdBy: string; // Instructor ID
}