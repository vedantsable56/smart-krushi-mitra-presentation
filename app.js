// Smart Krushi Jalmitra Presentation Website Logic
// Contains hardware dataset, state management, search/filter, and navigation logic.

// Datasets for Part 1 (Central), Part 2 (Valve), and Part 3 (Sensor Tower)
const datasets = {
  central: [
    // CORE COMPONENTS
    { id: 1, type: "core", category: "processor", name: "Main Processor", recProduct: "Raspberry Pi 5 (4GB)", recModel: "SC1112", recPrice: 12331, recRange: "₹11,500 - ₹13,500", recLink: "https://www.raspberrypi.com/products/raspberry-pi-5/", recBuy: "https://robu.in/product/raspberry-pi-5-4gb/", recRationale: "Runs Linux OS, backend services, SQLite database, AI decision engine, scheduling engine, cloud synchronization, APIs and future modules.", altProduct: "RPi Compute Module 5 (4GB)", altPrice: 6000, altRationale: "For production-scale custom PCB designs with dedicated carrier board." },
    { id: 2, type: "core", category: "storage", name: "Local Storage", recProduct: "64GB Industrial SSD", recModel: "Kingston / WD SATA SSD", recPrice: 1500, recRange: "₹1,400 - ₹1,800", recLink: "https://www.kingston.com", recBuy: "https://www.amazon.in", recRationale: "Provides reliable storage for the local database, logs, schedules, weather cache and offline operation.", altProduct: "64GB High-Endurance MicroSD Card", altPrice: 700, altRationale: "Acceptable for budget pilots; requires replacement every 12-18 months." },
    { id: 3, type: "core", category: "storage", name: "SSD Adapter", recProduct: "USB 3.0 to SATA Adapter", recModel: "Generic USB 3.0 to SATA", recPrice: 290, recRange: "₹250 - ₹500", recLink: "https://www.amazon.in", recBuy: "https://www.amazon.in", recRationale: "Connects the SSD to the Raspberry Pi using USB 3.0.", altProduct: "NVMe USB Enclosure", altPrice: 900, altRationale: "For premium, high-speed storage configurations M.2 NVMe drives." },
    { id: 4, type: "core", category: "communication", name: "Cellular Internet Module", recProduct: "Quectel EC200U", recModel: "EC200U-CNAC", recPrice: 1600, recRange: "₹1,500 - ₹2,000", recLink: "https://www.quectel.com/product/lte-ec200u-cn", recBuy: "https://robu.in/product/quectel-ec200u-cn-lte-4g-gnss-mini-pcie-module/", recRationale: "Provides 4G internet connectivity for cloud synchronization, weather updates, OTA updates and remote monitoring.", altProduct: "SIMCom A7670", altPrice: 1100, altRationale: "Budget Cat-1 alternative with standard cellular data sync functions." },
    { id: 5, type: "core", category: "communication", name: "SIM Card", recProduct: "Airtel IoT SIM / Jio IoT SIM", recModel: "M2M Enterprise SIM", recPrice: 350, recRange: "₹300 - ₹500", recLink: "https://www.airtel.in/business/enterprise/iot", recBuy: "https://www.indiamart.com", recRationale: "Provides continuous internet connectivity for the central controller.", altProduct: "Standard 4G SIM", altPrice: 200, altRationale: "For pilot testing; requires manual recharge cycles and lacks dedicated M2M support." },
    { id: 6, type: "core", category: "communication", name: "LoRa Module", recProduct: "SX1262 LoRa Module", recModel: "Waveshare Core1262-HF", recPrice: 514, recRange: "₹450 - ₹650", recLink: "https://www.semtech.com/products/wireless-rf/lora-connect/sx1262", recBuy: "https://evelta.com/core1262-hf-lora-module-sx1262-onboard/", recRationale: "Provides long-range wireless communication between the central controller and up to 25–30 valve controllers.", altProduct: "SX1276 LoRa Module", altPrice: 250, altRationale: "Legacy transceiver chip; suitable for smaller farms with shorter distance ranges." },
    { id: 7, type: "core", category: "communication", name: "LoRa Antenna", recProduct: "5 dBi SMA LoRa Antenna", recModel: "868MHz 5dBi High-Gain Antenna", recPrice: 150, recRange: "₹120 - ₹300", recLink: "https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/", recBuy: "https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/", recRationale: "Improves communication range and signal quality.", altProduct: "3 dBi Rubber Duck Antenna", altPrice: 100, altRationale: "For small-scale farms where valve controllers reside within 500m line of sight." },
    { id: 8, type: "core", category: "communication", name: "LTE Antenna", recProduct: "External LTE SMA Antenna", recModel: "Omnidirectional 4G SMA Antenna", recPrice: 120, recRange: "₹100 - ₹250", recLink: "https://robocraze.com/products/4g-lte-antenna-external-sma", recBuy: "https://robocraze.com/products/4g-lte-antenna-external-sma", recRationale: "Provides better 4G signal reception.", altProduct: "PCB LTE Antenna", altPrice: 50, altRationale: "Suitable for areas with consistently strong cellular network coverage." },
    { id: 9, type: "core", category: "accessory", name: "Real Time Clock Module", recProduct: "DS3231 RTC Module", recModel: "DS3231SN Precise I2C RTC", recPrice: 209, recRange: "₹180 - ₹300", recLink: "https://www.analog.com/en/products/ds3231.html", recBuy: "https://robu.in/product/ds3231-rtc-module-precise-real-time-clock/", recRationale: "Maintains accurate date and time even during power outages.", altProduct: "PCF8563 RTC", altPrice: 80, altRationale: "Standard I2C clock module; lacks built-in temperature compensation, resulting in time drift." },
    { id: 10, type: "core", category: "cooling", name: "Cooling System", recProduct: "Official Raspberry Pi Active Cooler", recModel: "SC1148 Active Cooler", recPrice: 400, recRange: "₹350 - ₹550", recLink: "https://www.raspberrypi.com/products/active-cooler/", recBuy: "https://robu.in/product/official-active-cooler-for-raspberry-pi-5/", recRationale: "Prevents CPU throttling during continuous operation in high-temperature outdoor environments.", altProduct: "Large Passive Aluminium Heat Sink", altPrice: 100, altRationale: "For indoor-only or cool climate controllers running light server software loads." },
    { id: 11, type: "core", category: "power", name: "DC-DC Power Converter", recProduct: "12V to 5V Industrial Buck Converter (5A)", recModel: "XY-3606 IP68 Encapsulated", recPrice: 400, recRange: "₹350 - ₹600", recLink: "https://robu.in", recBuy: "https://roboway.in/product/12v-to-5v-5a-dc-dc-step-down-buck-converter-with-waterproof-housing/", recRationale: "Converts the farm's 12V DC supply into a stable 5V supply for the Raspberry Pi.", altProduct: "LM2596 Buck Converter", altPrice: 60, altRationale: "For testing/prototypes; lower efficiency and lacks protection housing." },
    { id: 12, type: "core", category: "power", name: "UPS Module", recProduct: "Raspberry Pi UPS HAT", recModel: "Waveshare RPi UPS HAT D", recPrice: 1500, recRange: "₹1,400 - ₹2,000", recLink: "https://www.waveshare.com/ups-hat-d.htm", recBuy: "https://robu.in/product/waveshare-ups-hat-d-for-raspberry-pi-stable-5v-power-output/", recRationale: "Allows safe shutdown during power failures and prevents database corruption.", altProduct: "Mini UPS Module", altPrice: 500, altRationale: "Keeps system alive but lacks automatic safe shutdown interface communication." },
    { id: 13, type: "core", category: "power", name: "Backup Battery", recProduct: "18650 Li-ion Battery Pack", recModel: "Samsung / Panasonic 18650 Pack", recPrice: 700, recRange: "₹600 - ₹900", recLink: "https://www.panasonic.com", recBuy: "https://robu.in/product/samsung-inr18650-25r-2500mah-rechargeable-battery/", recRationale: "Provides temporary backup power for safe system shutdown.", altProduct: "LiPo Battery Pack", altPrice: 300, altRationale: "Can be used if the UPS HAT supports LiPo cells; requires thermal shielding." },
    // CABINET & INTEGRATION
    { id: 14, type: "cabinet", category: "enclosure", name: "Enclosure", recProduct: "IP67 Polycarbonate Enclosure", recModel: "250x200x120mm IP67 Box", recPrice: 1800, recRange: "₹1,500 - ₹2,500", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com/impcat/polycarbonate-enclosure.html", recRationale: "Protects electronics from dust, rain and harsh outdoor conditions.", altProduct: "IP65 ABS Enclosure", altPrice: 900, altRationale: "Suitable if mounted inside a closed, shaded shelter or farm pump-house." },
    { id: 15, type: "cabinet", category: "enclosure", name: "Waterproof Cable Glands", recProduct: "M16 Waterproof Cable Glands (x8)", recModel: "M16 IP68 Nylon Glands", recPrice: 80, recRange: "₹60 - ₹150", recLink: "https://www.industrybuying.com", recBuy: "https://www.industrybuying.com/cable-glands-generic-ele-cab-42861214/", recRationale: "Provides waterproof cable entry into the enclosure.", altProduct: "Generic Waterproof Cable Glands", altPrice: 40, altRationale: "Cheaper alternative for sheltered connections." },
    { id: 16, type: "cabinet", category: "accessory", name: "Status LEDs", recProduct: "Industrial Panel LEDs (x4)", recModel: "10mm IP65 12V LED indicator", recPrice: 100, recRange: "₹80 - ₹160", recLink: "https://sharvielectronics.com", recBuy: "https://sharvielectronics.com/product/10mm-metal-led-indicator-light-red-green-blue-yellow-12v/", recRationale: "Provides visual indication of controller status.", altProduct: "Standard LEDs", altPrice: 20, altRationale: "Basic status indications for indoor control panels or testing rigs." },
    { id: 17, type: "cabinet", category: "accessory", name: "Buzzer", recProduct: "Active Buzzer", recModel: "SFM-27 Active Buzzer", recPrice: 30, recRange: "₹25 - ₹60", recLink: "https://robu.in/product/sfm-27-active-buzzer-continuous-beep-sound/", recBuy: "https://robu.in/product/sfm-27-active-buzzer-continuous-beep-sound/", recRationale: "Provides local fault indication.", altProduct: "Passive Buzzer", altPrice: 15, altRationale: "Requires PWM configuration to output different alarm frequencies." },
    { id: 18, type: "cabinet", category: "accessory", name: "Terminal Blocks", recProduct: "Phoenix Contact Style Terminal Blocks (x8)", recModel: "5.08mm Pluggable Terminals", recPrice: 120, recRange: "₹100 - ₹250", recLink: "https://www.mouser.in", recBuy: "https://www.indiamart.com/impcat/pluggable-terminal-block.html", recRationale: "Provides reliable field wiring connections.", altProduct: "Generic Screw Terminal Blocks", altPrice: 40, altRationale: "Cheaper, but less convenient for field replacement and testing." },
    { id: 19, type: "cabinet", category: "protection", name: "TVS Protection Diodes", recProduct: "SMBJ Series TVS Diodes (x4)", recModel: "SMBJ12A / SMBJ5.0A (600W)", recPrice: 44, recRange: "₹40 - ₹80", recLink: "https://www.littelfuse.com", recBuy: "https://robu.in/product/smbj12ca-tvs-diode-littelfuse-bidirectional-pack-of-5/", recRationale: "Protects against voltage surges and lightning-induced transients.", altProduct: "Generic TVS Diodes", altPrice: 20, altRationale: "Through-hole diodes, comparable protection specs in a bulkier package size." },
    { id: 20, type: "cabinet", category: "protection", name: "Fuse Holder & Fuse", recProduct: "Automotive Blade Fuse Holder (x2)", recModel: "Inline Auto Blade Fuse Set", recPrice: 60, recRange: "₹50 - ₹120", recLink: "https://robu.in/product/car-blade-fuse-holder-inline-waterproof-holder-with-cap/", recBuy: "https://robu.in/product/car-blade-fuse-holder-inline-waterproof-holder-with-cap/", recRationale: "Provides over-current protection.", altProduct: "Glass Fuse Holder", altPrice: 30, altRationale: "Fragile; less suitable for outdoor high-vibration equipment, but cheaper." },
    { id: 21, type: "cabinet", category: "power", name: "Main Power Switch", recProduct: "Industrial Rocker Switch", recModel: "KCD4 IP65 Rocker Switch", recPrice: 60, recRange: "₹50 - ₹120", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com/impcat/ip65-rocker-switch.html", recRationale: "Provides main power control.", altProduct: "Mini Toggle Switch", altPrice: 30, altRationale: "Acceptable for internal enclosures without IP-grade requirements." },
    { id: 22, type: "cabinet", category: "accessory", name: "Reset Push Button", recProduct: "PCB Reset Push Button", recModel: "12mm Momentary IP65 Button", recPrice: 15, recRange: "₹10 - ₹40", recLink: "https://robu.in/product/12mm-waterproof-momentary-metal-push-button-switch-flat-top-screw-terminal/",
    recBuy: "https://robu.in/product/12mm-waterproof-momentary-metal-push-button-switch-flat-top-screw-terminal/", recRationale: "Allows manual hardware reset.", altProduct: "Standard Push Button", altPrice: 5, altRationale: "Direct PCB-only mount reset, not accessible externally." }
  ],
  valve: [
    // CORE COMPONENTS
    { id: 1, type: "core", category: "processor", name: "Main Microcontroller", recProduct: "ESP32-S3-WROOM-1", recModel: "ESP32-S3-WROOM-1-N8R8", recPrice: 290, recRange: "₹250 - ₹350", recLink: "https://www.espressif.com/en/products/modules/esp32-s3", recBuy: "https://robu.in/product/esp32-s3-wroom-1-n8r8-8mb-flash-8mb-psram-wifi-bluetooth-wireless-module/", recRationale: "Provides sufficient processing power, Wi-Fi, Bluetooth, OTA support and GPIOs for industrial applications.", altProduct: "ESP32-WROOM-32", altPrice: 150, altRationale: "Legacy configurations where vector processing and USB interface are bypassed." },
    { id: 2, type: "core", category: "communication", name: "LoRa Module", recProduct: "SX1262 LoRa Module", recModel: "Waveshare Core1262-HF", recPrice: 514, recRange: "₹450 - ₹650", recLink: "https://www.semtech.com/products/wireless-rf/lora-connect/sx1262", recBuy: "https://evelta.com/core1262-hf-lora-module-sx1262-onboard/", recRationale: "Provides long-range wireless communication with the Central Controller while consuming low power.", altProduct: "SX1276 LoRa Module (Ra-02)", altPrice: 250, altRationale: "Shorter range setups where older sub-GHz sensitivity limits are acceptable." },
    { id: 3, type: "core", category: "communication", name: "LoRa Antenna", recProduct: "5 dBi SMA LoRa Antenna", recModel: "868MHz 5dBi High-Gain Antenna", recPrice: 150, recRange: "₹120 - ₹300", recLink: "https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/", recBuy: "https://robu.in/product/868mhz-5dbi-high-gain-rubber-antenna/", recRationale: "Improves communication range between field devices and the controller.", altProduct: "3 dBi Rubber Duck Antenna", altPrice: 100, altRationale: "For small-scale farms where valve nodes reside near the central station." },
    { id: 4, type: "core", category: "communication", name: "RS485 Interface", recProduct: "MAX3485 (TTL to RS485)", recModel: "MAX3485 Module", recPrice: 100, recRange: "₹80 - ₹150", recLink: "https://www.analog.com/en/products/max3485.html", recBuy: "https://flyrobo.in/max3485-ttl-to-rs485-transceiver-module.html", recRationale: "Interfaces industrial Modbus soil sensors (3.3V logic level) with the ESP32.", altProduct: "MAX485 Transceiver Module", altPrice: 40, altRationale: "5V logic configurations where level shifters are separately engineered." },
    { id: 5, type: "core", category: "processor", name: "Solenoid Valve Driver", recProduct: "IRLZ44N MOSFET Driver Circuit", recModel: "IRLZ44N MOSFET Driver", recPrice: 80, recRange: "₹50 - ₹120", recLink: "https://www.infineon.com", recBuy: "https://robu.in/product/irlz44n-n-channel-power-mosfet/", recRationale: "Efficiently switches irrigation valves while consuming very little power.", altProduct: "5V Relay Module", altPrice: 60, altRationale: "For standard non-latching valves where continuous power draws are not an issue." },
    { id: 6, type: "core", category: "power", name: "Battery Pack", recProduct: "2 × 18650 Li-ion Cells (3400 mAh)", recModel: "Samsung INR18650-25R / Panasonic NCR", recPrice: 900, recRange: "₹700 - ₹1,200", recLink: "https://www.panasonic.com", recBuy: "https://robu.in/product/samsung-inr18650-25r-2500mah-rechargeable-battery/", recRationale: "Provides uninterrupted operation during night and cloudy weather.", altProduct: "18650 Cells (2600 mAh) (2x)", altPrice: 300, altRationale: "Farms with high sun hours where cell storage specs can be downscaled." },
    { id: 7, type: "core", category: "power", name: "Battery Protection", recProduct: "2S BMS Protection Board", recModel: "2S 3A Li-ion Protection Board", recPrice: 100, recRange: "₹80 - ₹150", recLink: "https://www.amazon.in", recBuy: "https://robu.in/product/2s-3a-li-ion-battery-protection-board-bms/", recRationale: "Protects the battery against overcharge, deep discharge and short circuit.", altProduct: "Integrated Protection Module", altPrice: 80, altRationale: "Basic load protection cells." },
    { id: 8, type: "core", category: "power", name: "Solar Panel", recProduct: "10W Monocrystalline Solar Panel", recModel: "10W Solar Panel", recPrice: 700, recRange: "₹600 - ₹1,100", recLink: "https://www.amazon.in", recBuy: "https://www.amazon.in", recRationale: "Charges the battery for continuous autonomous operation.", altProduct: "5W Solar Panel", altPrice: 400, altRationale: "High-sunlight regions where node sleep parameters are maximized." },
    { id: 9, type: "core", category: "power", name: "Solar Charge Controller", recProduct: "CN3791 Solar Charging Module", recModel: "CN3791 MPPT Solar Charger", recPrice: 244, recRange: "₹200 - ₹350", recLink: "http://www.consonance-elec.com/pdf/datasheet/DSE-CN3791.pdf", recBuy: "https://robu.in/product/cn3791-mppt-solar-charger-module-for-12v-battery-charging/", recRationale: "Efficiently charges the battery from the solar panel.", altProduct: "CN3065 Charger Board", altPrice: 100, altRationale: "Low power charging setup under 5W panel sizes." },
    { id: 10, type: "core", category: "power", name: "Voltage and Current Monitoring", recProduct: "INA219 I2C Sensor Module", recModel: "INA219 DC Monitor Module", recPrice: 180, recRange: "₹150 - ₹250", recLink: "https://www.ti.com/product/INA219", recBuy: "https://robu.in/product/ina219-bi-directional-dc-current-power-supply-sensor-module/", recRationale: "Measures battery voltage and charging current for battery health monitoring.", altProduct: "Voltage Divider + ADC", altPrice: 20, altRationale: "Basic configurations where current measurement is bypassed." },
    // CABINET & INTEGRATION
    { id: 11, type: "cabinet", category: "enclosure", name: "Enclosure", recProduct: "IP67 Polycarbonate Enclosure", recModel: "200x150x100mm IP67 Box", recPrice: 800, recRange: "₹600 - ₹1,200", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com/impcat/polycarbonate-enclosure.html", recRationale: "Protects electronics against rain, dust and agricultural environments.", altProduct: "IP65 ABS Enclosure", altPrice: 350, altRationale: "Housed inside shelters or farm pump-houses." },
    { id: 12, type: "cabinet", category: "enclosure", name: "Cable Glands", recProduct: "M16 Waterproof Cable Glands (x6)", recModel: "M16 IP68 Nylon Glands", recPrice: 60, recRange: "₹40 - ₹100", recLink: "https://www.industrybuying.com", recBuy: "https://www.industrybuying.com/cable-glands-generic-ele-cab-42861214/", recRationale: "Maintains waterproof sealing for all sensor and power cables.", altProduct: "Generic Waterproof Glands", altPrice: 30, altRationale: "For indoor setups or basic outdoor covers." },
    { id: 13, type: "cabinet", category: "enclosure", name: "Waterproof Connectors", recProduct: "M12 Industrial Connectors (x4 pairs)", recModel: "M12 4-Pin Circular Connector", recPrice: 600, recRange: "₹500 - ₹900", recLink: "https://www.indiamart.com", recBuy: "https://robu.in", recRationale: "Allows easy replacement of sensors while maintaining waterproof protection.", altProduct: "GX12 Aviation Connectors", altPrice: 280, altRationale: "Budget aviation sockets, lower weather protection but cheaper." },
    { id: 14, type: "cabinet", category: "protection", name: "TVS Protection", recProduct: "SMBJ TVS Diodes (x4)", recModel: "SMBJ12A / SMBJ5.0A (600W)", recPrice: 44, recRange: "₹30 - ₹80", recLink: "https://www.littelfuse.com", recBuy: "https://robu.in/product/smbj12ca-tvs-diode-littelfuse-bidirectional-pack-of-5/", recRationale: "Protects the PCB from surge voltages and lightning-induced transients.", altProduct: "Generic TVS Diodes", altPrice: 20, altRationale: "THT TVS diodes, comparable surge limits." },
    { id: 15, type: "cabinet", category: "protection", name: "Fuse", recProduct: "Automotive Blade Fuse & Holder", recModel: "Inline Auto Blade Fuse Set", recPrice: 30, recRange: "₹25 - ₹60", recLink: "https://robu.in/product/car-blade-fuse-holder-inline-waterproof-holder-with-cap/", recBuy: "https://robu.in/product/car-blade-fuse-holder-inline-waterproof-holder-with-cap/", recRationale: "Provides over-current protection.", altProduct: "Glass Fuse & Holder", altPrice: 15, altRationale: "Enclosed controller configurations with low vibration." },
    { id: 16, type: "cabinet", category: "accessory", name: "Status LEDs", recProduct: "Industrial LEDs (x3)", recModel: "10mm IP65 12V LED indicator", recPrice: 75, recRange: "₹60 - ₹120", recLink: "https://sharvielectronics.com", recBuy: "https://sharvielectronics.com/product/10mm-metal-led-indicator-light-red-green-blue-yellow-12v/", recRationale: "Indicates power, LoRa communication and fault status.", altProduct: "Standard 5mm LEDs", altPrice: 15, altRationale: "Basic indicator LEDs on internal panels." },
    { id: 17, type: "cabinet", category: "accessory", name: "Reset Push Button", recProduct: "PCB Momentary Push Button", recModel: "12mm Momentary IP65 Button", recPrice: 15, recRange: "₹10 - ₹35", recLink: "https://robu.in/product/12mm-waterproof-momentary-metal-push-button-switch-flat-top-screw-terminal/", recBuy: "https://robu.in/product/12mm-waterproof-momentary-metal-push-button-switch-flat-top-screw-terminal/", recRationale: "Allows local maintenance and firmware recovery.", altProduct: "Standard Tact Switch", altPrice: 5, altRationale: "Internal-only reset triggers." },
    { id: 18, type: "cabinet", category: "accessory", name: "Programming Header", recProduct: "6-pin Programming Header", recModel: "6-pin 2.54mm pin header", recPrice: 10, recRange: "₹10 - ₹30", recLink: "https://robu.in/product/6-pin-dual-row-male-pin-header-connector-straight-pack-of-5/", recBuy: "https://robu.in/product/6-pin-dual-row-male-pin-header-connector-straight-pack-of-5/", recRationale: "Used for firmware flashing and factory testing.", altProduct: "On-board Test Pads", altPrice: 0, altRationale: "Direct test points on PCB for factory assembly jigs." },
    // EXTERNAL EQUIPMENTS
    { id: 19, type: "external", category: "accessory", name: "Soil Moisture Sensors", recProduct: "Industrial RS485 Soil Moisture Sensor", recModel: "RS485 Modbus RTU Moisture Probe", recPrice: 9000, recRange: "₹2,500 - ₹4,000 each (x3)", recLink: "https://fabtolab.com", recBuy: "https://fabtolab.com", recRationale: "Provides reliable and corrosion-resistant soil moisture measurement for long-term field deployment.", altProduct: "Capacitive Soil Moisture Sensor v2.0 (x3)", altPrice: 540, altRationale: "Hobbyist setups where sensor degradation over time is acceptable." },
    { id: 20, type: "external", category: "accessory", name: "Soil Temperature Sensor", recProduct: "DS18B20 Temp Sensor", recModel: "DS18B20 Waterproof Probe", recPrice: 150, recRange: "₹120 - ₹250", recLink: "https://www.maximintegrated.com", recBuy: "https://robu.in/product/waterproof-digital-temperature-sensor-ds18b20/", recRationale: "Measures soil temperature for irrigation and future fertigation calculations.", altProduct: "NTC Waterproof Thermistor Probe", altPrice: 80, altRationale: "Analog thermistor probes calibrated directly in controller firmware." }
  ],
  tower: [
    // CORE SENSOR MODULES & CABLES
    { id: 1, type: "core", category: "accessory", name: "Soil Moisture Sensors", recProduct: "Industrial RS485 Soil Moisture Sensor", recModel: "RS485 Modbus RTU Probe (3x)", recPrice: 4500, recRange: "₹1,500 - ₹3,000 each (x3)", recLink: "https://fabtolab.com", recBuy: "https://fabtolab.com", recRationale: "Provides accurate, corrosion-resistant soil moisture measurement for commercial agriculture.", altProduct: "Capacitive Soil Moisture Sensor V2.0 (x3)", altPrice: 540, altRationale: "Hobby setups or short-duration research projects where sensor degradation is acceptable." },
    { id: 2, type: "core", category: "accessory", name: "Soil Temperature Sensor", recProduct: "DS18B20 Temp Sensor", recModel: "DS18B20 Waterproof Probe", recPrice: 150, recRange: "₹150 - ₹250", recLink: "https://www.maximintegrated.com", recBuy: "https://robu.in/product/waterproof-digital-temperature-sensor-ds18b20/", recRationale: "Measures soil temperature to improve irrigation and future fertigation recommendations.", altProduct: "Waterproof NTC Temperature Probe", altPrice: 80, altRationale: "Analog thermistor probes calibrated directly in controller firmware." },
    { id: 3, type: "core", category: "communication", name: "RS485 Cable", recProduct: "Shielded Twisted Pair RS485 Cable (10m)", recModel: "2-Pair Shielded Cable", recPrice: 400, recRange: "₹40 - ₹80 per meter", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com", recRationale: "Provides reliable, noise-resistant communication between the Sensor Tower and Valve Controller.", altProduct: "CAT6 Outdoor Cable (10m)", altPrice: 200, altRationale: "Short distance runs under 5m where noise issues are minimal." },
    { id: 4, type: "core", category: "enclosure", name: "UV Resistant Flexible Conduit", recProduct: "Corrugated Conduit (10m)", recModel: "UV Resistant Corrugated Pipe", recPrice: 400, recRange: "₹40 - ₹80 per meter", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com", recRationale: "Protects sensor cables from sunlight, rodents and physical damage.", altProduct: "PVC Flexible Conduit (10m)", altPrice: 200, altRationale: "Underground routing or sheltered channels not exposed to direct UV rays." },
    // CASING & MOUNTING MATERIALS
    { id: 5, type: "cabinet", category: "enclosure", name: "Sensor Junction Box", recProduct: "IP67 Polycarbonate Junction Box", recModel: "100x100x75mm IP67 Box", recPrice: 300, recRange: "₹300 - ₹700", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com/impcat/polycarbonate-enclosure.html", recRationale: "Provides weatherproof housing for cable joints and sensor wiring.", altProduct: "IP65 ABS Junction Box", altPrice: 150, altRationale: "Under permanent farm sheds or sheltered mounting frames." },
    { id: 6, type: "cabinet", category: "enclosure", name: "Waterproof Connectors", recProduct: "M12 Waterproof Connectors (x4 pairs)", recModel: "M12 4-Pin Waterproof Socket", recPrice: 600, recRange: "₹150 - ₹300 each (x4)", recLink: "https://www.indiamart.com", recBuy: "https://robu.in", recRationale: "Allows easy replacement of damaged sensors without rewiring.", altProduct: "GX12 Aviation Connectors (x4)", altPrice: 280, altRationale: "GX12 sockets, lower weather protection but cheaper." },
    { id: 7, type: "cabinet", category: "enclosure", name: "Cable Glands", recProduct: "M16 Waterproof Cable Glands (x4)", recModel: "M16 IP68 Nylon Glands", recPrice: 40, recRange: "₹40 - ₹60 each (x4)", recLink: "https://www.industrybuying.com", recBuy: "https://www.industrybuying.com/cable-glands-generic-ele-cab-42861214/", recRationale: "Maintains the waterproof integrity of the junction box.", altProduct: "Generic Waterproof Cable Glands", altPrice: 20, altRationale: "Housed inside nested casings." },
    { id: 8, type: "cabinet", category: "accessory", name: "Mounting Pole", recProduct: "GI Pipe Mounting Pole", recModel: "1.5m GI Pipe Pole", recPrice: 300, recRange: "₹300 - ₹700", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com", recRationale: "Provides rigid and durable installation of the Sensor Tower.", altProduct: "PVC Pipe", altPrice: 100, altRationale: "Light installations where soil is stable and wind speeds are low." },
    { id: 9, type: "cabinet", category: "accessory", name: "Mounting Brackets", recProduct: "Stainless Steel Mounting Brackets", recModel: "Stainless Steel Brackets Set", recPrice: 100, recRange: "₹100 - ₹250", recLink: "https://www.indiamart.com", recBuy: "https://www.indiamart.com", recRationale: "Securely mounts the junction box and conduit to the support pole.", altProduct: "Galvanized Steel Brackets", altPrice: 50, altRationale: "Locations where atmospheric corrosion risks are minimal." },
    { id: 10, type: "cabinet", category: "protection", name: "Surge Protection", recProduct: "SMBJ TVS Diodes (x4)", recModel: "SMBJ12A / SMBJ5.0A (600W)", recPrice: 44, recRange: "₹20 - ₹40 each (x4)", recLink: "https://www.littelfuse.com", recBuy: "https://robu.in/product/smbj12ca-tvs-diode-littelfuse-bidirectional-pack-of-5/", recRationale: "Protects connected sensors from surge voltages and lightning-induced transients.", altProduct: "Generic TVS Diodes (x4)", altPrice: 40, altRationale: "Budget layouts where peak surge thresholds are lower." }
  ]
};

// App State
let currentController = "central"; // 'central' | 'valve' | 'tower'
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let selectedTier = "rec"; // 'rec' | 'alt' | 'prem'
let searchQuery = "";
let categoryFilter = "all";
let sectionFilter = "all"; // 'all' | 'core' | 'cabinet' | 'external'

// Slide navigation
function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;
  
  slides[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  
  // Update nav UI indicators
  document.querySelectorAll('.nav-dot').forEach((dot, idx) => {
    if (idx === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Slide special animations
  if (currentSlide === 3) {
    animateSVGDiagram();
  }
}

// Initial Navigation dot setup
function setupNavigation() {
  const navContainer = document.getElementById('slide-nav-dots');
  if (navContainer) {
    navContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `nav-dot ${i === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToSlide(i));
      navContainer.appendChild(dot);
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      if (e.target.tagName !== 'INPUT') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      if (e.target.tagName !== 'INPUT') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }
    }
  });

  // Touch/Swipe swipe detection
  let touchstartX = 0;
  let touchendX = 0;
  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  }, false);
  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  }, false);

  function handleGesture() {
    if (touchendX < touchstartX - 50) {
      goToSlide(currentSlide + 1);
    }
    if (touchendX > touchstartX + 50) {
      goToSlide(currentSlide - 1);
    }
  }
}

// Update calculated pricing summary cards
function updateCostSummaries() {
  let totalRec = 0;
  let totalAlt = 0;
  let totalPrem = 0;

  const activeDataset = datasets[currentController];

  activeDataset.forEach(item => {
    // For VCU, only sum Core + Cabinet inside the VCU Unit Cost card
    if (currentController === "valve" && item.type === "external") {
      return; 
    }

    totalRec += item.recPrice;
    totalAlt += item.altPrice;
    
    // Premium version details
    if (item.category === "processor") {
      totalPrem += (currentController === "central") ? 15000 : 800; 
    } else if (item.category === "storage") {
      totalPrem += 2500; 
    } else if (item.category === "enclosure") {
      totalPrem += (currentController === "central") ? 2500 : 1500; 
    } else {
      totalPrem += Math.round(item.recPrice * 1.25);
    }
  });

  // Add aligned miscellaneous buffers (matches BOM files)
  if (currentController === "central") {
    totalRec += 180;
    totalAlt += 95;
    totalPrem += 280;
  } else if (currentController === "valve") {
    totalRec += 1108; // ₹4,992 to ₹6,100
    totalAlt += 785;  // ₹2,515 to ₹3,300
    totalPrem += 1600; // Premium to ₹8,800
  } else {
    // Sensor Tower assembly buffers
    totalRec += 1266; // ₹6,834 to ₹8,100 (Recommended build total)
    totalAlt += 140;  // ₹1,660 to ₹1,800 (Budget build total)
    totalPrem += 600;  // Premium/Industrial total to ₹11,000
  }

  const costBudgetEl = document.getElementById('cost-budget');
  const costRecEl = document.getElementById('cost-recommended');
  const costPremEl = document.getElementById('cost-premium');

  if (costBudgetEl) costBudgetEl.textContent = `₹${totalAlt.toLocaleString('en-IN')}`;
  if (costRecEl) costRecEl.textContent = `₹${totalRec.toLocaleString('en-IN')}`;
  if (costPremEl) costPremEl.textContent = `₹${totalPrem.toLocaleString('en-IN')}`;

  // Update dynamic calculator text block based on selected tier
  const tierTitle = document.getElementById('calc-tier-title');
  const tierTotal = document.getElementById('calc-tier-total');
  const tierSavings = document.getElementById('calc-tier-savings');

  if (tierTitle && tierTotal && tierSavings) {
    let labelPrefix = "CENTRAL CONTROLLER";
    if (currentController === "valve") labelPrefix = "VALVE CONTROLLER UNIT";
    else if (currentController === "tower") labelPrefix = "SENSOR TOWER";

    if (selectedTier === "alt") {
      tierTitle.textContent = `${labelPrefix} BUDGET TOTAL`;
      tierTotal.textContent = `₹${totalAlt.toLocaleString('en-IN')}`;
      const savings = totalRec - totalAlt;
      tierSavings.innerHTML = `<span class="pill-green">✓ Saved ₹${savings.toLocaleString('en-IN')} over Recommended</span>`;
    } else if (selectedTier === "rec") {
      tierTitle.textContent = `${labelPrefix} RECOMMENDED TOTAL`;
      tierTotal.textContent = `₹${totalRec.toLocaleString('en-IN')}`;
      tierSavings.innerHTML = `<span class="pill-green">✓ Optimized cost-performance balance for outdoor deployments</span>`;
    } else {
      tierTitle.textContent = `${labelPrefix} INDUSTRIAL/PREMIUM TOTAL`;
      tierTotal.textContent = `₹${totalPrem.toLocaleString('en-IN')}`;
      const extra = totalPrem - totalRec;
      tierSavings.innerHTML = `<span class="pill-red">⚠ Adds ₹${extra.toLocaleString('en-IN')} for industrial spec builds</span>`;
    }
  }
}

// Render dynamic BOM Table
function renderBOMTable() {
  const container = document.getElementById('bom-grid-container');
  if (!container) return;
  container.innerHTML = "";

  const activeDataset = datasets[currentController];

  const filtered = activeDataset.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.recProduct.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.altProduct.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesSection = sectionFilter === "all" || item.type === sectionFilter;
    return matchesSearch && matchesCategory && matchesSection;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results">No components match your search.</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = "bom-card frosted-glass fade-in";

    // Set pricing based on tier selection
    let displayProduct = item.recProduct;
    let displayPrice = item.recPrice;
    let displayRationale = item.recRationale;
    let isAlternative = false;

    if (selectedTier === "alt") {
      displayProduct = item.altProduct;
      displayPrice = item.altPrice;
      displayRationale = item.altRationale;
      isAlternative = true;
    } else if (selectedTier === "prem") {
      if (item.category === "processor") {
        displayProduct = currentController === "central" ? "Raspberry Pi 5 (8GB) / CM5 + Premium Carrier" : "ESP32-S3-WROOM-1 Premium Spec";
        displayPrice = currentController === "central" ? 15000 : 800;
      } else if (item.category === "storage") {
        displayProduct = "64GB Industrial SSD (High Temp SLC)";
        displayPrice = 2500;
      } else if (item.category === "enclosure") {
        displayProduct = "Fibox IP67 Polycarbonate Premium Enclosure";
        displayPrice = (currentController === "central") ? 2500 : 1500;
      } else {
        displayPrice = Math.round(item.recPrice * 1.25);
      }
    }

    // Type label rendering
    let typeLabelText = "CORE MODULE";
    if (item.type === "cabinet") typeLabelText = "INTEGRATION";
    else if (item.type === "external") typeLabelText = "EXTERNAL ZONE";

    card.innerHTML = `
      <div class="bom-card-header">
        <span class="category-badge badge-${item.category}">${item.category.toUpperCase()}</span>
        <span class="bom-card-type-tag type-${item.type}">${typeLabelText}</span>
      </div>
      <h3 class="bom-card-title">${item.name}</h3>
      <div class="bom-card-spec">
        <div class="spec-label">${isAlternative ? "Alternative Specification" : "Primary Specification"}</div>
        <div class="spec-value">${displayProduct}</div>
      </div>
      <div class="bom-card-price">₹${displayPrice.toLocaleString('en-IN')}</div>
      <p class="bom-card-rationale">${displayRationale}</p>
      <div class="bom-card-footer">
        ${!isAlternative && item.recLink ? `<a href="${item.recLink}" target="_blank" class="card-btn-secondary">Official Site</a>` : ''}
        ${!isAlternative && item.recBuy ? `<a href="${item.recBuy}" target="_blank" class="card-btn-primary">Buy Online</a>` : ''}
        ${isAlternative ? `<span class="alt-label">Budget Swap</span>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

// Setup Event Listeners for Filters/Tiers
function setupFilters() {
  // Config Tiers toggles
  document.querySelectorAll('.tier-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tier-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTier = btn.dataset.tier;
      updateCostSummaries();
      renderBOMTable();
    });
  });

  // Section Filters (Core vs Cabinets vs External)
  document.querySelectorAll('.section-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.section-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sectionFilter = btn.dataset.section;
      renderBOMTable();
    });
  });

  // Controller Context Switcher (Central vs Valve vs Tower)
  document.querySelectorAll('.context-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.context-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentController = btn.dataset.controller;
      
      // Update UI headers
      const metaHeader = document.querySelector('.pres-meta');
      if (metaHeader) {
        if (currentController === "central") metaHeader.textContent = "Part 1: Central Controller";
        else if (currentController === "valve") metaHeader.textContent = "Part 2: Valve Controller";
        else metaHeader.textContent = "Part 3: Sensor Tower";
      }

      // Hide or show the external section filter tab depending on controller selection
      const extFilterBtn = document.getElementById('ext-filter-tab');
      if (extFilterBtn) {
        extFilterBtn.style.display = currentController === "valve" ? "inline-block" : "none";
      }

      // Switch context visuals on the Cost slide (Slide 6)
      updateCostSlideContext();

      // Reset filters
      sectionFilter = "all";
      document.querySelectorAll('.section-filter-btn').forEach(b => {
        if (b.dataset.section === "all") b.classList.add('active');
        else b.classList.remove('active');
      });

      updateCostSummaries();
      renderBOMTable();
      updateSVGLayout();
    });
  });

  // Search input
  const searchInput = document.getElementById('bom-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderBOMTable();
    });
  }

  // Category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      categoryFilter = btn.dataset.category;
      renderBOMTable();
    });
  });
}

// Adjust the presentation cost tiers details depending on active controller selection
function updateCostSlideContext() {
  const cardBudgetText = document.querySelector('#cost-budget + p');
  const cardRecText = document.querySelector('#cost-recommended + p');
  const cardPremText = document.querySelector('#cost-premium + p');

  const featuresBudget = document.querySelector('.tier-cost-card:nth-child(1) .tier-features');
  const featuresRec = document.querySelector('.tier-cost-card:nth-child(2) .tier-features');
  const featuresPrem = document.querySelector('.tier-cost-card:nth-child(3) .tier-features');

  if (currentController === "central") {
    if (cardBudgetText) cardBudgetText.textContent = "Ideal for basic residential, research pilots, or budget-restricted deployments.";
    if (cardRecText) cardRecText.textContent = "Optimized configuration balancing performance, outdoor stability, and long-term lifespan.";
    if (cardPremText) cardPremText.textContent = "Maximum capabilities for industrial agricultural installations with complex multi-zone layouts.";

    if (featuresBudget) {
      featuresBudget.innerHTML = `
        <div class="tier-feature-item">CM5 CPU + Carrier Board</div>
        <div class="tier-feature-item">64GB High-Endurance MicroSD</div>
        <div class="tier-feature-item">SIMCom A7670 Cellular Module</div>
        <div class="tier-feature-item">SX1276 LoRa Transceiver</div>
        <div class="tier-feature-item">IP65 ABS Enclosure / Cabinet</div>
      `;
    }
    if (featuresRec) {
      featuresRec.innerHTML = `
        <div class="tier-feature-item">Raspberry Pi 5 (4GB) CPU</div>
        <div class="tier-feature-item">64GB Industrial SSD + SATA Adapt</div>
        <div class="tier-feature-item">Quectel EC200U 4G Module</div>
        <div class="tier-feature-item">SX1262 LoRa + 5 dBi Antenna</div>
        <div class="tier-feature-item">IP67 Polycarbonate Casing</div>
        <div class="tier-feature-item">UPS HAT + 18650 Battery Pack</div>
      `;
    }
    if (featuresPrem) {
      featuresPrem.innerHTML = `
        <div class="tier-feature-item">RPi 5 (8GB) or CM5 + Premium Carrier</div>
        <div class="tier-feature-item">High-Temp industrial SSD</div>
        <div class="tier-feature-item">Branded Fibox Enclosure Box</div>
        <div class="tier-feature-item">Phoenix Contact Terminal blocks</div>
      `;
    }
  } else if (currentController === "valve") {
    if (cardBudgetText) cardBudgetText.textContent = "Standard low-cost node utilizing basic ESP32 and downscaled battery size.";
    if (cardRecText) cardRecText.textContent = "Rugged field-ready solar node with dual-core MCU, robust RS485 Modbus telemetry, and UPS circuitry.";
    if (cardPremText) cardPremText.textContent = "Ultra-reliable industrial specification incorporating military connectors and custom circuit layouts.";

    if (featuresBudget) {
      featuresBudget.innerHTML = `
        <div class="tier-feature-item">ESP32-WROOM-32 MCU</div>
        <div class="tier-feature-item">SX1276 LoRa + 3 dBi Antenna</div>
        <div class="tier-feature-item">Capacitive Moisture Sensors (x3)</div>
        <div class="tier-feature-item">5W Solar Panel + CN3065 Board</div>
        <div class="tier-feature-item">IP65 ABS Enclosure Box</div>
      `;
    }
    if (featuresRec) {
      featuresRec.innerHTML = `
        <div class="tier-feature-item">ESP32-S3 Dual-Core Processor</div>
        <div class="tier-feature-item">SX1262 LoRa + 5 dBi High-Gain Ant</div>
        <div class="tier-feature-item">Industrial RS485 Sensors (x3)</div>
        <div class="tier-feature-item">10W Panel + CN3791 MPPT Module</div>
        <div class="tier-feature-item">IP67 Polycarbonate Casing</div>
        <div class="tier-feature-item">M12 Industrial Connectors</div>
      `;
    }
    if (featuresPrem) {
      featuresPrem.innerHTML = `
        <div class="tier-feature-item">Custom Multi-Layer PCB Layout</div>
        <div class="tier-feature-item">Military-Grade Connectors</div>
        <div class="tier-feature-item">Extreme Temperature Li-ion cells</div>
        <div class="tier-feature-item">Digital Local Flow Sensing</div>
      `;
    }
  } else {
    // Sensor Tower Context
    if (cardBudgetText) cardBudgetText.textContent = "Downscaled sensor tower utilizing low-cost capacitive probes and standard PVC poles.";
    if (cardRecText) cardRecText.textContent = "Rigid GI Pipe tower utilizing 3 industrial RS485 soil moisture sensors, digital temp probe and IP67 casing.";
    if (cardPremText) cardPremText.textContent = "Double shielded, heavy-duty industrial tower utilizing high-end multi-parameter probes and steel conduits.";

    if (featuresBudget) {
      featuresBudget.innerHTML = `
        <div class="tier-feature-item">Capacitive Moisture Sensors (x3)</div>
        <div class="tier-feature-item">Waterproof NTC Temp Probe</div>
        <div class="tier-feature-item">CAT6 Outdoor Communication Line</div>
        <div class="tier-feature-item">IP65 ABS Junction Box</div>
        <div class="tier-feature-item">PVC Pipe Mounting Pole</div>
      `;
    }
    if (featuresRec) {
      featuresRec.innerHTML = `
        <div class="tier-feature-item">Industrial RS485 Moisture Probes (3x)</div>
        <div class="tier-feature-item">DS18B20 1-Wire Temperature Sensor</div>
        <div class="tier-feature-item">Shielded Twisted Pair RS485 Cable</div>
        <div class="tier-feature-item">UV-Resistant Flexible Conduit</div>
        <div class="tier-feature-item">IP67 Polycarbonate Junction Box</div>
        <div class="tier-feature-item">M12 Waterproof Connectors</div>
      `;
    }
    if (featuresPrem) {
      featuresPrem.innerHTML = `
        <div class="tier-feature-item">4-in-1 Modbus Sensors (Moisture/pH/EC)</div>
        <div class="tier-feature-item">High-End Double Shielded RS485 Line</div>
        <div class="tier-feature-item">Branded Fibox Junction Enclosure</div>
        <div class="tier-feature-item">Steel-Wire Core Corrugated Conduits</div>
      `;
    }
  }
}

// Switches the interactive SVG mockup layout display depending on active controller context
function updateSVGLayout() {
  const svgViewer = document.querySelector('.diagram-viewer');
  if (!svgViewer) return;

  if (currentController === "central") {
    svgViewer.innerHTML = `
      <svg class="diagram-interactive-svg" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="30" width="700" height="440" rx="20" fill="rgba(11, 15, 25, 0.6)" stroke="var(--border-color)" stroke-width="4" stroke-dasharray="10 5" />
        <text x="70" y="60" fill="var(--text-muted)" font-size="14" font-weight="700" letter-spacing="1">IP67 POLYCARBONATE ENCLOSURE</text>

        <g class="svg-interactive-part" data-part="rpi">
          <rect x="100" y="100" width="220" height="160" rx="12" fill="rgba(138, 43, 226, 0.05)" stroke="var(--processor)" stroke-width="2" />
          <text x="120" y="140" fill="var(--text-main)" font-size="16" font-weight="700">Raspberry Pi 5</text>
          <text x="120" y="160" fill="var(--text-muted)" font-size="12">Main Brain (4 GB RAM)</text>
          <rect x="230" y="115" width="70" height="50" rx="4" fill="rgba(138, 43, 226, 0.2)" stroke="var(--processor)" stroke-width="1" />
          <text x="242" y="144" fill="#fff" font-size="10" font-weight="bold">Cooler</text>
        </g>

        <g class="svg-interactive-part" data-part="ssd">
          <rect x="360" y="100" width="180" height="100" rx="12" fill="rgba(245, 158, 11, 0.05)" stroke="var(--storage)" stroke-width="2" />
          <text x="380" y="140" fill="var(--text-main)" font-size="16" font-weight="700">64 GB SSD</text>
          <text x="380" y="160" fill="var(--text-muted)" font-size="12">Local Storage (SATA)</text>
        </g>

        <g class="svg-interactive-part" data-part="quectel">
          <rect x="580" y="100" width="130" height="160" rx="12" fill="rgba(59, 130, 246, 0.05)" stroke="var(--communication)" stroke-width="2" />
          <text x="595" y="140" fill="var(--text-main)" font-size="14" font-weight="700">Quectel 4G</text>
          <text x="595" y="160" fill="var(--text-muted)" font-size="11">LTE Cat-1 Mod</text>
          <circle cx="645" cy="210" r="15" fill="rgba(59, 130, 246, 0.2)" />
          <text x="637" y="214" fill="#fff" font-size="12" font-weight="bold">4G</text>
        </g>

        <g class="svg-interactive-part" data-part="lora">
          <rect x="100" y="300" width="160" height="120" rx="12" fill="rgba(59, 130, 246, 0.05)" stroke="var(--communication)" stroke-width="2" />
          <text x="115" y="340" fill="var(--text-main)" font-size="14" font-weight="700">LoRa SX1262</text>
          <text x="115" y="360" fill="var(--text-muted)" font-size="11">Sub-GHz Network</text>
        </g>

        <g class="svg-interactive-part" data-part="ups">
          <rect x="300" y="300" width="220" height="120" rx="12" fill="rgba(239, 68, 68, 0.05)" stroke="var(--power)" stroke-width="2" />
          <text x="320" y="340" fill="var(--text-main)" font-size="15" font-weight="700">UPS HAT (D)</text>
          <text x="320" y="360" fill="var(--text-muted)" font-size="11">18650 Battery Backup</text>
        </g>

        <g class="svg-interactive-part" data-part="buck">
          <rect x="560" y="300" width="150" height="120" rx="12" fill="rgba(239, 68, 68, 0.05)" stroke="var(--power)" stroke-width="2" />
          <text x="575" y="340" fill="var(--text-main)" font-size="14" font-weight="700">Buck Reg</text>
          <text x="575" y="360" fill="var(--text-muted)" font-size="11">12V to 5V / 5A</text>
        </g>

        <line x1="320" y1="150" x2="360" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="5 3" />
        <line x1="210" y1="260" x2="210" y2="300" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="5 3" />
        <line x1="410" y1="200" x2="410" y2="300" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="5 3" />
      </svg>
    `;
  } else if (currentController === "valve") {
    svgViewer.innerHTML = `
      <svg class="diagram-interactive-svg" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="30" width="700" height="440" rx="20" fill="rgba(11, 15, 25, 0.6)" stroke="var(--border-color)" stroke-width="4" stroke-dasharray="10 5" />
        <text x="70" y="60" fill="var(--text-muted)" font-size="14" font-weight="700" letter-spacing="1">IP67 VALVE CONTROLLER NODE</text>

        <g class="svg-interactive-part" data-part="esp">
          <rect x="100" y="100" width="220" height="150" rx="12" fill="rgba(138, 43, 226, 0.05)" stroke="var(--processor)" stroke-width="2" />
          <text x="120" y="140" fill="var(--text-main)" font-size="16" font-weight="700">ESP32-S3 MCU</text>
          <text x="120" y="160" fill="var(--text-muted)" font-size="12">Main Microcontroller Board</text>
          <rect x="120" y="180" width="100" height="40" rx="4" fill="rgba(138, 43, 226, 0.2)" />
          <text x="135" y="205" fill="#fff" font-size="12" font-weight="bold">ESP-S3</text>
        </g>

        <g class="svg-interactive-part" data-part="solar">
          <rect x="360" y="100" width="180" height="150" rx="12" fill="rgba(245, 158, 11, 0.05)" stroke="var(--storage)" stroke-width="2" />
          <text x="380" y="140" fill="var(--text-main)" font-size="16" font-weight="700">Solar Charger</text>
          <text x="380" y="160" fill="var(--text-muted)" font-size="12">CN3791 MPPT Board</text>
        </g>

        <g class="svg-interactive-part" data-part="loraNode">
          <rect x="580" y="100" width="130" height="150" rx="12" fill="rgba(59, 130, 246, 0.05)" stroke="var(--communication)" stroke-width="2" />
          <text x="595" y="140" fill="var(--text-main)" font-size="14" font-weight="700">SX1262 LoRa</text>
          <text x="595" y="160" fill="var(--text-muted)" font-size="11">Wireless Link</text>
        </g>

        <g class="svg-interactive-part" data-part="modbus">
          <rect x="100" y="300" width="160" height="120" rx="12" fill="rgba(59, 130, 246, 0.05)" stroke="var(--communication)" stroke-width="2" />
          <text x="115" y="340" fill="var(--text-main)" font-size="14" font-weight="700">MAX3485</text>
          <text x="115" y="360" fill="var(--text-muted)" font-size="11">RS485 Telemetry</text>
        </g>

        <g class="svg-interactive-part" data-part="battery">
          <rect x="300" y="300" width="220" height="120" rx="12" fill="rgba(239, 68, 68, 0.05)" stroke="var(--power)" stroke-width="2" />
          <text x="320" y="340" fill="var(--text-main)" font-size="15" font-weight="700">18650 cells + BMS</text>
          <text x="320" y="360" fill="var(--text-muted)" font-size="11">2S Battery Pack Protection</text>
        </g>

        <g class="svg-interactive-part" data-part="mosfet">
          <rect x="560" y="300" width="150" height="120" rx="12" fill="rgba(239, 68, 68, 0.05)" stroke="var(--power)" stroke-width="2" />
          <text x="575" y="340" fill="var(--text-main)" font-size="14" font-weight="700">MOSFET Drive</text>
          <text x="575" y="360" fill="var(--text-muted)" font-size="11">IRLZ44N Valve Sw</text>
        </g>
      </svg>
    `;
  } else {
    // Sensor Tower layout
    svgViewer.innerHTML = `
      <svg class="diagram-interactive-svg" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Tower Pole outline -->
        <rect x="190" y="50" width="20" height="420" fill="rgba(255, 255, 255, 0.05)" stroke="var(--border-color)" stroke-width="2" />
        <text x="220" y="80" fill="var(--text-muted)" font-size="12" font-weight="700" letter-spacing="1">GI MOUNTING POLE</text>

        <!-- Junction Box -->
        <g class="svg-interactive-part" data-part="jbox">
          <rect x="120" y="120" width="160" height="140" rx="8" fill="rgba(245, 158, 11, 0.05)" stroke="var(--storage)" stroke-width="2" />
          <text x="140" y="160" fill="var(--text-main)" font-size="14" font-weight="700">Junction Box</text>
          <text x="140" y="180" fill="var(--text-muted)" font-size="10">IP67 Polycarbonate</text>
          <rect x="140" y="200" width="120" height="30" rx="4" fill="rgba(245, 158, 11, 0.2)" />
          <text x="155" y="220" fill="#fff" font-size="10" font-weight="bold">Surge protection</text>
        </g>

        <!-- Soil line -->
        <line x1="50" y1="360" x2="750" y2="360" stroke="#8B4513" stroke-width="8" stroke-dasharray="15 5" />
        <text x="70" y="390" fill="#8B4513" font-size="14" font-weight="700" letter-spacing="1">SOIL ROOT ZONE DEPTH (15-30CM)</text>

        <!-- Modbus Moisture Sensors -->
        <g class="svg-interactive-part" data-part="moistureSens">
          <rect x="360" y="380" width="100" height="90" rx="8" fill="rgba(16, 185, 129, 0.05)" stroke="var(--primary)" stroke-width="2" />
          <line x1="380" y1="440" x2="380" y2="460" stroke="var(--primary)" stroke-width="3" />
          <line x1="410" y1="440" x2="410" y2="460" stroke="var(--primary)" stroke-width="3" />
          <line x1="440" y1="440" x2="440" y2="460" stroke="var(--primary)" stroke-width="3" />
          <text x="370" y="410" fill="var(--text-main)" font-size="12" font-weight="700">RS485 Probe</text>
          <text x="375" y="425" fill="var(--text-muted)" font-size="9">Moisture 1 (Start)</text>
        </g>

        <g class="svg-interactive-part" data-part="moistureSens">
          <rect x="490" y="380" width="100" height="90" rx="8" fill="rgba(16, 185, 129, 0.05)" stroke="var(--primary)" stroke-width="2" />
          <line x1="510" y1="440" x2="510" y2="460" stroke="var(--primary)" stroke-width="3" />
          <line x1="540" y1="440" x2="540" y2="460" stroke="var(--primary)" stroke-width="3" />
          <line x1="570" y1="440" x2="570" y2="460" stroke="var(--primary)" stroke-width="3" />
          <text x="500" y="410" fill="var(--text-main)" font-size="12" font-weight="700">RS485 Probe</text>
          <text x="505" y="425" fill="var(--text-muted)" font-size="9">Moisture 2 (Center)</text>
        </g>

        <g class="svg-interactive-part" data-part="moistureSens">
          <rect x="620" y="380" width="100" height="90" rx="8" fill="rgba(16, 185, 129, 0.05)" stroke="var(--primary)" stroke-width="2" />
          <line x1="640" y1="440" x2="640" y2="460" stroke="var(--primary)" stroke-width="3" />
          <line x1="670" y1="440" x2="670" y2="460" stroke="var(--primary)" stroke-width="3" />
          <line x1="700" y1="440" x2="700" y2="460" stroke="var(--primary)" stroke-width="3" />
          <text x="630" y="410" fill="var(--text-main)" font-size="12" font-weight="700">RS485 Probe</text>
          <text x="635" y="425" fill="var(--text-muted)" font-size="9">Moisture 3 (End)</text>
        </g>

        <!-- Soil Temp Sensor -->
        <g class="svg-interactive-part" data-part="tempSens">
          <circle cx="540" cy="330" r="25" fill="rgba(138, 43, 226, 0.05)" stroke="var(--processor)" stroke-width="2" />
          <text x="528" y="334" fill="var(--text-main)" font-size="10" font-weight="700">Temp</text>
        </g>

        <!-- Connecting conduit line -->
        <path d="M 200 260 L 200 360" stroke="rgba(255,255,255,0.15)" stroke-width="12" stroke-linecap="round" />
        <text x="215" y="310" fill="var(--text-muted)" font-size="10">UV Corrugated Conduit</text>
      </svg>
    `;
  }

  animateSVGDiagram();
}

// Animate/Highlight parts of the Enclosure Diagram on hover
function animateSVGDiagram() {
  const parts = document.querySelectorAll('.svg-interactive-part');
  const detailsTitle = document.getElementById('diagram-part-title');
  const detailsText = document.getElementById('diagram-part-desc');
  const detailsPrice = document.getElementById('diagram-part-price');

  const centralDetails = {
    rpi: { title: "Raspberry Pi 5 CPU", desc: "Core computing platform running SQLite, FastAPI backend, and AI decisions.", price: "₹12,331" },
    quectel: { title: "4G LTE Cell Modem", desc: "EC200U cellular engine providing real-time cloud and telemetry sync.", price: "₹1,600" },
    lora: { title: "SX1262 LoRa module", desc: "Communicates long-range (2-5km) with up to 30 valve controllers.", price: "₹514" },
    ssd: { title: "Industrial SATA SSD", desc: "64GB rugged drive avoiding read/write corruption of microSDs.", price: "₹1,500" },
    ups: { title: "Waveshare UPS HAT", desc: "18650-powered continuous backup for graceful, safe shutdown.", price: "₹1,500" },
    buck: { title: "DC-DC Buck Converter", desc: "Synchronous 12V to 5V power drop for steady board feeds.", price: "₹400" }
  };

  const valveDetails = {
    esp: { title: "ESP32-S3 Processor", desc: "High-performance processing chip running zone schedules and managing sensor polling.", price: "₹290" },
    solar: { title: "Solar Charger Board", desc: "CN3791 solar battery management controller with MPPT technology.", price: "₹244" },
    loraNode: { title: "SX1262 LoRa module", desc: "Consumes low power while maintaining long-range data lines with Central station.", price: "₹514" },
    modbus: { title: "MAX3485 Module", desc: "3.3V RS485 data transceiver connecting the 3 industrial soil moisture sensors.", price: "₹100" },
    battery: { title: "Battery & BMS Pack", desc: "2x 3400mAh 18650 Li-ion batteries protected by a 2S BMS board.", price: "₹1,000" },
    mosfet: { title: "MOSFET Switch Driver", desc: "IRLZ44N gate switches standard and latching solenoid valves with zero idle power draw.", price: "₹80" }
  };

  const towerDetails = {
    jbox: { title: "Weatherproof Junction Box", desc: "IP67 Polycarbonate box housing splice terminals, waterproof glands, and TVS clamping lines.", price: "₹300" },
    moistureSens: { title: "Industrial Moisture Sensors", desc: "3x RS485 Modbus RTU corrosion-resistant probes positioned across the zone profile.", price: "₹4,500" },
    tempSens: { title: "DS18B20 Temp Probe", desc: "1-Wire waterproof digital probe tracking soil temperature lines at active root levels.", price: "₹150" }
  };

  const activeDetails = (currentController === "central") ? centralDetails : (currentController === "valve" ? valveDetails : towerDetails);

  parts.forEach(part => {
    part.addEventListener('mouseenter', () => {
      const code = part.dataset.part;
      const data = activeDetails[code];
      if (data) {
        parts.forEach(p => p.setAttribute('stroke-width', '2'));
        part.setAttribute('stroke-width', '4');
        part.setAttribute('stroke', '#10B981');

        if (detailsTitle) detailsTitle.textContent = data.title;
        if (detailsText) detailsText.textContent = data.desc;
        if (detailsPrice) detailsPrice.textContent = `Approximate Cost: ${data.price}`;
      }
    });

    part.addEventListener('mouseleave', () => {
      part.setAttribute('stroke-width', '2');
      part.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
    });
  });
}

// Initialize Website Script
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  updateCostSummaries();
  renderBOMTable();
  setupFilters();

  const nextBtn = document.getElementById('next-slide-btn');
  const prevBtn = document.getElementById('prev-slide-btn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
    });
  }

  // Start with Hero slide active
  goToSlide(0);
});
