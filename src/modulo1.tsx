import React from 'react';
import Sidebar from './components/Sidebar'; 
import { Favs } from './components/FavList';
import { Listas } from './components/List';
import { bookList } from './data/bookList';
import { BookTable } from './components/BookTable';

function Page() {

  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12:false
  }).format();

  const hour = new Date().getHours();
  let greeting = '';

  if(hour >= 0 && hour < 12){
    greeting = 'Bom dia!';
  }else if(hour >= 12 && hour < 18){
    greeting = 'Boa tarde!';
  }else if(hour >= 18 && hour <= 23){
    greeting = 'Boa noite!';
  }

  const lidos = bookList.filter(book => book.status === 'lido');
  const quero = bookList.filter(book => book.status === 'quero ler');
  const lendo = bookList.filter(book => book.status === 'lendo');
  
  return (
        <div className='container mx-auto'>
          <h1>Lista de Livros</h1>
          <BookTable books={bookList}/>
        </div>
    
  );
}

export default Page;
