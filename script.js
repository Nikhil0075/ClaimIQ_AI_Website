const scenarios = {
  motor: {
    input: `Subject: Motor Vehicle Claim - Car Damage

Hello,

I am submitting a claim for damage to my car (Swift Dzire) due to an accident that occurred on 22nd May 2025.

Policyholder Name: Priya Verma
Policy Number: MCA789012
Car Model: Maruti Swift Dzire VXI
Registration Number: DL 08 AB 1234
Incident Location: Delhi - Noida expressway, near Hapur Toll

I was driving on the Delhi-Noida expressway when my car collided with another vehicle that suddenly changed lanes without indicating. Right-side damage (door, bumper, panel). Estimated repair cost Rs 1,60,000 at Quick Fix Motors, Noida.

Attachments: policy copy, repair estimate (Rs 1,60,000), 5 damage photos, Police FIR (NPR/2025/34567), driving license, insurance card. Policy holder for 3 years with no prior claims.`,
    result: {
      variant: "standard",
      snapshot: {
        Claimant: "Priya Verma",
        Policy: "MCA789012",
        Type: "Motor accident",
        Amount: "INR 1,60,000",
        Documents: "Policy, repair estimate, 5 photos, FIR, license, insurance card"
      },
      support: {
        Coverage: "Needs review with collision coverage likely applicable",
        Fraud: "18 / 100 low risk",
        Triage: "Green, standard review",
        Routing: "Claims officer queue"
      },
      steps: [
        ["Mail Guard", "proceed", ""],
        ["Intake", "complete", ""],
        ["Router", "all agents", ""],
        ["Coverage", "cited", ""],
        ["Fraud", "low", ""],
        ["Triage", "green", ""],
        ["Copilot", "brief ready", ""]
      ],
      brief: [
        "Claim is structurally complete and can proceed to adjuster review: policy, repair estimate, FIR, license, and insurance card are all present.",
        "Coverage should be checked against collision terms, deductible, remaining policy balance, and the Quick Fix Motors estimate validity.",
        "Fraud signals are low: no duplicate indicator, no new-policy trigger, a clean 3-year no-claims history, and documents align with the incident description.",
        "Recommended next step: verify the repair estimate, match the 5 damage photos to invoice line items, then issue human-reviewed settlement guidance.",
        "All documents have been uploaded to the claim's Google Drive folder. An adjuster guide PDF has been generated and attached to the assessment email.",
        "Submit the adjuster decision via the approval form linked to the generated claim ID. This case is bundled in test_data/Motor Claim - Car Accident/."
      ]
    }
  },
  health: {
    input: `Subject: URGENT - Critical Health Claim - Cardiac Emergency

URGENT - PLEASE PROCESS IMMEDIATELY

My father has had a severe cardiac event and is currently in the ICU. I am submitting an emergency claim for immediate processing.

Patient: Ramesh Chandra Desai (age 68). Policy Number: HEA567890. Policy holder: his son Vikram Desai.

Incident: 25-05-2025, 11:45 PM at home in Delhi. Severe chest pain radiating to the left arm, shortness of breath, sweating. Rushed by 108 ambulance to Apollo Hospital Delhi. Admitted to the Cardiac Care ICU.

Diagnosis: ST-Elevation Myocardial Infarction (STEMI). Emergency angiogram performed, two coronary stents placed, on intensive monitoring. Vitals: BP 98/62, HR 112, SpO2 94% on oxygen.

Estimated cost Rs 5,00,000+ (hospitalization Rs 2,00,000+, stents Rs 2,50,000, ICU ongoing).

Attached: copy of policy, doctor's emergency letter, ICU admission record, hospital invoice (partial).`,
    result: {
      variant: "urgent",
      snapshot: {
        Claimant: "Vikram Desai (for Ramesh C. Desai)",
        Policy: "HEA567890",
        Type: "Health emergency (cardiac)",
        Amount: "INR 5,00,000+",
        Documents: "Policy, doctor's emergency letter, ICU admission record, invoice"
      },
      support: {
        Coverage: "Needs review with policy citations required",
        Fraud: "24 / 100 low-medium risk",
        Triage: "Red, emergency medical review",
        Routing: "Medical emergency review, 0.25h SLA"
      },
      steps: [
        ["Mail Guard", "proceed", ""],
        ["Intake", "complete", ""],
        ["Router", "all agents", ""],
        ["Coverage", "needs review", "warn"],
        ["Fraud", "low", ""],
        ["Triage", "red SLA", "risk"],
        ["Copilot", "brief ready", ""]
      ],
      brief: [
        "Clinical hard override is triggered by STEMI, ICU admission, and cardiac emergency terms with unstable vitals (BP 98/62, HR 112, SpO2 94%). This claim cannot be downgraded.",
        "Do not delay routing because of pending coverage checks or low fraud score. Emergency SLA is 0.25h.",
        "Coverage reviewer must cite policy wording for emergency admission, ICU limits, stent/implant coverage, waiting period, and room-rent sub-limits before any coverage decision.",
        "All documents (policy, doctor's emergency letter, ICU admission record, partial invoice) uploaded to the claim's Google Drive folder with an adjuster guide PDF.",
        "Recommended next step: route to the medical emergency reviewer immediately. Submit the clinical triage override decision via the approval form. This case is bundled in test_data/Health Claim - EMERGENCY/."
      ]
    }
  },
  property: {
    input: `Property Insurance Claim - Fire Damage

Policyholder: Deepak Ranjitsingh Patel. Policy Number: PRO234567. Property: 2-BHK residential flat, 45-B Palm Residency, Sector 72, Noida. Sum insured Rs 40,00,000.

Incident: 18-05-2025, approx 2:30 AM. Electrical short circuit caused a fire in the living room that spread to the bedroom. Estimated damage value Rs 15,80,000. Fire brigade controlled it within 20 minutes.

Attachments: policy copy, 8 damage photos, Fire Brigade NOC, police FIR, damaged-item valuation list, contractor repair quote.`,
    result: {
      variant: "standard",
      snapshot: {
        Claimant: "Deepak R. Patel",
        Policy: "PRO234567",
        Type: "Property fire damage",
        Amount: "INR 15,80,000",
        Documents: "Photos, Fire NOC, FIR, valuation, repair quote"
      },
      support: {
        Coverage: "Needs review against fire peril and sum insured",
        Fraud: "22 / 100 low risk",
        Triage: "Amber, senior review",
        Routing: "High-value senior review, 72h SLA"
      },
      steps: [
        ["Mail Guard", "proceed", ""],
        ["Intake", "complete", ""],
        ["Router", "all agents", ""],
        ["Coverage", "cited", ""],
        ["Fraud", "low", ""],
        ["Triage", "amber", "warn"],
        ["Copilot", "brief ready", ""]
      ],
      brief: [
        "Claim is structurally complete with strong third-party evidence: Fire Brigade NOC and police FIR corroborate the incident.",
        "Claim amount INR 15.8L is high-value; coverage must confirm the fire peril is in scope, verify the sum insured of INR 40L, and check any under-insurance or depreciation clauses before settlement.",
        "Fraud signals are low: independent authority documents reduce tampering and timeline risk, and there is no duplicate or new-policy trigger.",
        "Recommended next step: instruct a surveyor to validate the damaged-item valuation and contractor quote line by line, then issue human-reviewed settlement guidance.",
        "All documents uploaded to the claim's Google Drive folder with an adjuster guide PDF. Submit the decision via the approval form linked to the claim ID. This case is bundled in test_data/Property Claim - Fire Damage/."
      ]
    }
  },
  travel: {
    input: `URGENT - Travel Insurance Claim - Medical Emergency in Thailand

Policyholder: Meera Sharma. Policy Number: TRV123456. Travel dates 20-05-2025 to 30-05-2025, destination Bangkok, Thailand.

Incident: 24-05-2025. Severe food poisoning leading to acute gastroenteritis and severe dehydration, brief loss of consciousness. Admitted to ICU (precautionary) at Bumrungrad International Hospital. Estimated cost THB 58,000 (~Rs 1,16,000). Policy covers medical emergency abroad up to Rs 5,00,000.

Attachments: travel policy, hospital invoice & discharge summary, doctor's letter, lab reports, passport copy, flight ticket. Requesting cashless authorization to continue treatment.`,
    result: {
      variant: "urgent",
      snapshot: {
        Claimant: "Meera Sharma",
        Policy: "TRV123456",
        Type: "Travel medical emergency",
        Amount: "INR 1,16,000 (THB 58,000)",
        Documents: "Policy, hospital invoice, doctor letter, passport, ticket"
      },
      support: {
        Coverage: "Likely covered — emergency abroad up to INR 5,00,000",
        Fraud: "20 / 100 low risk",
        Triage: "Amber, urgent medical review",
        Routing: "Urgent authorization for cashless treatment"
      },
      steps: [
        ["Mail Guard", "proceed", ""],
        ["Intake", "complete", ""],
        ["Router", "all agents", ""],
        ["Coverage", "cited", ""],
        ["Fraud", "low", ""],
        ["Triage", "amber", "warn"],
        ["Copilot", "brief ready", ""]
      ],
      brief: [
        "Active in-trip hospitalization: travel dates and incident date align, and the claim falls squarely inside the policy period.",
        "Coverage should confirm the emergency-medical-abroad limit (INR 5L), any deductible, and that acute gastroenteritis is not an excluded pre-existing condition before authorizing cashless treatment.",
        "Time-sensitive: the claimant needs authorization to continue treatment, so triage flags urgent medical review rather than the standard queue.",
        "Fraud signals are low; costs are within international-hospital benchmarks and documents come from a recognised provider (Bumrungrad International).",
        "Recommended next step: issue cashless pre-authorization up to the verified limit, request the final itemised invoice on discharge, then complete the decision via the approval form. This case is bundled in test_data/Travel Claim - Medical Emergency Abroad/."
      ]
    }
  },
  incomplete: {
    input: `Hi, I want to know how to make a claim for my insurance. Please tell me the process and what documents are needed.`,
    result: {
      variant: "rewrite",
      snapshot: {
        Claimant: "Missing",
        Policy: "Missing",
        Type: "General inquiry",
        Amount: "Missing",
        Documents: "No claim attachments"
      },
      support: {
        Coverage: "Not started",
        Fraud: "Not started",
        Triage: "Not started",
        Routing: "Rewrite request"
      },
      steps: [
        ["Mail Guard", "rewrite", "warn"],
        ["Intake", "paused", "warn"],
        ["Router", "no agents", "warn"],
        ["Coverage", "skipped", ""],
        ["Fraud", "skipped", ""],
        ["Triage", "skipped", ""],
        ["Copilot", "form reply", ""]
      ],
      brief: [
        "This is not a usable claim submission. Mail Guard has intercepted it before any downstream agent ran, preserving pipeline capacity.",
        "Required fields missing: claimant name, policy number, incident date, incident description, claimed amount, and supporting documents.",
        "A rewrite request email has been sent to the customer with a structured claim submission form and document checklist.",
        "No BigQuery record, Drive upload, or adjuster brief will be created until a valid claim email is received.",
        "Recommended next step: wait for customer resubmission. No adjuster action required."
      ]
    }
  },
  fraud: {
    input: `Claim submission from Vikram S. Policy number POL-778210. Incident date 2026-06-18. Hospital invoice for ACL reconstruction is INR 975000. Patient name appears as V. Sharma on invoice and Vikram Singh on policy. This is the third claim this quarter. Documents include invoice_final_edited.pdf and MRI_report_scan.jpg.`,
    result: {
      variant: "risk",
      snapshot: {
        Claimant: "Vikram S.",
        Policy: "POL-778210",
        Type: "Health surgical claim",
        Amount: "INR 975,000",
        Documents: "Edited invoice, MRI scan"
      },
      support: {
        Coverage: "Needs review before payment",
        Fraud: "86 / 100 critical risk",
        Triage: "Red, special investigation",
        Routing: "Special investigation unit hold, 120h SLA"
      },
      steps: [
        ["Mail Guard", "proceed", ""],
        ["Intake", "needs review", "warn"],
        ["Router", "all agents", ""],
        ["Coverage", "manual", "warn"],
        ["Fraud", "critical", "risk"],
        ["Triage", "red", "risk"],
        ["Copilot", "SIU brief", "risk"]
      ],
      brief: [
        "Fraud score 86/100 is fixed by deterministic SIU signals computed before any LLM explanation. The score cannot be revised by narrative generation.",
        "Triggered signals: high ACL cost benchmark variance, identity mismatch (V. Sharma vs Vikram Singh), repeated claim frequency (3rd this quarter), and edited-document filename language.",
        "Do not accuse the claimant in outbound communication. The LLM explains signals; it does not make accusations. Human SIU authority is preserved.",
        "Claim placed on SIU hold automatically. Documents uploaded to Drive for forensic review. No settlement email will be sent until hold is cleared.",
        "Recommended next step: SIU investigator to request original unedited invoice, identity documents, and run cross-claim duplicate lookup via the approval form."
      ]
    }
  }
};

