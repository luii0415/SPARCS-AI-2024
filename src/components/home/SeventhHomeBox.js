import styled from "styled-components";
const SeventhContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 2500px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 1400px;
  padding-bottom: 150px;
  gap: 16px;
`;
const SeventhTitle = styled.div`
  font-size: 38px;
  text-align: center;
  padding-bottom: 72px;
  font-weight: 400;
  color: #000000;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const SeventhLeft = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const SeventhRight = styled.div`
  flex: 1; /* 컨테이너의 절반을 차지 */
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const SeventhButton = styled.div`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.border || "none"};
  border-radius: 31px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color || "#ffffff"};
  background-color: ${(props) => props.backgroundcolor || "#282828"};
`;
function SeventhHomeBox() {
  return (
    <SeventhContainer>
      <SeventhLeft>
        <SeventhTitle>트래빗으로 스케줄 생성하기</SeventhTitle>
        <SeventhButton>AI 스케줄 생성</SeventhButton>
      </SeventhLeft>
      <SeventhRight>
        <SeventhTitle>트래빗이 추천하는 행선지 받아보기</SeventhTitle>
        <SeventhButton
          color="#1C1E1B"
          backgroundcolor="#20FB7C"
          border="1px solid #1B1B1B"
        >
          AI 행선지 추천
        </SeventhButton>
      </SeventhRight>
    </SeventhContainer>
  );
}

export default SeventhHomeBox;