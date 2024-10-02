import car1 from "./img/Tesla.png"
import car2 from "./img/Ford.png"
import car3 from "./img/Honda.png"
import car4 from "./img/Chevrolet.png"
import car5 from "./img/Kia.png"
import car6 from "./img/Mini Cooper.png"
import xe01 from './img/xe01.png'
import xe02 from "./img/xe02.png"
import xe03 from "./img/xe03.png"
import xe04 from "./img/xe04.png"
const Data = [
    {
        id: 1,
        image:car1,
        name:"Tesla Model 3 Standard Range Plus",
        price:"$57,148",
        place:"Florida,USA",
        year:"2020",
        style:"Rear-wheel Drive",
        energy:"Electric",
        seat:"5",
        brand: "Tesla",
        state:"New",
        transmission:"Automatic",
        bodyType:"Sedan",
        color:"Red",
        mileage:"340 km",
        power:"283 hp (211kW)",
        length:"4694 mm",
        width:"1849 mm",
        height:"1443 mm",
        cargoVolume:"542 L",
        features:["Autopilot","Summon","Autopark","Auto Lane Change","15 inch Touchscreen Display","360 Camera","12 Ultrasonic Sensor"],
        purchases: 126234,
        likes: 39458,
        rate:5.0
    },
    {
        id: 2,
        image:car2,
        name:"Ford F-250 Super Duty",
        price:"$82,089 ",
        place:"Milan,Italy",
        year:"2021",
        style:"Four-wheel Drive",
        energy:"Diesel",
        seat:"5",
        brand: "Ford",
        state:"New",
        transmission:"Manual",
        bodyType:"Pickup truck",
        color:"Black",
        mileage:"634925 km",
        power:"283 hp (211 kW)",
        length:"4276 mm",
        width:"2031 mm",
        height:"2042 mm",
        cargoVolume:"1784 L",
        features: [
            "Pro Trailer Backup Assist",
            "360-Degree Camera System",
            "Blind Spot Information System (BLIS)",
            "Adaptive Cruise Control",
            "Pre-Collision Assist with Automatic Emergency Braking",
            "SYNC 4 Infotainment System with 12-Inch Touchscreen",
            "Wireless Apple CarPlay and Android Auto",
            "Heated and Ventilated Front Seats",
            "B&O Sound System",
            "Trailer Sway Control",
            "Off-Road Package with Skid Plates",
            "Advanced Security Pack with SecuriLock"
        ],
        purchases: 54800, 
        likes: 40686,
        rate:3.6
    },
    {
        id: 3,
        image:car3,
        name:"Honda Pilot Touring 7-Passenger",
        price:"$43,735",
        place:"Caracas,Venezuela",
        year:"2021",
        style:"All-wheel Drive",
        energy:"Gasoline",
        seat:"7",
        brand: "Honda",
        state:"New",
        transmission:"Automatic",
        bodyType:"SUV",
        color:"Blue",
        mileage:"506328 km",
        power:"300 hp (223,8 kW)",
        length:"5181 mm",
        width:"2020 mm",
        height:"1859 mm",
        cargoVolume:"524 L",
        features: [
            "Honda Sensing Suite",
            "Blind Spot Information System",
            "Rear Entertainment System with 10.2-Inch Screen",
            "Hands-Free Power Tailgate",
            "Panoramic Roof",
            "Heated Front and Rear Seats",
            "Leather-Trimmed Seats",
            "Wireless Phone Charger",
            "Premium Audio System with 10 Speakers",
            "Apple CarPlay and Android Auto Integration",
            "Satellite-Linked Navigation System",
            "Multi-Angle Rearview Camera",
            "Front and Rear Parking Sensors"
        ],
        purchases: 59726, 
        likes: 9994,
        rate:5.0
    },
    {
        id: 4,
        image:car4,
        name:"Chervrolet Equinox LS ",
        price:"$17,978",
        place:"Madrid,Spain",
        year:"2017",
        style:"Front-wheel Drive",
        energy:"Gasoline",
        seat:"5",
        brand: "Chevrolet",
        state:"New",
        transmission:"Automatic",
        bodyType:"SUV",
        color:"Grey",
        mileage:"831601 km",
        power:"252 hp (188 kW)",
        length:"4653 mm",
        width:"1902 mm",
        height:"1666 mm",
        cargoVolume:"846 L",
        features: [
            "6-Speed Automatic Transmission",
            "Chevrolet Infotainment 3 System with 7-Inch Touchscreen",
            "Apple CarPlay and Android Auto Compatibility",
            "Forward Collision Alert",
            "Automatic Emergency Braking",
            "Lane Keep Assist with Lane Departure Warning",
            "Front Pedestrian Braking",
            "Teen Driver Technology",
            "Rear Vision Camera",
            "LED Daytime Running Lamps",
            "4G LTE Wi-Fi Hotspot Capable",
            "Chevy Safety Assist Package"
        ],
        purchases: 130756, 
        likes: 62124,
        rate:2.2
    },
    {
        id: 5,
        image:car5,
        name:"Kia Sorento S",
        price:"$27,791",
        place:"BangKok,Thailand",
        year:"2021",
        style:"Front-wheel Drive",
        energy:"Gasoline",
        seat:"7",
        brand: "Kia",
        state:"New",
        transmission:"Automatic",
        bodyType:"SUV",
        color:"Green",
        mileage:"581339 km",
        power:"198 hp (147,7 kW)",
        length:"4810 mm",
        width:"1900 mm",
        height:"1700 mm",
        cargoVolume:"357 L",
        features: [
            "18-Inch Alloy Wheels",
            "Wireless Apple CarPlay and Android Auto",
            "8-Inch Touchscreen Display",
            "Blind-Spot Collision-Avoidance Assist",
            "Rear Cross-Traffic Collision-Avoidance Assist",
            "Dual-Zone Automatic Climate Control",
            "Heated Front Seats",
            "Forward Collision-Avoidance Assist",
            "Lane Keeping Assist",
            "Safe Exit Assist"
        ],
        purchases: 112729, 
        likes: 79813,
        rate:1.7
    },
    {
        id: 6,
        image:car6,
        name:"Mini Clubman Cooper",
        price:"$35,850",
        place:"Jakarta,Indonesia",
        year:"2022",
        style:"Front-wheel Drive",
        energy:"Gasoline",
        seat:"5",
        brand: "Mini",
        state:"New",
        transmission:"Automatic",
        bodyType:"Sedan hatchback",
        color:"Blue",
        mileage:"781136 km",
        power:"192 hp (143,2 kW)",
        length:"4266 mm",
        width:"1800 mm",
        height:"1441 mm",
        cargoVolume:"360 L",
        features: [
            "6.5-Inch Touchscreen Display",
            "Apple CarPlay Compatibility",
            "Rear Parking Sensors",
            "Dual-Pane Panoramic Sunroof",
            "Leatherette Upholstery",
            "Heated Front Seats",
            "Split Rear Doors",
            "Rain-Sensing Windshield Wipers",
            "Dynamic Stability Control",
            "Mini Driving Modes",
        ],
        purchases: 16338, 
        likes: 8298,
        rate:2.8
    },
    {
        id: 7,
        image:xe01,
        name:"Jeep Wrangler Unlimited Islander",
        price:"$50,370",
        place:"San Antonio,USA",
        year:"2021",
        style:"Four-wheel Drive",
        energy:"Hybrid",
        seat:"5",
        brand:'Jeep',
        state:"Used",
        transmission:"Manual",
        bodyType:"SUV",
        color:"White",
        mileage:"908207 km",
        power:"270 hp (201,4 kW)",
        length:"4810 mm",
        width:"1894 mm",
        height:"1828 mm",
        cargoVolume:"898 L",
        features: [
            "4-Wheel Drive with Command-Trac 4x4 System",
            "Islander Hood Decal and Special Edition Badging",
            "Uconnect 4 with 7-Inch Touchscreen Display",
            "Apple CarPlay and Android Auto Integration",
            "Removable Sunrider Soft Top",
            "Heated Front Seats",
            "Air Conditioning with Automatic Temperature Control",
            "Seashell-Embossed Cloth Seats",
            "All-Weather Floor Mats",
            "ParkView Rear Back-Up Camera",
            "Skid Plates for Fuel Tank and Transfer Case"
        ],
        purchases: 8572, 
        likes: 5656,
        rate:4.9
    },
    {
        id: 8,
        image:xe02,
        name:"Audi e-tron Premium",
        price:"$72,655 ",
        place:"Suwon,Korea",
        year:"2021",
        style:"All-wheel Drive",
        energy:"Electric",
        seat:"5",
        brand:"Audi",
        state:"Used",
        transmission:"Automatic",
        bodyType:"SUV",
        color:"Blue",
        mileage:"726216 km",
        power:"408 hp (300 kW)",
        length:"4091 mm",
        width:"1935 mm",
        height:"1616 mm",
        cargoVolume:"660 L",
        features: [
            "Quattro All-Wheel Drive",
            "5.5 Seconds 0-60 mph Acceleration",
            "Audi Virtual Cockpit with 12.3-Inch Digital Display",
            "MMI Touch Response System with 10.1-Inch Display",
            "Apple CarPlay and Android Auto Integration",
            "Bang & Olufsen 3D Premium Sound System",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Audi Pre Sense Basic and Front",
            "Power Tailgate",
            "Panoramic Glass Sunroof",
            "Heated and Ventilated Front Seats",
            "Leather Upholstery"
        ],
        purchases: 64340, 
        likes: 15099,
        rate:3.7
    },
    {
        id: 9,
        image:xe03,
        name:"Land Rover Range Rover Velar R-Dynamic S",
        price:"$$75,790",
        place:"Jeddah, Saudi Arabia",
        year:"2021",
        style:"All-wheel Drive",
        energy:"Gasoline",
        seat:"5",
        brand:"Land Rover",
        state:"Used",
        transmission:"Automatic",
        bodyType:"SUV",
        color:"White",
        mileage:"362565 km",
        power:"249 hp (185,8 kW)",
        length:"4797 mm",
        width:"2147 mm",
        height:"1683 mm",
        cargoVolume:"748 L",
        features: [
            "All-Wheel Drive",
            "Adaptive Cruise Control with Stop & Go",
            "LED Headlights with Signature DRL",
            "Meridian Sound System",
            "10-Inch Touch Pro Duo Infotainment System",
            "Apple CarPlay and Android Auto Integration",
            "Navigation Pro with 3D Mapping",
            "Heated Front and Rear Seats",
            "Leather Upholstery",
            "Dual-Zone Climate Control",
            "Rear Traffic Monitor",
            "Park Assist with Front and Rear Sensors"
        ],
        purchases: 132839, 
        likes: 26059,
        rate:2.0
},
    {
        id: 10,
        image:xe04,
        name:"Toyota Mirai",
        price:"$71,415",
        place:"Kobe, Japan",
        year:"2021",
        style:"Rear-wheel Drive",
        energy:"Electric",
        seat:"5",
        brand:"Toyota",
        state:"Used",
        transmission:"Automatic",
        bodyType:"Sedan",
        color:"Blue",
        mileage:"769100 km",
        power:"182 hp (135,8 kW)",
        length:"4975 mm",
        width:"1885 mm",
        height:"1470 mm",
        cargoVolume:"361 L",
        features: [
            "Hydrogen Fuel Cell Powertrain",
            "Advanced Safety Package with Toyota Safety Sense",
            "Blind Spot Monitor with Rear Cross-Traffic Alert",
            "10.1-Inch Touchscreen Display",
            "Apple CarPlay and Android Auto Integration",
            "Navigation System",
            "Leather-Trimmed Seats",
            "Heated Front Seats",
            "Dual-Zone Automatic Climate Control",
            "Adaptive Cruise Control",
            "Lane Departure Warning with Lane Tracing Assist",
        ],
        purchases: 122693, 
        likes: 87408,
        rate:4.9
    },
] 
export default Data  