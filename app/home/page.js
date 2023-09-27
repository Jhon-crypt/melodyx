import ImportPreline from '../preline'
import SidebarHeader from '../components/header/sidebarHeader'
import MainHeader from '../components/header/mainHeader'
import MiniHeader from '../components/header/miniHeader'
import MelodiesSection from '../components/section/melodiesSection'

export default function Home() {

    return (

        <>

            <ImportPreline />

            <SidebarHeader />
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <MiniHeader />

                <div class="px-6 pt-6 2xl:container">

                    <MelodiesSection />

                </div>

            </div>

        </>

    )

}

