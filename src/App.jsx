import "./App.css";
import qrCodeImage from "./assets/image-qr-code.png";

function App() {
  return (
    <main>
      <div className="wrapper">
        <img src={qrCodeImage} alt="QR Code Image" />
        <div className="text">
          <p>Improve your front-end skills by building projects</p>
          <small>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </small>
        </div>
      </div>
    </main>
  );
}

export default App;
