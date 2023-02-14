import styled, { keyframes } from "styled-components";

// const Father = styled.div`
//   display: flex;
// `;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// const Circle = styled(Box)`
//   border-radius: 50px;
// `

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
//   padding: 10px;
//   margin: 10px;
// `

// const Input = styled.input.attrs({required: true})`
//   background-color: tomato;
// `

const Wrapper = styled.div`
  display: flex;
`
const rotationAnmation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`
const Emoji = styled.p`
  font-size: 36px;
`
const Box = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnmation} 1s linear infinite;
  ${Emoji} {
    &:hover {   // span:hover
      font-size: 90px;
    }
  }
`

function App() {
  return (
    // <Father>
    //   <Box bgColor="teal" />
    //   <Circle bgColor="tomato" /> 

    //   <Btn>log in</Btn>
    //   <Btn as="a" href="/">log in</Btn>

    //   <Input />
    //   <Input />
    //   <Input />
    //   <Input />
    //   <Input />
    // </Father> 

    <Wrapper>
      <Box>
        <Emoji>🙂</Emoji>
      </Box>
      <Emoji>🤩</Emoji>
    </Wrapper>

  )
}

export default App;
