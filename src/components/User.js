import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './User.css'

function User({ setname }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setname(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id, setname]);

  if (!user) return <div>User Loading</div>;

  return (
    <div className="container  pl-5 ml-5 user ">
      <div className="row ">
        <div className="col-md-4 mt-5">
          <img
            src={`https://robohash.org/${user.id} `}
            className="card-img imgage"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="body" style={{ marginTop: "10%", marginLeft: "10%" }}>
            <h3 className="title">
              <span style={{ color: "brown" }}>Name:-</span>
              {user.name}
            </h3>
            <hr />
            <h5 className="text">
              <span style={{ color: "brown" }}>Email:-</span>
              {user.email}
            </h5>
            <hr />
            <h7 className="text">
              <span style={{ color: "brown" }}>Company Name:-</span>
              {user.company.name}
            </h7>
      
            <hr />
            <h7 className="text">
              <span style={{ color: "brown" }}>Website:-</span>
              {user.website}
            </h7>
            <hr />
            <h6 className="text">
              <small className="text-muted">
                <span style={{ color: "brown" }}>Phone:-</span>
                {user.phone}
              </small>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;