import About from "@/components/About";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 gap-2 py-4">
        <HeroSection />
        <ProjectSection />
        <About />
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
