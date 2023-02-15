import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navegar = useNavigate();
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')

  const verifyUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        body: JSON.stringify({ nombre, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if(!res.ok) {
        throw new Error('Usuario invalido')
      }
      const userFetch = await res.json()
      localStorage.setItem('token', userFetch.token)
      navegar('/home')
    } catch (error) {
      console.log("Error");
      alert("Usuario no registrado");
    }
  } 

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="w-screen h-screen flex  items-center justify-center">
      <div className="w-1/4 flex flex-col bg-gray-200 border-l-green-500 border-l-[12px] p-4">
        <form className='flex flex-col' onSubmit={verifyUser}>
          <h1 className='font-bold text-3xl text-center text-black py-1 hover:text-green-500'>INICIAR SESION</h1>
          <input
            type="text"
            placeholder="Username"
            className="py-2 px-4 my-2 border-black border-2"
            onChange={handleNombre}
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 my-2 border-black border-2"
            onChange={handlePassword}
          />
          <button
            type="submit"
            className="w-1/4 bg-green-500 hover:bg-green-700 border-green-500 font-bold py-3 my-3 px-4 mt-6 self-center text-white hover:text-white"
            onClick={verifyUser}
          >
            LOGIN
          </button>
        </form>
      </div>  
    </div>
  )
}

export default Login