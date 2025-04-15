import { createClient } from '@supabase/supabase-js';
import { cacheLife } from 'next/dist/server/use-cache/cache-life';

type Plan = {
    name: string;
    size: number;
    limit_hour: number;
    total_days: number;
    amount: number;
    allow_payment: boolean;
    highlight?: boolean;
    title?: string;
    bonus?: any;
};

const Addon = {
    no_waiting_line: ({ value }: { value: boolean }) => (
        <li
            className={`flex items-center space-x-3 ${
                !value ? 'text-gray-500' : ''
            }`}
        >
            <svg
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                ></path>
            </svg>
            <span className={!value ? 'line-through' : ''}>
                Không có hàng chờ
            </span>
        </li>
    ),
    multiple_cluster: ({ value }: { value: boolean }) => (
        <li
            className={`flex items-center space-x-3 ${
                !value ? 'text-gray-500' : ''
            }`}
        >
            <svg
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                ></path>
            </svg>
            <span className={!value ? 'line-through' : ''}>
                Luôn luôn có server backup
            </span>
        </li>
    ),
    time: ({ value }: { value: number }) => (
        <li className="flex items-center space-x-3">
            <svg
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                ></path>
            </svg>
            {value == 0 ? (
                <span className="line-through">Giới hạn giờ chơi</span>
            ) : (
                <span>Tối đa {value}h chơi</span>
            )}
        </li>
    ),
    storage_limit: ({ value }: { value: number }) => (
        <li className="flex items-center space-x-3">
            <svg
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                ></path>
            </svg>
            {value == 0 ? (
                <span className="line-through">Giới hạn dung lượng tối đa</span>
            ) : (
                <span>Giới hạn {value}GB dung lượng tối đa</span>
            )}
        </li>
    ),
    storage_credit: ({ value }: { value: number }) => (
        <li className="flex items-center space-x-3">
            <svg
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                ></path>
            </svg>
            {value == 0 ? (
                <span className="line-through">Giới hạn dung lượng</span>
            ) : (
                <span>{value}GB credit dung lượng</span>
            )}
        </li>
    )
};

const subcontents = [
    {
        title: 'Gói 2 tuần',
        highlight: false,
        _name: 'week1',
        bonus: {
            time: 50,
            storage_limit: 200,
            storage_credit: 100,
            no_waiting_line: false,
            multiple_cluster: false
        }
    },
    {
        title: 'Gói tháng',
        highlight: true,
        _name: 'month1',
        bonus: {
            time: 120,
            storage_limit: 400,
            storage_credit: 200,
            no_waiting_line: false,
            multiple_cluster: false
        }
    },
    {
        title: 'Gói cao cấp',
        highlight: false,
        _name: 'month2',
        bonus: {
            time: 0,
            storage_limit: 0,
            storage_credit: 0,
            no_waiting_line: true,
            multiple_cluster: true
        }
    }
];

export const FetchPricing = async (): Promise<Plan[]> => {
    'use cache';
    cacheLife('hours');
    const supabase = createClient(
        'https://play.2.thinkmay.net:4432',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
    );

    const { data, error } = await supabase
        .from('plans')
        .select(
            'name, policy->size, policy->limit_hour, policy->total_days , price->amount, metadata->allow_payment'
        )
        .eq('active', true);

    if (error != null)
        throw new Error(`Failed to query plan table + ${error.message}`);
    else
        return data.map((e) => ({
            name: e.name,
            size: Number(e.size),
            limit_hour: Number(e.limit_hour),
            total_days: Number(e.total_days),
            amount: Number(e.amount),
            allow_payment: Boolean(e.allow_payment),
            ...(subcontents.find((x) => x._name == e.name) ?? {})
        }));
};

type Domain = {
    domain: string;
    free: number;
};

const fetchDomain = async (): Promise<Domain[]> => {
    'use cache';
    cacheLife('hours');
    const supabase = createClient(
        'https://play.2.thinkmay.net:4432',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
    );
    const { data: domains_v3, error: err } = await supabase.rpc(
        'get_domains_availability_v3'
    );
    if (err) throw err;
    else return domains_v3;
};

const PaymentButton = ({ plan }: { plan: string }) => {
    const defaultServer = 'v4.thinkmay.net';
    const href = `/play/index.html?plan=${plan}&server=${defaultServer}&ref=landingpage`;
    return (
        <div className="flex gap-2">
            <a
                href={href}
                type="button"
                className="py-2.5 px-5 bg-blue-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit block mx-auto hover:bg-blue-700  cursor-pointer"
            >
                Đăng kí
            </a>
        </div>
    );
};

const DomainSelection = async () => {
    const domains = await fetchDomain();

    return (
        <div className="block w-full content-center">
            <label className="block text-center mb-2 text-xl font-medium text-white w-full">
                Server
            </label>
            <select
                id="countries"
                className="h-12 border bg-gray-200 dark:bg-gray-900 border-gray-300 dark:text-white text-black text-base rounded-lg block w-50 py-2.5 px-4 focus:outline-none justify-self-center cursor-pointer"
            >
                {domains.map((domain, index) => (
                    <option key={index} value={domain.domain}>
                        {domain.domain}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const Pricing = async () => {
    const plans = await FetchPricing();
    const renderPlan = (plan: Plan, index: number) => {
        return (
            <div
                key={index}
                className="flex flex-col p-6 mx-auto max-w-xl text-center  rounded-lg border shadow xl:max-w-lg border-primary-600 bg-gray-200 dark:bg-gray-800 xl:p-8"
            >
                {plan.highlight ? (
                    <div className="mb-2">
                        <span className="py-1 px-3 text-sm text-primary-800 bg-primary-100 rounded dark:bg-primary-200 dark:text-primary-800">
                            Most popular
                        </span>
                    </div>
                ) : (
                    <div className="mb-2 h-4" />
                )}
                <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
                    {plan.title}
                </h3>
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    {plan.amount / 1000}k
                </span>
                <PaymentButton plan={plan.name} />
                <ul
                    role="list"
                    className="space-y-4 text-left text-gray-900 dark:text-gray-400 mt-12"
                >
                    {Object.keys(plan.bonus).map((key, idx) => {
                        var Obj = (Addon as any)[key];
                        return Obj != undefined ? (
                            <Obj key={idx} value={plan.bonus[key]} />
                        ) : null;
                    })}
                </ul>
            </div>
        );
    };

    return (
        <section className="h-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Đăng kí dịch vụ Cloud PC
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        *chưa bao gồm tài khoản game và các nâng cấp khác
                    </p>
                    <DomainSelection />
                </div>
                <div className="grid gap-8 xl:grid-cols-3 xl:gap-10">
                    {plans
                        .filter((val) => val.title != null)
                        .sort((a, b) => a.amount - b.amount)
                        .map(renderPlan)}
                </div>
            </div>
        </section>
    );
};
