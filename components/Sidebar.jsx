import React from "react";
import Squares from "../icons/Squares";
import { navigation } from "../src/data/Navigation";
import Settings from '../icons/Settings'

const Sidebar = () => {
  return (
    <aside className="animate bg-purple-100 w-full max-w-[250px] h-[100vh] relative pt-18 shadow-sm hover:shadow-xl transition-shadow ease-in-out">
      <div className="flex flex-col justify-start gap-4 w-full h-[100%] px-8 py-14 relative">
        <h1 className="fixed top-0 font-roboto text-blue text-2xl font-bold tracking-tight pt-14">
          Health<span className="text-purple-500 ">care.</span>
        </h1>
        
        {navigation &&
          navigation.map((item) => (
            <div key={item.id}>
              <h3 className="text-base text-neutral-300 tracking-tight">
                {item.category}
              </h3>
              {item.subItems && item.subItems.length > 0
                ? item.subItems.map((item) => (
                    <a
                      className="sidebar-link"
                      key={item.id}
                      href=""
                    >
                      {item.icon} {item.title}
                    </a>
                  ))
                : null}
            </div>
          ))}

          <footer className="fixed bottom-0 pb-14"><a className="sidebar-link" href=""><Settings />Settings</a></footer>
      </div>
    </aside>
  );
};

export default Sidebar;
