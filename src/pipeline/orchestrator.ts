/**
 * Orchestrator
 *
 * Coordinates all VectorClose agents through the deal lifecycle.
 * Manages state machine transitions and agent handoffs.
 */

export class Orchestrator {
  async init(): Promise<void> {
    // TODO: initialize BullMQ workers, connect to Redis, start pipeline
    throw new Error('Not implemented');
  }

  async processCampaign(campaignId: string): Promise<void> {
    // TODO: prospect → research → outreach → object → negotiate → close
    throw new Error('Not implemented');
  }
}
