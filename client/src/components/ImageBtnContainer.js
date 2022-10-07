import { useAppContext } from '../context/appContext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'

const ImageBtnContainer = () => {
  const { numOfImagePage, imagePage, changeImagePage } = useAppContext()
 
  const pages = Array.from({ length: numOfImagePage }, (_, index) => {
    return index + 1
  })

  const nextPage = () => {
    let newPage = imagePage + 1
    if (newPage > numOfImagePage) {
      newPage = numOfImagePage
    }
    changeImagePage(newPage)
  }
  const prevPage = () => { 
    let newPage = imagePage - 1
    if (newPage < 1) {
      newPage = 1
    }
    changeImagePage(newPage)
  }
  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={pageNumber === imagePage ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => changeImagePage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default ImageBtnContainer
