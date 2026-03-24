/*
 * chemistry_properties_addon.js
 * Organic Chemistry Hub — Class 9-12
 * Adds chemical properties, reactions & unsaturation tests
 * to Alkane, Alkene, Alkyne panels created by chemistry_ch11.js
 *
 * HOW IT WORKS:
 *  - Waits for the DOM to load
 *  - Finds the Alkane / Alkene / Alkyne panels by scanning
 *    common id / class / heading text patterns used by chemistry_ch11.js
 *  - Appends a fully-styled "Properties & Reactions" section to each panel
 *
 * INCLUDE IN index.html AFTER chemistry_ch11.js:
 *   <script src="chemistry_ch11.js"></script>
 *   <script src="chemistry_properties_addon.js"></script>
 */

(function () {
  "use strict";

  /* ─────────────────────────────────────────────
     1.  SHARED STYLES  (injected once into <head>)
  ───────────────────────────────────────────── */
  const CSS = `
    /* ── addon root ── */
    .chem-addon {
      font-family: 'Segoe UI', Arial, sans-serif;
      margin-top: 24px;
      border-top: 2px solid #e0e0e0;
      padding-top: 18px;
    }
    .chem-addon h3.addon-title {
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: .5px;
      margin: 0 0 14px 0;
      padding: 6px 14px;
      border-radius: 6px;
      display: inline-block;
    }

    /* ── reaction card ── */
    .rxn-card {
      background: #fafafa;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #888;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 12px;
    }
    .rxn-card h4 {
      margin: 0 0 6px 0;
      font-size: .97rem;
      font-weight: 700;
    }
    .rxn-card p, .rxn-card li {
      margin: 4px 0;
      font-size: .91rem;
      line-height: 1.55;
      color: #333;
    }
    .rxn-card ul { padding-left: 20px; margin: 6px 0; }
    .rxn-card code {
      background: #f0f0f0;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: .88rem;
      font-family: 'Courier New', monospace;
    }

    /* ── unsaturation test boxes ── */
    .unsat-box {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }
    .unsat-test {
      flex: 1 1 180px;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: .88rem;
      line-height: 1.5;
    }
    .unsat-test strong { display: block; margin-bottom: 4px; font-size: .93rem; }
    .unsat-test .before { display:inline-block; padding:2px 8px; border-radius:4px; margin-right:4px; }
    .unsat-test .after  { display:inline-block; padding:2px 8px; border-radius:4px; }
    .unsat-test .arrow  { font-size:1.1rem; margin: 0 4px; }

    /* ── positive test colours ── */
    .test-positive { background:#e8f5e9; border:1px solid #81c784; }
    .test-negative { background:#fce4ec; border:1px solid #e57373; }
    .br2-before   { background:#d4a017; color:#fff; }   /* orange-brown */
    .br2-after-pos{ background:#f5f5f5; color:#666; }   /* colourless */
    .br2-after-neg{ background:#d4a017; color:#fff; }   /* unchanged */
    .kmno4-before { background:#7b1fa2; color:#fff; }   /* purple */
    .kmno4-after-pos{ background:#795548; color:#fff; } /* brown ppt */
    .kmno4-after-neg{ background:#7b1fa2; color:#fff; } /* unchanged */

    /* ── mechanism steps ── */
    .mech-steps { counter-reset: step; padding: 0; list-style: none; margin: 6px 0 0 0; }
    .mech-steps li {
      counter-increment: step;
      display: flex; align-items: flex-start; gap: 8px;
      margin-bottom: 6px; font-size: .88rem;
    }
    .mech-steps li::before {
      content: counter(step);
      min-width: 22px; height: 22px;
      background: #333; color: #fff;
      border-radius: 50%;
      display:flex; align-items:center; justify-content:center;
      font-size:.75rem; font-weight:700; flex-shrink:0;
    }

    /* ── Markovnikov grid ── */
    .markov-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 8px;
    }
    .markov-cell {
      border-radius: 6px;
      padding: 8px 12px;
      font-size: .85rem;
      text-align: center;
    }
    .markov-major { background:#e3f2fd; border:1px solid #64b5f6; }
    .markov-minor { background:#fff3e0; border:1px solid #ffb74d; }
    .markov-cell .pct { font-size: 1.3rem; font-weight: 800; display:block; }

    /* ── special acidic-H box (alkyne) ── */
    .acidic-h-box {
      background: linear-gradient(135deg,#fff8e1,#ffe0b2);
      border: 2px dashed #ff8f00;
      border-radius: 10px;
      padding: 12px 16px;
      margin-bottom: 14px;
    }
    .acidic-h-box h4 { color:#e65100; margin:0 0 8px 0; font-size:1rem; }
    .acidic-h-box table {
      width:100%; border-collapse: collapse; font-size:.85rem;
    }
    .acidic-h-box th {
      background:#e65100; color:#fff;
      padding:5px 8px; text-align:left; font-weight:600;
    }
    .acidic-h-box td {
      padding:5px 8px; border-bottom:1px solid #ffe0b2;
    }
    .acidic-h-box tr:last-child td { border-bottom:none; }

    /* ── catalyst comparison ── */
    .cat-compare {
      display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:8px;
    }
    .cat-box {
      border-radius:8px; padding:10px 12px; font-size:.85rem;
    }
    .cat-lindlar { background:#e8f5e9; border:1px solid #66bb6a; }
    .cat-ni      { background:#e3f2fd; border:1px solid #42a5f5; }
    .cat-box strong { display:block; margin-bottom:4px; }

    /* ── colour accents per hydrocarbon ── */
    .alkane-accent { border-left-color: #f57c00 !important; }
    .alkene-accent { border-left-color: #388e3c !important; }
    .alkyne-accent { border-left-color: #1976d2 !important; }
    .alkane-title  { background:#fff3e0; color:#bf360c; }
    .alkene-title  { background:#e8f5e9; color:#1b5e20; }
    .alkyne-title  { background:#e3f2fd; color:#0d47a1; }

    /* ── equation display ── */
    .eq {
      background:#f8f8f8; border:1px solid #ddd;
      border-radius:5px; padding:7px 12px;
      font-family:'Courier New',monospace;
      font-size:.87rem; margin:6px 0;
      overflow-x:auto; white-space:nowrap;
    }
    .eq .arrow { color:#555; }
  `;

  function injectStyles() {
    if (document.getElementById("chem-addon-styles")) return;
    const style = document.createElement("style");
    style.id = "chem-addon-styles";
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  /* ─────────────────────────────────────────────
     2.  HTML BUILDERS
  ───────────────────────────────────────────── */

  /* ── ALKANE content ── */
  function buildAlkaneHTML() {
    return `
<div class="chem-addon">
  <h3 class="addon-title alkane-title">🔥 Alkane — Chemical Properties &amp; Reactions</h3>

  <!-- UNSATURATION TESTS — NEGATIVE -->
  <div class="unsat-box">
    <div class="unsat-test test-negative">
      <strong>🧪 Bromine Water Test — NEGATIVE</strong>
      <span class="before br2-before">Br₂ (aq) — orange-brown</span>
      <span class="arrow">→</span>
      <span class="after br2-after-neg">No colour change</span><br>
      <small>Alkanes do <em>not</em> decolourise bromine water (no π bond).</small>
    </div>
    <div class="unsat-test test-negative">
      <strong>🧪 Baeyer's Test (KMnO₄) — NEGATIVE</strong>
      <span class="before kmno4-before">KMnO₄ — purple</span>
      <span class="arrow">→</span>
      <span class="after kmno4-after-neg">Remains purple</span><br>
      <small>No oxidation occurs; KMnO₄ stays purple with alkanes.</small>
    </div>
  </div>

  <!-- COMBUSTION -->
  <div class="rxn-card alkane-accent">
    <h4>1 · Combustion</h4>
    <p><strong>Complete combustion</strong> (excess O₂):</p>
    <div class="eq">CH₄ + 2O₂ <span class="arrow">→</span> CO₂ + 2H₂O + heat</div>
    <p><strong>Incomplete combustion</strong> (limited O₂):</p>
    <div class="eq">2CH₄ + 3O₂ <span class="arrow">→</span> 2CO + 4H₂O (sooty/toxic flame)</div>
    <p><small>Carbon monoxide (CO) formed — colourless, odourless, toxic gas.</small></p>
  </div>

  <!-- HALOGENATION -->
  <div class="rxn-card alkane-accent">
    <h4>2 · Halogenation (Free Radical Substitution) — UV Light required</h4>
    <div class="eq">CH₄ + Cl₂ <span class="arrow">—(UV light)→</span> CH₃Cl + HCl</div>
    <p><strong>Mechanism — 3 steps:</strong></p>
    <ul class="mech-steps">
      <li><strong>Initiation:</strong> UV light breaks Cl–Cl bond → 2 Cl• (free radicals)<br>
        <code>Cl₂ + hν → 2 Cl•</code></li>
      <li><strong>Propagation (repeats):</strong><br>
        <code>Cl• + CH₄ → CH₃• + HCl</code><br>
        <code>CH₃• + Cl₂ → CH₃Cl + Cl•</code></li>
      <li><strong>Termination:</strong> Two radicals combine →<br>
        <code>Cl• + Cl• → Cl₂</code>&nbsp;&nbsp;or&nbsp;&nbsp;<code>CH₃• + Cl• → CH₃Cl</code></li>
    </ul>
  </div>

  <!-- THERMAL CRACKING -->
  <div class="rxn-card alkane-accent">
    <h4>3 · Thermal Cracking</h4>
    <p>Long-chain alkanes are broken into shorter alkanes + alkenes at high temperature.</p>
    <div class="eq">C₁₀H₂₂ <span class="arrow">—(Δ, catalyst)→</span> C₅H₁₂ + C₅H₁₀ (alkene)</div>
    <p><small>Used in petroleum industry to get more useful fuels (petrol from heavy oil).</small></p>
  </div>

  <!-- NITRATION -->
  <div class="rxn-card alkane-accent">
    <h4>4 · Nitration (Industrial)</h4>
    <div class="eq">CH₄ + HNO₃ <span class="arrow">—(400–500 °C)→</span> CH₃NO₂ + H₂O</div>
    <p>Produces nitroalkanes — important in synthesis of explosives &amp; amines.</p>
  </div>
</div>`;
  }

  /* ── ALKENE content ── */
  function buildAlkeneHTML() {
    return `
<div class="chem-addon">
  <h3 class="addon-title alkene-title">🌿 Alkene — Chemical Properties &amp; Reactions</h3>

  <!-- UNSATURATION TESTS — POSITIVE -->
  <div class="unsat-box">
    <div class="unsat-test test-positive">
      <strong>🧪 Bromine Water Test — POSITIVE ✔</strong>
      <span class="before br2-before">Br₂ (aq) — orange-brown</span>
      <span class="arrow">→</span>
      <span class="after br2-after-pos">Colourless</span><br>
      <small>Alkene decolourises Br₂; confirms C=C double bond (addition reaction).</small>
    </div>
    <div class="unsat-test test-positive">
      <strong>🧪 Baeyer's Test (KMnO₄) — POSITIVE ✔</strong>
      <span class="before kmno4-before">KMnO₄ — purple</span>
      <span class="arrow">→</span>
      <span class="after kmno4-after-pos">Brown ppt (MnO₂)</span><br>
      <small>KMnO₄ oxidises the double bond; purple → brown precipitate.</small>
    </div>
  </div>

  <!-- BROMINE ADDITION (with mechanism) -->
  <div class="rxn-card alkene-accent">
    <h4>1 · Addition of Bromine (Electrophilic Addition)</h4>
    <div class="eq">CH₂=CH₂ + Br₂ <span class="arrow">→</span> CH₂Br–CH₂Br (1,2-dibromoethane)</div>
    <p><strong>Mechanism:</strong></p>
    <ul class="mech-steps">
      <li>π electrons of C=C attract Br₂; Br–Br bond polarises (Brδ⁺–Brδ⁻).</li>
      <li>Brδ⁺ attacks π bond → forms a bromonium ion intermediate.</li>
      <li>Br⁻ attacks the back side → anti-addition product (trans).</li>
    </ul>
  </div>

  <!-- BAEYER'S KMnO4 -->
  <div class="rxn-card alkene-accent">
    <h4>2 · Baeyer's Reagent (Cold dilute KMnO₄)</h4>
    <div class="eq">3 CH₂=CH₂ + 2KMnO₄ + 4H₂O <span class="arrow">→</span> 3 HOCH₂–CH₂OH + 2MnO₂↓ + 2KOH</div>
    <p>Produces a diol (ethylene glycol). KMnO₄ turns from purple to brown (MnO₂↓).</p>
  </div>

  <!-- HYDROGENATION -->
  <div class="rxn-card alkene-accent">
    <h4>3 · Hydrogenation (Catalytic)</h4>
    <div class="eq">CH₂=CH₂ + H₂ <span class="arrow">—(Ni, 200°C)→</span> CH₃–CH₃ (ethane)</div>
    <p>Used industrially to harden vegetable oils into margarine.</p>
  </div>

  <!-- HX ADDITION — MARKOVNIKOV -->
  <div class="rxn-card alkene-accent">
    <h4>4 · Addition of HX (Markovnikov's Rule)</h4>
    <div class="eq">CH₃–CH=CH₂ + HBr <span class="arrow">→</span> products</div>
    <p><em>Markovnikov's Rule:</em> H adds to the carbon that already has more H atoms.</p>
    <div class="markov-grid">
      <div class="markov-cell markov-major">
        <span class="pct">90%</span>
        CH₃–CHBr–CH₃<br><small>Major product<br>(Markovnikov)</small>
      </div>
      <div class="markov-cell markov-minor">
        <span class="pct">10%</span>
        CH₃–CH₂–CH₂Br<br><small>Minor product<br>(Anti-Markovnikov)</small>
      </div>
    </div>
  </div>

  <!-- HYDRATION -->
  <div class="rxn-card alkene-accent">
    <h4>5 · Hydration (Steam addition)</h4>
    <div class="eq">CH₂=CH₂ + H₂O <span class="arrow">—(H₃PO₄, 300°C, 70 atm)→</span> CH₃CH₂OH (ethanol)</div>
    <p>Industrial method to produce ethanol. Follows Markovnikov's rule.</p>
  </div>

  <!-- HOBr ADDITION -->
  <div class="rxn-card alkene-accent">
    <h4>6 · Addition of HOBr (Hypobromic acid)</h4>
    <div class="eq">CH₂=CH₂ + HOBr <span class="arrow">→</span> BrCH₂–CH₂OH (bromohydrin)</div>
    <p>OH adds to the more substituted carbon (Markovnikov); Br adds to the less substituted carbon.</p>
  </div>

  <!-- POLYMERISATION -->
  <div class="rxn-card alkene-accent">
    <h4>7 · Polymerisation (Addition)</h4>
    <ul>
      <li><code>n CH₂=CH₂ → (–CH₂–CH₂–)ₙ</code> — <strong>Polythene (PE)</strong></li>
      <li><code>n CH₂=CHCl → (–CH₂–CHCl–)ₙ</code> — <strong>PVC</strong></li>
      <li><code>n CH₂=CHCH₃ → (–CH₂–CH(CH₃)–)ₙ</code> — <strong>Polypropene (PP)</strong></li>
    </ul>
  </div>

  <!-- OZONOLYSIS -->
  <div class="rxn-card alkene-accent">
    <h4>8 · Ozonolysis</h4>
    <div class="eq">CH₃–CH=CH–CH₃ + O₃ <span class="arrow">→</span> 2 CH₃CHO (ethanal)</div>
    <p>Ozone (O₃) cleaves the C=C double bond. Products: aldehydes or ketones depending on substitution. Used to determine structure of unknown alkenes.</p>
  </div>

  <!-- COMBUSTION -->
  <div class="rxn-card alkene-accent">
    <h4>9 · Combustion</h4>
    <div class="eq">CH₂=CH₂ + 3O₂ <span class="arrow">→</span> 2CO₂ + 2H₂O</div>
    <p>Burns with a slightly smokier flame than alkanes (higher C:H ratio).</p>
  </div>
</div>`;
  }

  /* ── ALKYNE content ── */
  function buildAlkyneHTML() {
    return `
<div class="chem-addon">
  <h3 class="addon-title alkyne-title">⚡ Alkyne — Chemical Properties &amp; Reactions</h3>

  <!-- UNSATURATION TESTS — POSITIVE (2 mol Br2) -->
  <div class="unsat-box">
    <div class="unsat-test test-positive">
      <strong>🧪 Bromine Water Test — POSITIVE ✔ (needs 2 mol Br₂)</strong>
      <span class="before br2-before">Br₂ (aq) — orange-brown</span>
      <span class="arrow">→</span>
      <span class="after br2-after-pos">Colourless</span><br>
      <small>Triple bond consumes <strong>2 moles</strong> of Br₂ (two successive additions).<br>
      Step 1: R–C≡C–R + Br₂ → R–CBr=CBr–R<br>
      Step 2: + Br₂ → R–CBr₂–CBr₂–R (tetrabromoalkane)</small>
    </div>
    <div class="unsat-test test-positive">
      <strong>🧪 Baeyer's Test (KMnO₄) — POSITIVE ✔</strong>
      <span class="before kmno4-before">KMnO₄ — purple</span>
      <span class="arrow">→</span>
      <span class="after kmno4-after-pos">Brown ppt (MnO₂)</span><br>
      <small>Triple bond is oxidised; purple colour disappears forming brown MnO₂.</small>
    </div>
  </div>

  <!-- SPECIAL ACIDIC H BOX -->
  <div class="acidic-h-box">
    <h4>⚗️ Special Property — Acidic C–H Bond (Terminal Alkynes only, e.g., HC≡C–R)</h4>
    <p style="font-size:.87rem;margin:0 0 8px 0;">The hydrogen on <strong>C–1 of a terminal alkyne</strong> is weakly acidic (pKa ≈ 25) because the carbon is sp-hybridised (holds electrons closer). This gives 3 unique identification tests:</p>
    <table>
      <tr>
        <th>Reagent</th><th>Observation</th><th>Equation</th>
      </tr>
      <tr>
        <td>Sodium metal (Na)</td>
        <td>🫧 H₂ gas bubbles evolved</td>
        <td><code>HC≡CH + 2Na → NaC≡CNa + H₂↑</code></td>
      </tr>
      <tr>
        <td>AgNO₃ / NH₃ (Tollens')</td>
        <td>⬜ White precipitate (AgC≡CR)</td>
        <td><code>HC≡CH + 2[Ag(NH₃)₂]⁺ → AgC≡CAg↓ + 2NH₄⁺</code></td>
      </tr>
      <tr>
        <td>Cu₂Cl₂ / NH₃</td>
        <td>🔴 Brick-red precipitate (CuC≡CR)</td>
        <td><code>HC≡CH + 2Cu⁺ → CuC≡CCu↓ + 2H⁺</code></td>
      </tr>
    </table>
    <p style="font-size:.82rem;margin:8px 0 0 0;color:#e65100;">⚠️ Internal alkynes (R–C≡C–R) do NOT give these tests — no acidic H present.</p>
  </div>

  <!-- HYDROGENATION — Lindlar vs Ni -->
  <div class="rxn-card alkyne-accent">
    <h4>1 · Hydrogenation (Catalyst comparison)</h4>
    <div class="eq">HC≡CH + H₂ <span class="arrow">—(catalyst)→</span> product</div>
    <div class="cat-compare">
      <div class="cat-box cat-lindlar">
        <strong>Lindlar Catalyst (Pd/BaSO₄/quinoline)</strong>
        <code>HC≡CH + H₂ → cis-CH₂=CH₂ (partial, syn-addition)</code><br>
        <small>Stops at alkene stage; gives <em>cis</em> (Z) alkene only. Used when alkene product is needed.</small>
      </div>
      <div class="cat-box cat-ni">
        <strong>Ni / Pt / Pd (normal conditions)</strong>
        <code>HC≡CH + 2H₂ → CH₃–CH₃ (full hydrogenation)</code><br>
        <small>Both π bonds reduced → saturated alkane.</small>
      </div>
    </div>
  </div>

  <!-- HX ADDITION — GEMINAL DIHALIDE -->
  <div class="rxn-card alkyne-accent">
    <h4>2 · Addition of HX → Geminal Dihalide</h4>
    <div class="eq">HC≡CH + HCl <span class="arrow">→</span> CH₂=CHCl (vinyl chloride)</div>
    <div class="eq">CH₂=CHCl + HCl <span class="arrow">→</span> CH₃–CHCl₂ (geminal dihalide)</div>
    <p>Both additions follow <strong>Markovnikov's rule</strong>. In geminal dihalide, both halogens are on the <em>same</em> carbon.</p>
  </div>

  <!-- HYDRATION — WACKER -->
  <div class="rxn-card alkyne-accent">
    <h4>3 · Hydration (Wacker process / H₂SO₄ + HgSO₄)</h4>
    <div class="eq">HC≡CH + H₂O <span class="arrow">—(HgSO₄, H₂SO₄)→</span> CH₃CHO (ethanal / acetaldehyde)</div>
    <div class="eq">RC≡CH + H₂O <span class="arrow">→</span> R–CO–CH₃ (methyl ketone)</div>
    <p><em>Markovnikov addition:</em> ethyne → aldehyde; higher alkynes → ketones via an enol intermediate.</p>
  </div>

  <!-- TRIMERISATION -->
  <div class="rxn-card alkyne-accent">
    <h4>4 · Trimerisation → Benzene</h4>
    <div class="eq">3 HC≡CH <span class="arrow">—(600°C, activated C)→</span> C₆H₆ (benzene)</div>
    <p>Three ethyne molecules cyclise to form benzene. Discovered by Berthelot. Important in understanding the link between aliphatic &amp; aromatic chemistry.</p>
  </div>

  <!-- COMBUSTION -->
  <div class="rxn-card alkyne-accent">
    <h4>5 · Combustion</h4>
    <div class="eq">2 HC≡CH + 5O₂ <span class="arrow">→</span> 4CO₂ + 2H₂O</div>
    <p>Burns with a very bright, hot flame (oxy-acetylene torch — up to 3500°C). Used in welding &amp; metal cutting.</p>
    <p><small>Incomplete combustion produces fine carbon black (soot) — high C:H ratio gives luminous sooty flame.</small></p>
  </div>
</div>`;
  }

  /* ─────────────────────────────────────────────
     3.  PANEL FINDER
     Searches for panels that chemistry_ch11.js
     created using several common patterns.
  ───────────────────────────────────────────── */
  function findPanel(keywords) {
    // keywords: e.g. ['alkane', 'methane', 'saturated']
    const kw = keywords.map(k => k.toLowerCase());

    // Strategy A: element whose id or class contains a keyword
    for (const k of kw) {
      const el = document.querySelector(`[id*="${k}"], [class*="${k}"]`);
      if (el) return el;
    }

    // Strategy B: headings (h1-h4) whose text contains a keyword
    const headings = document.querySelectorAll("h1,h2,h3,h4");
    for (const h of headings) {
      const text = h.textContent.toLowerCase();
      if (kw.some(k => text.includes(k))) {
        // return the heading's closest section-like parent, or the heading itself
        return h.closest("section,article,div,[data-section]") || h.parentElement || h;
      }
    }

    // Strategy C: any div/section whose text heavily references a keyword
    const containers = document.querySelectorAll("div,section,article");
    for (const el of containers) {
      const text = (el.getAttribute("id") || "") + " " +
                   (el.getAttribute("class") || "") + " " +
                   el.textContent.slice(0, 120).toLowerCase();
      if (kw.some(k => text.includes(k))) return el;
    }

    return null;
  }

  /* ─────────────────────────────────────────────
     4.  INJECT — appends HTML to found panel,
         or creates a standalone fallback section
  ───────────────────────────────────────────── */
  function inject(keywords, html, fallbackId, label) {
    const panel = findPanel(keywords);
    if (panel) {
      panel.insertAdjacentHTML("beforeend", html);
    } else {
      // Fallback: append a named section to <body> (or #app / #root)
      const root = document.getElementById("app") ||
                   document.getElementById("root") ||
                   document.body;
      const wrapper = document.createElement("section");
      wrapper.id = fallbackId;
      wrapper.style.cssText =
        "max-width:820px;margin:30px auto;padding:0 16px 24px;";
      wrapper.innerHTML = html;
      root.appendChild(wrapper);
      console.info(
        `[chemistry_properties_addon] "${label}" panel not found — ` +
        `appended standalone section #${fallbackId} to the page.`
      );
    }
  }

  /* ─────────────────────────────────────────────
     5.  MAIN — run after DOM is ready
  ───────────────────────────────────────────── */
  function main() {
    injectStyles();

    inject(
      ["alkane", "methane", "ethane", "saturated", "paraffin"],
      buildAlkaneHTML(),
      "alkane-properties-section",
      "Alkane"
    );

    inject(
      ["alkene", "ethene", "propene", "unsaturated", "olefin"],
      buildAlkeneHTML(),
      "alkene-properties-section",
      "Alkene"
    );

    inject(
      ["alkyne", "ethyne", "propyne", "acetylene", "triple"],
      buildAlkyneHTML(),
      "alkyne-properties-section",
      "Alkyne"
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    // DOM already ready (script loaded async / deferred)
    main();
  }
})();
