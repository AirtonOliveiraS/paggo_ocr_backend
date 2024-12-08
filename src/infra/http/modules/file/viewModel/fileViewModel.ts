import { File } from 'src/modules/files/entities/File';
export class FileViewModel {
  static toHttp({ createdAt, text,id,userId }: File) {
    return {
      text,
      createdAt,
      fileId:id,
      userId
    };
  }
}