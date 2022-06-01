import { useState } from "react";


const AddTask = ( { onAdd }) =>{

    const [text , setTask] = useState('');
    const [day , setDayTime] = useState('');
    const [reminder , setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('please add a task');
            return;
        }

        onAdd({ text , day ,reminder });

        setTask('');
        setDayTime('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>{ setTask(e.target.value)}} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>{ setDayTime(e.target.value)}} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form> 
    );

}

export default AddTask;