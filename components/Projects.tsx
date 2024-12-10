'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitHub } from 'react-feather'; // For GitHub icon, ensure `react-feather` is installed.

interface Project {
  name: string;
  description: string;
  languages: string[];
  html_url: string;
  created_at: string;
  languages_url: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/justakartik/repos');
        const data: Project[] = await response.json();

        // Sort projects by creation date (newest first)
        const sortedProjects = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        const projectData = await Promise.all(
          sortedProjects.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url);
            const languages = await langResponse.json();
            return {
              name: repo.name,
              description: repo.description || 'No description provided.',
              languages: Object.keys(languages),
              html_url: repo.html_url,
              created_at: repo.created_at,
              languages_url: repo.languages_url,
            };
          })
        );

        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  const handleViewMore = () => {
    window.open('https://github.com/justakartik', '_blank'); // Redirect to GitHub when clicked
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <Card
              key={index}
              className="flex flex-col bg-gray-700 text-white overflow-hidden p-4 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
            >
              <CardHeader className="flex items-center justify-between mb-4">
                <GitHub className="text-blue-500 w-6 h-6" />
                <CardTitle className="text-xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang, langIndex) => (
                    <Badge key={langIndex} variant="secondary" className="bg-blue-600 text-white">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  asChild
                  className="w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full py-1 px-4 transition-all duration-200"
                >
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {projects.length > 6 && (
          <div className="text-center mt-8">
            <Button
              onClick={handleViewMore}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 px-6 transition-all duration-200 transform hover:scale-105"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
