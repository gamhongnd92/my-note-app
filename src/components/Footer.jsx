import react from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>Copyright - Thi Hong Gam Tran @ {currentYear} </p>
        </div>
    );
}

export default Footer;