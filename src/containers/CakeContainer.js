import arrayOfCakes from '../components/arrayOfCakes';
import Cake from '../components/Cake';

const cakeArray = arrayOfCakes;

const CakeContainer = () => {

    const createCakeCard = cakeArray.map((cake) => {
        return <Cake title={cake.cakeName} price={cake.price} rating={cake.rating} ingredients={cake.ingredients}/>;
    });

    return(
        <>
            <h2>Cakes:</h2>
            {createCakeCard}
        </>
    );
};

export default CakeContainer;