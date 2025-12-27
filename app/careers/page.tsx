import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, Heart, Coffee } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Nubis',
  description: 'Join Nubis and help build the next generation of cloud infrastructure. We\'re hiring engineers, designers, and cloud specialists.',
}

const jobOpenings = [
  {
    id: 'senior-backend-engineer',
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$140k - $200k',
    description: 'Build scalable backend services for our cloud infrastructure platform. Work with Go, Kubernetes, and distributed systems.',
    requirements: [
      '5+ years of backend development experience',
      'Strong knowledge of Go, Python, or Rust',
      'Experience with Kubernetes and containerization',
      'Understanding of distributed systems and microservices',
      'Experience with PostgreSQL or similar databases',
    ],
    responsibilities: [
      'Design and implement scalable backend services',
      'Work on core infrastructure components',
      'Optimize performance and reliability',
      'Collaborate with frontend and DevOps teams',
      'Participate in code reviews and architecture decisions',
    ],
  },
  {
    id: 'cloud-infrastructure-engineer',
    title: 'Cloud Infrastructure Engineer',
    department: 'Operations',
    location: 'Remote (Global)',
    type: 'Full-time',
    salary: '$130k - $180k',
    description: 'Manage and scale our cloud infrastructure. Work with bare metal servers, networking, and storage systems.',
    requirements: [
      '4+ years in cloud infrastructure or DevOps',
      'Experience with Linux systems administration',
      'Knowledge of networking (BGP, VLANs, firewalls)',
      'Familiarity with automation tools (Terraform, Ansible)',
      'Understanding of virtualization technologies',
    ],
    responsibilities: [
      'Manage physical and virtual infrastructure',
      'Implement monitoring and alerting systems',
      'Automate deployment and configuration',
      'Troubleshoot infrastructure issues',
      'Plan capacity and optimize resource utilization',
    ],
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$120k - $170k',
    description: 'Build intuitive user interfaces for our cloud management console. Work with React, TypeScript, and modern web technologies.',
    requirements: [
      '3+ years of frontend development experience',
      'Expert in React and TypeScript',
      'Strong CSS and responsive design skills',
      'Experience with Next.js or similar frameworks',
      'Understanding of API integration and state management',
    ],
    responsibilities: [
      'Develop new features for the web console',
      'Improve user experience and interface design',
      'Optimize frontend performance',
      'Work closely with backend team on API design',
      'Write tests and maintain code quality',
    ],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time',
    salary: '$110k - $150k',
    description: 'Design beautiful and functional interfaces for developers. Create design systems and user experiences that make cloud infrastructure accessible.',
    requirements: [
      '3+ years of product design experience',
      'Portfolio demonstrating UX/UI design skills',
      'Proficiency in Figma or similar tools',
      'Understanding of design systems and component libraries',
      'Experience designing for technical users',
    ],
    responsibilities: [
      'Design user interfaces and experiences',
      'Create and maintain design system',
      'Conduct user research and testing',
      'Collaborate with engineering team',
      'Define product design direction',
    ],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    salary: '$130k - $180k',
    description: 'Build CI/CD pipelines and automation for our platform. Ensure reliability and scalability of our infrastructure.',
    requirements: [
      '4+ years of DevOps or SRE experience',
      'Strong knowledge of Kubernetes and Docker',
      'Experience with CI/CD tools (GitHub Actions, GitLab CI)',
      'Proficiency in scripting (Bash, Python)',
      'Understanding of monitoring and observability',
    ],
    responsibilities: [
      'Design and maintain CI/CD pipelines',
      'Implement infrastructure as code',
      'Monitor system health and performance',
      'Automate operational tasks',
      'Improve deployment processes',
    ],
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    department: 'Product',
    location: 'Remote (Global)',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Create clear and comprehensive documentation for developers. Write guides, tutorials, and API documentation.',
    requirements: [
      '2+ years of technical writing experience',
      'Strong writing and communication skills',
      'Understanding of cloud infrastructure concepts',
      'Experience with documentation tools (Markdown, Git)',
      'Ability to explain complex technical concepts',
    ],
    responsibilities: [
      'Write and maintain product documentation',
      'Create tutorials and getting started guides',
      'Document APIs and SDKs',
      'Collaborate with engineering team',
      'Improve documentation based on user feedback',
    ],
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Market-leading compensation with equity options',
  },
  {
    icon: MapPin,
    title: 'Remote First',
    description: 'Work from anywhere in the world',
  },
  {
    icon: Heart,
    title: 'Health Coverage',
    description: 'Comprehensive health, dental, and vision insurance',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work when you\'re most productive',
  },
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Learn and advance your career',
  },
  {
    icon: Coffee,
    title: 'Unlimited PTO',
    description: 'Take time off when you need it',
  },
]

export default function CareersPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Briefcase className="size-4" />
                Careers at Nubis
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Build the Future of Cloud Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our team and help developers deploy applications without the complexity of traditional cloud providers. 
                We're building enterprise-grade infrastructure that's transparent, affordable, and developer-friendly.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Nubis?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer competitive benefits and a great work environment
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-background rounded-xl p-6 border">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 mb-4">
                    <benefit.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity at Nubis
              </p>
            </div>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow bg-background">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="size-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="size-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="size-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Info */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border bg-background p-8 md:p-12 text-center">
              <Users className="size-12 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Click "Apply Now" on any position to submit your application via our Notion form. 
                We review all applications and will get back to you within 5 business days.
              </p>
              <p className="text-sm text-muted-foreground">
                Don't see a role that fits? Send us your resume at{' '}
                <a href="mailto:careers@usenubis.com" className="text-primary hover:underline">
                  careers@usenubis.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
