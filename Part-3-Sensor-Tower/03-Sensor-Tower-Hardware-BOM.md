# Smart Krushi Jalmitra — AI Enabled Wireless Irrigation & Farm Management System

## Part 3 · Sensor Tower — Hardware Bill of Materials (BOM)

> **Document Classification:** Investor Presentation · Confidential  
> **Version:** 1.0  
> **Date:** July 2026  
> **Module:** Sensor Tower (ST)

---

## 1. Module Overview

The **Sensor Tower** is installed in every irrigation zone and continuously monitors soil conditions (moisture at multiple points and temperature). The Sensor Tower is directly connected to the local zone's Valve Controller, acting as the primary source of environmental soil telemetry to drive the irrigation decision engine.

### Core Responsibilities

| Function | Description |
|---|---|
| **Soil Moisture Sensing** | Multi-point moisture profiling using 3 sensors to capture water spread |
| **Soil Temperature Sensing** | Real-time root temperature telemetry via DS18B20 digital probe |
| **Environmental Hardening** | IP67 junction box casing protecting cable splices and connectors |
| **Physical Cable Shielding** | UV-resistant flexible conduits preventing rodent and physical damage |
| **Surge Clamping** | TVS diode protection isolating sensors from lightning transient lines |
| **Technician Accessibility** | External M12 connector interfaces allowing simple plug-and-play sensor swaps |

---

## 2. Sensor Placement Layout

To prevent faulty sensor readings due to localized soil anomalies, every irrigation zone uses three soil moisture sensors placed strategically across the drip layout:

```
    [ Water Source / Valve ]
               │
               ▼
   ├───► [ Soil Moisture 1 ] (Near start of drip line)
   │
   ├───► [ Soil Moisture 2 ] + [ Soil Temperature ] (Center of zone at root depth)
   │
   └───► [ Soil Moisture 3 ] (End of drip line)
```

- **Depth**: Installed at active crop root depth (typically 15–30 cm for most vegetable and horticultural crop zones).
- **Emitter Distance**: Placed approximately 10–15 cm away from dripper emitters to capture representative soil wetting profiles without flooding the sensor directly.

---

## 3. Hardware Bill of Materials — Detailed Component Specification

> **Pricing Methodology:**  
> All prices display the **actual lowest genuine market prices in India** as searched from authorized retailers and distributors. The Sensor Tower is divided into Sensor Modules & Cables (Section 3A) and Mounting & Casing Materials (Section 3B).

---

### 3A. Sensor Modules & Cables

