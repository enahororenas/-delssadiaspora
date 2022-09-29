import { FormRow } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
  const {isLoading,search,handleChange,clearFilters} = useAppContext()
  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('Searching for',search)
    clearFilters()
  }
  return (
    <Wrapper>
      <div className='dashboard-page'>
      <form className='form' style={{marginTop:'0'}}>
        <h4 style={{fontWeight:'bold'}}>search form</h4>
        <div className='form-center'>
          {/* search position */}

          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
      </div>
    </Wrapper>
  )
}

export default SearchContainer
