import styled from 'styled-components'

const Wrapper = styled.section`
  .card {
	color:#fff;
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: linear-gradient(145deg, #9a40a9, #b74cc9);
    box-shadow:  20px 20px 60px var(--primary-500),-20px -20px 60px var(--primary-500);
    border: none;
}

.tab1 {
            tab-size: 2;
        }

.db1 {
      display: grid;
      place-items: center;
      //background-color: #2196F3;
     // margin-bottom: 50px;
    }

    .db2 {
      display: grid;
      margin-left:20px;
    }

  .parent_div {
  width: 100%;
  }
  .child_div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
 }

.image{
  width: 80%;
  height: 80%;
}
.pwidth{ 
  max-width: 100%;
  text-indent: 2%;
  margin-bottom: 0;
}

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
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
