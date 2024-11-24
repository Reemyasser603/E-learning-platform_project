export class CreateModuleDto {
    readonly courseId: string;
    readonly title: string;
    readonly content: string;
    readonly resources?: string[];
  }
  