import { useState, useEffect } from "react"

// ── Resume route redirect ─────────────────────────────────────────────────────
if (typeof window !== "undefined" && window.location.pathname === "/resume") {
  window.location.replace("/resume.pdf")
}

// ── Types ────────────────────────────────────────────────────────────────────
type Stage = {
  id: string
  label: string
  subtitle: string
  color: string
  jobs: Job[]
}
type Job = {
  repo: string
  url: string
  lang: string
  langColor: string
  updated: string
  narrative: string
  tags: string[]
  live?: string
  duration?: string
}

// ── Pipeline Data ─────────────────────────────────────────────────────────────
const PIPELINE: Stage[] = [
  {
    id: "foundation",
    label: "01 · FOUNDATION",
    subtitle:
      "Every pipeline starts with a solid base. Tooling, scripting, orchestration.",
    color: "#3b82f6",
    jobs: [
      {
        repo: "shellscript",
        url: "https://github.com/hemasundharGit/shellscript",
        lang: "Shell",
        langColor: "#89e051",
        updated: "Jul 2026",
        narrative:
          "Bash utilities built while internalizing cloud automation patterns. The muscle memory for every deploy that came after.",
        tags: ["bash", "automation", "linux"],
      },
      {
        repo: "Kubernetes-Learnings-Zero-to-Production",
        url: "https://github.com/hemasundharGit/Kubernetes-Learnings-Zero-to-Production",
        lang: "JavaScript",
        langColor: "#f1e05a",
        updated: "Apr 2026",
        narrative:
          "The complete Kubernetes journey documented from first pod to production patterns — every concept earned through hands-on breakage and recovery.",
        tags: ["kubernetes", "docker", "devops", "k8s"],
      },
      {
        repo: "jenkins-shared-libraries",
        url: "https://github.com/hemasundharGit/jenkins-shared-libraries",
        lang: "Groovy",
        langColor: "#4298b8",
        updated: "May 2026",
        narrative:
          "A production-ready collection of reusable Groovy pipeline steps — write your CI/CD logic once, use it across every Jenkins pipeline.",
        tags: ["jenkins", "groovy", "ci-cd", "shared-library"],
      },
    ],
  },
  {
    id: "build",
    label: "02 · BUILD",
    subtitle:
      "Applications shipped. Real products, real constraints, real users.",
    color: "#8b5cf6",
    jobs: [
      {
        repo: "Expenses-Tracker-WebApp",
        url: "https://github.com/hemasundharGit/Expenses-Tracker-WebApp",
        lang: "Java/HTML",
        langColor: "#b07219",
        updated: "Feb 2026",
        narrative:
          "A robust financial management solution built using Spring Boot, Spring MVC, Spring Security, Spring Data JPA, and MySQL. Full-stack from auth to persistence.",
        tags: ["spring-boot", "spring-security", "mysql", "thymeleaf"],
      },
      {
        repo: "full-stack_chatApp",
        url: "https://github.com/hemasundharGit/full-stack_chatApp",
        lang: "Full-Stack",
        langColor: "#61dafb",
        updated: "Apr 2026",
        narrative:
          "Building a scalable and secure real-time chat experience — WebSocket-based, containerized, and deployed on Vercel with production observability in mind.",
        tags: ["react", "node.js", "websocket", "docker"],
        live: "https://full-stack-chat-app-xi.vercel.app",
      },
      {
        repo: "ngtc-hack",
        url: "https://github.com/hemasundharGit/ngtc-hack",
        lang: "JavaScript",
        langColor: "#f1e05a",
        updated: "Apr 2026",
        narrative:
          "Hackathon build — concept to deployed product in one session. Speed under pressure, shipped live.",
        tags: ["hackathon", "javascript", "vercel"],
        live: "https://ngtc-hack.vercel.app",
      },
      {
        repo: "Depeord",
        url: "https://github.com/hemasundharGit/Depeord",
        lang: "HTML",
        langColor: "#e34c26",
        updated: "Jul 2026",
        narrative:
          "Web project designed, built, and deployed to Vercel. Iteration in the open.",
        tags: ["html", "vercel", "web"],
        live: "https://depeord.vercel.app",
      },
    ],
  },
  {
    id: "deploy",
    label: "03 · DEPLOY",
    subtitle:
      "Infrastructure provisioned. Applications containerized and shipped to cloud.",
    color: "#f59e0b",
    jobs: [
      {
        repo: "Spotsure-Biz-Task",
        url: "https://github.com/hemasundharGit/Spotsure-Biz-Task",
        lang: "Shell/Python",
        langColor: "#89e051",
        updated: "Jul 2026",
        narrative:
          "Handed over with a broken Docker/Nginx deployment — a backend bound to the wrong interface, a missing volume mount, a misrouted proxy_pass. Debugged all three. Deployed the fixed stack to AWS EC2 with an automated GitHub Actions SSH pipeline.",
        tags: ["fastapi", "docker", "nginx", "aws-ec2", "github-actions"],
        duration: "~2h debug",
      },
      {
        repo: "chat-app-k8s-integration",
        url: "https://github.com/hemasundharGit/chat-app-k8s-integration",
        lang: "JavaScript",
        langColor: "#f1e05a",
        updated: "Apr 2026",
        narrative:
          "The chat app graduates from Compose to Kubernetes — services, ingress, persistent volumes, and rolling deployments on a live cluster.",
        tags: ["kubernetes", "helm", "ingress", "k8s"],
      },
      {
        repo: "Wanderlust-Mega-Project",
        url: "https://github.com/hemasundharGit/Wanderlust-Mega-Project",
        lang: "TypeScript",
        langColor: "#3178c6",
        updated: "Feb 2026",
        narrative:
          "End-to-end three-tier MERN stack deployed on AWS EKS — VPC, subnets, IAM, EKS via Terraform, CI/CD wired through ArgoCD GitOps and GitHub Actions.",
        tags: ["mern", "eks", "terraform", "argocd", "gitops"],
      },
      {
        repo: "MultiAZ_Setup_AWS",
        url: "https://github.com/hemasundharGit/MultiAZ_Setup_AWS",
        lang: "Python",
        langColor: "#3572A5",
        updated: "May 2026",
        narrative:
          "Multi-AZ AWS infrastructure provisioned for high availability — VPCs, subnets across zones, load balancing, failover validated under simulated zone outage.",
        tags: ["aws", "multi-az", "vpc", "python", "boto3"],
      },
      {
        repo: "devops-k3s-assessment-synthlane",
        url: "https://github.com/hemasundharGit/devops-k3s-assessment-synthlane",
        lang: "HCL",
        langColor: "#844FBA",
        updated: "Jan 2026",
        narrative:
          "K3s cluster provisioned with Terraform, Open WebUI deployed via Helm with namespace isolation, service mesh configured and validated end-to-end.",
        tags: ["k3s", "terraform", "helm", "kubernetes"],
      },
      {
        repo: "Habot-Combat",
        url: "https://github.com/hemasundharGit/Habot-Combat",
        lang: "Python",
        langColor: "#3572A5",
        updated: "Aug 2026",
        narrative:
          "HabotConnect hiring project — GCP/Django/React. Addressed a staging incident: unencrypted API credentials committed to source control. Remediated with secrets management, IAM scoping, and a clean deployment pipeline.",
        tags: ["gcp", "django", "react", "secrets-management", "iam"],
      },
    ],
  },
  {
    id: "harden",
    label: "04 · HARDEN",
    subtitle:
      "Zero-trust. Signed artifacts. PCI-DSS scope. The audit clock was running.",
    color: "#ef4444",
    jobs: [
      {
        repo: "Dodopayments-task",
        url: "https://github.com/hemasundharGit/Dodopayments-task",
        lang: "Shell/YAML",
        langColor: "#89e051",
        updated: "Aug 2026",
        narrative:
          "A microservice handling cardholder-adjacent data walked onto a shared cluster wearing root privileges and a plaintext key. The audit clock was running. This is the fix — 5 layered security controls, fail-closed SAST/secrets/CVE gates, Cosign keyless signing, SLSA provenance, Istio mTLS STRICT, default-deny NetworkPolicy. Full pipeline end-to-end in 2m 18s.",
        tags: [
          "kubernetes",
          "istio",
          "cosign",
          "slsa",
          "trivy",
          "semgrep",
          "pci-dss",
        ],
        duration: "2m 18s pipeline",
      },
    ],
  },
]

