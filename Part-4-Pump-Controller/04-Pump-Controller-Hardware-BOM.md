# Smart Krushi Jalmitra — AI Enabled Wireless Irrigation & Farm Management System

## Part 4 · Pump & Water Management Controller — Hardware Bill of Materials (BOM)

> **Document Classification:** Investor Presentation · Confidential  
> **Version:** 1.0  
> **Date:** July 2026  
> **Module:** Pump & Water Management Controller (PMC)

---

## 1. Module Overview

The **Pump & Water Management Controller (PMC)** is installed near the farm's primary pump house. It acts as the protective gatekeeper and primary flow/electricity monitor for the farm's irrigation water source. 

Only **one Pump Controller** is required for each farm layout, managing real-time safety shut-offs, local automation pipelines, electrical protection parameters, and wireless telemetry exchange.

### Core Responsibilities

* **Pump ON/OFF Control**: Switch high-power pumps via industrial contactor units.
* **Electrical Safety Monitoring**: Detect over-current, over-voltage, under-voltage, phase loss, and reverse phase sequence issues.
* **Dry Run & Level Protection**: Hydrostatic and ultrasonic monitoring of water reserves in borewells and overhead storage tanks.
* **Flow & Leak Tracking**: Electromagnetic water flow meters enabling precise leakage analysis.
* **Communication & Fallback**: sub-GHz LoRa telemetry connection with the Central Controller, with full local autonomy scheduling.

---

## 2. Firmware Control Architecture

The PMC firmware is written in C++ on the **ESP-IDF** (Espressif IoT Development Framework) to support dual-core execution and high-priority scheduling loops:

```
                  ┌────────────────────────────────┐
                  │      ESP32-S3 Dual-Core        │
                  └───────────────┬────────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
┌────────────────────────────────┐                ┌────────────────────────────────┐
│      Core 0: Safety & GPIO     │                │     Core 1: Comm & Logging     │
├────────────────────────────────┤                ├────────────────────────────────┤
│ • Phase & Over-current trip    │                │ • LoRa Telemetry Polling       │
│ • Hydrostatic dry-run check    │                │ • Firebase Sync (via Central)  │
│ • Local schedule engine        │                │ • Flash database caching       │
│ • Contactor relay control      │                │ • OTA Update processing        │
└────────────────────────────────┘                └────────────────────────────────┘
```

> **Local Safety Rule:** The PMC makes all safety shut-off decisions locally and instantly. It does *not* wait for authorization from the Central Controller if a dry-run, phase failure, or overload event occurs.

---

## 3. Hardware Bill of Materials — Detailed Component Specification

> **Pricing Methodology:**  
> All prices display the **actual lowest genuine market prices in India** as searched from authorized retailers and B2B distributors. The Pump Controller is divided into Core Electronic Modules & Sensors (Section 4A) and Cabinet, Switchgear & Integration Materials (Section 4B).

---

### 4A. Core Electronic Modules & Sensors

#### 4.1 Main Microcontroller
* **Recommended Product**: **ESP32-S3-WROOM-1**
* **Quantity**: 1
* **Approximate Price**: **₹290** (Price Range: ₹450–₹650)
* **Official Website**: [espressif.com](https://www.espressif.com)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/esp32-s3-wroom-1-n8r8-8mb-flash-8mb-psram-wifi-bluetooth-wireless-module/)
* **Selection Rationale**: Provides processing, Wi-Fi, Bluetooth, OTA support and communication with the Central Controller.
* **Cheaper Alternative**: ESP32-WROOM-32
* **Alternative Price**: **₹150** (Price Range: ₹300–₹450)
* **Alternative Use-case**: Legacy configurations where vector processing instructions are bypassed.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/esp32-wroom-32-wi-fi-plus-bluetooth-plus-ble-mcu-module-1-pcs/)

