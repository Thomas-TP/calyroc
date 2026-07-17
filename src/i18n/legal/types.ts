export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPage {
  title: string;
  /** Distinct per document -- avoids all 3 legal pages sharing the site's
   * generic homepage description in search results. */
  metaDescription: string;
  updated: string;
  sections: LegalSection[];
}
