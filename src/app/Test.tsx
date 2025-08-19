/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export const TestComponent = () => {
  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (event.data === 'downloadComplete') {
        alert('Download was successful!');
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-[100px]">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      HOME
      <Link href="/auth/login/by-phone">Login by phone</Link>
      <Link href="/auth/login/by-username">Login by phone</Link>
      <button
        title="press me"
        onClick={() => {
          (window as any).ReactNativeWebView?.postMessage(
            JSON.stringify({
              event: 'link_to',
              noDismiss: true,
              payload: {
                product_id: '755aba68-7f5a-42f7-9d87-16235082f8b5',
                product_type: '0',
                linkingPath:
                  '/internal_web_view?showNavigation=true&uri=http://localhost:3000&closeVisible=true',
              },
            })
          );
        }}
      >
        Press me
      </button>
      <button
        title="press me"
        onClick={() => {
          (window as any).ReactNativeWebView?.postMessage(
            JSON.stringify({
              event: 'link_to',
              noDismiss: true,
              payload: {
                linkingPath: '/shipping_cart?id=0b809985-f6f8-41d5-a17c-646520602b6e&productType=0',
              },
            })
          );
        }}
      >
        To Cart
      </button>
    </div>
  );
};
