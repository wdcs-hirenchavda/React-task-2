import React, {  useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import LogOut from "./LogOut";
import Form from "react-bootstrap/Form";
import { debounce } from "debounce";

function Users() {
  const navigate = useNavigate();
  // const [search1, setSearch] = useState();
  const [users, setUsers] = React.useState([]);
  
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUsers(json.data);
  };

  React.useEffect(() => {
    f();
  }, []);

  const Delete = () => {
    alert("Are you sure you want to delete");
  };

    const debouncedSave = useCallback(debounce((putdata)=>setUsers(putdata),1000),[])

    
    
      const search = (e) => {
        const search1 = e.target.value;
        const putdata = users.filter(
          (iteams) =>
            iteams.email.toLowerCase().includes(search1) ||
            iteams.first_name.toLowerCase().includes(search1) ||
            iteams.last_name.toLowerCase().includes(search1)
        );
        debouncedSave(putdata)
        f();
      };
 

  // {
  //   users.filter(post => {
  //     if (search1 === '') {
  //       return post;
  //     } else if (post.first_name.toLowerCase()) {
  //       return post;  
  //     }
  //   }).map((post) => (
  //     <div >
  //       <p>{post.first_name}</p>
  //     </div>
  //   ))
  // }

  return (
    <div className="App">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={search}
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <Container>
        <Row>
          <h1 className="p-3">User Details</h1>
          <LogOut />
          <Col className="col-md-12">
            <Button
              className="m-2"
              variant="primary"
              onClick={() => navigate("/addUser")}
            >
              Add Users
            </Button>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
               {/* <tbody>
             { filterdata.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>
                          <img src={user.avatar} alt="loading..."></img>
                        </td>
                      </tr>
              )
              })}
              </tbody>  */}
              <tbody>
                {users.length &&
                  users.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>
                          <img src={user.avatar} alt="loading..."></img>
                        </td>
                        <td>
                          <Button
                            className="m-2"
                            variant="primary"
                            onClick={() => navigate("/editUser")}
                          >
                            Edit Users
                          </Button>
                          <Button
                            className="m-2"
                            variant="primary"
                            onClick={() => Delete()}
                          >
                            Delete Users
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Users;
