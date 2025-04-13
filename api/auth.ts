import { POCKETBASE } from '.';

export const loggedin = () => POCKETBASE().authStore.isValid;
export const info = () => POCKETBASE().authStore.model;
export const logout = () => POCKETBASE().authStore.clear();
export const login = (
    provider: 'google' | 'facebook' | 'discord',
    redirectTo: (_: string) => void,
    ref?: string
) => {
    POCKETBASE()
        .collection('users')
        .authWithOAuth2({
            provider: provider,
            urlCallback: (url) => redirectTo(url)
        })
        .then(() => {
            const isNewUser =
                (new Date().getTime() -
                    new Date(POCKETBASE().authStore.model?.created).getTime()) /
                    60000 <
                5; //
            POCKETBASE()
                .collection('users')
                .update(POCKETBASE().authStore.model?.id, {
                    metadata: {
                        reference: isNewUser
                            ? (ref ?? 'landingPage')
                            : POCKETBASE().authStore.model?.metadata.reference
                    }
                });
        });
};
