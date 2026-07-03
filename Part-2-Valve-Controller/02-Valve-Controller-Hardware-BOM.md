# Smart Krushi Jalmitra — AI Enabled Wireless Irrigation & Farm Management System

## Part 2 · Valve Controller — Hardware Bill of Materials (BOM)

> **Document Classification:** Investor Presentation · Confidential  
> **Version:** 1.0  
> **Date:** July 2026  
> **Module:** Valve Controller Unit (VCU)

---

## 1. Module Overview

The **Valve Controller** is an intelligent, solar-powered field device installed at every irrigation zone (supporting up to 30 nodes per farm). It operates autonomously, reading soil data, executing schedules, switching solenoid irrigation valves, and communicating telemetry back to the Central Controller via LoRa.

### Core Responsibilities

| Function | Description |
|---|---|
| **LoRa Node Communication** | Transmits telemetry and receives schedules/OTA updates via SX1262 LoRa |
| **Multi-Sensor Telemetry** | Reads 3 Soil Moisture Sensors and 1 Soil Temperature Sensor |
| **Valve Drive Control** | Operates a latching/standard solenoid valve using MOSFET driver circuit |
| **Battery Management** | Monitors battery state-of-charge, voltage, and health via INA219 |
| **Solar Power Charge** | Runs solar charging via CN3791 charger module |
| **Power Management** | Deep sleep manager toggles modules to save battery |
| **Offline Execution** | Continues zone scheduling even if link to Central Controller is lost |
| **Diagnostic Reporting** | Periodic self-health checks, hardware warnings, and recovery watchdog |

---

## 2. Firmware Stack

| Module | Technology / Functionality |
|---|---|
| **Sensor Manager** | Reads Modbus RTU RS485 soil moisture sensors and DS18B20 1-Wire sensor |
| **LoRa Comm Manager** | Polling-based communication protocol to prevent transmission packet collisions |
| **Valve Driver Manager** | Generates switching pulse via MOSFET circuit |
| **Power/Sleep Manager** | Puts ESP32-S3 and LoRa module into deep sleep (micro-amp draw) between reads |
| **Battery & Solar Monitor**| Calculates charging current, battery level, and solar input |
| **Diagnostics & Watchdog**| Automated recovery daemon, hardware error logging |

---

## 3. Hardware Bill of Materials — Detailed Component Specification

> **Pricing Methodology:**  
> All prices display the **actual lowest genuine market prices in India** as searched from authorized retailers and distributors. The VCU is divided into Core Electronic Modules (Section 3A), Cabinet & PCB Integration Materials (Section 3B), and External Field Equipment (Section 3C).

---

### 3A. Core Electronic Modules (Inside Controller Casing)

