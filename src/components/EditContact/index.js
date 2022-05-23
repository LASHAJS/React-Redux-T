import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import {updateContact} from '../../redux/reducers/contactReducer';
import { useHistory } from "react-router-dom";

const EditContact = () => {
  const contacts  = useSelector(state => state.contact);
  const { id } = useParams();
  const history = useHistory();
  const dispatch =useDispatch()
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
        setName(currentContact.name);
        setLastname(currentContact.lastname);
        setAge(currentContact.age);
        setAddress(currentContact.address);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkName = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.name === name);
    
      const checkLastname = contacts.find(
        (contact) => contact.id !== parseInt(id) && contact.lastname === lastname);

    if (!name || !lastname || !age || !address) {
      return toast.warning("გთხოვთ შეავსოთ ყველა ველი");
    }
    if (checkName) {
      return toast.error("ეს სახელი უკვე გამოყენებულია");
    }
    if (checkLastname) {
      return toast.error("ეს გვარი უკვე გამოყენებულია");
    }
    dispatch(updateContact({
      id:currentContact.id,
      name,
      lastname,
      age,
      address
    }));
    toast.success("განახლებულია");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-6 mx-auto shadow p-5 mt-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group  mb-3">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"სახელი"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group  mb-3">
                <input
                  className="form-control"
                  value={lastname}
                  placeholder={"გვარი"}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group  mb-3">
                <input
                  className="form-control"
                  value={age}
                  type="number"
                  placeholder={"ასაკი"}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group  mb-3">
                <input
                  className="form-control"
                  value={address}
                  placeholder={"მისამართი"}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                 შეცვლა
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  გაუქმება
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">{id}არავინ მოიძებნა</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditContact
