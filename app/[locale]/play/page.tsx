'use client';
import {
    appDispatch,
    popup_open,
    wait_and_claim_volume
} from '@/backend/reducers';

export default function Home() {
    const connect = () => {
        console.log('Bật máy');
        appDispatch(wait_and_claim_volume());
    };
    return (
        <>
            <p> HOME PLAY</p>
            <button onClick={connect} className="text-center w-full px-5 py-4 rounded-[100px] bg-blue-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-blue-700 hover:shadow-blue-400">
                Bật máy
            </button>
        </>
    );
}
