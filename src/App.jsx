 
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
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra@gmail.com",
      filiere: "GLSI",
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem@gmail.com",
      filiere: "GLSI",
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
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
