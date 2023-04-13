import Image from "next/image"
import Link from "next/link"

export default function EventsCategoryPage({data, pageName}) {
    return (
        <>
            <h1>Events in {pageName}</h1>
            <div>
                {data.map(ev => (
                        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}}`}>
                            <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </Link>
                ))}
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const {events_categories} = await import("/data/data.json")
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                category: ev.id.toString()
            }
        }
    })

        return {
            paths: allPaths,
            fallback: false
        }
}

export async function getStaticProps(context) {
    const {allEvents} = await import("/data/data.json")
    const id = context?.params.category
    const data = allEvents.filter(ev => ev.city === id)

    return {
        props: {data, pageName: id}
    }
}