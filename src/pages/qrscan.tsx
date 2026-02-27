import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const QRScanner = () => {
      const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("QR Code:", decodedText);
      },
      (error) => {
        console.warn(error);
      }
    );
  }, []);

  return <div style={{
width:"100vw",
display:"flex",
justifyContent:"center",
flexDirection:"column",
alignItems:"center",
gap:"10px",
  }}>

  <div id="reader" />
  <button style={{
    background:"white",
    color:"blue"
  }}   onClick = {()=> navigate("/visitor")}
>
    close

  </button>


    </div>

  ;
};

export default QRScanner;