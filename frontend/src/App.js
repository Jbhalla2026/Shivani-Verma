import { useEffect } from "react";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Background from "@/components/Background";
import Speaking from "@/components/Speaking";
import Mentoring from "@/components/Mentoring";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div data-testid="app-root" style={{ backgroundColor: "#FDFBF7" }}>
      <Header />
      <Hero />
      <Message />
      <Background />
      <Speaking />
      <Mentoring />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
