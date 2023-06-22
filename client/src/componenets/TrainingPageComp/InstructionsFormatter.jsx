import React from 'react';

function InstructionsFormatter({ text }) {
  const instructions = text.split('#').filter(instruction => instruction.trim() !== '');

  return (
    <>
      {instructions.map((instruction, index) => {
        const parts = instruction.split('$').filter(part => part.trim() !== '');

        if (parts.length === 1) {
          return (
            <div key={index}>
              <strong>{parts[0].trim()}</strong>
            </div>
          );
        } else {
          const mainTask = parts[0].trim();
          const subTasks = parts.slice(1).map(subTask => subTask.trim());

          return (
            <div key={index}>
              <strong>{mainTask}</strong>
              <ul>
                {subTasks.map((subTask, subIndex) => (
                  <li style={{ color: '#616161' }} key={subIndex}>
                    {subTask}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </>
  );
}

export default InstructionsFormatter;
