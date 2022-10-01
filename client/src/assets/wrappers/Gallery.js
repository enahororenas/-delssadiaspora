import styled from 'styled-components'

const Wrapper = styled.section`
  
 .gcontainer {
  display: grid;
  grid-template-columns: 1fr 10fr;  
  justify-content: center;
  align-content: center;
  background-color: red;
 }

 .item-center {
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
}

 .subgcontainer {
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: blue;
  justify-items: center;
  max-width: 100%;
  max-height: 100%;
 }

 .galleryimg{
  margin-top: 20px;
  width: 70%;
  height: 70%;
  border: 10px solid var(--primary-300);
 }

 .imageparent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 20px;
}

`
export default Wrapper
