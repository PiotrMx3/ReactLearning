interface headerProps {
  title: string;
  subtitle: string;
}

const Header = ({title, subtitle}: headerProps) => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <h2 style={{textAlign: "left"}}>{subtitle}</h2>
    </>
  );
};

export default Header;
