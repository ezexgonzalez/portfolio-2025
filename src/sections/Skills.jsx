import SectionHeader from "../components/SectionHeader";
import { skills } from "../config/skills";

const SkillGroup = ({ title, items }) => (
  <div className="space-y-2">
    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="
            rounded-full px-3 py-1
            text-[11px]
            bg-white/5
            border border-white/10
            text-muted
          "
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div>
      <SectionHeader
        label="Skills"
        title="Tecnologías y fortalezas"
        description="Un resumen de las tecnologías que uso a diario y las habilidades que más me representan."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <SkillGroup title="Stack principal" items={skills.main} />
        <SkillGroup title="Herramientas" items={skills.tools} />
        <SkillGroup title="Soft skills" items={skills.soft} />
      </div>
    </div>
  );
};

export default Skills;
