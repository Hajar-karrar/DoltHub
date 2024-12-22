import React, {useState} from 'react'
import ListeProfils from './ListeProfie';
import FormulaireProfile from './Formulaire';

export default function AllList() {

    const [profils, setProfils] = useState([
        { nom: 'Alice', age: 25, profession: 'Développeuse', image: 'd4.jpg' },
        { nom: 'Bob', age: 30, profession: 'Designer', image: 'd2.jpg' },
        { nom: 'Rayan', age: 24, profession: 'Designer', image: 'd3.jpg' },
        
    ]);

    const ajouterProfil = (profil) => {
        setProfils([...profils, profil]);
    };

    const supprimerProfil = (index) => {
        const nouveauxProfils = profils.filter((_, i) => i !== index);
        setProfils(nouveauxProfils);
    };
  return (
          
    <div className='bodyy'>
          
        <div className='app'>
      <h1 className="text-center my-4 h11">List of Profiles</h1>
      <FormulaireProfile ajouterProfil={ajouterProfil} />
      <ListeProfils profils={profils} supprimerProfil={supprimerProfil} />
    </div>
    </div>
  )
}
