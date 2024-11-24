export class UpdateUserDto {
  readonly name?: string;
  readonly email?: string;
  readonly role?: 'student' | 'instructor' | 'admin';
  readonly profilePictureUrl?: string;
}