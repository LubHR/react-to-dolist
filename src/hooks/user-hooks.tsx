import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setUser } from "../store/slices/userSlice";

export const useAuth = () => {
    const { email, password } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword && (!email || !password)) {
        dispatch(setUser({
            email: storedEmail,
            password: storedPassword,
        }));
    }

    return {
        isAuth: !!email || !!storedEmail,
        email: email || storedEmail,
        password: password || storedPassword,
    };
};
