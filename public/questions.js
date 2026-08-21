const questionSets = {
  // -------------------------------------------------------------
  // หมวดที่ 0: สำนักงานสลากกินแบ่งรัฐบาล (Glo) - 10 ข้อ
  // -------------------------------------------------------------
  "glo_quiz": {
    name: "🎰 รอบรู้เรื่องสลากกินแบ่งรัฐบาล (GLO)",
    questions: [
      {
        id: 1,
        type: "GLO Community",
        question: "ข้อที่ 1: ปัจจุบันโครงการสลากสรรค์สร้างเพื่อชุมชน มีจำนวนชุมชนที่ร่วมโครงการทั้งสิ้น กี่ชุมชน?",
        hint: null,
        optionType: "text",
        options: ["67 ชุมชน", "70 ชุมชน", "77 ชุมชน", "80 ชุมชน"],
        answer: 2,
        timeLimit: 15
      },
      {
        id: 2,
        type: "GLO Mascot",
        question: "ข้อที่ 2: ใครที่ไม่ได้เป็นสมาชิกครอบครัว G-LO Man & Family ของ GLO?",
        hint: null,
        optionType: "text",
        options: ["ดีจิต", "ดีใจ", "น้ำใจ", "โปร่งใส"],
        answer: 1,
        timeLimit: 15
      },
      {
        id: 3,
        type: "GLO History & Anniversary",
        question: "ข้อที่ 3: ในปี 2570 สำนักงานสลากกินแบ่งรัฐบาลจะมีอายุครบรอบกี่ปี?",
        hint: null,
        optionType: "text",
        options: ["87 ปี", "88 ปี", "89 ปี", "90 ปี"],
        answer: 1,
        timeLimit: 15
      },
      {
        id: 4,
        type: "CSR & Events",
        question: "ข้อที่ 4: โครงการ GLO CUP มีสโลแกนหลักว่าอย่างไร?",
        hint: null,
        optionType: "text",
        options: [
          "ส่งต่อโอกาส สร้างอนาคตเด็กไทย",
          "ให้โอกาส ส่งต่ออนาคต ที่เป็นจริง",
          "GLO CUP โอกาสที่ยั่งยืนเพื่อเด็กไทย",
          "โอกาสที่เกิดขึ้นได้จริง"
        ],
        answer: 3,
        timeLimit: 15
      },
      {
        id: 5,
        type: "Responsible Gaming Standard",
        question: "ข้อที่ 5: ปัจจุบัน สำนักงานได้รับการรับรอง RG ในระดับที่เท่าใด?",
        hint: null,
        optionType: "text",
        options: ["ระดับ 2", "ระดับ 3", "ระดับ 4", "ระดับ 5"],
        answer: 0,
        timeLimit: 15
      },
      {
        id: 6,
        type: "N3 Lottery Rules",
        question: "ข้อที่ 6: หากซื้อสลาก N3 ท่านจะมีโอกาสถูกรางวัลใดบ้าง?",
        hint: null,
        optionType: "text",
        options: [
          "รางวัลสามตัวตรง",
          "รางวัลสองตัวตรง",
          "รางวัลสามสลับหลัก",
          "รางวัลลัคกี้"
        ],
        answer: 2,
        timeLimit: 15
      },
      {
        id: 7,
        type: "GLO Service",
        question: "ข้อที่ 7: ปัจจุบันบริการขึ้นเงินรางวัลแบบ Drive-Thru Service มีจำนวนกี่ช่องบริการ?",
        hint: null,
        optionType: "text",
        options: ["3 ช่องบริการ", "4 ช่องบริการ", "5 ช่องบริการ", "6 ช่องบริการ"],
        answer: 2,
        timeLimit: 15
      },
      {
        id: 8,
        type: "GLO Help Line",
        question: "ข้อที่ 8: GLO CALL CENTER สำหรับให้คำปรึกษาผู้มีความเสี่ยงเสพติดการซื้อสลาก คือหมายเลขใด?",
        hint: null,
        optionType: "text",
        options: [
          "0 2528 9999 กด 9",
          "0 2258 9999 กด 9",
          "0 2999 9999 กด 0",
          "0 2529 8888 กด 9"
        ],
        answer: 0,
        timeLimit: 15
      },
      {
        id: 9,
        type: "Emergency & Laws",
        question: "ข้อที่ 9: หากท่านทำสลากกินแบ่งรัฐบาลที่ถูกรางวัลที่ 1 หาย ควรดำเนินการอย่างไรเป็นอันดับแรก?",
        hint: null,
        optionType: "text",
        options: ["ร้องกรี๊ด", "ไปออกรายการโหนกระแส", "แจ้งอายัดโดยทันที", "ตั้งสติแล้วตื่น"],
        answer: 2,
        timeLimit: 15
      },
      {
        id: 10,
        type: "Math & Prize Calculation",
        question: "ข้อที่ 10: หากท่านถูกรางวัลที่ 1 จำนวน 3 ใบ, รางวัลที่ 2 จำนวน 6 ใบ และเลขท้าย 3 ตัว จำนวน 2 ใบ ท่านจะได้รับเงินรางวัลรวมเท่าใด (ก่อนหักอากร)?",
        hint: null,
        optionType: "text",
        options: [
          "18,440,000 บาท",
          "18,600,000 บาท",
          "19,204,000 บาท",
          "19,208,000 บาท"
        ],
        answer: 3,
        timeLimit: 15
      }
    ]
  },
  // -------------------------------------------------------------
  // หมวดที่ 1: แบรนด์ดังระดับโลก (Global Brands) - 10 ข้อ
  // -------------------------------------------------------------
  "global_brands": {
    name: "🏆 แบรนด์ดังระดับโลก (Global Brands)",
    questions: [
     {
        id: 1,
        type: "Blurred Logo",
        question: "ข้อที่ 1: โลโก้สปอร์ตแวร์ที่ถูกเบลอนี้คือแบรนด์ใด?",
        hint: "https://placehold.co/400x250/000000/FFFFFF?text=Blurred+Logo",
        optionType: "text",
        options: ["Adidas", "Nike", "Puma", "Under Armour"],
        answer: 1,
        timeLimit: 15
      },
      {
        id: 2,
        type: "Logo Visual Test",
        question: "ข้อที่ 2: ภาพใดคือโลโก้ของแบรนด์ Apple ที่ถูกต้อง?",
        hint: null,
        optionType: "image", // ตัวเลือกแบบรูปภาพ
        options: [
          "https://placehold.co/200x200/1e293b/38bdf8?text=Apple+A",
          "https://placehold.co/200x200/1e293b/f59e0b?text=Apple+B",
          "https://placehold.co/200x200/1e293b/ef4444?text=Apple+C",
          "https://placehold.co/200x200/1e293b/10b981?text=Apple+D"
        ],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 3,
        type: "Slogan Match",
        question: "ข้อที่ 3: สโลแกน 'คิดจะพัก คิดถึง...' เป็นของแบรนด์ใด?",
        hint: null,
        optionType: "text",
        options: ["Snickers", "M&M's", "KitKat", "Oreo"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 4,
        type: "Origin Country",
        question: "ข้อที่ 4: แบรนด์เฟอร์นิเจอร์ระดับโลกอย่าง 'IKEA' มีต้นกำเนิดจากประเทศใด?",
        hint: "https://placehold.co/600x350/0051BA/FFDA1A?text=IKEA+Sweden",
        options: ["เดนมาร์ก", "นอร์เวย์", "สวีเดน", "ฟินแลนด์"],
        answer: 2,
        timeLimit: 15
      },
      {
        id: 5,
        type: "Mascot Check",
        question: "ข้อที่ 5: มาสคอตหมีขั้วโลกสีขาว (Polar Bear) มักปรากฏในโฆษณาของแบรนด์ใด?",
        hint: "https://placehold.co/600x350/F40009/FFFFFF?text=Polar+Bear+Ad",
        options: ["Coca-Cola", "Pepsi", "Sprite", "Fanta"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 6,
        type: "Slogan Match",
        question: "ข้อที่ 6: สโลแกน 'Think Different' เป็นแคมเปญในตำนานของบริษัทใด?",
        hint: "https://placehold.co/600x350/222222/FFFFFF?text=Think+Different",
        options: ["Microsoft", "IBM", "Apple", "Google"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 7,
        type: "Luxury Brand",
        question: "ข้อที่ 7: โลโก้อักษร C สองตัวไขว้ซ้อนกัน คือแบรนด์หรูระดับโลกใด?",
        hint: "https://placehold.co/600x350/111111/FFFFFF?text=Double+C+Monogram",
        options: ["Gucci", "Chanel", "Coach", "Cartier"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Car Brand",
        question: "ข้อที่ 8: โลโก้ตราดาว 3 แฉกอยู่ในวงกลม เป็นสัญลักษณ์ของรถยนต์ยี่ห้อใด?",
        hint: "https://placehold.co/600x350/000000/C0C0C0?text=Three-Pointed+Star",
        options: ["BMW", "Audi", "Mercedes-Benz", "Porsche"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 9,
        type: "Slogan Match",
        question: "ข้อที่ 9: 'Because You're Worth It' เป็นสโลแกนของแบรนด์ความงามใด?",
        hint: "https://placehold.co/600x350/111111/D4AF37?text=Because+You%27re+Worth+It",
        options: ["Maybelline", "L'Oréal", "Nivea", "MAC"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 10,
        type: "E-Commerce",
        question: "ข้อที่ 10: โลโก้ที่มีลูกศรสีส้มชี้จากตัว A ถึง Z หมายถึงแบรนด์ใด?",
        hint: "https://placehold.co/600x350/232F3E/FF9900?text=Smile+Arrow+A+to+Z",
        options: ["eBay", "Alibaba", "Amazon", "Shopee"],
        answer: 2,
        timeLimit: 12
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 2: เทคโนโลยี & ไอที (Tech Brands) - 10 ข้อ
  // -------------------------------------------------------------
  "tech_brands": {
    name: "💻 เทคโนโลยี & ไอที (Tech Brands)",
    questions: [
      {
        id: 1,
        type: "Visual Identifier",
        question: "ข้อที่ 1: สัญลักษณ์รูปแอปเปิ้ลถูกแหว่งด้านขวา คือบริษัทใด?",
        hint: "https://placehold.co/600x350/1D1D1F/FFFFFF?text=Bitten+Apple+Icon",
        options: ["Apple", "Android", "Microsoft", "Intel"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Sound Check",
        question: "ข้อที่ 2: เสียง Sound Logo 'ตื่อดึง!' อันเป็นเอกลักษณ์ คือบริการสตรีมมิ่งใด?",
        hint: "https://placehold.co/600x350/141414/E50914?text=TUDUM+Sound+Logo",
        options: ["Disney+", "Netflix", "YouTube", "HBO Max"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 3,
        type: "OS Mascot",
        question: "ข้อที่ 3: หุ่นยนต์สีเขียวชื่อ 'Bugdroid' เป็นมาสคอตของระบบปฏิบัติการใด?",
        hint: "https://placehold.co/600x350/000000/3DDC84?text=Green+Robot+Mascot",
        options: ["iOS", "Windows", "Android", "Linux"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Social Media",
        question: "ข้อที่ 4: โลโก้รูปตัว 'in' สีขาวบนพื้นหลังสี่เหลี่ยมสีฟ้า คือโซเชียลมีเดียสายการทำงานใด?",
        hint: "https://placehold.co/600x350/0A66C2/FFFFFF?text=in+Network",
        options: ["LinkedIn", "Twitter", "Facebook", "Telegram"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 5,
        type: "Gaming Brand",
        question: "ข้อที่ 5: แบรนด์เกมที่มีคอนโซลชื่อ 'PlayStation' อยู่ภายใต้บริษัทใด?",
        hint: "https://placehold.co/600x350/003791/FFFFFF?text=PS+Console+Brand",
        options: ["Nintendo", "Microsoft", "Sony", "Sega"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 6,
        type: "Chipmaker",
        question: "ข้อที่ 6: บริษัทผู้ผลิตชิปการ์ดจอซีรีส์ 'GeForce' คือบริษัทใด?",
        hint: "https://placehold.co/600x350/000000/76B900?text=GeForce+GPU",
        options: ["AMD", "Intel", "NVIDIA", "Qualcomm"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 7,
        type: "Search Engine",
        question: "ข้อที่ 7: โลโก้ตัว G 4 สี (น้ำเงิน, แดง, เหลือง, เขียว) คือบริการใด?",
        hint: "https://placehold.co/600x350/FFFFFF/4285F4?text=G+4-Color+Logo",
        options: ["Google", "Bing", "Yahoo", "Baidu"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 8,
        type: "App Concept",
        question: "ข้อที่ 8: แอปพลิเคชันส่งข้อความที่มีไอคอนรูปนกกระดาษสีขาวบนพื้นสีฟ้าคือ?",
        hint: "https://placehold.co/600x350/26A5E4/FFFFFF?text=Paper+Plane+Icon",
        options: ["LINE", "Messenger", "Telegram", "WhatsApp"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 9,
        type: "Streaming Music",
        question: "ข้อที่ 9: ไอคอนวงกลมสีเขียวพร้อมเส้นคลื่นเสียงสีดำ 3 เส้น คือแบรนด์ฟังเพลงใด?",
        hint: "https://placehold.co/600x350/1DB954/000000?text=Sound+Waves+Circle",
        options: ["Apple Music", "Spotify", "JOOX", "Tidal"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Camera Brand",
        question: "ข้อที่ 10: สัญลักษณ์จุดสีแดงพร้อมตัวอักษรลายเซ็นสีขาว คือแบรนด์กล้องหรูใด?",
        hint: "https://placehold.co/600x350/111111/RED?text=Red+Dot+Logo",
        options: ["Canon", "Nikon", "Leica", "Fujifilm"],
        answer: 2,
        timeLimit: 12
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 3: อาหาร & เครื่องดื่ม (Food & Beverage) - 10 ข้อ
  // -------------------------------------------------------------
  "food_brands": {
    name: "🍔 อาหาร & เครื่องดื่ม (Food & Beverage)",
    questions: [
      {
        id: 1,
        type: "Mascot",
        question: "ข้อที่ 1: มาสคอตผู้พันคุณลุงใส่แว่นหนวดขาว เป็นสัญลักษณ์ของแบรนด์ใด?",
        hint: "https://placehold.co/600x350/A3080C/FFFFFF?text=Colonel+Sanders",
        options: ["Texas Chicken", "Chester's", "KFC", "McDonald's"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Slogan Match",
        question: "ข้อที่ 2: สโลแกน 'คิดจะพัก คิดถึง...' ควรเติมคำว่าอะไร?",
        hint: "https://placehold.co/600x350/D1242A/FFFFFF?text=Have+a+Break...",
        options: ["Snickers", "M&M's", "KitKat", "Oreo"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Coffee Chain",
        question: "ข้อที่ 3: โลโก้รูปเงือกสาวสองหางสีเขียว (Siren) คือร้านกาแฟแบรนด์ใด?",
        hint: "https://placehold.co/600x350/00704A/FFFFFF?text=Twin-Tailed+Siren",
        options: ["Amazon Coffee", "Starbucks", "True Coffee", "Inthanin"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Snack Concept",
        question: "ข้อที่ 4: ขนมมันฝรั่งทอดกรอบบรรจุกระป๋องทรงกระบอกที่มีมาสคอตลุงหนวดโค้งคือ?",
        hint: "https://placehold.co/600x350/E31837/FFFFFF?text=Cylinder+Can+Chips",
        options: ["Lay's", "Pringles", "Tasto", "Roller Coaster"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 5,
        type: "Pizza Chain",
        question: "ข้อที่ 5: แบรนด์พิซซ่าที่มีโลโก้รูปตัวหมากรุกโดมิโนสีแดง-น้ำเงิน คือ?",
        hint: "https://placehold.co/600x350/006491/E31837?text=Domino+Tile+Logo",
        options: ["The Pizza Company", "Pizza Hut", "Domino's Pizza", "Pizza Mania"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 6,
        type: "Slogan Match",
        question: "ข้อที่ 6: 'ละลายในปาก ไม่ละลายในมือ' เป็นคำโปรยของขนมชนิดใด?",
        hint: "https://placehold.co/600x350/311000/FFFFFF?text=Melts+in+Your+Mouth",
        options: ["M&M's", "Hershey's", "Cadbury", "Toblerone"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 7,
        type: "Soft Drink",
        question: "ข้อที่ 7: น้ำอัดลมที่มีโลโก้สีฟ้า-ส้ม-ขาว เป็นคู่แข่งคนสำคัญของ Coca-Cola คือ?",
        hint: "https://placehold.co/600x350/0051A5/C41230?text=Blue+Red+Globe",
        options: ["Est Cola", "Pepsi", "Big Cola", "Mirinda"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Donut Shop",
        question: "ข้อที่ 8: ร้านโดนัทที่มีมาสคอตเป่าแก้มพองตัวสีส้ม และมีโลโก้รูปถ้วยกาแฟคือ?",
        hint: "https://placehold.co/600x350/FF6600/ED1C24?text=DD+Coffee+%26+Donuts",
        options: ["Mister Donut", "Krispy Kreme", "Dunkin'", "Daddy Dough"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 9,
        type: "Energy Drink",
        question: "ข้อที่ 9: แบรนด์เครื่องดื่มชูกำลังระดับโลกที่มีโลโก้กระทิงสีแดงชนกัน 2 ตัว คือ?",
        hint: "https://placehold.co/600x350/001A4C/FFCC00?text=Red+Bulls+Sun",
        options: ["Monster Energy", "Red Bull", "Rockstar", "Carabao"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Ice Cream",
        question: "ข้อที่ 10: แบรนด์ไอศกรีมพรีเมียมถ้วยสีกรมท่า-ทอง มีชื่อสไตล์สแกนดิเนเวียคือ?",
        hint: "https://placehold.co/600x350/3D0C1B/D4AF37?text=Haagen-Dazs",
        options: ["Swensen's", "Häagen-Dazs", "Baskin Robbins", "Ben & Jerry's"],
        answer: 1,
        timeLimit: 15
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 4: ยานยนต์ & การเดินทาง (Automotive & Travel) - 10 ข้อ
  // -------------------------------------------------------------
  "auto_travel": {
    name: "🚗 ยานยนต์ & การเดินทาง (Automotive & Travel)",
    questions: [
      {
        id: 1,
        type: "Car Logo",
        question: "ข้อที่ 1: โลโก้วงกลมแบ่งเป็น 4 เสี้ยว สีฟ้า-ขาว คือแบรนด์รถยนต์ใด?",
        hint: "https://placehold.co/600x350/000000/1B69B6?text=Blue+White+Roundel",
        options: ["BMW", "Volvo", "Volkswagen", "Ford"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 2,
        type: "EV Brand",
        question: "ข้อที่ 2: แบรนด์รถยนต์ไฟฟ้าที่มีโลโก้รูปตัว T สไตล์มินิมอล มีผู้ก่อตั้งคือ Elon Musk คือ?",
        hint: "https://placehold.co/600x350/E82127/FFFFFF?text=T+Logo+Electric",
        options: ["BYD", "NIO", "Tesla", "Rivian"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Car Logo",
        question: "ข้อที่ 3: โลโก้วงกลม 4 วงเรียงซ้อนเกี่ยวกัน คือรถยนต์ยี่ห้อใด?",
        hint: "https://placehold.co/600x350/111111/CCCCCC?text=Four+Rings",
        options: ["Subaru", "Audi", "Lexus", "Hyundai"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Airline",
        question: "ข้อที่ 4: สายการบินราคาประหยัดที่มีสโลแกน 'Now Everyone Can Fly' คือ?",
        hint: "https://placehold.co/600x350/FF0000/FFFFFF?text=Now+Everyone+Can+Fly",
        options: ["Nok Air", "Thai Lion Air", "AirAsia", "VietJet"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 5,
        type: "Supercar",
        question: "ข้อที่ 5: แบรนด์ซูเปอร์คาร์ที่มีโลโก้รูปม้าพยศสีดำบนพื้นหลังสีเหลือง คือ?",
        hint: "https://placehold.co/600x350/FFEB3B/000000?text=Prancing+Horse",
        options: ["Lamborghini", "Ferrari", "Maserati", "Aston Martin"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 6,
        type: "Supercar",
        question: "ข้อที่ 6: แบรนด์ซูเปอร์คาร์ที่มีโลโก้รูปกระทิงดุสีทอง คือ?",
        hint: "https://placehold.co/600x350/111111/D4AF37?text=Raging+Bull",
        options: ["Ferrari", "Lamborghini", "Bugatti", "McLaren"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 7,
        type: "Motorcycle",
        question: "ข้อที่ 7: แบรนด์มอเตอร์ไซค์ระดับตำนานจากอเมริกา มีสัญลักษณ์สีกกส้ม-ดำ คือ?",
        hint: "https://placehold.co/600x350/FF6600/000000?text=Bar+%26+Shield",
        options: ["Ducati", "BMW Motorrad", "Harley-Davidson", "Kawasaki"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 8,
        type: "Ride Hailing",
        question: "ข้อที่ 8: แอปพลิเคชันเรียกรถและสั่งอาหารสีเขียวที่เป็นยอดนิยมในเอเชียตะวันออกเฉียงใต้คือ?",
        hint: "https://placehold.co/600x350/00B14F/FFFFFF?text=Green+SuperApp",
        options: ["Uber", "Grab", "LINE MAN", "Gojek"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 9,
        type: "Travel OTA",
        question: "ข้อที่ 9: แอปจองที่พักที่มีสัญลักษณ์นกสีฟ้าชื่อ 'Traveloka' มีต้นกำเนิดจากประเทศใด?",
        hint: "https://placehold.co/600x350/0770CD/FFFFFF?text=Blue+Bird+Travel",
        options: ["ไทย", "อินโดนีเซีย", "สิงคโปร์", "มาเลเซีย"],
        answer: 1,
        timeLimit: 15
      },
      {
        id: 10,
        type: "Japanese Car",
        question: "ข้อที่ 10: สัญลักษณ์อักษร H อยู่ในกรอบสี่เหลี่ยมผืนผ้า คือค่ายรถยนต์ใด?",
        hint: "https://placehold.co/600x350/E31B23/FFFFFF?text=H+Emblem",
        options: ["Toyota", "Honda", "Hyundai", "Nissan"],
        answer: 1,
        timeLimit: 10
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 5: สินค้าอุปโภคบริโภค (FMCG & Personal Care) - 10 ข้อ
  // -------------------------------------------------------------
  "fmcg_brands": {
    name: "🧴 สินค้าอุปโภคบริโภค (FMCG & Beauty)",
    questions: [
      {
        id: 1,
        type: "Skincare",
        question: "ข้อที่ 1: ตลับครีมโลหะสีน้ำเงินเข้มพร้อมตัวอักษรสีขาว คือแบรนด์ดูแลผิวใด?",
        hint: "https://placehold.co/600x350/001A9C/FFFFFF?text=Blue+Tin+Creme",
        options: ["Vaseline", "Nivea", "Citra", "Garnier"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Oral Care",
        question: "ข้อที่ 2: แบรนด์ยาสีฟันที่มีสัญลักษณ์รูปชายใส่หมวกทรงสูงยิ้มเห็นฟันขาวคือ?",
        hint: "https://placehold.co/600x350/008000/FFFFFF?text=Man+in+Top+Hat",
        options: ["Colgate", "Darlie", "Sensodyne", "Close-Up"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Convenience Store",
        question: "ข้อที่ 3: ร้านสะดวกซื้อที่มีแถบสี เขียว-ส้ม-แดง เป็นเอกลักษณ์คือ?",
        hint: "https://placehold.co/600x350/00843D/FF6600?text=Green+Orange+Red+Stripes",
        options: ["FamilyMart", "7-Eleven", "Lawson 108", "CJ More"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Personal Care",
        question: "ข้อที่ 4: สบู่และสกินแคร์ที่มีสัญลักษณ์รูปนกพิราบสีทอง/ฟ้า คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/FFFFFF/002F6C?text=Dove+Bird+Silhouette",
        options: ["Dove", "Lux", "Shokubutsu", "Protex"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 5,
        type: "Detergent",
        question: "ข้อที่ 5: ผงซักฟอกที่มีสัญลักษณ์คล้ายวงกลมปรมาณู/อะตอม คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/002B49/FF0000?text=Atomic+Orbital+Icon",
        options: ["Breeze", "Ariel", "Attack", "Omo"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 6,
        type: "Shampoo",
        question: "ข้อที่ 6: แชมพูขจัดรังแคที่มีขวดสีขาว-ฟ้า และมีพรีเซนเตอร์ระดับโลกมากมายคือ?",
        hint: "https://placehold.co/600x350/0055A5/FFFFFF?text=Anti-Dandruff+Expert",
        options: ["Sunsilk", "Pantene", "Head & Shoulders", "Clear"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 7,
        type: "Retail Giant",
        question: "ข้อที่ 7: ห้างค้าส่งขนาดใหญ่ในไทยที่มีโลโก้ตัวอักษรสีแดงพร้อมสโลแกน 'มิตรแท้โชห่วย' คือ?",
        hint: "https://placehold.co/600x350/ED1C24/FFFFFF?text=Wholesale+Center",
        options: ["Lotus's", "Big C", "Makro", "Tops"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Diaper Brand",
        question: "ข้อที่ 8: ผ้าอ้อมเด็กยอดนิยมที่มีสัญลักษณ์รูปหมีขี้เล่นสีเหลืองคือ?",
        hint: "https://placehold.co/600x350/FFF100/00A896?text=Yellow+Bear+Mascot",
        options: ["MamyPoko", "Huggies", "Pampers", "BabyLove"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 9,
        type: "Drinking Water",
        question: "ข้อที่ 9: น้ำดื่มตราสิงห์ อยู่ภายใต้การบริหารงานของบริษัทใด?",
        hint: "https://placehold.co/600x350/FFFFFF/D4AF37?text=Golden+Singha+Lion",
        options: ["โอสถสภา", "บุญรอดบริวเวอรี่", "ไทยเบฟเวอเรจ", "เสริมสุข"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 10,
        type: "Instant Noodle",
        question: "ข้อที่ 10: บะหมี่กึ่งสำเร็จรูปที่เป็นคำติดปากคนไทยจนกลายเป็นชื่อเรียกแทนคือ?",
        hint: "https://placehold.co/600x350/ED1C24/FFCC00?text=Instant+Noodle+King",
        options: ["ไวไว", "ยำยำ", "มาม่า", "นิชชิน"],
        answer: 2,
        timeLimit: 10
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 6: แฟชั่น & สปอร์ตแวร์ (Fashion & Apparel) - 10 ข้อ
  // -------------------------------------------------------------
  "fashion_apparel": {
    name: "👟 แฟชั่น & สปอร์ตแวร์ (Fashion & Apparel)",
    questions: [
      {
        id: 1,
        type: "Sportswear",
        question: "ข้อที่ 1: แบรนด์กีฬาที่มีโลโก้เป็นรูปเสือพูม่ากำลังกระโดด คือ?",
        hint: "https://placehold.co/600x350/000000/FFFFFF?text=Leaping+Cat+Logo",
        options: ["Jaguar", "Puma", "Slazenger", "Lotto"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Luxury Fashion",
        question: "ข้อที่ 2: ลายตาราง 'Monogram' อักษร LV เป็นของแบรนด์หรูใด?",
        hint: "https://placehold.co/600x350/4A2511/D4AF37?text=LV+Monogram+Pattern",
        options: ["Louis Vuitton", "Hermès", "Prada", "Dior"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Fast Fashion",
        question: "ข้อที่ 3: แบรนด์เสื้อผ้าสไตล์มินิมอลสัญชาติญี่ปุ่นที่มีโลโก้กล่องสี่เหลี่ยมสีแดงคือ?",
        hint: "https://placehold.co/600x350/FF0000/FFFFFF?text=Red+Square+Logo",
        options: ["GU", "MUJI", "UNIQLO", "ZARA"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Jeans Brand",
        question: "ข้อที่ 4: กางเกงยีนส์ระดับตำนานรุ่น '501' เป็นของแบรนด์ใด?",
        hint: "https://placehold.co/600x350/C41230/FFFFFF?text=Two+Horses+501",
        options: ["Lee", "Wrangler", "Levi's", "Mc Jeans"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 5,
        type: "Casual Wear",
        question: "ข้อที่ 5: เสื้อโปโลที่มีโลโก้รูปนักโปโลขี่ม้า คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/00205B/FFFFFF?text=Polo+Player+Icon",
        options: ["Lacoste", "Ralph Lauren", "Beverly Hills Polo Club", "US Polo"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 6,
        type: "Casual Wear",
        question: "ข้อที่ 6: เสื้อที่มีโลโก้รูปจระเข้สีเขียว คือแบรนด์แฟชั่นสัญชาติฝรั่งเศสใด?",
        hint: "https://placehold.co/600x350/FFFFFF/004B23?text=Green+Crocodile",
        options: ["Crocs", "Lacoste", "Puma", "KangaROOS"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 7,
        type: "Footwear",
        question: "ข้อที่ 7: รองเท้าผ้าใบหุ้มข้อที่มีดาวในวงกลมและลายเซ็น 'Chuck Taylor' คือ?",
        hint: "https://placehold.co/600x350/111111/FFFFFF?text=Chuck+Taylor+All-Star",
        options: ["Vans", "Converse", "Keds", "Pro-Keds"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Streetwear",
        question: "ข้อที่ 8: แบรนด์สตรีทชื่อดังที่มีโลโก้รูปกล่องสีแดงพร้อมตัวอักษรสีขาวว่า 'Supreme' มาจากเมืองใด?",
        hint: "https://placehold.co/600x350/FF0000/FFFFFF?text=Supreme+Box+Logo",
        options: ["ลอนดอน", "โตเกียว", "นิวยอร์ก", "ปารีส"],
        answer: 2,
        timeLimit: 15
      },
      {
        id: 9,
        type: "Sandals",
        question: "ข้อที่ 9: รองเท้าหัวโตทำจากโฟมยางที่มีรูระบายอากาศรอบตัวรองเท้า คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/228B22/FFFFFF?text=Clog+Foam+Shoes",
        options: ["Birkenstock", "FitFlop", "Crocs", "Skechers"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Luxury Watch",
        question: "ข้อที่ 10: นาฬิกาหรูที่มีสัญลักษณ์รูปมงกุฎ 5 แฉก คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/006039/D4AF37?text=5-Point+Crown",
        options: ["Omega", "TAG Heuer", "Rolex", "Patek Philippe"],
        answer: 2,
        timeLimit: 10
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 7: ความบันเทิง & สตรีมมิ่ง (Entertainment & Gaming) - 10 ข้อ
  // -------------------------------------------------------------
  "entertainment": {
    name: "🎬 ความบันเทิง & สตรีมมิ่ง (Entertainment)",
    questions: [
      {
        id: 1,
        type: "Animation Studio",
        question: "ข้อที่ 1: ค่ายหนังอนิเมชันที่มีโคมไฟขยับได้ (Luxo Jr.) เป็นสัญลักษณ์เปิดเรื่องคือ?",
        hint: "https://placehold.co/600x350/FFFFFF/000000?text=Jumping+Lamp+Intro",
        options: ["DreamWorks", "Illumination", "Pixar", "Studio Ghibli"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 2,
        type: "Mascot",
        question: "ข้อที่ 2: มาสคอตหลักของบริษัท Disney คือตัวละครใด?",
        hint: "https://placehold.co/600x350/000000/FF0000?text=Round+Ears+Silhouette",
        options: ["Donald Duck", "Mickey Mouse", "Goofy", "Pluto"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Superhero Franchise",
        question: "ข้อที่ 3: ค่ายการ์ตูนและภาพยนตร์เจ้าของซูเปอร์ฮีโร่อย่าง Iron Man และ Spider-Man คือ?",
        hint: "https://placehold.co/600x350/ED1D24/FFFFFF?text=MARVEL+Studios",
        options: ["DC Comics", "Marvel", "Dark Horse", "Image Comics"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Gaming Franchise",
        question: "ข้อที่ 4: ช่างประปาหมวกแดงสวมชุดเอี๊ยมสีน้ำเงิน เป็นตัวละครหลักของค่ายเกมใด?",
        hint: "https://placehold.co/600x350/E60012/FFFFFF?text=Red+Cap+Plumber",
        options: ["Sega", "Nintendo", "Capcom", "Bandai Namco"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 5,
        type: "Anime Studio",
        question: "ข้อที่ 5: ค่ายอนิเมชันญี่ปุ่นเจ้าของผลงาน 'Spirited Away' และมีมาสคอตคือ 'Totoro' คือ?",
        hint: "https://placehold.co/600x350/0080FF/FFFFFF?text=Totoro+Silhouette",
        options: ["Toei Animation", "Kyoto Animation", "Studio Ghibli", "MAPPA"],
        answer: 2,
        timeLimit: 12
      },
      {
        id: 6,
        type: "Game Creator",
        question: "ข้อที่ 6: เกมสร้างบล็อกสี่เหลี่ยม 8-bit ยอดฮิต 'Minecraft' ปัจจุบันเป็นของบริษัทใด?",
        hint: "https://placehold.co/600x350/5B8731/3C2711?text=Pixel+Dirt+Block",
        options: ["EA", "Microsoft", "Epic Games", "Ubisoft"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 7,
        type: "Live Streaming",
        question: "ข้อที่ 7: แพลตฟอร์มสตรีมมิ่งเกมไอคอนสีม่วงรูปช่องคำพูดสี่เหลี่ยมคือ?",
        hint: "https://placehold.co/600x350/9146FF/FFFFFF?text=Purple+Glitch+Icon",
        options: ["Twitch", "Discord", "Kick", "Facebook Gaming"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Movie Studio",
        question: "ข้อที่ 8: ค่ายหนังที่มีสัญลักษณ์รูปภูเขาหิมะล้อมรอบด้วยดาว 22 ดวง คือ?",
        hint: "https://placehold.co/600x350/002F6C/FFFFFF?text=Snowy+Mountain+Stars",
        options: ["Warner Bros.", "Paramount Pictures", "Universal", "20th Century"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 9,
        type: "Social Video",
        question: "ข้อที่ 9: แอปพลิเคชันวิดีโอสั้นที่มีโลโก้รูปตัวโน้ตดนตรีเปลี่ยนสีได้คือ?",
        hint: "https://placehold.co/600x350/000000/25F4EE?text=Music+Note+Icon",
        options: ["Instagram Reels", "TikTok", "Snapchat", "Vine"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Audiobook / Audio",
        question: "ข้อที่ 10: บริการฟังพอดแคสต์และหนังสือเสียงของ Amazon มีชื่อว่าอะไร?",
        hint: "https://placehold.co/600x350/FF9900/000000?text=Audible+Soundwaves",
        options: ["Audible", "Kindle", "Prime Audio", "Soundcloud"],
        answer: 0,
        timeLimit: 12
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 8: การเงิน & ธนาคารไทย (Thai Banking & Finance) - 10 ข้อ
  // -------------------------------------------------------------
  "thai_banking": {
    name: "🏦 การเงิน & ธนาคารไทย (Thai Banking)",
    questions: [
      {
        id: 1,
        type: "Bank Color",
        question: "ข้อที่ 1: ธนาคารที่มีสีประจำองค์กรเป็น 'สีม่วง' และมีโลโก้รูปใบโพธิ์ คือ?",
        hint: "https://placehold.co/600x350/4E2582/FFFFFF?text=Purple+Bodhi+Leaf",
        options: ["กสิกรไทย", "ไทยพาณิชย์", "กรุงเทพ", "กรุงไทย"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Bank Color",
        question: "ข้อที่ 2: ธนาคารที่มีสีประจำองค์กรเป็น 'สีเขียว' และใช้ชื่อย่อว่า KBank คือ?",
        hint: "https://placehold.co/600x350/00A950/FFFFFF?text=KBank+Green",
        options: ["ธนาคารกรุงไทย", "ธนาคารกสิกรไทย", "ธนาคารออมสิน", "ธนาคารทหารไทยธนชาต"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Bank Mascot/Symbol",
        question: "ข้อที่ 3: ธนาคารที่มีสีประจำองค์กรเป็น 'สีเหลือง' มีต้นกำเนิดจากเมืองหลวงเก่าคือ?",
        hint: "https://placehold.co/600x350/FFD100/1D1D1B?text=BAY+Yellow",
        options: ["ธนาคารกรุงศรีอยุธยา", "ธนาคารกรุงเทพ", "ธนาคารซีไอเอ็มบี", "ธนาคารแลนด์ แอนด์ เฮ้าส์"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 4,
        type: "E-Wallet",
        question: "ข้อที่ 4: แอปกระเป๋าเงินดิจิทัลสีส้ม-ขาว ในเครือ Ascend Group คือ?",
        hint: "https://placehold.co/600x350/F37021/FFFFFF?text=TrueMoney+Wallet",
        options: ["ShopeePay", "TrueMoney", "Rabbit LINE Pay", "Dolfin"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 5,
        type: "Bank Symbol",
        question: "ข้อที่ 5: ธนาคารที่มีสัญลักษณ์รูป 'นกวายุภักษ์' สีฟ้า คือธนาคารใด?",
        hint: "https://placehold.co/600x350/1BAAEE/FFFFFF?text=Vayupak+Bird",
        options: ["ธนาคารกรุงไทย", "ธนาคารอาคารสงเคราะห์", "ธนาคารออมสิน", "ธนาคาร ธ.ก.ส."],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 6,
        type: "State Bank",
        question: "ข้อที่ 6: ธนาคารรัฐที่มีสีประจำองค์กรเป็น 'สีชมพู' เน้นการออมเงินคือ?",
        hint: "https://placehold.co/600x350/E4007D/FFFFFF?text=Pink+Savings+Bank",
        options: ["ธนาคารอาคารสงเคราะห์", "ธนาคารออมสิน", "ธนาคาร อิสลาม", "ธนาคาร ธ.ก.ส."],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 7,
        type: "Payment System",
        question: "ข้อที่ 7: ระบบการชำระเงินกลางของไทยที่ผูกเบอร์โทรศัพท์หรือเลขบัตรประชาชนคือ?",
        hint: "https://placehold.co/600x350/003B64/FFFFFF?text=PromptPay+QR",
        options: ["PromptPay", "QR Payment", "ThaiQR", "PromptCard"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Credit Card",
        question: "ข้อที่ 8: บัตรเครดิตที่มีโลโก้รูปวงกลมสองวงสีแดงและสีส้มซ้อนทับกันคือ?",
        hint: "https://placehold.co/600x350/EB001B/F79E1B?text=Two+Circles+Overlap",
        options: ["VISA", "Mastercard", "JCB", "American Express"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 9,
        type: "Stock Exchange",
        question: "ข้อที่ 9: ตลาดหลักทรัพย์แห่งประเทศไทย มีชื่อย่อเป็นภาษาอังกฤษว่าอย่างไร?",
        hint: "https://placehold.co/600x350/002244/D4AF37?text=SET+Thailand",
        options: ["SEC", "SET", "BOT", "BOTX"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Insurance",
        question: "ข้อที่ 10: บริษัทประกันชีวิตที่มีโฆษณาซาบซึ้งและใช้ชื่อ 'ไทยประกันชีวิต' มีสีประจำแบรนด์คือสีใด?",
        hint: "https://placehold.co/600x350/00529B/FFFFFF?text=Thai+Life+Blue",
        options: ["สีเขียว", "สีแดง", "สีน้ำเงิน", "สีเหลือง"],
        answer: 2,
        timeLimit: 12
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 9: คอร์ปอเรท & เครือข่ายในไทย (Thai Conglomerates & Telco) - 10 ข้อ
  // -------------------------------------------------------------
  "thai_corporate": {
    name: "🏢 คอร์ปอเรท & ค่ายมือถือไทย (Thai Corporate & Telco)",
    questions: [
      {
        id: 1,
        type: "Telco Brand",
        question: "ข้อที่ 1: ค่ายมือถือที่มีมาสคอตเป็นน้องอุ่นใจ ตัวสีเขียว คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/70B22D/FFFFFF?text=Aunjai+Green+Mascot",
        options: ["TRUE", "DTAC", "AIS", "NT"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Telco Brand",
        question: "ข้อที่ 2: ค่ายมือถือสีแดงที่เป็นบริษัทในเครือเจริญโภคภัณฑ์ (CP) คือ?",
        hint: "https://placehold.co/600x350/ED1C24/FFFFFF?text=True+Move+Red",
        options: ["AIS", "TRUE", "3BB", "NT"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 3,
        type: "Energy Giant",
        question: "ข้อที่ 3: บริษัทพลังงานแห่งชาติของไทยที่มีโลโก้รูปหยดน้ำ/เปลวไฟสีฟ้า-แดง คือ?",
        hint: "https://placehold.co/600x350/0055A5/ED1C24?text=Flame+Flame+Logo",
        options: ["BCP (บางจาก)", "PTT (ปตท.)", "EGAT (กฟผ.)", "ESSO"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 4,
        type: "Energy Brand",
        question: "ข้อที่ 4: สถานีบริการน้ำมันที่มีปั๊มรูปใบไม้สีเขียว-ส้ม เน้นเรื่องพลังงานสะอาดคือ?",
        hint: "https://placehold.co/600x350/008837/FF6600?text=Green+Leaf+Gas+Station",
        options: ["ปตท.", "บางจาก", "เชลล์", "พีที"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 5,
        type: "Conglomerate",
        question: "ข้อที่ 5: เครือปูนซิเมนต์ไทย มีชื่อย่อภาษาอังกฤษที่เป็นสัญลักษณ์องค์กรว่าอย่างไร?",
        hint: "https://placehold.co/600x350/ED1C24/FFFFFF?text=SCG+Red+Block",
        options: ["CPN", "SCG", "PTT", "TCC"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 6,
        type: "Retail Developer",
        question: "ข้อที่ 6: ผู้พัฒนาศูนย์การค้าตระกูล 'เซ็นทรัล' อยู่ภายใต้บริษัทชื่อย่อใด?",
        hint: "https://placehold.co/600x350/C8102E/FFFFFF?text=CPN+Central",
        options: ["CPN", "CRC", "CPALL", "BDMS"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 7,
        type: "Aviation",
        question: "ข้อที่ 7: สายการบินแห่งชาติของไทยที่มีโลโก้รูปจำปาชูตระการ คือ?",
        hint: "https://placehold.co/600x350/4B2354/D4AF37?text=Thai+Champa+Logo",
        options: ["Bangkok Airways", "Thai Airways", "Thai Smile", "Nok Air"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 8,
        type: "Hospital Network",
        question: "ข้อที่ 8: เครือโรงพยาบาลเอกชนที่ใหญ่ที่สุดในไทย เช่น รพ.กรุงเทพ, รพ.สมิติเวช คือเครือใด?",
        hint: "https://placehold.co/600x350/0055A5/FFFFFF?text=BDMS+Hospital+Group",
        options: ["BCH", "BDMS", "BUMRUNGRAD", "THG"],
        answer: 1,
        timeLimit: 15
      },
      {
        id: 9,
        type: "Gas Station Chain",
        question: "ข้อที่ 9: ปั๊มน้ำมันโลโก้สีแดง-เหลือง มีสัญลักษณ์รูปหอยเชลล์ คือแบรนด์ใด?",
        hint: "https://placehold.co/600x350/DD1612/FFD500?text=Pecten+Shell+Logo",
        options: ["Esso", "Caltex", "Shell", "PT"],
        answer: 2,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Convenience Store Owner",
        question: "ข้อที่ 10: บริษัทในไทยที่เป็นผู้บริหารสิทธิ์ร้าน 7-Eleven คือบริษัทใด?",
        hint: "https://placehold.co/600x350/00843D/FFFFFF?text=CP+ALL",
        options: ["CP ALL", "CPF", "CPAXT", "Makro"],
        answer: 0,
        timeLimit: 12
      }
    ]
  },

  // -------------------------------------------------------------
  // หมวดที่ 10: สโลแกน & โฆษณาไทยในตำนาน (Thai Ad Slogans) - 10 ข้อ
  // -------------------------------------------------------------
  "thai_slogans": {
    name: "📺 สโลแกน & โฆษณาไทยในตำนาน (Thai Ad Slogans)",
    questions: [
      {
        id: 1,
        type: "Slogan Match",
        question: "ข้อที่ 1: 'คำตอบสุดท้ายอยู่ในมือคุณ' เป็นวลีฮิตจากรายการทีวีใด?",
        hint: "https://placehold.co/600x350/001133/FFD700?text=Who+Wants+to+Be+a+Millionaire",
        options: ["เกมเศรษฐี", "แฟนพันธุ์แท้", "ชิงร้อยชิงล้าน", "เวทีทอง"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 2,
        type: "Slogan Match",
        question: "ข้อที่ 2: สโลแกน 'อุ่นใจไซส์มินิ' หรือ 'ห่วงใยคุณทุกเทศกาล' เชื่อมโยงกับแบรนด์ใด?",
        hint: "https://placehold.co/600x350/70B22D/FFFFFF?text=Always+Care+for+You",
        options: ["AIS", "DTAC", "TRUE", "กสิกรไทย"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 3,
        type: "Ad Catchphrase",
        question: "ข้อที่ 3: โฆษณาในตำนาน 'จน เครียด กินเหล้า' เป็นแคมเปญรณรงค์ของหน่วยงานใด?",
        hint: "https://placehold.co/600x350/FFCC00/000000?text=ThaiHealth+Ad",
        options: ["สสส.", "กระทรวงสาธารณสุข", "ตำรวจท่องเที่ยว", "ป.ป.ส."],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 4,
        type: "Slogan Match",
        question: "ข้อที่ 4: สโลแกน 'รสชาติที่คนไทยคุ้นเคย' หรือรสหมูสับน้ำใส เป็นของยี่ห้อใด?",
        hint: "https://placehold.co/600x350/ED1C24/FFCC00?text=Minced+Pork+Flavor",
        options: ["มาม่า", "ไวไว", "ยำยำ", "นิชชิน"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 5,
        type: "Slogan Match",
        question: "ข้อที่ 5: คำโปรย 'คุ้มค่าทุกนาที ดูทีวีสีช่อง...' ต้องเติมช่องใด?",
        hint: "https://placehold.co/600x350/0055A5/ED1C24?text=Color+TV+Channel",
        options: ["ช่อง 3", "ช่อง 7", "ช่อง 9", "ช่อง 5"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 6,
        type: "Slogan Match",
        question: "ข้อที่ 6: สโลแกน 'เข้ม...เต็มรสชาติ' มักเป็นวลีของแบรนด์กาแฟใด?",
        hint: "https://placehold.co/600x350/311000/FFFFFF?text=Rich+%26+Full+Flavor",
        options: ["Moccona", "Nescafe", "Birdy", "Khao Shong"],
        answer: 1,
        timeLimit: 10
      },
      {
        id: 7,
        type: "Slogan Match",
        question: "ข้อที่ 7: 'พลังสะอาด ขจัดคราบหนัก' เป็นสโลแกนผงซักฟอกตราอะไร?",
        hint: "https://placehold.co/600x350/00A896/FFFFFF?text=Ultimate+Stain+Removal",
        options: ["เปา", "บรีส เอกเซล", "แอทแทค", "โอโม"],
        answer: 1,
        timeLimit: 12
      },
      {
        id: 8,
        type: "Slogan Match",
        question: "ข้อที่ 8: สโลแกน 'เพื่อชีวิตที่ดีกว่า' (Better Living) เป็นคำโปรยของเครือธุรกิจใด?",
        hint: "https://placehold.co/600x350/ED1C24/FFFFFF?text=Passion+for+Better",
        options: ["SCG", "เครือซีพี", "ปตท.", "ไทยเบฟ"],
        answer: 0,
        timeLimit: 12
      },
      {
        id: 9,
        type: "Slogan Match",
        question: "ข้อที่ 9: 'นึกถึงกิน นึกถึงเซเว่น' มีประโยคสโลแกนฉบับเต็มว่าอย่างไร?",
        hint: "https://placehold.co/600x350/FF6600/00843D?text=Hungry+Drop+By",
        options: ["หิวเมื่อไหร่ก็แวะมา", "เพื่อนที่รู้ใจใกล้บ้านคุณ", "สะดวกซื้อ สะดวกกิน", "เปิด 24 ชั่วโมงเพื่อคุณ"],
        answer: 0,
        timeLimit: 10
      },
      {
        id: 10,
        type: "Slogan Match",
        question: "ข้อที่ 10: โฆษณาปลุกใจ 'คนไทยแท้ ต้องไม่โกง' หรือ 'โตไปไม่โกง' เป็นแคมเปญเน้นเรื่องใด?",
        hint: "https://placehold.co/600x350/002F6C/FFFFFF?text=Anti-Corruption+Campaign",
        options: ["การออมเงิน", "คุณธรรมความซื่อสัตย์", "การออกกำลังกาย", "การรักษาสภาพแวดล้อม"],
        answer: 1,
        timeLimit: 10
      }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = questionSets;