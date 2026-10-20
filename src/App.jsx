 
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const etudiants = [
    {
      prenom: "Asma",
      nom: "Bouaziz",
      email: "asma@gmail.com",
      filiere: "GLSI",
      Année: "2éme année",
      Groupe: "A",
    },
    {
      prenom: "ali",
      nom: "bouchnak",
      email: "ali@gmail.com",
      filiere: "GLSI",
      Année: "2éme année",
      Groupe: "A",
    },
    {
      prenom: "teycir",
      nom: "turqui",
      email: "teycir@gmail.com",
      filiere: "GLSI",
      Année: "2éme année",
      Groupe: "A",
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      <main id="etudiants">
        <h2>Liste des étudiants</h2>

        <div className="students-list">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              filiere={etudiant.filiere}
              Année={etudiant.Année}
              Groupe={etudiant.Groupe}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
