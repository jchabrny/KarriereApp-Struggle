import React, {useState} from 'react';
import './MainPage.scss';
import DynamicColumn from "../components/DynamicColumn";
import data from '../mock-data.json';

type Data = typeof data

// Dynamic table
export default function MainPage({data}: { data: Data }) {

    const headers = [
        {key: "firstColumn", label: "FIRST"},
        {key: "secondColumn", label: "SECOND"},
        {key: "thirdColumn", label: "THIRD"},
    ];

    const [jobs, setJobs] = useState(data);
    const [inputList, setInputList] = useState({firstColumn: "", secondColumn: "", thirdColumn: ""});

    return (
        <div>
            <div className="header">
                <h1>
                    career crack
                </h1>
                <DynamicColumn />
                <div>
                    <div className="job-container">
                        <table>
                            <thead>
                            <tr>
                                <th>Branche A</th>
                                <th>Branche B</th>
                                <th>Branche C</th>
                            </tr>
                            </thead>

                            <thead>
                            <tr>
                                {headers.map((row) => {
                                    return <td key={row.key}>{row.label}</td>;
                                })}
                            </tr>
                            </thead>

                            <tbody>
                            {jobs.map((job) => {
                                return (
                                    <tr>
                                        <td>{job.firstColumn}</td>
                                        <td>{job.secondColumn}</td>
                                        <td>{job.thirdColumn}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td>
                                    <p>OFFER 1</p>
                                    <div className="checkbox-container">
                                        <div className="row">
                                            <input className="col" type="checkbox" defaultChecked={false}/>
                                            <input className="col" type="checkbox" defaultChecked={false}/>
                                            <input className="col" type="checkbox" defaultChecked={false}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>OFFER 2</p>
                                    <div className="checkbox-container">
                                        <div className="row">
                                            <input className="col" type="checkbox" defaultChecked={false}/>
                                            <input className="col" type="checkbox" defaultChecked={false}/>
                                            <input className="col" type="checkbox" defaultChecked={false}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>OFFER 3</p>
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
                            </tr>
                            </tbody>
                        </table>
                        <br/>
                        <div className="button-container">
                            <button type="button" className="btn btn-dark btn-sm">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}