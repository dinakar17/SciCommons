import React from 'react'
import { Input } from '../UI/Input'

interface Props {
  linkedInUrl: string
  setLinkedInUrl: (value: string) => void
  githubUrl: string
  setGithubUrl: (value: string) => void
  homePageUrl: string
  setHomePageUrl: (value: string) => void
  googleScholarUrl: string
  setGoogleScholarUrl: (value: string) => void
}

const Section2 = (props: Props) => {
  const { linkedInUrl, setLinkedInUrl, githubUrl, setGithubUrl, homePageUrl, setHomePageUrl, googleScholarUrl, setGoogleScholarUrl } = props
  return (
    <div className="flex flex-col w-full">
          <h2 className="text-lg font-bold mb-2">Personal Links</h2>
          <p className="text-gray-600 mb-4 text-sm dark:text-gray-400">
            Please provide links to your professional profiles on LinkedIn,
            Github, or Google Scholar, as it will help us verify your
            professional status.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <Input label="LinkedIn URL" placeholder="https://www.linkedin.com/in/your-profile" type="text" value={linkedInUrl} setValue={setLinkedInUrl} />
          <Input label="GitHub URL" placeholder="https://github.com/your-profile" type="text" value={githubUrl} setValue={setGithubUrl} />
          <Input label="Home Page URL" placeholder="https://your-homepage.com" type="text" value={homePageUrl} setValue={setHomePageUrl} />
          <Input label="Google Scholar URL" placeholder="https://scholar.google.com/citations?user=your-profile" type="text" value={googleScholarUrl} setValue={setGoogleScholarUrl} />
          
          </div>
    </div>
  )
}

export default Section2