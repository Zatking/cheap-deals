export const mockData = {
  users: [
    {
      name: 'Alice Johnson',
      email: 'johnson@example.com',
      password: 'securepass123',
      address: '45 Queen Street, London, UK'
    }
  ],
  products: {
    smartphone: {
      Apple: [
        {
          model: 'iPhone 14',
          color: 'Midnight',
          capacity: '128GB',
          price: '£849',
          oldPrice: '£999', // Added oldPrice
          image: 'https://cdn.movertix.com/media/catalog/product/i/p/iphone-14-midnight-256gb_2.jpg',
          title: 'iPhone 14 Midnight 128GB'
        },
        {
          model: 'iPhone 13',
          color: 'Blue',
          capacity: '256GB',
          price: '£949',
          oldPrice: '£1099', // Added oldPrice
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443294_sd.jpg',
          title: 'iPhone 13 Blue 256GB'
        },
        {
          model: 'iPhone 11',
          color: 'Black',
          capacity: '64GB',
          price: '£449',
          oldPrice: '£599', // Added oldPrice
          image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/6/_/6_130.jpg',
          title: 'iPhone 11 Black 64GB'
        }
      ],
      Samsung: [
        {
          model: 'Galaxy S23',
          color: 'Phantom Black',
          capacity: '128GB',
          price: '£799',
          oldPrice: '£899', // Added oldPrice
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530811_sd.jpg',
          title: 'Galaxy S23 Phantom Black 128GB'
        },
        {
          model: 'Galaxy A54',
          color: 'Awesome Lime',
          capacity: '128GB',
          price: '£449',
          oldPrice: '£499', // Added oldPrice
          image: 'https://m.media-amazon.com/images/I/51+7ayyNsBL._AC_SL1000_.jpg',
          title: 'Galaxy A54 Awesome Lime 128GB'
        },
        {
          model: 'Galaxy Z Flip5',
          color: 'Graphite',
          capacity: '256GB',
          price: '£1049',
          oldPrice: '£1199', // Added oldPrice
          image:
            'https://techcart.com.au/wp-content/uploads/2022/09/68411-Samsung-Galaxy-Z-Flip-4-F7210-256GB8GB-Graphite.png',
          title: 'Galaxy Z Flip5 Graphite 256GB'
        }
      ],
      Oppo: [
        {
          model: 'Oppo Reno8',
          color: 'Shimmer Gold',
          capacity: '128GB',
          price: '£379',
          oldPrice: '£499',
          image: 'https://welectronics.com/images/stories/virtuemart/product/OppoReno8gold.jpg',
          title: 'Oppo Reno8 Shimmer Gold 128GB'
        },
        {
          model: 'Oppo Find X5',
          color: 'White',
          capacity: '256GB',
          price: '£899',
          oldPrice: '£999', // Added oldPrice
          image: 'https://www.discoazul.com/uploads/media/images/smartphone-oppo-find-x5-5g-8gb-256gb-white-1.jpg',
          title: 'Oppo Find X5 White 256GB'
        },
        {
          model: 'Oppo A78',
          color: 'Black',
          capacity: '128GB',
          price: '£219',
          oldPrice: '£279', // Added oldPrice
          image:
            'https://s13emagst.akamaized.net/products/52616/52615891/images/res_a9d3ff84722e01c3ba8cb159285bd3c7.jpg',
          title: 'Oppo A78 Black 128GB'
        }
      ]
    },
    tablet: {
      Apple: [
        {
          model: 'iPad Pro 11"',
          color: 'Space Grey',
          capacity: '128GB',
          price: '£749',
          oldPrice: '£849',
          image: 'https://b2bshop.ooredoo.com.kw/images/thumbs/0003428_ipad-pro-11-wifi-128gb-space-grey-2022.jpeg',
          title: 'iPad Pro 11 Space Grey 128GB'
        },
        {
          model: 'iPad Air 5',
          color: 'Blue',
          capacity: '64GB',
          price: '£499',
          oldPrice: '£599',
          image: 'https://www.resetdigitale.it/128481-thickbox_default/apple-ipad-air-5-2022-64gb-5g-blue.jpg',
          title: 'iPad Air 2022 Blue 64GB'
        },
        {
          model: 'iPad 10th Gen',
          color: 'Silver',
          capacity: '64GB',
          price: '£319',
          oldPrice: '£399',
          image:
            'https://media.very.co.uk/i/very/V8YFA_SQ1_0000000035_SILVER_SLf?$550x733_standard$&$roundel_very$&p1_img=blank_apple',
          title: 'iPad 10.2 Silver 64GB'
        }
      ],
      Samsung: [
        {
          model: 'Galaxy Tab S8',
          color: 'Graphite',
          capacity: '128GB',
          price: '£649',
          oldPrice: '£749',
          image: 'https://m.media-amazon.com/images/I/710OW4UCM0L._AC_SL1500_.jpg',
          title: 'Galaxy Tab S8 Graphite 128GB'
        },
        {
          model: 'Galaxy Tab A8',
          color: 'Silver',
          capacity: '64GB',
          price: '£179',
          oldPrice: '£229',
          image: 'https://www.dateks.lv/images/pic/2400/2400/515/1118.jpg',
          title: 'Galaxy Tab A7 Gold 32GB'
        },
        {
          model: 'Galaxy Tab S6 Lite',
          color: 'Oxford Grey',
          capacity: '64GB',
          price: '£499',
          oldPrice: '£599',
          image:
            'https://data.clickforshop.it/imgprodotto/samsung-galaxy-tab-s6-lite-tablet-10-4-ram-4-gb-memoria-64-gb-wifi-5-colore-oxford-gray_327958.jpg',
          title: 'Galaxy Tab S6 Cloud Blue 128GB'
        }
      ],
      Lenovo: [
        {
          model: 'Tab P11 Pro',
          color: 'Storm Grey',
          capacity: '128GB',
          price: '£499',
          oldPrice: '£599',
          image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/l/e/lenovo-tab-p11-pro.jpg',

          title: 'Tab P11 Pro Storm Grey 128GB'
        },
        {
          model: 'Tab M10 Plus',
          color: 'Platinum Grey',
          capacity: '64GB',
          price: '£169',
          oldPrice: '£199',
          image: 'https://img.ktc.ua/img/base/1/7/282167.jpg',
          title: 'Tab M10 Plus Platinum Grey 64GB'
        },
        {
          model: 'Yoga Tab 11',
          color: 'Storm Grey',
          capacity: '128GB',
          price: '£279',
          oldPrice: '£329',
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471732ld.jpg',
          title: 'Yoga Tab 11 Storm Grey 128GB'
        }
      ]
    }
  },
  hotsale: {
    daySale: 5,
    productSale: [
      {
        category: 'smartphone',
        brand: 'Apple',
        model: 'iPhone 13',
        color: 'Blue',
        capacity: '256GB',
        price: '£949',
        oldPrice: '£1099', // Added oldPrice
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443294_sd.jpg',
        title: 'iPhone 13 Blue 256GB'
      },
      {
        category: 'smartphone',
        brand: 'Samsung',
        model: 'Galaxy A54',
        color: 'Awesome Lime',
        capacity: '128GB',
        price: '£449',
        oldPrice: '£499', // Added oldPrice
        image: 'https://m.media-amazon.com/images/I/51+7ayyNsBL._AC_SL1000_.jpg',
        title: 'Galaxy A54 Awesome Lime 128GB'
      },
      {
        category: 'tablet',
        brand: 'Apple',
        model: 'iPad Air 5',
        color: 'Blue',
        capacity: '64GB',
        price: '£669',
        oldPrice: '£799', // Added oldPrice
        image: 'https://www.resetdigitale.it/128481-thickbox_default/apple-ipad-air-5-2022-wifi-64gb-blue.jpg',
        title: 'iPad Air 5 Blue 64GB'
      }
    ]
  }
}
