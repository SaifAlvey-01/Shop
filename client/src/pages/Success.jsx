import { Link } from "react-router-dom";

const Success = () => {
    return (
      <div
        style={{
          background:
            'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center',
        }}
        >
        <div>
          <div>
            <image
              src="https://avatars.githubusercontent.com/u/1486366?v=4"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            Hooray! Your Payment was successful.
          </p>
          <Link to="/">
            <button>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Success;
  