// ── Skills & Experience Data ──────────────────────────────────────────────────
const SKILLS_FLAT = [
  {
    cat: "Cloud",
    items:
      "AWS (EC2 · S3 · VPC · Lambda · IAM · RDS · ECS · EKS · Route53) · GCP · Azure",
  },
  { cat: "IaC", items: "Terraform · Ansible · CloudFormation · Azure ARM" },
  {
    cat: "CI/CD & Security",
    items:
      "Jenkins · GitHub Actions · ArgoCD/GitOps · Semgrep · Trivy · Cosign/SLSA",
  },
  { cat: "Containers", items: "Docker · Kubernetes · Istio (mTLS) · Helm" },
  {
    cat: "Scripting",
    items: "Python (boto3 · FastAPI) · Bash · Shell · PowerShell · YAML · SQL",
  },
  {
    cat: "Observability",
    items: "Prometheus · Grafana · Datadog · CloudWatch · OWASP",
  },
  { cat: "Databases", items: "PostgreSQL · MongoDB · MySQL · BigQuery" },
]

const EXPERIENCE = [
  {
    co: "Millennium Software Solutions",
    role: "AWS & DevOps Trainee",
    period: "May 2026 – Present",
    loc: "Vizag, India",
    color: "#f59e0b",
    pts: [
      "Provision AWS (EC2, VPC, S3, Lambda, IAM, RDS) via Terraform for version-controlled, repeatable deployments.",
      "Design and troubleshoot cloud networking — VPCs, subnets, routing tables, security groups, DNS.",
      "Build CI/CD pipelines (Jenkins, GitHub Actions) for containerized workloads; automate ops with Python and Bash.",
      "Run Docker and Kubernetes for containerized workloads; set up Prometheus/Grafana/CloudWatch monitoring.",
    ],
  },
  {
    co: "NextCX.ai",
    role: "DevOps Engineer",
    period: "Jul 2025 – Dec 2025",
    loc: "Remote",
    color: "#8b5cf6",
    pts: [
      "Monitored infrastructure via Datadog and CloudWatch; reduced MTTR by 25% and downtime by 30%.",
      "Managed incident escalation with RCA reports and JIRA — maintained 99.9% SLA uptime.",
      "Built CI/CD pipelines with OWASP/Trivy/SonarQube gates and self-healing scripts — cut vulnerabilities 40%.",
    ],
  },
]

