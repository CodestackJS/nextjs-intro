
//converting to client component
'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const WelcomeButton = () => {
    const router = useRouter();

    const handleClick = () => {
        console.log("I've been clicked");
        router.push('./HomePage');
    }



  return (
    <>
    
        <Button color="primary" variant="shadow" onClick={handleClick} >Click Me</Button>
    
    
    
    </>
  )
}

export default WelcomeButton