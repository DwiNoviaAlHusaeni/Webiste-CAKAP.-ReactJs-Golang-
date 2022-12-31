import React from 'react';
import Notif from "./foto/Notif.png"
import Logo from "./foto/Cakap Putih.png"
import Axios from 'axios';
import Menubar from "./foto/menubar.png"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const logout = async () => {
    
    Axios.post('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <header aria-label="Site Header" class="shadow-sm bg-cyan-500 fixed w-full z-50">
      <div
        class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
      >
        <div class="flex w-0 flex-1 mr-10 -ml-14">
          <a href="/">
            <img class="scale-[0.5]" src={Logo} />
          </a>
        </div>
        <div class="flex w-0 flex-1 justify-center ">

          <form class="">
            <div class="relative">
              <input
                class="h-4 rounded-lg border-gray-200 pr-40 text-sm placeholder-gray-300 focus:z-10 p-4"
                placeholder="Search..."
                type="text"
              />

              <button
                type="submit"
                class="absolute inset-y-0 -right-0.5 mr-px rounded-r-lg px-2 text-white bg-blue-500"
              >
                <span class="sr-only">Submit Search</span>
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <img class=" flex justify-center mr-20 scale-50" src={Notif} />

        <div class="hidden items-center gap-4 lg:flex">

          <a
            href="/Login"
            onClick={logout}
            class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
          >
            Log out
          </a>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 ">
                <svg className="w-10 h-10 rounded-md " fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/Profil"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Profil
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/Cari_Jurusan"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Cari Jurusan
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/Cari_Kampus"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Cari Kampus
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/Cari_Profesi"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Cari Profesi
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/Minat_dan_Bakat"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Tes Minat dan Bakat
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>


    </header>

  );
}
export default Navbar;