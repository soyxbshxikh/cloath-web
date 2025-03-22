# Cloth - Fashion Redefined

Cloth is a modern e-commerce platform for sustainable and ethical fashion. This Next.js application provides a responsive, user-friendly interface for customers to browse and purchase clothing items.

## 🚀 Features

- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop devices
- **Product Catalog**: Browse through various clothing categories and products
- **User Accounts**: Create accounts, manage profiles, and view order history
- **Shopping Cart**: Add items to cart, update quantities, and proceed to checkout
- **Wishlist**: Save favorite items for later purchase
- **Order Management**: Complete checkout flow with order confirmation
- **Store Locator**: Find physical store locations in Vasai East, Vasai West, and Nalasopara
- **Contact Form**: Get in touch with customer service

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **QR Code Generation**: [qrcode.react](https://www.npmjs.com/package/qrcode.react)
- **Slider/Carousel**: [Swiper](https://swiperjs.com/)

## 📋 Project Structure

```
Cloth-web/
├── public/
│   └── images/           # Static images
├── src/
│   ├── app/              # App router pages
│   │   ├── about/
│   │   ├── cart/
│   │   ├── contact/
│   │   ├── order-success/
│   │   ├── shop/
│   │   ├── wishlist/
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable UI components
│   │   ├── CheckoutForm.tsx
│   │   ├── Footer.tsx
│   │   ├── PaymentIcons.tsx
│   │   └── ...
│   └── store/            # Redux store setup
│       ├── cartSlice.ts
│       ├── wishlistSlice.ts
│       └── store.ts
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Cloth-web.git
   cd Cloth-web
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 🌐 Deployment

The site can be deployed on Vercel for optimal performance with Next.js:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site and provide a URL

## 📝 Store Locations

- **Vasai East Store**
  - Waliv Naka, Sopara Road
  - Vasai East, Maharashtra 401208
  - Hours: Mon-Sat: 10am-9pm, Sun: 11am-7pm

- **Vasai West Store**
  - Ambadi Road, Near Station
  - Vasai West, Maharashtra 401202
  - Hours: Mon-Sat: 10am-9pm, Sun: 11am-7pm

- **Nalasopara Store**
  - Achole Road, Near Station
  - Nalasopara East, Maharashtra 401209
  - Hours: Mon-Sat: 10am-9pm, Sun: 11am-7pm

## 📞 Contact Information

- **Email**: laxmijaiswar323@gmail.com
- **Address**: Waliv naka, Vasai east, Mumbai, Maharashtra 401208
- **Social Media**: 
  - [Facebook](https://www.facebook.com/share/18GHwqV7as/)
  - [Instagram](https://www.instagram.com/looksay.in?igsh=MWswZ212OTYwYmhqeQ==)
  - [LinkedIn](https://www.linkedin.com/in/laxmijaiswar30?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 🔒 Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 📈 SEO Optimization

The site includes proper metadata for each page for search engine optimization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📜 License

This project is licensed under the MIT License.

## ✨ Designed By

Soyab Shaikh
