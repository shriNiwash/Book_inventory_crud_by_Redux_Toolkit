import { useEffect, useState } from "react";
// import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, updatePost } from "./counter/Counterslice";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  console.log(users.user);
  const datas = users.user[0];
  const [Books, setBooks] = useState({
    name: "",
    sold: "",
  });

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  useEffect(() => {
    setBooks(datas);
  }, [datas]);

  function onDataField(e) {
    setBooks({
      ...Books,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, sold } = Books;
    console.log("books data" + name, sold);
    const datass = { id, name, sold };
    dispatch(updatePost(datass));
    console.log(Books);
    alert("This Id's data has been updated" + id);
    navigate("/list");
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter the Name of Book"
              value={Books?.name}
              onChange={(e) => onDataField(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sold</Form.Label>
            <Form.Control
              type="number"
              name="sold"
              placeholder="Enter total Sold No"
              onChange={(e) => onDataField(e)}
              value={Books?.sold}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Update;
