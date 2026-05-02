interface ContactCardProps {
	label: string;
	value: string;
	href: string;
}

export function ContactCard({ label, value, href }: ContactCardProps) {
	return (
		<a
			href={href}
			className="group border-paper-edge bg-paper/60 retrace hover:border-graphite/60 block flex-auto rounded-md border p-4 transition-colors"
		>
			<div className="text-graphite-muted text-xs tracking-wide uppercase">
				{label}
			</div>
			<div className="font-arch text-graphite mt-1 text-lg">
				{value}{" "}
				<span className="text-graphite-muted group-hover:text-graphite transition-colors">
					→
				</span>
			</div>
		</a>
	);
}
