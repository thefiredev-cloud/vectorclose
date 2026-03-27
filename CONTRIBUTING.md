# Contributing to VectorClose

Thanks for your interest in contributing. VectorClose is built by [The Fire Dev LLC](https://thefiredev.com).

## Getting Started

1. Fork the repo
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/vectorclose.git`
3. Create a feature branch: `git checkout -b feat/your-feature-name`
4. Install dependencies: `npm install`
5. Copy env: `cp .env.example .env` and fill in required keys
6. Run tests: `npm test`
7. Make your changes
8. Push and open a pull request against `main`

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/description` | `feat/add-linkedin-outreach` |
| Bug fix | `fix/description` | `fix/reply-detection-edge-case` |
| Docs | `docs/description` | `docs/update-api-reference` |
| Refactor | `refactor/description` | `refactor/prospect-agent` |
| Chore | `chore/description` | `chore/upgrade-dependencies` |

## Pull Request Requirements

- [ ] Tests pass (`npm test`)
- [ ] TypeScript compiles (`npm run build`)
- [ ] New features include tests
- [ ] PR description explains what changed and why
- [ ] No secrets or credentials committed
- [ ] No console.log statements in production code

## Code Style

- TypeScript strict mode enabled
- ESLint + Prettier enforced (runs on commit via husky)
- Prefer `async/await` over raw Promise chains
- Errors must be typed — no `catch (e: any)`
- All public functions require JSDoc comments

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add congressional trade lag analysis
fix: handle empty reply in objection agent
docs: update quick start section
chore: bump @anthropic-ai/sdk to 0.20.0
```

## Reporting Issues

Use [GitHub Issues](https://github.com/thefiredev/vectorclose/issues). Include:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Your environment (Node version, OS, etc.)

## Security Issues

Do **not** open a public issue for security vulnerabilities. See [SECURITY.md](SECURITY.md).

## Questions

Join our [Discord](https://discord.gg/thefiredev) or email team@thefiredev.com.

---

Built by [The Fire Dev LLC](https://thefiredev.com)
