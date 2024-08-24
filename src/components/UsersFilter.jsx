import FilterMenu from "./FilterMenu";

const UsersFilter = () => {
  const place = ["الكل", "الإسكندرية", "القاهرة"];

  return (
    <div className="mx-8 flex gap-3 justify-start items-center">
      <FilterMenu place={place} />

      {/* <input
        type="text"
        placeholder="بحث"
        className="border border-lightGray rounded-lg mb-2 p-2 focus:border-blue-gray-300 outline-none "
      /> */}
    </div>
  );
};

export default UsersFilter;
