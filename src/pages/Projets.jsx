import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const projets = [
  {
    titre: 'Site vitrine WordPress',
    description: 'Création d’un site pour une petite entreprise.',
    details: 'Choix du thème, création des pages, adaptation au mobile et optimisation de la vitesse.',
    technos: ['WordPress', 'CSS'],
    image: 'https://placehold.co/600x400?text=Projet+1',
    site: '#',
    code: '#',
  },
  {
    titre: 'Page web responsive',
    description: 'Page adaptée au mobile et à l’ordinateur.',
    details: 'Mise en page avec Flexbox et Grid, menu adapté au téléphone, petites animations en JavaScript.',
    technos: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://placehold.co/600x400?text=Projet+2',
    site: '#',
    code: '#',
  },
  {
    titre: 'Mon portfolio',
    description: 'Site créé avec React, Vite et Bootstrap.',
    details: 'Plusieurs pages avec React Router, composants réutilisables, filtres avec useState et formulaire de contact.',
    technos: ['React', 'Bootstrap'],
    image: 'https://placehold.co/600x400?text=Projet+3',
    site: '#',
    code: '#',
  },
]

const filtres = ['Tous', 'WordPress', 'JavaScript', 'React']

function Projets() {
  const [filtre, setFiltre] = useState('Tous')
  const [selection, setSelection] = useState(null)

  const projetsAffiches =
    filtre === 'Tous'
      ? projets
      : projets.filter((p) => p.technos.includes(filtre))

  return (
    <Container className="py-5">
      <h1 className="mb-4">Mes projets</h1>

      <div className="mb-4">
        {filtres.map((f) => (
          <Button
            key={f}
            variant={filtre === f ? 'dark' : 'outline-dark'}
            className="me-2 mb-2"
            onClick={() => setFiltre(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <Row xs={1} md={3} className="g-4">
        {projetsAffiches.map((p) => (
          <Col key={p.titre}>
            <Card className="h-100 shadow-sm carte-projet">
              <Card.Img variant="top" src={p.image} alt={p.titre} />
              <Card.Body>
                <Card.Title>{p.titre}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                {p.technos.map((t) => (
                  <Badge bg="secondary" className="me-1" key={t}>{t}</Badge>
                ))}
              </Card.Body>
              <Card.Footer className="bg-white border-0 pb-3">
                <Button variant="dark" size="sm" onClick={() => setSelection(p)}>
                  Détails
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={selection !== null} onHide={() => setSelection(null)} centered>
        {selection && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selection.titre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selection.image} alt={selection.titre} className="img-fluid mb-3" />
              <p>{selection.details}</p>
              {selection.technos.map((t) => (
                <Badge bg="secondary" className="me-1" key={t}>{t}</Badge>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button href={selection.site} variant="dark">Voir le site</Button>
              <Button href={selection.code} variant="outline-dark">Code</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  )
}

export default Projets