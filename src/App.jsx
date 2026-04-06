import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LegalResearchPage from './pages/LegalResearchPage'
import DocumentDraftingPage from './pages/DocumentDraftingPage'
import CasePreparationPage from './pages/CasePreparationPage'
import ContractReviewPage from './pages/ContractReviewPage'
import FastTurnaroundPage from './pages/FastTurnaroundPage'
import ComplianceAuditPage from './pages/ComplianceAuditPage'
import CaseLawResearchPage from './pages/CaseLawResearchPage'
import StatutoryLawResearchPage from './pages/StatutoryLawResearchPage'
import LegalPrecedentAnalysisPage from './pages/LegalPrecedentAnalysisPage'
import DatabaseBasedResearchPage from './pages/DatabaseBasedResearchPage'
import RegulatoryCompliancePage from './pages/RegulatoryCompliancePage'
import LegalIssueIdentificationPage from './pages/LegalIssueIdentificationPage'
import CaseComparisonReportsPage from './pages/CaseComparisonReportsPage'
import IndustrySpecificResearchPage from './pages/IndustrySpecificResearchPage'
import AnnotatedLegalBibliographyPage from './pages/AnnotatedLegalBibliographyPage'
import ExpertWitnessResearchPage from './pages/ExpertWitnessResearchPage'
import NDADraftingPage from './pages/NDADraftingPage'
import LeaseAgreementDraftingPage from './pages/LeaseAgreementDraftingPage'
import PartnershipAgreementDraftingPage from './pages/PartnershipAgreementDraftingPage'
import SaaSAgreementDraftingPage from './pages/SaaSAgreementDraftingPage'
import TermsConditionsDraftingPage from './pages/TermsConditionsDraftingPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import LegalNoticesDraftingPage from './pages/LegalNoticesDraftingPage'
import MemorandumDraftingPage from './pages/MemorandumDraftingPage'
import EmploymentContractsPage from './pages/EmploymentContractsPage'
import ServiceAgreementsPage from './pages/ServiceAgreementsPage'
import ShareholderAgreementsPage from './pages/ShareholderAgreementsPage'
import FreelancerContractsPage from './pages/FreelancerContractsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import WebsiteDisclaimersPage from './pages/WebsiteDisclaimersPage'
import AffidavitsDeclarationsPage from './pages/AffidavitsDeclarationsPage'
import SettlementAgreementsPage from './pages/SettlementAgreementsPage'
import UKVisaDocumentationPage from './pages/UKVisaDocumentationPage'
import ImmigrationFormsPreparationPage from './pages/ImmigrationFormsPreparationPage'
import CaseFileOrganizationPage from './pages/CaseFileOrganizationPage'
import SupportingDocumentChecklistsPage from './pages/SupportingDocumentChecklistsPage'
import CoverLetterDraftingPage from './pages/CoverLetterDraftingPage'
import AppealDocumentationSupportPage from './pages/AppealDocumentationSupportPage'
import CaseStudiesPage from './pages/CaseStudiesPage'





import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] font-sans selection:bg-[#A07A41] selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/legal-research" element={<LegalResearchPage />} />
          <Route path="/services/document-drafting" element={<DocumentDraftingPage />} />
          <Route path="/services/case-preparation" element={<CasePreparationPage />} />
          <Route path="/services/contract-review" element={<ContractReviewPage />} />
          <Route path="/services/fast-turnaround" element={<FastTurnaroundPage />} />
          <Route path="/services/compliance-audit" element={<ComplianceAuditPage />} />
          <Route path="/services/uk-legal-research/case-law" element={<CaseLawResearchPage />} />
          <Route path="/services/uk-legal-research/statutory-law" element={<StatutoryLawResearchPage />} />
          <Route path="/services/uk-legal-research/legal-precedent" element={<LegalPrecedentAnalysisPage />} />
          <Route path="/services/uk-legal-research/database-research" element={<DatabaseBasedResearchPage />} />
          <Route path="/services/uk-legal-research/regulatory-compliance" element={<RegulatoryCompliancePage />} />
          <Route path="/services/uk-legal-research/legal-issue-identification" element={<LegalIssueIdentificationPage />} />
          <Route path="/services/uk-legal-research/case-comparison" element={<CaseComparisonReportsPage />} />
          <Route path="/services/uk-legal-research/industry-specific" element={<IndustrySpecificResearchPage />} />
          <Route path="/services/uk-legal-research/annotated-bibliography" element={<AnnotatedLegalBibliographyPage />} />
          <Route path="/services/uk-legal-research/expert-witness" element={<ExpertWitnessResearchPage />} />
          <Route path="/services/contract-drafting/nda" element={<NDADraftingPage />} />
          <Route path="/services/contract-drafting/lease-agreement" element={<LeaseAgreementDraftingPage />} />
          <Route path="/services/contract-drafting/partnership-agreement" element={<PartnershipAgreementDraftingPage />} />
          <Route path="/services/contract-drafting/saas-agreement" element={<SaaSAgreementDraftingPage />} />
          <Route path="/services/contract-drafting/terms-conditions" element={<TermsConditionsDraftingPage />} />
          <Route path="/services/contract-drafting/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/services/contract-drafting/legal-notices" element={<LegalNoticesDraftingPage />} />
          <Route path="/services/contract-drafting/memorandum" element={<MemorandumDraftingPage />} />
          <Route path="/services/contract-drafting/employment-contracts" element={<EmploymentContractsPage />} />
          <Route path="/services/contract-drafting/service-agreement" element={<ServiceAgreementsPage />} />
          <Route path="/services/contract-drafting/shareholder-agreement" element={<ShareholderAgreementsPage />} />
          <Route path="/services/contract-drafting/freelancer-contract" element={<FreelancerContractsPage />} />
          <Route path="/services/contract-drafting/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/services/contract-drafting/website-disclaimers" element={<WebsiteDisclaimersPage />} />
          <Route path="/services/contract-drafting/affidavits" element={<AffidavitsDeclarationsPage />} />
          <Route path="/services/contract-drafting/settlement-agreements" element={<SettlementAgreementsPage />} />
          <Route path="/services/immigration-support/uk-visa-documentation" element={<UKVisaDocumentationPage />} />
          <Route path="/services/immigration-support/immigration-forms-preparation" element={<ImmigrationFormsPreparationPage />} />
          <Route path="/services/immigration-support/case-file-organization" element={<CaseFileOrganizationPage />} />
          <Route path="/services/immigration-support/supporting-document-checklists" element={<SupportingDocumentChecklistsPage />} />
          <Route path="/services/immigration-support/cover-letter-drafting" element={<CoverLetterDraftingPage />} />
          <Route path="/services/immigration-support/appeal-documentation-support" element={<AppealDocumentationSupportPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />

        </Routes>






















        <Footer />
      </div>
    </Router>
  )
}

export default App
