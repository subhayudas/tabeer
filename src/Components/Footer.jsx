const Footer = () => {
  return (
    <>
      <div className="footer w-full h-screen bg-neutral">
        <div className="footerup w-full h-[80vh] flex items-center justify-between px-5">
          <div className="socialLinks flex flex-col gap-5">
            <h3 className="uppercase text-[.7rem] text-primary">CONNECT WITH US</h3>
            <div className="links text-[.8rem] text-accent-light">
              <h5> Facebook</h5>
              <h5> Instagram</h5>
              <h5> Twitter</h5>
              <h5> Pinterest</h5>
              <h5> YouTube</h5>
            </div>
          </div>
          <div className="logo flex flex-col justify-center pt-36 gap-20">
            <div className="text-center">
              <h1 className="text-6xl font-['Rozha_One'] tracking-wider text-primary">TABEER</h1>
              <p className="text-sm tracking-widest text-accent mt-2">INDIAN ETHNIC WEAR</p>
            </div>
            <div className="text-sm flex gap-5 justify-center text-primary/70">
              <h5>&copy; Tabeer Ethnic Wear 2024</h5>
              <h5>Terms of Use</h5>
              <h5>Privacy Policy</h5>
            </div>
          </div>
          <div className="webLinks flex flex-col gap-5 text-right">
            <h3 className="uppercase text-[.7rem] text-primary">QUICK LINKS</h3>
            <div className="links text-[.8rem] text-accent-light">
              <h5>Size Guide</h5>
              <h5>Shipping & Returns</h5>
              <h5>Care Instructions</h5>
              <h5>Our Artisans</h5>
              <h5>Careers</h5>
              <h5>Wholesale</h5>
            </div>
          </div>
        </div>
        <div className="footerdown text-[.8rem] text-center px-[14.3rem] text-accent-light">
          <p>
            At Tabeer, we celebrate India's rich textile heritage and the skilled artisans
            who bring our designs to life. Each piece in our collection is a testament to
            the centuries-old traditions of Indian craftsmanship, reimagined for the modern woman.
            We are committed to ethical practices, fair trade, and supporting the livelihoods
            of artisan communities across India. When you choose Tabeer, you're not just
            wearing a garment – you're wearing a piece of India's cultural legacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
