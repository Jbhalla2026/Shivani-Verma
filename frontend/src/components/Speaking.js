import { Mic, Sparkles, Users, ArrowRight } from "lucide-react";

const speakingTopics = [
  {
    icon: Users,
    title: "Leadership for Minorities",
    subtitle: "How to Get a Seat at the Table",
    desc: "Strategies for underrepresented professionals to command attention, build influence, and secure leadership positions in any organization.",
  },
  {
    icon: Sparkles,
    title: "Finding Your Authentic Self",
    subtitle: "Unapologetic Leadership",
    desc: "A journey of self-discovery that empowers you to lead with your true identity — no masks, no compromises, just genuine impact.",
  },
  {
    icon: Mic,
    title: "Value-Based Leadership",
    subtitle: "Building a Winning Culture",
    desc: "Transform your organization's DNA by embedding core values into every decision, creating cultures where people thrive and deliver excellence.",
  },
];

const whyChoose = [
  { label: "Expertise", text: "20+ years of in-depth knowledge across industries" },
  { label: "Engagement", text: "Interactive techniques for memorable events" },
  { label: "Adaptability", text: "Keynotes, panels, workshops, or podcasts" },
  { label: "Passion", text: "Infectious enthusiasm that inspires action" },
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      data-testid="speaking-section"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F3EFE7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold mb-2">
            03
          </p>
          <h2
            data-testid="speaking-title"
            className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#0D1321]"
          >
            Speaking
            <br />
            Engagements
          </h2>
          <p className="mt-6 text-[#3E5C76] leading-relaxed lg:text-lg max-w-2xl">
            Dynamic presentations that captivate audiences and inspire transformation. Including{" "}
            <a
              href="https://minervabc.ca/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8553D] underline underline-offset-4 hover:text-[#A64430] transition-colors"
              data-testid="minerva-link"
            >
              Minerva Women's Leadership Forums
            </a>
            , Manono, and more.
          </p>
        </div>

        {/* Topic cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {speakingTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                data-testid={`speaking-topic-${i}`}
                className="bg-[#FDFBF7] border border-[#D9D2C5] p-8 group hover:-translate-y-1 transition-all duration-300 reveal"
              >
                <div className="w-14 h-14 bg-[#C8553D]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8553D] transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-[#C8553D] group-hover:text-[#FDFBF7] transition-colors duration-300"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C8553D] font-semibold mb-1">
                  {topic.subtitle}
                </p>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0D1321] mb-4">
                  {topic.title}
                </h3>
                <p className="text-[#3E5C76] leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why choose me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal">
          <div className="lg:col-span-4">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0D1321] mb-4">
              Why Choose Me as Your Speaker?
            </h3>
            <a
              href="#contact"
              data-testid="speaking-book-btn"
              className="inline-flex items-center gap-2 text-[#C8553D] font-semibold text-sm uppercase tracking-[0.1em] hover:gap-3 transition-all group"
            >
              Book for your event
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item) => (
              <div
                key={item.label}
                data-testid={`why-${item.label.toLowerCase()}`}
                className="border-l-2 border-[#C8553D] pl-4 py-2"
              >
                <p className="font-semibold text-[#0D1321] text-sm uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-[#3E5C76] text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
