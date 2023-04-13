import Image from "next/image"

export default function EventsCategoryPage({data}) {
    return (
        <>
            <h1>Events in London</h1>
            <div>
                {data.map(ev => (
                    <a href={`/events/${ev.city}/${ev.id}}`}>
                        <Image src={ev.image} alt={ev.title} width={300} height={300}/>
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </a>
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
        props: {data}
    }
}