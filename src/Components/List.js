import { useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "./counter/Counterslice";
import { useDispatch, useSelector } from "react-redux";

const List = (e) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const datas = users.users[0];
  console.log(datas);
  useEffect(() => {
    dispatch(getPost());
  }, []);

  function handleDelete(id) {
    dispatch(deletePost(id));
    window.location.reload();
    alert("Post Deleted");
  }

  return (
    <Container>
      <Link to={"/insert"}>insert</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sold</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((list, inde) => {
            return (
              <tr key={inde}>
                <td>{list._id}</td>
                <td>{list.name}</td>
                <td>{list.sold}</td>
                <td>
                  <Link to={`/update/${list._id}`}>Update</Link>
                  <Button onClick={() => handleDelete(list._id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
