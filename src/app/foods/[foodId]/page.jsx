import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { id, dish_name, image_link } = data.data;
    // console.log(food);
    return (
        <div>
            <h2>Showing Details of {foodId}</h2>
            <div className="flex gap-5 p-10">
                <div className=" p-4 rounded-2xl">
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={300}
                        height={300}
                    ></Image>
                </div>
                <div className=" p-4 rounded-2xl">
                    <h3 className="text-3xl">{dish_name}</h3>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailPage;