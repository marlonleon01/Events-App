export default function EventsCategoryPage() {
    return (
        <>
            <h1>Events in London</h1>
            <div>
                <a href="">
                    <img /> 
                    <h2>Event 1</h2>
                </a>
                <a href="">
                    <img /> 
                    <h2>Event 2</h2>
                </a>
                <a href="">
                    <img /> 
                    <h2>Event 3</h2>
                </a>
                <a href="">
                    <img /> 
                    <h2>Event 4</h2>
                </a>
                <a href="">
                    <img /> 
                    <h2>Event 5</h2>
                </a>
                <a href="">
                    <img /> 
                    <h2>Event 6</h2>
                </a>
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