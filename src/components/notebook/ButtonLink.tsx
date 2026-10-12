import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { newTabLinkProps } from "@/lib/links";

interface ButtonLinkProps {
	href: string;
	variant?: "filled" | "outline";
	children: ReactNode;
	className?: string;
}

/** A link styled as a button; every call to action on the page navigates. */
export function ButtonLink({
	href,
	variant = "outline",
	children,
	className,
}: ButtonLinkProps) {
	return (
		<a
			href={href}
			{...newTabLinkProps(href)}
			className={cn(
				"retrace inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors",
				variant === "filled" &&
					"bg-graphite text-paper hover:bg-graphite-soft active:bg-graphite-muted",
				variant === "outline" &&
					"border-graphite/40 text-graphite hover:border-graphite active:bg-paper-2 border",
				className,
			)}
		>
			{children}
		</a>
	);
}
