import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";

const ShoppingCartItem = ({
  image,
  price,
  name,
  number,
  onPlus,
  onMinus,
  onDelete,
}) => {
  return (
    <>
      <div className="  flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full p-4 shadow-lg">
        <div className="flex items-center gap-4 flex-grow">
          <figure className="w-20 h-20 md:w-24 md:h-24 aspect-square overflow-hidden flex-shrink-0">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={name}
            />
          </figure>

          <div className="flex flex-col">
            <p className="font-medium text-base md:text-lg line-clamp-2">
              {name}
            </p>
            <span className="text-sm text-black">{price}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            onClick={onMinus}
            variant="outline"
            size="icon"
            className="bg-black text-white cursor-pointer hover:opacity-85"
            disabled={number <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>

          <span className="text-base md:text-lg font-medium w-6 text-center">
            {number}
          </span>

          <Button
            onClick={onPlus}
            variant="outline"
            size="icon"
            className="bg-black text-white cursor-pointer hover:opacity-85"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            onClick={onDelete}
            variant="outline"
            size="icon"
            className="bg-red-400 text-white cursor-pointer hover:opacity-85"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartItem;
