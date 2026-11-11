import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  author: string;
  authorInitial: string;
  authorColor: string;
  authorImage?: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

const STORAGE_KEY = 'optimax_blog_posts';
const API = 'https://be.optimaxsuites.com/x/api/v2/ai';
const TENANT = 'optimax';

const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: '5-reasons-smes-africa-switching-cloud-erp',
    title: '5 Reasons SMEs in Africa Are Switching to Cloud ERP',
    excerpt: 'Cloud ERP adoption among African SMEs has surged 3x in the last two years. Here\'s why forward-thinking businesses are making the move now and what\'s driving the shift.',
    category: 'ERP',
    categoryColor: '#2e6276',
    author: 'Adaeze Nwachukwu',
    authorInitial: 'A',
    authorColor: '#2e6276',
    date: 'Jun 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    imageAlt: 'Cloud ERP for SMEs',
    content: `
      <p>The African business landscape is evolving at a remarkable pace. Small and medium enterprises (SMEs) across Nigeria, Kenya, Ghana, and South Africa are waking up to a powerful reality: the tools that drove growth in the past decade are no longer sufficient for the next one.</p>

      <p>Cloud ERP adoption among African SMEs has surged 3x in the last two years alone. This isn't a trend — it's a structural shift. Here are the five core reasons businesses are making the move, and why those who wait will fall behind.</p>

      <h2>1. Real-Time Visibility Across Your Entire Business</h2>
      <p>Traditional spreadsheets and legacy software create information silos. Your finance team can't see what procurement just ordered. Your warehouse doesn't know what sales just committed. Cloud ERP breaks these silos by giving every department real-time access to a single source of truth.</p>
      <p>For African businesses dealing with fast-moving supply chains, volatile exchange rates, and dynamic consumer demand, this visibility isn't a luxury — it's a competitive necessity.</p>

      <h2>2. Lower Total Cost of Ownership</h2>
      <p>On-premise ERP requires expensive server hardware, dedicated IT staff, and costly upgrade cycles. Cloud ERP eliminates all of that. With a predictable monthly subscription, businesses can redirect capital toward growth initiatives rather than infrastructure maintenance.</p>
      <p>Studies show African SMEs that switch to cloud ERP reduce their IT overhead by an average of 40% in the first year.</p>

      <h2>3. Scale Without Pain</h2>
      <p>Adding a new branch? Entering a new market? Cloud ERP scales with you. Whether you're adding 5 users or 500, the infrastructure adapts instantly — no hardware upgrades, no prolonged implementation projects.</p>
      <p>OptimaX customers in Lagos have expanded from 2 to 12 branches in a single fiscal year, with each new location onboarded in under 48 hours.</p>

      <h2>4. Mobile-First Operations</h2>
      <p>Africa's workforce is mobile. Business owners check reports from their phones. Sales reps process orders on tablets. Field agents capture data offline and sync when connected. Cloud ERP supports all of this natively, while desktop-bound legacy systems leave mobile workers in the dark.</p>

      <h2>5. Automatic Compliance & Security Updates</h2>
      <p>Tax regulations change. IFRS standards evolve. Data protection laws tighten. Cloud ERP providers push these updates automatically, ensuring your business stays compliant without expensive consultant engagements. For businesses operating across multiple African markets with different regulatory frameworks, this single benefit alone justifies the switch.</p>

      <h2>The Bottom Line</h2>
      <p>The question is no longer whether to move to cloud ERP — it's how quickly you can make the transition. The businesses thriving in 2025 are those that made the decision to modernize their operations before their competitors did.</p>
      <p>Ready to see what OptimaX can do for your business? <a href="/get-started">Start your free trial today</a>.</p>
    `,
  },
  {
    id: '2',
    slug: 'real-time-inventory-tracking-cuts-waste-30-percent',
    title: 'How Real-Time Inventory Tracking Cuts Waste by 30%',
    excerpt: 'Overstocking and stockouts cost Nigerian businesses billions each year. Discover how real-time inventory data helps you make smarter purchasing decisions and reduce deadstock.',
    category: 'ERP',
    categoryColor: '#2EB270',
    author: 'Kola Balogun',
    authorInitial: 'K',
    authorColor: '#2EB270',
    date: 'May 28, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAlt: 'Inventory Tracking',
    content: `
      <p>Inventory mismanagement is quietly draining billions from Nigerian businesses every year. Whether it's warehouse shelves groaning under excess stock that will never sell, or frustrated customers walking away because a popular item is perpetually out of stock, the cost of poor inventory visibility is enormous — and largely preventable.</p>

      <p>Real-time inventory tracking changes this equation fundamentally. Businesses that implement it consistently report 25–35% reductions in wasted stock within the first six months.</p>

      <h2>The Hidden Cost of "Just-In-Case" Stocking</h2>
      <p>Without real-time data, purchasing managers rely on gut feel, historical reports, and fear. The result? They order more than they need "just in case." Capital gets tied up in slow-moving stock, storage costs rise, and products expire or become obsolete.</p>
      <p>A mid-sized Lagos FMCG distributor we worked with was holding an average of 87 days of stock. After implementing real-time tracking with OptimaX, they reduced this to 34 days — freeing ₦180M in working capital.</p>

      <h2>What Real-Time Tracking Actually Means</h2>
      <p>Real-time inventory tracking means every movement — every receipt, transfer, sale, return, and adjustment — is recorded instantly in your system. You see current stock levels across all locations, at any moment, from any device.</p>
      <p>This is fundamentally different from batch updates or end-of-day reconciliation. By the time a weekly report lands on your desk, the data is already stale. Real-time means decisions are made on facts, not assumptions.</p>

      <h2>How the 30% Waste Reduction Happens</h2>
      <p><strong>Smarter reorder points:</strong> Instead of fixed reorder quantities, the system calculates reorder points based on actual consumption velocity and lead times. You order what you need, when you need it.</p>
      <p><strong>Automatic expiry alerts:</strong> For perishable goods, the system flags items approaching their sell-by date, enabling proactive discounting rather than disposal.</p>
      <p><strong>Multi-location visibility:</strong> Instead of purchasing new stock, managers can transfer excess inventory from one branch to a location where demand is higher.</p>

      <h2>Implementation: Simpler Than You Think</h2>
      <p>Most businesses assume real-time inventory tracking requires expensive hardware overhauls. With modern cloud ERP, the software connects to your existing barcode scanners and POS terminals. Implementation typically takes 2–3 weeks, not months.</p>
      <p>The ROI calculation is straightforward: if you're holding 60 days of stock and can bring it to 40 days, the freed working capital alone typically pays for the ERP subscription several times over.</p>
    `,
  },
  {
    id: '3',
    slug: 'hr-automation-trends-2025-every-business-needs',
    title: 'HR Automation Trends 2025: What Every Business Needs',
    excerpt: 'From automated payroll runs to digital leave approvals and performance tracking — the 2025 HR landscape demands more from your software than ever before.',
    category: 'HR & Payroll',
    categoryColor: '#7c3aed',
    author: 'Fatima Garba',
    authorInitial: 'F',
    authorColor: '#7c3aed',
    date: 'May 14, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'HR Automation',
    content: `
      <p>The role of Human Resources has transformed beyond recognition over the past decade. What was once a department buried in paperwork — processing leave forms, manually calculating payroll, chasing approvals — is now a strategic function that drives business performance. At the center of this transformation is HR automation.</p>

      <p>As we move deeper into 2025, the businesses that are winning the talent war are those that have automated the mundane to focus on the meaningful.</p>

      <h2>Trend 1: AI-Powered Payroll Processing</h2>
      <p>Manual payroll runs are disappearing. In their place, AI-driven systems that automatically calculate gross pay, deductions, PAYE, pension contributions, and net pay — handling the full complexity of Nigeria's tax structure without a single manual entry.</p>
      <p>The business impact is significant: payroll processing time drops from days to hours, errors decrease by 94%, and the dreaded end-of-month payroll panic becomes a relic of the past.</p>

      <h2>Trend 2: Self-Service Employee Portals</h2>
      <p>In 2025, employees expect to manage their own HR needs the same way they manage their banking — from their phones, without waiting for HR to respond. Self-service portals allow employees to request leave, view payslips, update personal information, and track their performance goals, all without HR intervention.</p>
      <p>This doesn't diminish HR's role — it elevates it. When HR teams aren't fielding routine queries, they spend time on recruitment, culture, and development.</p>

      <h2>Trend 3: Automated Compliance Tracking</h2>
      <p>Labour law compliance is non-negotiable, but it's also complex. Pension contributions, NHF deductions, ITF levies, and annual leave entitlements all follow specific rules that change. Automated compliance tracking ensures these calculations are always current, reducing the risk of penalties and back-payments.</p>

      <h2>Trend 4: Performance Management Integration</h2>
      <p>The annual performance review is dying. Leading businesses in 2025 run continuous performance cycles — quarterly OKR tracking, real-time feedback loops, and 360-degree reviews that are automated and structured.</p>
      <p>When performance data lives in the same system as compensation data, managers can make evidence-based promotion and bonus decisions in minutes rather than weeks.</p>

      <h2>Trend 5: Predictive Attrition Alerts</h2>
      <p>Advanced HR platforms now flag employees at risk of leaving, based on patterns like declining performance scores, unused leave accumulation, or reduced engagement survey responses. Businesses that act on these signals early report 30% lower attrition rates.</p>

      <h2>The Right Technology Foundation</h2>
      <p>None of these trends are achievable without the right HR technology foundation. A cloud ERP with an integrated HR and payroll module gives you all of this in one system — without the complexity of managing multiple disconnected tools.</p>
    `,
  },
  {
    id: '4',
    slug: 'spreadsheets-to-erp-migration-playbook',
    title: 'From Spreadsheets to ERP: A Migration Playbook',
    excerpt: 'Still running your business on Excel? This step-by-step playbook walks you through planning, data migration, team training, and go-live — with zero downtime.',
    category: 'ERP',
    categoryColor: '#f97316',
    author: 'Chukwuemeka Obi',
    authorInitial: 'C',
    authorColor: '#f97316',
    date: 'Apr 30, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'ERP Migration',
    content: `
      <p>If your business is still running on a patchwork of Excel spreadsheets, WhatsApp messages, and manual reconciliations, you're not alone. The majority of African SMEs operate this way — and many are functional. The real question isn't whether you can survive on spreadsheets, but whether you can grow on them.</p>

      <p>The answer, almost universally, is no. And the ERP migration, while intimidating, is far more manageable than most business owners fear.</p>

      <h2>Phase 1: Pre-Migration Planning (Weeks 1–2)</h2>
      <p>The most critical phase happens before a single byte of data is moved.</p>
      <p><strong>Audit your current state:</strong> Document every spreadsheet, every process, every workaround. Understand what you're replacing and why. This is where scope creep starts — and where it must be controlled.</p>
      <p><strong>Define your must-haves:</strong> Not every feature needs to go live on day one. Identify the 20% of functionality that handles 80% of your business — inventory, invoicing, payroll. Everything else can follow.</p>
      <p><strong>Assign an internal champion:</strong> Every successful ERP migration has a person inside the business who owns it. This isn't a job for the IT department alone — it needs someone who understands the business processes.</p>

      <h2>Phase 2: Data Preparation (Weeks 3–4)</h2>
      <p>Data migration is where most ERP projects stumble. Garbage in, garbage out.</p>
      <p><strong>Clean before you migrate:</strong> Remove duplicate customers, standardize product codes, reconcile outstanding balances. This is tedious work, but corrupted data in your ERP will cost you far more later.</p>
      <p><strong>Export master data first:</strong> Start with chart of accounts, customer list, vendor list, and product catalog. Transactional data (invoices, purchase orders) can be migrated separately or started fresh.</p>
      <p><strong>Validate in the test environment:</strong> Before going live, run your ERP in parallel with your spreadsheets for 2–4 weeks. Run the same transactions in both systems and compare outputs.</p>

      <h2>Phase 3: Team Training (Weeks 4–6)</h2>
      <p>Technology is only as powerful as the people using it. Training is not optional.</p>
      <p>The OptimaX implementation approach uses role-based training: warehouse staff learn receiving and picking, finance teams learn invoicing and reconciliation, managers learn reporting. Nobody has to learn everything — they just need to know their piece.</p>

      <h2>Phase 4: Go-Live (Week 7)</h2>
      <p>Pick a go-live date that's not at a financial month-end or during peak season. Cut over on a Monday morning, with your implementation team on standby.</p>
      <p>The first week will be messy. This is normal. The system is solid — the process adjustment takes time. Resist the urge to revert to spreadsheets. Push through.</p>

      <h2>Phase 5: Post-Go-Live Stabilization (Weeks 8–12)</h2>
      <p>The first three months are about settling in. You'll discover processes you didn't anticipate, reporting needs you hadn't considered, and shortcuts the team has discovered. This feedback shapes the configuration for months 3–6.</p>

      <h2>The Timeline Reality</h2>
      <p>A well-executed ERP migration for a 20–100 person business takes 6–10 weeks from kickoff to go-live. Larger businesses with multiple entities or complex integrations may take 3–6 months. Anyone promising you a 2-week full ERP implementation is either selling you something limited or setting you up to fail.</p>
    `,
  },
  {
    id: '5',
    slug: 'multi-currency-support-growing-businesses',
    title: 'Why Multi-Currency Support Matters for Growing Businesses',
    excerpt: 'Expanding across borders in Africa means dealing with NGN, GHS, KES, ZAR and USD simultaneously. A robust multi-currency ERP eliminates manual conversion errors and FX exposure.',
    category: 'Finance',
    categoryColor: '#2e6276',
    author: 'Tunde Adeyemi',
    authorInitial: 'T',
    authorColor: '#2e6276',
    date: 'Apr 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    imageAlt: 'Multi-Currency',
    content: `
      <p>Africa's fastest-growing businesses are pan-African by design. They source from China, sell in Nigeria, invoice in USD, and have subsidiaries paying salaries in Kenyan shillings and South African rand. Managing this financial complexity on spreadsheets or single-currency accounting software is not just difficult — it's a liability.</p>

      <p>Multi-currency ERP is no longer a feature reserved for multinationals. It's a fundamental requirement for any African business with cross-border operations or ambitions.</p>

      <h2>The Real Cost of Manual Currency Management</h2>
      <p>When finance teams manually manage multiple currencies, errors are inevitable. The wrong exchange rate applied to a large invoice. A closing balance calculated in the wrong currency. An FX gain or loss missed entirely because the accountant was unsure how to account for it.</p>
      <p>These errors compound. A single mistaken exchange rate on a ₦50M USD invoice can create a ₦2M–5M discrepancy that takes weeks to trace and reconcile.</p>

      <h2>How Multi-Currency ERP Works</h2>
      <p>A proper multi-currency ERP maintains separate ledger balances for every currency the business transacts in. When you raise an invoice in USD, the system records it in USD. When the payment arrives, the system automatically calculates the realized FX gain or loss based on the difference between the invoice rate and payment rate.</p>
      <p>At period end, all foreign currency balances are revalued at the closing rate, with unrealized FX differences automatically posted to the appropriate accounts. This is IFRS-compliant and eliminates the manual calculations that consume days of finance team time.</p>

      <h2>Practical Benefits for African Businesses</h2>
      <p><strong>Accurate profitability by currency:</strong> See which of your revenue streams is most profitable after FX costs are accounted for.</p>
      <p><strong>Better cash flow planning:</strong> When you can see your USD receivables separately from NGN receivables, you can make better decisions about when to convert and at what rate.</p>
      <p><strong>Audit-ready financials:</strong> Multi-currency ERP produces financial statements that meet IFRS requirements without manual adjustments, reducing audit preparation time by 60–80%.</p>

      <h2>The Pan-African Expansion Advantage</h2>
      <p>Businesses using multi-currency ERP expand into new African markets 40% faster than those using manual currency management. Why? Because the financial infrastructure is already in place. Adding a new currency to an existing ERP setup takes hours, not months.</p>
      <p>The businesses winning Pan-African expansion today are those who invested in the right financial infrastructure before they needed it.</p>
    `,
  },
  {
    id: '6',
    slug: 'pos-erp-integration-future-of-retail',
    title: 'POS + ERP Integration: The Future of Retail',
    excerpt: 'Siloed POS and ERP systems are a thing of the past. Learn how unified POS-ERP platforms give retailers real-time visibility, automatic stock updates, and end-of-day reconciliation in seconds.',
    category: 'Technology',
    categoryColor: '#2EB270',
    author: 'Ifeoma Eze',
    authorInitial: 'I',
    authorColor: '#2EB270',
    date: 'Apr 2, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    imageAlt: 'POS ERP Integration',
    content: `
      <p>Walk into any thriving retail business in Lagos, Accra, or Nairobi today, and you'll notice something different about how they operate. There's no end-of-day scramble to manually reconcile the POS with the accounts. The warehouse team isn't waiting for the sales report to know what's running low. The finance manager isn't spending the morning of the 1st entering yesterday's sales.</p>

      <p>These businesses have solved one of retail's oldest operational problems: the disconnect between the point of sale and the back-office ERP.</p>

      <h2>The Problem with Siloed Systems</h2>
      <p>For years, retailers operated with separate POS and ERP systems that didn't talk to each other. Sales happened at the till, and someone — usually a junior accountant — manually entered the day's sales into the ERP at the end of the day. Or the week. Or whenever they had time.</p>
      <p>This manual bridge created a 12–24 hour information gap that had real business consequences:</p>
      <ul>
        <li>Inventory records were always behind reality, leading to stockouts that weren't caught until shelves were empty</li>
        <li>Revenue recognition was delayed, making real-time financial reporting impossible</li>
        <li>Reconciliation took hours, and discrepancies took days to trace</li>
        <li>Multi-location businesses had no real-time picture of total sales performance</li>
      </ul>

      <h2>What True POS-ERP Integration Delivers</h2>
      <p><strong>Real-time inventory depletion:</strong> Every sale at the POS instantly updates stock levels in the ERP. When a customer buys the last unit of a product, the system knows immediately — and can trigger a reorder alert automatically.</p>
      <p><strong>Automatic revenue posting:</strong> Sales transactions are posted directly to the general ledger in real time. Your finance team has an accurate P&L at any moment in the day, not a day-old approximation.</p>
      <p><strong>Instant reconciliation:</strong> Cash, card, mobile money, and transfer payments are automatically reconciled against the ERP. End-of-day close takes minutes, not hours.</p>
      <p><strong>Multi-location visibility:</strong> Retail businesses with 5, 10, or 50 locations can see total company performance — by store, by product, by cashier — in real time from a single dashboard.</p>

      <h2>The OptimaX Approach</h2>
      <p>OptimaX POS is built natively on the same platform as the ERP — not bolted on via API. This means there's no integration to maintain, no sync errors to troubleshoot, and no data transformation layer that can fail.</p>
      <p>When a sale happens at the POS, the inventory module, the accounts receivable module, and the general ledger all update simultaneously. The consistency is absolute because there's only one database.</p>

      <h2>The Competitive Advantage</h2>
      <p>Retail is a margin business. The winners are those who make the best decisions the fastest. Real-time POS-ERP integration gives retailers the data velocity to make those decisions — pricing adjustments, promotional responses, reorder decisions — in hours instead of days.</p>
      <p>In the 2025 African retail landscape, this isn't a competitive advantage. It's the minimum standard for survival.</p>
    `,
  },
];

