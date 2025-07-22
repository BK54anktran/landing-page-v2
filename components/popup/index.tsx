import { LoginModal } from './login';

const Modals = [
    {
        name: 'login',
        component: LoginModal
    }
];

export const Modal = ({
    type,
    close 
}: {
    type?: string;
    close: () => void;
}) => {
    const RenderTarget = () =>
        Modals.find((x) => x.name == type)?.component({ close });
    return (
        <>
            <RenderTarget />
        </>
    );
};
