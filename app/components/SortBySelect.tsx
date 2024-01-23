'use client';

import Image from 'next/image';
import React, { useState } from 'react';
export function SortBySelect() {
	const [selectedSort, setSelectedSort] = useState('population');

	const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedTargetSort = e.target.value;
		setSelectedSort(selectedTargetSort);
	};

	return (
		<div className="w-full">
			<label htmlFor="sortBy" className="aside-label">
				Sort by
			</label>
			<div className="relative">
				<select
					value={selectedSort}
					onChange={onSelectChange}
					name="sortBy"
					id="sortBy"
					className="inputs p-3 appearance-none bg-transparent"
				>
					<option value="population">Population</option>
					<option value="name">Name</option>
					<option value="area">Area</option>
				</select>

				<Image
					className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
					width={25}
					height={25}
					src={'/expand_down.svg'}
					alt="expand down icon"
				/>
			</div>
		</div>
	);
}
