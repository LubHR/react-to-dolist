import React, { useEffect, useState } from 'react';
import { useAuth } from "../hooks/user-hooks";
import ToDoComponent from "./ToDoComponent";
import { db } from "../firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const ToDosComponent = () => {
    const { isAuth } = useAuth()

    const [todos, setTodos] = useState(['LearnRect', "Happy"])
    const [input, setinput] = useState('')

    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr: any = []
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id })
            });
            setTodos(todosArr)
        });
        return () => unsubscribe()
    }, [])

    const todocompleted = async (todo: any) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    }

    const createtodo = async (e: any) => {
        e.preventDefault(e)
        if (input === '') {
            alert('Please enter the todo')
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false
        })
    }

    const deletetodo = async (id: any) => {
        await deleteDoc(doc(db, "todos", id))
    }

    return isAuth ? (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-semibold mb-6 text-center">Welcome</h1>
            <div className="mb-6">
                <h3 className="text-xl font-medium mb-4">Add ToDos</h3>
                <form onSubmit={createtodo} className="flex items-center space-x-4">
                    <input
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        type="text"
                        placeholder="Add a new todo"
                        className="p-2 border rounded-md w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                    >
                        Create
                    </button>
                </form>
            </div>
            <ul>
                {todos.map((todo, index) =>
                    <ToDoComponent key={index} todo={todo} todocompleted={todocompleted} deletetodo={deletetodo} />
                )}
            </ul>
        </div>
    ) : (
        <h2 className="text-center text-xl font-semibold">Please log in</h2>
    );
};

export default ToDosComponent;
