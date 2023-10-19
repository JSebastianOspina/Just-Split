import {Header} from "@/src/app/Header";
import {NewSplitCard} from "@/src/app/NewSplitCard";
import {LastSplits} from "@/src/app/LastSplits";

export default function Home() {

    return (
        <main className="flex flex-col min-h-screen p-4 background-color">
            <Header/>
            <NewSplitCard/>
            <div className="my-2"/>
            <LastSplits/>
        </main>
    )
}



