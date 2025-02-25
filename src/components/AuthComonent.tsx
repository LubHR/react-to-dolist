import React from 'react';
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import {Link, useNavigate} from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"; // імпортуємо типи
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface FormData {
    email: string;
    password: string;
}

const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>(); // додаємо тип для форми

    const onSubmit: SubmitHandler<FormData> = (data) => { // додаємо тип до onSubmit
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                userCredential.user.getIdToken().then((token) => {
                    dispatch(setUser({
                        email: data.email,
                        password: data.password,
                    }));

                    localStorage.setItem("token", token); // Зберігаємо токен в localStorage

                    navigate('/todo');
                });
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Auth</h2>
                <input
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    type="email"
                    placeholder="email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <input
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                    type="password"
                    placeholder="password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Submit
                </button>
                <div className="mt-4 text-center">
                    <span>or </span>
                    <Link to="/login" className="text-blue-500 hover:underline">login</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;
