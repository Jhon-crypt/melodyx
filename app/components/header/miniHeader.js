import { BsMusicNoteList } from "react-icons/bs"
import Link from "next/link"
import ImportPreline from "@/app/preline"
import MobileSidebar from "./mobileSidebar"

export default function MiniHeader(props) {

    return (

        <>

            <ImportPreline />

            <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">{props.mini_title}</h5>
                    <div class="md:hidden">
                        <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">

                            <Link href="/" class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
                                <div class="drop-shadow-md px-3 py-1 rounded text-white w-11 h-10" style={{ backgroundColor: '#E66A48' }}><BsMusicNoteList className='mt-2 mx-auto' /></div>
                                <span className='font-bold'>MelodyX</span>
                            </Link>

                        </div>
                    </div>
                    <div class="flex space-x-4 justify-center">

                        <button type='button' class="w-12 h-16 -mr-2 border-r lg:hidden" data-hs-overlay="#hs-overlay-right">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        

                    </div>

                </div>
            </div>

            <MobileSidebar />

        </>

    )

}