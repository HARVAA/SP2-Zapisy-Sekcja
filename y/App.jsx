import React, { useState } from 'react';

export default function App() {
  const [sections] = useState([
    "Piłka nożna",
    "Szachy",
    "Robotyka",
    "Pływanie"
  ]);

  const [fullName, setFullName] = useState('');
  const [sectionNumber, setSectionNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedSectionNumber = parseInt(sectionNumber, 10);

    let sectionNameMessage = "Nieprawidłowy numer sekcji";
    if (
      !isNaN(parsedSectionNumber) &&
      parsedSectionNumber >= 1 &&
      parsedSectionNumber <= sections.length
    ) {
      sectionNameMessage = sections[parsedSectionNumber - 1];
    }

    console.log(fullName);
    console.log(sectionNameMessage);
  };


}