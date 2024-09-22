"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import app from './../Shared/firebaseConfig'
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch, HiBell, HiChat } from 'react-icons/hi';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session])

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email || "default_email"), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  }

  const onCreateClick = () => {
    if (session) {
      router.push('/pin-builder')
    } else {
      signIn()
    }
  }

  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image
        src='/logo.png'
        alt='logo'
        width={50}
        height={50}
        onClick={() => router.push('/')}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
      />

      <button
        className='bg-black text-white p-2 px-4 rounded-full hidden md:block whitespace-nowrap'
        onClick={() => router.push('/')}
      >
        Página inicial
      </button>

      <button
        className='font-semibold p-2 px-4 rounded-full'
        onClick={() => onCreateClick()}
      >
        Criar
      </button>

      <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px] text-gray-500' />
        <input
          type="text"
          placeholder='Pesquisar'
          className='bg-transparent outline-none w-full'
        />
      </div>

      <HiSearch className='text-[25px] text-gray-500 md:hidden' />
      <HiBell className='text-[40px] text-gray-500 cursor-pointer' />
      <HiChat className='text-[40px] text-gray-500 cursor-pointer' />

      {session?.user ? (
        <Image
          // Fallback para imagem do usuário em caso de 'undefined'
          src={session.user.image || '/man.png'} // caminho relativo correto
          onClick={() => router.push('/' + session?.user?.email)}
          alt='user-image'
          width={50}
          height={50}
          className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
        />
      ) : (
        <button
          className='font-semibold p-2 px-4 rounded-full'
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Header;
