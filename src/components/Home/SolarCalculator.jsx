import React, { useState } from "react";
import { 
  FaSolarPanel,
  FaSun, 
  FaLeaf, 
  FaTint, 
  FaTree, 
  FaRupeeSign, 
  FaPercentage,
  FaIndustry,
  FaHome,
  FaBuilding,
  FaSchool,
  FaCalculator
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
    if (!area || !bill || !consumerType) return;

    const areaSqFt = parseFloat(area);
    const monthlyBill = parseFloat(bill);

    // Assign values based on consumer type
    let efficiencyPerSqFt = 15;
    let sunlightHours = 5;

    if (consumerType === "Industrial") {
      efficiencyPerSqFt = 18;
      sunlightHours = 5.5;
    } else if (consumerType === "Institutional") {
      efficiencyPerSqFt = 16;
      sunlightHours = 5.25;
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
    const annualGeneration = dailyGeneration * 365;
    const monthlyGeneration = dailyGeneration * 30;
    const monthlySavings = monthlyGeneration * electricityRate;
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = (annualSavings / (monthlyBill * 12)) * 100;
    const lifetimeProduction = annualGeneration * 25;
    const co2Saved = annualGeneration * 0.85 * 25 / 1000; // in tonnes
    const waterSaved = annualGeneration * 5.5 * 25; // in liters
    const treesEquivalent = annualGeneration * 0.02 * 25; // trees equivalent

    setResult({
      systemCapacityKW: systemCapacityKW.toFixed(0),
      annualGeneration: annualGeneration.toFixed(0),
      monthlyGeneration: monthlyGeneration.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      savingsPercentage: savingsPercentage.toFixed(0),
      lifetimeProduction: lifetimeProduction.toFixed(0),
      co2Saved: co2Saved.toFixed(2),
      waterSaved: waterSaved.toFixed(0),
      treesEquivalent: treesEquivalent.toFixed(0),
    });
  };

  const getConsumerIcon = () => {
    switch(form.consumerType) {
      case "Residential": return <FaHome className="inline mr-2" />;
      case "Commercial": return <FaBuilding className="inline mr-2" />;
      case "Industrial": return <FaIndustry className="inline mr-2" />;
      case "Institutional": return <FaSchool className="inline mr-2" />;
      default: return null;
    }
  };

  return (
    <div  className={`w-full ${styles.paddingHorizontal} py-6 lg:py-10 bodyBg flex flex-col gap-y-10`}>
      <div className=" ">
        <div data-aos="fade-up"  className="flex items-center justify-center gap-x-3 py-5">
          <div className="border w-24 border-purple" />
          <p className="text-purple font-bold text-xl md:text-4xl uppercase text-center">
        solar Calculator
          </p>
          <div className="border w-24 border-purple" />
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-8 mt-10">
        
            <div className="space-y-6">
              <label className="block text-md md:text-xl font-semibold mb-1">State*</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>

            <div className="space-y-6">
              <label className="block text-md md:text-xl font-semibold mb-1 flex items-center">
                <FaRupeeSign className="mr-1" /> Monthly Bill (₹)*
              </label>
              <input
                type="number"
                name="bill"
                value={form.bill}
                onChange={handleChange}
                placeholder="e.g. 5000"
                className="w-full border border-gray-300 p-2.5 rounded"
              />
            </div>
          


            <div className="space-y-6">
              <label className="block text-md md:text-xl font-semibold mb-1">Rooftop Area (sq. ft)*</label>
              <input
                type="number"
                name="area"
                value={form.area}
                onChange={handleChange}
                placeholder="e.g. 1000"
                className="w-full border border-gray-300 p-2.5 rounded"
              />
            </div>

            <div className="space-y-6">
              <label className="block text-md md:text-xl font-semibold mb-1">Type of Consumer*</label>
              <select
                name="consumerType"
                value={form.consumerType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="">Select Type</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Institutional">Institutional</option>
                <option value="Residential">Residential</option>
              </select>
              {/* {form.consumerType && (
                <div className="mt-1 text-sm text-gray-600">
                  {getConsumerIcon()} {form.consumerType}
                </div>
              )} */}
            </div>
     
        </div>

        <div className="text-center mt-10 mb-10">
          <button
            onClick={handleCalculate}
            className="bg-purple  text-white font-semibold py-3 px-8 rounded text-lg flex items-center justify-center mx-auto"
          >
            {/* <FaCalculator className="mr-2" />  */}
            CALCULATE
          </button>
        </div>

      {result && (
  <div className="mt-8 overflow-x-auto">
    <h2 className="text-2xl font-bold text-center mb-6">Solar Calculation Result</h2>
    <table className="min-w-full table-auto border border-gray-300 shadow-lg">
      <thead className="bg-purple text-white">
        <tr>
          <th className="px-4 py-3 text-left">Metric</th>
          <th className="px-4 py-3 text-left">Value</th>
        </tr>
      </thead>
      <tbody className="bg-white text-gray-700">
        <tr>
          <td className="border px-4 py-2">System Capacity</td>
          <td className="border px-4 py-2">{result.systemCapacityKW} kWp</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Annual Generation</td>
          <td className="border px-4 py-2">{result.annualGeneration} kWh</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Monthly Generation</td>
          <td className="border px-4 py-2">{result.monthlyGeneration} kWh</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Monthly Savings</td>
          <td className="border px-4 py-2">₹{result.monthlySavings}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Annual Savings</td>
          <td className="border px-4 py-2">₹{result.annualSavings}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Annual Savings (%)</td>
          <td className="border px-4 py-2">{result.savingsPercentage}%</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Lifetime Production (25 yrs)</td>
          <td className="border px-4 py-2">{result.lifetimeProduction} kWh</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">CO₂ Saved</td>
          <td className="border px-4 py-2">{result.co2Saved} tonnes</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Water Saved</td>
          <td className="border px-4 py-2">{result.waterSaved} litres</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Tree Equivalent</td>
          <td className="border px-4 py-2">{result.treesEquivalent} trees</td>
        </tr>
      </tbody>
    </table>

    <div className="text-center mt-10">
      <a href="/contact-us">
        <button className="bg-purple text-white font-semibold py-3 px-8 rounded text-md md:text-lg">
          GET A PLANT
        </button>
      </a>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default SolarCalculator;


// {result && (
//   <div className="mt-8 overflow-x-auto">
//     <h2 className="text-2xl font-bold text-center mb-6">Solar Calculation Result</h2>
//     <table className="min-w-full table-auto border border-gray-300 shadow-lg">
//       <thead className="bg-purple text-white">
//         <tr>
//           <th className="px-4 py-3 text-left">Metric</th>
//           <th className="px-4 py-3 text-left">Value</th>
//         </tr>
//       </thead>
//       <tbody className="bg-white text-gray-700">
//         <tr>
//           <td className="border px-4 py-2">System Capacity</td>
//           <td className="border px-4 py-2">{result.systemCapacityKW} kWp</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Annual Generation</td>
//           <td className="border px-4 py-2">{result.annualGeneration} kWh</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Monthly Generation</td>
//           <td className="border px-4 py-2">{result.monthlyGeneration} kWh</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Monthly Savings</td>
//           <td className="border px-4 py-2">₹{result.monthlySavings}</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Annual Savings</td>
//           <td className="border px-4 py-2">₹{result.annualSavings}</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Annual Savings (%)</td>
//           <td className="border px-4 py-2">{result.savingsPercentage}%</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Lifetime Production (25 yrs)</td>
//           <td className="border px-4 py-2">{result.lifetimeProduction} kWh</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">CO₂ Saved</td>
//           <td className="border px-4 py-2">{result.co2Saved} tonnes</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Water Saved</td>
//           <td className="border px-4 py-2">{result.waterSaved} litres</td>
//         </tr>
//         <tr>
//           <td className="border px-4 py-2">Tree Equivalent</td>
//           <td className="border px-4 py-2">{result.treesEquivalent} trees</td>
//         </tr>
//       </tbody>
//     </table>

//     <div className="text-center mt-10">
//       <a href="/contact-us">
//         <button className="bg-purple text-white font-semibold py-3 px-8 rounded text-md md:text-lg">
//           GET A PLANT
//         </button>
//       </a>
//     </div>
//   </div>
// )}
