import React from 'react';

const StudentItem = ({ student, deleteStudent, editStudent }) => {
  return (
    <li className="border p-2 rounded mb-2 flex justify-between items-center">
      <span>{student.name} (Age: {student.age})</span>
      <div>
        <button
          onClick={() => editStudent(student)}
          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteStudent(student.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default StudentItem;
