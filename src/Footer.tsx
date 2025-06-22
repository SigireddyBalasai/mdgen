const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
      <p>Copyright &copy; {year} Sigireddy Balasai</p>
    </footer>
  );
};

export default Footer;
