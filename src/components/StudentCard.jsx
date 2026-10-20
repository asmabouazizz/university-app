 
function StudentCard({
  prenom = "prénom inconnu",
  nom = "Nom inconnu",
  email = "Email non fourni",
  filiere = "Filière non précisée",
  Année = "Année non précisée",
  Groupe = "Groupe non précisé",
}) {
  return (
    <div className="student-card">
      <h2>{prenom} {nom}</h2>
      <p>Email : {email}</p>
      <p>Filière : {filiere}</p>
      <p>Année : {Année}</p>
      <p>Groupe : {Groupe}</p>
    </div>
  );
}

export default StudentCard;
