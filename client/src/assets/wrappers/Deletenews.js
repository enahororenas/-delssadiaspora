import styled from 'styled-components'


const Wrapper = styled.section`
.dlb{
  width:fit-content;
  background-color:red;
}
.db1 {
      display: grid;
      place-items: center;
      //background-color: #2196F3;
      margin-bottom: 50px;
    }

   .db2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #2196F3;
  }

  .db3{
    margin-left: 20px;
  }

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default Wrapper
