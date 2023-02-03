import { useRouter } from "next/router";

export default function ProductDetails() {
    const { productId } = useRouter().query
    return <h1>product detail of if: {productId}</h1>
}

// export let getServerSideProps = () => {
//     const { productId } = useRouter().query
//     // let data = fetch(`https://localhost`)
// }
