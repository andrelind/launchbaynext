import { Transition } from '@headlessui/react';
import { red } from 'lbn-core/src/colors';
import {
  limitedWarning,
  upgradeFormatWarning,
} from 'lbn-core/src/helpers/unique';
import type { Format, Slot, Upgrade } from 'lbn-core/src/types';
import { type FC, useState } from 'react';
import { popoverDetailStyle, popoverStyle } from '../../helpers/popover';
import { FormatError } from '../format-error';
import { LimitError } from '../limit-error';
import { SlimUpgrade } from '../slim/upgrade';
import UpgradeComponent from '../upgrade';

type Props = {
  slot: Slot;
  value?: Upgrade;
  format: Format;
  options: Upgrade[];
  side: number;
  usedXws?: string[];
  onChange: (value?: Upgrade) => void;
};

export const UpgradePopover: FC<Props> = ({
  slot,
  value,
  options,
  side = 0,
  onChange,
  format,
  usedXws,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDetails, setShowDetails] = useState<Upgrade | undefined>();
  const [selected, setSelected] = useState(value);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const formatWarning = selected && upgradeFormatWarning(selected, format);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
          setPos({ x: rect.x, y: rect.y });
          options.length > 0 && setShowMenu(!showMenu);
        }}
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        className="relative w-full bg-white hover:shadow rounded-md pl-2 pr-5 sm:pl-3 sm:pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-lbnred-500 focus:border-lbnred-500 text-xs sm:text-sm cursor-pointer"
        onMouseEnter={(e) => {
          if (!process.browser || window.innerWidth < 640) {
            return;
          }
          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
          setPos({ x: rect.x, y: rect.y });
          setShowDetails(selected);
        }}
        onMouseLeave={() => !showMenu && setShowDetails(undefined)}
      >
        <SlimUpgrade slot={slot} upgrade={selected} side={side} />
        {formatWarning && <FormatError />}
        {selected &&
          limitedWarning(
            selected.xws,
            selected.limited,
            usedXws || [],
            false
          ) && <LimitError limit={selected.limited} />}

        <span className="hidden sm:inline-block ml-1 sm:ml-3 absolute inset-y-0 top-2 right-0 pr-2">
          {/* <!-- Heroicon name: selector --> */}
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {selected && (
        <button
          className="sm:hidden absolute inset-y-0 right-0.5 text-gray-400"
          onClick={(e) => {
            const rect = (
              e.target as HTMLButtonElement
            ).getBoundingClientRect();
            setPos({ x: rect.x, y: rect.y });
            setShowDetails(selected);
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      )}

      {(showMenu ||
        (showDetails && process.browser && window.innerWidth < 640)) && (
          <div
            className="fixed inset-0 z-10"
            aria-hidden="true"
            onClick={(e) => {
              // @ts-ignore
              if (e.target.id === 'background') {
                setShowMenu(false);
                setShowDetails(undefined);
              }
            }}
          >
            <div id="background" className="absolute inset-0" />
          </div>
        )}

      <Transition
        show={showMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
        style={popoverStyle(pos)}
      >
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="relative max-h-56 rounded-md py-1 text-xs sm:text-sm ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
        >
          {selected && (
            <li
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-1 sm:px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(undefined);
                setShowMenu(false);
                onChange(undefined);
              }}
            >
              <span
                className="font-normal truncate text-xs sm:text-sm"
                style={{ color: red }}
              >
                Remove upgrade
              </span>
            </li>
          )}

          {options.map((upgrade) => (
            <li
              key={upgrade.xws}
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-1 sm:px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(upgrade);
                setShowMenu(false);
                onChange(upgrade);
              }}
              onMouseEnter={() => setShowDetails(upgrade)}
              onMouseLeave={() => setShowDetails(undefined)}
            >
              <SlimUpgrade slot={slot} upgrade={upgrade} side={side} />
            </li>
          ))}
        </ul>

        <Transition
          show={Boolean(showDetails) && showMenu}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="absolute w-full rounded-md bg-white shadow-lg z-10 p-1 hidden sm:block"
          style={popoverDetailStyle(pos)}
        >
          {showDetails && <UpgradeComponent upgrade={showDetails} />}
        </Transition>
      </Transition>

      <Transition
        show={Boolean(showDetails) && !showMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 p-1"
        style={popoverStyle(pos)}
      >
        {showDetails && <UpgradeComponent upgrade={showDetails} />}
      </Transition>
    </div>
  );
};
