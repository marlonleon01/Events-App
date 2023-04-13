import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
		<header>
            <div className="topNav">
                <Image alt="logo" src={"/image/logo_black.png"} width={50} height={50}/>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/events" >Events</Link>
                        </li>
                        <li>
                            <Link href="/about-us" >About us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>Sed ut perspiciatis unde omnis</h1>
        </header>
    )
}