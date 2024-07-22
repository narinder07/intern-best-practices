import "./PriceDetails.css";
import { FaCheck } from "react-icons/fa";

const PriceDetails = () => {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 ">
            <div className="package-title1">
              <h4 className="color-blue">Ticket Packages</h4>
              <h1 className="fw-bolder display-6">
                Choose The Best Packages For Your Family
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="best-offers1 ">
              <p>
                <FaCheck className="me-2 color-blue" />
                Best Water park in the world
              </p>
              <p>
                <FaCheck className="me-2 color-blue" />
                Best Packages For Your Family
              </p>
              <p>
                <FaCheck className="me-2 color-blue" />
                Enjoy Various Kinds of Water Park
              </p>
              <p>
                <FaCheck className="me-2 color-blue" />
                Win Up To 3 Free All Day Tickets
              </p>
              <button>Book Now</button>
            </div>
          </div>
          <div className="col-lg-4 g-4 text-center">
            <div className="package-title2 bg-color1">
              <h4 className="display-6">Family Packages</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, dolorum!
              </p>
              <h2>
                <span className="color-blue">$260,90</span>/family
              </h2>
              <hr />
              <div className="best-offers2">
                <p>
                  <FaCheck className="me-2 color-blue" />
                  All Access To Water park
                </p>
                <p>
                  <FaCheck className="me-2 color-blue" />
                  Get Two Gazebo
                </p>
                <p>
                  <FaCheck className="me-2 color-blue" />
                  Free Soft Drinks
                </p>
                <p>
                  <FaCheck className="me-2 color-blue" />
                  Get Four Lockers
                </p>
                <p>
                  <FaCheck className="me-2 color-blue" />
                  Free Four Towels
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 g-4 text-center">
            <div className="package-title3 bg-color2">
              <h4 className="display-6">Basic Packages</h4>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, dolorum!
              </p>
              <h2>
                $60,90/<span className="text-white">person</span>
              </h2>
              <hr />
              <div className="best-offers3 ">
                <p>
                  <FaCheck className="me-2 color-black" />
                  Get Small Gazebo
                </p>
                <p>
                  <FaCheck className="me-2 color-black" />
                  Free Soft Drinks
                </p>
                <p>
                  <FaCheck className="me-2 color-black" />
                  Get One Locker
                </p>
                <p>
                  <FaCheck className="me-2 color-black" />
                  Free Towel
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceDetails;
