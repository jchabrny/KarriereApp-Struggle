import React, {useState} from "react";

export default function DynamicColumn() {
    const [job, setJob] = useState('');

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     alert(job);
     const column = {job};

     /*fetch('http://localhost:'), {
     method: 'POST',
         headers: {},
     body: JSON.stringify(column)
 })*/
 }

    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>Branche A</th>
                </tr>
                </thead>
            </table>
            <tbody>
            <tr>
                <td>{job}</td>
            </tr>
            </tbody>
            <form onSubmit={handleSubmit}>
                <input value={job} onChange={(e) => setJob(e.target.value)} type="text"
                       placeholder="Enter job " className="input"/>
                <button type="submit" className="btn btn-dark btn-sm">
                    Save
                </button>
            </form>
        </div>
    );
}

