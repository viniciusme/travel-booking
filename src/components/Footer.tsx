import Image from 'next/image';
import Link from 'next/link';

import Logotipo from 'public/images/logo/logotipo.png';

export const Footer = () => {
  return (
    <div className='bg-walterWhite p-5 flex flex-col justify-center items-center'>
      <Link href='/' passHref>
        <div className=' relative w-[133px] h-[23px]'>
          <figure>
            <Image
              src={Logotipo}
              width={133}
              height={23}
              alt='logotipo travel booking'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA'
              placeholder='blur'
            />
          </figure>
        </div>
      </Link>
      <p className='text-sm font-medium text-primaryDarker mt-1'>
        Todos os direitos reservados
      </p>
    </div>
  );
};
