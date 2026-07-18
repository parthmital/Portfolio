import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
	label: string;
	value: string;
	href: string;
}

export function ContactCard({ label, value, href }: ContactCardProps) {
	const external = href.startsWith("http");

	return (
		<a
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			className="group border-paper-edge bg-paper/60 retrace hover:border-graphite/60 block flex-auto rounded-md border p-4 transition-colors"
		>
			<div className="text-graphite-muted text-xs uppercase">{label}</div>
			<div className="font-arch text-graphite mt-1 text-lg break-words">
				{value}{" "}
				<span className="text-graphite-muted group-hover:text-graphite transition-colors">
					<ArrowUpRight className="inline h-4 w-4" />
				</span>
			</div>
		</a>
	);
}
