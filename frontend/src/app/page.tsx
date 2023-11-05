import Image from 'next/image'
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'

//components
import Navbar from './components/navbar'
import UserCard from './components/userCard'


export default async function Home() {
  const session = await getServerSession(options); //Gets session
  return (
    <main>
      {session ? (
        <UserCard user ={session?.user} pagetype={"Home"} />
      ):(
        <h1 className='text-5xl'>You shall not pass</h1>
      )}
    </main>
  )
}
