import { LoginModal } from './login';

const Modals = [
    {
        name: 'login',
        component: LoginModal
    }
];

export const Modal = ({ type }: { type?: string }) => {
    const RenderTarget = () => Modals.find((x) => x.name == type)?.component();
    return (
        <>
            <RenderTarget />
        </>
    );
};
