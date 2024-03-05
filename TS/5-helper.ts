interface Book {
  id: number;
  isbn: string;
  title: string;
  pages?: number;
}


// Teilklassen herausziehen
type BookId1 = Pick<Book, 'id'>
type BookId2 = Pick<Book, 'id'|'isbn'>
type BookId3 = { id: Book['id'] };

// oder weglassen
type BookId4 = Omit<Book, 'isbn' | 'title' | 'pages'>;