import { useState } from "react"

type BookCardProps = {
    title: string
    author: string
    year: number
    onOpen?: () =>void
}

function BookCard({title, author, year, onOpen}: BookCardProps) {

    const [isFavorite, setIsFavorite] = useState(false)

    return(
        <article>
            <h2>{title}</h2>
            <p>{author}</p>
            <span>{year}</span>
            <button type="button" onClick={() => setIsFavorite(prev => !prev)}>
                {isFavorite ? 'Убрать из избранного' : 'В избранное'}
            </button>
            {isFavorite && <p>В избранном</p>}
            {onOpen && (
                <button type="button" onClick={onOpen}>Подробнее</button>
            )}
        </article>
    )
}

export default BookCard