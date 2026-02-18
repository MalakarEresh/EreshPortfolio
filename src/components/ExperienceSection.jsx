import { Briefcase, CalendarDays, MapPin } from "lucide-react"
import vrittechLogo from "../company/vrittech.jpg"
import connexicaLogo from "../company/connexica.png"

const experiences = [
  {
    id: 1,
    role: "Quality Assurance",
    company: "Vrit Technologies",
    start_date: "2026-01",
    end_date: "",
    location: "Sankhamul, Kathmandu",
    is_current: false,
    company_logo_url: vrittechLogo,
    description:
      "Performed manual and automated testing for web applications ensuring high product quality and reliability. Designed and executed test cases, identified and reported bugs, validated API endpoints, and conducted security testing. Collaborated closely with developers and stakeholders to verify fixes, improve performance, and ensure smooth releases.",
    technologies: ["Playwright", "Selenuim", "Cypress", "BurpSuite", "Postman", "Insomnia"],
  },
  {
    id: 2,
    role: "Artificial Intelligence Intern",
    company: "Connexica Technologies",
    start_date: "2025-08",
    end_date: "2025-11",
    location: "Remote",
    is_current: false,
    company_logo_url: connexicaLogo,
    description:
      "Worked as an AI Intern, developing intelligent backend services and automation workflows. Built and integrated AI-powered APIs, implemented LLM-based features, processed data pipelines, and contributed to scalable solutions using modern AI frameworks. Collaborated with the engineering team to test models, optimize performance, and deliver production-ready AI functionalities.",
    technologies: ["n8n", "FastAPI", "Python", "Langchain", "HuggingFace", "Gemini"],
  },
  
]

function formatMonthLabel(value) {
  if (!value) {
    return "Present"
  }

  const [year, month] = String(value).split("-")
  if (!year || !month) {
    return value
  }

  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleString("en-US", { month: "short", year: "numeric" })
}

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A timeline of the work and projects I have contributed to, with key
          responsibilities and technologies.
        </p>

        {!experiences.length && (
          <p className="text-muted-foreground text-center">
            No experiences available yet.
          </p>
        )}

        {experiences.length > 0 && (
          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-1 md:left-3 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((experience) => (
                <article
                  key={experience.id}
                  className="relative bg-card rounded-lg shadow-xs p-6 card-hover text-left"
                >
                  <div className="absolute -left-[23px] md:-left-[31px] top-8 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      {experience.is_current && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/15 text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    {experience.company_logo_url && (
                      <img
                        src={experience.company_logo_url}
                        alt={`${experience.company} logo`}
                        className="h-14 w-14 md:h-16 md:w-16 rounded-lg object-contain bg-background border border-border p-1.5"
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase size={16} />
                      <span className="font-semibold text-primary">{experience.company}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={16} />
                      {formatMonthLabel(experience.start_date)} -{" "}
                      {formatMonthLabel(experience.end_date)}
                    </span>
                    {experience.location && (
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={16} />
                        {experience.location}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={`${experience.id}-${idx}`}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}