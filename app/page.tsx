import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Systems } from "@/components/Systems";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper-100 dark:bg-obsidian-900 transition-colors">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Systems />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