const HASHNODE_ARTICLES = [
  {
    title: "The Ultimate Beginner-Friendly Guide to Installing Kubernetes",
    url: "https://hemasundharamkolla.hashnode.dev/the-ultimate-beginner-friendly-guide-to-installing-kubernetes",
    date: "May 15, 2026",
    tags: ["Kubernetes", "DevOps", "AWS"],
  },
  {
    title: "Developing and Deploying a Basic Web Application on Amazon EKS",
    url: "https://hemasundharamkolla.hashnode.dev/developing-and-deploying-a-basic-web-application-on-amazon-eks",
    date: "May 8, 2026",
    tags: ["AWS", "EKS", "Docker"],
  },
  {
    title:
      "I Built a Kubernetes Monitoring Stack (Prometheus + Grafana) from Scratch",
    url: "https://hemasundharamkolla.hashnode.dev/i-built-a-kubernetes-monitoring-stack-prometheus-grafana-from-scratch-step-by-step",
    date: "Apr 25, 2026",
    tags: ["Kubernetes", "Prometheus", "Grafana"],
  },
  {
    title:
      "From CrashLoopBackOff to Production: Deploying a Real-Time Chat App on Kubernetes",
    url: "https://hemasundharamkolla.hashnode.dev/from-crashloopbackoff-to-production-deploying-a-real-time-chat-app-on-kubernetes",
    date: "Apr 20, 2026",
    tags: ["Kubernetes", "Full-Stack"],
  },
  {
    title:
      "Kubernetes Debugging Deep Dive: From 'Metrics API Not Available' to Fully Working HPA",
    url: "https://hemasundharamkolla.hashnode.dev/kubernetes-debugging-deep-dive-from-metrics-api-not-available-to-fully-working-hpa-step-by-step-real-troubleshooting",
    date: "Apr 1, 2026",
    tags: ["Kubernetes", "HPA", "Debugging"],
  },
  {
    title: "Building a Complete DevSecOps Pipeline from Scratch",
    url: "https://hemasundharamkolla.hashnode.dev/building-a-complete-devsecops-pipeline-from-scratch-jenkins-owasp-trivy-sonarqube-docker-kubernetes-grafana",
    date: "Mar 23, 2026",
    tags: ["DevSecOps", "Jenkins", "Kubernetes"],
  },
  {
    title:
      "Full-Stack CI/CD with Jenkins: Auto-Builds, GitHub Webhooks & Dockerized Django",
    url: "https://hemasundharamkolla.hashnode.dev/full-stack-ci-cd-with-jenkins-auto-builds-github-webhooks-dockerized-django",
    date: "Mar 1, 2026",
    tags: ["Jenkins", "CI/CD", "Docker"],
  },
  {
    title: "Understanding Jenkins Agents (From Basics)",
    url: "https://hemasundharamkolla.hashnode.dev/understanding-jenkins-agents-from-basics",
    date: "Feb 17, 2026",
    tags: ["Jenkins", "DevOps"],
  },
  {
    title:
      "Mastering Infrastructure as Code: A Comprehensive Guide to Terraform on AWS",
    url: "https://hemasundharamkolla.hashnode.dev/mastering-infrastructure-as-code-a-comprehensive-guide-to-terraform-on-aws",
    date: "Aug 29, 2024",
    tags: ["Terraform", "AWS", "IaC"],
  },
  {
    title: "Mastering Azure Continuous Deployment: A Step-by-Step Guide",
    url: "https://hemasundharamkolla.hashnode.dev/mastering-azure-continuous-deployment-a-step-by-step-guide",
    date: "Aug 22, 2024",
    tags: ["Azure", "ArgoCD", "Kubernetes"],
  },
  {
    title: "Mastering AWS IAM: A Beginner's Guide to Secure Access Management",
    url: "https://hemasundharamkolla.hashnode.dev/mastering-aws-iam-a-beginners-guide-to-secure-access-management",
    date: "Sep 28, 2024",
    tags: ["AWS", "IAM", "Security"],
  },
  {
    title:
      "Building a Scalable and Secure Production-Grade Architecture on AWS",
    url: "https://hemasundharamkolla.hashnode.dev/building-a-scalable-and-secure-production-grade-architecture-on-aws",
    date: "Dec 1, 2024",
    tags: ["AWS", "Architecture"],
  },
  {
    title:
      "Mastering CloudFormation Templates for Effective Infrastructure as Code",
    url: "https://hemasundharamkolla.hashnode.dev/mastering-cloudformation-templates-for-effective-infrastructure-as-code",
    date: "Jan 15, 2025",
    tags: ["AWS", "CloudFormation", "IaC"],
  },
  {
    title: "Beginner's Guide to AWS CI/CD: Step-by-Step Process",
    url: "https://hemasundharamkolla.hashnode.dev/beginners-guide-to-aws-cicd-step-by-step-process",
    date: "Mar 14, 2025",
    tags: ["AWS", "CI/CD"],
  },
  {
    title: "Getting Started with Ansible: The Basics You Need to Know",
    url: "https://hemasundharamkolla.hashnode.dev/getting-started-with-ansible-the-basics-you-need-to-know",
    date: "Oct 15, 2024",
    tags: ["Ansible", "DevOps"],
  },
  {
    title: "Understanding Amazon EC2: In-Depth Analysis",
    url: "https://hemasundharamkolla.hashnode.dev/understanding-amazon-ec2-in-depth-analysis",
    date: "Oct 4, 2024",
    tags: ["AWS", "EC2"],
  },
  {
    title: "AWS CLI Explained: Everything You Need to Know",
    url: "https://hemasundharamkolla.hashnode.dev/aws-cli-explained-everything-you-need-to-know",
    date: "Dec 27, 2024",
    tags: ["AWS", "CLI"],
  },
  {
    title: "Unlocking the Power of Amazon S3: Essential Tips for New Users",
    url: "https://hemasundharamkolla.hashnode.dev/unlocking-the-power-of-amazon-s3-essential-tips-for-new-users",
    date: "Dec 23, 2024",
    tags: ["AWS", "S3"],
  },
  {
    title: "AWS Explained: Beginner's Introduction to Cloud Services",
    url: "https://hemasundharamkolla.hashnode.dev/aws-explained-beginners-introduction-to-cloud-services",
    date: "Sep 23, 2024",
    tags: ["AWS", "Cloud"],
  },
]

