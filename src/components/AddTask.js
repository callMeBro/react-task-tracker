import { useState } from 'react';
import "./AddTask.css"; // Import CSS file for styling

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    // Pass task data to parent component via onAdd prop
    onAdd({ text, day, reminder });

    // Clear form inputs
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Task"
          />
        </div>

        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="Add Day & Time"
          />
        </div>

        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