const scenarioChips = document.querySelectorAll("#scenarioChips .scen-chip");
const watchText = document.querySelector("#watchText");
const pgLog = document.querySelector("#pgLog");
const pgFill = document.querySelector("#pgFill");
const runSummary = document.querySelector("#runSummary");
const copyBriefBtn = document.querySelector("#copyBrief");
const claimInput = document.querySelector("#claimInput");
const runDemo = document.querySelector("#runDemo");
const resetDemo = document.querySelector("#resetDemo");
const runStatus = document.querySelector("#runStatus");
const runTime = document.querySelector("#runTime");
const timeline = document.querySelector("#agentTimeline");
const snapshot = document.querySelector("#snapshot");
const decisionSupport = document.querySelector("#decisionSupport");
const copilotBrief = document.querySelector("#copilotBrief");
const docTabs = document.querySelectorAll("[data-doc-tab]");
const docPanels = document.querySelectorAll("[data-doc-panel]");

/* ── Playground engine — reviewer edition ─────────────────────────────── */
let currentScenario = "motor";
let runToken = 0; /* invalidates in-flight timeouts when the scenario changes */

const SCEN_META = {
  motor: { fraud: 18, band: "LOW", tone: "green", triage: "Green", queue: "Standard review", sla: "48h", approval: "Not required",
    watch: "A clean, complete claim. Watch the Router take the deterministic fast path (no LLM call) and Coverage cite collision terms before anything reaches the adjuster." },
  health: { fraud: 24, band: "LOW-MED", tone: "red", triage: "Red", queue: "Medical emergency review", sla: "0.25h", approval: "Required — emergency + high value",
    watch: "Watch the clinical hard override: STEMI + ICU vitals force Red / 0.25h SLA, and no downstream output — not even a low fraud score — can downgrade it." },
  property: { fraud: 22, band: "LOW", tone: "amber", triage: "Amber", queue: "Senior review", sla: "72h", approval: "Required — high value (₹15.8L)",
    watch: "A high-value claim. Watch the ₹5L threshold trip mandatory human approval and senior-review routing even though the fraud risk is low." },
  travel: { fraud: 20, band: "LOW", tone: "amber", triage: "Amber", queue: "Urgent medical review", sla: "2h", approval: "Not required",
    watch: "Cashless authorization abroad is time-sensitive. Watch Coverage verify the ₹5L emergency-abroad limit before Triage fast-tracks the authorization." },
  incomplete: { fraud: null, band: "—", tone: "grey", triage: "—", queue: "Rewrite request", sla: "—", approval: "—",
    watch: "Watch Mail Guard stop this at the front door: zero downstream agents run, zero model spend, and the customer receives a structured resend form instead." },
  fraud: { fraud: 86, band: "CRITICAL", tone: "red", triage: "Red", queue: "Special investigation", sla: "120h", approval: "Required — critical fraud score",
    watch: "Watch the immutable-score guardrail: identity mismatch + edited-document language + a third claim this quarter drive a deterministic 86/100 before the LLM writes a word." }
};

