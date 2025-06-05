import React from 'react'

export const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <p className="h-4 bg-gray-200 rounded-full dark:bg-neutral-700 w-2/5 mb-4"></p>
      <ul className="mt-2 space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
      </ul>
    </div>
  );
}
