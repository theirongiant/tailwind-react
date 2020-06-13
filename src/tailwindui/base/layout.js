import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useOutsideClick from '../../hooks/use-outside-click';
import TUITransition from '../new/tui-transition';
import IomartLogo from '../new/iomart-logo';

const Layout = (props) => {
  const { menu, children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hideSidebarMenu, setHideSidebarMenu] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setHideSidebarMenu(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const hideSidebar = () => {
    setHideSidebarMenu(true);
  };

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [hideUserMenu, setHideUserMenu] = useState(true);

  const toggleUserMenu = (menuOpen) => {
    if (menuOpen) {
      setIsUserMenuOpen(true);
      setHideUserMenu(false);
    } else {
      setIsUserMenuOpen(false);
    }
  };

  const hideUserPanelMenu = () => {
    setHideUserMenu(true);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    toggleUserMenu(false);
  });

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className={`${hideSidebarMenu ? 'hidden ' : ''} md:hidden`}>
        <div className="fixed inset-0 flex z-40">
          <TUITransition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={isSidebarOpen}
            onExited={hideSidebar}
          >
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75" />
            </div>
          </TUITransition>
          <TUITransition
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            show={isSidebarOpen}
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                {isSidebarOpen && (
                  <button
                    type="button"
                    onClick={closeSidebar}
                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <IomartLogo />
                {/* {<img
                  className="h-8 w-auto"
                  src="/img/iomart.png"
                  alt="Iomart"
                />} */}
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  {menu.map((m) => (
                    <NavLink
                      key={m.title}
                      to={m.href}
                      className={`group flex items-center px-2 py-2 text-base leading-6 font-medium text-white rounded-md focus:outline-none ${
                        m.active
                          ? `bg-gray-900  focus:bg-gray-700`
                          : `text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700`
                      } transition ease-in-out duration-150`}
                    >
                      {m.icon}
                      {m.title}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </TUITransition>
          <div className="flex-shrink-0 w-14" />
        </div>
      </div>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <IomartLogo />
            {/* {<img className="" src="/img/iomart.png" alt="Iomart" />} */}
          </div>
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              {menu.map((m) => (
                <NavLink
                  key={m.title}
                  to={m.href}
                  className={`group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md focus:outline-none ${
                    m.active
                      ? `bg-gray-900  focus:bg-gray-700`
                      : `text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white focus:bg-gray-700`
                  } transition ease-in-out duration-150`}
                >
                  {m.icon}
                  {m.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            onClick={openSidebar}
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
            aria-label="Open sidebar"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                stokelinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    stokelinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="ml-3 relative" ref={wrapperRef}>
                <div>
                  <button
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                    id="user-menu"
                    type="button"
                    aria-label="User menu"
                    aria-haspopup="true"
                    onClick={() => toggleUserMenu(!isUserMenuOpen)}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <TUITransition
                  show={isUserMenuOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  onExited={hideUserPanelMenu}
                >
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </TUITransition>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none bg-gray-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
