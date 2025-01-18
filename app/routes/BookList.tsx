import React, { useEffect, useState } from 'react';

// ประกาศประเภท Book
interface Book {
  Cover: string;
  Title: string;
  Description: string;
  Author: string;
  Price: string;
  Bestsellers?: boolean;
  Suggestions?: boolean;
}

// ---------------- Components ----------------

// Component: BookStatus
const BookStatus: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div>
      {book.Bestsellers && <span style={{ color: "green" }}>🔥 Best Seller</span>}
      {book.Suggestions && <span style={{ color: "blue", marginLeft: "10px" }}>⭐ Recommended</span>}
    </div>
  );
};

// Component: BookCard
const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
  <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        width: "200px",
        textAlign: "center",
      }}
    >
//       <img src={book.Cover} alt={book.Title} style={{ width: "100%", borderRadius: "5px" }} />
//       <h3>{book.Title}</h3>
//       <p style={{ fontSize: "14px" }}>{book.Description}</p>
//       <p style={{ fontWeight: "bold" }}>Author: {book.Author}</p>
//       <p>Price: {book.Price}</p>
//       <BookStatus book={book} />
   </div>
  );
};

// Component: BookList
const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;