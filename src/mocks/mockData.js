const mockProductImages = [
  "/images/product-1.jpg",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
  "/images/product-4.jpg",
  "/images/product-5.jpg"
];

const mockProductDetails = {
  name: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
  priceRange: "$2,999 - $3,999 ",
  originalPrice: "$3,699 - $4,699",
  activities: ["街口結帳享九折優惠", "訂單滿 399 免運費"],
  details: [
    "請於訂單備註填寫您需要的球員",
    "球員搭配之號碼不可替換",
    "球員款客製訂單出貨需要十四個工作天"
  ]
};

const mockProductDescription = {
  category: "這邊可以填寫純文字內容。",
  description:
    "靈感來自 90 年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
  notes:
    "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。"
};

const mockProductModal = [
  {
    productName: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
    productImage: "/images/product-1.jpg",
    productPrice: 2999,
    productColor: "酷炫黑",
    productAmount: 23,
    productSize: [
      {
        size: "S",
        amount: 10
      },
      {
        size: "M",
        amount: 8
      },
      {
        size: "L",
        amount: 0
      },
      {
        size: "XL",
        amount: 0
      },
      {
        size: "XXL",
        amount: 5
      }
    ]
  },
  {
    productName: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
    productImage: "/images/product-2.jpg",
    productPrice: 3999,
    productColor: "紫旋風",
    productAmount: 26,
    productSize: [
      {
        size: "S",
        amount: 10
      },
      {
        size: "M",
        amount: 0
      },
      {
        size: "L",
        amount: 5
      },
      {
        size: "XL",
        amount: 5
      },
      {
        size: "XXL",
        amount: 6
      }
    ]
  },
  {
    productName: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
    productImage: "/images/product-3.jpg",
    productPrice: 2999,
    productColor: "暴風紅",
    productAmount: 0,
    productSize: [
      {
        size: "S",
        amount: 0
      },
      {
        size: "M",
        amount: 0
      },
      {
        size: "L",
        amount: 0
      },
      {
        size: "XL",
        amount: 0
      },
      {
        size: "XXL",
        amount: 0
      }
    ]
  },
  {
    productName: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
    productImage: "/images/product-4.jpg",
    productPrice: 3199,
    productColor: "耀眼黃",
    productAmount: 25,
    productSize: [
      {
        size: "S",
        amount: 10
      },
      {
        size: "M",
        amount: 10
      },
      {
        size: "L",
        amount: 5
      }
    ]
  },
  {
    productName: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
    productImage: "/images/product-5.jpg",
    productPrice: 3599,
    productColor: "我是第二行選項",
    productAmount: 10,
    productSize: [
      {
        size: "S",
        amount: 10
      }
    ]
  }
];

export {
  mockProductImages,
  mockProductDetails,
  mockProductDescription,
  mockProductModal
};
