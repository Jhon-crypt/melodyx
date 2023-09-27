export default function MainHeader() {

    return (

        <>
            <header class="flex flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full bg-white text-sm py-4" style={{ backgroundColor: '#FFEADF' }}>
                <nav class="flex space-x-6">
                    <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap hover:text-blue-700 text-lg" href="#">
                        <b>Home</b>
                    </a>
                    <a class="py-4 px-1 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-blue-500 hover:text-blue-700" href="#" aria-current="page">
                        C
                    </a>
                    <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700" href="#">
                        Link
                    </a>
                    <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-gray-400 pointer-events-none dark:text-gray-600" href="#">
                        Disabled
                    </a>
                </nav>
            </header>


        </>

    )

}