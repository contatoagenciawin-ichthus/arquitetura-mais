import Image from 'next/image';

const WHATSAPP = 'https://wa.me/5511981857346';
const INSTAGRAM = 'https://www.instagram.com/arquiteturamaiss/';

const projects = [
  {
    number: '01',
    label: 'Residencial',
    title: 'Projetos para viver com identidade e conforto.',
    image: '/images/residencial.webp',
    position: 'center',
  },
  {
    number: '02',
    label: 'Corporativo',
    title: 'Espaços de trabalho que traduzem cultura e propósito.',
    image: '/images/corporativo.webp',
    position: 'center',
  },
  {
    number: '03',
    label: 'Comercial',
    title: 'Arquitetura que aproxima operação, experiência e marca.',
    image: '/images/comercial.webp',
    position: 'center',
  },
];

const process = [
  {
    number: '01',
    title: 'Escuta',
    text: 'Entendemos rotina, prioridades, contexto e expectativas antes de desenhar soluções.',
  },
  {
    number: '02',
    title: 'Projeto',
    text: 'Integramos função, estética, materiais e decisões técnicas em uma direção coerente.',
  },
  {
    number: '03',
    title: 'Acompanhamento',
    text: 'Aproximamos o projeto da execução com presença técnica, planejamento e atenção aos detalhes.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Arquitetura Mais - início">
          Arquitetura Mais
        </a>

        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#escritorio">Escritório</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-contact" href={WHATSAPP} target="_blank" rel="noreferrer">
          Conversar ↗
        </a>
      </header>

      <section id="inicio" className="hero">
        <Image
          src="/images/hero.webp"
          alt="Projeto de arquitetura da Arquitetura Mais"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />

        <div className="hero-copy shell">
          <p className="eyebrow light">Residencial · Corporativo · Comercial</p>
          <h1>
            Espaços que traduzem
            <span>quem vive neles.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Projetos personalizados que equilibram identidade, funcionalidade e presença técnica do conceito à execução.
            </p>
            <a href="#projetos" className="scroll-link">Ver projetos ↓</a>
          </div>
        </div>

        <div className="hero-meta">São Caetano do Sul · SP</div>
      </section>

      <section className="intro section shell">
        <div className="intro-title">
          <p className="eyebrow">01 · O escritório</p>
          <h2>Projetamos com intenção.</h2>
        </div>
        <div className="intro-copy">
          <p>
            A Arquitetura Mais nasce do encontro entre técnica, sensibilidade e um olhar atento para a vida real.
          </p>
          <p>
            Criamos espaços que equilibram beleza e propósito para servir pessoas, rotinas e negócios sem fórmulas prontas.
          </p>
          <a href="#escritorio" className="underlined-link">Conheça a Arquitetura Mais ↘</a>
        </div>
      </section>

      <section id="projetos" className="projects section">
        <div className="shell projects-heading">
          <p className="eyebrow">02 · Projetos selecionados</p>
          <h2>Onde ideias ganham forma.</h2>
        </div>

        <div className="shell project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  className="project-image"
                  style={{ objectPosition: project.position }}
                />
              </div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div>
                  <strong>{project.label}</strong>
                  <p>{project.title}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-image">
          <Image
            src="/images/projeto-detalhe.webp"
            alt="Detalhe de projeto corporativo da Arquitetura Mais"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="cover"
          />
        </div>
        <div className="statement-copy">
          <p className="eyebrow light">Nossa forma de pensar</p>
          <h2>
            Cada projeto começa na escuta e ganha força quando espaço, rotina e identidade passam a funcionar juntos.
          </h2>
          <span>Arquitetura Mais</span>
        </div>
      </section>

      <section id="processo" className="process section shell">
        <div className="process-heading">
          <p className="eyebrow">03 · Como trabalhamos</p>
          <h2>Menos excesso. Mais clareza.</h2>
        </div>
        <div className="process-list">
          {process.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="escritorio" className="studio section">
        <div className="shell studio-grid">
          <div className="studio-image-wrap">
            <Image
              src="/images/socias.webp"
              alt="Juliana Corradi e Josiany Frediani, da Arquitetura Mais"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="cover"
            />
          </div>

          <div className="studio-copy">
            <p className="eyebrow light">04 · Arquitetura Mais</p>
            <h2>Duas especialidades. Um mesmo olhar para o espaço.</h2>
            <p>
              Juliana Corradi, arquiteta especialista em Neuroarquitetura, e Josiany Frediani, arquiteta com foco em Gestão de Projetos e Obra, estão à frente da Arquitetura Mais.
            </p>
            <p>
              Juntas, conduzem um escritório com mais de uma década de atuação em projetos residenciais, corporativos e comerciais, combinando repertórios complementares em cada etapa.
            </p>

            <div className="founders">
              <div>
                <span>Juliana Corradi</span>
                <small>Neuroarquitetura</small>
              </div>
              <div>
                <span>Josiany Frediani</span>
                <small>Gestão de Projetos e Obra</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team section shell">
        <div className="team-heading">
          <p className="eyebrow">05 · Equipe</p>
          <h2>Arquitetura é trabalho coletivo.</h2>
          <p>Um time envolvido em transformar decisões de projeto em espaços bem resolvidos.</p>
        </div>
        <div className="team-image-wrap">
          <Image
            src="/images/equipe.webp"
            alt="Equipe da Arquitetura Mais"
            fill
            sizes="100vw"
            className="cover"
          />
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contact-image">
          <Image
            src="/images/processo.webp"
            alt="Processo de desenvolvimento de projeto da Arquitetura Mais"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="cover"
          />
        </div>
        <div className="contact-copy">
          <p className="eyebrow light">Vamos conversar?</p>
          <h2>Seu próximo espaço começa aqui.</h2>
          <p>
            Conte o que você está planejando. O primeiro passo pode ser uma conversa direta com a equipe.
          </p>
          <a className="contact-button" href={WHATSAPP} target="_blank" rel="noreferrer">
            Falar com a Arquitetura Mais ↗
          </a>

          <div className="contact-info">
            <div>
              <span>Endereço</span>
              <p>Alameda Caulim, 115 · sala 606<br/>Espaço Cerâmica · São Caetano do Sul/SP</p>
            </div>
            <div>
              <span>Contato</span>
              <p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">+55 (11) 98185-7346</a><br/>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer">@arquiteturamaiss</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <span>Arquitetura Mais</span>
          <span>© {new Date().getFullYear()}</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </main>
  );
}
