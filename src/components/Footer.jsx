import { GiCrossedAirFlows } from "react-icons/gi";
const Footer = () => {
  return (
    <div className="-mt-12 ">
      <footer className="footer p-10 bg-blue-900 text-neutral-content  mx-auto">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Payment Methods</h6> 
    <img className="h-32" src="https://i.ibb.co/n6s5FDX/Screenshot-from-2024-04-18-14-41-56.png" alt="" />
  </nav>
</footer>
    </div>
  );
};

export default Footer;
