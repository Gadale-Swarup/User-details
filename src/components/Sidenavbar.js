
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import './Sidenavbar.css'
function Sidenavbar({ setname }) {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
    <div id="hero">
      <Button variant="primary" onClick={handleShow}>
        Show
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container userList ml-0">
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <Link
                        to={`/User/${user.id}`}
                       onClick={() => setname(user.name)}
                  >
                    <h8>{user.name}</h8>
                    <hr />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </>
  );
}

export default Sidenavbar;