const RUN_LOGS = {
  motor: [
    "Mail Guard · 4/4 required fields present — proceed (confidence 0.94)",
    "Intake · 6 documents classified, 30+ fields extracted — status complete",
    "Router · deterministic fast path — all four agents selected, no LLM call",
    "Coverage · collision peril matched, policy sections cited — estimate check queued",
    "Fraud · 13 signals evaluated — score 18/100 LOW · action: continue",
    "Triage · no urgency terms — GREEN · standard review · SLA 48h",
    "Copilot · adjuster brief v2.0 assembled — PDF guide + Drive folder linked"
  ],
  health: [
    "Mail Guard · URGENT claim, 4/4 fields present — proceed",
    "Intake · STEMI + ICU admission extracted, vitals parsed — complete",
    "Router · all agents selected — emergency context propagated",
    "Coverage · ICU / stent limits pulled — needs review with citations",
    "Fraud · score 24/100 LOW-MED — must not delay emergency routing",
    "Triage · HARD OVERRIDE — RED · medical emergency review · SLA 0.25h",
    "Copilot · emergency brief ready — human approval required"
  ],
  property: [
    "Mail Guard · complete fire claim — proceed",
    "Intake · Fire NOC + FIR + valuation list classified — complete",
    "Router · deterministic fast path — all four agents",
    "Coverage · fire peril in scope, sum insured ₹40L verified — cited",
    "Fraud · authority documents lower risk — score 22/100 LOW",
    "Triage · high value ₹15.8L — AMBER · senior review · SLA 72h",
    "Copilot · surveyor instruction drafted — approval gate armed"
  ],
  travel: [
    "Mail Guard · in-trip incident, fields present — proceed",
    "Intake · Bumrungrad invoice + discharge summary parsed — complete",
    "Router · all agents — cashless authorization flagged",
    "Coverage · emergency-abroad limit ₹5L confirmed — cited",
    "Fraud · costs within international benchmarks — score 20/100 LOW",
    "Triage · AMBER · urgent medical review · SLA 2h",
    "Copilot · cashless pre-authorization guidance drafted"
  ],
  incomplete: [
    "Mail Guard · 0/4 required fields — REWRITE REQUEST issued",
    "Intake · paused — no claim to extract",
    "Router · no agents selected — pipeline stopped",
    "Coverage · skipped — guarded at the front door",
    "Fraud · skipped — no model spend",
    "Triage · skipped",
    "Copilot · structured resend form emailed to the customer"
  ],
  fraud: [
    "Mail Guard · fields present — proceed (guard checks completeness, not intent)",
    "Intake · identity mismatch + edited-filename flags — needs review",
    "Router · all agents — SIU evidence forwarded",
    "Coverage · payment held pending review — manual",
    "Fraud · deterministic score 86/100 CRITICAL — immutable before LLM",
    "Triage · RED — special investigation hold · SLA 120h",
    "Copilot · SIU brief — no accusation language, human authority preserved"
  ]
};

