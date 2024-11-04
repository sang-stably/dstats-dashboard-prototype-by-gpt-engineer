const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16" style={{ background: 'linear-gradient(135deg, #13111C 0%, #8702ff 100%)' }}>
      <div className="container mx-auto flex justify-center items-center">
        <img 
          src="https://app.testnet.dtrinity.org/dlend/dTrinity-White-Logo.png" 
          alt="dTrinity Logo" 
          className="h-8 object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;