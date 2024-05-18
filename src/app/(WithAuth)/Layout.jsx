'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { getSpecificData} from '@/firebase/utils'
import { onAuth } from '@/firebase/utils'

export function WithAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData } = useUser()
        const router = useRouter()
   
        useEffect(() => {
            if(user === undefined) onAuth(setUserProfile)
        }, [user, userDB])
        
        return (
            <>
                {user === undefined && <Loader />}
                {user && user.rol && <Component {...arguments} />}
            </>
        )
    }
}