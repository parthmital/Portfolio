import { Nav } from "@/components/sections/Nav";
import { BottomNav } from "@/components/sections/BottomNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function App() {
	return (
		<div className="text-graphite relative min-h-screen">
			<Nav />
			<main className="relative z-10 mx-auto max-w-5xl space-y-6 px-4 py-6 pb-24 sm:px-8 md:space-y-14 md:py-12 md:pb-12">
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Education />
				<Contact />
			</main>
			<BottomNav />
		</div>
	);
}
