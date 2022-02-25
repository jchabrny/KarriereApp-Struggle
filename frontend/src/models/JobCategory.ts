import {IApplication} from "./Application";

export interface IJobCategory {
    listName: string
    listId: string
    listItems?: IApplication[]
}