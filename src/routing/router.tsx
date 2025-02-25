import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ToDoPage from "../pages/ToDoPage";
import AuthComonent from "../components/AuthComonent";
import LoginComponent from "../components/LoginComponent";

export const router = createBrowserRouter([
        {path:"/",element:<MainLayout/>,children:[
            {path:'/auth',element:<AuthComonent/>},
            {index:true,element:<LoginComponent/>},
            {path:'/login',element:<LoginComponent/>},
            {path:'/todo',element:<ToDoPage/>}
        ]}
])