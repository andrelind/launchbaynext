import { serializer } from 'lbn-core/src/helpers';
import { canImportXws } from 'lbn-core/src/helpers/import+export';
import { type XWS } from 'lbn-core/src/types';
import { useRouter } from 'next/navigation';
import { type FC, useState } from 'react';

type Props = {
  onClose: () => void;
};

export const ImportComponent: FC<Props> = ({ onClose }) => {
  const [error, setError] = useState<Error>();
  const [xws, setXws] = useState<XWS>();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!xws) {
      return;
    }

    router.push(`/?lbx=${serializer.serialize(xws)}`);
    onClose();
  };

  return (
    <form className="space-y-8 text-left p-3 sm:p-0" onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Import XWS
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              XWS is a common format shared by many squadron builders for
              X-Wing.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-lbnred focus:border-lbnred block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Paste your XWS data here"
                  onChange={(e) => {
                    if (e.target.value?.length > 0) {
                      try {
                        const xws = canImportXws(e.target.value);
                        setXws(xws);
                      } catch (error) {
                        // setError(error);
                      }
                    } else {
                      setXws(undefined);
                      setError(undefined);
                    }
                  }}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-lbnred">Invalid XWS data</p>
              )}
              {xws && (
                <p className="mt-2 text-sm text-green-400">
                  XWS data checks out, please click import to proceed
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbnred"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lbnred hover:bg-lbnred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbnred"
          >
            Import
          </button>
        </div>
      </div>
    </form>
  );
};
