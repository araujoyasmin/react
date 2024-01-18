import React from "react";
import { Book } from "../types/Book";

type Props = {
    books: Book[];
}
export const BookTable = ({ books }: Props) => {
    const renderStars = (rate: number) => {
        const rateInt = Math.floor(rate);
        const yellowStars = Array.from(
          { length: rateInt },
          (_, i) => (
            <span key={i} className="text-yellow-500">
              &#9733;
            </span>
          )
        );
    
        return (
          <div>
            {yellowStars.map((star, index) => (
              <React.Fragment key={index}>{star}</React.Fragment>
            ))}
          </div>
        );
      };
    return (
        <table className="w-full border border-gray-400 rounded-md overflow-hidden">
            <thead>
            <tr className="text-left border-b border-gray-400 bg-gray-600">
                <th className="p-3"> Livro </th>
                {/* <th className="p-3"> Autor </th> */}
                <th className="p-3"> Status </th>
                <th className="p-3"> Nota </th>
            </tr>
            </thead>
            <tbody>
                {books.map(item => (

                    <tr key={item.id} className="text-gray-800 bg-gray-200 border-b border-gray-600">
                        <td className="p-3 flex items-center">
                            <img src={item.cover} alt={item.book} className="w-10 h-10 rounded-full  mr-3"/>
                            <div>
                                <div className="font-bold">{item.book}</div>
                                <div >{item.author}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            {item.status == 'lido' && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Lido</div>}
                            {item.status == 'lendo' && <div className="px-2 py-1 inline-block rounded-md border border-orange-800 bg-orange-600 text-white text-xs">Lendo</div>}
                            {item.status == 'quero' && <div className="px-2 py-1 inline-block rounded-md border border-blue-800 bg-blue-600 text-white text-xs">Quero Ler</div>}
                        </td>
                        <td className="p-3">
                            {item.status == 'lido' ? renderStars(item.rate || 0) : ' --- '}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}