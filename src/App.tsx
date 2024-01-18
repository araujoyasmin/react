import React, { FormEvent, useState } from 'react';
import { bookList } from './data/bookList';
import { BookTable } from './components/BookTable';

function Page() {

  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret);
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        
        <button onClick={handleClickButton} className='bg-blue-500 p-3 mb-3 rounded-md'>{showSecret ? 'Ocultar Estante' : 'Exibir Estante'}</button>
        {showSecret &&
          <BookTable books={bookList}/>
        }
    </div>
  )
    
}

export default Page;
