import React from 'react';
import './Stylee.css';

export default function CarteProfile({ nom, age, profession, image, onSupprimer }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <img src={image} alt={nom} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">Âge : {age}</p>
                <p className="card-text">Profession : {profession}</p>
                <button className="btn-supprimer btn3" onClick={onSupprimer}>
                    Supprimer
                </button>
            </div>
        </div>
    );
}
