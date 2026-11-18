import BookCard from "../components/learning/BookCard";

import LibrarySetupForm from '../components/learning/LibrarySetupForm'
import BookEntryForm from '../components/learning/BookEntryForm'

function LearningPage() {
    return (
        <main>
            <h1>Учебная страница React</h1>
            <BookCard
                title="Мастер и Маргарита"
                author="Михаил Булгаков"
                year={1967}
                onOpen={() => alert('Открыта карточка книги')}
            />
            <BookCard
                title="Преступление и наказание"
                author="Фёдор Достоевский"
                year={1866}
            />

            <h2>Создание локальной библиотеки</h2>
            <LibrarySetupForm />

            <h2>Экзаменационная форма добавления книги</h2>
            <BookEntryForm />
        </main>
    )
}

export default LearningPage