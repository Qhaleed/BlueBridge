import NavigationBar from '../../components/NavigationBar/navbar.js';
import "./PaymentStyleSheet.css"

export const PaymentPage = () => {
    return (
      <>
      <NavigationBar />
      <div> 
        <div className='Container'> 
          <div className='PaymentContainer'> 
            <p style={{width: '300px'}}> Enter your donation </p>
            <div id='PaymentOptions' style={{ margin: 0}}> 
              <button> ₱ 200 </button> 
              <button> ₱ 400 </button> 
              <button> ₱ 800 </button> 
              <button> ₱ 900 </button> 
            </div>
            <input className='PaymentInput'/> 
            <p style={{width: '300px'}}> Mode of Payment </p>
            <button className='PaymentMode'>  </button> 
            <button className='PaymentMode'>  </button> 
            <p style={{width: '300px'}}> Your donation will directly go to those affected by the recent fire in Barangay Pasonanca </p>
          </div>
        </div>
      </div>
      </>
    );
  };

  export default PaymentPage;