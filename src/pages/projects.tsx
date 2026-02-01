import React from 'react';
import Layout from '@theme/Layout';
import { ProjectShowcase } from '@site/src/components/ProjectShowcase';

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Andrew's Software Engineering Projects">
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            A showcase of my software engineering projects, ranging from web applications
            to system programming and academic work.
          </p>
        </div>
        <ProjectShowcase />
      </main>
    </Layout>
  );
}
