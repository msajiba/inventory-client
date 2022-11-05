import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useCategory from "../../../hooks/useCategory";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { data } = useCategory();
  const categories = data;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageStoreKey = "7e4a2baa560f43defad4808f9446e306";

  const onSubmit = async (data) => {
    const { name, category, quantity, price, picture, sku } = data;

    try {
      const image = picture[0];
      const formData = new FormData();
      formData.append("image", image);

      const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;

      const res = await axios.post(url, formData);
      if (res?.data?.success) {
        const img = res?.data?.data?.image?.url;
        const products = { name, category, quantity, price, img, sku };
        const productInfo = await axios.post(
          "https://dream-inventory.herokuapp.com/api/product",
          products
        );
        if (productInfo.data.status) {
          toast.success("Product create successfully");
        }
      }
      reset();
    } catch (error) {
      if (!error.response.data.status) {
        toast.error("Product already exist");
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
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text"> Category </span>
                  </label>

                  <select
                    {...register("category", { required: true })}
                    className="select select-bordered"
                  >
                    <option disabled defaultValue>
                      Pick one
                    </option>
                    {categories?.data?.map(({ name }, index) => (
                      <option key={index} defaultValue={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="md:flex align-center justify-between">
                <div className="form-control w-full md:mx-10">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input
                    type="Number"
                    className="input input-bordered"
                    {...register("quantity", {
                      required: true,
                      min: 10,
                      max: 99,
                    })}
                  />
                  {errors?.quantity && (
                    <span className="text-red-500">
                      Minimum quantity 10 and maximum quantity 99
                    </span>
                  )}
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="Number"
                    className="input input-bordered"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="md:flex align-center justify-between">
                <div className="form-control w-full md:mx-10 ">
                  <label className="label">
                    <span className="label-text">Product SKU</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    {...register("sku", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="form-control">
                  <input
                    type="file"
                    className="input w-full mt-10 border shadow"
                    {...register("picture", { required: true })}
                  />
                  {errors.image && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="md:flex align-center justify-between"></div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
