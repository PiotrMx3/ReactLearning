interface FooterProps {
  copy: string;
  years: string;
}

const Footer = ({copy, years}: FooterProps) => {
  return (
    <>
      <footer>
        <p>
          &#x00A9; {copy} ({years})
        </p>
      </footer>
    </>
  );
};

export default Footer;
