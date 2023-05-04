import SingleEvent from "@/components/Events/singe-event"

export default function EventPage({data}) {
    return <SingleEvent data={data} />
}

export async function getStaticPaths() {
    const {allEvents} = await import("/data/data.json")
    const allPaths = allEvents.map(path => {
        return {
            params: {
                category: path.city,
                eventId: path.id
            }
        }
    })
    
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const {allEvents} = await import("/data/data.json")
    const id = context.params.eventId
    const eventData = allEvents.find(ev => ev.id === id)

    return {
        props: {data: eventData}
    }
}