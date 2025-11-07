'use client';

import { AnimatedSection } from '@/components/AnimatedSection';
import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingScreen() {
  return (
    <div className='dark flex h-full w-full flex-col items-center bg-black text-white'>
      <AnimatedSection className='mt-8 flex items-center gap-10 p-10' delay={0}>
        <Skeleton className='h-20 w-20 rounded-full' />
        <div>
          <Skeleton className='h-10 w-[170px]' />
          <dl className='mt-4 flex flex-col sm:mt-2 sm:flex-row sm:gap-4'>
            <div>
              <Skeleton className='h-4 w-[165px]' />
            </div>
            <div>
              <Skeleton className='h-4 w-[165px]' />
            </div>
          </dl>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className='mt-10 w-full max-w-4xl rounded-md border bg-[#1A1A1A] p-6'
        delay={0.1}
      >
        <dl className='grid grid-cols-2 gap-x-8 gap-y-4 border-b border-gray-700 pb-6'>
          <div>
            <dt className='text-sm text-gray-400'>Asset Type</dt>
            <Skeleton className='mt-2 h-4 w-[140px]' />
          </div>

          <div>
            <dt className='text-sm text-gray-400'>Exchange</dt>
            <Skeleton className='mt-2 h-4 w-[140px]' />
          </div>

          <div>
            <dt className='text-sm text-gray-400'>Sector</dt>
            <Skeleton className='mt-2 h-4 w-[140px]' />
          </div>

          <div>
            <dt className='text-sm text-gray-400'>Industry</dt>
            <Skeleton className='mt-2 h-4 w-[140px]' />
          </div>

          <div className='col-span-2'>
            <dt className='text-sm text-gray-400'>Market Capitalization</dt>
            <Skeleton className='mt-2 h-4 w-[140px]' />
          </div>
        </dl>

        <div className='mt-6'>
          <h2 className='mb-3 text-lg font-semibold text-gray-200'>Description</h2>
          <Skeleton className='mt-2 h-32 max-w-4xl' />
        </div>
      </AnimatedSection>
      <AnimatedSection className='mt-6 w-full max-w-4xl' delay={0.2}>
        <Skeleton className='h-56 w-full' />
      </AnimatedSection>
    </div>
  );
}
