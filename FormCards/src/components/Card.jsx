
function Card({user,handleRemove,index}) {
  return (
  <div className='w-40 h-full bg-zinc-100 rounded-md flex flex-col items-center p-2'>
        <div className='w-12 h-12 rounded-full bg-black'>
          <img className='w-full h-full rounded-full object-cover' src={user.image} alt="" />
        </div>
        <div>
          <h1 className='text-center mt-2'>{user.name}</h1>
          <h4 className='opacity-40 text-xs  ml-3'>{user.email}</h4>
          <p className='text-sm p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <button onClick={()=>handleRemove(index)} className='px-2 py-1 ml-2 text-center bg-red-500 text-white text-sm'>Remove it</button>
        </div>
    </div>
  )
}

export default Card