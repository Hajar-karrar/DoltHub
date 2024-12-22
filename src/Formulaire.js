import React, { useState } from 'react';

export default function FormulaireProfile({ ajouterProfil }) {
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [profession, setProfession] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const nouveauProfil = { nom, age, profession, image };
        ajouterProfil(nouveauProfil);
        setNom('');
        setAge('');
        setProfession('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="my-4 form">
            <div className="form-group">
                <label className='label'>Name :</label>
                <input 
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="form-control input"
                />
            </div>
            <div className="form-group">
                <label className='label'>Age :</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control input"
                />
            </div>
            <div className="form-group">
                <label className='label'>Occupation :</label>
                <input
                    type="text"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="form-control input"
                />
            </div>
            <div className="form-group">
                <label className='label'>Image URL :</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="form-control input"
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3 btn1">
            Add Profile
            </button>
        </form>
    );
}
