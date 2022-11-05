import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const NewCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, code } = data;
    const category = { name, code };

    const url = `https://dream-inventory.herokuapp.com/api/category`;
    const res = await axios.post(url, category);
    if (res.data.status) {
      toast.success("Category add successful");
    }
    reset();
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-2xl  shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text"> Category Name </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors?.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Category Code</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  {...register("code", { required: true })}
                />
                {errors.code && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCategory;
