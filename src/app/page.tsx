import { ExternalLink, Github, Mail, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "EKS-Terraform-GitHub-Actions",
      description:
        "Designed and implemented automated infrastructure deployment across AWS using Terraform and jenkins server. Reduced deployment time by 75% and improved consistency across environments.",
      technologies: ["Terraform", "jenkins", "AWS", "Eks", "Github"],
      link: "https://github.com/hannaodu/eks-terraform-project",
      type: "Infrastructure",
    },
    {
      title: "Serverless Contact Form - HanadeTravel",
      description:
        "Designed and deployed a fully serverless contact form solution on AWS, implementing a complete full-stack architecture from frontend to backend. The responsive frontend was hosted on Amazon S3 for high availability with zero server management, while AWS Lambda functions handled form processing and business logic. API Gateway was configured with secure CORS policies to facilitate safe client-server communication. Form submissions triggered real-time email notifications via Amazon SES and were automatically persisted in DynamoDB for reliable storage and retrieval. The entire infrastructure was automated using Terraform, ensuring consistent and scalable deployment with minimal operational overhead.",
      technologies: ["AWS Lambda", "API Gateway", " S3", "Terraform", "SES"],
      link: "https://github.com/hannaodu/ProjectWebHanna.git",
      type: "Cloud & DevOps",
    },
    {
      title: "Kubernetes DevSecOps Tetris Game",
      description:
        "I successfully designed and implemented a complete DevSecOps pipeline for deploying a React-based Tetris game on Kubernetes. This project demonstrates modern cloud-native development practices with robust security integration.The Tetris game is now live and accessible via AWS Load Balancer, showcasing a production-ready application deployed through automated security-focused pipelines. This project highlights expertise in cloud-native development, security integration, and infrastructure automation.",
      technologies: [
        "React.js",
        "Kubernetes, Docker, AWS",
        "Jenkins, SonarQube, Trivy, OWASP, ArgoCD",
        "Static code analysis, vulnerability scanning, container security",
      ],
      link: " https://github.com/hannaodu/End-to-End-Kubernetes-DevSecOps-Tetris.git",
      type: "Static code analysis, vulnerability scanning, container security",
    },
    {
      title: "ProjectWebHanna",
      description:
        "I built my personal website using the AWS Cloud Development Kit (CDK) to define the infrastructure as code, enabling a fully automated and scalable deployment pipeline. The site is hosted and deployed via AWS Amplify, allowing for continuous integration and delivery with every code update. This project showcases my ability to leverage modern cloud tools to build, manage, and deploy web applications efficiently.",
      technologies: ["HTML", "Aws", "Amplify", "CDK", "Github"],
      link: "https://github.com/hannaodu/ProjectWebHanna",
      type: "Infrastruture",
    },
    {
      title: "GitOps CI/CD Platform",
      description:
        "Implemented a GitOps-based continuous deployment system using ArgoCD and Tekton. Enables secure, auditable deployments with automatic rollback capabilities.",
      technologies: ["ArgoCD", "Tekton", "Kubernetes", "Git", "Helm"],
      link: "https://github.com/yourusername/gitops-platform",
      type: "DevOps",
    },
    {
      title: "Cloud Security Compliance Scanner",
      description:
        "Built an automated security compliance scanner that continuously monitors cloud resources against CIS benchmarks and custom policies. Integrates with SIEM systems for real-time alerting.",
      technologies: [
        "Python",
        "AWS Config",
        "Terraform",
        "CloudFormation",
        "Splunk",
      ],
      link: "https://github.com/yourusername/security-scanner",
      type: "Security",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 p-1">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={192}
                    height={192}
                    className="w-full h-full rounded-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
                <span className="text-black block"> Hanna Odulaja</span>
                <span className="text-purple-600 block mt-2">
                  Cloud Infrastructure Engineer
                </span>
              </h1>
              <p className="text-xl text-gray-600 text-pretty mb-6 leading-relaxed">
                Passionate about building scalable,secure,and cost-effective
                cloud solutions. Specializing in multi-cloud architectures,
                DevOps automation, and infrastructure as code.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  London
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  5+ Years Experience
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-black block"> About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">
                Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in cloud engineering, I
                specialize in designing and implementing robust, scalable
                infrastructure solutions across AWS, Azure, and Google Cloud
                Platform. My passion lies in automation, security, and cost
                optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Azure",
                  "GCP",
                  "Kubernetes",
                  "Terraform",
                  "Docker",
                  "Python",
                  "Go",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-black">
                Certifications
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS Solutions Architect Professional</li>
                <li>• AWS Certified Solution Associate </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-black block"> Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-2 py-1 border border-gray-300 text-gray-600 text-xs font-medium rounded">
                    {project.type}
                  </span>
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-balance group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-black block"> Lets Work Together</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-pretty font-bold">
            Interested in collaborating on cloud infrastructure projects or
            discussing opportunities? Id love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:odulajahanna@yahoo.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://drive.google.com/file/d/1dolA48uUtqbVhLnQHkuFd3hEAk-HON8U/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
            >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/hanna-odulaja-946073b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hannaodu?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 hanna odulaja. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
