type Props = {
	eyebrow?: string;
	title: string;
	annotation?: string;
};

export function SectionHeading({ eyebrow, title, annotation }: Props) {
	return (
		<header className="mb-8">
			{eyebrow && (
				<div className="font-hand text-graphite-soft mb-2 text-base">
					{eyebrow}
				</div>
			)}
			<h2 className="font-arch text-graphite pencil-underline inline-block text-3xl md:text-4xl">
				{title}
			</h2>
			{annotation && (
				<p className="annotation text-graphite-soft mt-4">{annotation}</p>
			)}
		</header>
	);
}
