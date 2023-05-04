import Image from "next/image"
import Link from "next/link"

export default function AllEvents({data}) {
    return (
        <div className="events_page">
            {data.map(ev => (
                <Link key={ev.id} href={`/events/${ev.id}`} className="card">
                    <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                    <h2>{ev.title}</h2>
                </Link>
            ))}
        </div>
    )
}