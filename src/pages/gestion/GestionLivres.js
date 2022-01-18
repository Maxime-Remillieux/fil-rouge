import Header from "../../components/Header";
import Interface from "../../components/interface/Interface";
import axios from "axios";
import { useEffect, useState } from "react";
import BookRow from "../../components/BookRow";

const GestionLivres = () => {
    const [books, setBooks] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const url = "http://localhost:8000/api/get/books";

    useEffect(() => {
        if(playOnce){
            getBooks();
        }
    }, [books]);

    const getBooks = () =>{
        const data = getData();
        axios
        .post(url, data)
        .then((res) => {
            console.log(res.data);
            setBooks(res.data);
            setPlayOnce(false);
        });   
    }

    const getData = () => {
        let keyword = document.getElementById('findInput').value;
        let categories = document.querySelectorAll('.categ');
        let data = {};

        if(keyword){
            categories.forEach(cat =>{
                if(cat.checked)
                    data[cat.value] = keyword;
            });        
        }
        return data;
    }

    return (
        <div className="gestion">
            <Header />
            <Interface onClick={getBooks} />
            <ul className="list">
                {books.map((book)=> (
                    <BookRow book={book} key={book.title}/>
                ))}
            </ul>
        </div>
    );
}

export default GestionLivres;