import Image from "next/image"
import Link from "next/link"

export default function CatEvent({data, pageName}) {
    return (
        <div className="cat_events">
            <h1>Events in {pageName}</h1>
            <div className="content">
                {data.map(ev => (
                        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} className="card">
                            <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </Link>
                ))}
            </div>
        </div>
    )
}