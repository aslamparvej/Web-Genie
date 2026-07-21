export interface GenerateSitePayload {
  businessName: string;
  businessCategory: string;
  primaryColor: string;
  description: string;
}

export interface GenerateSiteResponse {
  success: boolean;
  data: {
    siteId: string;
    siteUrl: string;
  };
  message?: string;
}