import React from 'react';

const Card = (props) => {
  const { title, description, buttons, children } = props;

  return (
    <div className="px-4 py-5 border-b border-gray-600 sm:px-6">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
        <div className="ml-4 mt-4">
          <h3 className="text-lg leading-6 font-medium ">{title}</h3>
          {description && (
            <p className="mt-1 text-sm leading-5 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam
              corrupti consectetur.
            </p>
          )}
        </div>
        {buttons && (
          <div className="ml-4 mt-4 flex-shrink-0">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
              >
                Create new job
              </button>
            </span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
