import './Footer.css';

function Footer()
{
    return(
        <footer style={{backgroundColor: "#CCEEFF", padding: "10px 0", fontWeight:"bold"}}>
        PD_411 Copyright &#169; - {new Date().getFullYear()}
      </footer>
    );
}
export default Footer;