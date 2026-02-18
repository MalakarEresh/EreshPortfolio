import { BrainCircuit, ShieldCheck } from "lucide-react"

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A quick overview of who I am, what I work on, and how I approach
          building impactful software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Who Am I?</h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a detail-oriented QA professional focused on software testing, automation, and application security. I am committed to delivering reliable, high-quality products by identifying issues early and improving testing processes.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have strong analytical and problem-solving skills, with a growing interest in AI and Machine Learning. I am eager to apply automation and intelligent solutions to enhance software quality and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start items-center md:items-start">
              <a
                href="#contact"
                className="cosmic-button"
              >
                Get In Touch
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/Resume_eresh.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    Focused on ensuring software quality through test planning,
                    bug tracking, regression testing, and reliable release
                    validation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
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
          </div>
        </div>
      </div>
    </section>
  )
}
