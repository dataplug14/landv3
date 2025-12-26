import { Server, Database, Network, Boxes, Shield, Gauge, GitBranch, BarChart3 } from 'lucide-react'

export default function PlatformServices() {
    return (
        <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl mb-4">
                        What Nubis Provides
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Nubis is a cloud infrastructure platform that provides on-demand computing resources for deploying and managing applications. Our services include compute instances, storage systems, networking components, and databases accessible through API and web console.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <ServiceCard
                        icon={<Server className="size-6" />}
                        title="Compute Instances"
                        description="Virtual machines powered by AMD EPYC processors with configurable CPU, RAM, and storage. Deploy Linux and Windows instances with automatic provisioning. Support for vertical and horizontal scaling, instance snapshots, and automated backups."
                    />
                    
                    <ServiceCard
                        icon={<Database className="size-6" />}
                        title="Storage Solutions"
                        description="Block storage volumes for persistent data with SSD and NVMe options. Object storage with S3-compatible API for files and backups. Automated snapshots, encryption at rest, and multi-region replication available."
                    />
                    
                    <ServiceCard
                        icon={<Network className="size-6" />}
                        title="Networking Services"
                        description="Virtual Private Cloud (VPC) for network isolation. Load balancers for distributing traffic across instances. Firewall rules, security groups, floating IPs, and VPN connectivity. DDoS protection and private networking included."
                    />
                    
                    <ServiceCard
                        icon={<Boxes className="size-6" />}
                        title="Container Orchestration"
                        description="Managed Kubernetes clusters for container workloads. Docker registry for storing container images. Automatic node scaling, cluster monitoring, and integrated logging. Support for Helm charts and CI/CD integration."
                    />
                    
                    <ServiceCard
                        icon={<Shield className="size-6" />}
                        title="Security & Compliance"
                        description="Identity and Access Management (IAM) for resource permissions. Two-factor authentication, API key management, and audit logging. Compliance with SOC 2, GDPR, and ISO 27001 standards. Regular security audits and penetration testing."
                    />
                    
                    <ServiceCard
                        icon={<Gauge className="size-6" />}
                        title="Monitoring & Logging"
                        description="Real-time metrics for CPU, memory, disk, and network usage. Centralized logging with search and filtering capabilities. Custom alerts and notifications via email, Slack, or webhooks. Integration with Prometheus, Grafana, and ELK stack."
                    />
                    
                    <ServiceCard
                        icon={<GitBranch className="size-6" />}
                        title="API & Automation"
                        description="RESTful API with comprehensive documentation for programmatic access. Terraform provider for infrastructure as code. CLI tools for command-line management. SDKs for Python, Go, JavaScript, and other languages."
                    />
                    
                    <ServiceCard
                        icon={<BarChart3 className="size-6" />}
                        title="Managed Databases"
                        description="Fully managed PostgreSQL, MySQL, and MongoDB databases with automated backups. High availability configurations with automatic failover. Read replicas for scaling read operations. Point-in-time recovery and version upgrades."
                    />
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-muted/50 border rounded-xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">Platform Purpose</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Nubis enables developers and organizations to deploy applications without managing physical infrastructure. Our platform handles hardware maintenance, virtualization, networking, and availability while you focus on application development. Access all services through our web-based console, command-line interface, or programmatic API. Ideal for web applications, databases, microservices, batch processing, and development environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ 
    icon, 
    title, 
    description 
}: { 
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 text-primary">
                    {icon}
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
