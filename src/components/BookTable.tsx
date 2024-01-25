import React, { useState} from "react";
import { Book } from "../types/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
    books: Book[];
}
export const BookTable = () => {
  const [itemInput, setItenInput] = useState('');
  const [authorInput, setAuthorInput] = useState("");

  const [list, setList] = useState<Book[]>([
    
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;
    setList([
      ...list,
      { id:list.length + 1, book: itemInput, author: authorInput, status: false}
    ]);
    setItenInput('');
    setAuthorInput("");
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
      );
  }

  const toggleItem = (id: number) => {
    setList(list.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    ));
  }

  return(
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5"> Minha Estante </h1>

      <div className="flex flex-col items-center w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600 mx-auto">
        <div className="flex flex-col mb-3 items-center">
          <input
            type="text"
            placeholder="Nome do Livro"
            className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
            value={itemInput}
            onChange={(e) => setItenInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Autor"
            className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3 mt-4"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
          />
          <button
            onClick={handleAddButton}
            className="bg-blue-500 p-3 mb-3 rounded-md mt-5"
          >
            Adicionar
          </button>
        </div>
      </div>

        {list.length >= 1 && (<table className="w-full border border-gray-400 rounded-md overflow-hidden mt-5">
          <thead>
            <tr className="text-left border-b border-gray-400 bg-gray-600">
                <th className="p-3"> Nome </th>
                <th className="p-3"> Status </th>
                <th className="p-3"> Remover </th>
            </tr>
          </thead>
          <tbody>
            {list.map(item => (

              <tr key={item.id} className="text-gray-800 bg-gray-200 border-b border-gray-600">
                  <td className="p-3 flex items-center">
                      {/* <img src={item.cover} alt={item.book} className="w-10 h-10 rounded-full  mr-3"/> */}
                      <div>
                          <div className="font-bold">{item.book}</div>
                          <div>{item.author}</div>
                      </div>
                  </td>
                  <td className="p-3">
                     {!item.status && (<input onClick={ () => toggleItem(item.id) } type="checkbox" checked={item.status} className="w-6 h-6 mr-3"/>)}
                      {item.status && (<div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-sm">Lido</div>)}
                  </td>
                  <td className="p-3">
                  <button className="hover:underline" onClick={ () => deleteItem(item.id)}><FontAwesomeIcon icon={faTrash} className="red"/></button>
                  </td>
                  
              </tr>
          ))}
          </tbody>
        </table>)}
      </div>
  );
}