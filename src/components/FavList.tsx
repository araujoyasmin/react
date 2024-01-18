type Props = {
    book: string;
    rate: number;
    cover?: string;
}

export const Favs = ({book, rate, cover}: Props) => {
 
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    const rateInt = Math.floor(rate);
    const yellowStars = Array.from({ length: rateInt }, (_, i) => (
      <span key={i} className='text-yellow-500'>&#9733;</span>
    ));
  
    const grayStars = Array.from({ length: 5 - rateInt }, (_, i) => (
      <span key={i} className='text-gray-500'>&#9733;</span>
    ));

    return (
        <div className="w-52 h-52 p-4 flex flex-col items-center justify-center border-dotted border-2 border-red-500">
            <h2 className="font-bold text-2xl">
                favs - 2023
            </h2>
            <h3>{book}</h3>
            <p>{yellowStars}{grayStars}</p>
            <img 
                src={cover}
                alt={book}
                className="w-10"
            />
        </div>
    );
}

