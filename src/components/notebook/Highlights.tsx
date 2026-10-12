import { useId, useState } from "react";

interface HighlightsProps {
	summary: string;
	items: string[];
}

/** A summary that is always visible, with its points behind a disclosure toggle. */
export function Highlights({ summary, items }: HighlightsProps) {
	const [expanded, setExpanded] = useState(false);
	const listId = useId();

	return (
		<div className="mt-4 flex flex-1 flex-col">
			<p className="text-graphite text-sm leading-relaxed">{summary}</p>
			<ul
				id={listId}
				hidden={!expanded}
				className="marker:text-graphite-muted mt-3 list-disc space-y-2 pl-5"
			>
				{items.map((item) => (
					<li key={item} className="text-graphite-soft text-sm leading-relaxed">
						{item}
					</li>
				))}
			</ul>
			<button
				type="button"
				onClick={() => setExpanded(!expanded)}
				aria-expanded={expanded}
				aria-controls={listId}
				className="text-graphite-muted hover:text-graphite mt-auto inline-flex min-h-11 w-fit cursor-pointer items-center pt-2 text-sm underline underline-offset-4"
			>
				{expanded ? "Hide highlights" : `Show ${items.length} highlights`}
			</button>
		</div>
	);
}
