import React from 'react';
import { Card, CardBody, Image, Modal } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";


//Libros en tendencia (los que la gente esta agregando a sus listas de lectura)

const TrendingBook = ({ books }) => {
  const [selectedBook, setSelectedBook] = React.useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const navigate = useNavigate();

    const handleBookClick = (book) => {
        navigate(`/book/${book.key.split('/')[2]}`);
    };

  return (
    <div className='trending-book-container' style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="trending-book" style={{ width: '150px', height: '250px' }}>
            <Card shadow="sm" isPressable onPress={() => handleBookClick(book)} style={{ width: '150px', height: '250px' }}>
              <CardBody className="overflow-visible p-0">
                <div className="imagen">
                  <Image
                    shadow="sm"
                    radius="sm"
                    width={158}
                    height={200}
                    quality={100}
                    layout="responsive"
                    alt={book.title}
                    className='w-full h-full object-cover'
                    src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "/images/default-cover.jpg"}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
      <Modal open={selectedBook !== null} onClose={() => setSelectedBook(null)}>
        {selectedBook && (
          <>
            <h2>{selectedBook.title}</h2>
            <p>{selectedBook.author_name ? selectedBook.author_name.join(", ") : "Unknown author"}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default TrendingBook;
