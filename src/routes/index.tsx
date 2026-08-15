import { createFileRoute } from "@tanstack/react-router";
import { Metric, Panel, SectionTag } from "@/components/trdefi/Panel";
import logoAsset from "@/assets/trdefi-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRDEFI — Treasury Yield Engine for Stablecoin Balances" },
      {
        name: "description",
        content:
          "TRDEFI is self-custody yield infrastructure for corporate stablecoin treasuries: revocable allowance, no lock-up, fee-based returns, live PoC in 72 hours.",
      },
      { property: "og:title", content: "TRDEFI — Treasury Yield Engine" },
      {
        property: "og:description",
        content:
          "Earn liquidity-provider fees on idle USDC/USDT without moving funds out of your wallet. No lock-up. Verifiable on-chain history.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const TICKER = [
  "USDC / TREASURY FLOAT",
  "ALLOWANCE: REVOCABLE",
  "CUSTODY: CLIENT WALLET",
  "LOCK-UP: NONE",
  "SETTLEMENT: ON-CHAIN",
  "MODEL: FEE-BASED · NO RIBA",
  "POC WINDOW: 72H",
];

const DIFFERENTIATORS = [
  {
    id: "01",
    title: "Self-custody",
    body: "Tokens never leave the treasury wallet. The engine holds a token allowance only — revocable in one transaction, at any block.",
    tag: "CUSTODY",
  },
  {
    id: "02",
    title: "No lock-up",
    body: "No withdrawal queues, no epochs, no notice periods. Positions close in a single transaction whenever the treasury needs the float.",
    tag: "LIQUIDITY",
  },
  {
    id: "03",
    title: "Fee-based returns",
    body: "Returns originate from real trading activity routed through liquidity positions — not interest, not token emissions, not rehypothecation.",
    tag: "SOURCE",
  },
  {
    id: "04",
    title: "Multi-strategy allocation",
    body: "One balance backs several strategies at once through virtual allocation. No splitting funds across pools, no gas-heavy rebalancing.",
    tag: "CAPITAL",
  },
  {
    id: "05",
    title: "Sharia-compliant structure",
    body: "Income is earned as a share of trading fees against deployed liquidity — a fee model, not a lending yield. No riba by construction.",
    tag: "COMPLIANCE",
  },
  {
    id: "06",
    title: "Verifiable history",
    body: "Every position, fee accrual and settlement is readable on-chain. We publish no guaranteed APY. The ledger is the claim.",
    tag: "PROOF",
  },
];

const STEPS = [
  {
    n: "01",
    head: "Connect the wallet you already use",
    body: "Metamask, Safe multisig, hardware signer. No new custodian, no new account, no transfer of assets. Only an allowance is granted.",
    trace: "wallet.connect() → allowance.set(limit)",
  },
  {
    n: "02",
    head: "Allocate a share of the balance",
    body: "Pick strategies and assign a percentage of the stablecoin float. Allocation is virtual — the same balance can back multiple strategies.",
    trace: "engine.allocate(strategy, pct)",
  },
  {
    n: "03",
    head: "Fees settle back and compound",
    body: "The engine routes trading flow through your liquidity. Fees settle directly into the treasury wallet and auto-compound until you stop.",
    trace: "fees.settle(→ treasury) · auto-compound",
  },
];

const STRATEGIES = [
  {
    code: "TR-01",
    name: "Stable Pair Core",
    pair: "USDC / USDT",
    risk: "Conservative",
    band: "Narrow-range stable liquidity",
    horizon: "Continuous",
    note: "Lowest volatility exposure. Designed for operating float held between settlement windows.",
  },
  {
    code: "TR-02",
    name: "Stable Basket Extended",
    pair: "USDC / USDT / DAI",
    risk: "Moderate",
    band: "Multi-venue stable routing",
    horizon: "Continuous",
    note: "Wider venue coverage for higher fee capture, with correlated-asset drift as the trade-off.",
  },
  {
    code: "TR-03",
    name: "Blue-Chip Adjacent",
    pair: "USDC / ETH",
    risk: "Directional",
    band: "Managed-range liquidity",
    horizon: "Reviewed weekly",
    note: "Highest fee density and explicit price exposure. Suitable only for capital designated as risk budget.",
  },
];

