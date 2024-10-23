import React from 'react';
import { Camera, GitCompare, BookOpen, FileText, FileInput } from 'lucide-react';

const InfoGraphic = () => {
  const projects = [
    {
      title: 'ChatGPT Enterprise Pilot',
      description: 'Investigating suitability of ChatGPT Enterprise with personalized training and regular communications.',
      icon: Camera,
      color: 'bg-blue-100',
    },
    {
      title: 'Copilot for Microsoft 365 Pilot',
      description: 'Running a pilot with 500 participants to discover suitability of integrated tools within the Microsoft ecosystem.',
      icon: GitCompare,
      color: 'bg-green-100',
    },
    {
      title: 'AI Teaching and Learning Exploration Fund',
      description: 'Supporting exploration of AI in teaching, learning, and academic administration at Oxford.',
      icon: BookOpen,
      color: 'bg-yellow-100',
    },
    {
      title: 'Generative AI tools for research',
      description: 'Developing training and reviewing tools like Elicit, Consensus, and Connected Papers for literature research.',
      icon: FileText,
      color: 'bg-purple-100',
    },
    {
      title: 'Propose a project',
      description: 'Fill out our expression of interest form to propose a project for us to work on with you.',
      icon: FileInput,
      color: 'bg-red-100',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className={`${project.color} p-4 rounded-lg shadow-md`}>
            <div className="flex items-center mb-2">
              <project.icon className="w-6 h-6 mr-2" />
              <h2 className="text-lg font-bold">{project.title}</h2>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="font-bold">Contact us: AIMLSupportCentre@it.ox.ac.uk</p>
      </div>
    </div>
  );
};

export default InfoGraphic;