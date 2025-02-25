import React, { FC } from 'react';

type IProps = {
    todo: any,
    todocompleted: any,
    deletetodo: any
}

const ToDoComponent: FC<IProps> = ({ todo, todocompleted, deletetodo }) => {
    return (
        <div className="mb-4">
            <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                    <input
                        onChange={() => todocompleted(todo)}
                        type="checkbox"
                        checked={todo.completed}
                        className="h-5 w-5 text-blue-500"
                    />
                    <p
                        onClick={() => todocompleted(todo)}
                        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                        {todo.text}
                    </p>
                </div>
                <button
                    onClick={() => deletetodo(todo.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                    Delete
                </button>
            </li>
        </div>
    );
};

export default ToDoComponent;
