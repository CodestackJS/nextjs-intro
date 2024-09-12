

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react'

interface Post {
    id: number,
    title: string,
    description: string
}


const HomePage = async () => {
    let result = await fetch('http://localhost:5156/api/Blog/GetPublishedItems');
    let posts:Post[] = await result.json();

  return (
    <>
    <div className='grid gap-4 grid-cols-4 mt-8 mx-[1%]'>
        {
            posts.map((post, index)=>(
            <Card key={index}>
                <CardHeader>
                    <h1 className='text-large font-bold'>{post.title}</h1>
                </CardHeader>
                <CardBody>
                    <p>{post.description}</p>
                </CardBody>

            </Card>

            ))
        }


    </div>
    </>
  )
}

export default HomePage