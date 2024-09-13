'use client'
import { Button, Checkbox, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'

const AddButton = ({ reload } : {reload: () => void}) => {
 
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [post, setPost] = useState({
        id: 0,
        userId: 0,
        publisherName: 'next blog lecture',
        title: 'next blog lecture',
        image: '',
        description: '',
        date:new Date(),
        category: 'next blog lecture',
        isPublished: true,
        isDeleted: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({
            ...post, 
            [e.target.name]: e.target.value
        })
    }

    const handlePost = async () => {
        const result = await fetch("http://localhost:5156/api/AddBlogItems",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        if(!result.ok)
        {
            const message = `Yo yo you have an Error Check your code!${result.status}`
            throw new Error(message);
        }
            let data = await result.json();
            console.log(data,"addblogItems method");
            reload();
            return data; 

    }
           
    

    

return (
  <>
    <Button onPress={onOpen} color="primary">Open Modal</Button>
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Create Post</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Title"
                placeholder="Enter your Title"
                variant="bordered"
                name='title'
                onChange={(e) => handleChange(e)}
              />
              <Input
                label="Description"
                placeholder="Enter your Description"
                variant="bordered"
                name='description'
                onChange={(e) => handleChange(e)}

              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Post
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
);
    
    
    
  
}

export default AddButton