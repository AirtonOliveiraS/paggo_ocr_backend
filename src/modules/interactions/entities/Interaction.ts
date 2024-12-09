import { randomUUID } from "crypto";
import { Replace } from 'src/utils/replace'


interface InteractionSchema {
    
    question: string
    answer: string | null
    userId: string
    createdAt: Date;


}

export class Interaction {
    private props: InteractionSchema;
    private _id: string;

    constructor(props: Replace<InteractionSchema, { createdAt?: Date, answer?: string }>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            answer:props.answer || null
        };
        this._id = id || randomUUID();
    }

    get id(): string {
        return this._id
    }

    get answer(): string | null {

        return this.props.answer
    }

    set answer(answer: string| null ) {

        this.answer = answer
    }
    get question(): string  {

        return this.props.question
    }

    set question(question: string ) {

        this.question = question
    }
    get userId(): string {

        return this.props.userId
    }
    





    get createdAt(): Date {

        return this.props.createdAt
    }




}
