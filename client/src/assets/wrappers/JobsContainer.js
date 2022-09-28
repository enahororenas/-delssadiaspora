import styled from 'styled-components'

const Wrapper = styled.section`

  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .dashboard-page {
    margin: 0 auto;
    
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-left: 20px;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
export default Wrapper
