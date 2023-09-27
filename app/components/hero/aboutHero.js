import { BsMusicNoteList } from 'react-icons/bs'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'

export default function AboutHero() {

    return (

        <>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center" src="/about.svg"/>
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5" style={{ backgroundColor: "#E66A48", color: "#FFEADF" }}>
                                <BsMusicNoteList />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Song recommendation</h2>
                                <p class="leading-relaxed text-base">
                                    MelodyX monitors your listening history and preferences from spotify and ensuring that every song recommendation feels like it was handpicked just for you
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5" style={{ backgroundColor: "#E66A48", color: "#FFEADF" }}>
                               <AiOutlineRobot />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Automated playlists</h2>
                                <p class="leading-relaxed text-base">
                                    For every song recommendation you get, MelodyX automatically creates a unique playlist for you, so you can listen to your favourite songs anytime, anywhere
                                </p>
                                
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5" style={{ backgroundColor: "#E66A48", color: "#FFEADF" }}>
                                <FaUsers />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Share your playlists</h2>
                                <p class="leading-relaxed text-base">
                                    Share your favorite tunes and playlists seamlessly on social media platforms and let the world groove to your rhythm
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}