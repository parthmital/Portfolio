import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
	id?: string;
	children: ReactNode;
	variant?: "default" | "alt";
	withMargin?: boolean;
	className?: string;
};

/**
 * Reusable notebook page wrapper. All sections live inside one of these
 * to keep spacing, ruled lines, and the red margin consistent.
 * On mobile: margin line is hidden and content uses equal padding.
 * On sm+: margin line is visible and content has left offset.
 */
export function PaperSheet({
	id,
	children,
	variant = "default",
	withMargin: withMarginProp = true,
	className = "",
}: Props) {
	// Margin line only shows on sm+ screens
	const withMargin = withMarginProp;
	return (
		<section
			id={id}
			data-margin={withMargin ? "true" : undefined}
			className={cn(
				"paper-sheet scroll-mt-24 px-6 py-8 sm:px-8 md:px-12 md:py-12 lg:px-16 lg:py-14",
				variant === "alt" && "paper-sheet--alt",
				className,
			)}
		>
			{/* On mobile: no left padding. On sm+: content sits right of margin line */}
			<div className={cn(withMargin && "sm:pl-6 md:pl-10")}>{children}</div>
		</section>
	);
}
