import React from "react";
import ListHandler from "./ListHandler";
import './ListGallery.scss';

export default function ListGallery() {

    return (
        <div>
            <div>
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
                        <ListHandler />
                    </td>
                        <td>
                            <ListHandler />
                        </td>
                        <td>
                            <ListHandler />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}