import React, { useState } from 'react';

const StudentForm = ({ addStudent, editStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editing, setEditing] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return alert("Please enter both name and age.");

    const newStudent = {
      id: editing ? editingStudentId : Date.now(),
      name,
      age: Number(age)
    };

    if (editing) {
      editStudent(newStudent);
    } else {
      addStudent(newStudent);
    }

    setName("");
    setAge("");
    setEditing(false);
  };

  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setEditing(true);
    setEditingStudentId(student.id);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 mb-4 rounded">
      <h2 className="text-2xl mb-4">{editing ? "Edit Student" : "Add New Student"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editing ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;