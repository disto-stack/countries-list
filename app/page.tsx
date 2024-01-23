import { FoundedElements } from './components/FoundedElements';
import { RegionSelection } from './components/RegionsSelection';
import { SearchBar } from './components/SearchBar';
import { SortBySelect } from './components/SortBySelect';
import { StatusCheck } from './components/StatusCheck';

export default function Home() {
	return (
		<>
			<section className="flex flex-col justify-start items-start gap-2 sm:flex-row sm:justify-between sm:gap-0 sm:items-center">
				<FoundedElements foundedElements={234} />
				<SearchBar className="w-full md:w-1/3" />
			</section>

			<aside className="py-10 flex flex-col gap-5">
				<SortBySelect />
				<RegionSelection />
				<StatusCheck />
			</aside>
		</>
	);
}
