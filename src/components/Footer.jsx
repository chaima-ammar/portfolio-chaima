const reseaux = [
  { nom: 'Facebook', icone: 'fa-facebook-f', lien: '#' },
  { nom: 'Google', icone: 'fa-google', lien: '#' },
  { nom: 'Instagram', icone: 'fa-instagram', lien: '#' },
  { nom: 'LinkedIn', icone: 'fa-linkedin-in', lien: '#' },
  {
    nom: 'GitHub',
    icone: 'fa-github',
    lien: 'https://github.com/chaima-ammar',
  },
]

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <h3>Chaima Salhi</h3>
        <p>Développeuse web</p>

        <div className="footer-socials">
          {reseaux.map((r) => (
            <a
              key={r.nom}
              className="footer-social-link"
              href={r.lien}
              aria-label={r.nom}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fab ${r.icone}`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Chaima Salhi — Tous droits réservés
      </div>
    </footer>
  )
}

export default Footer




