export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  sections: {
    heading: string;
    content: string;
  }[];
  highlights: {
    value: string;
    label: string;
  }[];
  offerings: string[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
}

export const industriesData: Industry[] = [
  {
    slug: "pharma-biotech",
    title: "Pharma & Biotech",
    tagline:
      "Strategic transformation and commercial operations advisory for large pharma, specialty pharma, and emerging biotech companies",
    description:
      "The pharmaceutical and biotech industry is undergoing a generational shift — from blockbuster models to precision medicine, from field-force-driven to omnichannel engagement, from manual operations to AI-enabled workflows. Dr. Kurr has spent over 20 years at the heart of this transformation, leading global change programs at Boehringer Ingelheim and Novartis, and now advising biotech companies through Dr. Kurr Advisory and his fractional CCO role at Lemna Bio.",
    sections: [
      {
        heading: "Large Pharma Transformations",
        content:
          "Large pharma organizations face a unique challenge: transforming at scale without disrupting commercial operations or regulatory compliance. Dr. Kurr has led enterprise-wide transformation programs at Boehringer Ingelheim and Novartis, redesigning operating models, building global service organizations, and implementing digital workflows across dozens of markets simultaneously. His approach — structure follows process follows strategy — ensures that reorganizations create real operational improvement, not just new reporting lines. At Boehringer Ingelheim, this approach delivered a tenfold organization expansion and full global coverage in four years.",
      },
      {
        heading: "Specialty Pharma Scale-Up",
        content:
          "Specialty pharma companies operate in a different paradigm — smaller patient populations, complex distribution, and specialized HCP engagement. Scaling commercial operations in specialty pharma requires operating models that are lean but sophisticated: targeted go-to-market strategies, efficient content supply chains, and compliance frameworks adapted to niche therapeutic areas. Dr. Kurr helps specialty pharma organizations build scalable commercial infrastructure without the overhead of large pharma organizational complexity.",
      },
      {
        heading: "Emerging Biotech Commercialization",
        content:
          "For emerging biotech companies transitioning from R&D to commercial stage, the leap to market readiness is one of the most critical — and most frequently mismanaged — milestones. Dr. Kurr's fractional C-level model is purpose-built for this transition: providing experienced commercial leadership without the full-time cost. At Lemna Bio, he leads commercial strategy and partnership development for a computational drug design company, bringing the same rigor he applied at Boehringer Ingelheim to a pre-commercial biotech context. This includes market shaping, commercial partnership structuring, go-to-market planning, and organizational readiness.",
      },
      {
        heading: "Go-to-Market Redesign",
        content:
          "Traditional pharma go-to-market models — field-force-centric, territory-based, and siloed by function — are no longer fit for purpose. Modern go-to-market requires omnichannel orchestration, data-driven targeting, and integrated commercial-medical engagement. Dr. Kurr built Boehringer Ingelheim's go-to-market services organization from scratch, including a Digital Content Factory, Creative Factory, and Global Services Delivery Unit. His strategic partnership with Indegene transformed go-to-market operations across global markets, enabling more agile, data-driven, omnichannel physician and patient engagement.",
      },
    ],
    highlights: [
      { value: "20+", label: "Years in pharma transformation" },
      { value: "10x", label: "Organization growth at Boehringer Ingelheim" },
      { value: "#1", label: "Content supply chain in the industry" },
    ],
    offerings: [
      "Large pharma transformations",
      "Specialty pharma scale-up",
      "Emerging biotech commercialization",
      "Go-to-market redesign",
      "Omnichannel engagement strategy",
    ],
    relatedLinks: [
      {
        label: "About Lemna Bio — Computational Drug Design",
        href: "https://www.lemnabio.com/",
      },
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "medtech-diagnostics",
    title: "MedTech & Diagnostics",
    tagline:
      "Commercial operations optimization, digital health strategy, and device company scaling for MedTech and diagnostics organizations",
    description:
      "MedTech and diagnostics companies face a distinct set of challenges: complex regulatory pathways, reimbursement uncertainty, and the need to scale commercial operations rapidly in competitive markets. Dr. Kurr brings direct experience in this sector — through his Fellowship at THENA Capital, a UK-based specialist MedTech investor, and his earlier career at Roche Diagnostics — combined with transferable transformation expertise from large pharma.",
    sections: [
      {
        heading: "Commercial Operations Optimization",
        content:
          "MedTech commercial operations often evolve organically, creating complexity that hampers growth. Sales processes, distributor management, customer service, and field operations accumulate layers of inefficiency as companies scale from startup to mid-market. Dr. Kurr applies the same operating model discipline that transformed large pharma operations to MedTech — identifying process bottlenecks, redesigning workflows, and implementing scalable service delivery models. The key difference is pace: MedTech transformations must move faster, with less organizational inertia but also fewer resources to absorb transition costs.",
      },
      {
        heading: "Digital Health Strategy",
        content:
          "Digital health is reshaping the MedTech landscape — from connected devices and remote monitoring to AI-powered diagnostics and digital therapeutics. But technology alone does not create value. Dr. Kurr helps MedTech companies develop digital health strategies that connect technology capabilities to commercial outcomes: which digital features drive adoption, how to position digital solutions for reimbursement, and how to build the operational infrastructure to support digital-physical hybrid products. His work at THENA Capital provides insight into what investors look for in digital health companies, informing strategy from both the operator and investor perspectives.",
      },
      {
        heading: "Device Company Scaling",
        content:
          "Scaling a device company from early-stage to commercial success requires navigating regulatory approvals, building manufacturing and supply chain capabilities, establishing distribution networks, and building a commercial organization — often simultaneously. Dr. Kurr's fractional C-level model provides the executive bandwidth needed during this critical phase. His experience building organizations from scratch at Boehringer Ingelheim translates directly to the device company context: the same principles of structure follows process follows strategy apply, adapted to the faster timelines and leaner resources of the MedTech sector.",
      },
      {
        heading: "Market Access and Reimbursement",
        content:
          "Reimbursement is the single most important commercial lever for many MedTech and diagnostics companies. Without a clear pathway to reimbursement, even breakthrough technologies fail commercially. Dr. Kurr helps companies develop market access strategies that begin early — during product development — and integrate health economics, clinical evidence generation, and payer engagement into the overall commercial strategy. His cross-industry experience ensures that market access is not treated as a standalone function but as an integral part of the go-to-market model.",
      },
    ],
    highlights: [
      { value: "THENA", label: "Fellow at specialist MedTech investor" },
      { value: "Roche", label: "Direct diagnostics industry experience" },
      { value: "20+", label: "Years of cross-industry transformation" },
    ],
    offerings: [
      "Commercial operations optimization",
      "Digital health strategy",
      "Device company scaling",
      "Market access and reimbursement",
      "Distributor and channel management",
    ],
    relatedLinks: [
      {
        label: "THENA Capital — MedTech Investment",
        href: "https://thenacapital.com/",
      },
    ],
  },
  {
    slug: "life-sciences-services",
    title: "Life Sciences Services",
    tagline:
      "CRO/CDMO optimization, contract commercialization, and global capability build-out for life sciences service organizations",
    description:
      "Life sciences services companies — CROs, CDMOs, contract commercial organizations, and specialized service providers — operate at the intersection of operational excellence and client service. Dr. Kurr's experience building and scaling internal service organizations at Boehringer Ingelheim, combined with his research on cooperation management, provides a unique perspective on optimizing service delivery, client relationships, and operational scalability in this sector.",
    sections: [
      {
        heading: "CRO / CDMO Optimization",
        content:
          "Contract research and manufacturing organizations face constant pressure to improve efficiency, reduce timelines, and maintain quality across an increasingly complex portfolio of client engagements. Dr. Kurr's expertise in global operating model design — including shared services, offshoring, and process standardization — applies directly to CRO/CDMO operations. His approach focuses on identifying which processes can be standardized and centralized, which require local flexibility, and how to build governance structures that balance efficiency with client-specific requirements. The result is an operating model that scales without sacrificing quality or responsiveness.",
      },
      {
        heading: "Contract Commercialization (CCO)",
        content:
          "Contract commercial organizations provide outsourced commercial capabilities — from sales force deployment to medical affairs support to content production. Dr. Kurr built exactly this type of organization inside Boehringer Ingelheim, giving him a unique insider perspective on what makes contract commercial services successful. He understands both sides: what the client organization needs (flexibility, quality, cost predictability) and what the service organization needs (standardization, talent development, technology infrastructure). This dual perspective makes his advisory work with CCOs and CSOs uniquely practical and grounded.",
      },
      {
        heading: "Service Delivery Transformation",
        content:
          "Service delivery in life sciences is being transformed by technology — AI-enabled workflows, automated quality checks, digital collaboration platforms, and data-driven performance management. But technology adoption in service organizations requires careful change management: client-facing teams resist changes that might disrupt established relationships, and quality standards in regulated environments create additional constraints. Dr. Kurr's experience managing precisely this type of transformation at Boehringer Ingelheim — introducing AI and digital tools into regulated service delivery workflows — provides the practical blueprint for life sciences service organizations looking to modernize.",
      },
      {
        heading: "Global Capability Build-Out",
        content:
          "Life sciences service companies expanding globally face the challenge of replicating service quality across different geographies while adapting to local regulatory requirements, talent markets, and client expectations. Dr. Kurr achieved full geographical scale at Boehringer Ingelheim within four years, starting with the Singapore/ASKAN region and expanding to cover all markets worldwide. His stage-gate transition planning methodology — piloting in select geographies, stabilizing, and then scaling — de-risks global expansion and ensures consistent service delivery across markets.",
      },
    ],
    highlights: [
      { value: "4 years", label: "From zero to full global scale" },
      { value: "#1", label: "Content supply chain in pharma" },
      { value: "10x", label: "Service organization growth" },
    ],
    offerings: [
      "CRO / CDMO optimization",
      "Contract commercialization (CCO)",
      "Service delivery transformation",
      "Global capability build-out",
      "Client relationship and governance design",
    ],
    relatedLinks: [
      {
        label: "From Concept to Reality — CIOLook Feature",
        href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
      },
    ],
  },
  {
    slug: "healthtech-digital-health",
    title: "HealthTech & Digital Health",
    tagline:
      "Enterprise AI adoption, platform go-to-market strategy, and regulatory technology strategy for HealthTech and digital health companies",
    description:
      "HealthTech and digital health companies are building the infrastructure that will power the next generation of healthcare delivery. But the path from innovative technology to commercial success in healthcare is uniquely challenging — regulatory complexity, long sales cycles, reimbursement uncertainty, and the need to integrate with legacy clinical workflows. Dr. Kurr brings a rare combination of deep pharma industry knowledge and hands-on digital transformation experience to help HealthTech companies navigate this landscape.",
    sections: [
      {
        heading: "Enterprise AI Adoption",
        content:
          "Enterprise AI in healthcare is not just about algorithms — it is about governance, integration, and trust. Healthcare organizations adopt AI slowly because the stakes are high: patient safety, regulatory compliance, and clinical validation requirements create barriers that do not exist in other industries. Dr. Kurr helps HealthTech companies understand and navigate these barriers, developing go-to-market strategies that address enterprise buyers' concerns around governance, data privacy, and clinical validation. His experience building AI-enabled operations at Boehringer Ingelheim — within strict regulatory and compliance frameworks — provides the practical insight that HealthTech companies need to sell into pharma and healthcare organizations.",
      },
      {
        heading: "Platform Go-to-Market Strategy",
        content:
          "HealthTech platforms face a classic chicken-and-egg problem: they need users to demonstrate value, but they need to demonstrate value to attract users. Dr. Kurr helps platform companies develop go-to-market strategies that break this cycle — identifying beachhead use cases, designing partnership-driven adoption models, and building the commercial organization needed to sell complex platform solutions to enterprise healthcare buyers. His experience with strategic partnerships and ecosystem design, grounded in his published research on cooperation management, is particularly relevant for platform businesses that depend on partner ecosystems for distribution and integration.",
      },
      {
        heading: "Regulatory Technology Strategy",
        content:
          "RegTech in healthcare is an emerging category with enormous potential — automating compliance workflows, streamlining regulatory submissions, and enabling real-time pharmacovigilance monitoring. But selling regulatory technology to pharma and healthcare organizations requires deep understanding of their regulatory processes, compliance requirements, and risk tolerance. Dr. Kurr bridges this gap: his operational experience inside pharma organizations means he understands the buyer's perspective, while his advisory role allows him to help HealthTech companies position their products effectively. This includes regulatory strategy consulting, compliance framework design, and go-to-market planning specifically for RegTech solutions.",
      },
      {
        heading: "Health Data Analytics Operations",
        content:
          "Health data analytics is only as good as the operational infrastructure behind it — data pipelines, governance frameworks, quality assurance processes, and the organizational capabilities to act on insights. Dr. Kurr helps HealthTech companies build the operational backbone that turns data analytics capabilities into sustainable commercial advantage. His experience building content supply chains and digital operations at Boehringer Ingelheim provides a transferable blueprint: the same principles of process standardization, quality management, and scalable delivery apply to health data analytics operations. His MIT Sloan executive education in digital business and his AI fellowship with the University of Tübingen provide the academic foundation for this work.",
      },
    ],
    highlights: [
      { value: "MIT", label: "Executive Certificate in Digital Business" },
      { value: "3", label: "IMD digital strategy programs" },
      { value: "AI", label: "Fellowship with University of Tübingen" },
    ],
    offerings: [
      "Enterprise AI adoption strategy",
      "Platform go-to-market strategy",
      "Regulatory technology strategy",
      "Health data analytics operations",
      "Digital health commercial planning",
    ],
    relatedLinks: [
      {
        label: "MIT Sloan Executive Education — Digital Business",
        href: "https://executive.mit.edu/",
      },
      {
        label: "THENA Capital — MedTech Investment",
        href: "https://thenacapital.com/",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industriesData.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industriesData.map((i) => i.slug);
}
