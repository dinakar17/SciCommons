import React, { useState } from "react";
import { useRouter } from "next/router";
import Section1 from "@/components/activationPage/Section1";
import Section2 from "@/components/activationPage/Section2";
import Section3 from "@/components/activationPage/Section3";
import Section4 from "@/components/activationPage/Section4";


const ActivatePage = () => {
  const router = useRouter();

  const [image, setImage] = useState("/images/defaultavatar.jfif");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [homePageUrl, setHomePageUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [googleScholarUrl, setGoogleScholarUrl] = useState("");

  const [tags, setTags] = useState<string[]>([]);

  const [positions, setPositions] = useState([{ position: "", startYear: "", endYear: "" }]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit form data
    router.push("/dashboard");
  };


const section1Props = { image, setImage, username, setUsername, firstName, setFirstName, lastName, setLastName, email, setEmail, bio, setBio};
const section2Props = { homePageUrl, setHomePageUrl, linkedInUrl, setLinkedInUrl, githubUrl, setGithubUrl, googleScholarUrl, setGoogleScholarUrl };
const section3Props = { positions, setPositions };
const section4Props = { tags, setTags };


  return (
    <div className="flex flex-col items-center justify-center py-8 w-[90%] md:w-2/3 mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        Welcome to the Research Community
      </h1>
      <p className="text-gray-600 mb-8 dark:text-gray-400">
        Congratulations [User&apos;s Name]! You&apos;ve successfully registered for the
        Research Community, a social-web tool for rating and commenting on
        research reports. Fill in the form below to complete your profile and
        connect with other researchers. Thank you for joining us and we look
        forward to seeing your contributions on the platform!
      </p>
      <form onSubmit={handleSubmit}>
      {/* Section 1: Avatar and Form */}
      <Section1 {...section1Props} />
      {/* Section 2 */}
      <Section2 {...section2Props} />
      {/* Section 3 */}
      <Section3 {...section3Props} />
      {/* Section 4 */}
      <Section4 {...section4Props} />
      {/* Note: Only your bio, username, and profile photo are displayed to the other users */}
      <p className="text-gray-600 mt-8 text-sm text-left w-full dark:text-gray-400">
        <span className="font-bold text-purple-600">*Note:</span> Only your bio, username, and profile photo are displayed to the other users
      </p>
      {/* center the button */}
      <div className="flex items-center justify-center">
      <button
      type="submit"
       className="w-full max-w-md py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-8">
        Activate account
      </button>
      </div>
      </form>
    </div>
  );
};

export default ActivatePage;
