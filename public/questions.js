const questions = [
  {
    id: 1,
    type: "Blurred Logo",
    question: "ข้อที่ 1: โลโก้แบรนด์เสื้อผ้าสปอร์ตแวร์นี้คือแบรนด์ใด?",
    hint: "https://www.bing.com/images/search?view=detailV2&ccid=4X9pVZ8v&id=EC746F9DBF1E27EF4AF1F84B4E1ECE322FF8642E&thid=OIP.4X9pVZ8v1WnLq9jMZCrDIQHaFG&mediaurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F03%2F22%2F56%2F97%2F360_F_322569705_TXxSknpnRx3E0aM0gIscDgjmFrUuazkt.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.e17f69559f2fd569cbabd8cc642ac321%3Frik%3DLmT4LzLOHk5L%252bA%26pid%3DImgRaw%26r%3D0&exph=360&expw=522&q=%E0%B8%A0%E0%B8%B2%E0%B8%9E+Nike&mode=overlay&ck=3EC4B736E465AF2DF2198163FDC8F124&selectedIndex=0&idpp=serp&ajaxhist=0&ajaxserp=0&shtc=0&shth=OIP.4X9pVZ8v1WnLq9jMZCrDIQHaFG&shsc=idp&form=EX0050&shid=b2c1cba7-8428-4fd6-8ae2-0c67fb7f0906&shtp=GetUrl&shtk=4Lij4Li54Lib4Lig4Liy4LieTmlrZSDigJMg4LmA4Lil4Li34Lit4LiB4LiU4Li54Lig4Liy4Lie4LiW4LmI4Liy4Lii4Liq4LiV4LmH4Lit4LiBIOC5gOC4p%2BC4geC5gOC4leC4reC4o%2BC5jCDguYHguKXguLDguKfguLTguJTguLXguYLguK0yMiw2NDAgfCBBZG9iZSBTdG9jaw%3D%3D&shdk=Rm91bmQgb24gQmluZyBmcm9tIHN0b2NrLmFkb2JlLmNvbQ%3D%3D&shhk=zFeqg1ymqRFyixKwGrnnsML9NGBb81NPc7SMBrbmahI%3D?text=Swoosh+Blurred", // ใส่ URL รูปภาพจริง
    options: ["Adidas", "Nike", "Puma", "Under Armour"],
    answer: 1, // ดัชนีตัวเลือกที่ถูกต้อง (0 = Adidas, 1 = Nike...)
    timeLimit: 15
  },
  {
    id: 2,
    type: "Slogan Match",
    question: "ข้อที่ 2: สโลแกน 'คิดจะพัก คิดถึง...' เป็นของแบรนด์ใด?",
    hint: null,
    options: ["Snickers", "M&M's", "KitKat", "Oreo"],
    answer: 2,
    timeLimit: 12
  },
  {
    id: 3,
    type: "Zoom In",
    question: "ข้อที่ 3: ภาพซูมขยายส่วนนี้คือโลโก้ของแบรนด์เทคโนโลยีใด?",
    hint: "https://via.placeholder.com/400x250/333333/FFFFFF?text=Bitten+Apple+Zoom",
    options: ["Apple", "Samsung", "Xiaomi", "Huawei"],
    answer: 0,
    timeLimit: 12
  },
  {
    id: 4,
    type: "Color Palette",
    question: "ข้อที่ 4: ธีมสี 'แดง - เหลือง' นี้เป็นเอกลักษณ์ของแบรนด์ใด?",
    hint: "https://via.placeholder.com/400x250/DA291C/FFC72C?text=Red+%26+Yellow",
    options: ["KFC", "McDonald's", "Burger King", "Pizza Hut"],
    answer: 1,
    timeLimit: 10
  },
  {
    id: 5,
    type: "Mascot Silhouette",
    question: "ข้อที่ 5: เงารูปมาสคอตเด็กผู้หญิงผมเปียนี้คือแบรนด์ใด?",
    hint: "https://via.placeholder.com/400x250/111111/FFFFFF?text=Girl+Silhouette",
    options: ["Wendy's", "Dairy Queen", "Starbucks", "Chupa Chups"],
    answer: 0,
    timeLimit: 12
  },
  {
    id: 6,
    type: "Product Shape",
    question: "ข้อที่ 6: เงารูปทรงขวดแก้วอันเป็นเอกลักษณ์นี้คือเครื่องดื่มใด?",
    hint: "https://via.placeholder.com/400x250/222222/FFFFFF?text=Contour+Bottle",
    options: ["Pepsi", "Est Cola", "Coca-Cola", "Sprite"],
    answer: 2,
    timeLimit: 12
  },
  {
    id: 7,
    type: "Sound Check",
    question: "ข้อที่ 7: เสียง Sound Logo 'ตื่อดึง!' สั้นๆ นี้เป็นเอกลักษณ์ของสตรีมมิ่งใด?",
    hint: null,
    options: ["Disney+", "Netflix", "YouTube", "HBO Max"],
    answer: 1,
    timeLimit: 10
  },
  {
    id: 8,
    type: "Emoji Puzzle",
    question: "ข้อที่ 8: ถอดรหัสอีโมจิ ☕🧜‍♀️ คือแบรนด์ใด?",
    hint: null,
    options: ["Cafe Amazon", "Starbucks", "True Coffee", "Inthanin"],
    answer: 1,
    timeLimit: 10
  },
  {
    id: 9,
    type: "Negative Space",
    question: "ข้อที่ 9: โลโก้ขนส่งใดมีสัญลักษณ์ 'ลูกศร' ซ่อนอยู่ในพื้นที่ว่าง (Negative Space)?",
    hint: null,
    options: ["DHL", "FedEx", "Kerry Express", "Flash Express"],
    answer: 1,
    timeLimit: 12
  },
  {
    id: 10,
    type: "Ultimate Quiz",
    question: "ข้อที่ 10 (ข้อตัดสิน): แบรนด์ใดก่อตั้งขึ้นในประเทศสวีเดน?",
    hint: null,
    options: ["Uniqlo", "ZARA", "IKEA", "H&M"],
    answer: 2,
    timeLimit: 15
  }
];

if (typeof module !== 'undefined') module.exports = questions;
