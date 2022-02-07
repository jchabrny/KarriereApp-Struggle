import {IJob} from "./Job";

export interface IJobList {
    listName: string
    listId: string
    listItems?: IJob[]
}