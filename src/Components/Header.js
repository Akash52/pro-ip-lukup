import React from 'react'

const Header = ({ Ip }) => {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover animate-pulse"
          src="https://images.unsplash.com/photo-1606778303077-3780ea8d5420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
        <div
          className="absolute inset-0 bg-pink-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight animate-bounce text-white sm:text-5xl lg:text-6xl">
          {Ip.ip}
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          “Networking is not about just connecting people. It’s about connecting
          people with people, people with ideas, and people with opportunities.”
        </p>
      </div>
    </div>
  )
}

export default Header
