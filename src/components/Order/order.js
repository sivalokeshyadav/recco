import React,{useState} from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./order.css"

import { IoMdCheckmark } from "react-icons/io"
import {FaTimes} from "react-icons/fa"



const Order = () => {

    const [approve, setApprove] = useState(false)
    const [reject, setReject] = useState(false)
    
    


    const handleApprove = () => {
        setApprove(true)
        setReject(false)
    }

    const handleReject=()=>{
        setReject(true)
        setApprove(false)
    }

    

  return (
    <div className='order-container'>
        <div className='header'>
            <div className='top'>
                <h4>Orders </h4>
                <h4>Order 32457ABC</h4>
            </div>
            <div className='button-order'>
                <h1>Order 32457ABC</h1>
                <div className='buttons'>
                    <button>Back</button>
                    <button className='approve'>Approve Order</button>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='section-top'>
                <div>
                    <p>Supplier</p>
                    <h1>East coast fruits<br/>& vegetables</h1>
                </div>
                <hr/>
                <div>
                    <p>Shipping Date</p>
                    <h1>Thur, Feb 10</h1>
                </div>
                <hr/>
                <div>
                    <p>Total</p>
                    <h1>$15,028.3</h1>
                </div>
                <hr/>
                <div>
                    <p>Category</p>
                    <h1>East coast fruits<br/>& vegetables</h1>
                </div>
                <hr/>
                <div>
                    <p>Department</p>
                    <h1>300-444-678</h1>
                </div>
                <hr/>
                <div>
                    <p>Status</p>
                    <h1>Awaiting your approvel</h1>
                </div>
                
            </div>
            <div className='section-bottom'>
                <div className='input-container'>
                    <input type="search" placeholder='search' />
                    <div className='buttons'>
                        <button>Add Item</button>
                        <img src="" alt="printer" />
                    </div>
                    
                </div>
                <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Quality</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="../../../public/Avocado Hass.jpg" alt="apple" />
                                        <p>Chicken Breast Fillets,Boneless matuu<br/> maMainated 6 Ounce Raw, Invivid</p>
                                    </td>
                                    <td>
                                        <p>Hormel Black <br/>Labelmany</p>
                                    </td>
                                    <td>
                                        <p>$60.67 / 6*1LB</p>
                                    </td>
                                    <td>
                                        <p><span>0*6*1LB</span></p>
                                    </td>
                                    <td>
                                        <p>0</p>
                                    </td>
                                    <td>
                                        {approve && <p className='ap'>Approved</p>}
                                        {reject && <p className='ms'>Missing</p>}
                                        
                                        

                                    </td>
                                    <td className='right-wrong-edit'>
                                    <IoMdCheckmark size={20} className='tickmark' onClick={handleApprove} />
                                        <div className='popup-container-wrong'>
                                            <Popup trigger=
                                                {<FaTimes size={20} className='wrong' />} 
                                                modal nested>
                                                {
                                                    close => (
                                                        <div className='modal'>
                                                            <div className='main-content'>
                                                                <div className='content'>
                                                                    <h1>Missing product</h1>
                                                                    <p>is 'Chicken Breast Fillets, Boneless....'urgent?</p>
                                                                </div>
                                                                <div>
                                                                    <button onClick=
                                                                        {() => close()}>
                                                                            <FaTimes size={20} className='wrong' />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='pop-up-btn'>
                                                                <button onClick={()=>close()}>No</button>
                                                                <button onClick={()=>close(handleReject)} >Yes</button>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </Popup>
                                        </div>
                                        
                                        
                                        <div className='pop-up-container-edit'>
                                            <Popup trigger=
                                                {<h1>Edit</h1>} 
                                                modal nested>
                                                {
                                                    close => (
                                                        <div className='modal'>
                                                            <div className='main-content'>
                                                                <div className='content'>
                                                                    <header>
                                                                        <h1>Chicken Breast Fillets,Boneless marinated 6 Ounce Raw,Individual</h1>
                                                                        <p>American Roland</p>
                                                                    </header>
                                                                    <div className='img-content'>
                                                                        <img src="../../../public/Avocado Hass.jpg" alt="apple" />
                                                                        <div className='img-content-container'>
                                                                            <div className='item'>
                                                                                <h1>Price ($)</h1>
                                                                                <div className='price'>
                                                                                    <h1>999.99</h1>
                                                                                    <h1>/6*1LB</h1>
                                                                                </div>
                                                                                
                                                                                
                                                                            </div>
                                                                            <div className='item'>
                                                                                <h1>Quantity ($)</h1>
                                                                                <div className='price'>
                                                                                    <button>-</button>
                                                                                    <h1>999.99<p>/6*1LB</p></h1>
                                                                                    <button>+</button>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div className='item'>
                                                                                <h1>Total</h1>
                                                                                <h1>$9,997,000.02</h1>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className='choose'>
                                                                    <h1>Choose reason<span>(Optional)</span></h1>
                                                                    <div className='choose-option'>
                                                                        <button>Missing product</button>
                                                                        <button>Quantity is not the same</button>
                                                                        <button>Price is not the same</button>
                                                                        <button>Other</button>
                                                                    </div>

                                                                </div>
                                                                <div className='pop-up-btn'>
                                                                    <button onClick={()=>close()}>cancel</button>
                                                                    <button onClick={()=>close(handleReject)} >Send</button>
                                                                </div>
                                                            </div>
                                                            
                                                            <div>
                                                                <button onClick=
                                                                    {() => close()}>
                                                                        <FaTimes size={20} className='wrong' />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </Popup>
                                        </div>
                                    </td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <img src="../../../public/Avocado Hass.jpg" alt="apple" />
                                        <p>Chicken Breast Fillets,Boneless matuu<br/> maMainated 6 Ounce Raw, Invivid</p>
                                    </td>
                                    <td>
                                        <p>Hormel Black <br/>Labelmany</p>
                                    </td>
                                    <td>
                                        <p>$60.67 / 6*1LB</p>
                                    </td>
                                    <td>
                                        <p><span>15*6*1LB</span></p>
                                    </td>
                                    <td>
                                        <p>$9000.38</p>
                                    </td>
                                    <td>
                                        <p>Pending</p>
                                    </td>
                                    <td className='right-wrong-edit'>
                                        <IoMdCheckmark size={20} />
                                        <FaTimes size={20} />
                                        <h1>Edit</h1>
                                    </td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <img src="../../../public/Avocado Hass.jpg" alt="apple" />
                                        <p>Chicken Breast Fillets,Boneless matuu<br/> maMainated 6 Ounce Raw, Invivid</p>
                                    </td>
                                    <td>
                                        <p>Hormel Black <br/>Labelmany</p>
                                    </td>
                                    <td>
                                        <p>$60.67 / 6*1LB</p>
                                    </td>
                                    <td>
                                        <p><span>15*6*1LB</span></p>
                                    </td>
                                    <td>
                                        <p>$9000.88</p>
                                    </td>
                                    <td>
                                        <p>Pending</p>
                                    </td>
                                    <td className='right-wrong-edit'>
                                        <IoMdCheckmark size={20} />
                                        <FaTimes size={20} />
                                        <h1>Edit</h1>
                                    </td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <img src="../../../public/Avocado Hass.jpg" alt="apple" />
                                        <p>Chicken Breast Fillets,Boneless matuu<br/> maMainated 6 Ounce Raw, Invivid</p>
                                    </td>
                                    <td>
                                        <p>Hormel Black <br/>Labelmany</p>
                                    </td>
                                    <td>
                                        <p>$60.67 / 6*1LB</p>
                                    </td>
                                    <td>
                                        <p><span>0*6*1LB</span></p>
                                    </td>
                                    <td>
                                        <p>0</p>
                                    </td>
                                    <td>
                                        <p>Pending</p>
                                    </td>
                                    <td className='right-wrong-edit'>
                                        <IoMdCheckmark size={20} />
                                        <FaTimes size={20} />
                                        <h1>Edit</h1>
                                    </td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <img src="../../../public/Avocado Hass.jpg" alt="apple" />
                                        <p>Chicken Breast Fillets,Boneless matuu<br/> maMainated 6 Ounce Raw, Invivid</p>
                                    </td>
                                    <td>
                                        <p>Hormel Black <br/>Labelmany</p>
                                    </td>
                                    <td>
                                        <p>$60.67 / 6*1LB</p>
                                        <del>$10.43</del>
                                    </td>
                                    <td>
                                        <p><span>13*6*1LB</span></p>
                                    </td>
                                    <td>
                                        <p>$12,654.32</p>
                                        <del>$3,365.12</del>
                                    </td>
                                    <td>
                                        <p>Pending</p>
                                    </td>
                                    <td className='right-wrong-edit'>
                                        <IoMdCheckmark size={20} />
                                        <FaTimes size={20} />
                                        <h1>Edit</h1>
                                    </td>
                                    
                                    
                                </tr>
                            </tbody>                       
                        </table>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Order