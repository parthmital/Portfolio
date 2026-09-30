import { cn } from "@/lib/cn";

interface ExpandToggleProps {
	expanded: boolean;
	onToggle: () => void;
	className?: string;
}

export function ExpandToggle({
	expanded,
	onToggle,
	className,
}: ExpandToggleProps) {
	return (
		<button
			type="button"
			onClick={onToggle}
			aria-expanded={expanded}
			className={cn(
				"text-graphite-muted hover:text-graphite mt-2 cursor-pointer text-xs underline",
				className,
			)}
		>
			{expanded ? "Show less" : "Read more"}
		</button>
	);
}
