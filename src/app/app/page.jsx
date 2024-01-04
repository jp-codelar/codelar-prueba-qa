'use client'

import { useEffect } from "react"
import { toast } from "sonner"

import useFetch from "@/hooks/useFetch"

const App = () => {
  const { data: items, isError, isLoading, handler } = useFetch()

  function handlerSubmit(e) {
    e.preventDefault()

    const nit = e.target.search.value
    handler(`/api/query/${nit}`)
  }

  useEffect(() => {
    if (isError) toast.error("Se ha presentado un error, intente nuevamente")
  }, [isError])

  return <section className="bg-gray-50 dark:bg-gray-900 h-screen w-screen flex items-center justify-center">
    <div className="bg-white dark:bg-gray-800 relative shadow-md rounded-lg h-[80%] flex flex-col gap-3 w-full max-w-4xl m-2 overflow-hidden">
      <form className="flex flex-col items-center w-full gap-3 md:flex-row p-4" onSubmit={handlerSubmit}>
        <div className="relative w-full">
          <label htmlFor="simple-search" className="sr-only">Ingrese cedula</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ingrese cedula" required />
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button type="submit" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            Buscar
          </button>
        </div>
      </form>

      {isLoading ?
        <p className="text-center text-gray-400">Consultando... espere un momento</p>
        :
        !items ?
          <p className="text-center text-gray-400">Debe ingresar una cedula para consultar</p>
          :
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Número documento</th>
                  <th scope="col" className="px-4 py-3">Nombre</th>
                  <th scope="col" className="px-4 py-3">Edad</th>
                  <th scope="col" className="px-4 py-3">Ubicación</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) =>
                  <tr key={i} className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.nit}</th>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.age}</td>
                    <td className="px-4 py-3">{item.location}</td>
                  </tr>)
                }
              </tbody>
            </table>
            {
              items.length === 0 && <p className="text-center py-3 text-gray-400">No hay resultados</p>
            }
          </div>
      }
    </div>
  </section>
}

export default App