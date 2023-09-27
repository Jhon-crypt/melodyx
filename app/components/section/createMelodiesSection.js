export default function CreateMelodiesSection() {

    return (

        <>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/create.svg" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                           
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Create Melody Playlist</h1>
                            <div class="flex mb-4">

                            </div>

                            <div class=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                <div class="relative mb-4">
                                    <label for="full-name" class="leading-7 text-sm text-gray-600">Playlist name</label>
                                    <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <button class="text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg">Create</button>
                                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}