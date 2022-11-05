import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [error, setError] = useState("");
  const [user, setUser] = useState(false);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const user = { email, password };

      const url = `https://dream-inventory.herokuapp.com/api/user/login`;
      const res = await axios.post(url, user);
      const token = res?.data?.accessToken;
      if (res.data.status) {
        setError("");
        setUser(true);
        localStorage.setItem("accessToken", token);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <img className="w-24 mx-auto" src={logo} alt="logo" />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Email </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue="admin@gmail.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-error text-xs">
                    Please enter valid email
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue="admin123"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-error text-xs">
                    Please enter correct password
                  </span>
                )}
              </div>
              {error && <span className="text-error text-md">{error}</span>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
