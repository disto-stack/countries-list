export function FoundedElements(props: {
	foundedElements: number;
	className?: string;
}) {
	const { foundedElements, className } = props;
	return (
		<p className={`${className} text-dark-100`}>
			Found {foundedElements} countries
		</p>
	);
}
