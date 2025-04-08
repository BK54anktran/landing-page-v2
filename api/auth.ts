import { POCKETBASE } from '.';

export const loggedin = async () => {
    return (await POCKETBASE().collection('users').getFullList()).length > 0;
};

export const login = (provider: 'google' | 'facebook' | 'discord') => {
    const originalurl = new URL(window.location.href);
    window.oncontextmenu = (ev) => ev.preventDefault();

    const w = window.open();
    if (w == null) return;

    POCKETBASE()
        .collection('users')
        .authWithOAuth2({
            provider: provider,
            urlCallback: (url) => {
                w.location.href = url;
            }
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
                            ? originalurl.searchParams.get('ref')
                            : POCKETBASE().authStore.model?.metadata.reference
                    }
                });
        });
};
