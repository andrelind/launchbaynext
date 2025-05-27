import { trpc } from "@web/app/_trpc/client";
import { useCookies } from 'next-client-cookies';
import { FC, useState } from "react";
import { ClipLoader } from 'react-spinners';

type Props = {
    onClose: () => void;
}

export const LoginComponent: FC<Props> = ({ onClose }) => {
    const cookies = useCookies();

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState('');

    const [waitingForLink, setWaitingForLink] = useState(false);


    const [busy, setBusy] = useState(false);

    return (
        <div className="py-3 px-4 sm:py-6 sm:px-6 text-left flex flex-col grid-cols-1 gap-y-2">
            <div className="text-sm text-semibold text-gray-900">
                {!waitingForLink ? 'Enter your email to get started' : 'Fill in the code we sent you'}
                <div className="text-sm text-gray-400">
                    {!waitingForLink && '\nIf you previously had an account via Facebook, Google or Apple, please use the same email address to log in, and your data will be merged into the new account.'}
                </div>
            </div>
            <div className="w-full ">
                <input
                    id="search"
                    name="search"
                    className={`block w-full px-3 py-2 border border-transparent rounded-md leading-5 border-gray-400 placeholder-gray-400 focus:ring-blue-600 focus:text-gray-900 sm:text-sm`}
                    placeholder={waitingForLink ? "Code" : "Email"}
                    type="search"
                    value={waitingForLink ? code : email}
                    onChange={(e) => {
                        waitingForLink ? setCode(e.target.value) :
                            setEmail(e.target.value)
                    }}
                />
            </div>

            <button
                disabled={busy}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={async () => {
                    if (busy) return;

                    if (waitingForLink) {
                        setBusy(true);
                        const token = await trpc.validateLogin.mutate({
                            email,
                            code,
                        });

                        cookies.set('x-jwt', token, { expires: 30 }); // 30 days
                        setBusy(false);

                        onClose();
                        return
                    }

                    try {
                        setBusy(true);
                        await trpc.registerOrLogin.mutate({
                            email: email,
                        });
                        setBusy(false);

                        setWaitingForLink(true);
                    } catch (e) {
                        console.error(e);
                        setError((e as Error).message);
                    }
                }}
            >
                {busy ? <ClipLoader
                    color={'#ffffff'}
                    loading={true}

                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : waitingForLink ? 'Send' : 'Login'}
            </button>

            {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
    );
}