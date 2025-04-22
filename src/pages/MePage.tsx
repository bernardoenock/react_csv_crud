import './MePage.css';

function MePage() {
  return (
    <div className="mepage-container">
      <header className="mepage-header">
        <h1>Bernardo Enock</h1>
      </header>

      <section className="mepage-bio">
        <p>
          Estou em busca de uma oportunidade como Desenvolvedor Full Stack Pleno. Na posição, serei responsável por criar e manter funcionalidades robustas e eficientes tanto no frontend (React e Next.js) quanto no backend (Node.js e Java), colaborando com designers e demais membros para traduzir requisitos de negócio em soluções técnicas. Também vou otimizar aplicações para garantir alto desempenho e melhor experiência ao usuário, além de me manter sempre atualizado nas melhores práticas de desenvolvimento e novas tecnologias.
        </p>
      </section>

      <section className="mepage-links">
        <a
          href="https://www.linkedin.com/in/bernardoenock/"
          target="_blank"
          rel="noopener noreferrer"
          className="mepage-button"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bernardoenock"
          target="_blank"
          rel="noopener noreferrer"
          className="mepage-button"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}

export default MePage;
