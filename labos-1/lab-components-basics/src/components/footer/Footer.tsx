interface IFooter {
  copy: string;
  year: Date;
}

const Footer = ({copy, year}: IFooter) => {
  return (
    <>
      <p>
        &copy; {copy} ({year.getFullYear()})
      </p>
    </>
  );
};

export default Footer;
