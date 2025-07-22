import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink,
  Menu,
  X,
  Shield,
  Code,
  Globe,
  Terminal
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    'Cybersecurity Enthusiast',
    'Web Security Developer',
    'IT Security Analyst'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypewriterText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Network Security', level: 85 },
    { name: 'Web Application Security', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'Linux', level: 85 },
    { name: 'Vulnerability Assessment', level: 80 }
  ];

  const projects = [
    {
      title: 'Simple Network Scanner',
      description: 'A network scanning tool for security assessment',
      github: 'https://github.com/Varunch18/Simple-Network-Scanner',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Simple Web Vulnerability Scanner',
      description: 'Web application security scanner for identifying vulnerabilities',
      github: 'https://github.com/Varunch18/Simple-Web-Vulnerability-Scanner',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VC
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Varun <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Chimata</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Mail className="w-6 h-6" />, href: 'mailto:chimatavarun1@gmail.com' },
              { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/varun-chimata-156215283' },
              { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Varunch18' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('about')}
            className="mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            Explore My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate and driven aspiring IT Security Analyst with a keen interest in safeguarding digital landscapes. 
                As a fresher, I'm eager to apply my foundational understanding of cybersecurity principles and quickly develop 
                practical skills to identify vulnerabilities, mitigate threats, and contribute to robust security postures. 
                My goal is to grow into a proficient security professional, committed to continuous learning in this dynamic field.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-3 bg-white/10"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/25 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <div className="bg-white/10 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center mb-6">
                <div className="space-y-4">
                  <Terminal className="w-16 h-16 mx-auto text-cyan-400" />
                  <p className="text-gray-400">Resume PDF will be embedded here</p>
                  <p className="text-sm text-gray-500">iframe src="resume.pdf"</p>
                </div>
              </div>
              <div className="text-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'chimatavarun1@gmail.com', href: 'mailto:chimatavarun1@gmail.com' },
              { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+91-9014117479', href: 'tel:+919014117479' },
              { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', value: 'varun-chimata-156215283', href: 'https://www.linkedin.com/in/varun-chimata-156215283' },
              { icon: <Github className="w-6 h-6" />, label: 'GitHub', value: 'Varunch18', href: 'https://github.com/Varunch18' }
            ].map((contact, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      <p className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">{contact.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Varun Chimata. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
