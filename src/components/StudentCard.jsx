 
function StudentCard({
  prenom = "prénom inconnu",
  nom = "Nom inconnu",
  email = "Email non fourni",
  filiere = "Filière non précisée",
}) {
  return (
    <div className="student-card">
      <h2>{prenom} {nom}</h2>
      <p>Email : {email}</p>
      <p>Filière : {filiere}</p>
    </div>
  );
}

export default StudentCard;
