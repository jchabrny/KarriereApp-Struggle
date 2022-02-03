import axios from "axios";
import {IJobList} from "../models/JobList";

export const updateList = (updatedList: IJobList) => axios.patch(`/api/list/update`,
    updatedList).then(response => response.data)