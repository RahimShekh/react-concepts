import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
      <h3>Orange</h3>  
       <div className='flex p-2 text-white rounded-md text-sm gap-3 bg-orange-600'>
            <h3>Favourites</h3>
            <h4>{data.filter(elem =>elem.added).length}</h4>  
        </div> 
    </div>
  )
}

export default Navbar

/*
It doesn't add the true values.
filter() selects objects whose added value is truthy. */