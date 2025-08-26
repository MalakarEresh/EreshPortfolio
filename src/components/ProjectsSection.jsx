import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Ecommerce Project",
    description: "An ecommerce platform with shopping cart functionality.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://my-ecommercefrontend.vercel.app/",
    githubUrl: "https://github.com/MalakarEresh/MyEcommerce",
  },
  {
    id: 2,
    title: "Flask To-do list App",
    description:
      "A to-do list application with user authentication and CRUD operations.",
    image: "/projects/project2.png",
    tags: ["Python", "Flask", "SQLite", "Bootstrap"],
    demoUrl: "https://flask-todo-app-jk0m.onrender.com/",
    githubUrl: "https://github.com/MalakarEresh/Flask_Todo_app",
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
    demoUrl: "#",
    githubUrl: "https://github.com/MalakarEresh/Parkinson-Detection-",
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
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
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
            href="https://github.com/MalakarEresh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
