import Link from "next/link"

const data = [
    { id: 1, name: 'laptop' },
    { id: 2, name: 'cameras' },
    { id: 3, name: 'graphic cards' },
]

export default () => {
    return (
        <div>
            {data.map((p) => (
                <div key={p.id}>
                    <Link href={`/products/${p.id}`}>{p.name}</Link>
                </div>
            ))}
        </div>
    )
}