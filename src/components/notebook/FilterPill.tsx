import { cn } from "@/lib/utils";

interface FilterPillProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
}

export function FilterPill({ label, isActive, onClick }: FilterPillProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-pressed={isActive}
			className={cn(
				"rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
				isActive
					? "border-graphite-soft bg-graphite-soft text-paper"
					: "border-paper-edge text-graphite-soft hover:border-graphite-muted hover:text-graphite bg-transparent",
			)}
		>
			{label}
		</button>
	);
}
