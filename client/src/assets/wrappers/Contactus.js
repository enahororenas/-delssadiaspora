import styled from 'styled-components'

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }

.social-container {
  text-align: center;
}
.social-caption{
  color:var(--primary-500);
}
.social-caption:hover {
  transform: translateY(-2px);
}


a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  //text-align: center;
}

a.social:hover {
  transform: translateY(-2px);
}

a.youtube { color: #FF0000;}
a.instagram {color: #8a3ab9;}

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
