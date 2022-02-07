import axios from "axios";
import {IJobList} from "../models/JobList";

export const saveNewList = (newJobList: IJobList): Promise<IJobList> => axios.put(`api/list/saveNew`, newJobList)
    .then(response => response.data)

export const getAllLists =(): Promise<IJobList[]> => axios.get(`api/list/getAll`).then(response => response.data)

export const updateList = (updatedList: IJobList): Promise<IJobList> => axios.patch(`/api/list/update`,
    updatedList).then(response => response.data)


