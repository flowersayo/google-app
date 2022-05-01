import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import profile from "./assets/profile.png";
import logo from "./assets/google.png";
import search from "./assets/search.PNG";
import buttons from "./assets/button.PNG";
import menu from "./assets/menu.png";
import Toggle from "./components/Toggle";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  padding: 6px;
  box-sizing: border-box;
`;

const LeftBtn = styled.a`
  display: inline-block;
  padding: 5px;
  margin: 0 5px;
  margin-left: 15px;

  color: ${(props) => props.theme.fontColor || "black"};
  background: ${(props) => props.theme.bgColor || "white"};
  font-size: 14px;
  font-family: arial, sans-serif;
`;

const Right = styled.div`
  display: inline-block;
  flex: 1;
  height: 48px;
  display: block;
  display: flex;
  justify-content: flex-end;
`;
const RightBtn = styled.a`
  font: 13px/27px Arial, sans-serif;
  color: ${(props) => props.theme.fontColor || "black"};
  background: ${(props) => props.theme.bgColor || "white"};
  margin: auto 0; //  vertical align 을 center로
  padding-right: 15px;
  font-family: arial, sans-serif;
`;

const Gap = styled.div`
  flex-grow: 1;
`;

const Top = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.image`
  margin-top: auto;
  background: ${(props) => props.theme.bgColor || "black"};
  border: none;
  outline: none;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  margin-top: 15px;
  width: 550px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid lightgray;
  outline: none;
`;

//const [search, setSearch] = useState(""); //검색창에 입력한 값

const InputConsol = styled.input.attrs({
  onKeyDown: (e) => {
    if (e.key === "Enter") {
      console.log("Enter");
      var keyword = e.target.value;
      var link = `https://www.google.co.kr/search?q=${keyword}`;
      window.location.href = link; // 기존 브라우저에서 보이는 화면을 교체하는 법
      //window.location.replace(link); -> 이 방법도 가능하긴 한데 뒤로가기 버튼이 안됨.
      //window.open(link); 새 창으로 여는 법
    }
  },
})`
  border: 1px solid white;
  width: 400px;
  outline: none;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const GrayButton = styled.button`
  margin-right: 10px;
  background: ${(props) => props.theme.default || "#F8F9F9"};
  color: ${(props) => props.theme.fontColor || "black"};
  border: none;
  outline: none;
  margin-top: 30px;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
`;
const Image = styled.div`
  width: 48px;
  float: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgColor || "white"};
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  font-family: arial, sans-serif;
  color: #202124;
`;

const Link = styled.a.attrs((props) => ({
  //props를 통해 attribute설정 가능
  href: props.href,
}))`
  margin-right: 23px;
  color: #70757a;
  text-decoration: none;
`;

const FooterWrapper = styled.div`
  box-sizing: border-box;
  background-color: #f2f2f2;
`;

const Footer1 = styled.div`
  color: ${(props) => props.theme.footColor || "gray"};
  align-content: flex-start;
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  background-color: ${(props) => props.theme.footBgColor};
`;
const Footer2 = styled.div`
  color: ${(props) => props.theme.footColor || "gray"};
  background-color: ${(props) => props.theme.footBgColor};
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-evenly;
  padding: 15px 30px;
  font-size: 15px;
`;
function App() {
  const [toggle, setToggle] = useState(false); // false : 라이트 모드 , true : 다크모드

  const dark = {
    titleColor: "#121212",
    footBgColor: "black",
    footColor: "gray",
    bgColor: "#242424",
    fontColor: "white",
    default: "black",
  };
  const light = {
    titleColor: "#b8b8b8",
    footColor: "#F2F2F2",
    bgColor: "white",
    fontColor: "#202124",
  };

  const theme = toggle ? dark : light;

  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <Toggle toggle={toggle} setToggle={setToggle} />
          <LeftBtn>Google 정보</LeftBtn>
          <LeftBtn>스토어</LeftBtn>
          <Right>
            <RightBtn>Gmail</RightBtn>
            <RightBtn>이미지</RightBtn>

            <Image>
              <img src={menu} />
            </Image>
            <Image>
              <img src={profile} style={{ borderRadius: "50%" }} />
            </Image>
          </Right>
        </Header>
        <Top>
          <Logo>
            <img src={logo} />
          </Logo>
        </Top>
        <Center>
          <Input>
            <img src={search} style={{ margin: "7px" }} />

            <InputConsol />

            <img
              src={buttons}
              style={{
                height: "100%",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          </Input>
          <Row>
            <GrayButton>Google 검색</GrayButton>
            <GrayButton>I'm Feeling Lucky </GrayButton>
          </Row>
        </Center>
        <Gap />
        <FooterWrapper>
          <Footer1>대한민국</Footer1>
          <Footer2>
            <div>
              <Link href="https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                광고
              </Link>
              <Link href="https://www.google.com/intl/ko_kr/business/">
                비즈니스
              </Link>
              <Link href="https://www.google.com/search/howsearchworks/?fg=1">
                검색의 원리
              </Link>
            </div>

            <div>
              <Link href="https://policies.google.com/u/1/privacy?hl=ko/fg=1">
                개인정보처리방침
              </Link>
              <Link href="https://policies.google.com/u/1/terms?hl=ko/fg=1">
                약관
              </Link>
              <Link href="https://www.google.com/search/howsearchworks/?fg=1">
                설정
              </Link>
            </div>
          </Footer2>
        </FooterWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
