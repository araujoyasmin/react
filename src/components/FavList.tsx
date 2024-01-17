type Props = {
    book: string;
    rate: number;
    cover?: string;
}

export const Favs = ({book, rate, cover}: Props) => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(
            <span key={i} className="text-yellow-500">
              &#9733;
            </span>
          );
        }
        return stars;
      };
    return (
        <div className="w-52 h-52 p-4 flex flex-col items-center justify-center border-dotted border-2 border-red-500">
            <h2 className="font-bold text-2xl">
                favs - 2023
            </h2>
            <h3>{book}</h3>
            <p>{renderStars(rate)}</p>
            <img 
                src={cover}
                alt={book}
                className="w-10"
            />
        </div>
    );
}

