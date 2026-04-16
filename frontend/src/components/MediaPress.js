import { ExternalLink, Newspaper, Award, Tv } from "lucide-react";

const pressItems = [
  {
    icon: Award,
    type: "Forum",
    title: "Minerva Women's Leadership Forums",
    desc: "Featured speaker at Minerva BC's flagship leadership event series, sharing insights on building inclusive leadership cultures and strategies for women in executive roles.",
    link: "https://minervabc.ca/events/",
    linkText: "Visit Minerva BC",
  },
  {
    icon: Tv,
    title: "Manono Leadership Conference",
    type: "Conference",
    desc: "Keynote presentation on transformative leadership and finding your authentic self — connecting with diverse professionals across industries.",
    link: null,
    linkText: null,
  },
  {
    icon: Newspaper,
    type: "Thought Leadership",
    title: "Value-Based Leadership in Practice",
    desc: "Drawing from 20+ years of experience across telecom, healthcare, and finance, exploring how empathy-driven leadership creates winning organizational cultures.",
    link: null,
    linkText: null,
  },
];

const articles = [
  {
    tag: "Leadership",
    title: "How to Get a Seat at the Table as a Minority Leader",
    excerpt: "The unwritten rules nobody tells you about — from commanding attention upon entering a room to building alliances that matter. My journey from outsider to decision-maker.",
  },
  {
    tag: "Career",
    title: "Lessons from Leading Across 17 Countries",
    excerpt: "What orchestrating transformation across Africa for a global telecom giant taught me about cultural intelligence, adaptability, and the universal language of respect.",
  },
  {
    tag: "Culture",
    title: "Building Teams That Thrive, Not Just Survive",
    excerpt: "The difference between compliance and commitment — how to embed values into your organization's DNA so that excellence becomes the default, not the exception.",
  },
];

export default function MediaPress() {
  return (
    <section
      id="media"
      data-testid="media-section"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F3EFE7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold mb-2">
            05
          </p>
          <h2
            data-testid="media-title"
            className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#0D1321]"
          >
            Media &
            <br />
            Insights
          </h2>
          <p className="mt-6 text-[#3E5C76] leading-relaxed lg:text-lg max-w-2xl">
            Featured appearances, speaking highlights, and thought leadership pieces on leadership, transformation, and building cultures of impact.
          </p>
        </div>

        {/* Press / Appearances */}
        <div className="mb-16">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0D1321] mb-8 reveal">
            Speaking Highlights & Press
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-testid={`press-item-${i}`}
                  className="bg-[#FDFBF7] border border-[#D9D2C5] p-8 group hover:-translate-y-1 transition-all duration-300 reveal flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#C8553D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8553D] transition-colors duration-300">
                      <Icon size={18} className="text-[#C8553D] group-hover:text-[#FDFBF7] transition-colors duration-300" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C8553D] font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#0D1321] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#3E5C76] leading-relaxed text-sm flex-1">
                    {item.desc}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`press-link-${i}`}
                      className="inline-flex items-center gap-2 text-[#C8553D] font-semibold text-sm mt-4 hover:gap-3 transition-all"
                    >
                      {item.linkText}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Articles / Thought pieces */}
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0D1321] mb-8 reveal">
            Articles & Thought Leadership
          </h3>
          <div className="space-y-0 divide-y divide-[#D9D2C5]">
            {articles.map((article, i) => (
              <div
                key={article.title}
                data-testid={`article-item-${i}`}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group reveal cursor-default"
              >
                <div className="lg:col-span-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C8553D] font-semibold bg-[#C8553D]/10 px-3 py-1 inline-block">
                    {article.tag}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold text-[#0D1321] group-hover:text-[#C8553D] transition-colors">
                    {article.title}
                  </h4>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[#3E5C76] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
