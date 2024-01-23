export function StatusCheck() {
	return (
		<fieldset>
			<legend className="aside-label">Status</legend>

			<span className="flex items-center gap-2 mb-3 mt-1">
				<div className="relative h-5 w-5">
					<input
						className="peer appearance-none shrink-0 border-2 border-dark-100 rounded-sm bg-lite w-full h-full checked:bg-checkbox checked:border-checkbox disabled:border-steel-400 disabled:bg-steel-400"
						type="checkbox"
						name="unMember"
						id="unMember"
					/>
					<svg
						className="absolute w-full h-6 pointer-events-none hidden peer-checked:block stroke-white outline-none top-0"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
							stroke="#D2D5DA"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<label htmlFor="unMember">Member of the United Nations</label>
			</span>

			<span className="flex items-center gap-2">
				<div className="relative h-5 w-5">
					<input
						className="peer appearance-none shrink-0 border-2 border-dark-100 rounded-sm bg-lite w-full h-full checked:bg-checkbox checked:border-checkbox disabled:border-steel-400 disabled:bg-steel-400"
						type="checkbox"
						name="independent"
						id="independent"
					/>
					<svg
						className="absolute w-full h-6 pointer-events-none hidden peer-checked:block stroke-white outline-none top-0"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
							stroke="#D2D5DA"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<label htmlFor="independent">Independent</label>
			</span>
		</fieldset>
	);
}
