const SearchInput = ({ setSearchText, searchText }) => {
  return (
    <div className="md:w-1/3 w-full">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder="بحث ....."
        className="back-icon w-full border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none "
        type="text"
      />
    </div>
  );
};

export default SearchInput;
