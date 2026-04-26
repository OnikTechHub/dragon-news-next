import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between mt-6 ' >
            <div></div>
            <ul className='flex justify-between items-center gap-4 '>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className='flex items-center gap-4'>
                <Image src={userAvatar} alt="user vatar" width={60} height={60} />

                <button className='btn bg-purple-500 text-white'>
                <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;