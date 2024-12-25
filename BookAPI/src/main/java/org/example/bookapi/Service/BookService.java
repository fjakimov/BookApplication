package org.example.bookapi.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.bookapi.Model.Book;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class BookService {
    private List<Book> books;

    public BookService() throws IOException {
        loadBooksJSON();
        loadBookCSV();
    }

    private void loadBooksJSON(){
        ObjectMapper mapper = new ObjectMapper();
        System.out.println(getClass().getResource("/Data/booksJSON.json"));
        TypeReference<List<Book>> typeReference = new TypeReference<List<Book>>() {};
        InputStream inputStream = getClass().getResourceAsStream("/Data/booksJSON.json");
        try {
            books = mapper.readValue(inputStream, typeReference);
        }
        catch (IOException e){
            throw new RuntimeException();
        }
    }
    private void loadBookCSV() throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("src/main/resources/Data/booksCSV.csv"));
        String line;
        br.readLine();
        while ((line = br.readLine()) != null){
            String[] parts = line.split(",");
            String id = parts[0];
            Book b = books.stream().filter(book -> book.getId().equals(id)).findFirst().get();
            b.setRating(Integer.parseInt(parts[3]));
        }
    }

    public List<Book> getBooks(){
        return books;
    }
}
