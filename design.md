# OptimaXCloud Page Update — Design Specification

## Status and scope

This specification must be reviewed before implementation. This phase updates
the design specification only; it does not change application code.

The change is limited to the existing OptimaXCloud experience in this Angular
application. Keep its current routes, visual identity, and page structure.
Do not create a separate site or introduce new product capabilities.

Existing product routes:

- `/optima-xcloud/`
- `/optima-xcloud/platform/`
- `/optima-xcloud/integrations/`
- `/optima-xcloud/solutions/`
- `/optima-xcloud/migration/`
- `/optima-xcloud/pricing/`
- `/optima-xcloud/documentation/`

## Goals

1. Make the existing OptimaXCloud content useful without requiring visitors to
   navigate to the separate IaaS site for product information.
2. Link the CloudStack, Terraform, and Proxmox integration cards directly to
   their official project or product websites.
3. Remove links to pages on `be.optimaxsuites.com/iaas/` from the OptimaXCloud
   experience. Where relevant information from those pages is available and
   appropriate, present it as first-party content on the corresponding local
   OptimaXCloud page instead.
4. Preserve internal navigation within this application and other existing
   corporate destinations, such as the contact page.
5. Present integration and operational claims accurately; distinguish
   documented approaches from confirmed, live availability.

## Reviewed material and current state

- The source page is
  <https://be.optimaxsuites.com/iaas/xcw/index.html>. Its public content
  describes a cloud workspace for infrastructure catalog, software deployment,
  DNS, billing, observability, and tenant operations; migration and managed
  services; and a provider-adapter approach involving CloudStack, Terraform,
  and Proxmox.
- The source page also links to separate IaaS login, documentation, pricing,
  migration, and integration-guide pages. Do not reproduce those destinations
  as links in this application.
- The application already has the seven routes above, with shared content in
  `optima-xcloud.component.html` and `optima-xcloud.component.ts`. It already
  presents platform, workload, migration, pricing, and documentation content.
- The integration cards already include external technology URLs, but also
  link to source-site integration guides. The migration and pricing sections
  likewise contain source-site links. The documentation page currently
  consists of cards linking to source-site resources.
- The existing product presentation already labels its architecture as
  conceptual and asks visitors to confirm availability. Preserve that
  qualification.

## Link and navigation requirements

### Source-site links to remove

Remove all hyperlinks whose destination is under
`https://be.optimaxsuites.com/iaas/`, including links to the source landing
page, login, pricing, migration, integration guides, user documentation, and
technical documentation. Do not replace these with other links to the same
source host or with broken/local imitations of its login and account flows.

This rule does not remove:

- Internal Angular links between the existing OptimaXCloud routes.
- Existing working corporate links such as `/contact`.
- The official CloudStack, Terraform, or Proxmox websites.

### Official integration links

Each integration card must include a clearly labeled link to its official
technology resource:

- Apache CloudStack: <https://cloudstack.apache.org/>
- Terraform: <https://developer.hashicorp.com/terraform/docs>
- Proxmox: <https://www.proxmox.com/>

Use descriptive link text (for example, “Official CloudStack website”), not
ambiguous “here” text. Because these leave the site, open them in a new tab
with `rel="noopener noreferrer"` and an accessible indication that they open
externally. Do not label these links as OptimaXCloud integration guides.

### Internal page navigation

Keep the current routes and working local links between Overview, Platform,
Integrations, Solutions, Migration, Pricing, and Documentation. The footer and
page sub-navigation should continue to use Angular routing.

## Content requirements

Use the source landing page as a content reference, not as a source of links to
copy. Retain or add relevant first-party explanations on the appropriate
existing pages:

- **Overview:** the unified operations proposition; compute, networking,
  storage, application deployment, DNS, billing, observability, and tenant
  operations; migration and managed-service entry points.
- **Platform:** the service catalog concepts (provider regions, compute and
  storage options, public IPs, VPCs, DNS zones, and firewall profiles), plus
  tenant governance, quotas, backup/recovery, and operational visibility.
- **Integrations:** the conceptual separation between the OptimaXCloud
  workspace and provider-specific operations; concise, accurate descriptions
  of CloudStack, Terraform, and Proxmox and their potential roles.
- **Migration:** the source page’s migration sequence—discover workloads,
  prepare the destination, and coordinate application/DNS cutover—alongside
  the fuller existing assessment, testing, cutover, and support guidance.
- **Documentation:** replace source-linked resource cards with first-party
  summaries or practical reference content based on material actually
  available in the source page and this application. Keep useful topics such as
  user workflows, architecture, integrations, migration, and operational
  considerations on this site rather than linking to the source pages.

Do not imply that a conceptual or described workflow is a live capability.
Do not invent integration status, marketplace counts, customer endorsements,
certifications, uptime commitments, login functionality, or technical
documentation details not available for review. In particular, omit the
source page’s “10+” marketplace claim and client-name/logo strip unless each is
independently approved and verified. Keep pricing qualified as indicative and
do not introduce amounts beyond the approved pricing content already present
in the application.

## Design and accessibility

- Reuse the current OptimaXCloud page layout, color system, typography,
  responsive styles, and existing Angular patterns.
- Keep the integration cards visually consistent; make official external
  links easy to distinguish from local navigation.
- Use semantic anchors, descriptive labels, visible keyboard focus, and
  accessible names for external-link indicators.
- Preserve the existing responsive behavior and avoid adding new dependencies
  or a new interaction pattern for this content-only update.

## Implementation plan

1. Update integration cards to retain only the official technology links and
   remove source-site guide links.
2. Remove source-site links from migration, pricing, and documentation.
3. Convert relevant source-page information into concise local content on
   Overview, Platform, Migration, and Documentation, avoiding duplicate
   sections and unsupported claims.
4. Check all local OptimaXCloud links and all three official external URLs.
5. Run the smallest relevant Angular build/test checks and verify the edited
   pages at desktop and mobile widths if browser testing is available.

## Acceptance criteria

- No link in the OptimaXCloud experience points to
  `be.optimaxsuites.com/iaas/`.
- The Integrations page provides direct official links for CloudStack,
  Terraform, and Proxmox, with safe external-link attributes and clear labels.
- Source-page information that is relevant and available is represented
  locally in the appropriate pages; no unavailable documentation is fabricated.
- Existing local routes, contact actions, and OptimaXCloud page navigation
  continue to work.
- Claims remain appropriately qualified, especially integration status,
  operational capability, pricing, and migration compatibility.
- The existing responsive layout and keyboard accessibility are preserved.