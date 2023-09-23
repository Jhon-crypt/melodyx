'use client'
import { FaSpotify } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'
import Typewriter from 'typewriter-effect';

export default function HeaderHero() {

    return (

        <>

            <section class="px-6 text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-10 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover New Music,
                            <br class="hidden lg:inline-block" /> <Typewriter
                                options={{
                                    strings: ['And A Perfect Playlist', 'That Fits Your Mood', 'Tunes Just for You', 'And Melodies that speaks to You'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p class="mb-8 leading-relaxed">
                            Music is a deeply personal experience, and that is why MelodyX was built to deliver Melodies just for you, by
                            analysing your listening history and preferences from spotify and ensuring that every song recommendation feels like it was handpicked just for you
                        </p>
                        <div class="flex justify-center">
                            <button type="button" class="sm:p-5 py-3 mr-5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-orange-600 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-sm ">
                                <FaSpotify className='mr-1'/> Login with Spotify
                            </button>
                            
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="/hero.png" />
                    </div>
                </div>
            </section>

        </>

    )

}