import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="top">
        <div className="box orange"></div>
        <div className="box orange inner-flex">
          <div className="inner pink light"><strong>Calvin Jared</strong></div>
          <div className="inner pink dark"><strong>Quiambao</strong></div>
        </div>
        <div className="box orange"></div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="large pink dark"></div>
        <div className="side">
          <div className="small pink dark"></div>
          <div className="small pink dark"></div>
        </div>
      </div>

      {/* Bottom Section */}
       <div className="bottom-section">
        <div className="box purple"></div>
        <div className="box orange bottom-orange"><strong>C-PCIT9LEC</strong></div>
        <div className="box orange bottom-orange"><strong>IT-3B</strong></div>
        <div className="box purple"></div>
      </div>
    </div>
  );
}