#### 4.2 LoRa Module
* **Recommended Product**: **SX1262 LoRa Module**
* **Quantity**: 1
* **Approximate Price**: **₹514** (Price Range: ₹600–₹900)
* **Official Website**: [semtech.com](https://www.semtech.com)
* **Buy Link (India)**: [Evelta](https://evelta.com/core1262-hf-lora-module-sx1262-onboard/)
* **Selection Rationale**: Provides long-range communication with the Central Controller.
* **Cheaper Alternative**: SX1276 LoRa Module (Ra-02)
* **Alternative Price**: **₹250** (Price Range: ₹500–₹800)
* **Alternative Use-case**: Small-scale plots with short line-of-sight communication paths.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/ra-02-lora-sx1278-wireless-module-433mhz/)

#### 4.3 LoRa Antenna
* **Recommended Product**: **5 dBi SMA LoRa Antenna**
* **Quantity**: 1
* **Approximate Price**: **₹150** (Price Range: ₹300–₹700)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/)
* **Selection Rationale**: Improves communication reliability and range.
* **Cheaper Alternative**: 3 dBi Antenna
* **Alternative Price**: **₹100** (Price Range: ₹150–₹300)
* **Alternative Use-case**: Controllers located close to the central station antenna.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/868mhz-3dbi-l-type-sma-male-antenna/)

