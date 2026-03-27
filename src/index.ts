import 'dotenv/config';
import { createServer } from './api/server';
import { Orchestrator } from './pipeline/orchestrator';

async function main() {
  const port = process.env.PORT ?? 3100;

  // Start API server
  const app = createServer();
  app.listen(port, () => {
    console.log(`VectorClose API running on port ${port}`);
  });

  // Initialize orchestrator
  const orchestrator = new Orchestrator();
  await orchestrator.init();

  console.log('VectorClose engine initialized. Campaigns active.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
