import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//https://chatgpt.com/share/6a936ada-d760-83e8-be6f-4ba82d8cad44

const QRScanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false
    );

    const onScanSuccess = (decodedText: string) => {
      console.log("QR Code:", decodedText);

      // Example: navigate using QR content
      // navigate(decodedText);
    };

    const onScanFailure = (errorMessage: string) => {
            console.log("Scan failure:", errorMessage);

      // Don't console.warn every frame.
      // Most frames won't contain a QR code.
    };

    scanner.render(onScanSuccess, onScanFailure);

    return () => {
      scanner
        .clear()
        .catch((error) => {
          console.error("Failed to clear QR scanner:", error);
        });
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div id="reader" />

      <button
        style={{
          background: "white",
          color: "blue",
        }}
        onClick={() => navigate("/visitor")}
      >
        Close
      </button>
    </div>
  );
};

export default QRScanner;