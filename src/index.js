import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

// setup
import "./index.css";
const books = [
  {
    img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg",
    title: "War of Lanka (Ram Chandra Series Book 4)",
    author: "amish tripathi",
    id: 1,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Japanese secret to a long and happy life",
    author: "hector guaria",
    id: 2,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51trTdAFECL._SX385_BO1,204,203,200_.jpg",
    title: "108 Panchatantra Stories (Illustrated) for children",
    author: "maple press",
    id: 3,
  },
];
// const author = "amish tripathi";
// const title = "War of Lanka (Ram Chandra Series Book 4)";
// const img =
//   "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg";

const BookList = () => {
  return (
    <section className='booklist'>
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleForm = (e) => {
    console.log("hey");
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButton = () => {
    alert("hey");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you submitted the form");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Typical form</h2>
        <input type='text' name='example' onChange={handleForm} />
        <button onClick={handleButton}>click me</button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);

// React
// React Component
// Nested Component
// JSX fragment
// JSX css
// JSX js
// Props
// Props are arguments passed into React components.
// What are props used for in React?
// Props are used to store data that can be accessed by the children of a React component.
// children
// key props
// Object as props
// event lisener = element, event, funtion
// Prop Drilling
// Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children.

// Object props example
// const BookList = () => {
//     return (
//       <section className='booklist'>
//         {books.map((book) => {
//           return book={book} key={book.id} />;
//         })}
//       </section>
//     );
//   };

// const BookList = () => {
//     return (
//       <section className='booklist'>
//         <Book
//           author={firstBook.author}
//           title={firstBook.title}
//           img={firstBook.img}
//         />

//         <Book
//           author={secondBook.author}
//           title={secondBook.title}
//           img={secondBook.img}
//         />
//         <Book
//           author={thirdBook.author}
//           title={thirdBook.title}
//           img={thirdBook.img}
//         />
//       </section>
//     );
//   };

//   const Book = (props) => {
//     const { img, title, author } = props;
//     return (
//       <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//       </article>
//     );
//   };
