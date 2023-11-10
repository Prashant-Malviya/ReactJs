'use client'
import React, { useState } from 'react'
import Header from '@/components/header'

const page = () => {
  const [user, setuser] = useState("Prashant")
  return (
    <div> 
    <Header user={user}/>
    
    </div>
  )
}

export default page