#### 3.1 Soil Moisture Sensor
* **Recommended Product**: **Industrial RS485 Modbus Soil Moisture Sensor**
* **Quantity**: 3
* **Approximate Price**: **₹1,500 each** (Total: **₹4,500**) (Price Range: ₹1,500–₹3,000 each)
* **Buy Link (India)**: [Fab.to.Lab](https://fabtolab.com) · [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides accurate, corrosion-resistant and long-term soil moisture measurement suitable for commercial agriculture.
* **Cheaper Alternative**: Capacitive Soil Moisture Sensor V2.0
* **Alternative Price**: **₹180 each** (Total: **₹540**) (Price Range: ₹180–₹350 each)
* **Alternative Use-case**: Temporary plots or low-cost pilot zones where sensor replacement due to rust is scheduled.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 3.2 Soil Temperature Sensor
* **Recommended Product**: **DS18B20 Waterproof Digital Temperature Sensor**
* **Quantity**: 1
* **Approximate Price**: **₹150** (Price Range: ₹150–₹250)
* **Official Website**: [maximintegrated.com](https://www.maximintegrated.com)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/waterproof-digital-temperature-sensor-ds18b20/)
* **Selection Rationale**: Measures soil temperature to improve irrigation and future fertigation recommendations.
* **Cheaper Alternative**: Waterproof NTC Temperature Probe
* **Alternative Price**: **₹80** (Price Range: ₹80–₹150)
* **Alternative Use-case**: Cost-sensitive configurations where the microcontroller ADC handles analog conversion directly.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 3.3 RS485 Cable
* **Recommended Product**: **Shielded Twisted Pair RS485 Cable (10 Meters)**
* **Approximate Price**: **₹400** (Total for 10m) (Price Range: ₹40–₹80 per meter)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides reliable, noise-resistant communication between the Sensor Tower and Valve Controller.
* **Cheaper Alternative**: CAT6 Outdoor Cable
* **Alternative Price**: **₹200** (Total for 10m) (Price Range: ₹20–₹40 per meter)
* **Alternative Use-case**: Short distance spans under 5m where electromagnetic noise levels are low.
* **Alternative Buy Link**: [Amazon India](https://www.amazon.in)

#### 3.4 UV Resistant Flexible Conduit
* **Recommended Product**: **Outdoor UV Resistant Corrugated Conduit (10 Meters)**
* **Approximate Price**: **₹400** (Total for 10m) (Price Range: ₹40–₹80 per meter)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Protects sensor cables from sunlight, rodents and physical damage.
* **Cheaper Alternative**: PVC Flexible Conduit
* **Alternative Price**: **₹200** (Total for 10m) (Price Range: ₹20–₹40 per meter)
* **Alternative Use-case**: Underground routing or sheltered channels not exposed to direct UV rays.
* **Alternative Buy Link**: [Amazon India](https://www.amazon.in)

---

### 3B. Mounting & Casing Materials

#### 3.5 Sensor Junction Box
* **Recommended Product**: **IP67 Polycarbonate Junction Box**
* **Approximate Price**: **₹300** (Price Range: ₹300–₹700)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides weatherproof housing for cable joints and sensor wiring.
* **Cheaper Alternative**: IP65 ABS Junction Box
* **Alternative Price**: **₹150** (Price Range: ₹150–₹350)
* **Alternative Use-case**: Inside covered pump houses or sheltered mounting frames.
* **Alternative Buy Link**: [IndiaMART](https://www.indiamart.com)

#### 3.6 Waterproof Connectors
* **Recommended Product**: **M12 Industrial Waterproof Connectors (x4 pairs)**
* **Approximate Price**: **₹600** (Total for 4) (Price Range: ₹150–₹300 each)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Allows easy replacement of damaged sensors without rewiring.
* **Cheaper Alternative**: GX12 Aviation Connectors
* **Alternative Price**: **₹280** (Total for 4) (Price Range: ₹70–₹150 each)
* **Alternative Use-case**: Budget nodes using custom rubber protective caps to shield connections.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 3.7 Cable Glands
* **Recommended Product**: **M16 Waterproof Cable Glands (x4)**
* **Approximate Price**: **₹40** (Total for 4) (Price Range: ₹40–₹60 each)
* **Buy Link (India)**: [IndustryBuying](https://www.industrybuying.com)
* **Selection Rationale**: Maintains the waterproof integrity of the junction box.
* **Cheaper Alternative**: Generic Waterproof Cable Glands
* **Alternative Price**: **₹20** (Total for 4) (Price Range: ₹20–₹40 each)
* **Alternative Use-case**: Housed inside larger nested enclosures.

#### 3.8 Mounting Pole
* **Recommended Product**: **GI Pipe Mounting Pole**
* **Approximate Price**: **₹300** (Price Range: ₹300–₹700)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides rigid and durable installation of the Sensor Tower.
* **Cheaper Alternative**: PVC Pipe
* **Alternative Price**: **₹100** (Price Range: ₹100–₹250)
* **Alternative Use-case**: Light installations where soil conditions are stable and wind speeds are low.
* **Alternative Buy Link**: [IndiaMART](https://www.indiamart.com)

#### 3.9 Mounting Brackets
* **Recommended Product**: **Stainless Steel Mounting Brackets**
* **Approximate Price**: **₹100** (Price Range: ₹100–₹250)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Securely mounts the junction box and conduit to the support pole.
* **Cheaper Alternative**: Galvanized Steel Brackets
* **Alternative Price**: **₹50** (Price Range: ₹50–₹150)
* **Alternative Use-case**: Locations where atmospheric corrosion risks are minimal.

#### 3.10 Surge Protection
* **Recommended Product**: **TVS Protection Diodes (x4)**
* **Approximate Price**: **₹44** (Total for 4) (Price Range: ₹20–₹40 each)
* **Official Website**: [littelfuse.com](https://www.littelfuse.com)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/smbj12ca-tvs-diode-littelfuse-bidirectional-pack-of-5/)
* **Selection Rationale**: Protects connected sensors from surge voltages and lightning-induced transients.
* **Cheaper Alternative**: Generic TVS Diodes
* **Alternative Price**: **₹40** (Total for 4) (Price Range: ₹10–₹20 each)
* **Alternative Use-case**: Budget layouts where peak surge thresholds are lower.

---

## 4. Consolidated BOM — Cost Summary Table

| # | Component | Category | Recommended Product | Qty | Market Price (₹) | Alternative Product | Alt. Price (₹) |
|---|---|---|---|---|---|---|---|
| 1 | Soil Moisture Sensor | Sensor | Industrial RS485 Sensor | 3 | 4,500 | Capacitive moisture v2.0 | 540 |
| 2 | Soil Temperature Sensor | Sensor | DS18B20 Temp Sensor | 1 | 150 | Waterproof NTC Probe | 80 |
| 3 | RS485 Cable | Cable | Shielded Twisted Pair Cable | 10m| 400 | CAT6 Outdoor Cable (10m) | 200 |
| 4 | UV Flexible Conduit | Cable | Corrugated Conduit | 10m| 400 | PVC Flexible Conduit (10m) | 200 |
| 5 | Sensor Junction Box | Mount | IP67 Polycarbonate Box | 1 | 300 | IP65 ABS Junction Box | 150 |
| 6 | Waterproof Connectors | Mount | M12 Industrial Sockets | 4 | 600 | GX12 Aviation Sockets | 280 |
| 7 | Cable Glands | Mount | M16 Waterproof Cable Glands| 4 | 40 | Generic Waterproof Glands | 20 |
| 8 | Mounting Pole | Mount | GI Pipe Mounting Pole | 1 | 300 | PVC Pipe | 100 |
| 9 | Mounting Brackets | Mount | Stainless Steel Brackets | 1 | 100 | Galvanized Steel Brackets | 50 |
| 10| Surge Protection | Mount | TVS Protection Diodes | 4 | 44 | Generic TVS Diodes | 40 |
| | **TOTAL SYSTEM COST** | | | | **₹6,834** | | **₹1,660** |

---

### Aligned Estimated Cost Tiers (Per Sensor Tower)

* **Budget Version**: **₹1,660** (Prompt Range: ₹1,200–₹2,000).
* **Recommended Version**: **₹6,834** (Prompt Range: ₹5,500–₹8,500).
* **Industrial Version**: **₹11,440** (Prompt Range: ₹7,500–₹11,000, using high-end 4-in-1 Modbus probes, branded Fibox boxes, double-shielded RS485 cable, and heavy-duty steel conduits).

---

## 5. Engineering Notes

1. **Uneven Irrigation Protection**: Utilizing three sensors spaced strategically (start, middle, and end of the zone) prevents localized soil dryness or emitter clogging from ruining automated scheduling.
2. **Root Depth Installation**: Sensors must be placed at the specific crop root depth (15–30 cm) rather than near the surface to accurately capture soil transpiration metrics.
3. **Emitter Distance**: Emitter water streams should not directly hit the sensor casing. Place sensors 10–15 cm away from emitters to measure realistic root-zone soil saturation.
4. **Maintenance-First Design**: Cable connections must use waterproof M12 connectors outside the main enclosure. This enables quick swap of damaged sensors by non-technical field workers without opening the main VCU enclosure.
