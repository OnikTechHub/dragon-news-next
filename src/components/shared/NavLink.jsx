'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className = "" }) => {
    const pathname = usePathname();
    
    
    const isActive = pathname === href;

   
    const baseStyles = "transition-all duration-300 ease-in-out hover:text-purple-500";
    const activeStyles = "border-b-2 border-purple-500 text-purple-600 font-medium";
    const inactiveStyles = "text-gray-600 border-b-2 border-transparent";

    return (
        <Link 
            href={href} 
            className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles} ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;