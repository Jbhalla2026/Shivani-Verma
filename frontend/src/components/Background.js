import { Globe, HeartPulse, Landmark, Phone } from "lucide-react";

const careerPhases = [
  {
    icon: Phone,
    title: "Telecommunications",
    role: "Group Head of Africa — Process & Partner Governance",
    desc: "Orchestrating a transformational journey across 17 countries for a telecom giant ranked third on the global scale.",
    span: "lg:col-span-7",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    role: "Provincial Director of Client Services",
    desc: "Steering the course for all British Columbia Health Authorities, championing patient-centric service delivery.",
    span: "lg:col-span-5",
  },
  {
    icon: Landmark,
    title: "Finance & Insurance",
    role: "Regional Head of Customer Service",
    desc: "Leading customer service operations for a multinational conglomerate, blending innovation with empathy.",
    span: "lg:col-span-5",
  },
  {
    icon: Globe,
    title: "Cross-Industry Leadership",
    role: "20+ Years of Transformative Impact",
    desc: "A deliberate path through educational bastions, government entities, and global enterprises — each chapter illuminating leadership's intricate nuances.",
    span: "lg:col-span-7",
  },
];

export default function Background() {
  return (
    <section
      id="background"
      data-testid="background-section"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FDFBF7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold mb-2">
            02
          </p>
          <h2
            data-testid="background-title"
            className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#0D1321] max-w-lg"
          >
            A Journey Across
            <br />
            Industries
          </h2>
          <p className="mt-6 text-[#3E5C76] leading-relaxed lg:text-lg max-w-2xl">
            Step into the vibrant tapestry of leadership thriving in the heart of Vancouver, British Columbia. A symphony of accomplishments that resonate far beyond the surface.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {careerPhases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.title}
                data-testid={`career-card-${i}`}
                className={`${phase.span} bg-[#F3EFE7] border border-[#D9D2C5] p-8 lg:p-10 group hover:-translate-y-1 transition-all duration-300 reveal`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#C8553D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8553D] transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#C8553D] group-hover:text-[#FDFBF7] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C8553D] font-semibold">
                      {phase.title}
                    </p>
                    <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold text-[#0D1321] mt-1">
                      {phase.role}
                    </h3>
                  </div>
                </div>
                <p className="text-[#3E5C76] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
