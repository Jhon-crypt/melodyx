import ImportPreline from "../preline"
import SidebarHeader from "../components/header/sidebarHeader"
import MiniHeader from "../components/header/miniHeader"
import PreviewSongsSection from "../components/section/previewSongsSection"

export default function PreviewSongs() {

    return (

        <>

            <ImportPreline />

            <SidebarHeader />
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <MiniHeader mini_title="MelodyX Songs Recommedations"/>

                <div class="px-6 pt-6 2xl:container">

                    <PreviewSongsSection />

                </div>

            </div>

        </>

    )

}