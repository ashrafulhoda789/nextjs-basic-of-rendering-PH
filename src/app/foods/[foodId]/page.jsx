
const FoodDetailPage = async({params}) => {
    const {foodId} = await params;

    return (
        <div>
            <h2>Showing Details of {foodId}</h2>
        </div>
    );
};

export default FoodDetailPage;