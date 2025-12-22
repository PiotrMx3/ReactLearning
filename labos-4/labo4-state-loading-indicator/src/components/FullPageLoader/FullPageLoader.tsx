import {Oval} from "react-loader-spinner";

const FullPageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Oval color="#00BFFF" height={80} width={80} />
  </div>
);

export default FullPageLoader;
