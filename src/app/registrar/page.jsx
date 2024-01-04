'use client'

import Link from "next/link"
import { useRouter } from 'next/navigation'

const Register = () => {
  const { push } = useRouter();

  function handlerSubmit(e) {
    e.preventDefault()
    push("/iniciar")
  }

  return <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border max-w-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white text-center">
            Registrar
          </h1>

          <form className="flex flex-col gap-6" onSubmit={handlerSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico</label>
              <input autoFocus type="email" maxLength={8} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="- Correo electronico -" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="- Contraseña -" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
              <input type="password" name="confirm-password" id="confirm-password" placeholder="- Contraseña -" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
              <input type="text" name="age" id="age" placeholder="- Edad -" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registrar</button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              ¿Ya tienes una cuenta? <Link href="/iniciar" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Iniciar sesión</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Register