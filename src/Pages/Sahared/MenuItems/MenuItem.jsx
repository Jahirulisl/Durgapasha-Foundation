

const MenuItem = ({item}) => {
  const {name,image,price,recipe} = item;
  return (
    <div>
      <img style={{borderRadius:'0 200px 200px'}} className="w-[120px]" src={image} alt="" />
      <div>
        <h3 className='uppercase'>{name}----</h3>
        <p>{recipe}</p>
        <p className="text-yellow-400">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;