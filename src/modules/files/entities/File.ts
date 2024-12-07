import { randomUUID } from "crypto";
import { Replace } from 'src/utils/replace'


interface FileSchema {
    text: string | null
    userId: string
    createdAt: Date;


}

export class File {
    private props: FileSchema;
    private _id: string;

    constructor(props: Replace<FileSchema, { createdAt?: Date, text?: string }>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            text:props.text || null
        };
        this._id = id || randomUUID();
    }

    get id(): string {
        return this._id
    }

    get text(): string | null {

        return this.props.text
    }

    set text(text: string | null) {

        this.text = text
    }

    get userId(): string {

        return this.props.userId
    }




    get createdAt(): Date {

        return this.props.createdAt
    }




}
