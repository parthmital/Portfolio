import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "filled" | "outline" | "ghost";
	size?: "sm" | "md";
	children: ReactNode;
	className?: string;
	href?: string;
}

export function Button({
	variant = "outline",
	size = "md",
	children,
	className,
	href,
	type = "button",
	...props
}: ButtonProps) {
	const baseClasses = cn(
		"inline-flex items-center justify-center font-medium transition-colors retrace",
		size === "sm" && "text-sm px-3 py-1.5 rounded-md",
		size === "md" && "text-sm px-4 py-2 rounded-md",
		variant === "filled" && "bg-graphite text-paper hover:bg-graphite-soft",
		variant === "outline" &&
			"border border-graphite/40 text-graphite hover:border-graphite",
		variant === "ghost" &&
			"border border-paper-edge bg-paper/60 hover:border-graphite/60",
		className,
	);

	if (href) {
		return (
			<a
				href={href}
				className={baseClasses}
				target={href.startsWith("http") ? "_blank" : undefined}
				rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
			>
				{children}
			</a>
		);
	}

	return (
		<button type={type} className={baseClasses} {...props}>
			{children}
		</button>
	);
}