// ── Tiny components ───────────────────────────────────────────────────────────
function Mono({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span className={`font-mono ${className}`} style={style}>
      {children}
    </span>
  )
}

function Badge({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <span
      className="font-mono text-xs px-1.5 py-0.5 rounded"
      style={{
        color,
        background: `${color}18`,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  )
}

function StatusDot({ color = "#22c55e" }: { color?: string }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full shrink-0"
      style={{ background: color, boxShadow: `0 0 6px ${color}` }}
    />
  )
}

// ── Nav ───────────────────────────────────────────────────────────────────────
const NAV = ["about", "skills", "experience", "pipeline", "articles", "contact"]

function NavBar({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(6,6,6,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1e1e1e",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <StatusDot color="#22c55e" />
          <Mono className="text-xs font-medium" style={{ color: "#e5e5e5" }}>
            hemasundharGit / journey
          </Mono>
          <Mono className="text-xs hidden sm:inline" style={{ color: "#555" }}>
            · pipeline passing
          </Mono>
        </div>
        <div className="hidden md:flex items-center gap-5">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n}`}
              className="font-mono text-xs uppercase tracking-widest transition-colors duration-150"
              style={{ color: active === n ? "#f59e0b" : "#444" }}
            >
              {n}
            </a>
          ))}
        </div>
        <button
          className="md:hidden font-mono text-xs"
          style={{ color: "#f59e0b" }}
          onClick={() => setOpen(!open)}
        >
          {open ? "[close]" : "[menu]"}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden px-6 pb-4 grid grid-cols-3 gap-2"
          style={{ borderTop: "1px solid #1e1e1e" }}
        >
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n}`}
              className="font-mono text-xs uppercase tracking-widest pt-2"
              style={{ color: "#f59e0b" }}
              onClick={() => setOpen(false)}
            >
              {n}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [line, setLine] = useState(0)
  const lines = [
    "$ whoami",
    "> Hema Sundharam Kolla",
    "$ cat role.txt",
    "> Cloud & DevOps Engineer",
    "$ kubectl get nodes --output wide",
    "> AWS · GCP · Azure · Aviatrix  STATUS: Ready",
    "$ ./run_pipeline.sh --trigger curiosity",
    "> Pipeline started. 4 stages. All passing.",
  ]
  useEffect(() => {
    if (line < lines.length) {
      const t = setTimeout(
        () => setLine((l) => l + 1),
        line % 2 === 0 ? 300 : 600,
      )
      return () => clearTimeout(t)
    }
  }, [line])

  return (
    <section
      id="about"
      className="min-h-screen flex items-end dot-grid pt-12"
      style={{ background: "#060606" }}
    >
      <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-end">
          {/* Left: big name */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Mono className="text-xs block mb-2" style={{ color: "#555" }}>
                // Cloud & DevOps Engineer · KL University CGPA 9.2 · Top 5%
              </Mono>
            </div>
            <h1
              className="font-display font-bold leading-none tracking-tight mb-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#e5e5e5" }}
            >
              Hema
            </h1>
            <h1
              className="font-display font-bold leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#f59e0b" }}
            >
              Sundharam<span className="amber-glow">.</span>
            </h1>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#777", maxWidth: "520px" }}
            >
              Building secure cloud infrastructure, shipping containerized
              workloads, and hardening pipelines from the inside out. Based in
              Vijayawada, Andhra Pradesh — working everywhere.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#pipeline"
                className="font-mono text-sm px-5 py-2 rounded transition-all duration-200"
                style={{
                  background: "#f59e0b",
                  color: "#060606",
                  fontWeight: 700,
                }}
              >
                view pipeline →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2 rounded border transition-colors duration-200"
                style={{ color: "#f59e0b", borderColor: "#f59e0b40" }}
              >
                resume ↗
              </a>
              <a
                href="https://github.com/hemasundharGit"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2 rounded border transition-colors duration-200"
                style={{ color: "#555", borderColor: "#1e1e1e" }}
              >
                github ↗
              </a>
              <a
                href="https://hashnode.com/@hemasundharamkolla"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2 rounded border transition-colors duration-200"
                style={{ color: "#555", borderColor: "#1e1e1e" }}
              >
                blog ↗
              </a>
            </div>
          </div>

          {/* Right: terminal */}
          <div className="lg:col-span-2">
            <div
              className="rounded border"
              style={{ background: "#0a0a0a", borderColor: "#1e1e1e" }}
            >
              <div
                className="flex items-center gap-1.5 px-4 py-2.5 border-b"
                style={{ borderColor: "#1e1e1e" }}
              >
                {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                  <span
                    key={c}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: c }}
                  />
                ))}
                <Mono className="text-xs ml-2" style={{ color: "#333" }}>
                  terminal — zsh
                </Mono>
              </div>
              <div className="p-4 min-h-52">
                {lines.slice(0, line).map((l, i) => (
                  <div key={i} className="slide-in">
                    <Mono
                      className="text-xs block leading-relaxed"
                      style={{
                        color: l.startsWith("$")
                          ? "#f59e0b"
                          : l.startsWith(">")
                            ? "#e5e5e5"
                            : "#555",
                      }}
                    >
                      {l}
                    </Mono>
                  </div>
                ))}
                {line < lines.length && (
                  <Mono className="text-xs" style={{ color: "#f59e0b" }}>
                    $ <span className="blink">▋</span>
                  </Mono>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{ borderColor: "#1e1e1e" }}
        >
          {[
            { val: "9.2", label: "CGPA · Top 5%" },
            { val: "99.9%", label: "SLA Uptime" },
            { val: "−25%", label: "MTTR reduction" },
            { val: "3×", label: "IPF Gold Medals" },
          ].map(({ val, label }) => (
            <div key={label}>
              <Mono
                className="text-2xl font-bold block"
                style={{ color: "#f59e0b" }}
              >
                {val}
              </Mono>
              <Mono className="text-xs" style={{ color: "#444" }}>
                {label}
              </Mono>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t"
      style={{ borderColor: "#1e1e1e", background: "#060606" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>skills.json</SectionLabel>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded"
          style={{ borderColor: "#1e1e1e" }}
        >
          {SKILLS_FLAT.map((s, i) => (
            <div
              key={s.cat}
              className="flex gap-0 border-b last:border-b-0"
              style={{ borderColor: "#1e1e1e" }}
            >
              <div
                className="w-32 shrink-0 px-4 py-3 border-r flex items-start"
                style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}
              >
                <Mono
                  className="text-xs font-medium"
                  style={{ color: "#f59e0b" }}
                >
                  {s.cat}
                </Mono>
              </div>
              <div className="px-4 py-3 flex-1">
                <Mono
                  className="text-xs leading-relaxed"
                  style={{ color: "#666" }}
                >
                  {s.items}
                </Mono>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Experience ────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section
      id="experience"
      className="py-20 border-t"
      style={{ borderColor: "#1e1e1e" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>experience.log</SectionLabel>
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.co}
              className="border rounded"
              style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}
            >
              {/* Header */}
              <div
                className="flex flex-wrap items-center gap-3 px-5 py-3 border-b"
                style={{
                  borderColor: "#1e1e1e",
                  borderLeft: `3px solid ${exp.color}`,
                }}
              >
                <StatusDot color={exp.color} />
                <Mono
                  className="text-sm font-semibold"
                  style={{ color: "#e5e5e5" }}
                >
                  {exp.co}
                </Mono>
                <Mono className="text-xs" style={{ color: exp.color }}>
                  {exp.role}
                </Mono>
                <Mono className="text-xs ml-auto" style={{ color: "#444" }}>
                  {exp.period} · {exp.loc}
                </Mono>
              </div>
              {/* Points as log lines */}
              <div className="px-5 py-4 flex flex-col gap-2">
                {exp.pts.map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <Mono
                      className="text-xs shrink-0 select-none"
                      style={{ color: "#333" }}
                    >
                      {String(i).padStart(2, "0")}
                    </Mono>
                    <Mono
                      className="text-xs leading-relaxed italic"
                      style={{ color: "#777" }}
                    >
                      {p}
                    </Mono>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pipeline / Repos ──────────────────────────────────────────────────────────
function Pipeline() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const totalJobs = PIPELINE.reduce((a, s) => a + s.jobs.length, 0)

  return (
    <section
      id="pipeline"
      className="py-20 border-t"
      style={{ borderColor: "#1e1e1e" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Pipeline header */}
        <div
          className="mb-10 border rounded px-5 py-4 flex flex-wrap items-center gap-4"
          style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}
        >
          <StatusDot color="#22c55e" />
          <div>
            <Mono
              className="text-xs font-semibold block"
              style={{ color: "#e5e5e5" }}
            >
              hemasundharGit / journey
            </Mono>
            <Mono className="text-xs" style={{ color: "#444" }}>
              workflow run · {totalJobs} jobs · 4 stages · trigger: curiosity
            </Mono>
          </div>
          <div className="ml-auto flex items-center gap-6">
            <div>
              <Mono className="text-xs block" style={{ color: "#22c55e" }}>
                ✓ passing
              </Mono>
              <Mono className="text-xs" style={{ color: "#444" }}>
                status
              </Mono>
            </div>
            <div>
              <Mono className="text-xs block" style={{ color: "#f59e0b" }}>
                2022→2026
              </Mono>
              <Mono className="text-xs" style={{ color: "#444" }}>
                duration
              </Mono>
            </div>
          </div>
        </div>

        {/* Stage pipeline visualization */}
        <div className="hidden lg:flex items-center gap-0 mb-12 overflow-x-auto">
          {PIPELINE.map((stage, i) => (
            <div key={stage.id} className="flex items-center shrink-0">
              {/* Stage pill */}
              <a
                href={`#stage-${stage.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded border transition-colors duration-200"
                style={{
                  borderColor: stage.color + "60",
                  background: stage.color + "10",
                  textDecoration: "none",
                }}
              >
                <StatusDot color={stage.color} />
                <Mono
                  className="text-xs font-medium"
                  style={{ color: stage.color }}
                >
                  {stage.label}
                </Mono>
                <Mono className="text-xs" style={{ color: stage.color + "88" }}>
                  {stage.jobs.length}j
                </Mono>
              </a>
              {/* Connector */}
              {i < PIPELINE.length - 1 && (
                <div className="flex items-center gap-0 mx-1">
                  <div className="w-8 h-px" style={{ background: "#2a2a2a" }} />
                  <Mono className="text-xs" style={{ color: "#333" }}>
                    →
                  </Mono>
                  <div className="w-8 h-px" style={{ background: "#2a2a2a" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stages */}
        <div className="flex flex-col gap-16">
          {PIPELINE.map((stage, si) => (
            <div key={stage.id} id={`stage-${stage.id}`}>
              {/* Stage header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex flex-col items-center gap-1 pt-1">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: stage.color,
                      background: stage.color + "18",
                    }}
                  >
                    <StatusDot color={stage.color} />
                  </div>
                  {si < PIPELINE.length - 1 && (
                    <div
                      className="w-px flex-1 min-h-8"
                      style={{
                        background: `linear-gradient(${stage.color}60, transparent)`,
                      }}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <Mono
                      className="text-sm font-bold"
                      style={{ color: stage.color }}
                    >
                      {stage.label}
                    </Mono>
                    <Mono className="text-xs" style={{ color: "#333" }}>
                      · {stage.jobs.length} job
                      {stage.jobs.length !== 1 ? "s" : ""}
                    </Mono>
                  </div>
                  <p
                    className="font-mono text-xs italic"
                    style={{ color: "#555" }}
                  >
                    {stage.subtitle}
                  </p>
                </div>
              </div>

              {/* Jobs grid */}
              <div className="ml-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {stage.jobs.map((job) => {
                  const key = `${stage.id}-${job.repo}`
                  const isOpen = expanded === key
                  return (
                    <div
                      key={job.repo}
                      className="border rounded overflow-hidden transition-all duration-300"
                      style={{
                        borderColor: isOpen ? stage.color + "60" : "#1e1e1e",
                        background: "#0a0a0a",
                      }}
                    >
                      {/* Job header */}
                      <button
                        className="w-full text-left px-4 py-3 flex items-start gap-3 border-b"
                        style={{
                          borderColor: "#1e1e1e",
                          borderLeft: `2px solid ${stage.color}`,
                        }}
                        onClick={() => setExpanded(isOpen ? null : key)}
                      >
                        <StatusDot color={stage.color} />
                        <div className="flex-1 min-w-0">
                          <Mono
                            className="text-xs font-semibold block truncate"
                            style={{ color: "#e5e5e5" }}
                          >
                            {job.repo}
                          </Mono>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span
                              className="inline-block w-2 h-2 rounded-full"
                              style={{ background: job.langColor }}
                            />
                            <Mono className="text-xs" style={{ color: "#444" }}>
                              {job.lang}
                            </Mono>
                            <Mono className="text-xs" style={{ color: "#333" }}>
                              · {job.updated}
                            </Mono>
                          </div>
                        </div>
                        <Mono
                          className="text-xs shrink-0 mt-0.5"
                          style={{ color: "#333" }}
                        >
                          {isOpen ? "▲" : "▼"}
                        </Mono>
                      </button>

                      {/* Job body — the "story" from README */}
                      <div className="px-4 py-3">
                        <p
                          className="font-mono text-xs leading-relaxed italic mb-3"
                          style={{ color: isOpen ? "#aaa" : "#555" }}
                        >
                          "{job.narrative.slice(0, isOpen ? undefined : 90)}
                          {!isOpen && job.narrative.length > 90 ? "…" : ""}"
                        </p>
                        {isOpen && (
                          <div className="mt-3 flex flex-col gap-3">
                            <div className="flex flex-wrap gap-1.5">
                              {job.tags.map((t) => (
                                <Badge key={t} color={stage.color}>
                                  {t}
                                </Badge>
                              ))}
                            </div>
                            <div
                              className="flex items-center gap-3 pt-2 border-t"
                              style={{ borderColor: "#1e1e1e" }}
                            >
                              <a
                                href={job.url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-mono text-xs transition-colors"
                                style={{
                                  color: stage.color,
                                  textDecoration: "none",
                                }}
                              >
                                github ↗
                              </a>
                              {job.live && (
                                <a
                                  href={job.live}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="font-mono text-xs"
                                  style={{
                                    color: "#22c55e",
                                    textDecoration: "none",
                                  }}
                                >
                                  live ↗
                                </a>
                              )}
                              {job.duration && (
                                <Mono
                                  className="text-xs ml-auto"
                                  style={{ color: "#333" }}
                                >
                                  {job.duration}
                                </Mono>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Stage transition */}
              {si < PIPELINE.length - 1 && (
                <div className="ml-10 mt-8 flex items-center gap-3">
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, ${stage.color}40, ${PIPELINE[si + 1].color}40)`,
                    }}
                  />
                  <Mono className="text-xs shrink-0" style={{ color: "#333" }}>
                    skills acquired → advancing to {PIPELINE[si + 1].label}
                  </Mono>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, ${PIPELINE[si + 1].color}40, transparent)`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final pipeline result */}
        <div
          className="mt-12 ml-10 border rounded px-5 py-4 flex items-center gap-4"
          style={{ borderColor: "#22c55e40", background: "#22c55e08" }}
        >
          <StatusDot color="#22c55e" />
          <Mono className="text-xs" style={{ color: "#22c55e" }}>
            pipeline complete · all stages passed · artifacts: production-grade
            cloud & DevSecOps engineer
          </Mono>
        </div>
      </div>
    </section>
  )
}

// ── Articles ──────────────────────────────────────────────────────────────────
function Articles() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? HASHNODE_ARTICLES : HASHNODE_ARTICLES.slice(0, 8)

  return (
    <section
      id="articles"
      className="py-20 border-t"
      style={{ borderColor: "#1e1e1e" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>
          hashnode.dev/@hemasundharamkolla · {HASHNODE_ARTICLES.length} articles
        </SectionLabel>
        <div
          className="border rounded overflow-hidden"
          style={{ borderColor: "#1e1e1e" }}
        >
          {visible.map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 px-5 py-3.5 border-b last:border-b-0 transition-colors duration-150 group"
              style={{
                borderColor: "#1e1e1e",
                textDecoration: "none",
                background: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#0f0f0f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <Mono
                className="text-xs shrink-0 w-6 text-right"
                style={{ color: "#2a2a2a" }}
              >
                {String(i + 1).padStart(2, "0")}
              </Mono>
              <div className="flex-1 min-w-0">
                <Mono
                  className="text-xs font-medium block mb-1 transition-colors"
                  style={{ color: "#666" }}
                >
                  <span
                    className="group-hover:text-amber-400"
                    style={{ transition: "color 0.15s" }}
                  >
                    {a.title}
                  </span>
                </Mono>
                <div className="flex items-center gap-2 flex-wrap">
                  {a.tags.map((t) => (
                    <Mono
                      key={t}
                      className="text-xs"
                      style={{ color: "#2a2a2a" }}
                    >
                      #{t.toLowerCase()}
                    </Mono>
                  ))}
                </div>
              </div>
              <Mono
                className="text-xs shrink-0 hidden sm:block"
                style={{ color: "#2a2a2a" }}
              >
                {a.date}
              </Mono>
            </a>
          ))}
        </div>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 font-mono text-xs transition-colors"
            style={{ color: "#333" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            + {HASHNODE_ARTICLES.length - 8} more articles
          </button>
        )}
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const links = [
    {
      k: "email",
      v: "kollahemasundharam.tech9@gmail.com",
      href: "mailto:kollahemasundharam.tech9@gmail.com",
    },
    {
      k: "linkedin",
      v: "linkedin.com/in/kollahemasundharam9",
      href: "https://linkedin.com/in/kollahemasundharam9",
    },
    {
      k: "github",
      v: "github.com/hemasundharGit",
      href: "https://github.com/hemasundharGit",
    },
    {
      k: "blog",
      v: "hashnode.com/@hemasundharamkolla",
      href: "https://hashnode.com/@hemasundharamkolla",
    },
    {
      k: "location",
      v: "Vijayawada, Andhra Pradesh, India · +91 9505005629",
      href: undefined,
    },
    { k: "resume", v: "hsctl.in/resume", href: "/resume.pdf" },
  ]

  return (
    <section
      id="contact"
      className="py-20 border-t"
      style={{ borderColor: "#1e1e1e" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>contact.json</SectionLabel>
        <div
          className="border rounded overflow-hidden max-w-2xl"
          style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}
        >
          <div
            className="px-5 py-3 border-b"
            style={{ borderColor: "#1e1e1e" }}
          >
            <Mono className="text-xs" style={{ color: "#555" }}>
              {"{"}
            </Mono>
          </div>
          {links.map(({ k, v, href }, i) => (
            <div
              key={k}
              className="flex items-center gap-0 border-b last:border-b-0"
              style={{ borderColor: "#0e0e0e" }}
            >
              <div
                className="w-28 px-5 py-2.5 border-r"
                style={{ borderColor: "#0e0e0e" }}
              >
                <Mono className="text-xs" style={{ color: "#f59e0b" }}>
                  "{k}"
                </Mono>
              </div>
              <div className="px-5 py-2.5 flex-1">
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-mono text-xs transition-colors"
                    style={{ color: "#555", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#f59e0b")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  >
                    "{v}"
                  </a>
                ) : (
                  <Mono className="text-xs" style={{ color: "#555" }}>
                    "{v}"
                  </Mono>
                )}
              </div>
            </div>
          ))}
          <div className="px-5 py-3">
            <Mono className="text-xs" style={{ color: "#555" }}>
              {"}"}
            </Mono>
          </div>
        </div>

        <div
          className="mt-16 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ borderColor: "#1e1e1e" }}
        >
          <Mono className="text-xs" style={{ color: "#222" }}>
            // Hema Sundharam Kolla · 2026
          </Mono>
          <Mono className="text-xs" style={{ color: "#222" }}>
            Turning ideas into infrastructure.
          </Mono>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Mono className="text-xs" style={{ color: "#f59e0b" }}>
        $
      </Mono>
      <Mono className="text-sm font-medium" style={{ color: "#e5e5e5" }}>
        {children}
      </Mono>
      <div className="flex-1 h-px ml-2" style={{ background: "#1e1e1e" }} />
    </div>
  )
}

// ── Certifications (inline in page) ──────────────────────────────────────────
const CERTS = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    color: "#ff9900",
    issued: "Jun 14, 2024",
    expires: "Jun 14, 2027",
    id: "3358cc02b78b46ae91e31d38244ca688",
    verify:
      "https://drive.google.com/file/d/11p0H6htwxTwtpIQvMtVq_4IDXL4xiKV9/view?usp=sharing",
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    color: "#00a1e0",
    issued: "Oct 19, 2024",
    expires: null,
    id: "5078666",
    verify:
      "https://drive.google.com/file/d/1BGdXIqS_4jxYlFo9BtY9PjZMCNARSXzN/view?usp=sharing",
  },
  {
    name: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    color: "#ee0000",
    issued: "Dec 26, 2024",
    expires: null,
    id: "240-261-966",
    verify:
      "https://drive.google.com/file/d/1g3WZrciZmkSB7IWSFvVN7eX6n7yxFIZH/view?usp=sharing",
  },
  {
    name: "Aviatrix Certified Engineer — Multicloud Network Associate",
    issuer: "Aviatrix, Inc.",
    color: "#f97316",
    issued: "Dec 16, 2025",
    expires: "Dec 16, 2028",
    id: "ACE-2025-30912",
    verify:
      "https://drive.google.com/file/d/11mFWQm9xisaXukAupMhkD1dw2FO2vmaT/view?usp=sharing",
  },
  {
    name: "Certified Essentials Automation Professional",
    issuer: "Automation Anywhere",
    color: "#e65c00",
    issued: "Dec 16, 2025",
    expires: "Dec 16, 2027",
    id: "AAESSE2024A360-169447239",
    verify:
      "https://drive.google.com/file/d/10dEvE3j2fQogBnR30qLNyVDtiOg-n4m8/view?usp=sharing",
  },
]

function Certs() {
  return (
    <section className="py-20 border-t" style={{ borderColor: "#1e1e1e" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>
          credentials.txt · {CERTS.length} certifications
        </SectionLabel>

        {/* Cert cards */}
        <div
          className="border rounded overflow-hidden mb-8"
          style={{ borderColor: "#1e1e1e" }}
        >
          {CERTS.map((c, i) => (
            <div
              key={c.id}
              className="flex flex-col sm:flex-row sm:items-center gap-0 border-b last:border-b-0"
              style={{ borderColor: "#1e1e1e" }}
            >
              {/* Left accent + name */}
              <div
                className="flex items-start sm:items-center gap-3 px-5 py-3.5 flex-1 border-b sm:border-b-0 sm:border-r"
                style={{
                  borderColor: "#1e1e1e",
                  borderLeft: `2px solid ${c.color}`,
                  background: "#0a0a0a",
                }}
              >
                <StatusDot color={c.color} />
                <div>
                  <Mono
                    className="text-xs font-semibold block"
                    style={{ color: "#e5e5e5" }}
                  >
                    {c.name}
                  </Mono>
                  <Mono className="text-xs" style={{ color: "#444" }}>
                    {c.issuer}
                  </Mono>
                </div>
              </div>
              {/* Meta */}
              <div
                className="flex items-center gap-6 px-5 py-3.5 shrink-0"
                style={{ background: "#070707" }}
              >
                <div>
                  <Mono className="text-xs block" style={{ color: "#555" }}>
                    issued
                  </Mono>
                  <Mono className="text-xs" style={{ color: "#e5e5e5" }}>
                    {c.issued}
                  </Mono>
                </div>
                {c.expires && (
                  <div>
                    <Mono className="text-xs block" style={{ color: "#555" }}>
                      expires
                    </Mono>
                    <Mono className="text-xs" style={{ color: "#e5e5e5" }}>
                      {c.expires}
                    </Mono>
                  </div>
                )}
                <div>
                  <Mono className="text-xs block" style={{ color: "#555" }}>
                    id
                  </Mono>
                  <Mono className="text-xs" style={{ color: "#333" }}>
                    {c.id.length > 20 ? c.id.slice(0, 18) + "…" : c.id}
                  </Mono>
                </div>
                {c.verify ? (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs transition-colors shrink-0"
                    style={{ color: c.color, textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    verify ↗
                  </a>
                ) : (
                  <Mono className="text-xs shrink-0" style={{ color: "#222" }}>
                    —
                  </Mono>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Published Research",
              body: "AI agent-based cloud observability — Springer, ICIDDM 2K25",
            },
            {
              title: "Technical Writing",
              body: "26 articles on Hashnode · 21 public GitHub repositories",
            },
            {
              title: "National Powerlifting Champion",
              body: "IPF — 3 Gold Medals",
            },
          ].map((a) => (
            <div
              key={a.title}
              className="border rounded px-4 py-3"
              style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}
            >
              <Mono
                className="text-xs font-semibold block mb-1"
                style={{ color: "#f59e0b" }}
              >
                {a.title}
              </Mono>
              <Mono className="text-xs" style={{ color: "#444" }}>
                {a.body}
              </Mono>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("about")
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        }),
      { threshold: 0.25 },
    )
    NAV.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ background: "#060606" }}>
      <NavBar active={active} />
      <Hero />
      <Skills />
      <Experience />
      <Pipeline />
      <Articles />
      <Certs />
      <Contact />
    </div>
  )
}
