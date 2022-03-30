import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample() {
  const [task, setTask] = useLocalStorage('task', '')

  return (
    <form className='w-50'>
      <div className='mb-3'></div>
      <label className='form-label'>Task</label>
      <input className='form-control' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
    </form>
  )
}

export default CustomHookExample
