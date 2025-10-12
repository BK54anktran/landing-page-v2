import { AudioWrapper, Thinkmay, VideoWrapper, isMobile } from '@core/core';
import { Assign, ready } from '@/core/singleton';
import { openVNC, showConnect } from '@/backend/actions';
import {
    appDispatch,
    popup_close,
    set_fullscreen,
    toggle_objectfit,
    useAppSelector
} from '@/backend/reducers';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import './remote.scss';
import { DevEnv } from '@core/api/database';

interface AuthInfo {
    videoUrl: string;
    audioUrl: string;
    hidUrl: string;
    microUrl: string;
    logUrl: string;
}

export const Remote: React.FC = () => {
    const { active, auth, relative_mouse, fullscreen, objectFit } = useAppSelector(
        (store) => store.remote as {
            active: boolean;
            auth?: AuthInfo;
            relative_mouse: boolean;
            fullscreen: boolean;
            objectFit: string;
        }
    );

    const remoteVideo = useRef<HTMLVideoElement | null>(null);
    const remoteAudio = useRef<HTMLAudioElement | null>(null);

    // --- Cảnh báo khi reload / thoát trang
    useEffect(() => {
        const handler = (e: BeforeUnloadEvent) => {
            const text = 'Are you sure (｡◕‿‿◕｡)';
            e.returnValue = text;
            return text;
        };

        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, []);

    // --- Khởi tạo WebRTC và kết nối Thinkmay
    useEffect(() => {
        if (!active || !auth) return;

        if (isMobile()) appDispatch(toggle_objectfit());

        if (DevEnv) openVNC();
        else showConnect();

        setupWebRTC();

        ready().then((err) => {
            if (err instanceof Error) {
                toast(err.message, {
                    icon: 'ℹ️',
                    duration: 15000,
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff'
                    }
                });
            }
            appDispatch(popup_close());
        });
    }, [active, auth]);

    // --- Hàm khởi tạo Thinkmay instance
    const setupWebRTC = (): void => {
        if (!auth || !remoteVideo.current || !remoteAudio.current) return;
        Assign(
            new Thinkmay(
                new VideoWrapper(remoteVideo.current, auth.videoUrl),
                new AudioWrapper(remoteAudio.current, auth.audioUrl),
                auth.hidUrl,
                auth.microUrl,
                auth.logUrl
            )
        );
    };

    // --- Pointer lock (chuột tương đối)
    const pointerlock = (): void => {
        if (!fullscreen) appDispatch(set_fullscreen(true));
        const videoEl = remoteVideo.current;
        if (
            videoEl &&
            !(
                document.pointerLockElement ||
                (document as any).mozPointerLockElement ||
                (document as any).webkitPointerLockElement
            )
        ) {
            videoEl.requestPointerLock();
        }
    };

    return (
        <div className="relative">
            <video
                className="remote"
                ref={remoteVideo}
                onClick={relative_mouse ? pointerlock : undefined}
                autoPlay
                muted
                playsInline
                loop
                style={{ objectFit: objectFit as React.CSSProperties['objectFit'] }}
            />
            <audio
                ref={remoteAudio}
                autoPlay
                playsInline
                controls={false}
                muted={false}
                loop
                style={{ zIndex: -5, opacity: 0 }}
            />
        </div>
    );
};
