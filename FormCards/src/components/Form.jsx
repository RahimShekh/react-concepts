import { useForm } from "react-hook-form"

function Form({handleFormSubmit}) {
  const {register,handleSubmit,reset} = useForm()
  const handlerSubmit = (data)=>{
    handleFormSubmit(data);
    reset();
  }
  return (
    <div className='mt-10 flex justify-center'>
      <form className="flex gap-10" action="" onSubmit={handleSubmit(handlerSubmit)}>
        <input {...register('name')} className="p-1 border-2 rounded-md" type="text" placeholder="name" />
        <input {...register('email')} className="p-1 border-2 rounded-md" type="text" placeholder="email" />
        <input {...register('image')} className="p-1 border-2 rounded-md" type="text" placeholder="image url" />
        <input className="rounded-md px-2 py-1 bg-blue-400 text-sm" type="submit" />
      </form>

    </div>
  )
}

export default Form