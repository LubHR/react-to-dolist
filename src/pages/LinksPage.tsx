import React from 'react';
import {Link} from "react-router-dom";

const LinksPage = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <ul className="flex space-x-4">
                <li className="text-blue-500 hover:text-blue-700 font-semibold"><Link to={'/auth'} >/auth</Link></li>
                <li className="text-blue-500 hover:text-blue-700 font-semibold"><Link to={'/login'}>/login</Link> </li>
                <li className="text-blue-500 hover:text-blue-700 font-semibold"><Link to={'/todo'}>/ToDos</Link> </li>
            </ul>
        </div>
    );
};

export default LinksPage;