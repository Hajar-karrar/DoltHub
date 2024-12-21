import React from 'react';
import CarteProfile from './CarteProfile';

export default function ListeProfils({ profils, supprimerProfil }) {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {profils.map((profile, index) => (
                <CarteProfile
                    key={index}
                    nom={profile.nom}
                    age={profile.age}
                    profession={profile.profession}
                    image={profile.image}
                    onSupprimer={() => supprimerProfil(index)}
                />
            ))}
        </div>
    );
}
