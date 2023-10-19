interface RoundedProfileImageProps {
    type: 'adventurer-neutral' | 'adventurer'
    seedName: string
}
export function RoundedProfileImage(props:RoundedProfileImageProps){
    const generateUrl = () => {
        return `https://api.dicebear.com/6.x/${props.type}/svg?seed=${props.seedName}`
    }
    return (
        <div className="rounded-full flex flex-col justify-center items-center w-8 h-8 overflow-hidden">
        <img
            src={generateUrl()}
            alt="avatar" style={{'width': '100%', 'height': '100%'}} className={'overflow-hidden'}/>
    </div>
    )
}