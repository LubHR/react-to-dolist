import React from 'react';
import LinksPage from "./LinksPage";

const HeaderPage = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h1 className='text-center text-red-500 text-3xl font-bold'>ToDos</h1>
            <LinksPage/>
        </div>
    );
};

export default HeaderPage;