 import "./App.css";
 import photo from "./assets/asma.jpg";

function App() {
return (
<div className="student-card">
<h1>Fiche étudiant</h1>
<img src={photo} alt="Photo étudiant" width="120" />
<p>Nom : Bouaziz</p>
<p>Prénom : Asma</p>
<p>Email : asmabouaziz205@gmail.com</p>
<p>Téléphone : 52921033</p>
<p>Filière : GLSI</p>
<p>Année d’étude : 1ère année</p>
<p>Groupe : 1</p>
<p>Ville : Monastir</p>
<a href="mailto:asmabouaziz205@gmail.com">
  <button>Contacter</button>
</a>
</div>
);
}

export default App;