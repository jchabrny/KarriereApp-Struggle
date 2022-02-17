import axios from "axios";
import {IJobList} from "../models/JobList";
import {IJob} from "../models/Job";
import {INewJobList} from "../models/NewJobList";

export const saveNewList = (newJobList: INewJobList): Promise<INewJobList> => axios.put(`api/list`, newJobList)
    .then(response => response.data)

export const getAllLists =(): Promise<IJobList[]> => axios.get(`api/list`).then(response => response.data)

export const updateList = (updatedList: {   listName: string, listId: string, listItems?: Partial<IJob>[]}): Promise<IJobList> => axios.patch(`/api/list/${updatedList.listId}`,
    updatedList).then(response => response.data)

export const removeItem = (listId: string, jobId: string): Promise<IJobList> => axios.delete(`api/list/${listId}/removeItem/${jobId}`)
    .then(response => response.data)

export const removeList = (listId: string): Promise<IJobList> => axios.delete(`api/list/${listId}`).then(response => response.data)



