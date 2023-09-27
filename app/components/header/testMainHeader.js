import SidebarHeader from "./sidebarHeader"
import MiniHeader from "./miniHeader"
import MelodiesSection from "../section/melodiesSection"

export default function TestHeader() {

    return (

        <>

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