import { type FC } from 'react';

type Props = {
  onClose: () => void;
};

export const AboutComponent: FC<Props> = ({ onClose }) => {
  return (
    <div className="py-3 px-4 sm:py-6 sm:px-6 text-left">
      <div className="flex flex-1 justify-between items-center">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Launch Bay Next
        </h3>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onClose}
            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-lbnred"
          >
            <span className="sr-only">Close</span>
            {/* <!-- Heroicon name: x --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-6 text-sm text-gray-600">
        <section>
          <h4 className="text-base font-semibold text-gray-900 mb-2">Bugs or feature requests</h4>
          <a
            href="https://github.com/andrelind/launch-bay-next/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-lbnred hover:underline"
          >
            Report them on GitHub →
          </a>
        </section>

        <section>
          <h4 className="text-base font-semibold text-gray-900 mb-2">Like the builder?</h4>
          <p className="mb-2">
            Please consider donating:
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.patreon.com/andrelind"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition-colors"
            >
              Patreon
            </a>
            <a
              href="https://paypal.me/launchbaynext"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition-colors"
            >
              PayPal
            </a>
          </div>
        </section>

        <section>
          <h4 className="text-base font-semibold text-gray-900 mb-2">Contribute</h4>
          <a
            href="https://github.com/andrelind/launch-bay-next"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-lbnred hover:underline"
          >
            GitHub repo →
          </a>
        </section>

        <section>
          <h4 className="text-base font-semibold text-gray-900 mb-2">Credits</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            <li>
              Data based on{' '}
              <a href="https://github.com/guidokessels/xwing-data2" target="_blank" rel="noopener noreferrer" className="text-lbnred hover:underline">xwing-data2</a>{' '}
              by guidokessels
            </li>
            <li>
              <a href="https://github.com/geordanr/xwing-miniatures-font" target="_blank" rel="noopener noreferrer" className="text-lbnred hover:underline">X-wing miniatures font</a>{' '}
              by geordanr
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-base font-semibold text-gray-900 mb-2">Built with</h4>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'Next.js', 'React Native (Expo)', 'Postgres', 'Drizzle ORM'].map((tech) => (
              <span key={tech} className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-400">
            This builder is unofficial and is not affiliated with Fantasy Flight
            Games, Lucasfilm Ltd., or Disney.
          </p>
          <a href="/privacy" className="text-xs text-lbnred hover:underline mt-1 inline-block">
            Privacy Policy
          </a>
        </section>
      </div>
    </div>
  );
};
