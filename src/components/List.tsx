import { Tbr } from "./TbrList";
import { WishList } from "./WishList";
export const Listas = () => {
    return (
        <div className="flex flex-row gap-4">
            {/* <h2 className="font-bold text-2xl">
                Listas
            </h2> */}
            <Tbr/>
           
            <WishList/>
        </div>
    );
}

