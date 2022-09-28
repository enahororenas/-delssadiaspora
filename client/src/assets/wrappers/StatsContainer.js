import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  .dashboard-page {
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`
export default Wrapper
