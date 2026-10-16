const projets = [
  {
    titre: 'Site vitrine WordPress',
    description: 'Création d’un site pour une petite entreprise.',
    technos: 'WordPress, CSS',
  },
  {
    titre: 'Page web responsive',
    description: 'Page adaptée mobile et ordinateur.',
    technos: 'HTML, CSS, JavaScript',
  },
  {
    titre: 'Mon portfolio',
    description: 'Le site que tu es en train de voir.',
    technos: 'React, Vite',
  },
]

function Projets() {
  return (
    <section id="projets" className="section">
      <h2>Mes projets</h2>
      <div className="cartes">
        {projets.map((p) => (
          <div className="carte" key={p.titre}>
            <h3>{p.titre}</h3>
            <p>{p.description}</p>
            <small>{p.technos}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projets