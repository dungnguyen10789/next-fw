'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { PageContainer } from '@/components/common/PageContainer';

const LoginByUsername = () => {
  const query = useQuery({
    queryKey: ['test2'],
    queryFn: async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('test error'));
        }, 3000);
      });
    },
  });

  return (
    <PageContainer error={query.error} isLoading={query.isLoading} refetch={query.refetch}>
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-[100px]">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        This is login by phone page
      </div>
    </PageContainer>
  );
};

LoginByUsername.displayName = 'LoginByUsername';

export default LoginByUsername;
