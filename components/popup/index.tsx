'use client';
import { LoginModal } from './login';

const Modals = [
    {
        name: 'login',
        component: LoginModal
    }
];

export const Modal = ({
    type,
    action
}: {
    type?: string;
    action: () => void;
}) => {
    const RenderTarget = () =>
        Modals.find((x) => x.name == type)?.component({ action });
    return (
        <>
            <RenderTarget />
        </>
    );
};
