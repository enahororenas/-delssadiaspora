import styled from 'styled-components'

const Wrapper = styled.section`

  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .dashboard-page {
    margin: 0 ;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-left: 20px;
  }

  .members_number{
    text-align:center;
    font-size:40px;
    margin-top:0;
    font-weight:bold;
    color:#191970;
  }
  

  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-left: 40px;
    }
  }

  @media (max-width: 992px) {
  .members_number{
    font-size:28px;
    }
  } 
`
export default Wrapper
