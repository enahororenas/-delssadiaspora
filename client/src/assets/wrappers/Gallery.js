import styled from 'styled-components'

const Wrapper = styled.section`
  
 .gcontainer {
  display: grid;
  grid-template-columns: 1fr 9fr;
 }

 .subgcontainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 10px;
 }

 .galleryimg{
  width: 95%;
  height: 90%;
  border: 10px solid var(--primary-300);
 }

 .sidebar-container {
  
 }

`
export default Wrapper
