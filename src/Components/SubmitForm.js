import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubmitForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const newData = { ...data};
        fetch("https://mern-app-server-site.onrender.com/informations", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((inserted) => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Add successfully");
                }
            });
    };
    return (
        <div>
            <h1 className="text-2xl text-center font-semibold mt-5 text-[#0182BE]">
                Student Form{" "}
            </h1>
            <div className="ml-3 ">
                <form
                    className="lg:w-10/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='lg:flex justify-evenly'>
                        <div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Name :
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    {...register("Name")}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Email :
                                    </span>
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Your Email"
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    {...register("email")}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Student ID:
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Student ID"
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    {...register("id")}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        Depertment:
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Department"
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    {...register("Department")}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="label w-48">
                                    <span className="label-text text-xl">
                                        CGPA:
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="CGPA"
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    {...register("CGPA")}
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <label className="label w-48">
                                        <span className="label-text text-xl">
                                            Marks:
                                        </span>
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        placeholder="Marks"
                                        className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        {...register("Marks")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center rounded-lg w-fit mx-auto mt-3">
                        <button className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm">
                            {/* <AiFillSave /> */}
                            <input type="submit" value="Submit" />
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SubmitForm;