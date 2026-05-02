import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-7 py-6 text-center space-y-2">
                        <p>2026 © Designed by{" "} 
                            <Link href={"https://www.instagram.com/dwipahendrawan"} target="_blank" className="hover:text-primary">
                            DwipaHendrawan
                            </Link>{" "}
                            — All rights reserved 
                            </p>
                        <p>Created with care </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer