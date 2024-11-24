export class UpdateCourseDto {
  readonly title?: string;
  readonly description?: string;
  readonly category?: string;
  readonly difficultyLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
}