const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='text-center mt-8 text-gray-400'>
      <p>Copyright &copy; {year} Sigireddy Balasai</p>
    </footer>
  );
};

export default Footer;
