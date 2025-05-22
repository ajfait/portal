import React from "react";

const NavMenu = () => {
  return (
    <div className="text-neutral-800 bg-neutral-200 m-5 p-5">
      <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
        <div>
          <a
            href="#"
            className="hover:bg-neutral-800 hover:text-neutral-300 hover:p-3 hover:rounded-sm hover:font-semibold"
          >
            View Cats
          </a>
        </div>
        <div>
          <a
            href="#"
            className="hover:bg-neutral-800 hover:text-neutral-300 hover:p-3 hover:rounded-sm hover:font-semibold"
          >
            Add Cat
          </a>
        </div>
        <div>
          <a
            href="#"
            className="hover:bg-neutral-800 hover:text-neutral-300 hover:p-3 hover:rounded-sm hover:font-semibold"
          >
            View People
          </a>
        </div>
        <div>
          <a
            href="#"
            className="hover:bg-neutral-800 hover:text-neutral-300 hover:p-3 hover:rounded-sm hover:font-semibold"
          >
            Add Person
          </a>
        </div>
        <div>
          <a
            href="#"
            className="hover:bg-neutral-800 hover:text-neutral-300 hover:p-3 hover:rounded-sm hover:font-semibold"
          >
            View Events
          </a>
        </div>
        <div>
          <a
            href="#"
            className="hover:bg-neutral-800 hover:text-neutral-300 hover:p-3 hover:rounded-sm hover:font-semibold"
          >
            Add Event
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
