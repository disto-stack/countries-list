'use client';

import { Region } from '@/app/lib/types/region';
import { useState } from 'react';

export function RegionSelection() {
	const regions: Region[] = [
		{
			code: 'am',
			name: 'Americas',
		},
		{
			code: 'ant',
			name: 'Antarctic',
		},
		{
			code: 'afr',
			name: 'Africa',
		},
		{
			code: 'asi',
			name: 'Asia',
		},
		{
			code: 'eu',
			name: 'Europe',
		},
		{
			code: 'oc',
			name: 'Oceania',
		},
	];

	const [selectedRegions, setSelectedRegion] = useState<Region[]>([]);

	const selectRegion = (region: Region) => {
		if (regionIsSelected(region.code)) {
			const regionToRemoveIndex = selectedRegions.findIndex(
				(regionIteration) => regionIteration.code === region.code,
			);

			selectedRegions.splice(regionToRemoveIndex, 1);
			setSelectedRegion([...selectedRegions]);

			return;
		}

		selectedRegions.push(region);
		setSelectedRegion([...selectedRegions]);
	};

	const regionIsSelected = (regionCode: string) => {
		return selectedRegions.find((region) => region.code === regionCode) != null;
	};

	return (
		<div>
			<p className="aside-label">Region</p>

			<div role="group" className="flex gap-5 flex-wrap">
				{regions.map((region) => {
					const { code, name } = region;
					return (
						<button
							type="button"
							className={`px-4 py-2 rounded-2xl transition-colors ${
								regionIsSelected(code)
									? 'bg-dark-200 text-light'
									: 'lg:hover:bg-dark-200 text-dark-100 lg:hover:text-light'
							}`}
							key={code}
							onClick={() => selectRegion(region)}
						>
							{name}
						</button>
					);
				})}
			</div>
		</div>
	);
}
