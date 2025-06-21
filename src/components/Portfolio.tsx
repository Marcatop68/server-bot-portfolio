
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, MapPin, ExternalLink, Server, Terminal, Bot, Users, Calendar, Trophy, Code, Star, Download, Linkedin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Portfolio = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'minecraft':
        return <Server className="w-5 h-5" />;
      case 'linux':
        return <Terminal className="w-5 h-5" />;
      case 'discord':
        return <Bot className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'minecraft':
        return 'from-green-600 to-emerald-600';
      case 'linux':
        return 'from-blue-600 to-indigo-600';
      case 'discord':
        return 'from-purple-600 to-violet-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)`,
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 32px, rgba(147, 51, 234, 0.05) 32px, rgba(147, 51, 234, 0.05) 64px)`,
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            {/* Avatar with Purple Glow */}
            <div className="relative mb-8">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold shadow-2xl border-4 border-purple-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                <span className="relative z-10">{portfolioData.personal.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-violet-600 blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-3xl md:text-4xl text-purple-300 mb-4 font-light">
              {portfolioData.personal.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {portfolioData.personal.subtitle.split(' • ').map((skill, index) => (
                <Badge key={index} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white border-purple-400/30 px-4 py-2 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              {portfolioData.personal.bio}
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center text-gray-300 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-purple-500/20">
              <MapPin className="w-5 h-5 mr-3 text-purple-400" />
              {portfolioData.personal.location}
            </div>
            <div className="flex items-center text-gray-300 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-purple-500/20">
              <Mail className="w-5 h-5 mr-3 text-purple-400" />
              {portfolioData.personal.email}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl" asChild>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-900/30 px-8 py-4 text-lg backdrop-blur-sm" asChild>
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized skills across multiple technology stacks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <Card key={category} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white text-xl">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryGradient(category)} mr-3`}>
                      {getCategoryIcon(category)}
                    </div>
                    <span className="capitalize">{category === 'minecraft' ? 'Minecraft Dev' : category === 'discord' ? 'Discord Bots' : category === 'linux' ? 'Linux Admin' : 'Programming'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-xs py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing my best work and technical achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${getCategoryGradient(project.category)} text-white border-0 px-3 py-1`}>
                      {getCategoryIcon(project.category)}
                      <span className="ml-2 capitalize">{project.category}</span>
                    </Badge>
                    <Badge variant="outline" className="border-green-400/50 text-green-400 bg-green-400/10">
                      <Star className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-purple-300 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-indigo-500/20 text-indigo-200 border-indigo-400/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-purple-300 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servers Experience */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Server Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proven track record with high-performance gaming communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.workedServers.map((server) => (
              <Card key={server.id} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Server className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mb-2">
                          <Users className="w-3 h-3 mr-1" />
                          {server.playerCount}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{server.name}</CardTitle>
                  <CardDescription className="text-gray-300 mb-4">{server.description}</CardDescription>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                      <Trophy className="w-4 h-4 mr-1" />
                      {server.role}
                    </span>
                    <span className="flex items-center text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-1" />
                      {server.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-purple-300 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {server.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-300 text-sm uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {server.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Call to Action */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-purple-900/50 via-violet-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on your next project. I bring expertise in server development, system administration, and bot creation to help bring your ideas to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 px-10 py-5 text-lg font-semibold shadow-2xl" asChild>
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="w-6 h-6 mr-3" />
                Start a Project
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-900/30 px-10 py-5 text-lg backdrop-blur-sm" asChild>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 mr-3" />
                View Portfolio
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <p className="text-gray-400 text-sm">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
