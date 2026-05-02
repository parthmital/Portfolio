interface EyebrowProps {
	children: string;
}

export function Eyebrow({ children }: EyebrowProps) {
	return (
		<div className="font-hand text-graphite-soft mb-2 text-base">
			{children}
		</div>
	);
}
