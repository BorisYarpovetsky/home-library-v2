import { useState, type FormEvent } from 'react'

function LibrarySetupForm() {
    const [libraryName, setLibraryName] = useState('')
    const [librarySave, setLibrarySave] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const libName = libraryName.trim()
        const libSave = librarySave.trim()

        if (!libName) {
            setError('Укажите название библиотеки')
            setSuccess(false)
            return
        }

        if (!libSave) {
            setError('Укажите название сохранения библиотеки')
            setSuccess(false)
            return
        }

        setError('')
        setSuccess(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="libraryName">Название библиотеки</label>
            <input id="libraryName" type="text" value={libraryName} onChange={e => setLibraryName(e.target.value)} />
            <label htmlFor="librarySave">Путь хранения</label>
            <input id="librarySave" type="text" value={librarySave} onChange={e => setLibrarySave(e.target.value)} />
            {error && <p>{error}</p>}
            <button type='submit'>Создать библиотеку</button>
            {success && (
                <p>Данные проверены. Библиотека готова к созданию.</p>
            )}
        </form>
    )
}

export default LibrarySetupForm