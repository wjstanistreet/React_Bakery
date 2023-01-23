const Cake = ({title, price, rating, ingredients}) => {

    const listIngredients = ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    });

    return(
        <>
            <h3>{title}</h3>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
            <p>Ingredients: {listIngredients}</p>
        </>
    );
};

export default Cake;