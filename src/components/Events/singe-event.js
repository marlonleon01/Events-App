import Image from "next/image"

export default function SingleEvent({data}) {
    return (
        <div className="event_single_page">
            <h1>{data.title}</h1>
            <Image src={data.image} width={1000} height={500} alt={data.title}/>
            <p>{data.description}</p>
            <form className="email_registration">
                <label>Get Registered for this event!</label>
                <input type="email" />
                <button>Submit</button>
            </form>
        </div>
    )
}