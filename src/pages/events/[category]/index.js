import CatEvent from "@/components/Events/catEvent"

export default function EventsCategoryPage({data, pageName}) {
    return <CatEvent data={data} pageName={pageName}/>
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