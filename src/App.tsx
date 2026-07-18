import { Nav } from "@/components/sections/Nav";
import { BottomNav } from "@/components/sections/BottomNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function App() {
	return (
		<div className="notebook-app text-graphite relative min-h-screen overflow-x-hidden">
			<Nav />
			<main className="relative z-10 mx-auto grid max-w-6xl gap-5 px-4 pt-20 pb-24 sm:px-6 md:gap-8 md:px-8 md:pt-24 md:pb-12">
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Contact />
			</main>
			<BottomNav />
		</div>
	);
}