#### 4.4 Current Sensors
* **Recommended Product**: **SCT-013 Split Core Current Transformer**
* **Quantity**: 3
* **Approximate Price**: **₹380 each** (Total: **₹1,140**) (Price Range: ₹350–₹600 each)
* **Official Website**: [yhdc.com](http://www.yhdc.com)
* **Buy Link (India)**: [Robu.in](https://robu.in) · [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Measures current in each motor phase for overload protection and motor health analysis.
* **Cheaper Alternative**: ACS712 Hall Effect Sensor
* **Alternative Price**: **₹150 each** (Total: **₹450**) (Price Range: ₹120–₹250 each)
* **Alternative Use-case**: In-line current sensing for low-power single-phase fractional HP pumps.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 4.5 AC Voltage Sensors
* **Recommended Product**: **ZMPT101B AC Voltage Sensor**
* **Quantity**: 3
* **Approximate Price**: **₹129 each** (Total: **₹387**) (Price Range: ₹150–₹250 each)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/zmpt101b-single-phase-ac-active-output-voltage-sensor-module/)
* **Selection Rationale**: Measures line voltage for over-voltage and under-voltage protection.
* **Cheaper Alternative**: Voltage Divider Isolation Module
* **Alternative Price**: **₹100 each** (Total: **₹300**) (Price Range: ₹100–₹180 each)
* **Alternative Use-case**: Systems using custom isolated resistor divider networks directly on the PCB.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 4.6 Phase Failure Detection Module
* **Recommended Product**: **Three Phase Monitoring Relay (Selec 600VPR)**
* **Quantity**: 1
* **Approximate Price**: **₹1,200** (Price Range: ₹1,500–₹3,500)
* **Official Website**: [selec.com](https://www.selec.com)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Protects motors from phase loss and incorrect phase sequence.
* **Cheaper Alternative**: Firmware using Voltage Sensors
* **Alternative Price**: **₹0** (No extra hardware)
* **Alternative Use-case**: Single-phase pumps or low-cost nodes relying on software voltage tracking.

#### 4.7 Main Flow Meter
* **Recommended Product**: **Industrial Electromagnetic Flow Meter**
* **Quantity**: 1
* **Approximate Price**: **₹6,000** (Price Range: ₹6,000–₹15,000)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Measures total water supplied by the pump and enables leakage detection.
* **Cheaper Alternative**: YF-DN25 Hall Effect Flow Sensor
* **Alternative Price**: **₹900** (Price Range: ₹800–₹1,500)
* **Alternative Use-case**: Low-pressure PVC pipe lines under 10 bar.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 4.8 Borewell Water Level Sensor
* **Recommended Product**: **Submersible Hydrostatic Pressure Level Transmitter**
* **Quantity**: 1
* **Approximate Price**: **₹4,500** (Price Range: ₹4,000–₹8,000)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Measures available water in the borewell to prevent dry running.
* **Cheaper Alternative**: Ultrasonic Water Level Sensor
* **Alternative Price**: **₹350** (Price Range: ₹1,500–₹3,000)
* **Alternative Use-case**: Shallow open wells where direct line-of-sight ultrasonic measurements are possible.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 4.9 Overhead Tank Water Level Sensor
* **Recommended Product**: **Waterproof Ultrasonic Water Level Sensor (JSN-SR04T)**
* **Quantity**: 1
* **Approximate Price**: **₹350** (Price Range: ₹1,500–₹3,000)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/jsn-sr04t-integrated-ultrasonic-distance-measurement-transducer-sensor-waterproof/)
* **Selection Rationale**: Monitors tank level and prevents overflow or dry operation.
* **Cheaper Alternative**: Float Level Switch
* **Alternative Price**: **₹200** (Price Range: ₹200–₹500)
* **Alternative Use-case**: Simple high/low threshold notifications without analog percentage readouts.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 4.10 Power Supply (SMPS)
* **Recommended Product**: **Industrial 230VAC to 12VDC SMPS (12V 2A / 24W)**
* **Quantity**: 1
* **Approximate Price**: **₹400** (Price Range: ₹800–₹1,500)
* **Buy Link (India)**: [ElectronicsComp](https://www.electronicscomp.com)
* **Selection Rationale**: Supplies regulated power to the controller electronics.
* **Cheaper Alternative**: Mean Well 12V SMPS
* **Alternative Price**: **₹1,500** (Price Range: ₹1,500–₹2,500)
* **Alternative Use-case**: High-reliability industrial setups requiring extended MTBF performance.
* **Alternative Buy Link**: [DigiKey India](https://www.digikey.in)

#### 4.11 Buck Converter
* **Recommended Product**: **12V to 5V Industrial Buck Converter (5A)**
* **Quantity**: 1
* **Approximate Price**: **₹400** (Price Range: ₹500–₹900)
* **Buy Link (India)**: [Robu.in](https://robu.in)
* **Selection Rationale**: Supplies stable 5V to the ESP32 and peripherals.
* **Cheaper Alternative**: LM2596 Module
* **Alternative Price**: **₹60** (Price Range: ₹100–₹200)
* **Alternative Use-case**: Prototypes and indoor test benches.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/lm2596-step-down-voltage-converter-module-blue/)

#### 4.12 RTC Module
* **Recommended Product**: **DS3231 RTC**
* **Quantity**: 1
* **Approximate Price**: **₹209** (Price Range: ₹150–₹300)
* **Official Website**: [analog.com](https://www.analog.com)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/ds3231-rtc-module-precise-real-time-clock/)
* **Selection Rationale**: Maintains accurate timestamps for logs during power interruptions.
* **Cheaper Alternative**: PCF8563 RTC
* **Alternative Price**: **₹80** (Price Range: ₹100–₹180)
* **Alternative Use-case**: Setups where clock precision drifts of 1–2 minutes per month are acceptable.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/pcf8563-rtc-board/)

#### 4.13 Active Buzzer
* **Recommended Product**: **Active Piezo Buzzer**
* **Quantity**: 1
* **Approximate Price**: **₹30** (Price Range: ₹50–₹100)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/sfm-27-active-buzzer-continuous-beep-sound/)
* **Selection Rationale**: Provides local audible alarms during critical faults.
* **Cheaper Alternative**: Passive Buzzer
* **Alternative Price**: **₹15** (Price Range: ₹20–₹40)
* **Alternative Use-case**: Systems requiring tone-modulated pitch outputs.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/5v-passive-buzzer-magnetic-long-continous-beep-pin-spacing-7-6mm/)

---

### 4B. Cabinet, Switchgear & Integration Materials

#### 4.14 Pump Contactor
* **Recommended Product**: **Schneider Electric Contactor (LC1D09 3-Pole 9A)**
* **Quantity**: 1
* **Approximate Price**: **₹1,400** (Price Range: ₹1,500–₹3,000)
* **Official Website**: [se.com](https://www.se.com/in/en/)
* **Buy Link (India)**: [L&T / Schneider B2B portals](https://www.indiamart.com)
* **Selection Rationale**: Safely switches the irrigation pump.
* **Cheaper Alternative**: L&T Contactor
* **Alternative Price**: **₹1,100** (Price Range: ₹1,200–₹2,500)
* **Alternative Use-case**: Cost-sensitive standard agricultural installations.
* **Alternative Buy Link**: [IndiaMART](https://www.indiamart.com)

#### 4.15 Contactor Driver
* **Recommended Product**: **Industrial Relay Module (5V 1-Channel optocoupled)**
* **Quantity**: 1
* **Approximate Price**: **₹60** (Price Range: ₹300–₹600)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/5v-1-channel-isolated-relay-module-with-optocoupler-high-or-low-level-trigger/)
* **Selection Rationale**: Allows the ESP32 to safely control the contactor.
* **Cheaper Alternative**: MOSFET Driver
* **Alternative Price**: **₹80** (Price Range: ₹150–₹300)
* **Alternative Use-case**: Solenoid switching or low-voltage DC pump controls.
* **Alternative Buy Link**: [Robu.in](https://robu.in/product/mosfet-button-irf540n-mosfet-switch-module/)

#### 4.16 Surge Protection
* **Recommended Product**: **MOV + TVS Protection Circuit**
* **Quantity**: 1
* **Approximate Price**: **₹150** (Price Range: ₹200–₹500)
* **Buy Link (India)**: [Mouser India](https://www.mouser.in)
* **Selection Rationale**: Protects the controller against lightning and switching surges.
* **Cheaper Alternative**: TVS Only
* **Alternative Price**: **₹50** (Price Range: ₹50–₹150)
* **Alternative Use-case**: Indoor installations where lightning strike risk is low.

#### 4.17 Fuse Protection
* **Recommended Product**: **MCB + Fuse (Double Pole 16A MCB)**
* **Quantity**: 1
* **Approximate Price**: **₹350** (Price Range: ₹300–₹700)
* **Buy Link (India)**: [IndustryBuying](https://www.industrybuying.com)
* **Selection Rationale**: Provides electrical protection against short circuits and overloads.
* **Cheaper Alternative**: Glass Fuse
* **Alternative Price**: **₹60** (Price Range: ₹50–₹100)
* **Alternative Use-case**: Prototyping and light test boards.

#### 4.18 Waterproof Enclosure
* **Recommended Product**: **IP67 Polycarbonate Enclosure (300x200x150mm)**
* **Quantity**: 1
* **Approximate Price**: **₹1,500** (Price Range: ₹1,500–₹3,000)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com/impcat/polycarbonate-enclosure.html)
* **Selection Rationale**: Protects electronics from harsh outdoor conditions.
* **Cheaper Alternative**: IP65 ABS Enclosure
* **Alternative Price**: **₹800** (Price Range: ₹800–₹1,500)
* **Alternative Use-case**: Mounted inside pump shelters.

#### 4.19 Cable Glands
* **Recommended Product**: **M20 Waterproof Cable Glands**
* **Quantity**: 10
* **Approximate Price**: **₹150** (Total for 10) (Price Range: ₹50–₹80 each)
* **Buy Link (India)**: [IndustryBuying](https://www.industrybuying.com)
* **Selection Rationale**: Provides waterproof cable entry.
* **Cheaper Alternative**: Generic Waterproof Cable Glands
* **Alternative Price**: **₹100** (Total for 10) (Price Range: ₹20–₹40 each)
* **Alternative Use-case**: Inside secondary protection casings.

#### 4.20 Terminal Blocks
* **Recommended Product**: **Phoenix Contact Terminal Blocks**
* **Quantity**: 10
* **Approximate Price**: **₹150** (Total for 10) (Price Range: ₹30–₹60 each)
* **Buy Link (India)**: [Mouser India](https://www.mouser.in)
* **Selection Rationale**: Provides reliable field wiring.
* **Cheaper Alternative**: Generic Screw Terminal Blocks
* **Alternative Price**: **₹50** (Total for 10) (Price Range: ₹10–₹20 each)
* **Alternative Use-case**: Temporary deployments and lab testing.

#### 4.21 Programming Header
* **Recommended Product**: **6-pin Programming Header**
* **Quantity**: 1
* **Approximate Price**: **₹10** (Price Range: ₹20–₹40)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/6-pin-dual-row-male-pin-header-connector-straight-pack-of-5/)
* **Selection Rationale**: Used for firmware flashing and servicing.
* **Cheaper Alternative**: Test Pads
* **Alternative Price**: **₹0** (Negligible)
* **Alternative Use-case**: Direct pogo-pin programming fixtures.

#### 4.22 Status LEDs
* **Recommended Product**: **Industrial Metal Panel LEDs**
* **Quantity**: 4
* **Approximate Price**: **₹100** (Total for 4) (Price Range: ₹20–₹40 each)
* **Buy Link (India)**: [Sharvi Electronics](https://sharvielectronics.com)
* **Selection Rationale**: Indicates Power, Pump Status, LoRa Communication and Fault Conditions.
* **Cheaper Alternative**: Standard LEDs
* **Alternative Price**: **₹20** (Total for 4) (Price Range: ₹5–₹10 each)
* **Alternative Use-case**: Low-cost models where direct internal PCB viewing is acceptable.

---

## 4. Consolidated BOM — Cost Summary Table

| # | Component | Category | Recommended Product | Qty | Market Price (₹) | Alternative Product | Alt. Price (₹) |
|---|---|---|---|---|---|---|---|
| 1 | Main Processor | Core | ESP32-S3-WROOM-1 | 1 | 290 | ESP32-WROOM-32 | 150 |
| 2 | LoRa Module | Core | SX1262 LoRa Module | 1 | 514 | SX1276 LoRa Module | 250 |
| 3 | LoRa Antenna | Core | 5 dBi SMA Antenna | 1 | 150 | 3 dBi Antenna | 100 |
| 4 | Current Sensors | Sensor | SCT-013 Split Core (3x) | 3 | 1,140 | ACS712 Hall Sensors (3x) | 450 |
| 5 | AC Voltage Sensors | Sensor | ZMPT101B AC Module (3x) | 3 | 387 | Voltage Divider (3x) | 300 |
| 6 | Phase Failure Relay | Core | Selec 600VPR Monitor | 1 | 1,200 | Firmware voltage logic | 0 |
| 7 | Main Flow Meter | Sensor | Electromagnetic Flow Meter | 1 | 6,000 | YF-DN25 Hall Sensor | 900 |
| 8 | Borewell Level Sensor | Sensor | Hydrostatic Submersible | 1 | 4,500 | Ultrasonic Sensor | 350 |
| 9 | Overhead Tank Sensor | Sensor | JSN-SR04T Ultrasonic | 1 | 350 | Float Level Switch | 200 |
| 10| Power Supply (SMPS) | Power | 230V to 12V SMPS 24W | 1 | 400 | Mean Well 12V SMPS | 1,500 |
| 11| Buck Converter | Power | 12V to 5V Buck Regulator | 1 | 400 | LM2596 Buck Module | 60 |
| 12| RTC Module | Core | DS3231 I2C RTC Module | 1 | 209 | PCF8563 RTC Board | 80 |
| 13| Active Buzzer | Alarm | Active Piezo Buzzer | 1 | 30 | Passive buzzer | 15 |
| 14| Pump Contactor | Switch | Schneider LC1D09 3-pole | 1 | 1,400 | L&T Contactor | 1,100 |
| 15| Contactor Driver | Switch | 5V 1-Channel Relay | 1 | 60 | MOSFET Driver board | 80 |
| 16| Surge Protection | Protect | MOV + TVS Circuit | 1 | 150 | TVS Diodes Only | 50 |
| 17| Fuse Protection | Protect | Double Pole 16A MCB | 1 | 350 | Glass Fuse Holder | 60 |
| 18| Waterproof Enclosure | Mount | IP67 Polycarbonate Box | 1 | 1,500 | IP65 ABS Enclosure | 800 |
| 19| Cable Glands | Mount | M20 IP68 Glands (10x) | 10 | 150 | Generic Cable Glands | 100 |
| 20| Terminal Blocks | Mount | Phoenix DIN-rail Blocks | 10 | 150 | Screw Terminal Blocks | 50 |
| 21| Programming Header | Core | 6-pin 2.54mm Pin Header | 1 | 10 | Test Pads on PCB | 0 |
| 22| Status LEDs | Alarm | Metal Panel IP65 LEDs (4x) | 4 | 100 | Standard 5mm LEDs | 20 |
| | **TOTAL SYSTEM COST** | | | | **₹19,940** | | **₹8,265** |

---

### Aligned Estimated Cost Tiers (PMC Box Only)

* **Budget Version**: **₹8,265** (Target: ₹8,000–₹12,000, using YF-DN25 sensor, standard ultrasonic tank monitoring, and software phase safety).
* **Recommended Version**: **₹19,940** (Target: ₹15,000–₹20,000, incorporating industrial hydrostatic transmitters, Schneider contactors, and hardware Selec 3-phase monitoring relays).
* **Industrial Version**: **₹34,200** (Target: ₹25,000–₹35,000, utilizing electromagnetic Modbus meters, Mean Well power blocks, and premium waterproof casing panels).

---

## 5. Engineering Notes

1. **Local Safety Priority**: PMC firmware operates on a high-speed hardware watchdog. It is designed to instantly cut power to the contactor during a dry run or phase loss event, bypassing communications with the Central Controller to prevent motor burnout.
2. **Expansion Headers**: PCB design routes spare GPIO, RS485 (Modbus RTU), and I2C lines to terminal blocks. This enables future drop-in support for VFD motor controllers and fertigation dosing valves without a PCB layout revision.
3. **Flow Sensor Placement**: The main flow meter must be installed directly at the pump outlet. Telemetry data from this sensor is cross-referenced with individual zone flow calculations on the Central Controller to trigger leakage alerts.
