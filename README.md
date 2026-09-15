# Arquitetura Mais

Novo site institucional da Arquitetura Mais, reconstruído em Next.js para publicação na Vercel.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

O projeto está conectado à Vercel. Commits na branch `main` disparam novo deploy automaticamente.

## Curadoria de imagens

A home foi preparada para funcionar como base de revisão com a cliente. As imagens ficam centralizadas no objeto `MEDIA`, no início de `app/page.js`, para que futuras trocas não exijam refazer o layout.

| Slot | Função | Critério principal |
| --- | --- | --- |
| `hero` | abertura do site | foto horizontal de maior impacto, com respiro para headline |
| `project-01` | residencial | projeto com leitura claramente residencial |
| `project-02` | corporativo | projeto com leitura claramente corporativa |
| `project-03` | comercial | projeto com leitura claramente comercial |
| `statement` | manifesto | foto gráfica, com linhas, luz, materialidade ou perspectiva forte |
| `founders` | escritório | foto de Juliana Corradi e Josiany Frediani |
| `team` | equipe | manter apenas se a foto justificar uma seção própria |
| `contact` | fechamento | imagem mais silenciosa, de processo, detalhe ou ambiente |

Cada slot aceita `src` e `position`, permitindo trocar o arquivo e ajustar o enquadramento por `object-position` sem alterar a estrutura da página.

### Regra editorial

A V1 não inventa nomes de projetos, metragem, cidade ou ano. Até a aprovação da cliente, os projetos são identificados apenas como Residencial, Corporativo e Comercial. Quando vierem as informações definitivas, a estrutura pode evoluir para páginas individuais de projeto sem refazer a direção visual da home.
