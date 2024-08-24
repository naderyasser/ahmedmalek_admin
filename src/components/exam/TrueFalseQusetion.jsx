const TrueFalseQusetion = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 my-5">
        <input
          className=" w-full border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none"
          type="text"
        />
        <input type="radio" name="trueorfalse" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <input
          className=" w-full border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none"
          type="text"
        />
        <input type="radio" name="trueorfalse" />
      </div>
    </div>
  );
};

export default TrueFalseQusetion;
