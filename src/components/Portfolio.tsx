
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
        return 'from-emerald-500 to-green-600';
      case 'linux':
        return 'from-blue-500 to-cyan-600';
      case 'discord':
        return 'from-indigo-500 to-purple-600';
      default:
        return 'from-slate-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            {/* Enhanced Avatar */}
            <div className="relative mb-8 group">
              <div className="w-44 h-44 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-full mx-auto flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white/20 relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-spin-slow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <span className="relative z-10">{portfolioData.personal.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="absolute inset-0 w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              {portfolioData.personal.name}
            </h1>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl text-gray-300 mb-4 font-light animate-slide-up">
                {portfolioData.personal.title}
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8 mt-8">
              {portfolioData.personal.subtitle.split(' • ').map((skill, index) => (
                <Badge 
                  key={index} 
                  className="bg-gradient-to-r from-slate-700 to-slate-600 text-white border border-slate-500/50 px-4 py-2 text-sm font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in animation-delay-500">
              {portfolioData.personal.bio}
            </p>
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center text-gray-300 bg-slate-800/50 backdrop-blur-lg px-6 py-4 rounded-2xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <MapPin className="w-5 h-5 mr-3 text-emerald-400" />
              {portfolioData.personal.location}
            </div>
            <div className="flex items-center text-gray-300 bg-slate-800/50 backdrop-blur-lg px-6 py-4 rounded-2xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              {portfolioData.personal.email}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 mr-3" />
                View My Work
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-purple-500 px-10 py-5 text-lg backdrop-blur-lg hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="w-6 h-6 mr-3" />
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized skills across multiple technology stacks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <Card 
                key={category} 
                className="bg-slate-800/50 border-slate-600/30 backdrop-blur-lg hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white text-xl group-hover:text-purple-300 transition-colors duration-300">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryGradient(category)} mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {getCategoryIcon(category)}
                    </div>
                    <span className="capitalize">
                      {category === 'minecraft' ? 'Minecraft Dev' : 
                       category === 'discord' ? 'Discord Bots' : 
                       category === 'linux' ? 'Linux Admin' : 'Programming'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-slate-700/50 text-slate-200 border-slate-500/50 text-xs py-1 hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
                      >
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
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing my best work and technical achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-slate-800/60 border-slate-600/30 backdrop-blur-lg hover:border-emerald-500/40 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${getCategoryGradient(project.category)} text-white border-0 px-3 py-1 group-hover:scale-105 transition-transform duration-300`}>
                      {getCategoryIcon(project.category)}
                      <span className="ml-2 capitalize">{project.category}</span>
                    </Badge>
                    <Badge variant="outline" className="border-emerald-400/50 text-emerald-400 bg-emerald-400/10 group-hover:bg-emerald-400/20 transition-colors duration-300">
                      <Star className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-emerald-400 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-slate-700/50 text-slate-200 border-slate-500/50 text-xs hover:bg-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-emerald-400 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg" asChild>
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
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-orange-400 bg-clip-text text-transparent">
              Server Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proven track record with high-performance gaming communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.workedServers.map((server, index) => (
              <Card 
                key={server.id} 
                className="bg-slate-800/60 border-slate-600/30 backdrop-blur-lg hover:border-orange-500/40 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Server className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mb-2 group-hover:scale-105 transition-transform duration-300">
                          <Users className="w-3 h-3 mr-1" />
                          {server.playerCount}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">{server.name}</CardTitle>
                  <CardDescription className="text-gray-400 mb-4">{server.description}</CardDescription>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30 group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <Trophy className="w-4 h-4 mr-1" />
                      {server.role}
                    </span>
                    <span className="flex items-center text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/30 group-hover:bg-blue-400/20 transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      {server.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-orange-400 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {server.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-slate-700/50 text-slate-200 border-slate-500/50 text-xs hover:bg-orange-600/30 hover:border-orange-500/50 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-400 text-sm uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {server.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
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

      {/* Enhanced Call to Action */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-900/80 via-purple-900/20 to-slate-900/80">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on your next project. I bring expertise in server development, system administration, and bot creation to help bring your ideas to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="w-6 h-6 mr-3" />
                Start a Project
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-500 text-slate-300 hover:bg-slate-700/50 hover:border-purple-500 px-12 py-6 text-xl backdrop-blur-lg hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 mr-3" />
                View Portfolio
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-600/30">
            <p className="text-gray-500 text-sm">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
