import styled from 'styled-components'

const Wrapper = styled.section`
  .card {
	color:#fff;
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: linear-gradient(145deg,  #b74cc9);
    box-shadow:  20px 20px 60px var(--primary-500),-20px -20px 60px var(--primary-500);
    border: none;
}

.form {
    margin: 10px;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
    margin-top: 20px;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
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
.pheader{
  align-items: center;
}
  .db3{
    margin-left: 20px;
  }
  .btncover{
    margin:20px;
    margin-bottom: 0px;
    display: flex;
  justify-content: center;
  position: relative;
  }
  .btn {
    width: fit-content;
    padding: 10px;
    margin:10px;
  }
  .btnpos{
    position: absolute;
    left: 0;
  }
  .member-btn {
    cursor: pointer;
    font-size: larger;
    font-weight: bold;
    letter-spacing: var(--letterSpacing);
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
