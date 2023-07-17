'use client';

import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Logotipo from 'public/images/logo/logotipo.png';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className='container mx-auto p-5 py-0 h-[93px] flex justify-between items-center'>
      <div className='relative h-[32px] w-[182px]'>
        <Image
          src={Logotipo}
          width={182}
          height={32}
          alt='logotipo travel booking'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA'
          placeholder='blur'
        />
      </div>

      {status === 'unauthenticated' && (
        <button
          className='text-primary text-sm font-semibold'
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === 'authenticated' && data.user && (
        <div className='flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative'>
          <AiOutlineMenu
            className='cursor-pointer'
            size={16}
            onClick={handleMenuClick}
          />

          <Image
            className='rounded-full shadow-md'
            width={30}
            height={30}
            src={data.user.image!}
            alt={data.user.name!}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA'
          />

          {menuIsOpen && (
            <div className='absolute top-12 left-0 w-full h-full bg-white rounded-lg shadow-lg shadow-indigo-500/40 flex flex-col justify-center items-center '>
              <button
                className='text-primary text-sm font-semibold'
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
