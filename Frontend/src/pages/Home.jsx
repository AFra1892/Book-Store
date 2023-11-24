import {useState,useEffect} from 'react'
import axios from 'axios'
import {link} from 'react-router-dom'
import BooksTable from '../components/home/BookTable';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
const Home = () => {
    const [books,setBooks] = useState()

    // useEffect(()=>{
    //     axios
    //         .get('http://localhost:3000/books')
    //         .then((res)=>{
    //             setBooks(res.data.data)
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         })
    // },[])
  return (
    <div className='p-4'>
      
      Hello
    </div>
  );
}

export default Home