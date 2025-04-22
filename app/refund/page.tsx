'use client';

import { info, loggedin } from '@/api/auth';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
    const [step, setStep] = useState<string>('not_signed');
    const [refundForm, setRefundForm] = useState<any[]>([]);
    const [now, setNow] = useState<Date>(new Date(0));
    useEffect(() => {
        setNow(new Date());
    }, []);

    const submit = async () => {
        const supabase = createClient(
            'https://play.2.thinkmay.net:445',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
        );

        await supabase.from('refund_request').insert({
            user: info()?.email,
            metadata: {
                form: refundForm
            }
        });
    };

    const fetch = async () => {
        const supabase = createClient(
            'https://play.2.thinkmay.net:445',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
        );

        const email = info()?.email;
        const { data, error: err } = await supabase
            .from('refund_request')
            .select('id,created_at,amount')
            .eq('user', email);

        if (err) throw new Error(err.message);
        else if (data.length > 0) return setStep('status');

        const { data: sub, error: errr } = await supabase.rpc(
            'get_subscription_v2',
            {
                email
            }
        );
        if (errr) throw new Error(errr.message);
        else if (sub.length > 0) setSubscription(sub.at(0));
        setStep('condition');
    };

    const [subscription, setSubscription] = useState<
        | {
              total_usage: number;
              last_payment: string;
              plan_name: string;
          }
        | undefined
    >(undefined);

    const { total_usage, last_payment, plan_name } = subscription ?? {
        total_usage: 999,
        last_payment: now,
        plan_name: 'month'
    };

    useEffect(() => {
        if (loggedin()) setStep('signed');
        else setStep('not_signed');
    }, []);

    useEffect(() => {
        if (step == 'complete') submit();
        else if (step == 'signed') fetch();
    }, [step]);

    let applicable = false;
    let out_of_day = false;
    let out_of_time = false;

    if (plan_name?.includes('week')) {
        out_of_day =
            now.getTime() - new Date(last_payment).getTime() >
            3 * 24 * 3600 * 1000;
        out_of_time = total_usage > 2;

        applicable = subscription != undefined && !out_of_day && !out_of_time;
    } else if (plan_name?.includes('month')) {
        out_of_day =
            now.getTime() - new Date(last_payment).getTime() >
            5 * 24 * 3600 * 1000;
        out_of_time = total_usage > 12;

        applicable = subscription != undefined && !out_of_day && !out_of_time;
    }

    switch (step) {
        case 'condition':
            return (
                <RefundCondition
                    applicable={applicable}
                    total_usage={total_usage}
                    last_payment={new Date(last_payment)}
                    next={() => setStep('reason')}
                />
            );
        case 'reason':
            return (
                <RefundReason
                    next={(reason) => {
                        setRefundForm((old) => [...old, reason]);
                        setStep('method');
                    }}
                />
            );
        case 'method':
            return (
                <RefundMethod
                    prev={() => setStep('signed')}
                    next={(method) => {
                        setRefundForm((old) => [...old, method]);
                        setStep('complete');
                    }}
                />
            );
        case 'complete':
            return <RefundConfirm next={() => setStep('status')} />;
        case 'status':
            return <RefundStatus />;
        default:
            return <RefundPolicy />;
    }
}

