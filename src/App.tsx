import React from 'react';
import Sidebar from './components/Sidebar'; 
import { Favs } from './components/FavList';
import { Listas } from './components/List';
import { bookList } from './data/bookList';

function Page() {

  const lidos = bookList.filter(book => book.status === 'lido');
  const quero = bookList.filter(book => book.status === 'quero ler');
  const lendo = bookList.filter(book => book.status === 'lendo');
  
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col flex-1 p-4">
        <h1 className="font-bold text-2xl mb-4 text-center">Bookshelf</h1>
        <img src="/images/logo.gif" alt="Logo" className="mx-auto mb-4" />

        <div className="flex flex-row gap-4">
        <div className="w-52 h-52 border-dotted border-2 border-gray-400 p-4 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">shelf</h2>
          {bookList.length > 0 && (
            <ul>
              {bookList.map(book => (
                <li key={book.id}>
                  {book.book}
                  <span
                    className={`rounded p-1 text-sm ${
                      book.status === 'lido'
                        ? 'bg-green-500 text-white'
                        : book.status === 'quero ler'
                        ? 'bg-blue-500 text-white'
                        : book.status === 'lendo'
                        ? 'bg-orange-500 text-white'
                        : ''
                    }`}
                  >
                    {book.status}
                  </span>{' '}
                </li>
              ))}
            </ul>
          )}
          <button
            className="mt-4 bg-gray-500 text-white px-2 py-1 rounded"
          >
            Adicionar Livro
          </button>
        </div>
        <div className="w-52 h-52 border-dotted border-2 border-green-400 p-4 flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">Lidos</h3>
          {lidos.length && 
            <ul>
              {lidos.map(book =>
                <li key={book.id}>{book.book}</li>
              )}
            </ul>
          }
        </div> 
        <div className="w-52 h-52 border-dotted border-2 border-blue-400 p-4 flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">Quero Ler</h3>
          {quero.length && 
            <ul>
              {quero.map(book =>
                <li key={book.id}>{book.book}</li>
              )}
            </ul>
          }
        </div> 
        <div className="w-52 h-52 border-dotted border-2 border-orange-400 p-4 flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">Lendo</h3>
          {lendo.length && 
            <ul>
              {lendo.map(book =>
                <li key={book.id}>{book.book}</li>
              )}
            </ul>
          }
        </div> 
        </div>           
        <br />
        <hr />
        <div className="flex flex-row gap-4">
          <Listas />
          <Favs
            book="Fourth Wing"
            rate={5}
            cover="https://img.skoob.com.br/yFG1XMxH9medx1e41mA0fAUJs0M=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/122289122/FOURTH_WING_1679069801122289122SK-V11679069802B.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
