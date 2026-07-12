# ClaimIQ — Technical Transcript over Live Demo (~2:00 narration)

All visuals = the running demo. No diagrams, no code. Short, dense lines — the screen carries the story, you supply the engineering. **[YOU]** = point/ad-lib slot.

---

## 1 — Gmail: Input (0:00–0:15)

**SHOW:** Claim email, attachments visible.

**SAY:**
"Unstructured input: raw email, four attachments — policy, FIR, photos, estimate. No portal, no schema. This is the hard version of the problem."

---

## 2 — Console: Run (0:15–0:30)

**SHOW:** Streamlit → Run Pipeline Now, log streaming.

**SAY:**
"One trigger. Event-driven pipeline, Python 3.11. Mail Guard gates the email — keyword and regex checks before a single token is spent. Then an LLM router picks the agents per claim — not a fixed sequence."

**[CUT — trim processing]**

---

## 3 — Gmail: Responses (0:30–0:50)

**SHOW:** Acknowledgment + final assessment emails.

**SAY:**
"Two automated emails. Claim ID — deterministic, links Gmail, Drive, BigQuery, and the audit trail. Assessment shows coverage status, fraud flags, decision path. Never a decision — human-in-the-loop is enforced in code, not policy."

---

## 4 — Explainability Tab (0:50–1:25) ← technical core

**SHOW:** Execution timeline. Scroll slowly; pause on fraud step.

**SAY:**
"Full execution trace, per-step timings. Every agent is a hybrid: LLM plus deterministic rule engine — model fails, rules take over, pipeline never crashes.

Intake: o4-mini reasoning model, 30-plus structured fields, strict JSON. Attachments: gpt-4o vision — bills and photos in as base64. Coverage: BigQuery policy lookup plus evidence snippets from the actual policy PDFs, then a compliance layer in Python — no denial without a cited exclusion.

Fraud: [point] weighted signal sum, 0 to 100, computed before any LLM call — immutable. Duplicate claim via BigQuery match: weight 35. New policy near incident: 30. Identity mismatch, tamper indicators: 25. Score ≥ 70 forces human approval — hard trigger."

**[YOU — point at the actual fraud score and one timing]**

---

## 5 — Looker Dashboard (1:25–1:40)

**SHOW:** Live dashboard.

**SAY:**
"Every run: two BigQuery writes per agent — audit events with timings, full JSON outputs. This dashboard reads that table live — queue, SLA compliance, fraud distribution. Decision provenance, reconstructable."

---

## 6 — Drive + Form: The Loop (1:40–2:05)

**SHOW:** Claim ID → Drive folder → both PDFs → Google Form.

**SAY:**
"Same claim ID in Drive: originals plus two generated PDFs — full report with audit trail, and the Adjuster Guide with a five-item review checklist: ready, needs-review, required. Adjuster decides here [Form] — approve, deny, escalate. That decision writes back to BigQuery, same ID. Loop closed."

---

## 7 — Close (2:05–2:15)

**SAY:**
"Deterministic facts, LLM language, human decisions. Under seven minutes, ten cents a claim, every step auditable."

---

## Judge Q&A ammo

- **Hallucination?** → Facts deterministic (score, dates, thresholds); LLM explains only. Compliance layer overrides model output.
- **Why 3 models?** → Cost/accuracy routing: o4-mini reasoning for extraction, gpt-4o vision for docs, gpt-5.5 for synthesis. All env-swappable.
- **Fraud score justification?** → Fixed 10-signal weight table, explicit triggers, immutable pre-LLM.
- **Human triggers?** → fraud ≥ 70 · coverage needs_review/not_covered · amount ≥ high-value threshold.
- **PDF report policy?** → `should_generate_report`: approval required, fraud ≥ 30, or ≥ ₹1,00,000.
- **GCP down?** → BQ calls return safe defaults, audit falls back to logs, pipeline completes.
- **Missing docs?** → Per-claim-type mandatory list; pipeline pauses and auto-emails the customer.

## Timing

~300 spoken words ≈ 1:55 at 160 wpm + flex ≈ 2:15 total. If squeezed, cut Segment 5 — its content survives in Q&A.
