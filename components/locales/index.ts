export type Languages = 'VI' | 'EN' | 'ID';
export type Translation = Map<Languages, Map<Contents, string>>;

export enum Contents {
    HOME_TITLE,
    PRICING_TITLE,
    FAQ_TITLE,

    // Hero section
    HERO_H1
}

export function language(): Translation {
    const t: Translation = new Map<Languages, Map<Contents, string>>();
    const vi = new Map<Contents, string>();
    const en = new Map<Contents, string>();
    const id = new Map<Contents, string>();
    t.set('VI', vi);
    t.set('EN', en);
    t.set('ID', id);

    vi.set(Contents.HOME_TITLE, 'Trang chủ')
    en.set(Contents.HOME_TITLE, 'Home');
    id.set(Contents.HOME_TITLE, 'Rumah');

    vi.set(Contents.PRICING_TITLE, 'Mức giá')
    en.set(Contents.PRICING_TITLE, 'Pricing');
    id.set(Contents.PRICING_TITLE, 'Pricing');


    vi.set(Contents.FAQ_TITLE, 'Câu hỏi thường gặp');
    en.set(Contents.FAQ_TITLE, 'FAQ');
    id.set(Contents.FAQ_TITLE, 'FAQ');
    

    vi.set(Contents.HERO_H1, 'Thinkmay CloudPC - chơi game trên mây');
    en.set(Contents.HERO_H1, 'Thinkmay CloudPC - play game on cloud');
    id.set(Contents.HERO_H1, 'Thinkmay CloudPC - indo game on cloud');
    return t;
}