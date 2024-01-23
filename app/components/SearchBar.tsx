'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export function SearchBar(props: { className?: string }) {
	const { className } = props;
	const [searchBarText, setSearchBarText] = useState('');

	const handleSearchBarChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchBarText(event.target.value);
	};

	const verifyKeyboardEvent = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			searchText();
		}
	};

	const searchText = () => {
		console.log(searchBarText);
	};

	return (
		<div className={`${className} relative`}>
			<input
				className="p-3 pl-10 col-span-12 inputs"
				placeholder="Search by Name, Region, Subregion"
				value={searchBarText}
				onChange={handleSearchBarChange}
				onKeyDown={verifyKeyboardEvent}
				type="search"
			/>

			<button
				type="button"
				className="w-7 h-7 block absolute top-1/2 -translate-y-1/2 left-1"
				title="search button"
				onClick={(event) => searchText()}
			>
				<Image src={'/search.svg'} layout="fill" alt="search icon" />
			</button>
		</div>
	);
}
