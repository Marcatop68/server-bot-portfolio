
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, MapPin, ExternalLink, Server, Terminal, Bot, Users, Calendar, Trophy } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Portfolio = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'minecraft':
        return <Server className="w-4 h-4" />;
      case 'linux':
        return <Terminal className="w-4 h-4" />;
      case 'discord':
        return <Bot className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'minecraft':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'linux':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'discord':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 16px, rgba(34, 197, 94, 0.1) 16px, rgba(34, 197, 94, 0.1) 32px)`,
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-lg mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-2xl border border-green-500/30">
              {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 font-mono">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-2xl text-gray-300 mb-2 font-mono">
              {portfolioData.personal.title}
            </h2>
            <p className="text-lg text-green-400 font-medium mb-6 font-mono">
              {portfolioData.personal.subtitle}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              {portfolioData.personal.bio}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-gray-300 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700">
              <MapPin className="w-4 h-4 mr-2 text-green-400" />
              {portfolioData.personal.location}
            </div>
            <div className="flex items-center text-gray-300 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700">
              <Mail className="w-4 h-4 mr-2 text-green-400" />
              {portfolioData.personal.email}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700 border-green-500">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Bot className="w-4 h-4 mr-2" />
              {portfolioData.personal.discord}
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16 px-4 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-green-400">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Server className="w-5 h-5 mr-2 text-green-400" />
                  Minecraft Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.minecraft.map((skill, index) => (
                    <Badge key={index} className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Terminal className="w-5 h-5 mr-2 text-blue-400" />
                  Linux Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.linux.map((skill, index) => (
                    <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Bot className="w-5 h-5 mr-2 text-purple-400" />
                  Discord Bot Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.discord.map((skill, index) => (
                    <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <ExternalLink className="w-5 h-5 mr-2 text-gray-400" />
                  General Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.general.map((skill, index) => (
                    <Badge key={index} className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Worked Servers Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-green-400">Servers I've Worked On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.workedServers.map((server) => (
              <Card key={server.id} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Server className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                        <Users className="w-3 h-3 mr-1" />
                        {server.playerCount}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{server.name}</CardTitle>
                  <CardDescription className="text-gray-300">{server.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
                      {server.role}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-blue-400" />
                      {server.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {server.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Achievements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {server.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-16 px-4 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-green-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(project.category)}>
                      {getCategoryIcon(project.category)}
                      <span className="ml-1 capitalize">{project.category}</span>
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">{project.status}</Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 border-green-500">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-green-400">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <Card key={index} className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-300">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-green-800 via-emerald-800 to-teal-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Interested in collaborating on a project or need help with server development?
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="bg-gray-800 text-white hover:bg-gray-700">
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-800" asChild>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
