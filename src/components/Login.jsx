import React from 'react'

const Login = () => {
  return (
    <div className="w-screen h-screen flex  items-center justify-center">
      <div className="w-1/4 flex flex-col bg-blue-700 border-black border-4 rounded-2xl p-4">
        <h1 className='font-bold text-3xl text-center text-white py-1'>INICIAR SESION</h1>
        <input
          type="text"
          placeholder="Username"
          className="rounded-lg py-2 px-4 my-2 border-black border-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg py-2 px-4 my-2 border-black border-4"
        />
        <button
          type="submit"
          className="w-1/4 bg-white hover:bg-black rounded-lg border-black border-4 font-bold py-2 my-3 px-4 mt-6 self-center text-black hover:text-white"
        >
          LOGIN
        </button>
      </div>
    </div>
  )
}

export default Login