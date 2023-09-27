export default function MelodiesSection() {

    return (

        <>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xm text-orange-600 tracking-widest font-medium title-font mb-1">Welcome John</h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Your Melody Playlists</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">

                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg w-full h-full bg-gray-100 p-8 flex-col">
                                <div class="flex-grow pb-10">
                                    <h2 class="text-gray-900 text-lg title-font font-medium pb-2">The Catalyzer</h2>
                                    <iframe
                                        title="Spotify Embed: Recommendation Playlist "
                                        src={`https://open.spotify.com/embed/playlist/3I09JrMpSepA0DwTwM9yz7?utm_source=generator&theme=2`}
                                        width="100%"
                                        height="100%"
                                        style={{ minHeight: '360px' }}
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg w-full h-full bg-gray-100 p-8 flex-col">
                                <div class="flex-grow pb-10">
                                    <h2 class="text-gray-900 text-lg title-font font-medium pb-2">The Catalyzer</h2>
                                    <iframe
                                        title="Spotify Embed: Recommendation Playlist "
                                        src={`https://open.spotify.com/embed/playlist/3I09JrMpSepA0DwTwM9yz7?utm_source=generator&theme=2`}
                                        width="100%"
                                        height="100%"
                                        style={{ minHeight: '360px' }}
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="flex rounded-lg w-full h-full bg-gray-100 p-8 flex-col">
                                <div class="flex-grow pb-10">
                                    <h2 class="text-gray-900 text-lg title-font font-medium pb-2">The Catalyzer</h2>
                                    <iframe
                                        title="Spotify Embed: Recommendation Playlist "
                                        src={`https://open.spotify.com/embed/playlist/3I09JrMpSepA0DwTwM9yz7?utm_source=generator&theme=2`}
                                        width="100%"
                                        height="100%"
                                        style={{ minHeight: '360px' }}
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>

    )

}