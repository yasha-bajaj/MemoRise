import React, { useEffect, useState } from "react";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    script1.onload = () => setLoading(false); // Set loading to false when the script loads
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2024/10/28/12/20241028121118-0KNNT8MK.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "#2d2d2d", // Dark grey background color
        backgroundImage: "linear-gradient(145deg, #333333, #2d2d2d)", // Dark grey gradient
        fontFamily: "'Poppins', sans-serif", // Google Font
        paddingLeft: "50px", // Add padding to the left to shift content right
      }}
    >
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent overlay
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
        }}>
          Loading Chatbot...
        </div>
      )}
      <div className="container" style={{ display: "flex" }}>
        <div className="static-txt" style={{ color: "#fff", fontSize: "60px", fontWeight: 400 }}>
          I'm
        </div>
        <div className="dynamic-txt" style={{ marginLeft: "15px", height: "90px", lineHeight: "90px", overflow: "hidden" }}>
          <ul style={{ padding: 0 }}>
            <li style={{ listStyle: "none", color: "#d4b16a", fontSize: "60px", fontWeight: 500, position: "relative", top: 0, animation: "slide 12s steps(4) infinite" }}>
              <span style={{ position: "relative", margin: "5px 0", lineHeight: "80px" }}>Your Diagnostic Bot</span>
            </li>
            <li style={{ listStyle: "none", color: "#d4b16a", fontSize: "60px", fontWeight: 500, position: "relative", top: 0, animation: "slide 12s steps(4) infinite" }}>
              <span style={{ position: "relative", margin: "5px 0", lineHeight: "80px" }}>Your Memory Coach</span>
            </li>
            <li style={{ listStyle: "none", color: "#d4b16a", fontSize: "60px", fontWeight: 500, position: "relative", top: 0, animation: "slide 12s steps(4) infinite" }}>
              <span style={{ position: "relative", margin: "5px 0", lineHeight: "80px" }}>A Friendly Guide</span>
            </li>
            <li style={{ listStyle: "none", color: "#d4b16a", fontSize: "60px", fontWeight: 500, position: "relative", top: 0, animation: "slide 12s steps(4) infinite" }}>
              <span style={{ position: "relative", margin: "5px 0", lineHeight: "80px" }}>Here to Help You Remember</span>
            </li>
          </ul>
        </div>
      </div>
      <style>
        {`
          @keyframes slide {
            100% {
              top: -360px;
            }
          }
          .dynamic-txt li span::after {
            content: '';
            position: absolute;
            left: 0;
            height: 120%;
            width: 100%;
            background: #2d2d2d; /* Match background color for seamless effect */
            border-left: 2px solid #d4b16a; /* Vintage brownish-yellow color for line */
            animation: animate 3s steps(10) infinite;
          }
          @keyframes animate {
            40%, 60% {
              left: calc(100% + 30px);
            }
            100% {
              left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default HomePage;
