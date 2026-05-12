import { Layout } from "@/components/Layout";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Experience } from "@/pages/Experience";
import { Hero } from "@/pages/Hero";
import { Projects } from "@/pages/Projects";
import { Skills } from "@/pages/Skills";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}
