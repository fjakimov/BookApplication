import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBarComponent";
import { listBooks } from "../services/BookService";
import './ListComponents.css'
const ListBooksComponent = () => {
  const [allBooks, setAllBooks] = useState([]); 
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortOption, setSortOption] = useState("author");
  const [searchQuery, setSearchQuery] = useState(""); 
  useEffect(() => {
    listBooks()
      .then((response) => {
        setAllBooks(response.data);
        setFilteredBooks(sortingBooks(response.data, sortOption)); 
      })
      .catch((error) => console.error("Failed to fetch books:", error));
  }, [sortOption]); 

  const sortingBooks = (books, option) => {
    return [...books].sort((a, b) => {
      if (option === "title") return a.title.localeCompare(b.title);
      if (option === "author") return a.author.localeCompare(b.author);
      if (option === "genre") return a.genre.localeCompare(b.genre);
      return 0;
    });
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="book-list__highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleSearch = (input) => {
    setSearchQuery(input); 
    const lowerCaseQuery = input.toLowerCase();

    const filtered = allBooks.filter((book) =>
      book.title.toLowerCase().includes(lowerCaseQuery) ||
      book.author.toLowerCase().includes(lowerCaseQuery) ||
      book.genre.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredBooks(sortingBooks(filtered, sortOption));
  };

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortOption(selected);
    const sortedBooks = sortingBooks(filteredBooks, selected);
    setFilteredBooks(sortedBooks);
  };

  return (
    <div className="book-list">
      <SearchBar onSearch={handleSearch} />
      <div className="book-list__sort-dropdown">
        <label className="book-list__label">Sort books by: </label>
        <select
          id="sortBooks"
          className="book-list__select"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>
      <h1 className="book-list__heading">Book List</h1>
      <ul className="book-list__items">
        {filteredBooks.length === 0 ? (
          <p className="book-list__message">No results found</p>
        ) : (
          filteredBooks.map((book) => (
            <li key={book.id} className="book-list__item">
              <strong className="book-list__item-title">
                {highlightText(book.title, searchQuery)}
              </strong>{" "}
              by{" "}
              <span className="book-list__item-author">
                {highlightText(book.author, searchQuery)}
              </span>{" "}
              - Genre:{" "}
              <span className="book-list__item-genre">
                {highlightText(book.genre, searchQuery)}
              </span>{" "}
              - Rating:{" "}
              <span className="book-list__item-rating">{book.rating}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListBooksComponent;
