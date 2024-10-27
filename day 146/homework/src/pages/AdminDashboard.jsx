import React, { useState, useEffect } from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const editStudent = (updatedStudent) => {
    setStudents(students.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const calculateAverageAge = () => {
    if (students.length === 0) return 0;
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return (totalAge / students.length).toFixed(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Student Management System</h1>
      <StudentForm addStudent={addStudent} editStudent={editStudent} />
      <p className="my-4">Age: {calculateAverageAge()}</p>
      <StudentList students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
    </div>
  );
};

export default AdminDashboard;