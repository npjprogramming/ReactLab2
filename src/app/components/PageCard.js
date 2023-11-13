export default function Card({ title='default', subtitle='default', description='default', img="http://placekitten.com/g/200/300" }) {

    return (
        <div className="border-solid border-2 border-neutral-950 p-6 max-w-sm bg-neutral-100 rounded-lg">
            <h1 className="text-3xl font-bold underline">{title}</h1>
            <h2 class="py-4">{subtitle}</h2>
            <img src={img} />
            <p className="py-4">{description}</p>
        </div>
    )

}
