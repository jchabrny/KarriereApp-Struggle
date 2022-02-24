import React, {ChangeEvent} from "react";
import './StatusHandler.scss';

interface StatusHandlerProps {
    clicked: number
    jobId: string
    updateStatus: (newStatus: number, jobId: string) => void
}

export default function StatusHandler(props: StatusHandlerProps) {

    const {clicked, jobId, updateStatus} = props;

    const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void =>
        updateStatus(parseInt(e.currentTarget.value), jobId);

    return (
        <div className="job-status">
            <fieldset>
                <input
                className="form-check-input me-1"
                    type="radio"
                       value="1"
                       checked={clicked === 1}
                       onChange={handleRadioClick}/>
                <label htmlFor="noReply">No reply</label>
                <input
                    className="form-check-input me-1"
                    type="radio"
                       value="2"
                       checked={clicked === 2}
                       onChange={handleRadioClick}/>
                <label htmlFor="rejection">Rejection</label>
                <input
                    className="form-check-input me-1"
                    type="radio"
                       value="3"
                       checked={clicked === 3}
                       onChange={handleRadioClick}/>
                <label htmlFor="invitation">Invitation</label>
            </fieldset>
        </div>
    );
}