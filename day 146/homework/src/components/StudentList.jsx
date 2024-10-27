import React from 'react';
import StudentItem from './StudentItem';

const StudentList = ({ students, deleteStudent, editStudent }) => {
  return (
    <div>
      <h2 className="text-2xl mb-2">Student List</h2>
      <ul>
        {students.map(student => (
          <StudentItem
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
            editStudent={editStudent}
          />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;