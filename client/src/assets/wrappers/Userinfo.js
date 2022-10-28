import styled from 'styled-components'

const Wrapper = styled.article`
  //background: #140d30;
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
    
  }

  .main-icon22 {
    width: fit-content;
    padding-right: 15px;
    padding-left: 15px;
    
    height: 50px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    
    
  }

  .info22 {
    margin-left: 10px;
    h5 {
      margin-bottom: 0.25rem;
     
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
      
    }
  }
`

export default Wrapper
