import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function PrivateRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");

        if (isLogin !== "yes") {
            toast.error("Please login first");
            navigate("/login");
        }
    }, [navigate]);

    return children;
}

export default PrivateRoute;
