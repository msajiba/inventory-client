import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const UserAdd = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageStoreKey = "7e4a2baa560f43defad4808f9446e306";

  const onSubmit = async (data) => {
    const { username, role, email, password, cPassword, picture, mobile } =
      data;
    try {
      if (password !== cPassword) {
        return setError("password don't match");
      }

      const image = picture[0];
      const formData = new FormData();
      formData.append("image", image);

      const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;

      const res = await axios.post(url, formData);
      if (res?.data?.success) {
        const img = res?.data?.data?.image?.url;
        const user = { username, role, email, password, img, mobile };
        const postInfo = await axios.post(
          "https://dream-inventory.herokuapp.com/api/user",
          user
        );
        if (postInfo.data.status) {
          toast.success("User create successfully");
        }
        setError("");
      }
      reset();
    } catch (error) {
      if (!error.response.data.status) {
        toast.error("User already exist");
      }
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-2xl  shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex items-center justify-between">
                <div className="form-control w-full md:mx-10 ">
                  <label className="label">
                    <span className="label-text"> User Name </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text"> Role </span>
                  </label>

                  <select
                    {...register("role", { required: true })}
                    className="select select-bordered"
                  >
                    <option disabled defaultValue>
                      Pick role
                    </option>
                    <option defaultValue="admin"> admin </option>
                    <option defaultValue="user"> user </option>
                  </select>
                  {errors.role && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="md:flex align-center justify-between">
                <div className="form-control w-full md:mx-10">
                  <label className="label">
                    <span className="label-text"> Email </span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors?.email && (
                    <span className="text-red-500">
                      Please Provide valid email
                    </span>
                  )}
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Mobile</span>
                  </label>
                  <input
                    type="Number"
                    className="input input-bordered"
                    {...register("mobile", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="md:flex align-center justify-between">
                <div className="form-control w-full md:mx-10">
                  <label className="label">
                    <span className="label-text"> Password </span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors?.password && (
                    <span className="text-red-500">
                      Please Provide valid email
                    </span>
                  )}
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered"
                    {...register("cPassword", { required: true })}
                  />
                  {errors.cPassword && (
                    <span className="text-red-500 ">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              {error && (
                <p className="text-error text-sm text-center mt-5 ">
                  {" "}
                  {error}{" "}
                </p>
              )}

              <div className="form-control md:mx-10">
                <label className="label">
                  <span className="label-text"> Picture</span>
                </label>
                <input
                  type="file"
                  className="input"
                  {...register("picture", { required: true })}
                />
                {errors.picture && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdd;
