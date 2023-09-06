import React,{useContext,useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MyContext } from "../../Context/My-context";
import { services } from "../../Services/Services";

const Order = (props) => {
    const {cart}=useContext(MyContext)
    const [data,setData]=useState({})
    const handleInputChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const onOrder=async()=>{
        console.log(data)
        const response=await services.postOrderProducts({data,
            title:cart.map((e)=>e.title)
        })
        console.log(response)
        props.onHide()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Оформить Товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column gap-3">
            <input type="text" onChange={handleInputChange} placeholder="ФИО" name="name" id="" />
            <input type="number" onChange={handleInputChange} placeholder="Number" name="phone" id="" />
            <input type="text" onChange={handleInputChange} placeholder="Address" name="address" id="" />
        </div>
        {
            cart.map((elem)=>{
                return <p key={elem.title} >{elem.title}</p>
            })
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={onOrder} >Заказать</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Order;
