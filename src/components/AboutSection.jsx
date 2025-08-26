import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who Am I?</h3>

            <p className="text-muted-foreground">
              I'm a passionate and motivated CSIT student with a strong
              foundation in computer science. I have excellent problem-solving
              skills and a keen interest in technology and software development.
            </p>

            <p className="text-muted-foreground">
              My academic projects have allowed me to hone my coding abilities,
              teamwork, and project management skills. I'm always eager to learn
              and contribute in any role that challenges me and helps me grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button"
              >
                {" "}
                Get In Touch
              </a>

              <a
                target="_blank"
                href="../../src/assets/Resume_eresh.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Programming</h4>
                  <p className="text-muted-foreground">
                    Proficient in building robust backend systems using Node.js,
                    Express, and databases like MongoDB and SQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI/ML</h4>
                  <p className="text-muted-foreground">
                    Building intelligent systems and models using machine
                    learning algorithms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
