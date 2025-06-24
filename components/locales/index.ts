export type Languages = 'VI' | 'EN' | 'ID';
export type Translation = Map<Languages, Map<Contents, string>>;

export enum Contents {
    // Header section
    HOME_TITLE,
    PRICING_TITLE,
    FAQ_TITLE,
    LOGOUT,
    PLAYNOW,
    LOGIN,
    ////////////////

    // Hero section
    HERO_H1,
    HERO_MAIN_P1,
    HERO_MAIN_P2,
    HERO_MAIN_P3,
    HERO_MAIN_BUTTON
    /////////////////
}

export function language(): Translation {
    const t: Translation = new Map<Languages, Map<Contents, string>>();
    const vi = new Map<Contents, string>();
    const en = new Map<Contents, string>();
    const id = new Map<Contents, string>();
    t.set('VI', vi);
    t.set('EN', en);
    t.set('ID', id);

    vi.set(Contents.HOME_TITLE, 'Trang chủ');
    en.set(Contents.HOME_TITLE, 'Home');
    id.set(Contents.HOME_TITLE, 'Beranda');

    vi.set(Contents.PRICING_TITLE, 'Mức giá');
    en.set(Contents.PRICING_TITLE, 'Pricing');
    id.set(Contents.PRICING_TITLE, 'Harga');

    vi.set(Contents.FAQ_TITLE, 'Câu hỏi thường gặp');
    en.set(Contents.FAQ_TITLE, 'FAQ');
    id.set(Contents.FAQ_TITLE, 'FAQ');

    vi.set(Contents.LOGOUT, 'Đăng xuất');
    en.set(Contents.LOGOUT, 'Logout');
    id.set(Contents.LOGOUT, 'Keluar');

    vi.set(Contents.PLAYNOW, 'Chơi ngay');
    en.set(Contents.PLAYNOW, 'Play Now');
    id.set(Contents.PLAYNOW, 'Main Sekarang');

    vi.set(Contents.LOGIN, 'Đăng nhập');
    en.set(Contents.LOGIN, 'Login');
    id.set(Contents.LOGIN, 'Masuk');
    /////////////////////////////////////////////////

    // HERO SECTION
    vi.set(Contents.HERO_H1, 'Thinkmay CloudPC - chơi game trên mây');
    en.set(Contents.HERO_H1, 'Thinkmay CloudPC - Play Games on Cloud');
    id.set(Contents.HERO_H1, 'Thinkmay CloudPC - Main Game di Cloud');

    vi.set(Contents.HERO_MAIN_P1, 'Cấu hình RTX 3060Ti, 16GB RAM');
    en.set(Contents.HERO_MAIN_P1, 'RTX 3060Ti, 16GB RAM Configuration');
    id.set(Contents.HERO_MAIN_P1, 'Konfigurasi RTX 3060Ti, 16GB RAM');

    vi.set(
        Contents.HERO_MAIN_P2,
        'Chơi tất cả các game cấu hình cao, đồ họa đẹp trên mọi thiết bị, chỉ với kết nối internet'
    );
    en.set(
        Contents.HERO_MAIN_P2,
        'Play all high-end games with beautiful graphics on any device, just with internet connection'
    );
    id.set(
        Contents.HERO_MAIN_P2,
        'Main semua game high-end dengan grafis indah di perangkat apapun, hanya dengan koneksi internet'
    );

    vi.set(Contents.HERO_MAIN_P3, 'Sử dụng hoàn toàn trên trình duyệt');
    en.set(Contents.HERO_MAIN_P3, 'Works entirely in your browser');
    id.set(Contents.HERO_MAIN_P3, 'Berjalan sepenuhnya di browser Anda');

    vi.set(Contents.HERO_MAIN_BUTTON, 'Sử dụng ngay');
    en.set(Contents.HERO_MAIN_BUTTON, 'Get Started Now');
    id.set(Contents.HERO_MAIN_BUTTON, 'Mulai Sekarang');
    ////////////////////////////////////////////////////

    
    return t;
}
