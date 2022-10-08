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
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-left: 40px;
    }
  }
`
export default Wrapper
