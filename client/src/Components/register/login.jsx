import React from 'react';
import img1 from "../assets/login1.jpg";
import PlaceholderImg from '../assets/log.jpg'
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Login() {
    return (
        <> <div className="pb-20 pt-16">
            <section class="bg-inherit min-h-screen flex items-center justify-center">
                {/* Login */}
                <div class="bg-transparent font-serif  border-2 justify-between flex rounded-2xl shadow-lg max-w-3xl p-5">
                    {/* form */}
                    <div class="sm:w-1/2 mr-2 my-auto px-8">
                        <h2 class="font-medium text-4xl">Login</h2>
                        <p class="text-m text-gray-600 mt-2">If you are already a member, please log in</p>
                        <form autoComplete='off' action="" class="flex flex-col gap-4">
                            <input class="outline-none p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Email" />
                            <div class="relative">
                                <input class="outline-none p-2 mt-3 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-pointer bi bi-eye absolute top-1/2 right-3" viewBox="0 0 16 16 ">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>

                            {/* <button class="bg-[#BDBBC0] hover:bg-white rounded-xl text-black pt-1 pb-1">Login</button> */}
                            <button class="bg-secondary mt-4 hover:bg-tertiary rounded-xl text-white py-2">Login</button>
                        </form>
                        {/* <div class="mt-10 grid grid-cols-3 items-center text-gray-500">
                            <hr class="border-gray-500" />
                            <p class="text-center text-sm">OR</p>
                            <hr class="border-gray-500" />
                        </div>
                       <button class="bg-gray-300 border  hover:bg-gray-200 px-2 py-2 w-full rounded-xl mt-4 flex justify-center items-center text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="20" fill="currentColor" class="bi bi-google mr-3" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            Login with Google</button>
                            <div class="mt-3 text-xs flex justify-between items-center">
                            <p>Forgot your password?</p>
                            <button class="bg-white border px-5 py-2 rounded-xl ml-20 hover:underline">Click here</button>

                        </div>

                       */}
                        <hr class="mt-8 border-gray-500" />
                        <div class=" mt-10 text-xs flex justify-between items-center">
                            <p>If you don't have an account register here.</p>
                            <Link to="/register" class="bg-white border px-5 py-2 rounded-xl hover:underline">Register</Link>
                        </div>

                    </div>

                    {/* image */}
                    <div class="sm:block hidden w-1/2">
                        <LazyLoadImage class="rounded-2xl" PlaceholderSrc={PlaceholderImg} src={img1} alt="" />
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
export default Login;