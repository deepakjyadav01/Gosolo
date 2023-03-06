import React from 'react';
import img2 from '../assets/signup.jpg'
import PlaceholderImg from '../assets/Lsignup.jpg'
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Register() {
	return (
		<>
			<div className='pb-20 pt-16'>
				<section class="bg-inherit min-h-screen flex items-center justify-center">
					{/* Login */}
					<div class="bg-transparent font-serif flex justify-between  border-2 rounded-2xl shadow-lg max-w-3xl p-5">
						{/* form */}
						<div class="sm:w-1/2 my-auto px-8">
							<h2 class="pt-2 font-medium text-4xl">Register</h2>
							<p class="text-m text-gray-600 mt-4">If you are new, please register here</p>
							<form autoComplete='off' action="" class="flex flex-col gap-4 pt-4">
								<input 
									class="outline-none p-2 mt-5 rounded-xl border"
									type="text"
									name="email"
									placeholder="Email"
								/>
								<div class="relative ">
									<input
										class="outline-none p-2 mt-5 rounded-xl border w-full"
										type="password"
										name="Password"
										placeholder="Password"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="cursor-pointer bi bi-eye absolute top-1/2 right-3"
										viewBox="0 0 16 16 "
									>
										<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
										<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
									</svg>
								</div>

								<div class="relative pb-4">
									<input
										class="outline-none p-2 mt-5 rounded-xl border w-full"
										type="password"
										name="Confirm assword"
										placeholder="Confirm Password"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="cursor-pointer bi bi-eye absolute top-1/2 right-3"
										viewBox="0 0 16 16 "
									>
										<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
										<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
									</svg>
								</div>
								<button class="bg-secondary rounded-xl text-white pt-2 pb-2 hover:bg-tertiary">
									Register
								</button>
							</form>
							{/*
							<div class="mt-10 grid grid-cols-3 items-center text-gray-500">
								<hr class="border-gray-500" />
								<p class="text-center text-sm">OR</p>
								<hr class="border-gray-500" />
							</div>

							<button class="bg-white border font-normal px-1 py-1 w-full rounded-xl mt-4 flex justify-center items-center text-m ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30px"
									height="20"
									fill="currentColor"
									class="text-secondary bi bi-google mr-3"
									viewBox="0 0 16 16"
								>
									<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
								</svg >
								Register with Google
	</button> */}
							<hr class="mt-10 mb-6 border-gray-500" />
							<div class=" mt-3 pb-4 text-xs flex justify-between items-center">
								<p class='rounded-xl'>Already,If you have an account then Login here.</p>
								<Link to="/login" class="bg-white border ml-2 px-5 py-2 rounded-xl hover:bg-primary">
									Login
								</Link>
							</div>
						</div>

						{/* image */}
						<div class="sm:block hidden  w-1/2 pl-6 ">
							<LazyLoadImage class="rounded-2xl min-h-full justify-center"
								PlaceholderSrc={PlaceholderImg} src={img2} alt="" />
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
export default Register;