type BookCardProps = {
    title: string
    author: string
    year: number
    onOpen?: () =>void
}

function BookCard({title, author, year, onOpen}: BookCardProps) {
    return(
        <article>
            <h2>{title}</h2>
            <p>{author}</p>
            <span>{year}</span>
            {onOpen && (
                <button type="button" onClick={onOpen}>Подробнее</button>
            )}
        </article>
    )
}

export default BookCard