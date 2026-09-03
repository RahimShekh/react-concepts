import Card from './Card';

function Cards({users,handleRemove}) {
  return (
    <div className='w-full flex justify-center gap-10 p-4 '>
       {users.map((elem,idx)=>(
        <Card handleRemove={handleRemove} index={idx} user={elem} key={idx}/>
       ))}
    </div>
  )
}

export default Cards