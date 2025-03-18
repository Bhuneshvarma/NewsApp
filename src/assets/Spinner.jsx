import loading from './loading.gif'

const Spinner=()=> {
    return (
      <div className='text-center'>
        <img  className="my-3" src={loading} width={50} alt="loading" />
      </div>
    )
  }

export default Spinner
