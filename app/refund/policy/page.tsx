'use client';

import { info, loggedin } from '@/api/auth';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
    return <RefundPolicy />;
}

const refundPackages = [
  {
    title: "Gói 499K",
    conditions: [
      "Thời gian yêu cầu: Trong vòng 3 ngày kể từ khi được cấp máy.",
      "Tổng thời gian sử dụng: dưới 18 giờ.",
    ],
  },
  {
    title: "Gói 299K",
    conditions: [
      "Thời gian yêu cầu: Trong vòng 3 ngày kể từ khi được cấp máy.",
      "Tổng thời gian sử dụng: dưới 12 giờ.",
    ],
  },
  {
    title: "Gói 199K",
    conditions: [
      "Thời gian yêu cầu: Trong vòng 2 ngày kể từ khi được cấp máy.",
      "Tổng thời gian sử dụng: dưới 5 giờ.",
    ],
  },
];

const refundProcess = [
  "Liên hệ qua Fanpage chính thức.",
  "Cung cấp thông tin tài khoản và lý do yêu cầu hoàn tiền.",
  "Yêu cầu sẽ được xử lý trong vòng 2 ngày làm việc.",
];

function RefundPolicy() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:pb-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start xl:gap-20">
          <div className="w-full lg:max-w-xs lg:sticky lg:top-20">
            <div className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-6 lg:p-8">
                <h2 className="text-base font-bold text-gray-900 uppercase dark:text-white">
                  Chính sách
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/refund"
                      className="text-base font-medium text-primary-700 dark:text-primary-500"
                    >
                      Chính sách hoàn tiền
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="w-full text-white items-center justify-center inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Cần hỗ trợ? Liên hệ chúng tôi
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chính sách hoàn tiền
            </h3>
            <p className="mt-6 text-base text-gray-500 dark:text-gray-400">
              Thinkmay cam kết mang đến trải nghiệm dịch vụ CloudPC tốt nhất.
              Trong trường hợp bạn cảm thấy không hài lòng vì bất kỳ lý do nào,
              chúng tôi sẵn sàng hỗ trợ và hoàn lại{" "}
              <strong className='text-yellow-500'>80% tiền</strong> theo các điều kiện sau:
            </p>

            <div className="mt-6 space-y-6">
              {refundPackages.map((pkg, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    {pkg.title}:
                  </h4>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                    {pkg.conditions.map((cond, i) => (
                      <li key={i}>{cond}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  Quy trình yêu cầu hoàn tiền:
                </h4>
                <ol className="list-decimal list-inside text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                  {refundProcess.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg mt-6">
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Lưu ý: Chính sách không áp dụng cho các trường hợp vi phạm điều
                  khoản sử dụng dịch vụ hoặc cố ý gây lỗi. <br />
                  Vui lòng trải nghiệm dịch vụ miễn phí trước khi đưa ra quyết định
                  mua!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}