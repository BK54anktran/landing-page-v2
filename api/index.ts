import PocketBase from 'pocketbase';

export function getFrontendURL(): string {
    try {
        const address = localStorage.getItem('thinkmay_domain');
        if (address == null) return 'https://play.2.thinkmay.net';
        else return `https://${address}`;
    } catch {
        return 'https://play.2.thinkmay.net';
    }
}
export const POCKETBASE = () => new PocketBase(getFrontendURL());
