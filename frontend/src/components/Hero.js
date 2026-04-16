import { ArrowDown } from "lucide-react";

const PROFILE_PHOTO = "https://shivaniverma.me/wp-content/uploads/2023/09/crop-0-0-768-1024-0-IMG-20230917-WA0004-1.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="min-h-[90vh] flex items-center relative overflow-hidden"
      style={{ backgroundColor: "#FDFBF7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold stagger-1 animate-fade-up opacity-0">
              Leadership Consultant &bull; Keynote Speaker &bull; Mentor
            </p>
            <h1
              data-testid="hero-title"
              className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none text-[#0D1321] stagger-2 animate-fade-up opacity-0"
            >
              Shivani
              <br />
              <span className="text-[#C8553D]">Verma</span>
            </h1>
            <p
              data-testid="hero-tagline"
              className="text-lg lg:text-xl text-[#3E5C76] max-w-lg leading-relaxed stagger-3 animate-fade-up opacity-0"
            >
              Empowering leaders to carve their seat at the table with empathy, intelligence, and transformative vision.
            </p>
            <div className="flex flex-wrap gap-4 stagger-4 animate-fade-up opacity-0">
              <a
                href="#contact"
                data-testid="hero-book-call-btn"
                className="inline-block bg-[#C8553D] text-[#FDFBF7] px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#A64430] text-sm uppercase tracking-[0.1em]"
              >
                Book a Call
              </a>
              <a
                href="#message"
                data-testid="hero-learn-more-btn"
                className="inline-block bg-transparent border border-[#0D1321] text-[#0D1321] px-8 py-4 font-semibold transition-all hover:bg-[#0D1321] hover:text-[#FDFBF7] text-sm uppercase tracking-[0.1em]"
              >
                My Story
              </a>
            </div>
          </div>

          {/* Right photo */}
          <div className="lg:col-span-5 relative stagger-3 animate-slide-right opacity-0">
            <div className="relative">
              {/* Decorative offset block */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#C8553D]/10 -z-0" />
              <div className="relative overflow-hidden bg-[#F3EFE7]">
                <img
                  src={PROFILE_PHOTO}
                  alt="Shivani Verma - Leadership Consultant"
                  data-testid="hero-photo"
                  className="w-full h-auto max-h-[70vh] object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0D1321] text-[#FDFBF7] p-6">
                <span className="font-['Playfair_Display'] text-3xl font-bold block">20+</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D9D2C5]">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <a href="#message" data-testid="scroll-indicator" className="text-[#D9D2C5] hover:text-[#C8553D] transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
