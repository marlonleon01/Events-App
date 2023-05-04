import AllEvents from "@/components/Events/events-page"

export default function EventsPage({data}) {
    return <AllEvents data={data}/>
}

export async function getStaticProps() {
    const {events_categories} = await import("/data/data.json")

    return {
        props: {
            data: events_categories
        }
    }
}