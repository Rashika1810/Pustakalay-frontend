import React from 'react'

const page = () => {
  return (
    <div className='mt-3'>
       <h1 class="bg-gradient-to-r from-amber-200 to-amber-600 font-semibold text-transparent text-5xl text-center bg-clip-text">Welcome to Pustakalay</h1>
<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold text-amber-500">Login Here</h1>
				</div>
				<div class="divide-y divide-amber-200">
					<div class="py-8 text-base leading-6 space-y-4 text-amber-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-amber-300 text-amber-700 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-amber-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-amber-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-amber-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-amber-300 text-amber-700 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-amber-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-amber-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-amber-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-amber-500 text-white rounded-md px-2 py-1">Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default page
