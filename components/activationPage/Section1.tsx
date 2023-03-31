import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { Input } from '../UI/Input'
import { TextArea, validateBio } from '../UI/TextArea'

interface Props {
  image: string
  setImage: (image: string) => void
  username: string
  setUsername: (username: string) => void
  firstName: string
  setFirstName: (firstName: string) => void
  lastName: string
  setLastName: (lastName: string) => void
  email: string
  setEmail: (email: string) => void
  bio: string
  setBio: (bio: string) => void
}

const Section1 = (props : Props) => {
  const { image, setImage, username, setUsername, firstName, setFirstName, lastName, setLastName, email, setEmail, bio, setBio} = props

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target) {
        setImage(event.target.result as string);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 rounded-full mb-5 overflow-hidden">
            <Image src={image} alt="Avatar" layout="fill" objectFit="cover" />
          </div>
          <div className="flex justify-center items-center">
            <label
              htmlFor="avatar"
              className="px-12 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload
            </label>
            <input
              type="file"
              id="avatar"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="md:w-1/2">
            <Input label="Username" placeholder="Username" type="text" value={username} setValue={setUsername} />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <Input label="First Name" placeholder="First Name" type="text" value={firstName} setValue={setFirstName} />
            <Input label="Last Name" placeholder="Last Name" type="text" value={lastName} setValue={setLastName} />
          </div>
            <Input label="Email" placeholder="Email" type="email" value={email} setValue={setEmail} />
          
          <TextArea label="Bio" placeholder="Tell us about yourself..." value={bio} setValue={setBio} validate={validateBio}/>
          {/* <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              placeholder="Tell us about yourself..."
            ></textarea>
          </div> */}
        </div>
      </div>
  )
}

export default Section1