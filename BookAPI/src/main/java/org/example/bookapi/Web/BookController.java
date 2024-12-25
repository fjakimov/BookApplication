package org.example.bookapi.Web;

import org.example.bookapi.Model.Book;
import org.example.bookapi.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("")
    public List<Book> findAll(){
        return bookService.getBooks();
    }
}
