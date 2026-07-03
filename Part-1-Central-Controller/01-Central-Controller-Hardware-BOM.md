# Smart Krushi Jalmitra — AI Enabled Wireless Irrigation & Farm Management System

## Part 1 · Central Controller — Hardware Bill of Materials (BOM)

> **Document Classification:** Investor Presentation · Confidential  
> **Version:** 1.0  
> **Date:** July 2026  
> **Module:** Central Controller Unit (CCU)

---

## 1. Module Overview

The **Central Controller** is the computational brain of the Smart Krushi Jalmitra ecosystem. Deployed at the farm's control station, it orchestrates every aspect of automated irrigation — from receiving real-time sensor telemetry over LoRa to executing AI-driven irrigation decisions, managing pump operations, synchronising with the cloud, and delivering APIs to the farmer's mobile application.

### Core Responsibilities

| Function | Description |
|---|---|
| **LoRa Network Management** | Communicates with up to 25–30 valve controllers wirelessly |
| **Irrigation Engine** | Runs scheduling, zone management, and real-time control |
| **AI Decision Engine** | Processes sensor data, weather forecasts, and crop models |
| **Cloud Synchronisation** | Bi-directional sync with Firebase / cloud backend |
| **Local Data Store** | SQLite database for offline resilience |
| **Pump Control** | Manages pump start/stop sequences |
| **Weather Integration** | Fetches and caches weather data for predictive irrigation |
| **Notifications** | Push notifications, SMS alerts, and local buzzer/LED alerts |
| **OTA Updates** | Over-the-air firmware and software update management |
| **Mobile API** | FastAPI-based REST API for the companion mobile application |

---

## 2. Software Stack

| Layer | Technology |
|---|---|
| Operating System | Raspberry Pi OS Lite (64-bit, Debian Bookworm) |
| Database | SQLite 3.x |
| API Framework | FastAPI (Python 3.11+) |
| Cloud SDK | Firebase Admin SDK |
| LoRa Service | Custom Python service (SPI interface) |
| Weather Service | OpenWeatherMap / IMD API integration |
| AI Engine | Scikit-learn / TensorFlow Lite |
| OTA Service | Custom update daemon |
| Notifications | Firebase Cloud Messaging + SMS gateway |
| Logging | Python logging + structured JSON logs |

---

## 3. Hardware Bill of Materials — Detailed Component Specification

> **Pricing Methodology:**  
> All prices display the **actual lowest genuine market prices in India** as searched from authorized retailers and distributors. The BOM is structured into Core Electronic Modules (Section 3A) and Cabinet & PCB Integration Materials (Section 3B).

---

### 3A. Core Electronic Modules

