import '../BookDetail.css';

const PaginaLibro = () => {
    
        return (
            <div className='contenedor'>
                <div className='visual'>
                    <div className="imagen"></div>
                    <div className='editor'>
                        <p>Editor</p>
                    </div>
                </div>
                <div className='informacion'>
                    <div className='titulo_autor'>
                        <h1>Título del libro</h1>
                        <h3>Autor/a</h3>
                    </div>
                    <div className='sinopsis'>
                        <p className='sinop' >Sinopsis</p>
                        <div className='caja_descripcion'></div>
                    </div>
                    <div className='lenguaje'>
                        <p>Lenguaje</p>
                    </div>
                    <div className='detalles_atomicos'>
                        <div className='publicacion'>
                            <p>Año de publicación</p>
                        </div>
                        <div className='paginas'>
                            <p>Cant. de páginas</p>
                        </div>
                        <div className='puntaje'>
                            <p>Puntaje</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

export default PaginaLibro;