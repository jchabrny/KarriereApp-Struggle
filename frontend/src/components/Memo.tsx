import React from "react";
import {IMemo} from "../models/Memo";

interface Props {
    memo: IMemo;
}

export default function Memo({memo}: Props) {

    return (
        <div className="memo">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {memo.memoName}
                    </div>
                    <div className="col">
                        {memo.memoDeadline}
                    </div>
                </div>
            </div>
        </div>
    );
}