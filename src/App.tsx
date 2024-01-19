import React, { FormEvent, useState } from 'react';
import { bookList } from './data/bookList';
import { BookTable } from './components/BookTable';
import { Person } from './types/Person';

function Page() {

  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret);
  }

  const [bookInput, setBookInput] = useState('');

  const buscarLivro = () => {
     alert('O livro buscado foi: '+bookInput);
  }

  const [fullName, setFullName] = useState<Person>({name: '', lastName:''});



  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">

        <input
          type="text"
          className='border border-black p-3 text-xl text-black rounded mb-3'
          placeholder='Nome'
          value={fullName.name}
          onChange={e => setFullName({ ...fullName, name: e.target.value})}
        />
        <input
          type="text"
          className='border border-black p-3 text-xl text-black rounded mb-3'
          placeholder='Sobrenome'
          value={fullName.lastName}
          onChange={e => setFullName({ ...fullName, lastName: e.target.value })}
        />
        <p>Meu nome completo é: </p>
        <p>{fullName.name} {fullName.lastName}</p>
        {/* <button onClick={buscarLivro} className='bg-blue-500 p-3 mb-3 rounded-md'>Buscar Livro</button> */}
        
        <button onClick={handleClickButton} className='bg-blue-500 p-3 mb-3 rounded-md'>{showSecret ? 'Ocultar Estante' : 'Exibir Estante'}</button>
        {showSecret &&
          <BookTable books={bookList}/>
        }
    </div>
  )
    
}

export default Page;
