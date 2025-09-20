import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecur from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const FoodCard = ({ item }) => {
  //for refetch super power
  const [, refetch] = useCart();
  //from category item start
  const { name, image, price, recipe, _id } = item;
  //for useAxiosSecur hook import
  const axiosSecure = useAxiosSecur();

  //for location get us state
  const locaion = useLocation();

  //for navigate other page start
  const navigate = useNavigate();

  //for user information start
  const { user } = useAuth();
  //for handle card 
  const hnadleAddToCart = food => {
    if (user && user.email) {
      //TODO: send cart item to the database
      console.log("User logged in:", user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            //for refetch the cart to update the cart items count
            refetch();

          }
        })

    }
    else {
      //alart message start>
      Swal.fire({
        title: "You are Not Logged In",
        text: "You won't be able to revert thisplase login to add to the cart?!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes, loggin"
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page 
          navigate('/login', { state: { from: locaion } })
        }
      });
      //alart message end>
    }
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
          <button onClick={ hnadleAddToCart} className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4 mt-4">Add to card</button>
        </div>

      </div>
    </div>
    //card from daisyui khala start
  );
};

export default FoodCard;