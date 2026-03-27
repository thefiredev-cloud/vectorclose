<div align="center">

# VectorClose

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/vectorclose/ci.yml?branch=main&style=flat-square&logo=github)](https://github.com/thefiredev/vectorclose/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/vectorclose?style=flat-square&logo=codecov)](https://codecov.io/gh/thefiredev/vectorclose)
[![Version](https://img.shields.io/github/package-json/v/thefiredev/vectorclose?style=flat-square)](https://github.com/thefiredev/vectorclose/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Your sales team that never sleeps.**

*Autonomous B2B sales closer. Zero human touch.*

[Website](https://thefiredev.com/vectorclose) · [Documentation](https://docs.thefiredev.com/vectorclose) · [Discord](https://discord.gg/thefiredev) · [Request Demo](https://thefiredev.com/demo)

</div>

---

## What is VectorClose?

VectorClose is a fully autonomous B2B sales engine. Feed it your ICP (Ideal Customer Profile) and it handles the entire revenue cycle — prospect identification, personalized research, multi-touch outreach, real-time objection handling, pricing negotiation, contract generation, and close — with zero human involvement.

It doesn't hand leads to your sales team. **It is your sales team.**

---

## Key Value Props

| | |
|---|---|
| 🎯 **Full-Cycle Autonomy** | Prospect → research → outreach → negotiate → close. Every step. |
| 🧠 **Intelligent Personalization** | Deep company research before every first touch. No spray-and-pray. |
| ⚡ **24/7 Operation** | Runs continuously across timezones. Never takes a day off. |
| 📊 **Self-Optimizing** | A/B tests messaging, learns from replies, improves conversion rate over time. |
| 🔗 **Native Integrations** | Apollo, Instantly, Resend, HubSpot, Salesforce, Stripe. Plug and play. |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      VectorClose Engine                       │
│                                                               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐   │
│  │   Prospect   │───▶│   Research   │───▶│   Outreach   │   │
│  │    Agent     │    │    Agent     │    │    Agent     │   │
│  │  (Apollo)    │    │ (Web + LLM)  │    │ (Instantly)  │   │
│  └──────────────┘    └──────────────┘    └──────────────┘   │
│                                                  │            │
│  ┌──────────────┐    ┌──────────────┐    ┌──────▼───────┐   │
│  │    Close     │◀───│  Negotiate   │◀───│   Objection  │   │
│  │    Agent     │    │    Agent     │    │    Agent     │   │
│  │  (DocuSign)  │    │  (LLM + RAG) │    │  (LLM + RAG) │   │
│  └──────────────┘    └──────────────┘    └──────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │           Orchestrator + Memory Layer                 │    │
│  │        (Redis · Postgres · Vector DB)                 │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
           │                │                │
      ┌────▼────┐     ┌─────▼────┐     ┌────▼────┐
      │  CRM    │     │  Email   │     │ Contract │
      │ Sync    │     │ Tracking │     │   Gen    │
      └─────────┘     └──────────┘     └─────────┘
```

---

## Features

### 🔍 Intelligent Prospecting
- ICP-driven search via Apollo API (300M+ contact database)
- Intent signal detection (job posts, funding rounds, tech stack changes)
- Real-time MX validation before any send
- Company enrichment: revenue, headcount, tech stack, recent news

### 📝 Deep Research Engine
- Scrapes company website, LinkedIn, news, SEC filings
- Identifies key pain points, recent wins, competitive landscape
- Generates hyper-personalized first-touch context
- Stores structured intel in vector database for future touches

### 📬 Multi-Channel Outreach
- Email sequences via Instantly (domain-warmed, deliverability-optimized)
- Transactional sends via Resend
- LinkedIn connection requests (manual approval optional)
- Automated follow-up cadences with reply detection

### 🤝 Objection Handling
- Real-time reply classification (interested / not now / unsubscribe / objection)
- LLM-powered objection responses with company-specific context
- Escalation routing to human when confidence < threshold

### 💰 Negotiation & Close
- Pricing guardrails with dynamic discount authority
- Contract generation from pre-approved templates
- DocuSign envelope creation and send
- CRM deal stage sync on every state change

---

## Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169e1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.x-dc382d?style=flat-square&logo=redis)](https://redis.io/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Apollo](https://img.shields.io/badge/Apollo-API-7c3aed?style=flat-square)](https://www.apollo.io/)

| Layer | Technology |
|---|---|
| Runtime | Node.js 20 + TypeScript |
| LLM | OpenAI GPT-4o / Claude 3.5 Sonnet |
| Prospecting | Apollo.io API |
| Email Outreach | Instantly API |
| Transactional Email | Resend |
| Database | PostgreSQL 16 + pgvector |
| Cache / Queue | Redis + BullMQ |
| CRM | HubSpot / Salesforce (configurable) |
| Contracts | DocuSign API |

---

## Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 16+ with pgvector extension
- Redis 7+
- API keys: Apollo, Instantly, Resend, OpenAI

### Installation

```bash
git clone https://github.com/thefiredev/vectorclose.git
cd vectorclose
npm install
cp .env.example .env
# Fill in your API keys in .env
npm run db:migrate
npm run dev
```

### Configure Your ICP

```typescript
// config/icp.ts
export const icp = {
  industries: ["SaaS", "FinTech", "HealthTech"],
  companySize: { min: 10, max: 500 },
  titles: ["VP Sales", "Head of Revenue", "CRO", "CEO"],
  geos: ["United States"],
  techStack: ["Salesforce", "HubSpot"],
  fundingStage: ["Series A", "Series B"]
};
```

### Launch a Campaign

```bash
npm run campaign:create -- --name "Q1 SaaS Push" --icp config/icp.ts
npm run campaign:start -- --id <campaign-id>
```

### Monitor

```bash
npm run dashboard  # Opens local dashboard at http://localhost:3100
```

---

## API Reference

### POST /api/campaigns

Create a new outreach campaign.

```json
{
  "name": "string",
  "icp": {
    "industries": ["string"],
    "companySize": { "min": 0, "max": 0 },
    "titles": ["string"]
  },
  "sequence": {
    "steps": 3,
    "intervalDays": 3
  },
  "dailyLimit": 80
}
```

### GET /api/campaigns/:id/stats

```json
{
  "prospects": 1240,
  "contacted": 847,
  "replied": 63,
  "meetings": 12,
  "closed": 3,
  "revenue": 47000
}
```

### POST /api/campaigns/:id/pause

Pause all outreach for a campaign.

### Full API docs → [docs.thefiredev.com/vectorclose/api](https://docs.thefiredev.com/vectorclose/api)

---

## Configuration

```env
# Required
APOLLO_API_KEY=
INSTANTLY_API_KEY=
RESEND_API_KEY=
OPENAI_API_KEY=
DATABASE_URL=postgresql://...
REDIS_URL=redis://...

# Optional
HUBSPOT_API_KEY=
SALESFORCE_ACCESS_TOKEN=
DOCUSIGN_INTEGRATION_KEY=
DAILY_EMAIL_LIMIT=80
MIN_CONFIDENCE_THRESHOLD=0.75
ENABLE_LINKEDIN=false
```

---

## Project Structure

```
vectorclose/
├── src/
│   ├── agents/
│   │   ├── prospect.agent.ts      # Apollo prospecting
│   │   ├── research.agent.ts      # Company research + enrichment
│   │   ├── outreach.agent.ts      # Email sequence management
│   │   ├── objection.agent.ts     # Reply handling + classification
│   │   ├── negotiate.agent.ts     # Pricing + discount logic
│   │   └── close.agent.ts         # Contract gen + DocuSign
│   ├── pipeline/
│   │   ├── orchestrator.ts        # Agent coordination
│   │   ├── state-machine.ts       # Deal stage FSM
│   │   └── queue.ts               # BullMQ job management
│   ├── integrations/
│   │   ├── apollo.ts
│   │   ├── instantly.ts
│   │   ├── resend.ts
│   │   ├── hubspot.ts
│   │   └── docusign.ts
│   ├── api/
│   │   ├── routes/
│   │   └── server.ts
│   └── utils/
│       ├── llm.ts
│       └── vector.ts
├── config/
├── prisma/
├── tests/
└── scripts/
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Security

See [SECURITY.md](SECURITY.md). Report vulnerabilities to security@thefiredev.com.

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*Agent-as-a-Service. We build the systems. You keep the revenue.*

[thefiredev.com](https://thefiredev.com) · [X](https://x.com/thefiredev) · [LinkedIn](https://linkedin.com/company/thefiredev)

</div>