function RefundStatus() {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-lg md:max-w-5xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Chúng mình đã nhận được yêu cầu refund của bạn, bên mình
                        sẽ liên hệ lại với bạn để xác nhận thông tin nhé
                    </h2>
                </div>
            </div>
            <div
                id="cancelRefundModal"
                tabIndex={-1}
                aria-hidden="true"
                className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
            >
                <div className="relative h-full w-full max-w-md p-4 md:h-auto">
                    <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
                        <button
                            type="button"
                            className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="cancelRefundModal"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                            <svg
                                className="h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                />
                            </svg>
                            <span className="sr-only">Danger icon</span>
                        </div>
                        <p className="mb-3.5 text-gray-900 dark:text-white">
                            Are you sure you want to cancel the refund?
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <button
                                data-modal-toggle="cancelRefundModal"
                                type="button"
                                className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                No, cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Yes, delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RefundCondition({
    next,
    applicable,
    total_usage,
    last_payment
}: {
    next: () => void;
    applicable: boolean;
    total_usage: number;
    last_payment: Date;
}) {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
                    <StatusBar />

                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-2.5 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                                Tài khoản của bạn {applicable ? '' : 'không'}{' '}
                                thỏa mãn điều kiện hoàn tiền
                            </h3>
                            {/* <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Để thỏa mãn yêu cầu hoàn tiền, tài khoản của bạn
                                cần đạt được những yêu cầu sau:
                            </p> */}
                        </div>
                    </div>
                    <p>Bạn đã sử dụng {total_usage} giờ</p>
                    <p>
                        Bạn đã đăng kí từ ngày{' '}
                        {last_payment.toLocaleDateString()}
                    </p>
                    {applicable ? (
                        <div className="gap-4 sm:flex sm:items-center">
                            <button
                                onClick={next}
                                className="mt-4 flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-600 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                            >
                                Next: Lý do hoàn tiền
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

function StatusBar() {
    return (
        <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Product return form
            </h2>

            <ol className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:justify-center md:flex-row md:items-center lg:gap-6">
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg
                        className="h-5 w-5 text-primary-700 dark:text-primary-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                        Return requirement
                    </p>
                </li>

                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>

                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg
                        className="h-5 w-5 text-primary-700 dark:text-primary-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                        Return reason
                    </p>
                </li>

                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>

                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Delivery option
                    </p>
                </li>

                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>

                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                    <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Confirmation
                    </p>
                </li>
            </ol>
        </div>
    );
}

type ReasonCallback = { reason: string[]; feedback: string[] };

function RefundReason({ next }: { next: (_: ReasonCallback) => void }) {
    const [showOtherReason, setShowOtherReason] = useState(false);
    const [showOtherFeedback, setShowOtherFeedback] = useState(false);
    const [reason, setReason] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<string[]>([]);
    const oreason = useRef<HTMLTextAreaElement>(null);
    const ofeedback = useRef<HTMLTextAreaElement>(null);
    const nextw = () =>
        next({
            reason: [
                ...reason,
                ...(oreason.current?.value != undefined
                    ? [oreason.current?.value]
                    : [])
            ],
            feedback: [
                ...feedback,
                ...(ofeedback.current?.value != undefined
                    ? [ofeedback.current?.value]
                    : [])
            ]
        });

    const feedbacks = [
        'Đây là lần đầu tiên tôi biết tới công nghệ cloud gaming',
        'Tôi đã nghe qua công nghệ cloud gaming',
        'Tôi đã sử dụng qua các sản phẩm cloud gaming khác',
        'Tôi đã sử dụng thinkmay được một thời gian'
    ];

    const renderFeedback = (val: string, index: number) => {
        return (
            <div key={index} className="mb-4 flex items-center">
                <input
                    onChange={(e) =>
                        setFeedback((old) =>
                            e.target.checked
                                ? [...old, val]
                                : old.filter((x) => x != val)
                        )
                    }
                    id="condition-1"
                    type="checkbox"
                    value=""
                    name="product-condition"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                />
                <label
                    htmlFor="condition-1"
                    className="ms-2 text-gray-500 dark:text-gray-400"
                >
                    {val}
                </label>
            </div>
        );
    };

    const reasons = [
        'Tôi không thể sử dụng Thinkmay do vấn đề giật lagg',
        'Tôi không không thể chơi game mình muốn trên Thinkmay',
        'Tôi không hài lòng với cách hỗ trợ người dùng của Thinkmay',
        'Tôi không biết cách dùng Thinkmay'
    ];

    const renderReason = (val: string, index: number) => {
        return (
            <div key={index} className="mb-4 flex items-center">
                <input
                    id="reason-1"
                    onChange={(e) =>
                        setReason((old) =>
                            e.target.checked
                                ? [...old, val]
                                : old.filter((x) => x != val)
                        )
                    }
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                />
                <label
                    htmlFor="reason-1"
                    className="ms-2 text-gray-500 dark:text-gray-400"
                >
                    {val}
                </label>
            </div>
        );
    };

    const OtherFeedback = () => (
        <div
            id="productConditionModal"
            className="left-0 right-0 top-0 z-50 h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
        >
            <div className="relative h-full w-full max-w-md p-4 md:h-auto">
                <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
                    <label
                        htmlFor="reason-message"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Write here the condition of the product
                    </label>
                    <textarea
                        id="reason-message"
                        rows={4}
                        className="mb-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:mb-5"
                        placeholder="e.g. I used the product for 10 months and it has fine scratches"
                        ref={ofeedback}
                    ></textarea>
                </div>
            </div>
        </div>
    );

    const OtherReason = () => (
        <div
            id="refundReasonModal"
            className="left-0 right-0 top-0 z-50 h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
        >
            <div className="relative h-full w-full max-w-md p-4 md:h-auto">
                <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
                    <label
                        htmlFor="reason-message"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Write the reason why you want the refund
                    </label>
                    <textarea
                        id="reason-message"
                        rows={4}
                        className="mb-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:mb-5"
                        placeholder="e.g. Product malfunction"
                        ref={oreason}
                    ></textarea>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
                    <StatusBar />

                    <div className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                1. Vui lòng chọn lý do hoàn tiền
                            </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Giúp chúng mình biết cách khắc phục và hoàn
                                thiện sản phẩm trong tương lai
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    What is the condition of the product?
                                </p>

                                <div className="space-y-4">
                                    {feedbacks.map(renderFeedback)}
                                </div>

                                <button
                                    type="button"
                                    id="productConditionButton"
                                    data-modal-target="productConditionModal"
                                    data-modal-toggle="productConditionModal"
                                    className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                                    onClick={() =>
                                        setShowOtherFeedback((old) => !old)
                                    }
                                >
                                    Other condition
                                </button>
                                {showOtherFeedback ? <OtherFeedback /> : null}
                            </div>

                            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8">
                                <p className="font-medium text-gray-900 dark:text-white">
                                    What is the main reason for returning the
                                    product?
                                </p>

                                <div className="space-y-4">
                                    {reasons.map(renderReason)}
                                </div>
                                <button
                                    id="refundReasonButton"
                                    data-modal-target="refundReasonModal"
                                    data-modal-toggle="refundReasonModal"
                                    type="button"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                                    onClick={() =>
                                        setShowOtherReason((old) => !old)
                                    }
                                >
                                    <svg
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    I have another reason
                                </button>
                                {showOtherReason ? <OtherReason /> : null}
                            </div>
                        </div>

                        <div
                            className="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-800 dark:text-primary-400 sm:text-base"
                            role="alert"
                        >
                            Kindly select your reasons for returning the product
                            thoughtfully, as this will aid us in expediting your
                            request resolution and ensuring your utmost
                            satisfaction with the overall purchase experience.
                        </div>

                        <div className="gap-4 sm:flex sm:items-center">
                            <button
                                onClick={nextw}
                                className="mt-4 flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-600 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                            >
                                Next: Phương thức hoàn tiền
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RefundMethod({
    next,
    prev
}: {
    next: (_: string) => void;
    prev: () => void;
}) {
    const [method, setMethod] = useState('');
    const methods = [
        'Tôi muốn được hoàn tiền về tài khoản tôi',
        'Tôi muốn đóng băng tài khoản đến khi Thinkmay giải quyết được vấn đề',
        'Tôi muốn được hỗ trợ trước khi hoàn tiền'
    ];

    const nextw = () => next(method);

    const renderMethod = (method: string, index: number) => (
        <div
            key={index}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
        >
            <div className="flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id="shopping-voucher"
                        aria-describedby="shopping-voucher-text"
                        type="radio"
                        name="delivery-method"
                        value=""
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        onClick={() => setMethod(method)}
                    />
                </div>

                <div className="ms-4 text-sm">
                    <label
                        htmlFor="shopping-voucher"
                        className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                        {method}
                    </label>
                    <p
                        id="shopping-voucher-text"
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                        {/* Receive an instant voucher that you can use for new
                        orders. */}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
                    <StatusBar />

                    <div className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                4. Select the money back option:
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            {methods.map(renderMethod)}
                        </div>

                        <div className="gap-4 sm:flex sm:items-center">
                            <button
                                type="button"
                                onClick={prev}
                                className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                            >
                                Prev: Delivery
                            </button>
                            <button
                                type="submit"
                                onClick={nextw}
                                className="mt-4 flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-600 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                            >
                                Next: Confirmation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RefundConfirm({ next }: { next: () => void }) {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
                    <StatusBar />

                    <div className="space-y-6">
                        <svg
                            className="h-8 w-8 text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 11.917 9.724 16.5 19 7.5"
                            />
                        </svg>

                        <div>
                            <h3 className="mb-2.5 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                                Your request has been successfully registered
                            </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                I have successfully received your request to
                                return this product, until we resolve this case
                                you can track the status of your order.
                            </p>
                        </div>

                        <a
                            onClick={next}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                        >
                            <svg
                                className="h-4 w-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View status
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RefundPolicy() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:pb-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start xl:gap-20">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Flowbite Market Terms
                        </h3>

                        <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                            Welcome to Flowbite
                        </h3>
                        <p className="mt-6 text-base font-normal text-gray-500 dark:text-gray-400">
                            These Terms of Use constitute a legally binding
                            agreement made between you, whether personally or on
                            behalf of an entity (“you”) and Crafty Dwarf LLC
                            ("Company", “we”, “us”, or “our”), concerning your
                            access to and use of the https://themesberg.com
                            website as well as any other media form, media
                            channel, mobile website or mobile application
                            related, linked, or otherwise connected thereto
                            (collectively, the “Site”). The Site provides an
                            online marketplace for the following goods,
                            products, and/or services: website themes and
                            templates (the “Marketplace Offerings”). In order to
                            help make the Site a secure environment for the
                            purchase and sale of Marketplace Offerings, all
                            users are required to accept and comply with these
                            Terms of Use.
                        </p>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Supplemental terms and conditions or documents that
                            may be posted on the Site from time to time are
                            hereby expressly incorporated herein by reference.
                            We reserve the right, in our sole discretion, to
                            make changes or modifications to these Terms of Use
                            at any time and for any reason.
                        </p>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            The information provided on the Site is not intended
                            for distribution to or use by any person or entity
                            in any jurisdiction or country where such
                            distribution or use would be contrary to law or
                            regulation or which would subject us to any
                            registration requirement within such jurisdiction or
                            country. Accordingly, those persons who choose to
                            access the Site from other locations do so on their
                            own initiative and are solely responsible for
                            compliance with local laws, if and to the extent
                            local laws are applicable.
                        </p>

                        <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                            How buying items works
                        </h3>
                        <div className="p-6 mt-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                This section will help you understand what you
                                are buying when you purchase an item and how
                                that transaction takes place on Flowbite
                                Library.
                            </p>
                        </div>

                        <h4 className="mt-4 text-xl font-bold text-gray-500 dark:text-gray-400">
                            1. What you're buying:
                        </h4>
                        <ol className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 space-y-2.5 list-[lower-alpha] list-outside pl-5">
                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    License:
                                </span>{' '}
                                When you buy an item, you acquire the right to
                                use that item; you're not actually acquiring the
                                item itself. What you get includes a license
                                directly from the author to use that item. Items
                                are subject to specific terms of use, and these
                                terms are the ‘license’ that we set on Flowbite.
                                This license also applies to you if you download
                                an item that someone else has bought for you
                                (because anyone downloading an item needs to be
                                an Flowbite member). Different license types are
                                available for you to choose when you have
                                selected an item. You’ll need to think about the
                                way you want to use the item so that you can
                                pick the right license to allow that use. It’s
                                your responsibility to choose the correct
                                license.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Item support:
                                </span>{' '}
                                Authors can choose whether or not to support
                                certain items. If an author chooses to support
                                an item, this will be identified on the item
                                page. All supported items include a support
                                period. You can buy support extensions on these
                                items. Your right to access Item Support
                                requires an Flowbite account.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Buyer Services:
                                </span>{' '}
                                In addition to the use of the platform, when you
                                ‘buy’ an item you also receive buyer services
                                from Flowbite like 24/7 buyer support, fraud
                                protection, item quality control and other
                                related buyer services.
                            </li>
                        </ol>

                        <h4 className="mt-4 text-xl font-bold text-gray-500 dark:text-gray-400">
                            2. The total price for an item on Flowbite Market is
                            made up of:
                        </h4>
                        <ol className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 space-y-2.5 list-[lower-alpha] list-outside pl-5">
                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Item price:
                                </span>{' '}
                                The item price is made up of a license fee (for
                                the license you choose for the item), and if
                                relevant the item support fee (for supported
                                items).
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Buyer fee:
                                </span>{' '}
                                This is the fee for the buyer services you get
                                from Envato.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Handling fee:
                                </span>{' '}
                                In some transactions on Flowbite Market the
                                total checkout price may include a handling fee.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Taxes:
                                </span>{' '}
                                Some transactions on Flowbite Market may be
                                subject to tax that may be added to the price.
                                See section 23 for details about taxes on
                                Flowbite Market.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
