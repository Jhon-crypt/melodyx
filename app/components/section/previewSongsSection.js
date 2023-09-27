import { BsFillFileMusicFill } from "react-icons/bs";

export default function PreviewSongsSection() {

    return (

        <>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-20 mx-auto">
                    <div class="text-center mb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Add recommeded songs to your playlist</h1>
                        <button type="button" class="w-52 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-orange-600 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Add to playlist
                        </button>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <BsFillFileMusicFill class="text-orange-600 w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium">Sprinter<br />
                                    <span><small>Dave, central cee</small></span></span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <BsFillFileMusicFill class="text-orange-600  w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium">Kinfolk Chips <br />
                                    <span><small>Dave, central cee</small></span></span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <BsFillFileMusicFill class="text-orange-600  w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium">Kinfolk Chips <br />
                                    <span><small>Dave, central cee</small></span></span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <BsFillFileMusicFill class="text-orange-600  w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium">Kinfolk Chips <br />
                                    <span><small>Dave, central cee</small></span></span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <BsFillFileMusicFill class="text-orange-600  w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium">Kinfolk Chips <br />
                                    <span><small>Dave, central cee</small></span></span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <BsFillFileMusicFill class="text-orange-600  w-6 h-6 flex-shrink-0 mr-4" />
                                <span class="title-font font-medium">Kinfolk Chips <br />
                                    <span><small>Dave, central cee</small></span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>

    )

}