import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Contact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [envoye, setEnvoye] = useState(false)

  function envoyer(e) {
    e.preventDefault()
    setEnvoye(true)
    setNom('')
    setEmail('')
    setMessage('')
  }

  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="mb-4">Contact</h1>
      {envoye && <Alert variant="success">Merci, votre message a bien été envoyé !</Alert>}
      <Form onSubmit={envoyer}>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control value={nom} onChange={(e) => setNom(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="dark">Envoyer</Button>
      </Form>
    </Container>
  )
}

export default Contact