/**
 * ProspectAgent
 *
 * Searches Apollo.io for leads matching the configured ICP.
 * Validates email deliverability via MX lookup before returning.
 */

export interface ICP {
  industries: string[];
  companySize: { min: number; max: number };
  titles: string[];
  geos: string[];
  techStack?: string[];
  fundingStage?: string[];
}

export interface Prospect {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  company: string;
  companySize: number;
  industry: string;
  linkedinUrl?: string;
  enrichedAt: Date;
}

export class ProspectAgent {
  constructor(private readonly apolloApiKey: string) {}

  async search(icp: ICP, limit = 100): Promise<Prospect[]> {
    // TODO: implement Apollo.io people/search API call
    throw new Error('Not implemented');
  }

  private async validateMX(email: string): Promise<boolean> {
    // TODO: MX record lookup before adding to outreach queue
    throw new Error('Not implemented');
  }
}
