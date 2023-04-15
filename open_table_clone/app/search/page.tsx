'use client'
import Link from "next/link"
import Header from "./component/Header"
import SideBar from "./component/SideBar"
import RestaurantCard from "./component/RestaurantCard"


const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <nav className="bg-white p-2 flex justify-between">
    <Link href="" className="font-bold text-gray-700 text-2xl">
        {" "} OpenTable{" "}
      </Link>
      <div>
        <div className="flex">
          <button
            className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
          >
            Sign in
          </button>
          <button className="border p-1 px-4 rounded text-gray-500 ">Sign up</button>
        </div>
      </div>
    </nav>
    <Header/>
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      <SideBar/>
      <div className="w-5/6">
        {/* RESAURANT CAR */}
        <RestaurantCard/>
        {/* RESAURANT CAR */}
      </div>
    </div>
  </main>
</main>
  )
}

export default Search