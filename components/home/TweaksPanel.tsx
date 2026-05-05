"use client";
import { useEffect } from "react";

export function TweaksPanel(): null {
  useEffect(() => {
    const TWEAKS: Record<string, string> = {
      brown: "#8B5E3C",
      olive: "#7AB027",
      yellow: "#DFDF12",
      heroHeadline: "Crafting quality, building futures.",
      heroLayout: "split",
    };
    const root = document.documentElement;

    function applyTweaks(t: Record<string, string>): void {
      if (t.brown) root.style.setProperty("--brown", t.brown);
      if (t.olive) root.style.setProperty("--olive", t.olive);
      if (t.yellow) root.style.setProperty("--yellow", t.yellow);
      if (t.heroLayout)
        document.body.setAttribute("data-hero-layout", t.heroLayout);
      if (t.heroHeadline) {
        const h = document.querySelector('[data-tweak="heroHeadline"]');
        if (h) h.textContent = t.heroHeadline;
      }
    }
    applyTweaks(TWEAKS);

    let panel: HTMLDivElement | null = null;

    function buildPanel(): void {
      panel = document.createElement("div");
      panel.id = "tweaks-panel";
      const hasHeadline = !!document.querySelector(
        '[data-tweak="heroHeadline"]',
      );
      panel.innerHTML = `
        <style>
          #tweaks-panel {
            position: fixed; bottom: 24px; right: 24px; z-index: 1000;
            width: 280px; background: #fff; border: 1px solid #2A1D1422;
            border-radius: 8px; box-shadow: 0 20px 60px rgba(42,29,20,0.18);
            font-family: 'Work Sans', sans-serif; color: #2A1D14; overflow: hidden;
          }
          #tweaks-panel .tp-header {
            padding: 14px 16px; border-bottom: 1px solid #2A1D1422;
            display: flex; justify-content: space-between; align-items: center;
            background: #F6F1EA;
          }
          #tweaks-panel .tp-title {
            font-family: 'JetBrains Mono', monospace; font-size: 11px;
            letter-spacing: 0.2em; text-transform: uppercase;
          }
          #tweaks-panel .tp-body { padding: 14px 16px; max-height: 70vh; overflow-y: auto; }
          #tweaks-panel .tp-row { margin-bottom: 14px; }
          #tweaks-panel label {
            display: block; font-size: 11px; letter-spacing: 0.1em;
            text-transform: uppercase; color: #6B5847; margin-bottom: 6px;
            font-family: 'JetBrains Mono', monospace;
          }
          #tweaks-panel .tp-swatches { display: flex; gap: 6px; flex-wrap: wrap; }
          #tweaks-panel .tp-sw {
            width: 28px; height: 28px; border-radius: 4px;
            border: 2px solid transparent; cursor: pointer;
          }
          #tweaks-panel .tp-sw.active { border-color: #2A1D14; }
          #tweaks-panel input[type="text"], #tweaks-panel select {
            width: 100%; padding: 8px 10px; border: 1px solid #2A1D1433;
            border-radius: 4px; font-size: 13px; font-family: inherit; background: #fff;
          }
        </style>
        <div class="tp-header"><span class="tp-title">Tweaks</span></div>
        <div class="tp-body">
          <div class="tp-row">
            <label>Brown</label>
            <div class="tp-swatches" data-key="brown">
              <div class="tp-sw" style="background:#8B5E3C" data-val="#8B5E3C"></div>
              <div class="tp-sw" style="background:#6B4226" data-val="#6B4226"></div>
              <div class="tp-sw" style="background:#A9784E" data-val="#A9784E"></div>
              <div class="tp-sw" style="background:#5C3A22" data-val="#5C3A22"></div>
            </div>
          </div>
          <div class="tp-row">
            <label>Accent (Olive)</label>
            <div class="tp-swatches" data-key="olive">
              <div class="tp-sw" style="background:#7AB027" data-val="#7AB027"></div>
              <div class="tp-sw" style="background:#5C8A1F" data-val="#5C8A1F"></div>
              <div class="tp-sw" style="background:#DFDF12" data-val="#DFDF12"></div>
              <div class="tp-sw" style="background:#C68A3A" data-val="#C68A3A"></div>
            </div>
          </div>
          ${
            hasHeadline
              ? `
          <div class="tp-row">
            <label>Hero Headline</label>
            <input type="text" data-input="heroHeadline" />
          </div>
          <div class="tp-row">
            <label>Hero Layout</label>
            <select data-input="heroLayout">
              <option value="split">Split — image right</option>
              <option value="centered">Centered editorial</option>
              <option value="overlay">Full-bleed overlay</option>
            </select>
          </div>`
              : ""
          }
        </div>
      `;
      document.body.appendChild(panel);

      panel.querySelectorAll(".tp-swatches").forEach((group) => {
        const key = (group as HTMLElement).dataset.key ?? "";
        group.querySelectorAll(".tp-sw").forEach((sw) => {
          const swEl = sw as HTMLElement;
          if (swEl.dataset.val === TWEAKS[key]) swEl.classList.add("active");
          swEl.addEventListener("click", () => {
            group
              .querySelectorAll(".tp-sw")
              .forEach((s) => s.classList.remove("active"));
            swEl.classList.add("active");
            TWEAKS[key] = swEl.dataset.val ?? "";
            applyTweaks({ [key]: swEl.dataset.val ?? "" });
            persist();
          });
        });
      });

      panel.querySelectorAll("[data-input]").forEach((inp) => {
        const inpEl = inp as HTMLInputElement | HTMLSelectElement;
        const key = inpEl.dataset.input ?? "";
        inpEl.value = TWEAKS[key] ?? "";
        inpEl.addEventListener("input", () => {
          TWEAKS[key] = inpEl.value;
          applyTweaks({ [key]: inpEl.value });
          persist();
        });
      });
    }

    function persist(): void {
      try {
        window.parent.postMessage(
          { type: "__edit_mode_set_keys", edits: TWEAKS },
          "*",
        );
      } catch {}
    }

    const onMessage = (e: MessageEvent): void => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === "__activate_edit_mode") {
        if (!panel) buildPanel();
        panel!.style.display = "block";
      } else if (e.data.type === "__deactivate_edit_mode") {
        if (panel) panel.style.display = "none";
      }
    };
    window.addEventListener("message", onMessage);
    try {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    } catch {}

    return () => {
      window.removeEventListener("message", onMessage);
      if (panel) panel.remove();
    };
  }, []);

  return null;
}
