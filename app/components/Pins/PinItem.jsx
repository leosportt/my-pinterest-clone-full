import Image from 'next/image';
import React from 'react';
import UserTag from '../UserTag';
import { useRouter } from 'next/navigation';

function PinItem({ pin }) {
  const router = useRouter();
  const user = {
    name: pin?.userName,
    image: pin?.userImage,
  };

  // Função para definir a largura e altura da imagem de forma aleatória
  const getRandomSize = () => {
    const sizes = [
      { width: 300, height: 400 },
      { width: 300, height: 300 },
      { width: 400, height: 300 },
      { width: 500, height: 600 },
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const { width, height } = getRandomSize();

  return (
    <div className='relative group mb-4'>
      <div
        className="relative 
        before:absolute
        before:h-full before:w-full
        before:rounded-3xl
        before:z-10
        hover:before:bg-gray-600 
        before:opacity-50
        cursor-pointer"
        onClick={() => router.push("/pin/" + pin.id)}
      >
        <Image
          src={pin.image}
          alt={pin.title}
          width={width}
          height={height}
          className='rounded-3xl 
          cursor-pointer relative z-0 object-cover'
        />
        <div className="absolute bottom-2 left-2 bg-red-500 text-white px-1 py-0.5 rounded-full text-sm">
          <UserTag user={user} />
        </div>
      </div>
    </div>
  );
}

export default PinItem;
