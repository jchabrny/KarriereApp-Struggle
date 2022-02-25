import axios from "axios";
import {IJobCategory} from "../models/JobCategory";
import {IApplication} from "../models/Application";
import {INewJobCategory} from "../models/NewJobCategory";

export const saveNewList = (newJobCategory: INewJobCategory):
    Promise<INewJobCategory> => axios.put(`api/list`, newJobCategory).then(response => response.data)

export const getAllLists = ():
    Promise<IJobCategory[]> => axios.get(`api/list`).then(response => response.data)

export const updateList = (updatedList: { listName: string, listId: string, listItems?: Partial<IApplication>[] }):
    Promise<IJobCategory> => axios.patch(`/api/list/${updatedList.listId}`, updatedList).then(response => response.data)

export const removeItem = (listId: string, jobId: string):
    Promise<IJobCategory> => axios.delete(`api/list/${listId}/removeItem/${jobId}`).then(response => response.data)

export const removeList = (listId: string):
    Promise<IJobCategory> => axios.delete(`api/list/${listId}`).then(response => response.data)



