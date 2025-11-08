'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

interface StockCardProps {
  symbol: string;
  name: string;
  img: string;
  index: number;
}

export function StockCard({ symbol, name, img, index }: StockCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
    >
      {name === 'TensorWave' ? (
        <div className='group relative flex h-22 items-center justify-between rounded-md bg-linear-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#252525] p-5 transition-all duration-500 hover:scale-105 hover:from-[#252525] hover:to-[#1A1A1A]'>
          <div className='absolute inset-0 rounded-md bg-linear-to-br from-[#00CED1]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='relative flex items-center gap-4'>
            <Avatar className='h-11 w-11'>
              <AvatarImage src={img} />
              <AvatarFallback className='bg-black'>{symbol.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className='font-semibold'>{name}</div>
              <div className='text-sm text-[#00CED1]'>${symbol}</div>
            </div>
          </div>
          {name == 'TensorWave' ? (
            <Button
              className='relative bg-[#00CED1] text-xs text-black hover:bg-[#00B8BB]'
              disabled={true}
            >
              Coming Soon...
            </Button>
          ) : (
            <Button className='relative bg-[#00CED1] text-black hover:bg-[#00B8BB]'>View</Button>
          )}
        </div>
      ) : (
        <Link href={`/${symbol}`}>
          <div className='group relative flex h-22 items-center justify-between rounded-md bg-linear-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#252525] p-5 transition-all duration-500 hover:scale-105 hover:from-[#252525] hover:to-[#1A1A1A]'>
            <div className='absolute inset-0 rounded-md bg-linear-to-br from-[#00CED1]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            <div className='relative flex items-center gap-4'>
              <Avatar className='h-11 w-11'>
                <AvatarImage src={img} />
                <AvatarFallback className='bg-black'>{symbol.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <div className='font-semibold'>{name}</div>
                <div className='text-sm text-[#00CED1]'>${symbol}</div>
              </div>
            </div>
            {name == 'TensorWave' ? (
              <Button
                className='relative bg-[#00CED1] text-xs text-black hover:bg-[#00B8BB]'
                disabled={true}
              >
                Coming Soon...
              </Button>
            ) : (
              <Button className='relative bg-[#00CED1] text-black hover:bg-[#00B8BB]'>View</Button>
            )}
          </div>
        </Link>
      )}
    </motion.div>
  );
}
