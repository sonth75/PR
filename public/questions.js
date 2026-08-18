const questions = [
  {
    id: 1,
    type: "Blurred Logo",
    question: "ข้อที่ 1: โลโก้แบรนด์เสื้อผ้าสปอร์ตแวร์นี้คือแบรนด์ใด?",
    hint: "https://placehold.co/400x250/000000/FFFFFF?text=Blurred+Logo",
    options: ["Adidas", "Nike", "Puma", "Under Armour"],
    answer: 1,
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
    hint: "https://placehold.co/400x250/333333/FFFFFF?text=Apple+Zoom",
    options: ["Apple", "Samsung", "Xiaomi", "Huawei"],
    answer: 0,
    timeLimit: 12
  },
  {
    id: 4,
    type: "Color Palette",
    question: "ข้อที่ 4: ธีมสี 'แดง - เหลือง' นี้เป็นเอกลักษณ์ของแบรนด์ใด?",
    hint: "https://placehold.co/400x250/DA291C/FFC72C?text=Red+%26+Yellow",
    options: ["KFC", "McDonald's", "Burger King", "Pizza Hut"],
    answer: 1,
    timeLimit: 10
  },
  {
    id: 5,
    type: "Mascot Silhouette",
    question: "ข้อที่ 5: เงารูปมาสคอตเด็กผู้หญิงผมเปียนี้คือแบรนด์ใด?",
    hint: "https://placehold.co/400x250/111111/FFFFFF?text=Girl+Silhouette",
    options: ["Wendy's", "Dairy Queen", "Starbucks", "Chupa Chups"],
    answer: 0,
    timeLimit: 12
  },
  {
    id: 6,
    type: "Product Shape",
    question: "ข้อที่ 6: เงารูปทรงขวดแก้วอันเป็นเอกลักษณ์นี้คือเครื่องดื่มใด?",
    hint: "https://placehold.co/400x250/222222/FFFFFF?text=Contour+Bottle",
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
