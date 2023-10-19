import {Split} from "@/src/app/(models)/Split";
import {LastSplitCard} from "@/src/app/(components)/LastSplitCard";

export function LastSplits(){
    const lastSplits: Split[] = [
        new Split(100,'2022-10-01', [{name: 'Abby'}, {name: 'Felix'}]),
        new Split(100,'2022-10-01', [{name: 'Abby'}, {name: 'Felix'}]),
        new Split(100,'2022-10-01', [{name: 'Abby'}, {name: 'Felix'}]),
        new Split(100,'2022-10-01', [{name: 'Abby'}, {name: 'Felix'}]),
    ]
    return(
        <>
            <h2 className={'font-semibold mb-3'}>My last splits</h2>
            <div className="flex flex-col justify-center items-center gap-y-4  ">
                {lastSplits.map(split => <LastSplitCard split={split}/>)}

            </div>
        </>
    )
}