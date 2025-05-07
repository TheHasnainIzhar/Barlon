export default function BarlonLogo({ className }: { className?: string }){
    return(
        <div className={className}>
            <svg width="40" height="40" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <polygon points="17.5,5 30,30 5,30" fill="white"/>
            </svg>
        </div>
    );
}