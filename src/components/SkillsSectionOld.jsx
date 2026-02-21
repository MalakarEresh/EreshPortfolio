import { useState } from "react";
import { cn } from "@/lib/utils";

// SVG Icons (Vite requires `?react`)
import { ReactComponent as HtmlIcon } from "@/icons/html.svg?react";
import { ReactComponent as JsIcon } from "@/icons/js.svg?react";
import { ReactComponent as ReactIcon } from "@/icons/react.svg?react";

import { ReactComponent as PythonIcon } from "@/icons/python.svg?react";
import { ReactComponent as FastapiIcon } from "@/icons/fastapi.svg?react";
import { ReactComponent as DjangoIcon } from "@/icons/django.svg?react";
import { ReactComponent as SqliteIcon } from "@/icons/sqlite.svg?react";
import { ReactComponent as MysqlIcon } from "@/icons/mysql.svg?react";
import { ReactComponent as PostgresIcon } from "@/icons/postgres.svg?react";

import { ReactComponent as N8nIcon } from "@/icons/n8n.svg?react";
import { ReactComponent as GitIcon } from "@/icons/git.svg?react";
import { ReactComponent as PostmanIcon } from "@/icons/postman.svg?react";

// Skills list
const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", Icon: HtmlIcon },
  { name: "JavaScript", level: 70, category: "frontend", Icon: JsIcon },
  { name: "React", level: 60, category: "frontend", Icon: ReactIcon },

  { name: "Python", level: 85, category: "backend", Icon: PythonIcon },
  { name: "FastAPI", level: 75, category: "backend", Icon: FastapiIcon },
  { name: "Django", level: 75, category: "backend", Icon: DjangoIcon },
  { name: "SQLite", level: 80, category: "backend", Icon: SqliteIcon },
  { name: "MySQL", level: 75, category: "backend", Icon: MysqlIcon },
  { name: "PostgreSQL", level: 75, category: "backend", Icon: PostgresIcon },

  { name: "n8n", level: 90, category: "tools", Icon: N8nIcon },
  { name: "Git/GitHub", level: 90, category: "tools", Icon: GitIcon },
  { name: "Postman", level: 70, category: "tools", Icon: PostmanIcon },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.Icon className="w-10 h-10" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Optional Progress Bar */}
              {/* Uncomment if needed */}
              {/* 
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div> 

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
