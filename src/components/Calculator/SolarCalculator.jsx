import React, { useState } from "react";
import {
  FaRupeeSign,
  FaHome,
  FaIndustry,
  FaBuilding,
  FaSchool
} from "react-icons/fa";
import { styles } from "../../styles/styles";

const SolarCalculator = () => {
  const [form, setForm] = useState({
    state: "",
    bill: "",
    area: "",
    consumerType: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    const { area, bill, consumerType } = form;

    if (!area || !bill || !consumerType) {
      alert("Please fill in all required fields.");
      return;
    }

    const areaSqFt = parseFloat(area);
    const monthlyBill = parseFloat(bill);

    let efficiencyPerSqFt = 15;
    let sunlightHours = 5;

    switch (consumerType) {
      case "Industrial":
        efficiencyPerSqFt = 18;
        sunlightHours = 5.5;
        break;
      case "Institutional":
        efficiencyPerSqFt = 16;
        sunlightHours = 5.25;
        break;
      default:
        break;
    }

    const electricityRates = {
      Residential: 6,
      Commercial: 8,
      Industrial: 10,
      Institutional: 7,
    };
    const electricityRate = electricityRates[consumerType] || 8;
    const systemLoss = 0.2;

    const systemCapacityKW = (areaSqFt * efficiencyPerSqFt) / 1000;
    const dailyGeneration = systemCapacityKW * sunlightHours * (1 - systemLoss);
    const monthlyGeneration = dailyGeneration * 30;
    const annualGeneration = dailyGeneration * 365;

    const monthlySavings = monthlyGeneration * electricityRate;
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = (annualSavings / (monthlyBill * 12)) * 100;

    const excessEnergy = Math.max(annualGeneration - (monthlyBill * 12) / electricityRate, 0);
    const lifetimeProduction = annualGeneration * 25;
    const co2Saved = (annualGeneration * 0.85 * 25) / 1000;
    const waterSaved = annualGeneration * 5.5 * 25;
    const treesEquivalent = annualGeneration * 0.02 * 25;

    setResult({
      systemCapacityKW: systemCapacityKW.toFixed(1),
      annualGeneration: annualGeneration.toFixed(0),
      monthlyGeneration: monthlyGeneration.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      savingsPercentage: savingsPercentage.toFixed(1),
      excessEnergy: excessEnergy.toFixed(0),
      lifetimeProduction: lifetimeProduction.toFixed(0),
      co2Saved: co2Saved.toFixed(2),
      waterSaved: waterSaved.toFixed(0),
      treesEquivalent: treesEquivalent.toFixed(0),
    });
  };

  return (
    <div className={`w-full ${styles.paddingHorizontal} py-6 lg:py-10 bodyBg`}>
      <div>
        <div className="flex flex-col gap-y-6 justify-start items-center text-center">
          <h1 className="font-bold text-4xl">Solar Calculator</h1>
          <p className="text-black text-base leading-7  font-medium">
            Our Solar Calculator is designed to help you estimate the potential of solar energy for your space.
            By simply entering your rooftop area, monthly electricity bill, and consumer type, you can discover
            how much energy you can generate, how much money you can save, and the positive impact on the environment.
            Whether you're a homeowner, business owner, or industrial user, this tool empowers you to make
            informed, sustainable choices with ease and clarity.
          </p>
        </div>

        <div className="text-center py-5 mt-10">
          <div className="flex items-center justify-center gap-3 " data-aos="flip-up">
            <div className="w-24 border border-purple" />
            <h2 className="text-purple font-bold text-xl md:text-4xl uppercase">
              Solar Calculator
            </h2>
            <div className="w-24 border border-purple" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10 mb-8">
          <InputField label="State" name="state" value={form.state} onChange={handleChange} type="select" options={["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu"]} data-aos="fade-up-right" />
          <InputField label="Monthly Bill (₹)" name="bill" value={form.bill} onChange={handleChange} placeholder="e.g. 5000" data-aos="fade-up-left" />
          <InputField label="Rooftop Area (sq.ft)" name="area" value={form.area} onChange={handleChange} placeholder="e.g. 1000" data-aos="fade-up-right" />
          <InputField label="Type of Consumer" name="consumerType" value={form.consumerType} onChange={handleChange} type="select" options={["Commercial", "Industrial", "Institutional", "Residential"]} data-aos="fade-up-left" />
        </div>

        <div className="text-center mt-8">
          <button onClick={handleCalculate} className="bg-purple text-white font-semibold py-3 px-8 rounded text-lg">
            Calculate
          </button>
        </div>

        {result && <ResultTable result={result} />}
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, placeholder, icon, type = "text", options = [] }) => (
  <div className="space-y-2">
    <label className="block text-md md:text-xl font-semibold mb-1 flex items-center">
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </label>
    {type === "select" ? (
      <select name={name} value={value} onChange={onChange} className="w-full border border-gray-300 p-3 rounded">
        <option value="">Select {label.replace("*", "").trim()}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ) : (
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2.5 rounded"
      />
    )}
  </div>
);

const ResultTable = ({ result }) => (
  <div className="mt-10 overflow-x-auto">
    <h2 className="text-2xl font-bold text-center mb-6">Solar Calculation Result</h2>
    <table className="min-w-full border border-gray-300 shadow-md">
      <thead className="bg-purple text-white">
        <tr><th className="px-4 py-3 text-left">Metric</th><th className="px-4 py-3 text-left">Value</th></tr>
      </thead>
      <tbody className="bg-white text-gray-800">
        <Row label="Solar Power Plant Capacity" value={`${result.systemCapacityKW} kWp`} />
        <Row label="Energy Produced / Annum" value={`${result.annualGeneration} kWh`} />
        <Row label="Excess Energy / Annum" value={`${result.excessEnergy} kWh`} />
        <Row label="Annual Savings (INR)" value={`₹${result.annualSavings}`} />
        <Row label="Monthly Savings" value={`₹${result.monthlySavings}`} />
        <Row label="Annual Savings (%)" value={`${result.savingsPercentage}%`} />
        <Row label="Lifetime Production (25 yrs)" value={`${result.lifetimeProduction} kWh`} />
        <Row label="CO₂ Saved" value={`${result.co2Saved} tonnes`} />
        <Row label="Water Saved" value={`${result.waterSaved} litres`} />
        <Row label="Tree Equivalent" value={`${result.treesEquivalent} trees`} />
      </tbody>
    </table>

    <div className="text-center mt-10">
      <a href="/contact-us">
        <button className="bg-purple text-white font-semibold py-3 px-8 rounded text-md md:text-lg">
          Get a Plant
        </button>
      </a>
    </div>
  </div>
);

const Row = ({ label, value }) => (
  <tr>
    <td className="border px-4 py-2">{label}</td>
    <td className="border px-4 py-2">{value}</td>
  </tr>
);

export default SolarCalculator;
