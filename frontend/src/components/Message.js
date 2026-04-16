export default function Message() {
  return (
    <section
      id="message"
      data-testid="message-section"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#F3EFE7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Label */}
          <div className="lg:col-span-3 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8553D] font-semibold mb-2">
              01
            </p>
            <h2
              data-testid="message-title"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold tracking-tight leading-none text-[#0D1321]"
            >
              My
              <br />
              Message
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-8 reveal">
            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#C8553D] pl-6 lg:pl-8 py-2">
              <p
                data-testid="message-quote"
                className="font-['Playfair_Display'] text-2xl lg:text-3xl italic text-[#0D1321] leading-snug"
              >
                "Within each of us resides a wealth of untold stories. Through relentless battles, I've pursued a place at the forefront — an endeavor to make my voice resound amidst the clamor."
              </p>
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#3E5C76] leading-relaxed lg:text-lg">
              <p>
                There are moments when we inadvertently allow the shroud of hesitation to conceal our innate courage. It becomes a challenge to rise above the cacophony enveloping us and project our voices with clarity. My journey has been a tapestry woven with resilience and determination, as I continually strive to secure my presence at the influential gatherings of minds.
              </p>
              <p>
                The art of commanding attention upon entering a room, finely honed through years of practice, has propelled me toward that coveted seat at the table. My personal triumphs are not solitary; I have found profound purpose in collaborating with fellow women leaders — guiding them through the labyrinth of challenges, offering the wisdom garnered from my experiences.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-[#3E5C76] leading-relaxed lg:text-lg max-w-2xl">
                So, why not pause for a shared moment? Whether across the virtual expanse or in the warmth of face-to-face interaction, let's convene for a cup of coffee. An opportunity to unravel the strategies — go ahead and inquire,{" "}
                <span className="font-['Playfair_Display'] italic text-[#C8553D] text-xl">
                  "How did you do it?"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
