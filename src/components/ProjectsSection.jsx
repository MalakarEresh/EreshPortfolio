import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Document RAG Implementation",
    description:
      "A RAG implementation using Google Gemini 2.5-pro model for conversation and Huggingface embedding model for vector-embedding.",
    image: "/projects/project4.png",
    tags: ["Python", "FastAPI", "Langchain", "HuggingFace", "Gemini", "React"],
    demoUrl: "https://github.com/MalakarEresh/DocumentRAG",
    githubUrl: "https://github.com/MalakarEresh/DocumentRAG",
  },
  {
    id: 2,
    title: "Ecommerce Project",
    description: "An ecommerce platform with shopping cart functionality.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://my-ecommercefrontend.vercel.app/",
    githubUrl: "https://github.com/MalakarEresh/MyEcommerce",
  },
  {
    id: 3,
    title: "Parkinson Disease Prediction",
    description:
      "A machine learning model to predict Parkinson's disease from voice data.",
    image: "/projects/project3.png",
    tags: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "SQLite",
      "Bootstrap",
      "TensorFlow",
    ],
    demoUrl: "https://github.com/MalakarEresh/Parkinson-Detection-",
    githubUrl: "https://github.com/MalakarEresh/Parkinson-Detection-",
  },
  {
    id: 4,
    title: "Flask To-do list App",
    description:
      "A to-do list application with user authentication and CRUD operations.",
    image: "/projects/project2.png",
    tags: ["Python", "Flask", "SQLite", "Bootstrap"],
    demoUrl: "https://flask-todo-app-jk0m.onrender.com/",
    githubUrl: "https://github.com/MalakarEresh/Flask_Todo_app",
  },
]

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some projects I built across AI, web, and backend workflows,
          focused on clean UX and reliable performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover border border-border/60 flex flex-col text-left"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-4 bottom-4 right-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <div className="ml-auto flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MalakarEresh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
