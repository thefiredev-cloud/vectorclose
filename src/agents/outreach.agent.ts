/**
 * OutreachAgent
 *
 * Manages multi-touch email sequences via Instantly.
 * Monitors replies and routes to appropriate follow-on agents.
 */

export class OutreachAgent {
  constructor(
    private readonly instantlyApiKey: string,
    private readonly resendApiKey: string
  ) {}

  async enqueue(prospectId: string, campaignId: string): Promise<void> {
    // TODO: add prospect to Instantly campaign sequence
    throw new Error('Not implemented');
  }

  async handleReply(replyPayload: unknown): Promise<void> {
    // TODO: classify reply → route to objection/negotiate/close agent
    throw new Error('Not implemented');
  }
}
