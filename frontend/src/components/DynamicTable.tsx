import React from "react";
import JobHandler from "./JobHandler";
import './DynamicTable.scss';

export default function DynamicColumn() {

    return (
        <div>
            <div className="job-container">
                <table>
                    <thead>
                    <tr>
                        <th>Automobil</th>
                        <th>Sport</th>
                        <th>Bauwesen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>
                        <JobHandler/>
                    </td>
                        <td>
                            <JobHandler/>
                        </td>
                        <td>
                            <JobHandler/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* const headers = [
     {key: "firstColumn", label: "FIRST"},
     {key: "secondColumn", label: "SECOND"},
     {key: "thirdColumn", label: "THIRD"},
 ];
               <thead>
                <tr>
                 {headers.map((row) => {
                 return <td key={row.key}>{row.label}</td>;
                })}
                </tr>
                </thead>
 */

//const [mockDataJobs, setMockDataJobs] = useState(data);
// const [inputList, setInputList] = useState({firstColumn: "", secondColumn: "", thirdColumn: ""});

/*
            {mockDataJobs.map((mockDataJob) => {
                        return (
                            <tr>
                                <td>{mockDataJob.firstColumn}</td>
                                <td>{mockDataJob.secondColumn}</td>
                                <td>{mockDataJob.thirdColumn}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td>
                            <p>OFFER TEMPLATE</p>
                            <div className="checkbox-container">
                                <div className="row">
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>OFFER TEMPLATE</p>
                            <div className="checkbox-container">
                                <div className="row">
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>OFFER TEMPLATE</p>
                            <div className="checkbox-container">
                                <div className="row">
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                    <input className="col" type="checkbox" defaultChecked={false}/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <form>
                                <input type="text" name="firstColumn" value={inputList.firstColumn}
                                       placeholder="Enter a job ..."/>
                            </form>
                        </td>
                        <td>
                            <form>
                                <input type="text" name="secondColumn" value={inputList.secondColumn}
                                       placeholder="Enter a job ..."/>
                            </form>
                        </td>
                        <td>
                            <form>
                                <input type="text" name="thirdColumn" value={inputList.thirdColumn}
                                       placeholder="Enter a job ..."/>
                            </form>
                        </td>
 */