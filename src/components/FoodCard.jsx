import Image from "next/image";


const FoodCard = ({food}) => {

    const {id, dish_name, category, image_link, price} = food;
    return (
        <div className="card bg-base-100 p-5 shadow-sm">
            <figure className="h-50">
                <Image 
                    src={image_link}
                    alt={dish_name}
                    width={100}
                    height={100}
                    className="object-cover"
                ></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food.dish_name}
                    <div className="badge badge-secondary">{category || 'Dish'}</div>
                </h2>
                <p>Price: ${price}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="btn btn-primary">Add To Cart</div>
                    <div className="btn btn-ghost">Show Details</div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;