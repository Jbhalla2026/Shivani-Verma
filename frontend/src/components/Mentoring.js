import { Target, Users2, Lightbulb, ArrowRight } from "lucide-react";

const MENTORING_IMG = "https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMG1lbnRvcmluZ3xlbnwwfHx8fDE3NzYzMTUyNzF8MA&ixlib=rb-4.1.0&q=85";

const individualItems = [
  { icon: Target, text: "Tailored guidance for your specific objectives" },
  { icon: Lightbulb, text: "Sharpen skills with industry insights & feedback" },
  { icon: ArrowRight, text: "Career advancement strategies and clarity" },
];

const teamItems = [
  "Customized workshops for industry-specific challenges",
  "Technical skills, leadership development & soft skills",
  "Engaging, interactive sessions for lasting impact",
];

export default function Mentoring() {
  return (
    <section
      id="mentoring"
      data-testid="mentoring-section"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FDFBF7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold mb-2">
            04
          </p>
          <h2
            data-testid="mentoring-title"
            className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#0D1321]"
          >
            Mentoring &
            <br />
            Training
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Image side */}
          <div className="lg:col-span-5 reveal">
            <div className="relative overflow-hidden group">
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#3E5C76]/10 -z-0" />
              <img
                src={MENTORING_IMG}
                alt="Mentoring session"
                data-testid="mentoring-image"
                className="relative w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7 space-y-10 reveal">
            {/* Individual mentoring */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C8553D] flex items-center justify-center">
                  <Users2 size={18} className="text-[#FDFBF7]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-bold text-[#0D1321]">
                  Individualized Mentoring
                </h3>
              </div>
              <p className="text-[#3E5C76] leading-relaxed lg:text-lg mb-6">
                Looking to take your leadership to the next level? Whether you're a newcomer or an experienced practitioner, I provide personalized guidance to accelerate your growth.
              </p>
              <div className="space-y-4">
                {individualItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      data-testid={`mentor-individual-${i}`}
                      className="flex items-start gap-3"
                    >
                      <Icon size={18} className="text-[#C8553D] mt-1 flex-shrink-0" />
                      <span className="text-[#3E5C76]">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#D9D2C5]" />

            {/* Team training */}
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-bold text-[#0D1321] mb-4">
                Team Training & Workshops
              </h3>
              <p className="text-[#3E5C76] leading-relaxed lg:text-lg mb-6">
                Empower your teams with specialized training designed to enhance capabilities in today's competitive landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teamItems.map((item, i) => (
                  <div
                    key={i}
                    data-testid={`mentor-team-${i}`}
                    className="flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C8553D] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#3E5C76] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              data-testid="mentoring-cta"
              className="inline-block bg-[#C8553D] text-[#FDFBF7] px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#A64430] text-sm uppercase tracking-[0.1em]"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
