export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role: 'student' | 'instructor' | 'admin';
}