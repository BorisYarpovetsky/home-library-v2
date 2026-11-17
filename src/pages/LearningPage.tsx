import BookCard from "../components/learning/BookCard";

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
        </main>
    )
}

export default LearningPage