function toneColor(tone) {
  return tone === "risk" ? "#f87171" : tone === "warn" ? "#facc15" : "#4ade80";
}

function pgLogLine(color, text) {
  const row = document.createElement("div");
  row.className = "pg-log-line";
  row.innerHTML = '<span class="pg-ldot" style="background:' + color + '"></span>' +
    "<span>" + text + "</span>" +
    '<span class="pg-lts">' + new Date().toLocaleTimeString([], { hour12: false }) + "</span>";
  pgLog.appendChild(row);
  pgLog.scrollTop = pgLog.scrollHeight;
}

function renderRunSummary(key) {
  const m = SCEN_META[key];
  const f = m.fraud === null ? 0 : m.fraud;
  const gaugeColor = f >= 70 ? "#f87171" : f >= 50 ? "#fb923c" : f >= 30 ? "#facc15" : "#4ade80";
  runSummary.innerHTML =
    '<div class="rs-item"><b>Fraud score</b>' +
    '<div class="rs-gauge"><div style="width:' + f + '%;background:' + gaugeColor + '"></div></div>' +
    "<span>" + (m.fraud === null ? "Not scored — guarded" : m.fraud + " / 100 · " + m.band) + "</span></div>" +
    '<div class="rs-item"><b>Triage</b><span class="rs-pill rs-' + m.tone + '">' + m.triage + "</span><span>" + m.queue + "</span></div>" +
    '<div class="rs-item"><b>SLA</b><span class="rs-big">' + m.sla + "</span><span>time to first action</span></div>" +
    '<div class="rs-item"><b>Human approval</b><span>' + m.approval + "</span></div>";
  runSummary.hidden = false;
}

function setScenario(key) {
  currentScenario = key;
  runToken += 1; /* cancel any in-flight run rendering */
  runDemo.disabled = false;
  scenarioChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.scenario === key));
  claimInput.value = scenarios[key].input;
  if (watchText) watchText.textContent = SCEN_META[key].watch;
  renderEmptyTimeline();
  snapshot.innerHTML = "";
  decisionSupport.innerHTML = "";
  copilotBrief.className = "copilot-empty";
  copilotBrief.textContent = "Run the playground to generate a simulated reviewer brief.";
  runStatus.textContent = "Ready";
  runTime.textContent = "No run yet";
  if (pgFill) pgFill.style.width = "0%";
  if (runSummary) { runSummary.hidden = true; runSummary.innerHTML = ""; }
  if (copyBriefBtn) copyBriefBtn.hidden = true;
  if (pgLog) pgLog.innerHTML = '<div class="pg-log-empty">Run a scenario to stream the agent activity log here — the same order the real orchestrator executes.</div>';
}

function renderEmptyTimeline() {
  timeline.innerHTML = ["Mail Guard", "Intake", "Router", "Coverage", "Fraud", "Triage", "Copilot"]
    .map((name) => `<div class="timeline-step"><strong>${name}</strong><span>waiting</span></div>`)
    .join("");
}

