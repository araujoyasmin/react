import { useState } from "react";
import { TbrItem } from "./types/TbrItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Page = () => {
  const [itemInput, setItenInput] = useState('');

  const [list, setList] = useState<TbrItem[]>([
    // { id:1, label: 'Addie Larue', checked: true },
    // { id:2, label: 'Acotar', checked: false}
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;
    setList([
      ...list,
      { id:list.length + 1, label: itemInput, checked: false}
    ]);
    setItenInput('');
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
      );
  }

  const toggleItem = (id: number) => {
    setList(list.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  }

  return (
      <div className="w-screen h-screen flex flex-col items-center text-2xl">
        <h1 className="text-4xl mt-5"> Minha TBR </h1>

        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
            <input 
              type="text"
              placeholder="Qual livro vai entrar na sua TBR?"
              className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
              value={itemInput}
              onChange={e => setItenInput(e.target.value)}
            />
            <button onClick={handleAddButton}>Adicionar</button>
        </div>
        <ul className="w-full max-w-lg list-disc pl-5">
          {list.map(item => (
            <li key={item.id} className={item.checked ? 'completed' : ''}>
                <input onClick={ () => toggleItem(item.id) } type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
                {item.label}  {!item.checked && (<button className="hover:underline" onClick={ () => deleteItem(item.id)}><FontAwesomeIcon icon={faTrash} className="red"/></button>)}</li>
          ))}
        </ul>
      </div>
  );
}

export default Page;