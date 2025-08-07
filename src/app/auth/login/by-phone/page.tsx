'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { PageContainer } from '@/components/common/PageContainer';

import { imageData } from './data';

const LoginByPhone = () => {
  // const query = useQuery({
  //   queryKey: ['test'],
  //   queryFn: async () => {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve({ data: [] });
  //       }, 3000);
  //     });
  //   },
  // });

  // {
  //   event: 'product_added_to_cart',
  //   data: {
  //     productSkuId: '78dab60d-ee2a-45a1-8271-20e9444bb5aa',
  //     inventoryId: '6f45cdfc-cf6c-43b7-9d30-d1e029ea98af',
  //     quantity: 1,
  //     productType: 0,
  //     sellingPrice: 0,
  //     addedViaPlatform: 'DROPPII_BUSINESS'
  //   }
  // }

  const onMessage = event => {
    // try {
    //   const obj = JSON.parse(event.data);
    //   if (obj.event === 'product_added_to_cart') {
    //     alert(obj.data?.productId);
    //   }
    // } catch (error) {
    //   alert(event);
    // }
  };

  useEffect(() => {
    const platform = localStorage.getItem('platform');

    if (platform === 'android') {
      document.addEventListener('message', onMessage);
      window.addEventListener('message', onMessage);

      return () => {
        document.removeEventListener('message', onMessage);
      };
    } else {
      document.addEventListener('message', onMessage);

      return () => {
        document.removeEventListener('message', onMessage);
        window.removeEventListener('message', onMessage);
      };
    }
  }, []);

  return (
    <PageContainer>
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-[100px]">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Image
          alt="test"
          width={100}
          height={100}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
        />
        <div
          style={{
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: 'lightblue',
            padding: '1rem',
          }}
        >
          <button
            title="make order"
            type="button"
            color="white"
            style={{ marginRight: '2rem' }}
            onClick={() => {
              const uri = encodeURIComponent('https://droppii.atlassian.net/browse/AI-234');
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  event: 'link_to',
                  payload: {
                    noDismiss: false,
                    linkingPath: `/voucher_product_v2?id=4b0f2407-9c5a-4335-8327-03ab815214c9`,
                  },
                })
              );
            }}
          >
            support
          </button>

          <button
            title="make order"
            type="button"
            color="white"
            style={{ marginRight: '2rem' }}
            onClick={() => {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  event: 'link_to',
                  payload: {
                    noDismiss: false,
                    linkingPath: '/chat_messages?targetUserId=8933669415691170',
                  },
                })
              );
            }}
          >
            chat_messages
          </button>
          <button
            title="make order"
            type="button"
            color="white"
            style={{ marginRight: '2rem' }}
            onClick={() => {
              const payload = {
                content: `
                  <>
                    <h1>This is title</h1>
                    <h2 style="color: red">This is subtitle</h2>
                    <p>
                      PHP developers all over the world are building incredible mobile
                      experiences with the skills they already possess. In just a few hours you
                      can build an app and have it submitted to the app stores for review.
                    </p>
                  </>
                `,
                base64: [imageData],
              };
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  event: 'share',
                  payload,
                })
              );
            }}
          >
            share
          </button>
          <button
            title="make order"
            type="button"
            color="white"
            onClick={() => {
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  event: 'make_order',
                  noDismiss: true,
                  payload: {
                    product_id: '755aba68-7f5a-42f7-9d87-16235082f8b5',
                    product_type: '0',
                    action: 'add_to_cart',
                  },
                })
              );
            }}
          >
            add to cart
          </button>
        </div>
        This is login by phone page
      </div>
    </PageContainer>
  );
};

LoginByPhone.displayName = 'LoginByPhone';

export default LoginByPhone;
