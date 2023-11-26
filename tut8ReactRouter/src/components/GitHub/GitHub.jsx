import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/prashant-malviya')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Bio : {data.bio}
      <img src={data.avatar_url} alt="github profile pic"  />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/prashant-malviya")

   return response.json();
}
