import styled from 'styled-components'

const Wrapper = styled.article`
  .homebtn{
    margin: 20px;
    width:fit-content;
    height: auto;
    float:right;
    font-size: 30px;
  }

  @media (max-width: 992px) {
  .textwait{
    font-size: medium;
    }
  }  
  @media (min-width: 992px) {
    .homebtn{
      font-size: 40px;
    }
  }  
`

export default Wrapper