const POC = [
  { d: "DAY 0", t: "Scoping call", b: "Treasury size, chains, signer setup, compliance constraints. 45 minutes." },
  { d: "DAY 1", t: "Test environment", b: "Engine deployed against your wallet topology on testnet with your allowance model." },
  { d: "DAY 2", t: "Live positions", b: "Real on-chain positions opened and monitored. Fee accrual visible per block." },
  { d: "DAY 3", t: "Dashboard handover", b: "Live earnings dashboard, revocation drill, and full read-only access for your team." },
];

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Hero />
      <Ticker />
      <Problem />
      <Differentiators />
      <HowItWorks />
      <Strategies />
      <Poc />
      <Contact />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="TRDEFI logo"
            width={32}
            height={32}
            className="size-8 rounded-sm"
          />
          <span className="font-mono text-sm font-semibold tracking-[0.28em] text-foreground">
            TRDEFI
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-signal-dim sm:inline">
            /ENGINE
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {[
            ["Thesis", "#thesis"],
            ["Engine", "#engine"],
            ["Flow", "#flow"],
            ["Strategies", "#strategies"],
            ["PoC", "#poc"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="ml-auto inline-flex h-8 items-center border border-signal px-3 font-mono text-[11px] uppercase tracking-[0.16em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground md:ml-0"
        >
          Request PoC
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="live-dot inline-block size-1.5 rounded-full bg-positive" />
          Engine online · Gulf-region deployments
        </div>

        <h1 className="mt-7 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
          Idle stablecoin treasuries earn nothing.
          <br />
          <span className="text-flow-signal">TRDEFI puts them to work</span> — without
          leaving your wallet.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Treasury yield infrastructure for stablecoin floats between $500K and $50M+. The engine
          receives a revocable token allowance, allocates a share of your balance to shared-liquidity
          strategies, and settles trading fees straight back into your wallet. Custody never moves.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="sweep-flow inline-flex h-11 items-center bg-signal px-6 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request 3-day PoC
          </a>
          <a
            href="#engine"
            className="inline-flex h-11 items-center border border-border px-6 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-signal hover:text-signal"
          >
            Read the engine spec
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {[
            { label: "Custody", value: "Client", sub: "wallet-resident tokens", tone: "signal" as const },
            { label: "Allowance", value: "Revocable", sub: "single transaction" },
            { label: "Lock-up", value: "0 days", sub: "no withdrawal queue", tone: "positive" as const },
            { label: "PoC window", value: "72 h", sub: "$0 cost", tone: "signal" as const },
          ].map((m) => (
            <div key={m.label} className="bg-surface">
              <Metric {...m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden border-b border-border bg-surface py-2.5">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground"
          >
            <span className="mr-3 text-signal-dim">■</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section id="thesis" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag index="01">The false choice</SectionTag>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="max-w-xl text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
              Treasuries are asked to pick between custody risk and zero return. Both answers cost
              money.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Moving float into a yield protocol means transferring assets, accepting lock-ups and
              taking on counterparty exposure. Doing nothing means inflation quietly takes the
              spread. Traditional DeFi asks you to split funds across venues, pay gas on every
              rebalance, and hold contract risk on each one.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              TRDEFI removes the transfer step. The allowance model keeps tokens in your wallet
              while liquidity is deployed on your behalf — so the risk you accept is explicit,
              bounded, and reversible.
            </p>
          </div>

          <Panel title="Comparison" meta="allocation models" className="self-start">
            <div className="divide-y divide-border">
              {[
                { k: "Custodial yield desk", v: "Assets transferred", bad: true },
                { k: "Lock-up vaults", v: "Exit windows", bad: true },
                { k: "Manual multi-protocol LP", v: "Gas + contract sprawl", bad: true },
                { k: "Doing nothing", v: "Inflation drag", bad: true },
                { k: "TRDEFI engine", v: "Allowance only · instant exit", bad: false },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between gap-4 px-4 py-3.5">
                  <span className="text-sm text-foreground/90">{r.k}</span>
                  <span
                    className={
                      "font-mono text-[11px] uppercase tracking-[0.12em] " +
                      (r.bad ? "text-muted-foreground" : "text-positive")
                    }
                  >
                    {r.v}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section id="engine" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag index="02">Engine properties</SectionTag>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.id} className="group bg-background p-6 transition-colors hover:bg-surface">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-signal">{d.id}</span>
                <span className="label-mono">{d.tag}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-mono text-[11px] leading-relaxed tracking-wide text-muted-foreground">
          RISK NOTE: liquidity provision carries smart-contract and market risk. Returns vary with
          traded volume. We publish history, not forecasts.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="flow" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag index="03">Operational flow</SectionTag>
        <div className="mt-10 grid gap-px bg-border lg:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-3xl text-signal-dim">{s.n}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-5 text-lg leading-snug font-semibold tracking-tight">{s.head}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="relative mt-6 overflow-hidden bg-surface px-3 py-2 font-mono text-[11px] text-foreground/80">
                {s.trace}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strategies() {
  return (
    <section id="strategies" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag index="04">Strategy register</SectionTag>
        <h2 className="mt-8 max-w-2xl text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
          Different risk profiles, one balance. Allocate by percentage, revise at any time.
        </h2>

        <div className="mt-10 hidden grid-cols-[92px_1.2fr_1fr_140px_1fr] gap-4 border-b border-border pb-3 lg:grid">
          {["Code", "Strategy", "Assets", "Profile", "Character"].map((h) => (
            <span key={h} className="label-mono">
              {h}
            </span>
          ))}
        </div>
        <div className="divide-y divide-border border-b border-border">
          {STRATEGIES.map((s) => (
            <div
              key={s.code}
              className="grid gap-3 py-5 transition-colors hover:bg-surface lg:grid-cols-[92px_1.2fr_1fr_140px_1fr] lg:items-start lg:gap-4"
            >
              <span className="font-mono text-xs text-signal">{s.code}</span>
              <div>
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">{s.band}</div>
              </div>
              <span className="font-mono text-xs text-foreground/90">{s.pair}</span>
              <span
                className={
                  "font-mono text-[11px] uppercase tracking-[0.14em] " +
                  (s.risk === "Conservative"
                    ? "text-positive"
                    : s.risk === "Moderate"
                      ? "text-signal"
                      : "text-warn")
                }
              >
                {s.risk}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-wide text-muted-foreground">
          NO GUARANTEED APY IS OFFERED. FEE CAPTURE DEPENDS ON REALISED TRADING VOLUME.
        </p>
      </div>
    </section>
  );
}

function Poc() {
  return (
    <section id="poc" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag index="05">Proof over promises</SectionTag>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
              72 hours from call to a live engine on your wallet topology.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The proof-of-concept is not a deck. Within three days your team watches real on-chain
              positions accrue fees in a test environment, runs the revocation drill themselves, and
              keeps read-only dashboard access afterwards. Zero cost, zero capital at risk.
            </p>
            <div className="border-flow mt-8 grid grid-cols-3 gap-px border border-border bg-border">
              <div className="bg-surface">
                <Metric label="Cost" value="$0" tone="positive" />
              </div>
              <div className="bg-surface">
                <Metric label="Capital at risk" value="None" />
              </div>
              <div className="bg-surface">
                <Metric label="Time to live" value="72h" tone="signal" />
              </div>
            </div>
          </div>

          <Panel title="PoC schedule" meta="D+0 → D+3" className="self-start">
            <div className="divide-y divide-border">
              {POC.map((p) => (
                <div key={p.d} className="flex gap-5 px-5 py-5">
                  <span className="w-14 shrink-0 font-mono text-[11px] tracking-[0.14em] text-signal">
                    {p.d}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{p.t}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border bg-surface/40">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTag index="06">Engagement</SectionTag>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="max-w-lg text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
              Send your treasury profile. We will send back a scoped PoC plan.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              One technical call, no sales sequence. Built for fintechs, tokenization platforms,
              remittance and payment operators, venture studios, DAOs and institutional treasury
              desks across the Gulf and beyond.
            </p>
            <dl className="mt-8 space-y-3 font-mono text-xs">
              {[
                ["Float range", "$500K – $50M+"],
                ["Assets", "USDC · USDT"],
                ["Signers", "EOA · Safe multisig · hardware"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 border-b border-border pb-3">
                  <dt className="w-32 uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                  <dd className="text-foreground/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Panel title="Request PoC" meta="response < 24h">
            <form
              className="space-y-4 p-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {[
                { id: "org", label: "Organisation", type: "text", ph: "Entity name" },
                { id: "email", label: "Work email", type: "email", ph: "treasury@company.com" },
                { id: "float", label: "Stablecoin float", type: "text", ph: "e.g. 4,000,000 USDC" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="label-mono">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    required
                    className="mt-2 h-10 w-full border border-input bg-background px-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-signal focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="notes" className="label-mono">
                  Context
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Chains, signer setup, compliance constraints"
                  className="mt-2 w-full resize-none border border-input bg-background px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-signal focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="sweep-flow inline-flex h-11 w-full items-center justify-center bg-signal font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Submit request
              </button>
              <p className="font-mono text-[10px] leading-relaxed tracking-wide text-muted-foreground">
                No wallet connection required at this stage. Nothing is signed before the scoping
                call.
              </p>
            </form>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="TRDEFI logo" width={24} height={24} className="size-6 rounded-sm" />
          <span className="font-mono text-sm tracking-[0.28em]">TRDEFI</span>
        </div>
        <p className="max-w-xl font-mono text-[10px] leading-relaxed tracking-wide text-muted-foreground">
          TRDEFI IS TREASURY INFRASTRUCTURE, NOT AN INVESTMENT PRODUCT. NO CUSTODY IS TAKEN. DIGITAL
          ASSET LIQUIDITY PROVISION INVOLVES SMART-CONTRACT AND MARKET RISK.
        </p>
      </div>
    </footer>
  );
}
