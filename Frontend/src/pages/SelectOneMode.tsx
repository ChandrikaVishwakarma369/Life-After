import React from "react";

const SelectOneMode = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F3FF] dark:bg-gray-900">
      
        <form action="" className="border border-[#A78BFA] rounded-lg bg-white dark:bg-gray-800 shadow-lg p-20">
          <p className="text-5xl text-[#A78BFA] mb-15">Select One
</p>
          <div className="mt-4">
            <input type="radio" id="family" name="mode" />
            <label htmlFor="family" className="ml-7 text-xl text-gray-800 dark:text-white">Family Mode</label>
          </div>
          <div className="mt-4">
            <input type="radio" id="friend" name="mode" />
            <label htmlFor="friend" className="ml-7 text-xl text-gray-800 dark:text-white">Friend Mode</label>
          </div>
          <div className="mt-4">
            <input type="radio" id="professional" name="mode" />
            <label htmlFor="professional" className="ml-7 text-xl text-gray-800 dark:text-white">Professional Mode</label>
          </div>

          <button type="submit" className="mt-8 bg-[#A78BFA] text-white px-6 py-2 rounded-lg hover:bg-[#8b5cf6] hover:cursor-pointer">
            Select
          </button>
        </form>
      
    </div>
  );
};

export default SelectOneMode;