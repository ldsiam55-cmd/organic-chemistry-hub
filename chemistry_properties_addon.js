/*!
 * Chemistry Properties Addon v1.0
 * Adds Chemical Properties + Reactions + Unsaturation Tests
 * to Alkane / Alkene / Alkyne panels in Organic Chemistry Hub
 *
 * USAGE: Add to index.html AFTER chemistry_ch11.js
 *   <script src="chemistry_ch11.js"></script>
 *   <script src="chemistry_properties_addon.js"></script>
 */

(function () {
  'use strict';

  /* ───────────────────────────────────────────────────────────────
   * 1. INJECT CSS
   * ─────────────────────────────────────────────────────────────── */
  const css = `
/* ── SECTION WRAPPER ── */
.cp-section { margin-top: 2.8rem; }

/* ── SECTION HEADER ── */
.cp-hdr {
  display: flex; align-items: center; gap: 1rem;
  padding: 1.2rem 1.5rem;
  border: 2px solid; border-radius: 18px;
  background: var(--sf); margin-bottom: 1.6rem;
  position: relative; overflow: hidden;
}
.cp-hdr::after {
  content: '';
  position: absolute; right: -20px; top: -20px;
  width: 100px; height: 100px;
  border-radius: 50%; background: currentColor;
  opacity: .04; pointer-events: none;
}
.cp-hdr-icon { font-size: 2.4rem; flex-shrink: 0; line-height: 1; filter: drop-shadow(0 0 8px currentColor); }
.cp-hdr-title { font-family: 'Fredoka One', cursive; font-size: 1.65rem; margin-bottom: .25rem; }
.cp-hdr-sub { font-size: .88rem; color: #94a3b8; font-weight: 600; }

/* ── UNSATURATION TEST BOX ── */
.cp-unsat {
  border-radius: 16px; padding: 1.3rem 1.4rem;
  margin-bottom: 1.6rem; border: 2.5px solid;
}
.cp-unsat-title {
  font-family: 'Fredoka One', cursive;
  font-size: 1.1rem; margin-bottom: .9rem;
  display: flex; align-items: center; gap: .5rem;
}
.cp-unsat-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: .9rem; margin-bottom: .9rem;
}
.cp-test-box {
  background: rgba(0,0,0,.25); border: 1.5px solid;
  border-radius: 13px; padding: 1rem .9rem; text-align: center;
}
.cp-test-name { font-family: 'Fredoka One', cursive; font-size: .92rem; margin-bottom: .2rem; }
.cp-test-reagent { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: #6b7280; margin-bottom: .35rem; }
.cp-test-arrow { font-size: 1.5rem; letter-spacing: .5rem; margin: .3rem 0; }
.cp-test-badge {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace; font-size: .72rem;
  padding: .28rem .85rem; border-radius: 8px;
  font-weight: 700; margin: .3rem 0;
}
.cp-test-obs { font-size: .73rem; color: #94a3b8; margin-top: .3rem; line-height: 1.5; }
.cp-test-eq { font-size: .68rem; color: #4b5563; margin-top: .25rem; font-style: italic; }
.cp-unsat-note {
  padding: .7rem 1rem; border-radius: 10px;
  font-size: .83rem; color: #94a3b8; line-height: 1.65;
}

/* ── REACTION CARD ── */
.cp-rxn-card {
  background: var(--sf); border: 2px solid;
  border-radius: 16px; overflow: hidden;
  margin-bottom: 1.2rem;
  transition: box-shadow .2s;
}
.cp-rxn-card:hover { box-shadow: 0 4px 26px rgba(0,0,0,.45); }
.cp-rxn-head {
  display: flex; align-items: center; gap: .8rem;
  padding: .85rem 1.25rem;
  background: rgba(0,0,0,.3); border-bottom: 1px solid var(--bd);
}
.cp-rxn-num {
  font-family: 'Fredoka One', cursive; font-size: .78rem;
  padding: .18rem .8rem; border-radius: 8px;
  border: 1.5px solid currentColor;
  background: rgba(255,255,255,.04); flex-shrink: 0;
}
.cp-rxn-title { font-family: 'Fredoka One', cursive; font-size: 1.1rem; }
.cp-rxn-tag {
  margin-left: auto; flex-shrink: 0;
  font-family: 'JetBrains Mono', monospace; font-size: .65rem;
  padding: .22rem .7rem; border-radius: 20px; border: 1.5px solid;
}
.cp-rxn-body { padding: 1.1rem 1.2rem; display: flex; flex-direction: column; gap: .75rem; }

/* ── EQUATION STYLE (matches existing .eq) ── */
.cp-eq {
  display: flex; align-items: center; flex-wrap: wrap; gap: .45rem;
  padding: .9rem 1.1rem;
  background: linear-gradient(160deg,#070720,#0f0728);
  border: 1.5px solid rgba(255,255,255,.09);
  border-radius: 12px; overflow-x: auto;
  font-family: 'Times New Roman', Times, serif;
  font-size: .97rem; font-style: italic; font-weight: 700;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
}
.cp-r { color: #fde68a; white-space: nowrap; text-shadow: 0 0 10px rgba(253,230,138,.3); }
.cp-p { color: #6ee7b7; white-space: nowrap; font-style: normal; font-weight: 900; text-shadow: 0 0 10px rgba(110,231,183,.4); }
.cp-ph { white-space: nowrap; font-style: normal; font-weight: 900; text-shadow: 0 0 14px currentColor, 0 0 4px currentColor; }
.cp-plus { color: #c4b5fd; font-style: normal; font-weight: 900; padding: 0 .05rem; }
.cp-pplus { color: #86efac; font-style: normal; font-weight: 900; padding: 0 .05rem; }
.cp-ab { display: flex; flex-direction: column; align-items: center; gap: .15rem; padding: 0 .5rem; flex-shrink: 0; }
.cp-ct { font-family: 'JetBrains Mono', monospace; font-size: .64rem; color: #7dd3fc; white-space: nowrap; background: rgba(125,211,252,.08); padding: .08rem .45rem; border-radius: 5px; border: 1px solid rgba(125,211,252,.2); }
.cp-cb { font-family: 'JetBrains Mono', monospace; font-size: .64rem; color: #fbbf24; white-space: nowrap; background: rgba(251,191,36,.08); padding: .08rem .45rem; border-radius: 5px; border: 1px solid rgba(251,191,36,.2); }
.cp-arr { font-size: 1.7rem; color: #f1f5f9; line-height: 1; text-shadow: 0 0 6px rgba(241,245,249,.3); }

/* ── NOTE BOX ── */
.cp-note {
  font-size: .9rem; color: #94a3b8; font-weight: 600;
  background: rgba(255,255,255,.03);
  border-left: 3px solid; padding: .75rem 1rem;
  border-radius: 0 10px 10px 0; line-height: 1.65;
}
.cp-note strong { filter: brightness(1.4); }

/* ── WORD DESCRIPTION ── */
.cp-word { font-size: .83rem; color: #64748b; font-style: italic; padding-left: .2rem; }

/* ── MECHANISM BOX ── */
.cp-mech {
  background: rgba(0,0,0,.2); border-radius: 12px;
  padding: .9rem 1.1rem; display: flex; flex-direction: column; gap: .5rem;
}
.cp-mech-title { font-family: 'Fredoka One', cursive; font-size: .9rem; color: #818cf8; margin-bottom: .1rem; }
.cp-mech-step { display: flex; gap: .7rem; font-size: .82rem; color: #94a3b8; line-height: 1.6; }
.cp-mech-n { font-family: 'Fredoka One', cursive; color: #818cf8; min-width: 22px; flex-shrink: 0; }

/* ── MARKOVNIKOV GRID ── */
.cp-markov { border: 2px dashed rgba(255,255,255,.15); border-radius: 13px; padding: 1rem 1.1rem; background: rgba(0,0,0,.15); }
.cp-markov-title { font-family: 'Fredoka One', cursive; font-size: .92rem; margin-bottom: .7rem; }
.cp-markov-row { font-size: .83rem; color: #94a3b8; line-height: 1.7; }
.cp-markov-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; margin-top: .7rem; }
.cp-mk-card { background: rgba(0,0,0,.22); border: 1.5px solid; border-radius: 10px; padding: .75rem .9rem; text-align: center; }
.cp-mk-pct { font-family: 'Fredoka One', cursive; font-size: 1.6rem; line-height: 1; }
.cp-mk-form { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: #94a3b8; margin: .25rem 0; }
.cp-mk-label { font-size: .68rem; color: #6b7280; line-height: 1.4; }

/* ── CATALYST COMPARE GRID ── */
.cp-cat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; margin: .5rem 0; }
.cp-cat-card { background: rgba(0,0,0,.22); border: 1.5px solid; border-radius: 10px; padding: .8rem .9rem; text-align: center; }
.cp-cat-name { font-family: 'Fredoka One', cursive; font-size: .9rem; margin-bottom: .2rem; }
.cp-cat-formula { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: #94a3b8; margin-bottom: .3rem; }
.cp-cat-result { font-size: .72rem; font-weight: 700; }
.cp-cat-how { font-size: .67rem; color: #6b7280; margin-top: .2rem; }

/* ── SPECIAL ACID H TESTS BOX ── */
.cp-acidh { border: 2.5px solid; border-radius: 16px; padding: 1.3rem; margin-bottom: 1.6rem; }
.cp-acidh-title { font-family: 'Fredoka One', cursive; font-size: 1.1rem; margin-bottom: .5rem; }
.cp-acidh-intro { font-size: .84rem; color: #94a3b8; line-height: 1.65; margin-bottom: .9rem; }
.cp-test-row { display: flex; flex-direction: column; gap: .65rem; }
.cp-test-item { border-left: 4px solid; border-radius: 0 11px 11px 0; padding: .75rem 1rem; background: rgba(0,0,0,.22); }
.cp-test-item-title { font-family: 'Fredoka One', cursive; font-size: .93rem; margin-bottom: .35rem; }
.cp-test-item-eq { font-family: 'JetBrains Mono', monospace; font-size: .76rem; color: #7dd3fc; background: rgba(125,211,252,.06); padding: .4rem .75rem; border-radius: 7px; border: 1px solid rgba(125,211,252,.15); margin: .3rem 0; line-height: 1.6; }
.cp-test-item-obs { font-size: .78rem; color: #94a3b8; line-height: 1.5; }
.cp-acidh-warning { margin-top: .85rem; background: rgba(192,132,252,.06); border-radius: 9px; padding: .65rem .9rem; font-size: .8rem; color: #6b7280; }

/* ── SUMMARY BOX ── */
.cp-summary { border: 1.5px solid; border-radius: 13px; padding: 1.1rem 1.3rem; margin-top: .9rem; }
.cp-summary-title { font-family: 'Fredoka One', cursive; font-size: 1rem; margin-bottom: .65rem; }
.cp-summary-list { display: flex; flex-direction: column; gap: .38rem; }
.cp-summary-item { font-size: .84rem; color: #94a3b8; line-height: 1.55; }
.cp-summary-item strong { filter: brightness(1.5); }

/* ── BEFORE/AFTER TEST VISUAL ── */
.cp-ba-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: .5rem; align-items: center; margin: .5rem 0; }
.cp-ba-box { border: 1.5px solid; border-radius: 10px; padding: .7rem; text-align: center; background: rgba(0,0,0,.2); }
.cp-ba-label { font-family: 'Fredoka One', cursive; font-size: .85rem; }
.cp-ba-color { font-size: 1.1rem; font-weight: 700; margin-top: .2rem; }
.cp-ba-desc { font-size: .68rem; color: #94a3b8; margin-top: .2rem; }
.cp-ba-arrow { font-size: 2rem; text-align: center; line-height: 1; }

/* ── RESPONSIVE ── */
@media(max-width:600px) {
  .cp-unsat-grid { grid-template-columns: 1fr; }
  .cp-markov-grid { grid-template-columns: 1fr; }
  .cp-cat-grid { grid-template-columns: 1fr; }
  .cp-ba-grid { grid-template-columns: 1fr; }
  .cp-ba-arrow { transform: rotate(90deg); }
  .cp-hdr-title { font-size: 1.35rem; }
}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ───────────────────────────────────────────────────────────────
   * 2. HTML BUILDER HELPERS
   * ─────────────────────────────────────────────────────────────── */

  function hdr(icon, title, sub, color) {
    return `<div class="cp-hdr" style="border-color:${color};color:${color}">
      <div class="cp-hdr-icon">${icon}</div>
      <div>
        <div class="cp-hdr-title">${title}</div>
        <div class="cp-hdr-sub">${sub}</div>
      </div>
    </div>`;
  }

  // Single equation row
  function eq(reactants, condTop, condBot, products, productColor) {
    const pColor = productColor || '#6ee7b7';
    const condHtml = (condTop || condBot)
      ? `<div class="cp-ab">${condTop ? `<span class="cp-ct">${condTop}</span>` : ''}<span class="cp-arr">⟶</span>${condBot ? `<span class="cp-cb">${condBot}</span>` : ''}</div>`
      : `<span class="cp-arr">⟶</span>`;
    const prods = Array.isArray(products)
      ? products.map((p, i) => `<span class="cp-ph" style="color:${pColor}">${p}</span>${i < products.length - 1 ? '<span class="cp-pplus">+</span>' : ''}`).join('')
      : `<span class="cp-ph" style="color:${pColor}">${products}</span>`;
    return `<div class="cp-eq"><span class="cp-r">${reactants}</span>${condHtml}${prods}</div>`;
  }

  // Word note under equation
  function wordNote(text) {
    return `<div class="cp-word">${text}</div>`;
  }

  // Coloured note box
  function note(html, color) {
    return `<div class="cp-note" style="border-color:${color}">⚗️ ${html}</div>`;
  }

  // Full reaction card
  function rxnCard(num, title, tag, color, body) {
    return `<div class="cp-rxn-card" style="border-color:${color}">
      <div class="cp-rxn-head" style="color:${color}">
        <span class="cp-rxn-num">${num}</span>
        <span class="cp-rxn-title">${title}</span>
        ${tag ? `<span class="cp-rxn-tag" style="color:${color};border-color:${color}">${tag}</span>` : ''}
      </div>
      <div class="cp-rxn-body">${body}</div>
    </div>`;
  }

  // Before/After visual for tests
  function baVisual(beforeColor, beforeHex, beforeLabel, beforeDesc, afterHex, afterLabel, afterDesc, arrowLabel) {
    return `<div class="cp-ba-grid">
      <div class="cp-ba-box" style="border-color:${beforeHex}55">
        <div class="cp-ba-label" style="color:${beforeHex}">BEFORE</div>
        <div class="cp-ba-color" style="color:${beforeHex}">${beforeColor}</div>
        <div class="cp-ba-desc">${beforeDesc}</div>
      </div>
      <div class="cp-ba-arrow" style="color:#374151">${arrowLabel || '⟶'}</div>
      <div class="cp-ba-box" style="border-color:${afterHex}55">
        <div class="cp-ba-label" style="color:${afterHex}">AFTER</div>
        <div class="cp-ba-color" style="color:${afterHex}">${afterLabel}</div>
        <div class="cp-ba-desc">${afterDesc}</div>
      </div>
    </div>`;
  }

  /* ───────────────────────────────────────────────────────────────
   * 3. UNSATURATION TEST WIDGET (shared logic, different results)
   * ─────────────────────────────────────────────────────────────── */

  function unsatWidget(isPositive, compoundName, extraNote) {
    const positive = isPositive;
    const bc = positive ? '#4ade80' : '#f87171';
    const bg = positive ? 'rgba(74,222,128,.08)' : 'rgba(248,113,113,.08)';
    const resultLabel = positive ? 'POSITIVE ✅ — Unsaturation confirmed!' : 'NEGATIVE ❌ — Saturated compound!';
    const broArrow = positive ? '🟤⟶⬜' : '🟤⟶🟤';
    const kmnArrow = positive ? '🟣⟶⬜' : '🟣⟶🟣';
    const broResult = positive ? 'DECOLOURISES ✅' : 'NO CHANGE ❌';
    const kmnResult = positive ? 'DECOLOURISES ✅' : 'NO CHANGE ❌';
    const broObs = positive ? 'Red-brown → Colourless' : 'Red-brown REMAINS';
    const kmnObs = positive ? 'Pink/Violet → Colourless' : 'Pink REMAINS';
    const broRxn = positive ? 'C=C + Br₂ → C(Br)–C(Br) (colourless addition product)' : 'Alkane + Br₂ (dark) → No reaction';
    const kmnRxn = positive ? 'C=C + KMnO₄ → diol. Mn⁷⁺(purple) → Mn²⁺(colourless)' : 'Alkane + KMnO₄ → No reaction';

    return `<div class="cp-unsat" style="background:${bg};border-color:${bc}">
      <div class="cp-unsat-title" style="color:${bc}">
        🧪 Unsaturation Test Results for ${compoundName} — ${resultLabel}
      </div>

      <div class="cp-unsat-grid">
        <!-- Bromine Test -->
        <div class="cp-test-box" style="border-color:${bc}44">
          <div class="cp-test-name" style="color:${bc}">🧫 Bromine Water Test</div>
          <div class="cp-test-reagent">Br₂ dissolved in CCl₄ (5% solution, red-brown)</div>
          <div class="cp-test-arrow">${broArrow}</div>
          <div class="cp-test-badge" style="background:${bg};color:${bc}">${broResult}</div>
          <div class="cp-test-obs">${broObs}</div>
          <div class="cp-test-eq">${broRxn}</div>
        </div>
        <!-- KMnO4 Test -->
        <div class="cp-test-box" style="border-color:${bc}44">
          <div class="cp-test-name" style="color:${bc}">🟣 Bayer's KMnO₄ Test</div>
          <div class="cp-test-reagent">KMnO₄ + KOH (alkaline, pink/violet)</div>
          <div class="cp-test-arrow">${kmnArrow}</div>
          <div class="cp-test-badge" style="background:${bg};color:${bc}">${kmnResult}</div>
          <div class="cp-test-obs">${kmnObs}</div>
          <div class="cp-test-eq">${kmnRxn}</div>
        </div>
      </div>

      <div class="cp-unsat-note" style="background:${bg};border-radius:9px">${extraNote}</div>
    </div>`;
  }

  /* ═══════════════════════════════════════════════════════════════
   * 4A. ALKANE CHEMICAL PROPERTIES
   * ═══════════════════════════════════════════════════════════════ */
  const ALKANE_PROPS = `
<div class="cp-section">

  ${hdr('⚗️', 'Chemical Properties of Alkane',
    'Saturated · sp³ hybridised · Only C–C single bonds (σ only) · Very LOW reactivity', 'var(--ka)')}

  ${unsatWidget(false, 'Alkane (CₙH₂ₙ₊₂)',
    '💡 <strong style="color:#e2e8f0">Why negative?</strong> Alkanes have ONLY strong σ (sigma) C–C single bonds — there are NO weak π bonds. Bromine and KMnO₄ attack π electrons to decolourise. Since alkanes have no π electrons to attack → <strong style="color:#f87171">no reaction</strong> in dark. Confirms <strong style="color:#f87171">saturation</strong>. <em>Exception:</em> Br₂ + alkane in UV light → substitution (NOT addition).')}

  <!-- RXN 01: COMBUSTION -->
  ${rxnCard('RXN 01', 'Combustion — Burns in Oxygen', 'Exothermic', 'var(--ka)', `
    <div style="font-family:'Fredoka One',cursive;font-size:.88rem;color:#fbbf24;margin-bottom:.2rem">🔥 Complete Combustion (excess O₂)</div>
    ${eq('CH₄ + 2O₂', 'Complete', 'Δ, excess O₂', 'CO₂ + 2H₂O + Heat', '#6ee7b7')}
    ${wordNote('Methane + Oxygen → Carbon Dioxide + Water + Heat (ΔH = −802 kJ/mol) · Blue/colourless flame')}
    ${eq('CₙH₂ₙ₊₂ + ((3n+1)/2)O₂', 'General', 'complete', 'nCO₂ + (n+1)H₂O + Heat', '#6ee7b7')}

    <div style="font-family:'Fredoka One',cursive;font-size:.88rem;color:#f87171;margin-bottom:.2rem;margin-top:.3rem">💨 Incomplete Combustion (limited O₂)</div>
    ${eq('CH₄ + O₂', 'Incomplete', 'limited O₂', ['CO (toxic!)', 'H₂O'], '#f87171')}
    ${wordNote('Yellow/orange smoky flame. CO = carbon monoxide — odourless, colourless, HIGHLY toxic!')}
    ${eq('2CH₄ + 3O₂', 'Very limited O₂', '', ['2C (soot)', '4H₂O'], '#fb923c')}

    ${note(`
      <strong>CO danger:</strong> Carbon monoxide binds haemoglobin (in blood) 200× more strongly than O₂ → prevents O₂ transport → death by suffocation. Always ensure ventilation when burning fuels!<br>
      <strong>In exam:</strong> Complete combustion gives CO₂ + H₂O. Incomplete gives CO or C (soot).
    `, 'var(--ka)')}
  `)}

  <!-- RXN 02: HALOGENATION -->
  ${rxnCard('RXN 02', 'Halogenation — Free Radical Substitution (UV light)', 'Substitution', 'var(--ka)', `
    ${eq('CH₄ + Cl₂', 'UV light (hν)', 'room temp', ['CH₃Cl', 'HCl'], '#6ee7b7')}
    ${wordNote('Methane + Chlorine → Chloromethane + Hydrogen Chloride')}
    ${eq('CH₃Cl + Cl₂', 'UV light', 'further', ['CH₂Cl₂ (DCM)', 'HCl'], '#a78bfa')}
    ${wordNote('Dichloromethane (methylene chloride) — common solvent')}

    <div class="cp-mech">
      <div class="cp-mech-title">⚙️ Free Radical Mechanism — 3 Stages</div>
      <div class="cp-mech-step"><span class="cp-mech-n">①</span><div><strong style="color:#fbbf24">Initiation:</strong> Cl₂ → <em>hν</em> → 2Cl• &nbsp;(homolytic cleavage — each Cl atom gets one electron → free radical)</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">②</span><div><strong style="color:#4ade80">Propagation:</strong> CH₄ + Cl• → •CH₃ + HCl &nbsp;|&nbsp; then •CH₃ + Cl₂ → CH₃Cl + Cl• &nbsp;(chain reaction continues)</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">③</span><div><strong style="color:#f87171">Termination:</strong> Cl• + Cl• → Cl₂ &nbsp;|&nbsp; Cl• + •CH₃ → CH₃Cl &nbsp;(radicals combine — chain ends)</div></div>
    </div>

    ${note(`
      <strong>Key rule:</strong> UV light (hν) or heat is ESSENTIAL to initiate free radicals.<br>
      In <strong>DARK</strong>: alkane + Cl₂/Br₂ → NO reaction at all.<br>
      Reactivity of halogens: F₂ &gt; Cl₂ &gt; Br₂. Iodine (I₂) is too slow — no substitution.<br>
      Products (stepwise): CH₃Cl → CH₂Cl₂ (DCM) → CHCl₃ (chloroform) → CCl₄ (carbon tetrachloride).
    `, 'var(--ka)')}
  `)}

  <!-- RXN 03: CRACKING -->
  ${rxnCard('RXN 03', 'Thermal Cracking / Catalytic Cracking', 'Cracking', 'var(--ka)', `
    ${eq('C₄H₁₀ (Butane)', 'Al₂O₃/Cr₂O₃', '500°C, no air', ['CH₃CH=CH₂ (Propene)', 'CH₄'], '#6ee7b7')}
    ${wordNote('Butane → Propene (alkene) + Methane (smaller alkane)')}
    ${eq('C₁₂H₂₆ (Dodecane)', 'High temp', 'catalytic', ['C₁₀H₂₂ (Decane)', 'CH₂=CH₂ (Ethene)'], '#6ee7b7')}
    ${wordNote('Longer petroleum alkane → shorter alkane + alkene (more useful products)')}
    ${note(`
      Cracking is how petroleum refineries produce petrol (shorter alkanes) and ethene/propene (for plastics).<br>
      <strong>Thermal cracking</strong> (700°C, no catalyst) → mainly alkenes.<br>
      <strong>Catalytic cracking</strong> (Al₂O₃/Cr₂O₃, 500°C) → branched alkanes + alkenes (better petrol).
    `, 'var(--ka)')}
  `)}

  <!-- RXN 04: NITRATION -->
  ${rxnCard('RXN 04', 'Nitration (Industrial — vapour phase)', 'Industrial', 'var(--ka)', `
    ${eq('CH₄ + HNO₃', 'NO• radical', '400°C, gas phase', ['CH₃NO₂ (Nitromethane)', 'H₂O'], '#6ee7b7')}
    ${wordNote('Methane + Nitric Acid (vapour) → Nitromethane + Water')}
    ${note(`
      Nitromethane (CH₃NO₂) is used as a fuel in drag racing and in making explosives.<br>
      Mechanism is free-radical (like halogenation). Not useful in lab — industrial process only.
    `, 'var(--ka)')}
  `)}

  <!-- SUMMARY -->
  <div class="cp-summary" style="border-color:rgba(255,112,67,.3);background:rgba(255,112,67,.05)">
    <div class="cp-summary-title" style="color:var(--ka)">📋 Summary — Chemical Properties of Alkane</div>
    <div class="cp-summary-list">
      <div class="cp-summary-item">🧪 <strong style="color:#f87171">Bromine test → NEGATIVE ❌</strong> (no reaction in dark — no π bond)</div>
      <div class="cp-summary-item">🟣 <strong style="color:#f87171">KMnO₄ test → NEGATIVE ❌</strong> (no reaction — no π bond)</div>
      <div class="cp-summary-item">🔥 <strong>Combustion</strong> → CO₂ + H₂O + heat (complete) | CO + H₂O (incomplete)</div>
      <div class="cp-summary-item">☀️ <strong>Halogenation</strong> → UV light → free radical substitution (Cl₂, Br₂)</div>
      <div class="cp-summary-item">♨️ <strong>Cracking</strong> → High temp → alkene + smaller alkane</div>
      <div class="cp-summary-item">❌ <strong style="color:#f87171">No reaction with:</strong> NaOH, HCl, H₂SO₄, KMnO₄, Br₂ (dark)</div>
      <div class="cp-summary-item">❌ <strong style="color:#f87171">No addition reactions</strong> → no π bonds to add across</div>
    </div>
  </div>
</div>`;

  /* ═══════════════════════════════════════════════════════════════
   * 4B. ALKENE CHEMICAL PROPERTIES
   * ═══════════════════════════════════════════════════════════════ */
  const ALKENE_PROPS = `
<div class="cp-section">

  ${hdr('⚗️', 'Chemical Properties of Alkene',
    'Unsaturated · C=C (1σ + 1π) · Weak π bond → High reactivity · Electrophilic addition', 'var(--ke)')}

  ${unsatWidget(true, 'Alkene (CₙH₂ₙ)',
    '💡 <strong style="color:#e2e8f0">Why positive?</strong> Alkenes have a C=C double bond containing a <strong style="color:#4ade80">weak π bond</strong> with high electron density above and below the bond axis. Electrophiles (Br₂, KMnO₄) attack this π electron cloud → π bond breaks → addition product forms. <strong style="color:#4ade80">Br₂ decolourises instantly</strong> because the dibromoalkane product is colourless. KMnO₄ decolourises because Mn⁷⁺ is reduced to colourless Mn²⁺. Both confirm <strong style="color:#4ade80">C=C unsaturation</strong>.')}

  <!-- WHY REACTIVE -->
  <div style="background:rgba(0,229,160,.06);border:1.5px dashed rgba(0,229,160,.4);border-radius:13px;padding:1rem 1.2rem;margin-bottom:1.5rem">
    <div style="font-family:'Fredoka One',cursive;font-size:.95rem;color:var(--ke);margin-bottom:.5rem">📌 Why alkenes are MORE reactive than alkanes?</div>
    <div style="font-size:.84rem;color:#94a3b8;line-height:1.7">
      C=C = <strong style="color:#4ade80">1 strong σ bond</strong> (head-on overlap, hard to break) + <strong style="color:#4ade80">1 weak π bond</strong> (sideways overlap of p-orbitals, easy to break).<br>
      The π bond creates a region of <strong>high electron density above and below</strong> the C–C axis → electrophiles are attracted → π bond breaks → two new σ bonds form.<br>
      This is <strong style="color:#4ade80">Electrophilic Addition</strong> — the characteristic reaction of alkenes.
    </div>
  </div>

  <!-- RXN 01: BROMINE TEST -->
  ${rxnCard('RXN 01', 'Addition of Br₂ — Bromine Test ✅ (POSITIVE)', 'Addition (Electrophilic)', 'var(--ke)', `
    ${baVisual('🟤', '#92400e', '🟤 Red-brown', 'Br₂ in CCl₄ or water', '#4ade80', '⬜ Colourless ✅', '1,2-Dibromoalkane', '+')}
    ${eq('CH₂=CH₂ + Br₂', 'room temp', 'no catalyst', 'CH₂Br–CH₂Br (1,2-dibromoethane, colourless)', '#6ee7b7')}
    ${wordNote('Ethene + Bromine → 1,2-Dibromoethane (colourless — confirms C=C double bond!)')}
    ${eq('CH₃CH=CH₂ + Br₂', 'room temp', '', 'CH₃CHBr–CH₂Br (1,2-dibromopropane)', '#6ee7b7')}

    <div class="cp-mech">
      <div class="cp-mech-title">⚙️ Electrophilic Addition Mechanism</div>
      <div class="cp-mech-step"><span class="cp-mech-n">①</span><div>Br₂ molecule is polarised by π electrons of C=C → Brδ⁺–Brδ⁻ forms</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">②</span><div>Brδ⁺ (electrophile) attacks π electron cloud → bromonium ion intermediate</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">③</span><div>Br⁻ (nucleophile) attacks from back → 1,2-dibromoalkane (colourless product)</div></div>
    </div>

    ${note(`
      <strong>Lab test:</strong> Add 2–3 drops bromine water to alkene → immediate decolourisation = C=C confirmed ✅<br>
      Alkane in dark: NO decolourisation ❌ (no π bond)<br>
      Each C=C consumes exactly 1 mol Br₂.
    `, 'var(--ke)')}
  `)}

  <!-- RXN 02: KMnO4 TEST -->
  ${rxnCard('RXN 02', "Bayer's KMnO₄ Test ✅ (POSITIVE)", 'Oxidation Test', 'var(--ke)', `
    ${baVisual('🟣', '#7c3aed', '🟣 Pink/Violet', 'KMnO₄+KOH solution', '#4ade80', '⬜ Colourless ✅', 'Mn²⁺ (colourless)', '+')}
    ${eq('CH₂=CH₂ + [O] + H₂O', 'KMnO₄/KOH', 'cold, dilute', 'HOCH₂–CH₂OH (Ethylene glycol)', '#6ee7b7')}
    ${wordNote('Ethene + KMnO₄ + water → Ethylene glycol (a diol). Mn⁷⁺ reduced to Mn²⁺ → colourless')}
    ${eq('CH₃CH=CH₂ + [O]+H₂O', 'cold KMnO₄', '', 'CH₃CH(OH)CH₂OH (Propane-1,2-diol)', '#6ee7b7')}

    ${note(`
      <strong>Why decolourisation?</strong> KMnO₄ contains Mn⁷⁺ (purple). Alkene reduces Mn⁷⁺ → Mn²⁺ (colourless) as π bond is oxidised to form a diol (glycol).<br>
      <strong>Cold dilute KMnO₄</strong> → diol (glycol) — stops here.<br>
      <strong>Hot concentrated KMnO₄</strong> → further oxidation → carboxylic acids or CO₂ (C=C fully cleaved).
    `, 'var(--ke)')}
  `)}

  <!-- RXN 03: H2 ADDITION -->
  ${rxnCard('RXN 03', 'Addition of H₂ — Catalytic Hydrogenation', 'Addition', 'var(--ke)', `
    ${eq('CH₂=CH₂ + H₂', 'Ni catalyst', '180–200°C', 'CH₃–CH₃ (Ethane)', '#ff7043')}
    ${wordNote('Ethene + Hydrogen → Ethane (saturated alkane)')}
    ${eq('CH₃CH=CH₂ + H₂', 'Pt / Pd / Ni', '180–200°C', 'CH₃CH₂CH₃ (Propane)', '#ff7043')}
    ${note(`
      π bond breaks → H₂ adds across C=C → saturated alkane product. Same number of carbons as alkene.<br>
      <strong>Industrial use:</strong> Vegetable oil (liquid, unsaturated) + H₂ → margarine (solid, saturated fat).<br>
      Catalyst: Ni (cheapest), Pt or Pd (faster, less temp). Pd/BaSO₄ (Lindlar) → gives alkene, not alkane.
    `, 'var(--ke)')}
  `)}

  <!-- RXN 04: HX ADDITION (MARKOVNIKOV) -->
  ${rxnCard('RXN 04', "Addition of HX — Markovnikov's Rule", 'Addition (Electrophilic)', 'var(--ke)', `
    ${eq('CH₂=CH₂ + HBr', 'heat / Δ', '', 'CH₃–CH₂Br (Bromoethane)', '#6ee7b7')}
    ${wordNote('Ethene + HBr → Bromoethane (symmetric — only 1 product possible)')}
    ${eq('CH₃–CH=CH₂ + HBr', 'heat', 'Markovnikov', 'CH₃–CHBr–CH₃ (2-Bromopropane, 90%)', '#4ade80')}
    ${wordNote('Propene + HBr → 2-Bromopropane (major) — H adds to C with more H atoms')}

    <div class="cp-markov" style="border-color:rgba(0,229,160,.3)">
      <div class="cp-markov-title" style="color:var(--ke)">⚖️ Markovnikov's Rule (1869)</div>
      <div class="cp-markov-row">
        In HX + unsymmetrical alkene:<br>
        <strong style="color:#4ade80">H⁺</strong> adds to the C with <strong style="color:#4ade80">MORE hydrogen atoms</strong>.<br>
        <strong style="color:#4ade80">X⁻</strong> adds to the C with <strong style="color:#4ade80">LESS hydrogen atoms</strong>.<br>
        <em>Reason: More stable 2° or 3° carbocation forms preferentially.</em>
      </div>
      <div class="cp-markov-grid">
        <div class="cp-mk-card" style="border-color:#4ade80">
          <div class="cp-mk-pct" style="color:#4ade80">90%</div>
          <div class="cp-mk-form">CH₃–CHBr–CH₃</div>
          <div class="cp-mk-label">2-Bromopropane<br>MAJOR (Markovnikov)<br>via stable 2° carbocation</div>
        </div>
        <div class="cp-mk-card" style="border-color:#f87171">
          <div class="cp-mk-pct" style="color:#f87171">10%</div>
          <div class="cp-mk-form">CH₃–CH₂–CH₂Br</div>
          <div class="cp-mk-label">1-Bromopropane<br>MINOR (anti-Markovnikov)<br>via unstable 1° carbocation</div>
        </div>
      </div>
    </div>

    ${note(`
      <strong>Anti-Markovnikov / Kharasch Effect:</strong> With organic peroxide (ROOR), HBr adds OPPOSITE → 1-bromopropane (99%) via free radical mechanism. Works ONLY with HBr — NOT HCl or HI!<br>
      <strong>HX reactivity:</strong> HI &gt; HBr &gt; HCl &gt; HF (larger halide = more reactive).
    `, 'var(--ke)')}
  `)}

  <!-- RXN 05: H2O HYDRATION -->
  ${rxnCard('RXN 05', 'Addition of H₂O — Hydration (→ Alcohol)', 'Addition (Hydration)', 'var(--ke)', `
    ${eq('CH₂=CH₂ + H₂O', 'H₃PO₄', '300°C, 60 atm', 'CH₃–CH₂–OH (Ethanol)', '#38bdf8')}
    ${wordNote('Ethene + Water → Ethanol — Industrial method for making ethanol from petroleum')}
    ${eq('CH₃CH=CH₂ + H₂O', 'H₂SO₄', 'Markovnikov', 'CH₃–CHOH–CH₃ (Propan-2-ol, major)', '#38bdf8')}
    ${note(`
      Water adds across C=C (Markovnikov) → alcohol. H goes to C with more H, OH goes to C with less H.<br>
      <strong>Industrial ethanol:</strong> Ethene + H₂O → H₃PO₄, 300°C, 60 atm → ethanol.<br>
      <strong>Lab method</strong> uses conc. H₂SO₄ (forms alkyl hydrogen sulphate first, then hydrolyse with water).
    `, 'var(--ke)')}
  `)}

  <!-- RXN 06: POLYMERISATION -->
  ${rxnCard('RXN 06', 'Polymerisation — Addition Polymer', 'Polymerisation', 'var(--ke)', `
    ${eq('n(CH₂=CH₂)', '1000 atm', '200°C, trace O₂', '(–CH₂–CH₂–)ₙ  POLYTHENE', '#a78bfa')}
    ${wordNote('n × Ethene (monomer) → Polythene (polymer) — plastic bags, bottles')}
    ${eq('n(CH₂=CHCl)', 'TiCl₄', '150°C', '(–CH₂–CHCl–)ₙ  PVC', '#a78bfa')}
    ${wordNote('Vinyl chloride (monomer) → PVC (polymer) — pipes, flooring, cables')}
    ${eq('n(CH₂=CHCH₃)', 'TiCl₄/AlR₃', '140 atm, 120°C', '(–CH₂–CH(CH₃)–)ₙ  POLYPROPENE', '#a78bfa')}
    ${note(`
      <strong>Addition polymerisation:</strong> n C=C bonds break → n new C–C bonds → polymer chain. No atoms lost.<br>
      All π bonds convert to σ bonds → product is saturated (no more C=C).<br>
      Used for: plastics, packaging, fibres, films.
    `, 'var(--ke)')}
  `)}

  <!-- RXN 07: OZONOLYSIS -->
  ${rxnCard('RXN 07', 'Ozonolysis — Locates Position of C=C', 'Oxidative Cleavage', 'var(--ke)', `
    ${eq('RCH=CHR + O₃', 'O₃/CCl₄', 'step 1', 'ozonide intermediate', '#f59e0b')}
    ${eq('ozonide + H₂O', 'Zn powder', 'step 2, reductive', ['R–CHO (aldehyde)', "R'–CHO (aldehyde)"], '#6ee7b7')}
    ${wordNote('Purpose: determine WHERE the C=C double bond is in the carbon chain')}

    <div class="cp-mech">
      <div class="cp-mech-title">💡 Example: But-2-ene ozonolysis</div>
      <div class="cp-mech-step"><span class="cp-mech-n">①</span><div>CH₃CH=CHCH₃ + O₃ → ozonide (ring compound)</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">②</span><div>Ozonide + Zn/H₂O → 2 × CH₃CHO (ethanal) → confirms C=C was at C2</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">③</span><div>Ethanal → CH₃COOH (if no Zn, H₂O₂ oxidises aldehyde to acid)</div></div>
    </div>

    ${note(`
      ⚠️ <strong>Zn powder is essential!</strong> Without Zn → H₂O₂ (also produced) oxidises the aldehyde to carboxylic acid. Zn reacts with H₂O₂ → ZnO + H₂O (removes oxidant).<br>
      WITH Zn → clean aldehyde/ketone products.<br>
      WITHOUT Zn → carboxylic acids (harsh oxidation).
    `, 'var(--ke)')}
  `)}

  <!-- RXN 08: COMBUSTION -->
  ${rxnCard('RXN 08', 'Combustion', 'Exothermic', 'var(--ke)', `
    ${eq('C₂H₄ + 3O₂', 'complete', 'Δ', '2CO₂ + 2H₂O + heat', '#6ee7b7')}
    ${wordNote('Ethene + Oxygen → Carbon Dioxide + Water + Heat')}
    ${eq('CₙH₂ₙ + (3n/2)O₂', 'general formula', 'complete', 'nCO₂ + nH₂O + heat', '#6ee7b7')}
    ${note(`
      Alkenes burn with a <strong>slightly smoky/luminous yellow flame</strong> due to higher carbon:hydrogen ratio than alkanes.<br>
      Requires more O₂ per molecule than equivalent alkane (higher degree of unsaturation).
    `, 'var(--ke)')}
  `)}

  <!-- SUMMARY -->
  <div class="cp-summary" style="border-color:rgba(0,229,160,.3);background:rgba(0,229,160,.05)">
    <div class="cp-summary-title" style="color:var(--ke)">📋 Summary — Chemical Properties of Alkene</div>
    <div class="cp-summary-list">
      <div class="cp-summary-item">🧪 <strong style="color:#4ade80">Br₂ decolourisation ✅</strong> — Unsaturation confirmed (π bond reacts with Br₂)</div>
      <div class="cp-summary-item">🟣 <strong style="color:#4ade80">KMnO₄ decolourisation ✅</strong> — Bayer's test positive (Mn⁷⁺ → Mn²⁺)</div>
      <div class="cp-summary-item">🔥 <strong>Addition of H₂</strong> (Ni, 180°C) → saturated alkane</div>
      <div class="cp-summary-item">🧫 <strong>Addition of Br₂</strong> → 1,2-dibromoalkane (colourless)</div>
      <div class="cp-summary-item">⚗️ <strong>Addition of HX</strong> → Markovnikov → 2° alkyl halide (major)</div>
      <div class="cp-summary-item">💧 <strong>Hydration (H₂O)</strong> → Alcohol (Markovnikov, H₃PO₄)</div>
      <div class="cp-summary-item">🔗 <strong>Polymerisation</strong> → Addition polymer (Polythene, PVC, Polypropene)</div>
      <div class="cp-summary-item">✂️ <strong>Ozonolysis</strong> (O₃ then Zn/H₂O) → Aldehydes/Ketones</div>
      <div class="cp-summary-item">🔥 <strong>Combustion</strong> → CO₂ + H₂O (slightly sooty yellow flame)</div>
    </div>
  </div>
</div>`;

  /* ═══════════════════════════════════════════════════════════════
   * 4C. ALKYNE CHEMICAL PROPERTIES
   * ═══════════════════════════════════════════════════════════════ */
  const ALKYNE_PROPS = `
<div class="cp-section">

  ${hdr('⚗️', 'Chemical Properties of Alkyne',
    'Unsaturated · C≡C (1σ + 2π) · TWO weak π bonds · More reactive than alkene · Acidic H in alkyne-1', 'var(--ky)')}

  ${unsatWidget(true, 'Alkyne (CₙH₂ₙ₋₂)',
    '💡 <strong style="color:#e2e8f0">Why strongly positive?</strong> Alkynes have a C≡C triple bond with <strong style="color:#c084fc">TWO weak π bonds</strong>. Alkyne reacts with up to <strong style="color:#c084fc">2 moles of Br₂</strong> (one per π bond). KMnO₄ also reacts vigorously. Additionally, alkyne-1 (R–C≡C–H) has a <strong style="color:#c084fc">unique acidic terminal H</strong> that gives 3 special tests not seen with alkane or alkene.')}

  <!-- SPECIAL: ACIDIC H TESTS (ALKYNE-1 ONLY) -->
  <div class="cp-acidh" style="background:rgba(192,132,252,.07);border-color:var(--ky)">
    <div class="cp-acidh-title" style="color:var(--ky)">
      🔬 Special Identification Tests — <span style="color:#f472b6">ALKYNE-1 ONLY</span> (R–C≡C–<strong style="color:#f472b6">H</strong>)
    </div>
    <div class="cp-acidh-intro">
      The terminal H in alkyne-1 is bonded to an <strong style="color:#c084fc">sp-hybridised carbon</strong> (s-character = 50%). Higher s-character means electrons are held CLOSER to the nucleus → C–H bond is WEAKER and more POLAR → H⁺ released more easily → <strong style="color:#c084fc">mildly acidic</strong>.<br>
      <em>Acidity comparison: Alkyne-1 &gt; Alkene &gt; Alkane (sp &gt; sp² &gt; sp³ hybridised C–H)</em>
    </div>
    <div class="cp-test-row">
      <!-- Test 1 -->
      <div class="cp-test-item" style="border-color:#fbbf24">
        <div class="cp-test-item-title" style="color:#fbbf24">① Na Metal Test → H₂ gas bubbles ✅</div>
        <div class="cp-test-item-eq">2R–C≡C–H + 2Na(liq. NH₃) → 2R–C≡C–Na (sodium alkynide) + H₂ ↑</div>
        <div class="cp-test-item-obs">Hydrogen gas evolves as bubbles. Ignite → blue flame confirms H₂. Alkane and alkene give <strong>NO reaction</strong> with Na metal (their C–H is not acidic enough).</div>
      </div>
      <!-- Test 2 -->
      <div class="cp-test-item" style="border-color:#e2e8f0">
        <div class="cp-test-item-title" style="color:#e2e8f0">② Ammonical AgNO₃ Test → White precipitate ✅</div>
        <div class="cp-test-item-eq">R–C≡C–H + Ag(NH₃)₂NO₃ → R–C≡C–Ag ↓ (white ppt — silver alkynide) + NH₄NO₃ + NH₃</div>
        <div class="cp-test-item-obs">White / cream-coloured precipitate of silver alkynide forms immediately. Alkyne-2 (no terminal H) → <strong>NO precipitate</strong>. Used to DISTINGUISH alkyne-1 from alkyne-2.</div>
      </div>
      <!-- Test 3 -->
      <div class="cp-test-item" style="border-color:#f87171">
        <div class="cp-test-item-title" style="color:#f87171">③ Ammonical Cu₂Cl₂ Test → Red precipitate ✅</div>
        <div class="cp-test-item-eq">R–C≡C–H + Cu(NH₃)₂Cl → R–C≡C–Cu ↓ (red/brick-red ppt — copper alkynide) + NH₄Cl + NH₃</div>
        <div class="cp-test-item-obs">Brick-red precipitate of copper alkynide. The intense red colour is conclusive. Alkyne-2 → <strong>NO red precipitate</strong>. This is one of the most distinctive organic tests.</div>
      </div>
    </div>
    <div class="cp-acidh-warning">
      ⚠️ All 3 tests work ONLY for <strong>Alkyne-1 (terminal alkyne)</strong>. Alkyne-2 (internal — R–C≡C–R) has NO acidic H → gives NONE of these tests. Key for exams: <em>test for alkyne-1 vs alkyne-2 distinction.</em>
    </div>
  </div>

  <!-- RXN 01: BROMINE TEST -->
  ${rxnCard('RXN 01', 'Addition of Br₂ — Bromine Test ✅ (needs 2 mol Br₂!)', 'Addition (Electrophilic)', 'var(--ky)', `
    ${baVisual('🟤', '#92400e', '🟤 Red-brown', 'Br₂ in CCl₄', '#4ade80', '⬜ Colourless ✅', '(after 2 mol Br₂)', '+')}
    ${eq('CH≡CH + Br₂', '1st mol Br₂', 'room temp', 'CHBr=CHBr (trans-1,2-dibromoethene)', '#f59e0b')}
    ${wordNote('Step 1: First Br₂ adds — decolourises. Vinyl bromide (still has C=C).')}
    ${eq('CHBr=CHBr + Br₂', '2nd mol Br₂', 'further', 'CHBr₂–CHBr₂ (1,1,2,2-tetrabromoethane)', '#6ee7b7')}
    ${wordNote('Step 2: Second Br₂ adds — fully saturated. Total: 2 mol Br₂ consumed per C≡C.')}

    ${note(`
      <strong>Alkyne needs 2 mol Br₂</strong> (one per π bond). Compare: Alkene needs only 1 mol Br₂.<br>
      Each decolourisation step confirms one π bond. Two decolourisations confirm C≡C triple bond.<br>
      Reaction product: 1,1,2,2-tetrabromoalkane (colourless, viscous liquid).
    `, 'var(--ky)')}
  `)}

  <!-- RXN 02: KMnO4 TEST -->
  ${rxnCard('RXN 02', "Bayer's KMnO₄ Test ✅ (POSITIVE — more vigorous than alkene)", 'Oxidation Test', 'var(--ky)', `
    ${baVisual('🟣', '#7c3aed', '🟣 Pink/Violet', 'KMnO₄+KOH', '#4ade80', '⬜ Colourless ✅', 'Mn²⁺', '+')}
    ${eq('R–C≡C–H + [O]', 'KMnO₄/KOH', 'acidic, hot', ['R–COOH (carboxylic acid)', 'CO₂'], '#6ee7b7')}
    ${wordNote('Alkyne-1 oxidised: triple bond fully cleaved → carboxylic acid + CO₂')}
    ${eq('R–C≡C–R + [O]', 'KMnO₄', 'hot, conc.', ["R–COOH", "R'–COOH"], '#6ee7b7')}
    ${wordNote('Alkyne-2 oxidised: both sides become carboxylic acids')}
    ${note(`
      KMnO₄ oxidises alkyne more vigorously than alkene because TWO π bonds are available for oxidation.<br>
      Cold dilute KMnO₄ → partial oxidation → diketone or keto-acid.<br>
      Hot concentrated KMnO₄ → complete cleavage → 2 carboxylic acids (used to determine structure).
    `, 'var(--ky)')}
  `)}

  <!-- RXN 03: H2 ADDITION -->
  ${rxnCard('RXN 03', 'Addition of H₂ — Partial and Complete Hydrogenation', 'Addition', 'var(--ky)', `
    ${eq('CH≡CH + H₂', 'Lindlar catalyst', '25°C (STOPS at alkene)', 'CH₂=CH₂ (Ethene)', '#00e5a0')}
    ${wordNote('PARTIAL hydrogenation — Lindlar stops at alkene (1 mol H₂ only)')}
    ${eq('CH≡CH + 2H₂', 'Ni / Pt / Pd', '180–200°C', 'CH₃–CH₃ (Ethane)', '#ff7043')}
    ${wordNote('COMPLETE hydrogenation — Ni goes all the way to alkane (2 mol H₂)')}

    <div class="cp-cat-grid">
      <div class="cp-cat-card" style="border-color:rgba(0,229,160,.4)">
        <div class="cp-cat-name" style="color:var(--ke)">🔬 Lindlar's Catalyst</div>
        <div class="cp-cat-formula">Pd/BaSO₄ + quinoline</div>
        <div class="cp-cat-result" style="color:var(--ke)">Alkyne → Alkene (1 mol H₂)</div>
        <div class="cp-cat-how">BaSO₄ "poisons" Pd → reduces activity → stops at alkene stage</div>
      </div>
      <div class="cp-cat-card" style="border-color:rgba(255,112,67,.4)">
        <div class="cp-cat-name" style="color:var(--ka)">⚗️ Ni / Pt / Pd</div>
        <div class="cp-cat-formula">180–200°C</div>
        <div class="cp-cat-result" style="color:var(--ka)">Alkyne → Alkane (2 mol H₂)</div>
        <div class="cp-cat-how">Full hydrogenation — no stopping. Both π bonds broken.</div>
      </div>
    </div>

    ${note(`
      Alkyne needs 2 mol H₂ because triple bond has 2 π bonds.<br>
      Step 1 (1st mol H₂): C≡C → C=C (alkene). Step 2 (2nd mol H₂): C=C → C–C (alkane).<br>
      Lindlar catalyst selectively does only Step 1 → alkene. Plain Ni does both steps → alkane.
    `, 'var(--ky)')}
  `)}

  <!-- RXN 04: HX ADDITION -->
  ${rxnCard('RXN 04', 'Addition of HX — Markovnikov (2 moles needed)', 'Addition (Electrophilic)', 'var(--ky)', `
    ${eq('CH≡CH + HBr', 'heat, step 1', 'Markovnikov', 'CH₂=CHBr (vinyl bromide / bromoethene)', '#f59e0b')}
    ${wordNote('Step 1: HBr adds to C≡C → vinyl bromide (still has C=C double bond)')}
    ${eq('CH₂=CHBr + HBr', 'step 2', 'Markovnikov again', 'CH₃–CHBr₂ (1,1-dibromoethane)', '#6ee7b7')}
    ${wordNote('Step 2: Second HBr adds Markovnikov → geminal dihalide (both Br on same C)')}
    ${eq('CH₃–C≡CH + 2HBr', 'excess HBr', 'Markovnikov', 'CH₃–CBr₂–CH₃ (2,2-dibromopropane)', '#6ee7b7')}
    ${note(`
      <strong>Geminal dihalide:</strong> Both halogens end up on the SAME carbon (Markovnikov × 2).<br>
      Compare alkene: only 1 mol HX needed. Alkyne: 2 mol HX needed (one per π bond).<br>
      HX reactivity: HI &gt; HBr &gt; HCl &gt; HF.
    `, 'var(--ky)')}
  `)}

  <!-- RXN 05: H2O HYDRATION (WACKER) -->
  ${rxnCard('RXN 05', 'Addition of H₂O — Wacker/Hydration (→ Carbonyl compound)', 'Addition (Hydration)', 'var(--ky)', `
    ${eq('CH≡CH + H₂O', '2% HgSO₄ + 20% H₂SO₄', '80°C, Markovnikov', 'CH₃–CHO (Ethanal / Acetaldehyde)', '#fbbf24')}
    ${wordNote('Ethyne + Water → Ethanal (acetaldehyde) — via vinyl alcohol (enol) → tautomerism')}
    ${eq('R–C≡CH + H₂O', 'HgSO₄/H₂SO₄', '80°C, Markovnikov', 'R–CO–CH₃ (Ketone)', '#fbbf24')}
    ${wordNote('Higher alkynes (not ethyne) → ketone (not aldehyde) by Markovnikov addition')}

    <div class="cp-mech">
      <div class="cp-mech-title">💡 Mechanism — Enol/Keto Tautomerism</div>
      <div class="cp-mech-step"><span class="cp-mech-n">①</span><div>H⁺ adds to terminal C (Markovnikov) → vinyl cation</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">②</span><div>H₂O adds to the other C → vinyl alcohol (ENOL form: HO–C=C–)</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">③</span><div>Keto-enol tautomerism → vinyl alcohol rearranges to carbonyl compound (KETO form)</div></div>
      <div class="cp-mech-step"><span class="cp-mech-n">④</span><div>Ethyne → ethanal (aldehyde). All other alkynes → ketone (more substituted C gets the OH → Markovnikov)</div></div>
    </div>

    ${note(`
      ⚠️ <strong>Critical exam point:</strong><br>
      <strong>Ethyne (CH≡CH)</strong> → hydration → <strong>Ethanal (CH₃CHO)</strong> [ALDEHYDE]<br>
      <strong>Propyne / but-1-yne / any other alkyne</strong> → hydration → <strong>KETONE</strong> (not aldehyde)<br>
      Catalyst: HgSO₄ in 20% H₂SO₄ at 80°C is ESSENTIAL (Wacker conditions).
    `, 'var(--ky)')}
  `)}

  <!-- RXN 06: TRIMERISATION -->
  ${rxnCard('RXN 06', 'Trimerisation → Benzene (Alkyne is trimer of ethyne!)', 'Polymerisation', 'var(--ky)', `
    ${eq('3 HC≡CH', 'Fe tube', '450°C', 'C₆H₆ (Benzene)', '#818cf8')}
    ${wordNote('3 molecules of ethyne combine to form 1 molecule of benzene — trimerisation/cyclotrimerisation')}
    ${note(`
      This famous reaction proves <strong>benzene is a "trimer of acetylene"</strong>.<br>
      Ethyne gas passed through a hot iron (Fe) tube at 450°C → benzene vapour → condense → liquid benzene.<br>
      Only works with ethyne — higher alkynes give substituted benzenes (mixed products).<br>
      <strong>Historical importance:</strong> This reaction helped understand benzene's ring structure.
    `, 'var(--ky)')}
  `)}

  <!-- RXN 07: COMBUSTION -->
  ${rxnCard('RXN 07', 'Combustion — Very Luminous Sooty Flame', 'Exothermic', 'var(--ky)', `
    ${eq('2HC≡CH + 5O₂', 'complete combustion', 'Δ', '4CO₂ + 2H₂O + Heat', '#6ee7b7')}
    ${wordNote('Ethyne + Oxygen → Carbon Dioxide + Water + Heat')}
    ${eq('CₙH₂ₙ₋₂ + ((3n−1)/2)O₂', 'general formula', '', 'nCO₂ + (n−1)H₂O + Heat', '#6ee7b7')}
    ${eq('HC≡CH + O₂', 'oxy-acetylene torch', '~3500°C', 'CO₂ + H₂O + enormous heat', '#f87171')}
    ${note(`
      Alkynes burn with the <strong>most luminous and smokiest flame</strong> among aliphatic hydrocarbons — highest C:H ratio means most soot if O₂ is insufficient.<br>
      <strong>Oxy-acetylene welding:</strong> Ethyne + O₂ burns at ~3500°C — hot enough to cut and weld metals. Used in metal fabrication industries worldwide.<br>
      Store acetylene dissolved in propanone (acetone) under pressure — free gas is explosive above 1.5 atm.
    `, 'var(--ky)')}
  `)}

  <!-- SUMMARY -->
  <div class="cp-summary" style="border-color:rgba(192,132,252,.3);background:rgba(192,132,252,.05)">
    <div class="cp-summary-title" style="color:var(--ky)">📋 Summary — Chemical Properties of Alkyne</div>
    <div class="cp-summary-list">
      <div class="cp-summary-item">🧪 <strong style="color:#c084fc">Br₂ decolourisation ✅</strong> (2 mol needed) — TWO π bonds react with Br₂</div>
      <div class="cp-summary-item">🟣 <strong style="color:#c084fc">KMnO₄ decolourisation ✅</strong> — More vigorous than alkene (2 π bonds)</div>
      <div class="cp-summary-item">⚗️ <strong style="color:#f472b6">Alkyne-1 acidic H tests ✅</strong> — Na (H₂↑), AgNO₃ (white ppt), Cu₂Cl₂ (red ppt)</div>
      <div class="cp-summary-item">🔥 <strong>Addition of H₂</strong> — 1 mol (Lindlar → alkene) or 2 mol (Ni → alkane)</div>
      <div class="cp-summary-item">🧫 <strong>Addition of Br₂</strong> — 2 mol total → 1,1,2,2-tetrabromoalkane</div>
      <div class="cp-summary-item">⚗️ <strong>Addition of HX</strong> — 2 mol → geminal dihalide (Markovnikov × 2)</div>
      <div class="cp-summary-item">💧 <strong>Hydration (H₂O)</strong> — HgSO₄, 80°C → Ethanal (ethyne) or Ketone (higher alkynes)</div>
      <div class="cp-summary-item">🔶 <strong>Trimerisation</strong> — 3HC≡CH → Fe, 450°C → Benzene (C₆H₆)</div>
      <div class="cp-summary-item">🔥 <strong>Combustion</strong> — Very luminous sooty flame · Oxy-acetylene ~3500°C</div>
    </div>
  </div>
</div>`;

  /* ───────────────────────────────────────────────────────────────
   * 5. INJECTION — append to panels after DOM is ready
   * ─────────────────────────────────────────────────────────────── */
  function inject() {
    const ka = document.getElementById('panel-ka');
    const ke = document.getElementById('panel-ke');
    const ky = document.getElementById('panel-ky');

    if (!ka || !ke || !ky) {
      // Panels not yet created — retry
      setTimeout(inject, 300);
      return;
    }

    // Only inject once
    if (ka.dataset.propsInjected) return;
    ka.insertAdjacentHTML('beforeend', ALKANE_PROPS);
    ke.insertAdjacentHTML('beforeend', ALKENE_PROPS);
    ky.insertAdjacentHTML('beforeend', ALKYNE_PROPS);
    ka.dataset.propsInjected = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(inject, 600); });
  } else {
    setTimeout(inject, 600);
  }

})();
