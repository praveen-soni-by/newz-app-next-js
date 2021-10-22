import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function ID() {
   const router =  useRouter();
   console.log(router.query)
   console.log(router.query.id)
   
    return (
        <div>
           {router.query.id}
        </div>
    )
}
