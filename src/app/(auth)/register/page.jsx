"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleRegisterFunc = async (data) => {
        console.log(data, "data")

        const { email, name, photo, password } = data;
        console.log(name, photo)

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
         console.log(res, error)
         if(error){
            alert(error.message)
         }

         if(res){
            alert("Signup seccessfull")
         }
    }
   

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-8 rounded-xl bg-white shadow-lg w-full max-w-md'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>


                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="Name"
                            className="input w-full border p-2 rounded"

                            placeholder="Type here name"

                            {...register("name", { required: "Name field is required" })}
                        />

                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input w-full border p-2 rounded"

                            placeholder="Type here photo url"

                            {...register("photo", { required: "Photo URL field is required" })}
                        />

                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input w-full border p-2 rounded"

                            placeholder="Type here email"

                            {...register("email", { required: "Email field is required" })}
                        />

                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input w-full border p-2 rounded"
                            placeholder="Type here password"


                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button type="submit" className="btn w-full bg-slate-800 text-white p-2 rounded mt-4">
                        Register
                    </button>
                </form>

                <p className='mt-4 text-center'>
                    Don't have an account? <Link href={'/login'} className='text-blue-500 font-semibold'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;