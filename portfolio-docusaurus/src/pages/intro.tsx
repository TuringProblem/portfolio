import React from 'react';
import Layout from '@theme/Layout';
import { Download, Linkedin, Github, Twitter } from 'lucide-react';

const GITHUB_PROFILE = "https://github.com/TuringProblem";
const TWITTER_PROFILE = "https://twitter.com/TuringProblem";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/andrew-wellington-37a665246/";

const redirect = (url: string) => {
  window.location.href = url;
}

export default function IntroPage(): JSX.Element {
  return (
    <Layout
      title="About Me"
      description="Introduction to Andrew">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
            <h1 className="text-4xl min-w-[250px] max-w-[300px] font-bold flex justify-between items-center">
              Welcome! 👋
            </h1>

            {/* Social Links */}
            <div className="flex flex-col gap-2 min-w-[200px] max-w-[200px]">
              <button
                className="flex gap-1 hover:text-blue-600 transition-colors"
                onClick={() => redirect(GITHUB_PROFILE)}
              >
                <Github size={24} /> Github Profile
              </button>
              <button
                className="flex gap-1 hover:text-blue-600 transition-colors"
                onClick={() => redirect(TWITTER_PROFILE)}
              >
                <Twitter size={24} /> (𝕏)* Account
              </button>
              <button
                className="flex gap-1 hover:text-blue-600 transition-colors"
                onClick={() => redirect(LINKEDIN_PROFILE)}
              >
                <Linkedin size={24} /> Linkedin
              </button>
              <button className="flex gap-1 hover:text-blue-600 transition-colors">
                <Download size={24} /> Resume
              </button>
            </div>

            {/* Bio */}
            <div className="my-6 max-w-[700px] min-w-[400px] text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg p-4">
              <div className="text-center">
                I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leisurely activities - I enjoy programming, <a href="#" className="text-blue-600 hover:underline">music</a>, and sports.
              </div>
            </div>

            {/* Profile Image */}
            <img
              src="https://i.imgur.com/Ofi28uY.gif"
              alt="Profile gif"
              className="rounded-full h-[250px] w-[250px] object-cover"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
