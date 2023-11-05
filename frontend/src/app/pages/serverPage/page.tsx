
import React from 'react'
import { options } from '../../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import UserCard from '../../components/userCard'
import { redirect } from 'next/navigation'

export default async function ServerPage() {

    const session = await getServerSession(options)
    
    if(!session){
        redirect('/api/auth/signin?callbackUrl=/server')
    }

  return (
    <section>
        <UserCard user={session?.user} pagetype={"Server"}/>
    </section>
  )
}
