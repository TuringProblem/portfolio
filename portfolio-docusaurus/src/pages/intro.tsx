import React from 'react';
import Layout from '@theme/Layout';
import { Download, Linkedin, Github, Twitter } from 'lucide-react';
import { BaseCard } from '../components/cardsV2';

const links = {
  GIT: "https://github.com/TuringProblem",
  TWITTER: "https://twitter.com/TuringProblem",
  LINKEDIN: "https://www.linkedin.com/in/andrew-wellington-37a665246/",
}


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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 items-center gap-10 justify-items-center">
            <h1 className="text-4xl min-w-[250px] max-w-[300px] font-bold flex justify-between items-center">
              Welcome! 👋
            </h1>

            <div className="flex gap-[48px] items-center justify-center min-h-[100%]">
              <BaseCard className="flex-col shadow-xs justify-center items-center p-[24px]">

                {/* Profile Image */}

                <h1>
                  hello
                </h1>

                <div className="flex justify-center items-center mb-[8px]">
                  <button
                    className="flex gap-1 hover:text-blue-600 transition-colors"
                    onClick={() => redirect(links.GIT)}
                  >
                    <Github size={24} /> Github Profile
                  </button>
                  <button
                    className="flex gap-1 hover:text-blue-600 transition-colors rounded-full"
                    onClick={() => redirect(links.TWITTER)}
                  >
                    <Twitter size={24} /> (𝕏)* Account
                  </button>
                  <button
                    className="flex gap-1 hover:text-blue-600 transition-colors"
                    onClick={() => redirect(links.LINKEDIN)}
                  >
                    <Linkedin size={24} /> Linkedin
                  </button>
                  <button className="flex gap-1 hover:text-blue-600 transition-colors">
                    <Download size={24} /> Resume
                  </button>
                </div>
                <div className="">
                  <div className="text-center">
                    I'm Andrew, a Computer Science student at Northeastern University. Academically, I'm interested in Compilers, Programming Languages, Mathematics, and Philosophy. With respect to leisurely activities - I enjoy programming, <a href="#" className="text-blue-600 hover:underline">music</a>, and sports.
                  </div>
                </div>
              </BaseCard>
              <img
                src="https://i.imgur.com/Ofi28uY.gif"
                alt="Profile gif"
                className="rounded-full h-[250px] w-[250px] object-cover"
              />


            </div>


          </div>
        </div>
      </main>
    </Layout>
  );
}
