import React from "react";

const FormSkeleton = () => {
  return (
    <div
      role="status"
      class="mx-6 my-8 p-8 xl:w-1/2 xl:mx-auto border border-gray-200 divide-y divide-gray-200 rounded-xl shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      <div className="flex flex-col">
        <div className="mx-auto mb-6 h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-36">
        </div>
        <div class="flex flex-col xl:flex-row items-center justify-between mb-6">
          <div className="hidden xl:block">
            <div class="h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-24"></div>
          </div>
          <div class="bg-gray-300 rounded-xl dark:bg-gray-700 p-4 pl-6 h-12 w-full xl:w-5/6 "></div>
        </div>
        <div class="flex items-center justify-between mb-6">
          <div className="hidden xl:block">
            <div class="h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-24"></div>
          </div>
          <div class="bg-gray-300 rounded-xl dark:bg-gray-700 p-4 pl-6 h-12 w-full xl:w-5/6 "></div>
        </div>
        <div class="flex items-center justify-between mb-6">
          <div className="hidden xl:block">
            <div class="h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-24"></div>
          </div>
          <div class="bg-gray-300 rounded-xl dark:bg-gray-700 p-4 pl-6 h-12 w-full xl:w-5/6 "></div>
        </div>
        <div class="flex items-center justify-between mb-6">
          <div className="hidden xl:block">
            <div class="h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-24"></div>
          </div>
          <div class="bg-gray-300 rounded-xl dark:bg-gray-700 p-4 pl-6 h-12 w-full xl:w-5/6 "></div>
        </div>
        <div class="flex items-center justify-between mb-6">
          <div className="hidden xl:block">
            <div class="h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-24"></div>
          </div>
          <div class="bg-gray-300 rounded-xl dark:bg-gray-700 p-4 pl-6 h-12 w-full xl:w-5/6 "></div>
        </div>
        <div class="flex items-center justify-between mb-6">
          <div class="bg-gray-300 rounded-xl dark:bg-gray-700 p-4 mt-5 h-12 w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default FormSkeleton;
