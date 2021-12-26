import React from "react";
import styled from "styled-components";
const InfoBar = ({ data }) => {
  return (
    <Container>
      <InnerContainer>
        <ItemContainer>
          <Title>IP ADDRESS</Title>
          <Content>{data ? data.ip : "0.0.0.0"}</Content>
        </ItemContainer>
        <ItemContainer>
          <Title>LOCATION</Title>
          <Content>
            {data
              ? `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
              : "No Value"}
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Title>TIME ZONE</Title>
          <TimeZoneContent>
            UTC-{data ? data.location.timezone : "No value"}
          </TimeZoneContent>
        </ItemContainer>
        <ItemContainer>
          <Title>ISP</Title>
          <Content>{data ? data.isp : "No value"}</Content>
        </ItemContainer>
      </InnerContainer>
    </Container>
  );
};

export default InfoBar;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px 0px;
  width: 80%;
  max-width: 900px;
  box-shadow: 2px 2px 10px 1px grey;
  position: fixed;
  top: 200px;
  z-index: 999;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  border-left: 1px solid lightgrey;
  padding-left: 20px;
  width: 250px;
`;

const Title = styled.h3`
  color: grey;
  font-size: 10px;
  letter-spacing: 1px;
  padding-bottom: 10px;
`;

const Content = styled.div`
  width: 70%;
  font-size: 20px;
  font-weight: 700;
`;

const TimeZoneContent = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
