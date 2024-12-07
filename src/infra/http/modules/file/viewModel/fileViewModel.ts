import { File } from 'src/modules/files/entities/File';
export class FileViewModel {
  static toHttp({ createdAt, text }: File) {
    return {
      text,
      createdAt,
    };
  }
}