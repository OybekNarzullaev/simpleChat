import React, { useEffect } from 'react'

function TopBar() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }
   
    return (
        <div className="topbars" style={{
            background: "#7554a0",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            top: "0",
            color:"white",
            position: "sticky",
            height: "8vh"
        }}>
            <div  style={{
                flex: "9",
                textAlign: "center",
            }}><h3>{localStorage.getItem("username")}</h3></div>
            <div style={{
                flex: "3",
                textAlign: "center",
            }}><button style={{
                borderRadius: "50px",
                border: "none",
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                textTransform: "uppercase",
                fontsize: "22px",
                padding: "20px",
                transition: "all 0.4s",
                cursor: "pointer",
                margin: "5px"
            }}
            onClick={handleLogout}>Chiqish</button></div>
        </div>
    )
}

export default TopBar
