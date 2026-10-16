 import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Apropos() {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center g-5">

          {/* Ma photo */}
          <Col md={5} className="text-center">
            <Image
              src="/images/ma-photo.jpg"
              alt="Photo de Chaima Salhi"
              roundedCircle
              className="about-photo shadow"
            />
          </Col>

          {/* Présentation */}
          <Col md={7}>
            <p className="about-subtitle">QUI SUIS-JE ?</p>

            <h1 className="about-title mb-4">
              À propos de <span>moi</span>
            </h1>

            <p className="about-text">
              Bonjour ! Je m'appelle Chaima Salhi. Je suis passionnée par
              le développement web et les tests logiciels. J'aime créer
              des sites web modernes, tester leurs fonctionnalités et
              rechercher les anomalies afin d'améliorer leur qualité.
            </p>

            <p className="about-text">
              Je travaille avec des technologies comme HTML, CSS,
              JavaScript, React et WordPress. Curieuse, organisée et
              motivée, je souhaite continuer à développer mes compétences
              en développement web et en assurance qualité logicielle.
            </p>

            <div className="mt-4">
              <Button
                as={Link}
                to="/contact"
                className="about-button"
              >
                Me contacter
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Apropos;