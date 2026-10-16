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


return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              
              {/* Nagłówek drugiego stopnia z liczbą sekcji pochodzącą z długości tablicy */}
              <h2 className="card-title text-center mb-4 text-primary fw-bold">
                Liczba sekcji: {sections.length}
              </h2>

              {/* Lista numerowana generowana automatycznie dla wszystkich elementów tablicy */}
              <div className="mb-4">
                <h5 className="text-secondary fs-6 mb-2">Dostępne sekcje:</h5>
                <ol className="list-group list-group-numbered">
                  {sections.map((sectionItem, index) => (
                    <li key={index} className="list-group-item border-0 py-1">
                      {sectionItem}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Formularz zapisów do sekcji */}
              <form onSubmit={handleSubmit}>
                
                {/* Pole edycyjne dla Imienia i nazwiska */}
                <div className="mb-3">
                  <label htmlFor="fullNameInput" className="form-label fw-semibold">
                    Imię i nazwisko:
                  </label>
                  <input
                    type="text"
                    id="fullNameInput"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Wpisz imię i nazwisko"
                    required
                  />
                </div>

                {/* Edycyjne pole numeryczne dla Numeru sekcji */}
                <div className="mb-4">
                  <label htmlFor="sectionNumberInput" className="form-label fw-semibold">
                    Numer sekcji:
                  </label>
                  <input
                    type="number"
                    id="sectionNumberInput"
                    className="form-control"
                    value={sectionNumber}
                    onChange={(e) => setSectionNumber(e.target.value)}
                    placeholder="Wpisz numer sekcji"
                    required
                  />
                </div>

                {/* Przycisk Zapisz z klasami btn btn-primary */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Zapisz
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}