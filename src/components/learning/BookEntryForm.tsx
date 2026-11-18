import { useState, type FormEvent } from "react";


function BookEntryForm() {
    const [libraryName, setLibraryName] = useState('')
    const [libraryAuthor, setLibraryAuthor] = useState('')
    const [libraryYear, setLibraryYear] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [favoriteSaved, setFavoriteSaved] = useState(false)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const libName = libraryName.trim()
        const libAuthor = libraryAuthor.trim()
        const year = Number(libraryYear)

        if (!libName) {
            setError('Укажите название книги')
            setSuccess(false)
            return
        }

        if (!libAuthor) {
            setError('Укажите имя автора')
            setSuccess(false)
            return
        }

        if (year < 1450 || year > 2026 || !Number.isInteger(year) || libraryYear.trim() === '') {
            setError('Укажите целый год издания от 1450 до 2026')
            setSuccess(false)
            return
        }

        setError('')
        setSuccess(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="libraryName">Название книги</label>
            <input id="libraryName" type="text" value={libraryName} onChange={e => {
                setLibraryName(e.target.value)
                setSuccess(false)
            }} />
            <label htmlFor="libraryAuthor">Автор</label>
            <input id="libraryAuthor" type="text" value={libraryAuthor} onChange={e => {
                setLibraryAuthor(e.target.value)
                setSuccess(false)
            }} />
            <label htmlFor="libraryYear">Год издания</label>
            <input id="libraryYear" type="number" value={libraryYear} onChange={e => {
                setLibraryYear(e.target.value)
                setSuccess(false)
            }} />
            <label className="recovery-confirm">
                <input
                    type="checkbox"
                    checked={favoriteSaved}
                    onChange={(event) => {
                        setFavoriteSaved(event.target.checked)
                        setSuccess(false)
                    }}
                />

                <span>
                    Добавить в избранное
                </span>
            </label>
            {error && <p>{error}</p>}
            <button type='submit'>Проверить книгу</button>
            {success && (
                <div>
                    <h3>Данные книги проверены</h3>
                    <p>Название: {libraryName}</p>
                    <p>Автор: {libraryAuthor}</p>
                    <p>Год издания: {libraryYear}</p>
                    <p>Избранное: {favoriteSaved ? 'Да' : 'Нет'}</p>
                </div>
            )}
        </form>
    )
}


export default BookEntryForm