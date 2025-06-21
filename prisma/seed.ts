import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // Create Categories
  // const footwearCategory = await prisma.category.create({
  //   data: {
  //     title: 'Footwear',
  //     slug: 'footwear',
  //     images: {
  //       create: [{
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945552/ecommerce/Kapil_Stylish_footwear_category_2ef2a357-4c52-40c4-af74-1bb4a92c4644_1.png'
  //       },
  //       {
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_8e38853f-d68f-4858-b818-53a07c88d253.png'
  //       }]
  //     }
  //   },
  // });

  // const electronicsCategory = await prisma.category.create({
  //   data: {
  //     title: 'Electronics',
  //     slug: 'electronics',
  //     images: {
  //       create: [{
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/PlayStation_6_Portable_Edition_Won_t_Be_as_Powerful_as_the_PlayStation_5.jpg'
  //       },
  //       {
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/Holographic_AR_glasses_design.jpg'
  //       }]
  //     }
  //   },
  // });

  // // Create Product - Nike AirMax Shoes
  // const nikeProduct = await prisma.product.create({
  //   data: {
  //     brand: 'Nike',
  //     title: 'Nike AirMax 270',
  //     description: 'Breathable and stylish sneakers with maximum air comfort.',
  //     price: 9999.0,
  //     productInformation: 'Nike AirMax 270 features a Max Air unit in the heel for unrivaled cushioning.',
  //     categoryId: footwearCategory.id,
  //     productImages: {
  //       create: [
  //         { 
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_8e38853f-d68f-4858-b818-53a07c88d253.png', altText: 'Red Nike AirMax 270 Shoes' 
  //         },
  //         { 
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_b00303d0-56e8-4c1d-899a-5c9898ad546f.png', altText: 'Blue Nike AirMax 270 Shoes' 
  //         },
  //           { 
  //         url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945552/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_bc42a792-a6ae-4a7a-8ba2-1c77da7ea5a6.png', altText: 'Grey Nike AirMax 270 Shoes' 
  //         }
  //     ],
  //     },
  //     options: {
  //       create: [
  //         {
  //           name: 'Size',
  //           values: {
  //             create: [{ value: '8' }, { value: '9' }],
  //           },
  //         },
  //         {
  //           name: 'Color',
  //           values: {
  //             create: [{ value: 'Blue' }, { value: 'Red' }, {value: 'Grey'}],
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     options: { include: { values: true } },
  //   },
  // });

  // await prisma.productVariant.create({
  //   data: {
  //     sku: 'NIKE-AIRMAX-RED-8',
  //     price: 9999.0,
  //     stock: 20,
  //     productId: nikeProduct.id,
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_8e38853f-d68f-4858-b818-53a07c88d253.png', altText: 'Nike AirMax 270 Red Size 8' },
  //         { url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_80cf8746-26a4-4807-a2b2-a482042299c0.png', altText: 'Side Nike AirMax 270 Red Size 8' }
  //       ],
  //     },
  //     options: {
  //       create: [
  //         {
  //           name: "Size",
  //           value: "8"
  //         },
  //         {
  //           name: "Color",
  //           value: "Red"
  //         }
  //       ]
  //     },
  //   },
  // });
  // await prisma.productVariant.create({
  //   data: {
  //     sku: 'NIKE-BLUE',
  //     price: 9999.0,
  //     stock: 20,
  //     productId: nikeProduct.id,
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_b00303d0-56e8-4c1d-899a-5c9898ad546f.png', altText: 'Nike AirMax 270 Blue Size 8' }],
  //     },
  //     options: {
  //       create: [
  //         {
  //           name: "Size",
  //           value: "8"
  //         },
  //         {
  //           name: "Color",
  //           value: "Blue"
  //         }
  //       ]
  //     },
  //   },
  // });
  // await prisma.productVariant.create({
  //   data: {
  //     sku: 'NIKE-GREY',
  //     price: 9999.0,
  //     stock: 20,
  //     productId: nikeProduct.id,
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945551/ecommerce/Kapil_Create_Multiple_images_for_nike_air_force_shoes__a_b00303d0-56e8-4c1d-899a-5c9898ad546f.png', altText: 'Nike AirMax 270 Grey Size 9' }],
  //     },
  //     options: {
  //       create: [
  //         {
  //           name: "Size",
  //           value: "9"
  //         },
  //         {
  //           name: "Color",
  //           value: "Grey"
  //         }
  //       ]
  //     },
  //   },
  // });

  // // Create Product - Sony WH-1000XM5 Headphones
  // const sonyProduct = await prisma.product.create({
  //   data: {
  //     brand: 'Sony',
  //     title: 'Sony WH-1000XM5',
  //     description: 'Industry-leading noise canceling headphones with premium sound.',
  //     price: 28990.0,
  //     productInformation: 'Up to 30-hour battery life with quick charging and adaptive sound control.',
  //     categoryId: electronicsCategory.id,
  //     productImages: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/Experience_Unmatched_Sound_with_Sony_WF-1000XM5_industry-Leading_Noise_Cancelling.jpg', altText: 'Sony WH-1000XM5 Headphones Silver' },
  //         { url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/airpods.jpg', altText: 'Sony WH-1000XM5 Headphones Black' },
  //         { url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/Black_Archives_-_leManoosh.jpg', altText: 'Sony WH-1000XM5 Headphones Black On Model' }
          
  //       ],
  //     },
  //     options: {
  //       create: [
  //         {
  //           name: 'Color',
  //           values: {
  //             create: [{ value: 'Silver' }, { value: 'Black' }],
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     options: { include: { values: true } },
  //   },
  // });

  // await prisma.productVariant.create({
  //   data: {
  //     sku: 'SONY-SILVER',
  //     price: 28990.0,
  //     stock: 10,
  //     productId: sonyProduct.id,
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/Experience_Unmatched_Sound_with_Sony_WF-1000XM5_industry-Leading_Noise_Cancelling.jpg', altText: 'Sony WH-1000XM5 Silver' }],
  //     },
  //     options: {
  //       create: [
  //         {
  //           name: "Color",
  //           value: "Silver"
  //         }
  //       ]
  //     },
  //   },
  // });

  // await prisma.productVariant.create({
  //   data: {
  //     sku: 'SONY-BLACK',
  //     price: 28990.0,
  //     stock: 15,
  //     productId: sonyProduct.id,
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/airpods.jpg', altText: 'Sony WH-1000XM5 Black' },
  //         { url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/Black_Archives_-_leManoosh.jpg', altText: 'Sony WH-1000XM5 Black on Model' }
  //       ],
  //     },
  //     options: {
  //       create : [{
  //         name: "Color",
  //         value: "Black"
  //       }]
  //     },
  //   },
  // });

  // // Create Banners
  // await prisma.banner.create({
  //   data: {
  //     title: 'Spring Sale - Up to 50% Off',
  //     description: 'Shop the hottest styles in footwear.',
  //     link: '/category/footwear',
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1747466233/ecommerce/Slide_View__1__Ray-Ban_Oversized_Hexagonal_Sunglasses.jpg', altText: 'Spring Sale Banner' }],
  //     },
  //   },
  // });

  // await prisma.banner.create({
  //   data: {
  //     title: 'Tech Deals',
  //     description: 'Grab the latest electronics at unbeatable prices.',
  //     link: '/category/electronics',
  //     images: {
  //       create: [{ url: 'https://res.cloudinary.com/dja3psq3t/image/upload/v1746945550/ecommerce/Futuristic_Headset_and_VR_Glasses_Wallpaper_UHD_Resolution.jpg', altText: 'Tech Deals Banner' }],
  //     },
  //   },
  // });
   const banners = await prisma.banner.findMany(); // assuming at least 2 exist
  const trendingProducts = await prisma.product.findMany({
    where: { isTrending: true },
    take: 10,
  });
  const newProducts = await prisma.product.findMany({
    where: { isNew: true },
    take: 10,
  });

  const heroBanner1 = await prisma.homepageWidget.create({
    data: {
      type: 'HERO_BANNER',
      order: 1,
      title: 'Hero Banner 1',
      widgetItems: {
        create: [
          {
            type: 'BANNER',
            itemId: banners[0]?.id || '',
            order: 1,
          },
        ],
      },
    },
  });

  const trendingSection = await prisma.homepageWidget.create({
    data: {
      type: 'PRODUCT_CAROUSEL',
      title: 'Trending Now',
      order: 2,
      widgetItems: {
        create: trendingProducts.map((product, i) => ({
          type: 'PRODUCT',
          itemId: product.id,
          order: i + 1,
        })),
      },
    },
  });

  const heroBanner2 = await prisma.homepageWidget.create({
    data: {
      type: 'HERO_BANNER',
      order: 3,
      title: 'Hero Banner 2',
      widgetItems: {
        create: [
          {
            type: 'BANNER',
            itemId: banners[1]?.id || '',
            order: 1,
          },
        ],
      },
    },
  });

  const latestSection = await prisma.homepageWidget.create({
    data: {
      type: 'PRODUCT_CAROUSEL',
      title: 'Latest Arrivals',
      order: 4,
      widgetItems: {
        create: newProducts.map((product, i) => ({
          type: 'PRODUCT',
          itemId: product.id,
          order: i + 1,
        })),
      },
    },
  });

  console.log('✅ Seeded homepage widgets:', {
    heroBanner1: heroBanner1.id,
    trendingSection: trendingSection.id,
    heroBanner2: heroBanner2.id,
    latestSection: latestSection.id,
  });
    console.log('Seeding completed.')
}



main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
