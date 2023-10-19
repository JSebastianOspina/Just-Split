'use client';
import {useState} from "react";
import {RoundedProfileImage} from "@/src/app/(components)/RoundedProfileImage";

export function NewSplitCard (){

    const [users,setUsers] = useState<User[]>([])
    const names = ['Abby','Felix','Pepper']
    const addUser = (name)=>{
        const randomIndex = Math.floor(Math.random() * names.length);

        setUsers(prevState => [...prevState,{name:names[randomIndex]}])
    }

    return (
        <div className='flex flex-col justify-center items-center text-white px-5 py-4 rounded-3xl '
             style={{
                 'backgroundImage': 'url("blue-background.svg")',
                 'backgroundSize': 'cover',
                 'backgroundRepeat': 'no-repeat',
                 'backgroundPosition': 'center',
             }}>
            <span className={'text-white text-sm mb-1'}>Total bill</span>
            <input type="text"
                   className={'bg-transparent outline-none border-0 w-full text-white font-medium text-3xl text-center mb-3 placeholder-gray-100 '}
                   placeholder={'$1200'}

            />
            <div className="flex gap-x-2 mb-3">
                {
                    users.map(user => <RoundedProfileImage seedName={user.name} type={"adventurer-neutral"}/>)
                }

                <div className="rounded-full border-gray-100 border-2 flex flex-col justify-center items-center w-8 h-8 overflow-hidden"
                onClick={()=>addUser('')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>




            </div>

            <button className={'text-white text-sm mb-1 secondary-background-color px-3 py-1 rounded-xl'}>Just Split</button>
        </div>
    )
}