import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'

const liste = [
  { nom: 'HTML / CSS', niveau: 90 },
  { nom: 'JavaScript', niveau: 75 },
  { nom: 'WordPress', niveau: 85 },
  { nom: 'React', niveau: 50 },
  { nom: 'Node.js', niveau: 40 },
]

function Competences() {
  return (
    <Container className="py-5" style={{ maxWidth: 700 }}>
      <h1 className="mb-4">Compétences</h1>
      {liste.map((c) => (
        <div key={c.nom} className="mb-3">
          <strong>{c.nom}</strong>
          <ProgressBar now={c.niveau} label={`${c.niveau}%`} variant="dark" />
        </div>
      ))}
    </Container>
  )
}

export default Competences