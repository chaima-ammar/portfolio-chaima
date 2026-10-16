
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faWordpress,
  faNodeJs,
  faGitAlt,
  faGithub,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'

const services = [
  {
    numero: '01',
    icone: '✓',
    titre: 'Tests fonctionnels',
    texte:
      'Je vérifie que chaque fonctionnalité marche comme prévu et je rédige des cahiers de tests clairs.',
  },
  {
    numero: '02',
    icone: '⌕',
    titre: 'Rapports de bugs',
    texte:
      'Je décris chaque anomalie avec précision : étapes, résultat attendu et résultat obtenu.',
  },
  {
    numero: '03',
    icone: '</>',
    titre: 'Développement web',
    texte:
      'Je crée des sites modernes avec HTML, CSS, JavaScript, WordPress et React.',
  },
]

const outils = [
  { nom: 'HTML', icone: faHtml5 },
  { nom: 'CSS', icone: faCss3Alt },
  { nom: 'JavaScript', icone: faJs },
  { nom: 'React', icone: faReact },
  { nom: 'WordPress', icone: faWordpress },
  { nom: 'Node.js', icone: faNodeJs },
  { nom: 'Git', icone: faGitAlt },
  { nom: 'GitHub', icone: faGithub },
  { nom: 'Bootstrap', icone: faBootstrap },
]

function Acceuil() {
  return (
    <main className="portfolio-home">

      {/* 1. Accueil */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">

            <Col lg={7} className="hero-content">
              <span className="hero-label">
                PORTFOLIO · TEST & DÉVELOPPEMENT
              </span>

              <h1>
                Chaima <span>Salhi</span>
              </h1>

              <h2>Testeuse & développeuse web</h2>

              <p className="hero-description">
                Je conçois des sites web fiables et j’aide à améliorer
                leur qualité, du développement aux tests.
                Mon objectif : créer des expériences web simples,
                efficaces et agréables.
              </p>

              <div className="hero-actions">
                <Button
                  as={Link}
                  to="/projets"
                  className="btn-rose"
                  size="lg"
                >
                  Découvrir mes projets →
                </Button>

                <Button
                  as={Link}
                  to="/contact"
                  className="btn-rose-outline"
                  size="lg"
                >
                  Me contacter
                </Button>
              </div>

              <p className="hero-note">
                ✦ Curieuse · Rigoureuse · Créative
              </p>
            </Col>

            <Col lg={5} className="text-center">
              <div className="hero-photo-frame">
                <img
                  src="/images/ma-photo.jpg"
                  alt="Portrait de Chaima Salhi"
                  className="hero-photo"
                />
                <div className="photo-caption">
                  <span>Bienvenue dans mon univers</span>
                  <strong>Web & qualité logicielle</strong>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* 2. Services */}
      <section className="services-section">
        <Container>
          <div className="section-heading">
            <span className="section-eyebrow">MON SAVOIR-FAIRE</span>
            <h2>Ce que je fais</h2>
            <p>
              Du développement à la vérification, chaque détail compte.
            </p>
          </div>

          <Row xs={1} md={2} lg={3} className="g-4">
            {services.map((service) => (
              <Col key={service.numero}>
                <Card className="service-card h-100">
                  <Card.Body>
                    <div className="service-top">
                      <span className="service-icon">
                        {service.icone}
                      </span>
                      <span className="service-number">
                        {service.numero}
                      </span>
                    </div>

                    <Card.Title>{service.titre}</Card.Title>
                    <Card.Text>{service.texte}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3. Outils */}
      <section className="tools-section">
        <Container className="text-center">
          <div className="section-heading">
            <span className="section-eyebrow">MES COMPÉTENCES TECHNIQUES</span>
            <h2>Mes outils</h2>
            <p>Les technologies que j’utilise dans mes projets.</p>
          </div>

         <div className="tools-list">
  {outils.map((outil) => (
    <Badge key={outil.nom} className="tool-badge">
      <FontAwesomeIcon
        icon={outil.icone}
        className="tool-icon"
        aria-hidden="true"
      />
      <span>{outil.nom}</span>
    </Badge>
  ))}
</div>
        </Container>
      </section>

      {/* 4. Contact */}
      <section className="contact-section">
        <Container>
          <div className="contact-panel text-center">
            <span className="section-eyebrow">
              ET SI ON TRAVAILLAIT ENSEMBLE ?
            </span>

            <h2>Un projet en tête ?</h2>

            <p>
              Parlons de votre projet, de vos besoins en tests
              ou de votre prochain site web.
            </p>

            <Button
              as={Link}
              to="/contact"
              className="btn-contact"
              size="lg"
            >
              Écrire un message →
            </Button>
          </div>
        </Container>
      </section>

    </main>
  )
}

export default Acceuil
