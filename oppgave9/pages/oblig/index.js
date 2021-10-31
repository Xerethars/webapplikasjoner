import Link from 'next/link'

const Home = () => {
    return (
        <>
        <Link href="/api/favourites">
            <a>Click to see everyones favourites</a>
        </Link>
        <p></p>
        <Link href="/oblig/SendData">
            <a>Click to send new data</a>
        </Link>
        </>
    )
}

export default Home;