
function Music({name,artist,img,added,handleClick,index}) {
  return (
    <div className='w-55  bg-amber-100 pb-10 p-4 rounded-md flex gap-4 relative'>
      <div className='w-20 h-10 bg-orange-500'>
        <img src={img} alt="" />
      </div>
      <div className=''>
        <h3>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
        <button onClick={()=>handleClick(index)} 
        className='absolute whitespace-nowrap translate-y-5  -translate-x-[50%] rounded-full bg-orange-500 px-2 py-1 text-sm'>{added?"Added":"Add Favourites"}</button>
      </div>
    </div>
  )
}

export default Music