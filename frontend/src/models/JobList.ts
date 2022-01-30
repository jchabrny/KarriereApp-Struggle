import {Job} from "./Job";

export interface JobList {
    listName: string;
    listId: string;
    listJobs: Job[]
}