function renderDefinitionList(target, data) {
  target.innerHTML = Object.entries(data)
    .map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`)
    .join("");
}

function runSimulation() {
  const key = currentScenario;
  const result = scenarios[key].result;
  const logs = RUN_LOGS[key] || [];
  const token = ++runToken;
  const t0 = performance.now();

  runDemo.disabled = true;
  runStatus.textContent = "Running simulated agents";
  runTime.textContent = "Processing...";
  timeline.innerHTML = "";
  snapshot.innerHTML = "";
  decisionSupport.innerHTML = "";
  runSummary.hidden = true;
  copyBriefBtn.hidden = true;
  copilotBrief.className = "copilot-empty";
  copilotBrief.textContent = "Generating brief...";
  pgLog.innerHTML = "";
  pgLogLine("#c084fc", "▶ Claim injected into pipeline — orchestrator session opened");

  const STEP_MS = 380;
  result.steps.forEach((step, index) => {
    window.setTimeout(() => {
      if (token !== runToken) return;
      const [name, status, tone] = step;
      const node = document.createElement("div");
      node.className = `timeline-step ${tone}`;
      node.innerHTML = `<strong>${name}</strong><span>${status}</span>`;
      timeline.appendChild(node);
      if (logs[index]) pgLogLine(toneColor(tone), logs[index]);
      pgFill.style.width = Math.round(((index + 1) / result.steps.length) * 100) + "%";
    }, STEP_MS * index);
  });

  window.setTimeout(() => {
    if (token !== runToken) return;
    renderDefinitionList(snapshot, result.snapshot);
    renderDefinitionList(decisionSupport, result.support);
    renderRunSummary(key);
    copilotBrief.className = "";
    copilotBrief.innerHTML = `<p><strong>Human reviewer guidance:</strong></p><ul>${result.brief.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    copyBriefBtn.hidden = false;
    const secs = ((performance.now() - t0) / 1000).toFixed(1);
    pgLogLine("#c084fc", "✓ Pipeline complete in " + secs + "s — adjuster brief ready. Humans decide.");
    runStatus.textContent = key === "incomplete" ? "Stopped at Mail Guard — rewrite requested" : "Simulation complete — awaiting human decision";
    runTime.textContent = secs + "s · " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    runDemo.disabled = false;
  }, STEP_MS * result.steps.length + 320);
}

scenarioChips.forEach((chip) => {
  chip.addEventListener("click", () => setScenario(chip.dataset.scenario));
});
resetDemo.addEventListener("click", () => setScenario(currentScenario));
runDemo.addEventListener("click", runSimulation);
if (copyBriefBtn) {
  copyBriefBtn.addEventListener("click", () => {
    const text = scenarios[currentScenario].result.brief.map((b, i) => (i + 1) + ". " + b).join("\n");
    navigator.clipboard.writeText(text).then(() => {
      copyBriefBtn.textContent = "Copied ✓";
      copyBriefBtn.classList.add("copied");
      window.setTimeout(() => { copyBriefBtn.textContent = "Copy brief"; copyBriefBtn.classList.remove("copied"); }, 1600);
    });
  });
}

docTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.docTab;

    docTabs.forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    docPanels.forEach((panel) => {
      const isActive = panel.dataset.docPanel === target;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

setScenario("motor");

/* ── Scroll reveal ─────────────────────────────────────────────────────── */
(function () {
  try {
    const targets = document.querySelectorAll(
      ".section-heading, .content-card, .architecture-step, .architecture-layer, " +
      ".workflow-grid article, .impact-grid article, .guardrail-grid article, " +
      ".map-cta, .arch-figure, .access-card, .docs-shell, .intro > div"
    );
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  } catch (e) {
    /* reveal is progressive enhancement only */
  }
})();

/* ══════════════ Interactive documentation center ══════════════ */

/* helper: programmatically switch doc tab */
function activateDocTab(target) {
  docTabs.forEach((button) => {
    const isActive = button.dataset.docTab === target;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  docPanels.forEach((panel) => {
    const isActive = panel.dataset.docPanel === target;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

/* ── 1 · Documentation search ─────────────────────────────────────────── */
(function () {
  const input = document.getElementById("docSearch");
  const resultsBox = document.getElementById("docSearchResults");
  const countBadge = document.getElementById("docSearchCount");
  if (!input || !resultsBox) return;

  const TAB_NAMES = {
    overview: "Overview", agents: "Agents", technical: "Technical",
    data: "Data & I/O", governance: "Governance", setup: "Setup"
  };
  const SEARCHABLE = "h3, h4, h5, p, li, td, dt, dd, summary";
  let hitEls = [];

  function clearHighlights() {
    hitEls.forEach((el) => {
      el.querySelectorAll("mark.doc-hit").forEach((m) => {
        m.replaceWith(document.createTextNode(m.textContent));
      });
      el.normalize();
    });
    hitEls = [];
  }

  function highlight(el, query) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const q = query.toLowerCase();
    nodes.forEach((node) => {
      const text = node.textContent;
      const idx = text.toLowerCase().indexOf(q);
      if (idx === -1 || node.parentElement.closest("mark")) return;
      const mark = document.createElement("mark");
      mark.className = "doc-hit";
      mark.textContent = text.slice(idx, idx + query.length);
      const after = document.createTextNode(text.slice(idx + query.length));
      node.textContent = text.slice(0, idx);
      node.parentNode.insertBefore(mark, node.nextSibling);
      node.parentNode.insertBefore(after, mark.nextSibling);
    });
    hitEls.push(el);
  }

  function snippet(text, query) {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    const start = Math.max(0, idx - 42);
    const end = Math.min(text.length, idx + query.length + 70);
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return (start > 0 ? "…" : "") +
      esc(text.slice(start, idx)) +
      "<mark>" + esc(text.slice(idx, idx + query.length)) + "</mark>" +
      esc(text.slice(idx + query.length, end)) +
      (end < text.length ? "…" : "");
  }

  function runSearch() {
    const query = input.value.trim();
    clearHighlights();
    if (query.length < 2) {
      resultsBox.hidden = true;
      countBadge.hidden = true;
      return;
    }
    const results = [];
    docPanels.forEach((panel) => {
      const tab = panel.dataset.docPanel;
      const seen = new Set();
      panel.querySelectorAll(SEARCHABLE).forEach((el) => {
        if (results.length >= 60) return;
        // skip container elements whose match lives in a child we also scan
        if (el.querySelector(SEARCHABLE)) return;
        const text = el.textContent.trim();
        if (!text || !text.toLowerCase().includes(query.toLowerCase())) return;
        const key = tab + "::" + text.slice(0, 80);
        if (seen.has(key)) return;
        seen.add(key);
        results.push({ tab, el, text });
      });
    });

    countBadge.textContent = results.length + (results.length === 1 ? " match" : " matches");
    countBadge.hidden = false;

    if (!results.length) {
      resultsBox.innerHTML = '<div class="dsr-empty">No matches — try "fraud", "SLA", "BigQuery", "model", or "env".</div>';
      resultsBox.hidden = false;
      return;
    }

    resultsBox.innerHTML = "";
    results.slice(0, 14).forEach((r) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dsr-item";
      btn.innerHTML = '<span class="dsr-tab">' + TAB_NAMES[r.tab] + "</span>" +
        '<span class="dsr-snip">' + snippet(r.text, query) + "</span>";
      btn.addEventListener("click", () => {
        activateDocTab(r.tab);
        clearHighlights();
        highlight(r.el, query);
        resultsBox.hidden = true;
        const target = r.el.closest("details");
        if (target) target.open = true;
        window.setTimeout(() => {
          r.el.scrollIntoView({ behavior: "smooth", block: "center" });
          r.el.classList.remove("doc-flash");
          void r.el.offsetWidth;
          r.el.classList.add("doc-flash");
        }, 60);
      });
      resultsBox.appendChild(btn);
    });
    resultsBox.hidden = false;
  }

  let debounce;
  input.addEventListener("input", () => {
    window.clearTimeout(debounce);
    debounce = window.setTimeout(runSearch, 160);
  });
  input.addEventListener("focus", () => { if (input.value.trim().length >= 2) resultsBox.hidden = false; });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".doc-search-wrap")) resultsBox.hidden = true;
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { resultsBox.hidden = true; input.blur(); }
    if (e.key === "Enter") {
      const first = resultsBox.querySelector(".dsr-item");
      if (first) first.click();
    }
  });
})();

/* ── 2 · Agent accordions expand / collapse ───────────────────────────── */
(function () {
  const list = document.getElementById("agentAccList");
  const expand = document.getElementById("accExpandAll");
  const collapse = document.getElementById("accCollapseAll");
  if (!list) return;
  if (expand) expand.addEventListener("click", () => list.querySelectorAll("details").forEach((d) => { d.open = true; }));
  if (collapse) collapse.addEventListener("click", () => list.querySelectorAll("details").forEach((d) => { d.open = false; }));
})();

/* ── 3 · Fraud score simulator ────────────────────────────────────────── */
(function () {
  const typeSel = document.getElementById("fsType");
  const sigBox = document.getElementById("fsSignals");
  const scoreEl = document.getElementById("fsScore");
  const bandEl = document.getElementById("fsBand");
  const fillEl = document.getElementById("fsFill");
  const outcomeEl = document.getElementById("fsOutcome");
  if (!typeSel || !sigBox) return;

  /* weights: [base, health, motor, property]; null = not applicable for that type */
  const SIGNALS = [
    ["Duplicate claim detected", 35, 35, 40, 35],
    ["New policy close to incident", 30, 40, 35, 40],
    ["Identity mismatch", 25, 30, 20, null],
    ["Timeline inconsistency", 25, 25, 30, null],
    ["AI-generated / tampered document", 25, 30, 35, null],
    ["Vendor flagged in registry", 25, 25, 30, null],
    ["Document risk signal", 20, 25, 20, null],
    ["Medical inconsistency", 20, 30, 5, null],
    ["Billing anomaly", 20, 25, 30, null],
    ["Provider risk", 20, 25, 35, null],
    ["Claim amount outlier", 15, 20, 25, 25],
    ["Behavioral pattern", 15, 20, 25, null],
    ["Low document confidence", 10, 15, 20, null]
  ];
  const TYPE_COL = { base: 1, health: 2, motor: 3, property: 4 };

  function weightFor(sig, type) {
    const w = sig[TYPE_COL[type]];
    return w === null ? sig[1] : w; /* fall back to base weight when no override */
  }

  function bandOf(score) {
    if (score >= 70) return ["CRITICAL", "fs-crit"];
    if (score >= 50) return ["HIGH", "fs-high"];
    if (score >= 30) return ["MEDIUM", "fs-med"];
    return ["LOW RISK", "fs-low"];
  }

  function outcomes(score, checkedCount) {
    const dup = sigBox.querySelector('input[data-i="0"]');
    const items = [];
    if (score >= 70) {
      items.push("<li><strong>Mandatory human approval</strong> — score cleared FRAUD_HIGH_THRESHOLD (70).</li>");
      items.push("<li>Routed to <strong>Special Investigation</strong> queue (Red · 120h SLA) unless a clinical emergency overrides.</li>");
      items.push("<li>Recommended action: <strong>hold pending SIU review</strong>.</li>");
      items.push("<li>Customer receives a <strong>fraud alert</strong> status email (HIGH/CRITICAL threshold).</li>");
    } else if (score >= 50) {
      items.push("<li><strong>Special Investigation referral</strong> — score ≥ 50 with concerns.</li>");
      items.push("<li>Recommended action: <strong>refer to SIU</strong>, adjuster review continues in parallel.</li>");
      items.push("<li>Fraud alert email sent when the score clears the email threshold.</li>");
    } else if (score >= 30) {
      items.push("<li>Recommended action: <strong>request supporting documents</strong> and continue processing.</li>");
      items.push("<li>Signals logged in the SIU explanation and evidence log — no accusation language.</li>");
    } else {
      items.push("<li>Recommended action: <strong>continue normal processing</strong>.</li>");
      items.push("<li>No fraud email is sent; the score still lands in the adjuster brief and audit trail.</li>");
    }
    if (dup && dup.checked) {
      items.push("<li><strong>Duplicate detected</strong> — this alone forces mandatory human approval regardless of score.</li>");
    }
    if (checkedCount === 0) {
      items.length = 0;
      items.push("<li>No signals triggered — toggle signals on the left to simulate an SIU review.</li>");
    }
    return items.join("");
  }

  function render() {
    const type = typeSel.value;
    let score = 0;
    let checkedCount = 0;
    sigBox.querySelectorAll(".fs-sig").forEach((label) => {
      const i = Number(label.dataset.i);
      const sig = SIGNALS[i];
      const w = weightFor(sig, type);
      const na = sig[TYPE_COL[type]] === null;
      label.querySelector(".fs-w").textContent = "+" + w;
      label.classList.toggle("fs-na", na);
      const cb = label.querySelector("input");
      label.classList.toggle("on", cb.checked);
      if (cb.checked) { score += w; checkedCount += 1; }
    });
    score = Math.min(100, score);
    scoreEl.textContent = score;
    const [label, cls] = bandOf(score);
    bandEl.textContent = label;
    bandEl.className = "fs-band " + cls;
    fillEl.style.width = score + "%";
    fillEl.style.background =
      score >= 70 ? "linear-gradient(90deg,#fb923c,#f87171)" :
      score >= 50 ? "linear-gradient(90deg,#facc15,#fb923c)" :
      score >= 30 ? "linear-gradient(90deg,#4ade80,#facc15)" :
      "linear-gradient(90deg,#4ade80,#a3e635)";
    outcomeEl.innerHTML = outcomes(score, checkedCount);
  }

  sigBox.innerHTML = SIGNALS.map((sig, i) =>
    '<label class="fs-sig" data-i="' + i + '"><input type="checkbox" data-i="' + i + '">' +
    "<span>" + sig[0] + '</span><span class="fs-w"></span></label>'
  ).join("");

  sigBox.addEventListener("change", render);
  typeSel.addEventListener("change", render);
  render();
})();

/* ── 4 · Pipeline stage explorer ──────────────────────────────────────── */
(function () {
  const strip = document.getElementById("pipeStrip");
  const detail = document.getElementById("pipeDetail");
  if (!strip || !detail) return;

  const STAGES = [
    { num: "00", name: "Mail Guard", model: "gpt-4o-mini",
      purpose: "The front door. Validates that the email is a single, complete, genuine claim before any downstream agent or expensive model call runs.",
      inputs: "Subject, body, thread context, current UTC date, four required fields",
      outputs: "proceed | rewrite_request, confidence, missing fields, reason",
      email: "Instant acknowledgment on proceed; structured resend form on rewrite",
      fallback: "Keyword density + policy/date regex guard with future-date correction",
      audit: "mail_guard_completed with decision and confidence" },
    { num: "01", name: "Intake", model: "o4-mini + gpt-4o-mini vision",
      purpose: "Turns the raw email and attachments into a strict 30+ field structured claim contract, with per-document quality scores and risk signals.",
      inputs: "Email text (6,000-char prompt cap), attachments as bytes + mime, existing document summary",
      outputs: "Structured claim, documents summary, intake status (complete / needs_review / incomplete), risk indicators",
      email: "None directly — feeds every later notification",
      fallback: "Deterministic regex extraction with document alias matching",
      audit: "agent_started / agent_completed with duration_ms" },
    { num: "02", name: "Router", model: "gpt-5.5 (ambiguous cases only)",
      purpose: "Selects and orders only the downstream agents this claim needs, pausing the pipeline for customer documents when intake is incomplete.",
      inputs: "Intake status, session snapshot, ROUTER_ALWAYS_LLM and model env flags",
      outputs: "selected_agents, next_agent, claim_status, confidence, document request",
      email: "Customer document request when routing pauses",
      fallback: "Heuristic route on policy presence, risk, amount, date; human review if sparse",
      audit: "route_selected with reason and confidence" },
    { num: "03", name: "Coverage", model: "o4-mini",
      purpose: "Builds a policy-grounded coverage position: active status, perils, waiting periods, exclusions, sub-limits, and remaining balance — with citations required for any denial.",
      inputs: "Claim facts, BigQuery policy record, per-type policy PDFs",
      outputs: "covered | needs_review | not_covered, cited sections, calculation method, appeals guidance",
      email: "coverage_verified or coverage_needs_review status update",
      fallback: "Deterministic coverage from the policy record (dates, peril, waiting period)",
      audit: "Agent output row with duration_ms" },
    { num: "04", name: "Fraud", model: "o4-mini (explanation only)",
      purpose: "Scores 13 weighted SIU signals deterministically into a 0–100 score before the LLM writes its explanation. The score is immutable once computed.",
      inputs: "Intake evidence, coverage context, 90-day duplicate lookup, watchlists and benchmarks",
      outputs: "fraud_score, risk band, triggered signals, recommended investigation action",
      email: "fraud_alert — only when the score clears the HIGH/CRITICAL threshold",
      fallback: "Deterministic SIU brief with identical score and action",
      audit: "agent_completed with fraud_score" },
    { num: "05", name: "Triage", model: "o4-mini over hard rules",
      purpose: "Assigns clinical and non-medical urgency: routing queue, colour, priority, SLA, and specialist — with hard overrides so emergencies can never be downgraded.",
      inputs: "Intake facts, coverage status, fraud score, emergency term and vitals scan",
      outputs: "Queue, triage colour, SLA hours, specialist, human-approval flag + reasons",
      email: "routing_assigned with priority, queue, and SLA",
      fallback: "Hard-rule safe triage with the SLA map",
      audit: "Routing payload with duration_ms" },
    { num: "06", name: "Copilot", model: "o4-mini",
      purpose: "Synthesises everything into the multi-role decision brief (v2.0): summary, coverage position, fraud assessment, routing, open questions, evidence log, and draft letters. Assists — never decides.",
      inputs: "All upstream agent outputs and their completion log",
      outputs: "Markdown brief, PDF report sections, draft customer/adjuster letters, recommended tools",
      email: "pipeline_complete assessment with the adjuster-guide PDF attached",
      fallback: "Structured brief assembled deterministically from agent outputs",
      audit: "agent_completed with triage colour; pipeline_completed follows" }
  ];

  function renderDetail(i) {
    const s = STAGES[i];
    detail.innerHTML =
      "<h5>" + s.num + " · " + s.name + "</h5>" +
      '<p class="pd-purpose">' + s.purpose + "</p>" +
      '<div class="pd-grid">' +
      '<div class="pd-row"><b>Model</b>' + s.model + "</div>" +
      '<div class="pd-row"><b>Inputs</b>' + s.inputs + "</div>" +
      '<div class="pd-row"><b>Outputs</b>' + s.outputs + "</div>" +
      '<div class="pd-row"><b>Customer email</b>' + s.email + "</div>" +
      '<div class="pd-row"><b>Deterministic fallback</b>' + s.fallback + "</div>" +
      '<div class="pd-row"><b>Audit events</b>' + s.audit + "</div>" +
      "</div>";
    strip.querySelectorAll(".pipe-step").forEach((b, j) => {
      b.classList.toggle("active", j === i);
      b.setAttribute("aria-selected", String(j === i));
    });
    current = i;
  }

  let current = 0;
  strip.innerHTML = STAGES.map((s, i) =>
    '<button type="button" class="pipe-step" role="tab" aria-selected="false" data-i="' + i + '">' +
    '<span class="pnum">' + s.num + '</span><span class="pname">' + s.name + "</span></button>"
  ).join("");
  strip.addEventListener("click", (e) => {
    const btn = e.target.closest(".pipe-step");
    if (btn) renderDetail(Number(btn.dataset.i));
  });
  strip.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); renderDetail(Math.min(STAGES.length - 1, current + 1)); }
    if (e.key === "ArrowLeft") { e.preventDefault(); renderDetail(Math.max(0, current - 1)); }
  });
  renderDetail(0);
})();

