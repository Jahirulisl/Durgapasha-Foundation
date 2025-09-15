
const FoodCard = ({item}) => {
  //from category item start
  const {name,image,price,recipe} = item;

  //for handle card 
   const hnadleAddToCart = food =>{
    console.log(food);
  }

  return (
    //card from daisyui khala start
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <p className="absolute right-0  mr-4  rounded mt-4 px-4 bg-slate-900 text-white ">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={hnadleAddToCart} className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
    //card from daisyui khala start
  );
};

export default FoodCard;