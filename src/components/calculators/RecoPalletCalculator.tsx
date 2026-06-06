"use client";

import { useState } from "react";
import { TreePine, Fuel, Navigation } from "lucide-react";

const CO2_PER_PALLET_KG = 3.12 * 16 - 0.013 * 17; // ≈49.699 kg/枚
const SUGI_KG_PER_YEAR = 14;
const GASOLINE_CO2_KG_PER_L = 2.32;
const TOKYO_OSAKA_ROUND_KM = 1100;
const FUEL_EFFICIENCY_KM_PER_L = 15;

const QUICK_SELECT = [100, 500, 1000, 3000, 5000];

export default function RecoPalletCalculator() {
  const [count, setCount] = useState(1000);

  const co2Kg = CO2_PER_PALLET_KG * count;
  const co2Ton = co2Kg / 1000;
  const sugi = Math.round(co2Kg / SUGI_KG_PER_YEAR);
  const gasoline = Math.round(co2Kg / GASOLINE_CO2_KG_PER_L);
  const tripCo2Kg = (TOKYO_OSAKA_ROUND_KM / FUEL_EFFICIENCY_KM_PER_L) * GASOLINE_CO2_KG_PER_L;
  const trips = Math.round(co2Kg / tripCo2Kg);

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 md:p-8">
      {/* Slider */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-sm font-semibold text-foreground">パレット枚数</span>
          <span className="text-3xl font-bold text-emerald-600">{count.toLocaleString()}</span>
          <span className="text-sm text-foreground">枚</span>
        </div>
        <input
          type="range"
          min={1}
          max={10000}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full accent-emerald-600 h-2 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1枚</span>
          <span>10,000枚</span>
        </div>
        <div className="flex gap-2 flex-wrap mt-3">
          {QUICK_SELECT.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setCount(n)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                count === n
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-emerald-700 border-emerald-200 hover:border-emerald-500"
              }`}
            >
              {n.toLocaleString()}枚
            </button>
          ))}
        </div>
      </div>

      {/* CO₂ main result */}
      <div className="bg-white rounded-xl p-6 border border-emerald-200 mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground mb-1">CO₂削減量（推計）</p>
        <p className="text-6xl font-bold text-emerald-600 leading-none">{co2Ton.toFixed(2)}</p>
        <p className="text-xl font-semibold text-foreground mt-1">t-CO₂</p>
        <p className="text-xs text-muted-foreground mt-1">({co2Kg.toFixed(0)} kg)</p>
      </div>

      {/* Equivalent conversions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
          <TreePine className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{sugi.toLocaleString()}<span className="text-base font-medium">本</span></p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-1">杉の木の年間CO₂吸収量に相当<br/><span className="text-emerald-600">（1本=14kg/年）</span></p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
          <Fuel className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{gasoline.toLocaleString()}<span className="text-base font-medium">L</span></p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-1">ガソリンの排出CO₂に相当<br/><span className="text-amber-600">（1L=2.32kg CO₂）</span></p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
          <Navigation className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{trips.toLocaleString()}<span className="text-base font-medium">回</span></p>
          <p className="text-xs text-muted-foreground leading-relaxed mt-1">東京〜大阪往復の排出CO₂に相当<br/><span className="text-blue-600">（1,100km・燃費15km/L）</span></p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        ※ 計算式：(3.12×16 − 0.013×17)×枚数÷1,000（t-CO₂）。木製パレット製造排出量との差分。<br/>
        <span className="text-emerald-700 font-medium">製造工程は太陽光発電100%使用のため、製造時CO₂排出量は実質ほぼゼロです。</span>
      </p>
    </div>
  );
}