/* ── 5 · Copy buttons on setup commands ───────────────────────────────── */
(function () {
  const setupPanel = document.getElementById("doc-setup");
  if (!setupPanel || !navigator.clipboard) return;
  setupPanel.querySelectorAll("li > code, p > code").forEach((code) => {
    const text = code.textContent.trim();
    if (!/^(python|pip|streamlit|pytest|cp )/.test(text)) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.setAttribute("aria-label", "Copy command: " + text);
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "Copied ✓";
        btn.classList.add("copied");
        window.setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("copied"); }, 1600);
      });
    });
    code.after(btn);
  });
})();

/* ══════════════ Access section — reviewer tools ══════════════ */

/* ── bundle cards: load scenario in playground / copy claim email ─────── */
(function () {
  document.querySelectorAll(".load-scen").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.scenario;
      if (!scenarios[key]) return;
      setScenario(key);
      const target = document.getElementById("playground");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      const panel = document.querySelector(".scenario-panel");
      if (panel) {
        panel.classList.remove("doc-flash");
        void panel.offsetWidth;
        panel.classList.add("doc-flash");
      }
    });
  });
  document.querySelectorAll(".copy-mail").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.scenario;
      if (!scenarios[key] || !navigator.clipboard) return;
      navigator.clipboard.writeText(scenarios[key].input).then(() => {
        const original = btn.textContent;
        btn.textContent = "Copied ✓";
        btn.classList.add("copied");
        window.setTimeout(() => { btn.textContent = original; btn.classList.remove("copied"); }, 1600);
      });
    });
  });
})();

/* ── reviewer checklist with progress (persists across visits) ────────── */
(function () {
  const grid = document.getElementById("ckGrid");
  const fill = document.getElementById("ckFill");
  const count = document.getElementById("ckCount");
  const reset = document.getElementById("ckReset");
  if (!grid || !fill || !count) return;

  const KEY = "claimiq_reviewer_checklist";
  const boxes = Array.from(grid.querySelectorAll("input[type=checkbox]"));

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }
  function render() {
    const done = boxes.filter((b) => b.checked).length;
    count.textContent = done + " / " + boxes.length + " done";
    fill.style.width = Math.round((done / boxes.length) * 100) + "%";
    boxes.forEach((b) => b.closest(".ck-item").classList.toggle("done", b.checked));
    if (done === boxes.length) count.textContent = boxes.length + " / " + boxes.length + " — review complete ✓";
  }

  const state = load();
  boxes.forEach((b) => {
    b.checked = Boolean(state[b.dataset.ck]);
    b.addEventListener("change", () => {
      const s = load();
      s[b.dataset.ck] = b.checked;
      save(s);
      render();
    });
  });
  if (reset) reset.addEventListener("click", () => {
    boxes.forEach((b) => { b.checked = false; });
    save({});
    render();
  });
  render();
})();
