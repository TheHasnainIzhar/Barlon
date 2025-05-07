export default function SearchIcon({ className }: { className?: string }) {
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="17" cy="17" r="12" />
                <line x1="32" y1="32" x2="24.65" y2="24.65" />
            </svg>
        </div>
    );
}
