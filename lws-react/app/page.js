import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/Product">Prodcut</Link>
    </div>
  )
}

export default page
  