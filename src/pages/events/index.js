import Image from "next/image"

export default function EventsPage({data}) {
    return (
        <>
            <h1>Events page</h1>
            <div>
                {data.map(ev => (
                    <a key={ev.id} href={`/events/${ev.id}`}>
                        <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                        <h2>{ev.title}</h2>
                    </a>
                ))}
            </div>
        </>
    )
}

export async function getStaticProps() {
    const {events_categories} = await import("/data/data.json")

    return {
        props: {
            data: events_categories
        }
    }
}