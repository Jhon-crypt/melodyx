import { BsMusicNoteList } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import Link from 'next/link'

export default function SidebarHeader() {

    return (

        <>

            <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div class="-mx-6 px-6 py-4">
                        <Link href="/" class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
                            <div class="drop-shadow-md px-3 py-1 rounded text-white w-11 h-10" style={{ backgroundColor: '#E66A48' }}><BsMusicNoteList className='mt-2 mx-auto' /></div>
                            <span className='font-bold'>MelodyX</span>
                        </Link>
                    </div>

                    <div class="mt-8 text-center">
                        <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
                        <span class="hidden text-gray-400 lg:block">Johnoldele690@gmail.com</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">
                        <li>
                            <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center text-gray-600 space-x-4 rounded-xl hover:text-white hover:bg-orange-600">
                                <AiFillHome />
                                <span class="-mr-1 font-medium">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:text-white hover:bg-orange-600">
                                <BsMusicNoteList />
                                <span class="font-medium">Create Melodies</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:text-white hover:bg-orange-600">
                                <FiSettings />
                                <span class="font-medium">Settings</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>

                <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span class="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>

        </>

    )

}