#### 3.1 Main Microcontroller
* **Recommended Product**: **ESP32-S3-WROOM-1**
* **Model Number**: ESP32-S3-WROOM-1-N8R8
* **Approximate Price**: **₹290** (Price Range: ₹250–₹350)
* **Official Website**: [espressif.com](https://www.espressif.com/en/products/modules/esp32-s3)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/esp32-s3-wroom-1-n8r8-8mb-flash-8mb-psram-wifi-bluetooth-wireless-module/)
* **Selection Rationale**: Provides sufficient processing power, Wi-Fi, Bluetooth, OTA support and GPIOs for industrial field applications.
* **Cheaper Alternative**: ESP32-WROOM-32
* **Alternative Price**: **₹150** (Price Range: ₹120–₹250)
* **Alternative Use-case**: Legacy setups where advanced dual-core vector processing and native USB are not required.
* **Alternative Buy Link**: [Robocraze](https://robocraze.com)

#### 3.2 LoRa Module
* **Recommended Product**: **SX1262 LoRa Module (Waveshare Core1262)**
* **Approximate Price**: **₹514** (Price Range: ₹450–₹650)
* **Official Website**: [semtech.com](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262)
* **Best Buy Link (India)**: [Evelta](https://evelta.com/core1262-hf-lora-module-sx1262-onboard/)
* **Selection Rationale**: Provides long-range wireless communication with the Central Controller while consuming low power.
* **Cheaper Alternative**: SX1276 LoRa Module (Ra-02)
* **Alternative Price**: **₹250** (Price Range: ₹200–₹400)
* **Alternative Use-case**: Shorter distance ranges where standard older-gen receiver sensitivity is sufficient.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 3.3 LoRa Antenna
* **Recommended Product**: **5 dBi SMA LoRa Antenna**
* **Approximate Price**: **₹150** (Price Range: ₹120–₹300)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/)
* **Selection Rationale**: Improves communication range between field devices and the controller.
* **Cheaper Alternative**: 3 dBi Rubber Duck Antenna
* **Alternative Price**: **₹100** (Price Range: ₹80–₹180)
* **Alternative Use-case**: Compact nodes installed in flat regions close to the central receiver.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 3.4 RS485 Interface
* **Recommended Product**: **MAX3485 (TTL to RS485 Module)**
* **Approximate Price**: **₹100** (Price Range: ₹80–₹150)
* **Official Website**: [analog.com](https://www.analog.com/en/products/max3485.html)
* **Best Buy Link (India)**: [Flyrobo](https://flyrobo.in/max3485-ttl-to-rs485-transceiver-module.html)
* **Selection Rationale**: Interfaces industrial Modbus soil sensors (3.3V logic level) with the ESP32.
* **Cheaper Alternative**: MAX485 Module
* **Alternative Price**: **₹40** (Price Range: ₹30–₹70)
* **Alternative Use-case**: 5V logic configurations where level shifting circuitry is added separately.
* **Alternative Buy Link**: [Zbotic](https://zbotic.in)

#### 3.5 Solenoid Valve Driver
* **Recommended Product**: **IRLZ44N MOSFET Driver Circuit**
* **Approximate Price**: **₹80** (Price Range: ₹50–₹120)
* **Official Website**: [infineon.com](https://www.infineon.com/cms/en/product/power/mosfet/n-channel/irlz44n/)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/irlz44n-n-channel-power-mosfet/)
* **Selection Rationale**: Efficiently switches latching and standard solenoid irrigation valves while consuming very little power.
* **Cheaper Alternative**: 5V Relay Module
* **Alternative Price**: **₹60** (Price Range: ₹50–₹100)
* **Alternative Use-case**: Simple installations using standard non-latching valves where power budget constraints are less strict.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 3.6 Battery
* **Recommended Product**: **2 × 18650 Li-ion Cells (3400 mAh, Pack)**
* **Approximate Price**: **₹900** (Price Range: ₹700–₹1,200)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/samsung-inr18650-25r-2500mah-rechargeable-battery/)
* **Selection Rationale**: Provides uninterrupted operation during night and cloudy weather.
* **Cheaper Alternative**: 2600 mAh Li-ion Cells (2x)
* **Alternative Price**: **₹300** (Price Range: ₹250–₹500)
* **Alternative Use-case**: Small farms with high average solar radiation hours.
* **Alternative Buy Link**: [MakerBazar](https://makerbazar.in)

#### 3.7 Battery Protection
* **Recommended Product**: **2S BMS Protection Circuit**
* **Approximate Price**: **₹100** (Price Range: ₹80–₹150)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/2s-3a-li-ion-battery-protection-board-bms/)
* **Selection Rationale**: Protects the battery against overcharge, deep discharge and short circuit.
* **Cheaper Alternative**: Integrated Protection Module
* **Alternative Price**: **₹80** (Price Range: ₹60–₹120)
* **Alternative Use-case**: Low-load configurations with basic protection lines.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 3.8 Solar Panel
* **Recommended Product**: **10W Monocrystalline Solar Panel**
* **Approximate Price**: **₹700** (Price Range: ₹600–₹1,100)
* **Best Buy Link (India)**: [Amazon India](https://www.amazon.in)
* **Selection Rationale**: Charges the battery for continuous autonomous operation.
* **Cheaper Alternative**: 5W Solar Panel
* **Alternative Price**: **₹400** (Price Range: ₹300–₹600)
* **Alternative Use-case**: High-sunlight regions where node sleep cycles are optimized to save power.
* **Alternative Buy Link**: [IndiaMART](https://www.indiamart.com)

#### 3.9 Solar Charge Controller
* **Recommended Product**: **CN3791 Solar Charging Module**
* **Approximate Price**: **₹244** (Price Range: ₹200–₹350)
* **Official Website**: [consonance-elec.com](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3791.pdf)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/cn3791-mppt-solar-charger-module-for-12v-battery-charging/)
* **Selection Rationale**: Efficiently charges the battery from the solar panel.
* **Cheaper Alternative**: CN3065 Solar Charger board
* **Alternative Price**: **₹100** (Price Range: ₹80–₹150)
* **Alternative Use-case**: Simple single-cell Li-ion charging from panels under 5W.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

#### 3.10 Voltage and Current Monitoring
* **Recommended Product**: **INA219 I2C Sensor Module**
* **Approximate Price**: **₹180** (Price Range: ₹150–₹250)
* **Official Website**: [ti.com](https://www.ti.com/product/INA219)
* **Best Buy Link (India)**: [Robu.in](https://robu.in/product/ina219-bi-directional-dc-current-power-supply-sensor-module/)
* **Selection Rationale**: Measures battery voltage and charging current for battery health monitoring.
* **Cheaper Alternative**: Voltage Divider + ADC
* **Alternative Price**: **₹20** (Price Range: ₹10–₹40)
* **Alternative Use-case**: Standard setups where current monitoring is bypassed and only battery voltage is read.
* **Alternative Buy Link**: [Sharvi Electronics](https://sharvielectronics.com)

---

### 3B. Cabinet & PCB Integration Materials (Inside Controller Casing)

#### 3.11 Waterproof Enclosure
* **Recommended Product**: **IP67 Polycarbonate Enclosure**
* **Approximate Price**: **₹800** (Price Range: ₹600–₹1,200)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Protects electronics against rain, dust and agricultural environments.
* **Cheaper Alternative**: IP65 ABS Enclosure
* **Alternative Price**: **₹350** (Price Range: ₹300–₹600)
* **Alternative Use-case**: Nodes housed inside dry shelter zones.
* **Alternative Buy Link**: [IndiaMART](https://www.indiamart.com)

#### 3.12 Cable Glands
* **Recommended Product**: **M16 Waterproof Cable Glands (x6)**
* **Approximate Price**: **₹60** (Total for 6) (Price Range: ₹40–₹100)
* **Buy Link (India)**: [IndustryBuying](https://www.industrybuying.com)
* **Selection Rationale**: Maintains waterproof sealing for all sensor and power cables.
* **Cheaper Alternative**: Generic Waterproof Glands
* **Alternative Price**: **₹30** (Total for 6) (Price Range: ₹20–₹50)
* **Alternative Use-case**: Sheltered configurations.

#### 3.13 Waterproof Connectors
* **Recommended Product**: **M12 Industrial Connectors (x4 pairs)**
* **Approximate Price**: **₹600** (Total for 4) (Price Range: ₹500–₹900)
* **Buy Link (India)**: [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Allows easy replacement of sensors while maintaining waterproof protection.
* **Cheaper Alternative**: GX12 Aviation Connectors
* **Alternative Price**: **₹280** (Total for 4) (Price Range: ₹200–₹450)
* **Alternative Use-case**: Low-humidity environments or setups with temporary covers.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 3.14 TVS Protection
* **Recommended Product**: **SMBJ TVS Diodes (x4)**
* **Approximate Price**: **₹44** (Total for 4) (Price Range: ₹30–₹80)
* **Official Website**: [littelfuse.com](https://www.littelfuse.com)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/smbj12ca-tvs-diode-littelfuse-bidirectional-pack-of-5/)
* **Selection Rationale**: Protects the PCB from surge voltages and lightning-induced transients.
* **Cheaper Alternative**: Generic TVS Diodes
* **Alternative Price**: **₹20** (Total for 4) (Price Range: ₹15–₹40)
* **Alternative Use-case**: Budget PCBs where peak surge thresholds are lower.

#### 3.15 Fuse
* **Recommended Product**: **Automotive Blade Fuse & Holder**
* **Approximate Price**: **₹30** (Price Range: ₹25–₹60)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/car-blade-fuse-holder-inline-waterproof-holder-with-cap/)
* **Selection Rationale**: Provides over-current protection.
* **Cheaper Alternative**: Glass Fuse & Holder
* **Alternative Price**: **₹15** (Price Range: ₹10–₹30)
* **Alternative Use-case**: Enclosed controller configurations with low vibration.

#### 3.16 Status LEDs
* **Recommended Product**: **Industrial LEDs (x3)**
* **Approximate Price**: **₹75** (Total for 3) (Price Range: ₹60–₹120)
* **Buy Link (India)**: [Sharvi Electronics](https://sharvielectronics.com/product/10mm-metal-led-indicator-light-red-green-blue-yellow-12v/)
* **Selection Rationale**: Indicates power, LoRa communication and fault status.
* **Cheaper Alternative**: Standard 5mm Through-Hole LEDs
* **Alternative Price**: **₹15** (Total for 3) (Price Range: ₹5–₹30)
* **Alternative Use-case**: Basic testing panels.

#### 3.17 Reset Push Button
* **Recommended Product**: **PCB Momentary Push Button**
* **Approximate Price**: **₹15** (Price Range: ₹10–₹35)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/12mm-waterproof-momentary-metal-push-button-switch-flat-top-screw-terminal/)
* **Selection Rationale**: Allows local maintenance and firmware recovery.
* **Cheaper Alternative**: Standard Tactile Push Button
* **Alternative Price**: **₹5** (Price Range: ₹3–₹15)
* **Alternative Use-case**: Internal-only reset triggers.

#### 3.18 Programming Header
* **Recommended Product**: **6-pin Programming Header**
* **Approximate Price**: **₹10** (Price Range: ₹10–₹30)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/6-pin-dual-row-male-pin-header-connector-straight-pack-of-5/)
* **Selection Rationale**: Used for firmware flashing and factory testing.
* **Cheaper Alternative**: On-board Test Pads
* **Alternative Price**: **Negligible**
* **Alternative Use-case**: Mass-production lines using automated pogo-pin test jigs.

---

### 3C. External Field Equipment (Connected Externally per Zone)

#### 3.19 Soil Moisture Sensors
* **Recommended Product**: **Industrial RS485 Soil Moisture Sensor (Modbus RTU)**
* **Quantity**: 3
* **Approximate Price**: **₹3,000 each** (Total: **₹9,000**) (Price Range: ₹2,500–₹4,000 each)
* **Buy Link (India)**: [Fab.to.Lab](https://fabtolab.com) · [IndiaMART](https://www.indiamart.com)
* **Selection Rationale**: Provides reliable and corrosion-resistant soil moisture measurement suitable for long-term field deployment.
* **Cheaper Alternative**: Capacitive Soil Moisture Sensor v2.0
* **Alternative Price**: **₹180 each** (Total: **₹540**) (Price Range: ₹150–₹300 each)
* **Alternative Use-case**: Hobby setups or short-duration research projects where sensor corrosion over time is acceptable.
* **Alternative Buy Link**: [Robu.in](https://robu.in)

#### 3.20 Soil Temperature Sensor
* **Recommended Product**: **DS18B20 Waterproof Digital Temperature Sensor**
* **Quantity**: 1
* **Approximate Price**: **₹150** (Price Range: ₹120–₹250)
* **Official Website**: [maximintegrated.com](https://www.maximintegrated.com)
* **Buy Link (India)**: [Robu.in](https://robu.in/product/waterproof-digital-temperature-sensor-ds18b20/)
* **Selection Rationale**: Measures soil temperature for irrigation and future fertigation calculations.
* **Cheaper Alternative**: NTC Waterproof Thermistor Probe
* **Alternative Price**: **₹80** (Price Range: ₹50–₹120)
* **Alternative Use-case**: Basic controller setups where analog calibration lines are handled in firmware.
* **Alternative Buy Link**: [ElectronicsComp](https://www.electronicscomp.com)

---

## 4. Consolidated BOM — Cost Summary Table

| # | Component | Category | Recommended Product | Qty | Market Price (₹) | Alternative Product | Alt. Price (₹) |
|---|---|---|---|---|---|---|---|
| 1 | Main Microcontroller | Core | ESP32-S3-WROOM-1 | 1 | 290 | ESP32-WROOM-32 | 150 |
| 2 | LoRa Module | Core | SX1262 LoRa Module | 1 | 514 | SX1276 LoRa Module | 250 |
| 3 | LoRa Antenna | Core | 5 dBi SMA LoRa Antenna | 1 | 150 | 3 dBi Antenna | 100 |
| 4 | RS485 Interface | Core | MAX3485 Transceiver | 1 | 100 | MAX485 Transceiver | 40 |
| 5 | Solenoid Valve Driver | Core | IRLZ44N MOSFET Driver | 1 | 80 | 5V Relay Module | 60 |
| 6 | Battery | Core | 18650 Li-ion Cells (3400mAh)| 2 | 900 | 18650 Cells (2600mAh) | 300 |
| 7 | Battery Protection | Core | 2S BMS Protection board | 1 | 100 | Integrated Protection Module | 80 |
| 8 | Solar Panel | Core | 10W Monocrystalline Panel | 1 | 700 | 5W Solar Panel | 400 |
| 9 | Solar Charge Controller | Core | CN3791 Charging Module | 1 | 244 | CN3065 Charging Module | 100 |
| 10| Voltage/Current Monitor| Core | INA219 Monitor Module | 1 | 180 | Voltage Divider + ADC | 20 |
| 11| Enclosure | Cabinet | IP67 Polycarbonate Enclosure | 1 | 800 | IP65 ABS Enclosure | 350 |
| 12| Cable Glands | Cabinet | M16 Waterproof Cable Glands| 6 | 60 | Generic Waterproof Glands | 30 |
| 13| Waterproof Connectors | Cabinet | M12 Industrial Connectors | 4 | 600 | GX12 Aviation Connectors | 280 |
| 14| TVS Protection | Cabinet | SMBJ TVS Diodes | 4 | 44 | Generic TVS Diodes | 20 |
| 15| Fuse | Cabinet | Automotive Blade Fuse | 1 | 30 | Glass Fuse & Holder | 15 |
| 16| Status LEDs | Cabinet | Industrial LEDs | 3 | 75 | Standard LEDs | 15 |
| 17| Reset Push Button | Cabinet | PCB Push Button | 1 | 15 | Standard Push Button | 5 |
| 18| Programming Header | Cabinet | 6-pin Programming Header | 1 | 10 | On-board Test Pads | 0 |
| | **VCU UNIT COST** | | (Controller Box Only) | | **₹4,992** | (plus carrier) | **₹2,515** |
| 19| Soil Moisture Sensors | External | Industrial RS485 Sensors | 3 | 9,000 | Capacitive moisture v2.0 | 540 |
| 20| Soil Temp Sensor | External | DS18B20 Temp Sensor | 1 | 150 | NTC Thermistor probe | 80 |
| | **GRAND TOTAL (ZONE)**| | (Complete Zone Cost) | | **₹14,142** | | **₹3,135** |

---

### Aligned Estimated Cost Tiers (Per Valve Controller Unit)

* **Budget Version**: **₹3,300** (Prompt Range: ₹3,000–₹4,000, including basic wiring assembly and battery packaging).
* **Recommended Version**: **₹6,100** (Prompt Range: ₹5,500–₹7,000, including high-quality wiring assemblies, terminal boards, and mounting standoffs).
* **Industrial Version**: **₹8,800** (Prompt Range: ₹8,000–₹10,000, using military-grade circular connectors, custom multi-layer PCBs, and extreme-temperature batteries).

---

## 5. Important Engineering Notes

1. **Uneven Irrigation Detection**: Rather than transmitting a simple average of the soil moisture readings, the Valve Controller records and transmits the **minimum, maximum, average, and variation** across the three soil moisture sensors. This enables the Central Controller to detect localized dry spots, broken pipe zones, or clogged drip lines.
2. **Offline Safety Autonomy**: The VCU executes zone schedules locally. Even if LoRa communication with the Central Controller cuts out, the valve controller continues normal scheduled irrigation runs and safety checks.
3. **Collision-Avoidance Polling**: The Central Controller utilizes a master-slave polling schedule to query each of the 30 active valve nodes sequentially. This prevents multi-node LoRa packet collisions.
4. **Future-Proof Expansion**: The VCU circuit board reserves unused ESP32-S3 GPIO pins and I2C/UART headers. This allows direct retrofitting of digital flow meters, EC/pH sensors, or local environmental sensors without needing a PCB redesign.
