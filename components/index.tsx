const ExternalURL = {
    facebook: 'https://www.facebook.com/thinkonmay',
    discord:
        'https://discord.com/servers/thinkmay-cloud-pc-1085741898309849128',
    tiktok: 'https://www.tiktok.com/@thinkmaycloudpcvn'
};

export const Hero = () => {
    return (
        <section className="bg-white dark:bg-mica ">
            <div className="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Thinkmay CloudPC - chơi game trên mây
                </h1>
                <p className="mb-8 text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 font-medium">
                    Chơi tất cả các game cấu hình cao, đồ họa đẹp trên mọi thiết
                    bị, chỉ với kết nối internet
                    <br />
                    Sử dụng hoàn toàn trên trình duyệt
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="/play/index.html?app=null&ref=landingpage_heroplay"
                        className="inline-flex items-center justify-center px-5 py-3 text-2xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        Sử dụng ngay
                    </a>
                    {/* <a
                        href="/pricing"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Pricing & FAQ
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a> */}
                </div>
                <img
                    className="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 z-1 dark:hidden"
                    src="/img/screenshoot_store.png"
                    alt="demo image for thinkmay"
                />
                <img
                    className="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1"
                    src="/img/screenshoot_store.png"
                    alt="demo image for thinkmay"
                />
            </div>
            <div className="pt-48 lg:pb-16 pb-8 -mt-48 bg-gray-50 sm:pt-80 sm:-mt-80 dark:bg-gray-800 z-2">
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 ">
                    <div className="grid grid-cols-3 gap-20 sm:gap-0 justify-center mt-8 text-gray-500 mb-[128px]">
                        <a
                            href={ExternalURL.tiktok}
                            target="_blank"
                            className="mb-5 mr-5 max-h-24 lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
                        >
                            <svg
                                className="w-full h-full text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                            >
                                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                            </svg>
                        </a>
                        <a
                            href={ExternalURL.facebook}
                            target="_blank"
                            className="mb-5 mr-5 max-h-24 lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
                        >
                            <svg
                                className="w-full h-full text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                />
                            </svg>
                        </a>
                        <a
                            href={ExternalURL.discord}
                            target="_blank"
                            className="mb-5 mr-5 max-h-24 lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
                        >
                            <svg
                                className="w-full h-full text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Feature = () => {
    return (
        <section className="bg-white dark:bg-mica mb-[128px]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Tương lai của chơi game là chơi game trên "mây"
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 lg:px-48">
                    Tại sao phải mua gaming PC trong khi bạn có thể chơi game...
                </p>
                <div className="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <div>
                        <div className="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100 dark:bg-primary-900">
                            <svg
                                className="mx-auto w-16 h-16 text-primary-600 dark:text-primary-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold dark:text-white">
                            Mọi lúc, mọi nơi, mọi thiết bị
                        </h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-400">
                            Từ từ đã, cái gì, chơi game AAA trên điện thoại và
                            laptop á?
                            <br />
                            Thế bây giờ ngồi cafe, nằm trên giường cũng chơi
                            được game AAA?
                        </p>
                    </div>
                    <div>
                        <div className="inline-flex justify-center items-center mb-6 w-24 h-24 bg-purple-100 rounded-lg dark:bg-purple-900">
                            <svg
                                className="mx-auto w-16 h-16 text-purple-600 dark:text-purple-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold dark:text-white">
                            Không chờ đợi, bật là chơi, tối ưu từ A-Z
                        </h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-400">
                            Lại còn có game được tải sẵn luôn? Không cần phải đi
                            mày mò cài Việt Hóa?
                            <br />
                            Xong rồi cũng không cần phải đi mày mò setting, tất
                            cả đã được tối ưu sẵn?
                        </p>
                    </div>
                </div>
                <p className="text-center">
                    <a
                        href="/faq"
                        className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                    >
                        Tìm hiểu sâu hơn về CloudPC
                        <svg
                            className="ml-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </p>
            </div>
        </section>
    );
};

export const Preview = () => {
    return (
        <img
            className="w-full mt-[256px] mb-[256px] hidden sm:block"
            alt="demo image for thinkmay"
            src="/img/macbook_mockup.png"
        ></img>
    );
};

export const SocialProof = () => {
    return (
        <section className="bg-white dark:bg-mica mb-[256px] mt-[256px]">
            <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
                <div className="col-span-2 mb-8">
                    <p className="text-lg font-medium text-primary-600 dark:text-primary-500">
                        Sản phẩm được tin dùng
                    </p>
                    <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        Thinkmay CloudPC đã có 60k++ người sử dụng
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
                    <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <a
                                href="/legal"
                                className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                            >
                                Explore Legality Guide
                                <svg
                                    className="ml-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a
                                href="/legal"
                                className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                            >
                                Visit the Trust Center
                                <svg
                                    className="ml-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <div>
                        <svg
                            className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">
                            Hạ tầng luôn sẵn sàng
                        </h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Server ổn định, độ trễ đạt dưới 100ms, kết nối nhanh
                            chóng
                        </p>
                    </div>
                    <div>
                        <svg
                            className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">
                            60K+ người dùng
                        </h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Đã có hơn 60 ngàn người đăng kí dịch vụ
                        </p>
                    </div>
                    <div>
                        <svg
                            className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">
                            Độ phủ rộng
                        </h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Thinkmay CloudPC có hệ thống server ở cả miền bắc và
                            miền nam
                        </p>
                    </div>
                    <div>
                        <svg
                            className="mb-2 w-10 h-10 text-primary-600 md:w-12 md:h-12 dark:text-primary-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">
                            Cam kết hoàn tiền
                        </h3>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            Lên tới 5 ngày đầu tiên, nếu sản phẩm không đáp ứng
                            được yêu cầu.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CTA = () => {
    return (
        <section className="bg-white dark:bg-mica mt-[128px] mb-[128px]">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img
                    className="w-full dark:hidden"
                    src="/img/macbook_empty.png"
                    alt="demo image for thinkmay"
                />
                <img
                    className="w-full hidden dark:block"
                    src="/img/macbook_empty.png"
                    alt="demo image for thinkmay"
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Bắt đầu sử dụng Thinkmay CloudPC ngay bây giờ
                    </h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Hoặc nhắn tin hỗ trợ để được trải nghiệm miễn phí
                    </p>
                    <a
                        href="/play/index.html?app=null&ref=footerplay"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                    >
                        Sử dụng ngay
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800">
            <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                    <div className="col-span-2">
                        <a
                            href="/play/index.html?app=null&ref=landingpage"
                            className="flex items-center mb-2 text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white"
                        >
                            <img
                                src="/img/logo_white.png"
                                className="mr-3 h-6 sm:h-9 hidden dark:block"
                                alt="thinkmay logo"
                            ></img>
                            <img
                                src="/img/logo.png"
                                className="mr-3 h-6 sm:h-9 dark:hidden"
                                alt="thinkmay logo"
                            ></img>
                            Thinkmay
                        </a>
                        <p className="my-4 font-light text-gray-500 dark:text-gray-400">
                            Thinkmay CloudPC is a CloudPC solution that help you
                            play games on your laptop or mobile devices without
                            the need to download anything
                        </p>
                        <ul className="flex mt-5 space-x-6">
                            <li>
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Company
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className=" hover:underline"
                                >
                                    About
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="hover:underline"
                                >
                                    Careers
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="hover:underline"
                                >
                                    Brand Center
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="/play/index.html?app=null&ref=landingpage"
                                    className="hover:underline"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Help center
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.discord}
                                    className="hover:underline"
                                >
                                    Discord Server
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.tiktok}
                                    className="hover:underline"
                                >
                                    Tiktok
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.facebook}
                                    className="hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.facebook}
                                    className="hover:underline"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Legal
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/legal" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/legal" className="hover:underline">
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/legal" className="hover:underline">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                    © 2021-2025
                    <a
                        href="/play/index.html?app=null&ref=landingpage"
                        className="hover:underline"
                    >
                        Thinkmay
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

const qa = [
    [
        {
            question: 'Thinkmay Cloud PC là gì?',
            answer: 'Thinkmay Cloud PC là một dịch vụ máy tính cá nhân ảo được cung cấp qua đám mây. Thay vì sử dụng phần cứng máy tính truyền thống, người dùng có thể truy cập một máy tính mạnh mẽ và linh hoạt từ xa qua internet, giúp tiết kiệm chi phí phần cứng và tăng hiệu suất làm việc.'
        },
        {
            question:
                'Tôi có thể cài đặt các phần mềm trên Thinkmay Cloud PC không?',
            answer: 'Có, bạn hoàn toàn có thể cài đặt và sử dụng các phần mềm trên Thinkmay Cloud PC giống như trên máy tính thông thường. Dịch vụ hỗ trợ các phần mềm phổ biến như Microsoft Office, Adobe, và nhiều ứng dụng khác.'
        },
        {
            question:
                'Các thiết bị nào thì dùng được Cloud PC? Tôi có cần đầu tư thiết bị gì không?',
            answer: 'Mọi thiết bị thông minh (điện thoại, laptop, máy tính bảng, TV...) với kết nối Internet đều có thể sử dụng Cloud PC. Thiết bị quan trọng nhất bạn cần chuẩn bị là thiết bị phát wifi có tốc độ và đường truyền ổn định.  Ngoài ra, để tăng trải nghiệm sử dụng Cloud PC, đặc biệt khi chơi game, bạn có thể mua thêm tay cầm, chuột & bàn phím (khi chơi trên điện thoại) tùy theo nhu cầu.'
        },
        {
            question: 'Trên Thinkmay có thể chơi những game nào?',
            answer: 'Hầu hết các game đều chơi được trên Thinkmay, trừ 1 số tựa game online như: League of Legends, PUBG, Valorant, vv'
        }
    ],
    [
        {
            question: 'Có được chơi thử không? Chơi thử như thế nào?',
            answer: 'Trước tiên, hãy truy cập vào trang web chính thức của ThinkMay Cloud PC để tìm hiểu thêm về các dịch vụ và các gói sản phẩm, bạn có thể liên hệ với bộ phận hỗ trợ khách hàng live chat. Sau đó, yêu cầu thông tin về việc đăng ký demo hoặc dùng thử dịch vụ'
        },
        {
            question:
                'Mất bao lâu sau khi thanh toán thì tôi có thể sử dụng Thinkmay CloudPC',
            answer: 'Quá trình thanh toán của Thinkmay được diễn ra hoàn toàn tự động, bạn có thể lựa chọn hình thức thanh toán chuyển khoản ngân hàng thông qua mã QR. Thông thường hệ thống chỉ mất từ 3-5 phút để bạn có thể bắt đầu sử dụng ngay sau khi Thinkmay xác nhận thanh toán thành công'
        },
        {
            question:
                'Chính sách hoàn tiền của Thinkmay nếu người dùng dùng gặp lỗi là gì',
            answer: 'Thinkmay hỗ trợ chính sách hoàn tiền tối đa lên tới 80%, 5 ngày sau khi bạn đăng kí dịch vụ và tối đa 3 giờ chơi. Trong đó điều kiện hoàn tiền hợp lệ là khi bạn gặp phải các lỗi phần mềm đến từ phía Thinkmay, dẫn tới bạn không thể sử dụng sản phẩm một các thoải mái. Để biết thêm thông tin chi tiết về chính sách hoàn tiền, bạn có thể liên hệ với phần hỗ trợ người dùng.'
        }
    ],
    [
        {
            question: 'Tôi phải làm gì gì gặp lỗi và bị giật/lag?',
            answer: 'Kiểm tra kết nối Internet: Kết nối internet chậm hoặc không ổn định là nguyên nhân phổ biến gây giật lag khi sử dụng dịch vụ cloud PC. Nếu có thể, hãy kết nối trực tiếp qua dây Ethernet thay vì sử dụng Wi-Fi để giảm độ trễ.'
        },
        {
            question: 'Làm sao để tối ưu đường truyền mạng',
            answer: 'Chọn máy chủ gần vị trí của bạn: ThinkMay Cloud PC cung cấp lựa chọn về máy chủ (server), hãy chọn máy chủ gần khu vực của bạn nhất. Điều này giúp giảm độ trễ và cải thiện hiệu suất.'
        },
        {
            question: 'Làm sao để tối ưu fps trong game',
            answer: 'Nếu bạn đang sử dụng các ứng dụng hoặc chơi game đòi hỏi đồ họa cao, hãy giảm cấu hình đồ họa trong ứng dụng hoặc game đó.  Đặc biệt là giảm độ phân giải, tắt các hiệu ứng đồ họa không cần thiết để giảm tải cho hệ thống.'
        },
        {
            question:
                'Làm sao nếu tất cả các cách trên đều không giải quyết được vấn đề',
            answer: 'Cuối cùng, bạn có thể liên hệ với bộ phận hỗ trợ của ThinkMay để kiểm tra lại hệ thống'
        }
    ]
];

export const FAQ = () => {
    const renderQA = (
        {
            question,
            answer
        }: {
            question: string;
            answer: string;
        },
        index: number
    ) => (
        <div key={index} className="mb-10">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {question}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
    );

    return (
        <section className="bg-white dark:bg-mica">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-lg text-center">
                    <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Những câu hỏi thường gặp
                    </h2>
                    <p className="mb-8 text-gray-500 lg:text-lg dark:text-gray-400">
                        Bạn có thể nhắn tin trong phần hỗ trợ người dùng nếu bạn
                        có những câu hói khác
                    </p>
                </div>

                <div className="grid pt-8 text-left border-t border-gray-200 dark:border-gray-700 sm:gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
                    {qa.map((col, index) => (
                        <div key={index}>{col.map(renderQA)}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};
