import Link from "next/link"

export default function Home(){
    

  return(
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold text-center mt-10">Welcome to ChatMe</h1>
    <p className="text-center mt-4 text-gray-600">Your personal chat </p>
    <div className="flex justify-center mt-6"></div>
      <Link href="/auth/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Start Chatting
      </Link>
    </div>
  )
}