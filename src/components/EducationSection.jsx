import { CalendarDays, GraduationCap, School } from "lucide-react"

const educationItems = [
  {
    id: 1,
    level: "Bachelor",
    program: "BSc. CSIT",
    college: "New Summit College",
    university: "Tribhuvan University",
    startDate: "2022",
    endDate: null,
    isCurrent: true,
  },
  {
    id: 2,
    level: "High School",
    program: "+2 Science",
    college: "Annapurna High School",
    university: "National Examinations Board (NEB)",
    startDate: "2019",
    endDate: "2020",
    isCurrent: false,
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

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          An academic timeline with my program details, institutions, and
          university affiliations.
        </p>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-1 md:left-3 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {educationItems.map((item) => (
              <article
                key={item.id}
                className="relative bg-card rounded-lg shadow-xs p-6 card-hover text-left"
              >
                <div className="absolute -left-[23px] md:-left-[31px] top-8 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{item.program}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/15 text-primary">
                    {item.level}
                  </span>
                  {item.isCurrent && (
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-2">
                    <School size={16} />
                    {item.college}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap size={16} />
                    {item.university}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={16} />
                    {formatMonthLabel(item.startDate)} -{" "}
                    {formatMonthLabel(item.endDate)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
