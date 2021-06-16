import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const Search = ({ searchIP }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      ;<p>...</p>
    } else {
      searchIP(text)
      setText('')
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="dark:bg-gray-900 bg-gray-200">
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="max-w-7xl  bg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center"></div>
            </div>
            <div className="min-w-0 flex-1 mt-2 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full dark:bg-gray-600  bg-white border border-gray-300 dark:text-gray-100 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-500 focus:border-yellow-600 dark:focus:border-indigo-500 dark:focus:ring-yellow-500 sm:text-sm"
                      placeholder="Search any IP..."
                      type="search"
                      value={text}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search
