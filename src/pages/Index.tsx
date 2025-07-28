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
  Terminal,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaLinux, FaGitAlt, FaPuzzlePiece } from 'react-icons/fa'; // <--- ADD FaPuzzlePiece HERE
import { SiMysql, SiWireshark } from 'react-icons/si';
import { IoMdCode } from 'react-icons/io';
import { Network } from 'lucide-react'

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
    { name: 'Python', icon: FaPython },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'Java', icon: FaJava },
    { name: 'Linux', icon: FaLinux },
    { name: 'Data Structures and Algorithms', icon: FaPuzzlePiece },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Wireshark', icon: SiWireshark },
    { name: 'Nmap', icon: Network },,
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
              {['Home', 'About', 'Education', 'Experience', 'Certifications', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
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
              {['Home', 'About', 'Education', 'Experience', 'Certifications', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
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
            onClick={() => scrollToSection('projects')}
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

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-xl">Bachelor of Technology in Computer Science and Engineering (Honors)</CardTitle>
                  <CardDescription className="text-gray-400">Koneru Lakshmaiah Educational Foundation, Guntur</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-300"><span className="text-cyan-400 font-semibold">Duration:</span> Sep 2021 - July 2025</p>
                <p className="text-gray-300"><span className="text-cyan-400 font-semibold">CGPA:</span> 8.66</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-xl">Cybersecurity Analyst - Job Simulation</CardTitle>
                  <CardDescription className="text-gray-400">Datacom Cybersecurity Team | Forage Virtual</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300"><span className="text-cyan-400 font-semibold">Duration:</span> Sep 2024 – Nov 2024</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Completed a simulation focused on protecting clients from cyber threats, mimicking real-world scenarios handled by Datacom's cybersecurity team.
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Investigated a simulated cyberattack, analyzing its impact and producing a detailed report with findings and actionable recommendations to enhance cybersecurity posture.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
<section id="certifications" className="py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      Certifications
    </h2>
    <div className="grid md:grid-cols-2 gap-6">

      {/* CEH Certification Card - Clickable to download PDF */}
      <a
        href="https://drive.google.com/file/d/1msd5ad-duczjzrl-WJq1rZsnTFGvtoOC/view?usp=sharing" // Link to the PDF
        download="CEH_v12_Certificate_Varun_Chimata.pdf" // Suggests a filename for download
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
        className="block" // Make the link a block-level element to wrap the card
      >
        <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 h-full"> {/* h-full ensures consistent height */}
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                <Award className="w-6 h-6 text-white" /> {/* Added text-white for visibility */}
              </div>
              <div>
                <CardTitle className="text-lg">CEH Certification (CEH v12)</CardTitle>
                <CardDescription className="text-gray-400">EC-Council</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </a>

      {/* AWS Certified Cloud Practitioner Card - Clickable to Credly badge */}
      <a
        href="https://www.credly.com/badges/e1e8f654-fc59-4d84-86e7-58fd4ffa21ea/public_url" // Link to Credly badge
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
        className="block" // Make the link a block-level element to wrap the card
      >
        <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 h-full"> {/* h-full ensures consistent height */}
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                <Award className="w-6 h-6 text-white" /> {/* Added text-white for visibility */}
              </div>
              <div>
                <CardTitle className="text-lg">AWS Certified Cloud Practitioner</CardTitle>
                <CardDescription className="text-gray-400">Amazon Web Services</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </a>

    </div>
  </div>
</section>

      {/* Skills Section */}
<section id="skills" className="py-20 px-4">
  <div className="max-w-6xl mx-auto"> {/* Increased max-w for more columns */}
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      Skills
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> {/* Responsive grid layout */}
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full" // h-full for consistent card height
        >
          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[150px]">
            {/* Conditional rendering for the icon component */}
            {skill.icon && (
              // This is how you render a React component stored in a variable (skill.icon)
              // The `className` directly styles the SVG icon generated by react-icons
              <skill.icon className="w-16 h-16 mb-4 text-cyan-400" />
            )}
            <span className="text-lg font-semibold text-white">
              {skill.name}
            </span>
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
      <CardContent className="p-8 text-center"> {/* Added text-center here */}
        <div className="space-y-6"> {/* Increased space for better alignment */}
          <p className="text-gray-400">
            To view or download my resume.
          </p>

          {/* This is the single button for download/view in new tab */}
          <a
            href="https://drive.google.com/file/d/1oTCpJ7kQPnyaIeNJwkXKQo4LIM4rrROR/view?usp=sharing"
            target="_blank" // Opens the resume in a new browser tab
            rel="noopener noreferrer" // Good security practice
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3" // Slightly larger icon and more margin
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download / View Resume
          </a>
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
        { icon: <Mail className="w-6 h-6 text-white" />, label: 'Email', value: 'chimatavarun1@gmail.com', href: 'mailto:chimatavarun1@gmail.com' },
        { icon: <Phone className="w-6 h-6 text-white" />, label: 'Phone', value: '+91-9014117479', href: 'tel:+919014117479' },
        { icon: <Linkedin className="w-6 h-6 text-white" />, label: 'LinkedIn', value: 'Varun Chimata', href: 'https://www.linkedin.com/in/varun-chimata-156215283' }, // Changed 'value' here
        // The GitHub entry remains removed
      ].map((contact, index) => (
        <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                {/* Ensure icons have text-white if they need to be white */}
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-gray-400">{contact.label}</p>
                <p className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                  {/* Removed the conditional span for LinkedIn as the value is now shorter and doesn't need break-all */}
                  {contact.value}
                </p>
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
            © 2025 Varun Chimata. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
