export interface CertificateData {
  memberName: string;
  membershipNumber: string;
  membershipCategory: string;
  issueDate: string;
  validUntil: string;
}

export const INITIAL_DATA: CertificateData = {
  memberName: '',
  membershipNumber: '',
  membershipCategory: '',
  issueDate: '',
  validUntil: '',
};