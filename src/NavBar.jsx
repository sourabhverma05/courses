import { User } from 'lucide-react';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <div className=' px-[3rem] items-center py-[0.8rem] w-full sticky top-0 bg-slate-100'>
                <div className='container flex justify-between'>
                    <div>
                        <Link to={"/"} className='text-2xl font-extrabold text-slate-700'>Courses</Link>
                    </div>
                    <div className='flex items-center gap-3'>

                        <DropdownMenu>
                            <DropdownMenuTrigger><User className='text-[1.6rem] text-gray-700 cursor-pointer' /></DropdownMenuTrigger>
                            <DropdownMenuContent className="flex flex-col">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link className='px-2' to={"/profile"}>Profile</Link>
                                <Link className='px-2' to={"/courses"}>Courses</Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar