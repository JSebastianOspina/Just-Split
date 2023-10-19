import {Split} from "@/src/app/(models)/Split";
import {RoundedProfileImage} from "@/src/app/(components)/RoundedProfileImage";

interface LastSplitCardProps {
    split: Split
}

export function LastSplitCard(split: LastSplitCardProps) {
    return (

        <div className={'bg-white py-4 px-5 rounded-xl shadow w-full'}>
            <div className="flex items-center justify-between">
                <div className={'flex gap-x-3'}>
                    <RoundedProfileImage seedName={'Abby'} type={"adventurer-neutral"}/>
                    <div>
                        <p className={'font-medium text-sm'}>Burger King</p>
                        <p className={'text-xs'}>
                            20 Jul 2023
                        </p>
                    </div>
                </div>
                <div>
                    <p className={'primary-text-color font-medium'}>
                        - $1200
                    </p>
                </div>
            </div>
        </div>
    )

}