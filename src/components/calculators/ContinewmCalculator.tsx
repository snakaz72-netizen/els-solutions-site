"use client";

import { useState } from "react";

const CO2_FACTOR = 0.434; // kg/kWh（経産省標準値）
const KWH_PER_AC = 10000; // 推定年間電力使用量 kWh/台
const DEMAND_RATE_PER_KW_MONTH = 1500; // 円/kW/月（目安）

export default function ContinewmCalculator() {
  const [acCount, setAcCount] = useState(10);
  const [annualKwh, setAnnualKwh] = useState(100000); // 10台 × 10,000
  const [unitPrice, setUnitPrice] = useState(23.79);
  const [acRatio, setAcRatio] = useState(45);
  const [savingRate, setSavingRate] = useState(10);
  const [demandKw, setDemandKw] = useState("");

  const handleAcCountChange = (v: number) => {
    setAcCount(v);
    setAnnualKwh(v * KWH_PER_AC);
  };

  const savedKwh = annualKwh * (acRatio / 100) * (savingRate / 100);
  const annualSaving = Math.round(savedKwh * unitPrice);
  const co2Reduction = Math.round(savedKwh * CO2_FACTOR);

  const demandNum = parseFloat(demandKw);
  const hasDemand = !isNaN(demandNum) && demandNum > 0;
  const demandSaving = hasDemand
    ? Math.round(demandNum * (savingRate / 100) * DEMAND_RATE_PER_KW_MONTH * 12)
    : null;

  const totalSaving = annualSaving + (demandSaving ?? 0);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
      {/* Inputs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        {/* エアコン台数 */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            エアコン台数：<span className="text-blue-600 text-lg">{acCount}</span> 台
          </label>
          <input
            type="range" min={1} max={500} value={acCount}
            onChange={(e) => handleAcCountChange(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1台</span><span>500台</span>
          </div>
        </div>

        {/* 年間電力使用量 */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            年間電力使用量
            <span className="text-xs font-normal text-muted-foreground ml-1">（施設全体）</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number" min={0} value={annualKwh}
              onChange={(e) => setAnnualKwh(Number(e.target.value))}
              className="flex-1 border border-border/60 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="text-sm text-muted-foreground shrink-0">kWh</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">台数から自動試算（1台 ≈ 10,000kWh/年）・直接入力可</p>
        </div>

        {/* 電力単価 */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">電力単価</label>
          <div className="flex items-center gap-2">
            <input
              type="number" min={0} step="0.01" value={unitPrice}
              onChange={(e) => setUnitPrice(Number(e.target.value))}
              className="flex-1 border border-border/60 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="text-sm text-muted-foreground shrink-0">円/kWh</span>
          </div>
        </div>

        {/* 空調電力比率 */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            空調電力比率：<span className="text-blue-600">{acRatio}</span>%
          </label>
          <input
            type="range" min={1} max={100} value={acRatio}
            onChange={(e) => setAcRatio(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1%</span><span>100%</span>
          </div>
        </div>

        {/* 節電率 */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            節電率：<span className="text-blue-600">{savingRate}</span>%
          </label>
          <input
            type="range" min={1} max={30} value={savingRate}
            onChange={(e) => setSavingRate(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1%</span><span>30%</span>
          </div>
        </div>

        {/* デマンド値（任意） */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            デマンド値
            <span className="text-xs font-normal text-muted-foreground ml-1">（任意）</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number" min={0} value={demandKw} placeholder="例：100"
              onChange={(e) => setDemandKw(e.target.value)}
              className="flex-1 border border-border/60 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="text-sm text-muted-foreground shrink-0">kW</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">入力するとデマンド削減額を表示します</p>
        </div>
      </div>

      {/* Results */}
      <div className={`grid gap-4 mb-6 ${hasDemand ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div className="bg-white rounded-xl p-5 border border-blue-200 text-center">
          <p className="text-sm text-muted-foreground mb-1">年間節電額</p>
          <p className="text-3xl font-bold text-blue-600">{annualSaving.toLocaleString()}</p>
          <p className="text-sm font-medium text-foreground mt-0.5">円/年</p>
          <p className="text-xs text-muted-foreground mt-1">節電量：{Math.round(savedKwh).toLocaleString()} kWh</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-emerald-200 text-center">
          <p className="text-sm text-muted-foreground mb-1">年間CO₂削減量</p>
          <p className="text-3xl font-bold text-emerald-600">{co2Reduction.toLocaleString()}</p>
          <p className="text-sm font-medium text-foreground mt-0.5">kg-CO₂/年</p>
          <p className="text-xs text-muted-foreground mt-1">ESGスコープ2に計上可能</p>
        </div>

        {demandSaving !== null && (
          <div className="bg-white rounded-xl p-5 border border-amber-200 text-center">
            <p className="text-sm text-muted-foreground mb-1">デマンド削減額</p>
            <p className="text-3xl font-bold text-amber-600">{demandSaving.toLocaleString()}</p>
            <p className="text-sm font-medium text-foreground mt-0.5">円/年</p>
            <p className="text-xs text-muted-foreground mt-1">※1,500円/kW/月で試算</p>
          </div>
        )}

        <div className={`bg-blue-600 rounded-xl p-5 text-center ${hasDemand ? "" : "sm:col-span-2 md:col-span-1 md:col-start-1"}`}>
          <p className="text-sm text-blue-200 mb-1">合計削減額</p>
          <p className="text-3xl font-bold text-white">{totalSaving.toLocaleString()}</p>
          <p className="text-sm font-semibold text-blue-100 mt-0.5">円/年</p>
          {hasDemand && (
            <p className="text-xs text-blue-200 mt-1">節電額＋デマンド削減額</p>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        ※ 計算結果は概算値です。正確な効果測定は現地調査をご依頼ください。<br />
        ※ CO₂換算係数：0.434 kg-CO₂/kWh（経産省標準値）
      </p>
    </div>
  );
}
