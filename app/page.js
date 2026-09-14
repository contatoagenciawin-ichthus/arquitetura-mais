import Image from 'next/image';

const WHATSAPP = 'https://wa.me/5511981857346';
const INSTAGRAM = 'https://www.instagram.com/arquiteturamaiss/';

const services = [
  {
    number: '01',
    title: 'Projetos personalizados',
    text: 'Soluções desenhadas a partir do perfil, da rotina e dos objetivos de cada cliente, sem fórmulas prontas.',
  },
  {
    number: '02',
    title: 'Acompanhamento de obra',
    text: 'Presença técnica para aproximar o que foi planejado daquilo que será executado no espaço.',
  },
  {
    number: '03',
    title: 'Planejamento de compras',
    text: 'Organização das escolhas de materiais, acabamentos e elementos do projeto para dar consistência à execução.',
  },
];

const projects = [
  {
    eyebrow: 'Projetos residenciais',
    title: 'Casa com identidade, conforto e função.',
    text: 'Ambientes pensados para a rotina de quem vive neles, equilibrando linguagem estética e uso cotidiano.',
    image: '/images/residencial.webp',
  },
  {
    eyebrow: 'Projetos corporativos',
    title: 'Espaços que representam a cultura da empresa.',
    text: 'Arquitetura para organizar fluxos, favorecer o trabalho e materializar identidade no ambiente profissional.',
    image: '/images/corporativo.webp',
  },
  {
    eyebrow: 'Projetos comerciais',
    title: 'Experiência, operação e marca no mesmo espaço.',
    text: 'Projetos que conectam presença visual, funcionalidade e a experiência de quem circula pelo negócio.',
    image: '/images/comercial.webp',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Arquitetura Mais - início">
          <Image src="/images/logo.webp" alt="Arquitetura Mais" width={180} height={98} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#escritorio">O escritório</a>
          <a href="#servicos">Como atuamos</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          Falar sobre um projeto
        </a>
      </header>

      <section id="inicio" className="hero">
        <Image
          src="/images/hero.webp"
          alt="Projeto de arquitetura residencial com integração entre ambientes"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="kicker light">Residencial · Corporativo · Comercial</p>
          <h1>Arquitetura que traduz quem vive, trabalha e recebe em cada espaço.</h1>
          <p className="hero-copy">
            Projetos personalizados que equilibram estética, funcionalidade e identidade — do conceito à execução.
          </p>
          <div className="actions">
            <a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer">
              Falar sobre meu projeto
            </a>
            <a className="text-link light" href="#projetos">Conhecer os projetos <span>↘</span></a>
          </div>
        </div>
        <div className="hero-index">ARQ +</div>
      </section>

      <section className="manifesto section shell">
        <div>
          <p className="kicker">Arquitetura Mais</p>
          <h2>Espaços personalizados, pensados para funcionar e permanecer.</h2>
        </div>
        <div className="manifesto-copy">
          <p>
            A Arquitetura Mais parte de uma premissa simples: um bom projeto precisa refletir a identidade de quem vai usar o espaço e responder bem à vida real.
          </p>
          <p>
            Conforto, estética e funcionalidade continuam no centro do trabalho — agora apresentados de forma mais direta, contemporânea e conectada à experiência de cada projeto.
          </p>
        </div>
      </section>

      <section id="projetos" className="projects section">
        <div className="shell section-heading split-heading">
          <div>
            <p className="kicker">Projetos</p>
            <h2>Três contextos.<br/>Uma mesma atenção ao detalhe.</h2>
          </div>
          <p>Residências, empresas e negócios têm necessidades diferentes. O projeto começa entendendo essas diferenças.</p>
        </div>
        <div className="project-grid shell">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <Image src={project.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className="project-image" />
              <div className="project-overlay" />
              <div className="project-copy">
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicos" className="services section shell">
        <div className="section-heading service-heading">
          <p className="kicker">Como atuamos</p>
          <h2>Projeto, decisões e execução na mesma direção.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature section">
        <div className="feature-image-wrap">
          <Image src="/images/projeto-detalhe.webp" alt="Ambiente corporativo projetado pela Arquitetura Mais" fill sizes="(max-width: 900px) 100vw, 55vw" className="feature-image" />
        </div>
        <div className="feature-copy">
          <p className="kicker light">Propósito</p>
          <h2>Valorizar o espaço sem separar beleza de uso.</h2>
          <p>
            A proposta do escritório é unir conforto, estética e funcionalidade para criar ambientes coerentes com a identidade de cada cliente.
          </p>
          <a className="text-link light" href={WHATSAPP} target="_blank" rel="noreferrer">Conversar sobre um projeto <span>↗</span></a>
        </div>
      </section>

      <section id="escritorio" className="studio section shell">
        <div className="studio-images">
          <div className="studio-main">
            <Image src="/images/socias.webp" alt="Juliana Corradi e Josiany Frediani, da Arquitetura Mais" fill sizes="(max-width: 900px) 100vw, 45vw" className="cover" />
          </div>
          <div className="studio-detail">
            <Image src="/images/processo.webp" alt="Profissional da equipe trabalhando em projeto de arquitetura" fill sizes="(max-width: 900px) 45vw, 22vw" className="cover" />
          </div>
        </div>
        <div className="studio-copy">
          <p className="kicker">O escritório</p>
          <h2>Duas especialidades que se encontram no projeto.</h2>
          <p>
            Juliana Corradi, arquiteta especialista em Neuroarquitetura, e Josiany Frediani, arquiteta com foco em Gestão de Projetos e Obra, estão à frente da Arquitetura Mais.
          </p>
          <p>
            Juntas, conduzem um escritório com mais de uma década de atuação em projetos residenciais, corporativos e comerciais, combinando diferentes repertórios e perspectivas.
          </p>
          <div className="founders">
            <div><strong>Juliana Corradi</strong><span>Neuroarquitetura</span></div>
            <div><strong>Josiany Frediani</strong><span>Gestão de Projetos e Obra</span></div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="shell team-heading">
          <div>
            <p className="kicker light">Equipe</p>
            <h2>Arquitetura é trabalho coletivo.</h2>
          </div>
          <p>Um time envolvido em transformar decisões de projeto em espaços bem resolvidos.</p>
        </div>
        <div className="team-photo shell">
          <Image src="/images/equipe.webp" alt="Equipe da Arquitetura Mais" fill sizes="100vw" className="cover" />
        </div>
      </section>

      <section id="contato" className="contact section shell">
        <div className="contact-title">
          <p className="kicker">Comece uma conversa</p>
          <h2>Tem um espaço para transformar?</h2>
        </div>
        <div className="contact-copy">
          <p>Conte o que você está planejando. O primeiro passo pode ser uma conversa direta pelo WhatsApp.</p>
          <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com a Arquitetura Mais</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <Image src="/images/logo.webp" alt="Arquitetura Mais" width={150} height={82} />
          <div>
            <span>Endereço</span>
            <p>Alameda Caulim, 115 · sala 606<br/>Espaço Cerâmica · São Caetano do Sul/SP</p>
          </div>
          <div>
            <span>Contato</span>
            <p><a href={WHATSAPP} target="_blank" rel="noreferrer">+55 (11) 98185-7346</a><br/><a href={INSTAGRAM} target="_blank" rel="noreferrer">@arquiteturamaiss</a></p>
          </div>
          <div className="footer-note">© {new Date().getFullYear()} Arquitetura Mais</div>
        </div>
      </footer>
    </main>
  );
}
