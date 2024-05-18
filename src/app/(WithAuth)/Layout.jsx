'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { getSpecificData } from '@/firebase/utils'
import { onAuth } from '@/firebase/utils'








function Home({ children }) {

    const { user, userDB, setUserProfile, setUserData } = useUser()
    const router = useRouter()
    console.log(user)
    useEffect(() => {
        if (user === undefined) onAuth(setUserProfile, setUserData)
    }, [user])
    return (
        <>
            {user === undefined && <Loader />}
            {user  && <div>{children}</div>}
        </>
    )
}

export default Home