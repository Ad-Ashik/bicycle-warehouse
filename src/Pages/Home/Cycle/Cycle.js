import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, NavLink } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBicycle from '../../../hooks/useBicycle';
import useSingleCycle from '../../../hooks/useSingleCycle';
import './Cycle.css';

const Cycle = () => {
    const [bicycles, setBicycles] = useBicycle();
    const { cycleId } = useParams();
    const [cycle] = useSingleCycle(cycleId);
    const { _id, name, price, description, quantity, supplierName, img } = cycle;
    const navigate = useNavigate();

    const deleteCycle = id => {
        const removeCycle = window.confirm("you want to delete?");
        if (removeCycle === true) {
            toast.error('Permanently delete this product?', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if (removeCycle) {
            const url = `https://frozen-taiga-96489.herokuapp.com/cycles/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = bicycles.filter(cycle => cycle._id !== id);
                    setBicycles(remaining);
                });
            navigate('/cycles')
        }

    }

    // const [addQty, setAddQty] = useState([]);

    const addQuantity = data => {
        data.preventDefault();
        // const getQty = data.target.quantity.value;
        // const preQty = quantity;
        // const totalQty = parseInt(getQty) + parseInt(preQty);
        // setAddQty(totalQty);

        // fetch('https://frozen-taiga-96489.herokuapp.com/quantity', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(addQty)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log('add quantity successfully', result);
        //     })

    };


    return (
        <>
            <div className='container text-center'>
                <h2 className='text-color'>CycleId: {cycleId}</h2>
            </div>
            <div className="card mb-3 container single-cycle">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-color">
                                Cycle Name: {name}
                            </h3>
                            <h4 className='text-secondary mb-4'>Pirce: <span className='fw-bold'>${price}.00</span></h4>
                            <div className='fw-bold d-md-flex justify-content-between align-items-center'>
                                <form onSubmit={addQuantity} className='d-flex align-items-center'>
                                    <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicQuantity">
                                        <Form.Label className='m-0' >QTY</Form.Label>
                                        <Form.Control className='qut-input rounded-pill' type="number" name='quantity' />
                                        <button className='btn btn-outline-success rounded-pill'>
                                            Add QTY <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                        </button>
                                    </Form.Group>
                                </form>
                                <p className='supplier'>Supplier: {supplierName}</p>
                            </div>
                            <p className="card-text"><span className='fw-bold'>Description: </span>{description}</p>

                            <div className='text-center mt-4'>
                                <button className='btn btn-outline-success'>Q: {quantity}</button>
                                <button className='btn btn-outline-danger mx-3'>
                                    Quantity <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                                <button onClick={() => deleteCycle(_id)} className='btn btn-danger'>
                                    Product <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <NavLink as={Link} to="/manage-cycles" className='btn btn-success w-50 p-2 mx-auto'>All Bicycles</NavLink>
            </div>
        </>
    );

};

export default Cycle;