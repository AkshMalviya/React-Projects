import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/aksh978")
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, [])
  return (
    <>
        <div className='bg-gray-600 text-center text-white m-4 p-3 text-3xl'>
            Github Followers: {data.followers}
        </div>
        <img src={data.avatar_url} className='mx-auto border border-gray-600 rounded-md' alt="image" width={300} height={300} />
    </>
  )
}

export const githubFetch = async() => {
    const data = await fetch("https://api.github.com/users/aksh978")
                        .then((res) => res.json())
    return data
}