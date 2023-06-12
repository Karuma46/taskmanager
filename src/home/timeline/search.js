const Search = () => {
	return (
		<>
			<div id="searchForm">
				<form>
					<fieldset>
						<label htmlFor="search">
							<i className="fas fa-search"></i>
						</label>
						<input
							type="text"
							id="search"
							placeholder="Search something..."
						/>
					</fieldset>
				</form>
			</div>
		</>
	);
};

export default Search;