@Injectable({ providedIn: 'root' })
export class BlogService {
  private subject = new BehaviorSubject<BlogPost[]>([...INITIAL_POSTS]);
  private readySubject = new BehaviorSubject<boolean>(false);

  readonly posts$ = this.subject.asObservable();
  /** Emits true once the first API attempt (success or failure) has completed */
  readonly ready$ = this.readySubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchFromApi();
  }

  private fetchFromApi(): void {
    this.http
      .get<BlogPost[]>(`${API}/blog/posts`, { headers: { 'X-Tenant-ID': TENANT } })
      .pipe(catchError(() => of(null)))
      .subscribe((remote) => {
        const local = this.getLocal();
        if (remote === null) {
          // API not available — show hardcoded placeholders + local drafts
          this.subject.next([...INITIAL_POSTS, ...local]);
        } else {
          // API returned data — show only real posts (drop hardcoded placeholders)
          const remoteIds = new Set(remote.map((p) => p.id));
          const localOnly = local.filter((p) => !remoteIds.has(p.id));
          this.subject.next([...remote, ...localOnly]);
        }
        this.readySubject.next(true);
      });
  }

  private getLocal(): BlogPost[] {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch { return []; }
  }

  private authHeaders(token: string): HttpHeaders {
    return new HttpHeaders({ 'X-Tenant-ID': TENANT, Authorization: `Bearer ${token}` });
  }

  getAllPosts(): BlogPost[] { return this.subject.value; }

  getPostsByCategory(category: string): BlogPost[] {
    return category === 'All'
      ? this.subject.value
      : this.subject.value.filter((p) => p.category === category);
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.subject.value.find((p) => p.slug === slug);
  }

  createPost(post: Omit<BlogPost, 'id'>, token: string): Observable<BlogPost> {
    const draft: BlogPost = { ...post, id: Date.now().toString() };

    return this.http
      .post<BlogPost>(`${API}/blog/posts`, draft, { headers: this.authHeaders(token) })
      .pipe(
        tap((saved) => this.subject.next([saved, ...this.subject.value])),
        catchError(() => {
          // API not ready yet — persist locally so the post still appears
          const local = this.getLocal();
          local.unshift(draft);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(local));
          this.subject.next([draft, ...this.subject.value]);
          return of(draft);
        })
      );
  }

  deletePost(id: string, token: string): Observable<void> {

    const drop = () =>
      this.subject.next(this.subject.value.filter((p) => p.id !== id));

    return this.http
      .delete<void>(`${API}/blog/posts/${id}`, { headers: this.authHeaders(token) })
      .pipe(
        tap(() => drop()),
        catchError(() => {
          const local = this.getLocal().filter((p) => p.id !== id);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(local));
          drop();
          return of(undefined);
        })
      );
  }

  isInitialPost(id: string): boolean {
    return INITIAL_POSTS.some((p) => p.id === id);
  }

  slugify(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
  }
}
