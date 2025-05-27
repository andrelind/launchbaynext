import { Transition } from '@headlessui/react';
import {
  CloudIcon,
  CogIcon,
  EllipsisHorizontalCircleIcon,
  LinkIcon,
  PlusCircleIcon,
  PrinterIcon,
  TagIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { factions } from 'lbn-core/src/helpers/enums';
import { getFactionKey } from 'lbn-core/src/helpers/serializer';
import type { XWS } from 'lbn-core/src/types';
import { useCookies } from 'next-client-cookies';
import React, { type FC, useEffect, useState } from 'react';
import { colorForFaction, colorForFactionKey } from '../helpers/colors';
import { AboutComponent } from './about';
import { CollectionsPanel } from './collection-panel';
import XwingFont from './fonts/xwing';
import FormatComponent from './format';
import { ImportComponent } from './import';
import { LoginComponent } from './login';
import { LogoComponent } from './logo';
import { Modal } from './modal';
import { SavePanel } from './save-panel';
import { SavedSquadronsPanel } from './saved-squadrons-panel';
import { SearchInput } from './search/input';
import { SelectTagsComponent } from './select-tags';

type Props = {
  xws: XWS;
  setTags: (t: string[]) => void;
  onChangeName: (name: string) => void;
  onChangeFormat: () => void;
  onPrint: () => void;
  actions?: { title: string; className?: string; onClick: () => void }[];
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({
  xws,
  setTags,
  onChangeName,
  onChangeFormat,
  onPrint,
  actions,
  children,
}) => {
  // const { data: session } = useSession();

  const cookies = useCookies()
  const isLoggedIn = cookies.get('x-jwt') !== undefined;

  console.log('isLoggedIn', isLoggedIn);

  const [showAbout, setShowAbout] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showSave, setShowSave] = useState(false);

  const [name, setName] = useState(xws.name);

  const providers = [
    { id: 'email', title: 'Login with Email' },
  ];

  useEffect(() => {
    setName(xws.name);
  }, [xws]);

  return (
    <div>
      <div className="bg-dark pb-32">
        <nav className="bg-dark">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <LogoComponent />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <div className="relative inline-block text-left">
                        <button
                          onClick={() => setShowAdd(!showAdd)}
                          type="button"
                          className={`inline-flex ${showAdd
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } px-3 py-2 rounded-md text-sm font-medium`}
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          New / Import
                        </button>

                        {showAdd && (
                          <div
                            className="fixed inset-0 z-10"
                            aria-hidden="true"
                            onClick={(e) => {
                              // @ts-ignore
                              if (e.target.id === 'background') {
                                setShowAdd(!showAdd);
                              }
                            }}
                          >
                            <div id="background" className="absolute inset-0" />
                          </div>
                        )}

                        <Transition
                          show={showAdd}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                          className="origin-top-center absolute overflow-hidden left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-10"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <button
                            onClick={() => {
                              setShowImport(true);
                              setShowAdd(false);
                            }}
                            className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                            role="menuitem"
                          >
                            <PlusCircleIcon className="w-5 h-5" />
                            <span className="ml-2">Import from XWS</span>
                          </button>
                          {factions.map((f) => {
                            return (
                              <a
                                key={f}
                                className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                role="menuitem"
                                href={`/?faction=${getFactionKey(f)}`}
                              >
                                {/* <!-- Heroicon name: pencil-alt --> */}
                                <XwingFont
                                  icon={f}
                                  className="text-xl w-7"
                                  color={
                                    f !== 'First Order' &&
                                      f !== 'Galactic Empire'
                                      ? colorForFaction(f)
                                      : undefined
                                  }
                                />
                                {f}
                              </a>
                            );
                          })}
                        </Transition>
                      </div>

                      {isLoggedIn && (
                        <button
                          onClick={() => setShowPanel(!showPanel)}
                          type="button"
                          className={
                            showPanel
                              ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                          }
                        >
                          Squadrons
                        </button>
                      )}
                      {isLoggedIn && (
                        <button
                          onClick={() => setShowCollection(!showCollection)}
                          type="button"
                          className={
                            showCollection
                              ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                          }
                        >
                          Collection
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <SearchInput />

                <div className="hidden md:block">
                  {/* <!-- Profile dropdown --> */}
                  <div className="ml-1 relative">
                    <div>
                      <button
                        onClick={() => {
                          !isLoggedIn ? setShowLogin(true) : cookies.remove('x-jwt')
                        }}
                        className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-solid text-gray-300 hover:text-white"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        {isLoggedIn && (
                          <CogIcon
                            className="ml-1 mr-1 h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                        {!isLoggedIn && (
                          <span
                            className={
                              showLogin
                                ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                            }
                          >
                            Login
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <button
                    onClick={() => setShowAbout(!showAbout)}
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-solid text-gray-300 hover:text-white"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <span
                      className={
                        showAbout
                          ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      }
                    >
                      About
                    </span>
                  </button>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  >
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <EllipsisHorizontalCircleIcon
                      className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
                    />

                    <XCircleIcon
                      className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      --> */}

          <div
            className={`${showMenu ? 'block' : 'hidden'
              } border-b border-gray-700 md:hidden`}
          >
            <div className="pt-3 px-2">
              <a
                onClick={() => setShowImport(true)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                role="menuitem"
              >
                Import from XWS
              </a>
            </div>
            <div className="px-2 py-3 grid grid-cols-7">
              {factions.map((f) => {
                return (
                  <a
                    key={f}
                    className="block text-center py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    href={`/?faction=${getFactionKey(f)}`}
                  >
                    <XwingFont
                      icon={f}
                      className="text-xl"
                      color={
                        f !== 'First Order' && f !== 'Galactic Empire'
                          ? colorForFaction(f)
                          : undefined
                      }
                    />
                  </a>
                );
              })}
            </div>
            <div className="py-3 border-t border-gray-700">
              <div
                className="px-2 space-y-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  onClick={() => setShowAbout(!showAbout)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  role="menuitem"
                >
                  About
                </a>
                {isLoggedIn && (
                  <a
                    onClick={() => setShowPanel(!showPanel)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Squadrons
                  </a>
                )}
                {isLoggedIn && (
                  <a
                    onClick={() => setShowCollection(!showCollection)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Collection
                  </a>
                )}
                {isLoggedIn && (
                  <a
                    onClick={() => cookies.remove('x-jwt')}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Logout
                  </a>
                )}
                {!isLoggedIn &&
                  providers.map((p) => (
                    <a
                      key={`${p.id}_mobile`}
                      // onClick={() => signIn(p.id)}
                      onClick={() => {
                        console.log('Login with mobile', p.id);

                        setShowLogin(true);
                      }}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                      role="menuitem"
                    >
                      {p.title}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </nav>
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 flex items-center">
                  <XwingFont
                    icon={xws.faction}
                    color={colorForFactionKey(xws.faction)}
                  />
                  <input
                    type="text"
                    name="squadron_name"
                    id="squadron_name"
                    className="ml-1 px-1 p-0 w-full sm:w-1/3 text-2xl font-bold bg-transparent border-none rounded-md focus:ring-2 focus:ring-lbnred"
                    placeholder="Squadron name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => onChangeName(name)}
                  />
                </h2>

                <div className="flex text-sm sm:text-lg font-normal -mt-1 sm:-mt-2">
                  <FormatComponent
                    format={xws.format}
                    onClick={onChangeFormat}
                  />
                  <h3 className="ml-1 text-gray-500 sm:truncate">
                    {xws.points} points
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4">
                {isLoggedIn && (
                  <button
                    type="button"
                    className="mr-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lbn-500 hover:bg-lbn-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbn-400"
                    onClick={() => setShowSave(true)}
                  >
                    <CloudIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Save
                  </button>
                )}
                {isLoggedIn && (
                  <span className="shadow-sm rounded-md relative mr-3">
                    <button
                      onClick={() => setShowTags(true)}
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                    >
                      <TagIcon className="-ml-1 mr-2 h-5 w-5" />
                      Tags
                    </button>
                  </span>
                )}
                <span className="shadow-sm rounded-md relative">
                  <button
                    onClick={onPrint}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    <PrinterIcon className="-ml-1 mr-2 h-5 w-5" />
                    Print
                  </button>
                </span>
                <span className="ml-3 shadow-sm rounded-md relative">
                  <button
                    onClick={() => setShowActions(!showActions)}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    <LinkIcon className="-ml-1 mr-2 h-5 w-5" />
                    Export
                  </button>

                  <Transition
                    show={showActions}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    className="origin-top right-0 sm:origin-top-right absolute mt-2 w-48 rounded-md shadow-lg z-10"
                  >
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      {actions?.map((a) => (
                        <button
                          key={a.title}
                          onClick={() => {
                            a.onClick();
                            setShowActions(false);
                          }}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer ${a.className}`}
                        >
                          {a.title}
                        </button>
                      ))}
                    </div>
                  </Transition>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-0 sm:px-6 lg:px-8">
          {isLoggedIn && (
            <SavedSquadronsPanel
              show={showPanel}
              onClose={() => setShowPanel(!showPanel)}
            />
          )}
          {isLoggedIn && (
            <CollectionsPanel
              show={showCollection}
              onClose={() => setShowCollection(!showCollection)}
            />
          )}
          {children}
        </div>
      </main>

      <Modal show={showLogin} onDismiss={() => setShowLogin(false)}>
        <LoginComponent onClose={() => setShowLogin(false)} />
      </Modal>

      <Modal show={showAbout} onDismiss={() => setShowAbout(false)}>
        <AboutComponent onClose={() => setShowAbout(false)} />
      </Modal>

      <Modal show={showImport} onDismiss={() => setShowImport(false)}>
        <ImportComponent onClose={() => setShowImport(false)} />
      </Modal>

      <Modal show={showTags} onDismiss={() => setShowTags(false)}>
        <SelectTagsComponent
          xws={xws}
          setTags={setTags}
          onClose={() => setShowTags(false)}
        />
      </Modal>

      <Modal show={showSave} onDismiss={() => setShowSave(false)}>
        <SavePanel xws={xws} onClose={() => setShowSave(false)} />
      </Modal>
    </div>
  );
};
