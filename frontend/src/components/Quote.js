const QUOTE_BG = "https://images.pexels.com/photos/25037026/pexels-photo-25037026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Quote() {
  return (
    <section
      data-testid="quote-section"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${QUOTE_BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D1321]/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-[#C8553D] mx-auto mb-8" />

          <blockquote>
            <p
              data-testid="quote-text"
              className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBF7] leading-tight tracking-tight"
            >
              Empathy + Intelligence:
              <br />
              <span className="text-[#C8553D]">Carving Your Seat,</span>
              <br />
              Championing Leadership
              <br />
              with a difference.
            </p>
          </blockquote>

          <div className="mt-8">
            <p className="text-[#D9D2C5] text-sm uppercase tracking-[0.25em] font-semibold">
              — Shivani Verma
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-[#C8553D] mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