#### 3.1 Main Processor
* **Recommended Product**: **Raspberry Pi 5 (4GB)**
* **Model Number**: SC1112 (4GB variant)
* **Approximate Price**: **₹12,331** (Price Range: ₹11,500–₹13,500)
* **Official Website**: [raspberrypi.com](https://www.raspberrypi.com/products/raspberry-pi-5/)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/raspberry-pi-5-4gb/)
* **Selection Rationale**: Runs Linux OS, backend services, SQLite database, AI decision engine, scheduling engine, cloud synchronization, APIs and future software modules.
* **Cheaper Alternative**: Raspberry Pi Compute Module 5 (4GB)
* **Alternative Price**: **₹6,000** (Price Range: ₹5,500–₹6,500) (Carrier Board Required)
* **Alternative Use-case**: Suitable for production-scale custom PCB designs with dedicated carrier boards.
* **Alternative Buy Link**: [Element14 India](https://in.element14.com)

#### 3.2 Local Storage
* **Recommended Product**: **64GB Industrial SSD**
* **Approximate Price**: **₹1,500** (Price Range: ₹1,400–₹1,800)
* **Buy Link (India)**: [Amazon India](https://www.amazon.in)
* **Selection Rationale**: Provides reliable storage for the local database, logs, schedules, weather cache and offline operation.
* **Cheaper Alternative**: 64GB High-Endurance MicroSD Card
* **Alternative Price**: **₹700** (Price Range: ₹600–₹900)
* **Alternative Use-case**: Acceptable for budget pilots; requires replacement every 12-18 months.
* **Alternative Buy Link**: [Amazon India](https://www.amazon.in)

#### 3.3 SSD Adapter
* **Recommended Product**: **USB 3.0 to SATA Adapter**
* **Approximate Price**: **₹290** (Price Range: ₹250–₹500)
* **Buy Link (India)**: [Amazon India](https://www.amazon.in)
* **Selection Rationale**: Connects the SSD to the Raspberry Pi using USB 3.0.
* **Cheaper Alternative**: NVMe USB Enclosure
* **Alternative Price**: **₹900** (Price Range: ₹800–₹1,200)
* **Alternative Use-case**: For premium, high-speed storage configurations using M.2 NVMe drives.
* **Alternative Buy Link**: [Amazon India](https://www.amazon.in)

#### 3.4 Cellular Internet Module
* **Recommended Product**: **Quectel EC200U (Breakout Board)**
* **Model Number**: EC200U-CNAC
* **Approximate Price**: **₹1,600** (Price Range: ₹1,500–₹2,000)
* **Official Website**: [quectel.com](https://www.quectel.com/product/lte-ec200u-cn)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/quectel-ec200u-cn-lte-4g-gnss-mini-pcie-module/)
* **Selection Rationale**: Provides 4G internet connectivity for cloud synchronization, weather updates, OTA updates and remote monitoring.
* **Cheaper Alternative**: SIMCom A7670
* **Alternative Price**: **₹1,100** (Price Range: ₹1,000–₹1,400)
* **Alternative Use-case**: Budget Cat-1 alternative with standard cellular data sync functions.
* **Alternative Buy Link**: [The Engineer Store](https://theengineerstore.in)

#### 3.5 SIM Card
* **Recommended Product**: **Airtel IoT SIM / Jio IoT SIM**
* **Approximate Price**: **₹350** (Price Range: ₹300–₹500)
* **Official Website**: [airtel.in/business/enterprise/iot](https://www.airtel.in/business/enterprise/iot)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides continuous internet connectivity for the central controller.
* **Cheaper Alternative**: Standard 4G SIM
* **Alternative Price**: **₹200** (Price Range: ₹150–₹300)
* **Alternative Use-case**: Pilot setups where corporate M2M system management is not required.

#### 3.6 LoRa Communication Module
* **Recommended Product**: **SX1262 LoRa Module (Waveshare Core1262)**
* **Approximate Price**: **₹514** (Price Range: ₹450–₹650)
* **Official Website**: [semtech.com](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262)
* **Buy Link (India)**: [Evelta](https://evelta.com/core1262-hf-lora-module-sx1262-onboard/)
* **Selection Rationale**: Provides long-range wireless communication between the central controller and up to 25–30 valve controllers.
* **Cheaper Alternative**: SX1276 LoRa Module (Ra-02)
* **Alternative Price**: **₹250** (Price Range: ₹200–₹400)
* **Alternative Use-case**: Small farms with shorter communication distance requirements.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 3.7 LoRa Antenna
* **Recommended Product**: **5 dBi SMA LoRa Antenna**
* **Approximate Price**: **₹150** (Price Range: ₹120–₹300)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/)
* **Selection Rationale**: Improves communication range and signal quality.
* **Cheaper Alternative**: 3 dBi Rubber Duck Antenna
* **Alternative Price**: **₹100** (Price Range: ₹80–₹180)
* **Alternative Use-case**: Small-scale farms with short-distance requirements.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 3.8 LTE Antenna
* **Recommended Product**: **External LTE SMA Antenna**
* **Approximate Price**: **₹120** (Price Range: ₹100–₹250)
* **Buy Link (India)**: [Robocraze](https://robocraze.com/products/4g-lte-antenna-external-sma)
* **Selection Rationale**: Provides better 4G signal reception.
* **Cheaper Alternative**: PCB LTE Antenna
* **Alternative Price**: **₹50** (Price Range: ₹30–₹100)
* **Alternative Use-case**: Deployments in areas with strong cellular signal coverage.

#### 3.9 Real Time Clock Module
* **Recommended Product**: **DS3231 RTC Module**
* **Approximate Price**: **₹209** (Price Range: ₹180–₹300)
* **Official Website**: [analog.com](https://www.analog.com/en/products/ds3231.html)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/ds3231-rtc-module-precise-real-time-clock/)
* **Selection Rationale**: Maintains accurate date and time even during power outages.
* **Cheaper Alternative**: PCF8563 RTC
* **Alternative Price**: **₹80** (Price Range: ₹60–₹150)
* **Alternative Use-case**: Basic builds where temperature drift compensation is not required.
* **Alternative Buy Link**: [ElectroPi](https://electropi.in)

#### 3.10 Cooling System
* **Recommended Product**: **Official Raspberry Pi Active Cooler**
* **Approximate Price**: **₹400** (Price Range: ₹350–₹550)
* **Official Website**: [raspberrypi.com](https://www.raspberrypi.com/products/active-cooler/)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/official-active-cooler-for-raspberry-pi-5/)
* **Selection Rationale**: Prevents CPU throttling during continuous operation in high-temperature outdoor environments.
* **Cheaper Alternative**: Large Passive Aluminium Heat Sink
* **Alternative Price**: **₹100** (Price Range: ₹80–₹200)
* **Alternative Use-case**: Indoor control setups with light computational loads.

#### 3.11 DC-DC Power Converter
* **Recommended Product**: **12V to 5V Industrial Buck Converter (5A)**
* **Approximate Price**: **₹400** (Price Range: ₹350–₹600)
* **Buy Link (India)**: [Roboway](https://roboway.in/product/12v-to-5v-5a-dc-dc-step-down-buck-converter-with-waterproof-housing/)
* **Selection Rationale**: Converts the farm's 12V DC supply into a stable 5V supply for the Raspberry Pi.
* **Cheaper Alternative**: LM2596 Buck Converter
* **Alternative Price**: **₹60** (Price Range: ₹40–₹120)
* **Alternative Use-case**: Test setups or prototypes lacking weather-exposed risks.
* **Alternative Buy Link**: [Zbotic](https://zbotic.in)

#### 3.12 UPS Module
* **Recommended Product**: **Raspberry Pi UPS HAT (Waveshare D)**
* **Approximate Price**: **₹1,500** (Price Range: ₹1,400–₹2,000)
* **Official Website**: [waveshare.com](https://www.waveshare.com/ups-hat-d.htm)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/waveshare-ups-hat-d-for-raspberry-pi-stable-5v-power-output/)
* **Selection Rationale**: Allows safe shutdown during power failures and prevents database corruption.
* **Cheaper Alternative**: Mini UPS Module
* **Alternative Price**: **₹500** (Price Range: ₹400–₹800)
* **Alternative Use-case**: Basic installations where automated OS safe-shutdown communication is bypassed.

#### 3.13 Backup Battery
* **Recommended Product**: **18650 Li-ion Battery Pack (2x Cells)**
* **Approximate Price**: **₹700** (Price Range: ₹600–₹900)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/samsung-inr18650-25r-2500mah-rechargeable-battery/)
* **Selection Rationale**: Provides temporary backup power for safe system shutdown.
* **Cheaper Alternative**: LiPo Battery Pack
* **Alternative Price**: **₹300** (Price Range: ₹250–₹500)
* **Alternative Use-case**: Form factors demanding compact flat designs.

---

### 3B. Cabinet & PCB Integration Materials

#### 3.14 Enclosure
* **Recommended Product**: **IP67 Polycarbonate Enclosure**
* **Approximate Price**: **₹1,800** (Price Range: ₹1,500–₹2,500)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Protects electronics from dust, rain and harsh outdoor conditions.
* **Cheaper Alternative**: IP65 ABS Enclosure
* **Alternative Price**: **₹900** (Price Range: ₹700–₹1,200)
* **Alternative Use-case**: Under permanent farm sheds or sheltered pump rooms.

#### 3.15 Waterproof Cable Glands
* **Recommended Product**: **M16 Waterproof Cable Glands (x8)**
* **Approximate Price**: **₹80** (Total for 8) (Price Range: ₹60–₹150)
* **Buy Link (India)**: [IndustryBuying](https://www.industrybuying.com)
* **Selection Rationale**: Provides waterproof cable entry into the enclosure.
* **Cheaper Alternative**: Generic Waterproof Cable Glands
* **Alternative Price**: **₹40** (Total for 8) (Price Range: ₹30–₹80)
* **Alternative Use-case**: Temporary installations or sheltered connections.

#### 3.16 Status LEDs
* **Recommended Product**: **Industrial Panel LEDs (x4)**
* **Approximate Price**: **₹100** (Total for 4) (Price Range: ₹80–₹160)
* **Buy Link (India)**: [Sharvi Electronics](https://sharvielectronics.com)
* **Selection Rationale**: Provides visual indication of controller status.
* **Cheaper Alternative**: Standard LEDs
* **Alternative Price**: **₹20** (Total for 4) (Price Range: ₹10–₹40)
* **Alternative Use-case**: Non-IP panel testing or indoor status grids.

#### 3.17 Buzzer
* **Recommended Product**: **Active Buzzer**
* **Approximate Price**: **₹30** (Price Range: ₹25–₹60)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/sfm-27-active-buzzer-continuous-beep-sound/)
* **Selection Rationale**: Provides local fault indication.
* **Cheaper Alternative**: Passive Buzzer
* **Alternative Price**: **₹15** (Price Range: ₹10–₹30)
* **Alternative Use-case**: Integrated boards where microcontrollers run standard oscillation signals.

#### 3.18 Terminal Blocks
* **Recommended Product**: **Phoenix Contact Style Terminal Blocks (x8)**
* **Approximate Price**: **₹120** (Total for 8) (Price Range: ₹100–₹250)
* **Buy Link (India)**: [Mouser India](https://www.mouser.in)
* **Selection Rationale**: Provides reliable field wiring connections.
* **Cheaper Alternative**: Generic Screw Terminal Blocks
* **Alternative Price**: **₹40** (Total for 8) (Price Range: ₹30–₹80)
* **Alternative Use-case**: Low-maintenance fixed wiring blocks.

#### 3.19 TVS Protection Diodes
* **Recommended Product**: **SMBJ Series TVS Diodes (x4)**
* **Approximate Price**: **₹44** (Total for 4) (Price Range: ₹40–₹80)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/smbj12ca-tvs-diode-littelfuse-bidirectional-pack-of-5/)
* **Selection Rationale**: Protects against voltage surges and lightning-induced transients.
* **Cheaper Alternative**: Generic TVS Diodes
* **Alternative Price**: **₹20** (Total for 4) (Price Range: ₹15–₹40)
* **Alternative Use-case**: Budget PCB configurations with basic lightning suppression.

#### 3.20 Fuse Holder & Fuse
* **Recommended Product**: **Automotive Blade Fuse Holder (x2)**
* **Approximate Price**: **₹60** (Total for 2) (Price Range: ₹50–₹120)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/car-blade-fuse-holder-inline-waterproof-holder-with-cap/)
* **Selection Rationale**: Provides over-current protection.
* **Cheaper Alternative**: Glass Fuse Holder
* **Alternative Price**: **₹30** (Total for 2) (Price Range: ₹20–₹50)
* **Alternative Use-case**: Indoor environments where physical vibration risks are minimal.

#### 3.21 Main Power Switch
* **Recommended Product**: **Industrial Rocker Switch**
* **Approximate Price**: **₹60** (Price Range: ₹50–₹120)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides main power control.
* **Cheaper Alternative**: Mini Toggle Switch
* **Alternative Price**: **₹30** (Price Range: ₹20–₹50)
* **Alternative Use-case**: Protected layouts housed internally inside outer boxes.

#### 3.22 Reset Push Button
* **Recommended Product**: **PCB Reset Push Button**
* **Approximate Price**: **₹15** (Price Range: ₹10–₹40)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/12mm-waterproof-momentary-metal-push-button-switch-flat-top-screw-terminal/)
* **Selection Rationale**: Allows manual hardware reset.
* **Cheaper Alternative**: Standard Push Button
* **Alternative Price**: **₹5** (Price Range: ₹5–₹15)
* **Alternative Use-case**: Prototyping layers or interior-only tactile switches.

---

### 3C. Built-in Interfaces (No Additional Cost)

#### 3.23 Ethernet Port
* **Quantity**: 1
* **Selection Rationale**: Provides wired diagnostics, configuration and servicing.
* **Price**: Included with Main Processor (No additional cost)

#### 3.24 USB Ports
* **Quantity**: 2
* **Selection Rationale**: Used for SSD connection, firmware servicing and maintenance.
* **Price**: Included with Main Processor (No additional cost)

---

## 4. Consolidated BOM — Cost Summary Table

| # | Component | Category | Recommended Product | Qty | Market Price (₹) | Alternative Product | Alt. Price (₹) |
|---|---|---|---|---|---|---|---|
| 1 | Main Processor | Core | Raspberry Pi 5 (4GB) | 1 | 12,331 | RPi Compute Module 5 (4GB) | 6,000 |
| 2 | Local Storage | Core | 64GB Industrial SSD | 1 | 1,500 | 64GB High-Endurance MicroSD | 700 |
| 3 | SSD Adapter | Core | USB 3.0 to SATA Adapter | 1 | 290 | NVMe USB Enclosure | 900 |
| 4 | Cellular Internet Module | Core | Quectel EC200U | 1 | 1,600 | SIMCom A7670 | 1,100 |
| 5 | SIM Card | Core | Airtel IoT SIM / Jio IoT SIM | 1 | 350 | Standard 4G SIM | 200 |
| 6 | LoRa Communication Module | Core | SX1262 LoRa Module | 1 | 514 | SX1276 LoRa Module | 250 |
| 7 | LoRa Antenna | Core | 5 dBi SMA LoRa Antenna | 1 | 150 | 3 dBi Rubber Duck Antenna | 100 |
| 8 | LTE Antenna | Core | External LTE SMA Antenna | 1 | 120 | PCB LTE Antenna | 50 |
| 9 | Real Time Clock Module | Core | DS3231 RTC Module | 1 | 209 | PCF8563 RTC | 80 |
| 10 | Cooling System | Core | Raspberry Pi Active Cooler | 1 | 400 | Passive Aluminium Heat Sink | 100 |
| 11 | DC-DC Power Converter | Core | 12V to 5V Buck Converter (5A) | 1 | 400 | LM2596 Buck Converter | 60 |
| 12 | UPS Module | Core | Raspberry Pi UPS HAT | 1 | 1,500 | Mini UPS Module | 500 |
| 13 | Backup Battery | Core | 18650 Li-ion Battery Pack | 1 | 700 | LiPo Battery Pack | 300 |
| 14 | Enclosure | Cabinet | IP67 Polycarbonate Enclosure | 1 | 1,800 | IP65 ABS Enclosure | 900 |
| 15 | Waterproof Cable Glands | Cabinet | M16 Waterproof Cable Glands | 8 | 80 | Generic Waterproof Glands | 40 |
| 16 | Status LEDs | Cabinet | Industrial Panel LEDs | 4 | 100 | Standard LEDs | 20 |
| 17 | Buzzer | Cabinet | Active Buzzer | 1 | 30 | Passive Buzzer | 15 |
| 18 | Terminal Blocks | Cabinet | Phoenix Contact Style Blocks | 8 | 120 | Generic Screw Terminal Blocks | 40 |
| 19 | TVS Protection Diodes | Cabinet | SMBJ Series TVS Diodes | 4 | 44 | Generic TVS Diodes | 20 |
| 20 | Fuse Holder & Fuse | Cabinet | Automotive Blade Fuse Holder | 2 | 60 | Glass Fuse Holder | 30 |
| 21 | Main Power Switch | Cabinet | Industrial Rocker Switch | 1 | 60 | Mini Toggle Switch | 30 |
| 22 | Reset Push Button | Cabinet | PCB Reset Push Button | 1 | 15 | Standard Push Button | 5 |
| | **TOTAL SYSTEM COST** | | | | **₹22,473** | | **₹11,585** |

---

### Aligned Estimated Cost Tiers

* **Budget Version**: **₹16,735** (Prompt Range: ₹16,000–₹18,000, including CM5 carrier board setup).
* **Recommended Version**: **₹22,473** (Prompt Range: ₹20,000–₹24,000).
* **Premium Version**: **₹28,800** (Prompt Range: ₹26,000–₹30,000).
