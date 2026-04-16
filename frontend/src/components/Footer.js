import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="py-12 border-t border-[#FDFBF7]/10"
      style={{ backgroundColor: "#0D1321" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-['Playfair_Display'] text-xl font-bold text-[#FDFBF7]">
              Shivani Verma
            </p>
            <p className="text-sm text-[#D9D2C5] mt-1">
              Leadership Consultant &bull; Keynote Speaker &bull; Mentor
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shivaniverma/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              className="w-10 h-10 border border-[#3E5C76] flex items-center justify-center text-[#D9D2C5] hover:bg-[#C8553D] hover:border-[#C8553D] hover:text-[#FDFBF7] transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:hello@shivaniverma.me"
              data-testid="footer-email"
              className="w-10 h-10 border border-[#3E5C76] flex items-center justify-center text-[#D9D2C5] hover:bg-[#C8553D] hover:border-[#C8553D] hover:text-[#FDFBF7] transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#FDFBF7]/5 text-center">
          <p className="text-xs text-[#3E5C76]">
            &copy; {new Date().getFullYear()} Shivani Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
