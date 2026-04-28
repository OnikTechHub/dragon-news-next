"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register,handleSubmit, formState: {errors}, } = useForm()

    const handleLoginFunc = (data) => {
       console.log(data, "data")

    }
    console.log(errors, "errors")

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-8 rounded-xl bg-white shadow-lg w-full max-w-md'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>

                
                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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
                        Login
                    </button>
                </form>

                <p className='mt-4 text-center'>
                    Don't have an account? <Link href={'/register'} className='text-blue-500 font-semibold'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;