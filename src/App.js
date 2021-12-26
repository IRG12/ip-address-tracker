import styled from "styled-components";
import arrowImage from "./ip-address-tracker-master/images/icon-arrow.svg";
import InfoBar from "./components/InfoBar";
import MapComponent from "./components/MapComponent";
import { useState, useRef } from "react";
import isIp from "is-ip";

const App = () => {
  //const [ipInput, setIpInput] = useState("");
  const [data, setData] = useState(null);
  const inputRef = useRef(null);
  //onClick for ip
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputRef.current);
    // console.log(inputRef.current.value);
    if (!isIp(inputRef.current.value)) {
      return;
    }
    const data = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_GXF6y3y5PZ2SDOPrcoOteOJv2tYWS&ipAddress=${inputRef.current.value}`
    ).then((response) => response.json());
    // const data = {
    //   ip: "128.52.69.44",
    //   location: {
    //     country: "US",
    //     region: "Massachusetts",
    //     city: "Boston",
    //     lat: 42.35843,
    //     lng: -71.05977,
    //     postalCode: "02108",
    //     timezone: "-05:00",
    //     geonameId: 4930956,
    //   },
    //   as: {
    //     asn: 3,
    //     name: "MIT-GATEWAYS",
    //     route: "128.52.0.0/16",
    //     domain: "",
    //     type: "Educational/Research",
    //   },
    //   isp: "Massachusetts Institute of Technology",
    // };
    //33.45.88.99 Ohio
    setData(data);
    console.log(data);
  };

  //at_hxRkryibCTXO5Pb4VPs2pOYCTx2FV
  //https://geo.ipify.org/api/v2/country,city?apiKey=at_hxRkryibCTXO5Pb4VPs2pOYCTx2FV&ipAddress=8.8.8.8

  return (
    <Container>
      <UpSideDiv>
        <Title>IP Address Tracker</Title>
        <Form>
          <IpInPut
            placeholder="Search for Ip address or domain"
            ref={inputRef}
          />
          <button hidden type="submit" onClick={handleSubmit}>
            submit
          </button>
          <ImgContainer>
            <Img src={arrowImage}></Img>
          </ImgContainer>
        </Form>
        <InfoBar data={data} />
      </UpSideDiv>
      <DownSideDiv>
        <MapComponent data={data} />
      </DownSideDiv>
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
`;

const UpSideDiv = styled.div`
  background-image: url("./pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const DownSideDiv = styled.div`
  flex: 1;
  .leaflet-container {
    height: 100%;
  }
`;

const Title = styled.h1`
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 40%;
  min-width: 350px;
  border-radius: 10px;
  overflow: hidden;
`;

const IpInPut = styled.input`
  outline: none;
  border: none;
  /* border-radius: 10px; */
  flex: 1;
  padding: 9px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 10px;
`;

const Img = styled.img`
  background-color: black;
`;
