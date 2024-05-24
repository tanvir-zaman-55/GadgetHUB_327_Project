import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";

/**
 * Profile component displays user profile information.
 *
 * @component
 * @example
 * return (
 *   <Profile />
 * )
 */
export const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /**
   * Handles user logout by clearing session storage and redirecting to the login page.
   */
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="User Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3 className="h2 text-white mb-0">{user.name}</h3>
                        <span className="text-primary">{user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}</span>
                      </div>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Email:
                          </span>
                          {user.email}
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Phone:
                          </span>
                          {user.phone}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {user.userType === "customer" && (
              <>
                <div className="col-lg-12 mb-4 mb-sm-5">
                  <div>
                    <span className="section-title text-primary mb-3 mb-sm-4">
                      Tracking Info
                    </span>
                    {user.trackingInfo.map((item) => (
                      <p key={item.orderId}>
                        Order ID: {item.orderId}, Status: {item.status}, Date:{" "}
                        {item.date}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="col-lg-12 mb-4 mb-sm-5">
                  <div>
                    <span className="section-title text-primary mb-3 mb-sm-4">
                      Wishlist
                    </span>
                    {user.wishlist.map((item) => (
                      <p key={item.productId}>
                        Product: {item.productName}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
            {user.userType === "seller" && (
              <>
                <div className="col-lg-12 mb-4 mb-sm-5">
                  <div>
                    <span className="section-title text-primary mb-3 mb-sm-4">
                      Products
                    </span>
                    {user.products.map((item) => (
                      <p key={item.productId}>
                        Product: {item.productName}, Date: {item.date}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
