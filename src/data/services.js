import {
  Store,
  LayoutDashboard,
  Truck,
  LineChart,
  Mail,
  Users,
  PieChart,
  SwatchBook,
  ShoppingCart,
  DollarSign,
  CheckCircle,
  Target,
  Brain,
  BookMarked,
  Files,
  Gauge,
  Smartphone,
  SearchCheck,
  MonitorCheck,
  Rocket,
  Handshake,
  Calendar,
  Hourglass,
} from 'lucide-react';


const allServicesData = [
  {
    title: "Shopify / Woo / Magento + Custom",
    kicker: "Store Setup & Management",
    description:
      "We create and manage high-performance, conversion-focused online stores on all major platforms.",
    points: [
      "AI copywriting & image optimization",
      "Store health checks (speed, SEO, UX)",
      "Product catalog setup & testing",
    ],
    icon: <Store size={16} />,
    slug: "store-setup-management",
    detailPageData: {
      hero: {
        title: "Build a Store That Converts, Not Just Exists",
        description:
          "In today’s digital world, having an online store is no longer enough — it has to stand out, perform well, and convert visitors into loyal buyers. That’s where our Store Setup & Management services come in. We don’t just build stores; we create powerful digital experiences that drive sales, customer engagement, and brand trust. Whether you’re starting from scratch or need to optimize an existing store, we provide end-to-end solutions across Shopify, WooCommerce, Magento, and custom platforms.",
      },
      sections: [
        {
          title: "Conversion-Focused Store Builds",
          description:
            "Your store is the heart of your e-commerce business. But many stores fail because they look good on the surface but lack real conversion power. Our builds are backed by AI-driven insights, user experience heatmaps, SEO checks, and smart collections. This means your store won’t just be a digital catalog; it will be a sales engine designed to guide customers smoothly from product discovery to checkout.",
          points: [
            {
              text: "AI copywriting that speaks your customers’ language.",
              icon: Brain,
            },
            {
              text: "High-quality product images, automatically cleaned and optimized.",
              icon: BookMarked,
            },
            {
              text: "Smart product tagging & collections for effortless browsing.",
              icon: Files,
            },
            {
              text: "UX-tested layouts that eliminate drop-offs and abandoned carts.",
              icon: LayoutDashboard,
            },
          ],
          icon: Target,
        },
        {
          title: "Seamless Catalog Import & Tagging",
          description:
            "If you’re migrating from another platform or adding hundreds of products, manual uploads can eat up time and cause errors. We handle bulk catalog imports, product tagging, and SEO-friendly categorization to make sure your products are properly organized and easy to find. Customers should never get lost searching — and with our systems, they won’t.",
          icon: Store,
        },
        {
          title: "AI-Powered Testing & Continuous Improvement",
          description:
            "A successful online store is never static. Markets change, customer behavior evolves, and competition gets tougher. That’s why we build a testing roadmap (A/B testing, CRO optimization, funnel testing) to keep improving your store’s performance. With AI heatmaps and user behavior analysis, we detect what’s working, what isn’t, and how to maximize conversions. Instead of guessing, we let data guide every improvement.",
          icon: LineChart,
        },
        {
          title: "Comprehensive Store Health Checks",
          description:
            "A store that loads slowly or ranks poorly on search engines loses customers instantly. Our store health checks cover: Speed & performance optimization. Mobile responsiveness to ensure a flawless mobile experience. SEO audits to improve visibility on Google and marketplaces. User experience insights based on heatmaps and analytics. These checks ensure your store runs smoothly, attracts more traffic, and keeps customers engaged.",
          points: [
            { text: "Speed & performance optimization.", icon: Gauge },
            {
              text: "Mobile responsiveness to ensure a flawless mobile experience.",
              icon: Smartphone,
            },
            {
              text: "SEO audits to improve visibility on Google and marketplaces.",
              icon: SearchCheck,
            },
            {
              text: "User experience insights based on heatmaps and analytics.",
              icon: MonitorCheck,
            },
          ],
          icon: CheckCircle,
        },
      ],
      whyChoose: {
        title: "Why Clients Choose Us for Store Setup & Management",
        points: [
          {
            text: "Multi-platform expertise: Whether you’re on Shopify, WooCommerce, or Magento, we’ve mastered it.",
            icon: Store,
          },
          {
            text: "AI-powered tools: From copywriting to analytics, we integrate smart solutions.",
            icon: Brain,
          },
          {
            text: "Future-ready approach: Your store won’t just work today; it will be scalable for tomorrow.",
            icon: Rocket,
          },
          {
            text: "Hands-on management: We don’t disappear after setup — we provide ongoing management, updates, and optimizations.",
            icon: Handshake,
          },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "One of our clients struggled with low conversions on their Shopify store despite good traffic. After our AI-driven heatmap analysis, we discovered customers were abandoning carts at the shipping stage. We restructured the checkout process, added clear trust badges, optimized product descriptions, and reduced loading time by 40%. Within 60 days, their conversion rate increased by 68%, and average order value jumped by 22%. This is the power of proper store setup and smart management.",
      },
      process: {
        title: "Our Process — Step by Step",
        steps: [
          {
            text: "Consultation & Planning",
            description: "Understanding your business, goals, and customers.",
            icon: Calendar,
          },
          {
            text: "Store Setup & Design",
            description:
              "Building a clean, professional, and conversion-focused storefront.",
            icon: Store,
          },
          {
            text: "Product Catalog Integration",
            description: "Bulk uploads, smart tagging, and SEO optimization.",
            icon: Files,
          },
          {
            text: "AI Health Check",
            description: "Testing for speed, SEO, and UX issues.",
            icon: Brain,
          },
          {
            text: "Ongoing Management",
            description: "Monitoring, updating, and scaling your store.",
            icon: Hourglass,
          },
        ],
      },
      outcome: {
        title: "The Outcome You Can Expect",
        points: [
          "A fast, SEO-optimized, and professional-looking store.",
          "Higher conversion rates & customer retention.",
          "Easy-to-manage backend processes.",
          "A store that grows with your business.",
        ],
      },
      finalWord: {
        content:
          "Your online store is more than just a website — it’s the foundation of your business. With our Store Setup & Management services, you get a store that not only looks great but also performs at the highest level. Whether you’re launching your first product line or scaling an established brand, we ensure your store is ready to win in the competitive e-commerce space. Let us set up and manage your store so you can focus on growing your business.",
        buttonText: "Let us set up and manage your store",
      },
    },
  },
  {
    title: "Amazon, eBay, Etsy, TikTok Shop, Vinted",
    kicker: "Marketplace Management",
    description:
      "We help you succeed on Amazon, eBay, Etsy, and TikTok Shop with precision marketplace management.",
    points: [
      "AI-optimized product listings for visibility",
      "Auto-repricing & buy-box tactics",
      "Inventory sync across platforms",
    ],
    icon: <ShoppingCart size={16} />,
    slug: "marketplace-management",
    detailPageData: {
      hero: {
        kicker: "Marketplace Management",
        title: "Maximize Sales Across Multiple Marketplaces",
        description:
          "Selling on multiple marketplaces can exponentially increase your reach, but managing listings, inventory, pricing, and reviews across different platforms is complex and time-consuming. Our Marketplace Management services streamline this process, combining automation, AI-driven strategies, and expert oversight to help your products perform at their best on every marketplace. From Amazon to TikTok Shop, Etsy to Vinted, we ensure your brand maintains a strong presence, drives sales, and maintains operational efficiency across all channels.",
      },
      sections: [
        {
          title: "Amazon Management",
          description:
            "Amazon is one of the largest and most competitive marketplaces in the world. Our Amazon management services include: AI-powered listing SEO to improve search rankings and visibility. Buy-box optimization to increase the likelihood of winning sales. Automated repricing to stay competitive without manual adjustments. Review mining and response automation to maintain credibility and boost customer trust. We also monitor inventory levels to prevent stockouts and reduce lost sales, ensuring your Amazon store runs efficiently and profitably.",
          icon: DollarSign,
        },
        {
          title: "eBay Management",
          description:
            "eBay’s auction-style and fixed-price listings require a different approach. We provide: Optimized product titles, descriptions, and keywords for better discoverability. Automated pricing adjustments to remain competitive in the marketplace. Inventory syncing across eBay and other platforms to prevent overselling. Review monitoring and response management to maintain high seller ratings. Our goal is to increase visibility, conversions, and customer satisfaction while minimizing operational overhead.",
          icon: ShoppingCart,
        },
        {
          title: "Etsy Management",
          description:
            "Etsy is ideal for handmade, custom, and unique products. Our Etsy management services include: SEO-friendly product listings and tags for maximum exposure. Listing scheduling and inventory tracking for multiple products. AI-assisted keyword research to target high-traffic search terms. Review management and automated customer engagement to strengthen brand reputation. We help your Etsy shop stand out and attract buyers who value your creativity and craftsmanship.",
          icon: SwatchBook,
        },
        {
          title: "TikTok Shop Management",
          description:
            "TikTok Shop is a growing marketplace that blends e-commerce with social media. Our services include: Creating SEO-optimized listings for TikTok’s algorithm. Tracking trends to align product offerings with popular content. Managing inventory and pricing to ensure competitive performance. Engaging with customers via automated review responses and promotions. By leveraging TikTok’s unique platform, we help your products gain visibility and drive conversions through social-driven commerce.",
          icon: Users,
        },
        {
          title: "Vinted Management",
          description:
            "Vinted focuses on second-hand and vintage items, appealing to environmentally conscious shoppers. Our Vinted management services include: Optimizing listings with keywords and images to attract buyers. Syncing inventory to prevent overselling across multiple platforms. Managing customer interactions and review responses to build trust. Pricing strategies to remain competitive in the second-hand marketplace. We ensure your Vinted shop operates smoothly, enhancing sales while maintaining a professional and trustworthy presence.",
          icon: Truck,
        },
        {
          title: "AI-Driven Automation Across Platforms",
          description:
            "Across all marketplaces, we leverage AI tools to: Optimize listings for search and conversions. Auto-reprice products based on demand, competition, and stock levels. Manage inventory to ensure synchronization and prevent overselling. Monitor reviews and automate responses to maintain a strong reputation. This automation reduces manual workload, increases efficiency, and helps you focus on scaling your business.",
          icon: Brain,
        },
      ],
      whyChoose: {
        title: "Why Marketplace Management Matters",
        points: [
          {
            text: "Expand reach by selling on multiple platforms without extra complexity.",
          },
          {
            text: "Increase sales with optimized listings, pricing, and buy-box strategies.",
          },
          {
            text: "Maintain operational efficiency with inventory sync and automation.",
          },
          {
            text: "Enhance customer trust with review management and timely responses.",
          },
          {
            text: "Stay competitive with AI-driven insights and real-time adjustments.",
          },
        ],
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Platform Audit",
            description:
              "Analyze current marketplace performance and identify improvement areas.",
          },
          {
            text: "Listing Optimization",
            description:
              "Create SEO-friendly product titles, descriptions, and tags.",
          },
          {
            text: "Inventory & Pricing Automation",
            description: "Sync stock and implement auto-repricing tools.",
          },
          {
            text: "Review & Reputation Management",
            description: "Monitor and respond to reviews automatically.",
          },
          {
            text: "Analytics & Reporting",
            description:
              "Track performance across all marketplaces and optimize strategies.",
          },
          {
            text: "Continuous Optimization",
            description:
              "Adjust listings, promotions, and pricing based on AI-driven insights.",
          },
        ],
      },
      finalWord: {
        content:
          "Selling across multiple marketplaces can unlock massive growth, but only if managed strategically. Our Marketplace Management services combine expertise, automation, and AI insights to help your products shine on Amazon, eBay, Etsy, TikTok Shop, Vinted, and beyond. Let us simplify your marketplace operations, boost sales, and maintain your brand’s reputation across all channels.",
        buttonText: "Let us simplify your marketplace operations",
      },
    },
  },
  {
    title: "Supplier Vetting, MOQs & 3PL",
    kicker: "Sourcing & Fulfillment",
    description:
      "We ensure reliable products, suppliers, and logistics to avoid stock issues and keep your business running smoothly.",
    points: [
      "Trusted suppliers MOQ control",
      "Demand forecasting & auto-reorder alerts",
      "Dropshipping & wholesale workflows",
    ],
    icon: <Truck size={16} />,
    slug: "sourcing-fulfillment",
    detailPageData: {
      hero: {
        kicker: "Sourcing & Fulfillment",
        title: "Build a Reliable Supply Chain That Never Lets You Down",
        description:
          "In e-commerce, your supply chain is the backbone of your business. Even the best online store with great products and stunning design can fail if sourcing and fulfillment aren’t managed properly. Customers expect fast shipping, consistent product quality, and always-available inventory. That’s where we come in. Our Sourcing & Fulfillment services are designed to take the stress out of supply chain management while ensuring your business runs smoothly and efficiently. We handle everything — from finding trustworthy suppliers to setting up automated fulfillment workflows — so you can focus on growing your brand, not worrying about logistics.",
      },
      sections: [
        {
          title: "Supplier Vetting, MOQs & 3PL Partnerships",
          description:
            "Choosing the right supplier can make or break your business. That’s why we start with detailed supplier vetting. We evaluate suppliers based on product quality, reliability, certifications, and past performance. This ensures you don’t risk working with unreliable partners. Managing Minimum Order Quantities (MOQs) is another key part of our service. We help you balance supplier requirements with your budget and forecasted sales so you don’t over-commit or understock. For brands scaling quickly, we also connect you with 3PL (third-party logistics) partners for professional warehousing and fulfillment solutions. The result? A supply chain that is stable, cost-effective, and ready to grow with your business.",
          icon: Handshake,
        },
        {
          title: "AI-Assisted Supplier Scoring & Forecasting",
          description:
            "Traditional sourcing often relies on guesswork. We eliminate that risk by using AI-assisted supplier scoring systems. These systems evaluate suppliers based on delivery times, defect rates, responsiveness, and pricing competitiveness. This allows us to recommend the best partners for your specific business needs. We also use demand forecasting models to predict inventory needs. By analyzing past sales data, seasonal trends, and customer behavior, we ensure you order the right products at the right time. Our system also generates auto-reorder alerts so you never face stockouts, which means no lost sales and happier customers. We don’t just manage suppliers — we turn sourcing into a growth strategy.",
          icon: Brain,
        },
        {
          title: "Dropshipping & Wholesale Workflows",
          description:
            "Every business model has different fulfillment needs. That’s why we design custom workflows for both dropshipping and wholesale operations. Dropshipping: We integrate with suppliers who ship directly to your customers, cutting down your overhead costs. Our systems ensure fast routing, branded packaging options, and inventory visibility. Wholesale: For brands selling in bulk, we set up workflows that streamline purchase orders, manage bulk inventory, and ensure timely deliveries to distributors and retailers. No matter your model, we create a fulfillment system that supports efficiency and scalability.",
          icon: Store,
        },
        {
          title: "PO Automation & Quality Control Plans",
          description:
            "Managing purchase orders manually is time-consuming and prone to errors. That’s why we implement PO automation to simplify the process. With automated systems, orders are placed with suppliers as soon as stock reaches a defined threshold. This minimizes delays, prevents human error, and keeps your supply chain moving smoothly. We also put in place quality control (QC) plans to protect your brand reputation. These include inspection checklists, random product checks, and supplier accountability measures. This ensures your customers receive products that meet your standards every single time.",
          icon: Files,
        },
      ],
      whyChoose: {
        title: "Why This Matters for Your Business",
        points: [
          {
            text: "Avoid costly stockouts with smart forecasting and reorder alerts.",
          },
          {
            text: "Reduce risks by only working with vetted, reliable suppliers.",
          },
          { text: "Save time with automation handling repetitive tasks." },
          {
            text: "Scale faster by having fulfillment systems ready for growth.",
          },
          { text: "Protect your reputation with strict QC measures." },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "One of our clients faced constant delays and lost orders because of poor supplier coordination. After we stepped in, we introduced AI-based supplier scoring, switched them to a more reliable vendor, and automated their purchase order process. Within three months, their fulfillment speed improved by 42%, stockouts dropped by 75%, and customer complaints were nearly eliminated. Today, their brand reputation is stronger, and their repeat orders have increased significantly.",
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Assessment & Planning",
            description:
              "Understand your current sourcing and fulfillment challenges.",
          },
          {
            text: "Supplier Vetting & Selection",
            description: "Identify the most reliable suppliers and partners.",
          },
          {
            text: "Workflow Setup",
            description: "Design tailored dropship or wholesale systems.",
          },
          {
            text: "Automation Integration",
            description: "Implement PO automation, alerts, and forecasting.",
          },
          {
            text: "Ongoing Management",
            description:
              "Continuous QC checks, supplier scoring, and adjustments.",
          },
        ],
      },
      finalWord: {
        content:
          "Your supply chain is more than just logistics — it’s the promise you make to your customers. With our Sourcing & Fulfillment services, you get reliable suppliers, automated workflows, and the confidence that your business can deliver on that promise every single day. Let us handle your sourcing and fulfillment so you can focus on growing your brand.",
        buttonText: "Let us handle your sourcing and fulfillment",
      },
    },
  },
  {
    title: "Smart Routing & Tracking",
    kicker: "Order Processing & Logistics",
    description:
      "A seamless order experience builds customer trust. We design logistics systems that ensure speed, accuracy, and visibility:",
    points: [
      "Smart routing for faster delivery",
      "Automated returns processing.",
      "Fraud detection & prevention",
    ],
    icon: <Truck size={16} />,
    slug: "order-processing-logistics",
    detailPageData: {
      hero: {
        kicker: "Order Processing & Logistics",
        title: "Delivering More Than Just Orders — Delivering Trust",
        description:
          "In e-commerce, the moment a customer places an order is where your promises meet reality. Fast, accurate, and reliable order processing isn’t just an operational need — it’s what builds customer trust and repeat business. Shoppers today expect real-time updates, quick deliveries, and simple return options. If any part of this process fails, you risk losing customers for good. That’s where our Order Processing & Logistics solutions come in. We create seamless systems that manage everything from order routing and shipment tracking to returns and fraud prevention — ensuring every order is an opportunity to impress.",
      },
      sections: [
        {
          title: "Smart Routing & Tracking",
          description:
            "A major challenge in logistics is ensuring products are shipped quickly and cost-effectively. With our smart routing system, every order is automatically directed to the nearest warehouse or fulfillment center. This reduces shipping times, lowers delivery costs, and helps you meet the growing demand for same-day or next-day delivery. But speed alone isn’t enough — customers want visibility. That’s why we provide branded tracking portals with proactive updates. Instead of relying on generic courier updates, your customers get a professional, branded experience that keeps them informed every step of the way. We also use predictive systems to forecast ETAs (Estimated Time of Arrival) and identify potential exceptions (like weather delays or high traffic periods) before they cause dissatisfaction. The result? Faster shipping, lower costs, and happier customers.",
          icon: Rocket,
        },
        {
          title: "Returns Automation That Works for You",
          description:
            "Returns are often seen as a headache, but when managed properly, they can actually build customer loyalty. We set up automated return systems that make the process simple for both you and your customers. This eliminates manual back-and-forth, reduces errors, and ensures customers feel supported even when things don’t go as planned. A smooth return process doesn’t just save you time — it makes customers more likely to shop with you again.",
          points: [
            {
              text: "Customers receive a branded returns portal with clear steps.",
            },
            {
              text: "Return approvals and shipping labels are generated automatically.",
            },
            {
              text: "Inventory is updated in real time once items are processed.",
            },
          ],
          icon: Store,
        },
        {
          title: "Fraud Prevention & Security Flags",
          description:
            "Fraudulent orders can drain profits and harm your brand reputation. Our logistics systems are equipped with AI-powered fraud detection tools that flag suspicious activity before it becomes a problem. From mismatched addresses and unusual order patterns to payment irregularities, our system automatically detects and holds risky transactions for review. This proactive approach significantly reduces chargebacks, fraudulent returns, and revenue loss — giving you peace of mind while ensuring legitimate customers get smooth service.",
          icon: SearchCheck,
        },
      ],
      whyThisMatters: {
        title: "Why This Matters for Your Business",
        points: [
          {
            text: "Faster deliveries with smart routing to the closest warehouse.",
          },
          {
            text: "Better customer experience through branded tracking and proactive updates.",
          },
          {
            text: "Lower costs by optimizing shipping routes and reducing delays.",
          },
          {
            text: "Streamlined returns that save time and keep customers loyal.",
          },
          {
            text: "Fraud protection that safeguards revenue and reputation.",
          },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "A mid-sized apparel brand we worked with struggled with delayed shipments and manual return processes. Customers often complained about slow updates, and the business faced growing chargebacks due to fraudulent orders. We implemented smart routing to distribute orders from the nearest fulfillment centers, reducing average delivery time from 5 days to 2. We also introduced a branded tracking system that provided real-time updates and an automated returns portal that simplified the process for customers. On top of that, our fraud detection reduced chargebacks by 60% in just three months. The result? Higher customer satisfaction scores, repeat purchases, and a significant drop in operational headaches.",
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Assessment",
            description:
              "Review your current order management and logistics setup.",
          },
          {
            text: "Smart Routing Setup",
            description:
              "Connect warehouses, couriers, and platforms for faster delivery.",
          },
          {
            text: "Branded Tracking Integration",
            description: "Give customers real-time, professional updates.",
          },
          {
            text: "Returns Automation",
            description:
              "Simplify the process for both you and your customers.",
          },
          {
            text: "Fraud Detection & Prevention",
            description: "Add AI-powered security to your system.",
          },
          {
            text: "Ongoing Monitoring",
            description: "Continuously optimize routes, costs, and efficiency.",
          },
        ],
      },
      finalWord: {
        content:
          "Order processing and logistics are more than backend operations — they are the customer experience. By ensuring every order is processed quickly, tracked transparently, and delivered reliably, we help you turn first-time buyers into loyal customers. Let us streamline your order processing and logistics so your brand always delivers on its promises.",
        buttonText: "Let us streamline your order processing and logistics",
      },
    },
  },
  {
    title: "SEO, Paid Social & CRO",
    kicker: "Digital Marketing & Ads",
    description:
      "We combine creativity with data-driven strategies to deliver measurable results. Our digital marketing solutions cover:",
    points: [
      "SEO & paid ads powered by AI",
      "Audience modeling & smart budget.",
      "Conversion optimization to maximize ROI",
    ],
    icon: <LineChart size={16} />,
    slug: "digital-marketing-ads",
    detailPageData: {
      hero: {
        kicker: "Digital Marketing & Ads",
        title: "Marketing That Delivers Measurable Results",
        description:
          "In today’s digital-first world, visibility is everything. Even the best products or services won’t sell if your target audience can’t find you. That’s why our Digital Marketing & Ads services focus on creating campaigns that not only reach the right people but also convert them into loyal customers. We combine data-driven strategies with creative storytelling to maximize ROI and grow your brand sustainably. Whether your goal is to drive traffic, increase sales, or boost brand awareness, we offer full-service marketing solutions designed to deliver measurable results.",
      },
      sections: [
        {
          title: "SEO: Be Found, Be Chosen",
          description:
            "Search Engine Optimization (SEO) remains one of the most cost-effective ways to attract qualified traffic. We go beyond basic keyword stuffing by using AI-powered keyword research, competitor analysis, and content optimization to ensure your website ranks higher for relevant searches. By ensuring your website is both user-friendly and search engine-ready, we help you attract organic traffic that is more likely to convert.",
          points: [
            {
              text: "On-page optimization — meta tags, headings, image alt text, and internal linking for better search rankings.",
            },
            {
              text: "Technical SEO audits — page speed, mobile responsiveness, and crawlability checks.",
            },
            {
              text: "Content strategy & optimization — creating and updating high-performing pages based on user intent and search trends.",
            },
          ],
          icon: SearchCheck,
        },
        {
          title: "Paid Social: Reach the Right Audience",
          description:
            "Running ads without precision targeting is wasted spend. We build paid social campaigns on platforms like Facebook, Instagram, TikTok, and LinkedIn, combining AI-powered audience modeling and creative generation to reach the right people at the right time. Every ad is designed not just to be seen, but to generate clicks, leads, and conversions.",
          points: [
            {
              text: "Budget pacing & fatigue detection — ensures your campaigns remain effective over time without overspending.",
            },
            {
              text: "AI-generated creatives — images, videos, and ad copy tailored for maximum engagement.",
            },
            {
              text: "Audience segmentation & retargeting — reach potential buyers at every stage of the funnel.",
            },
          ],
          icon: DollarSign,
        },
        {
          title: "Conversion Rate Optimization (CRO): Turn Traffic Into Sales",
          description:
            "Attracting visitors is only half the battle — converting them is where growth happens. Our CRO strategies use AI insights, heatmaps, and user behavior tracking to identify friction points in your funnel. We then run impact-ranked test ideas (A/B tests, landing page experiments, CTA optimizations) to continuously improve conversion rates. From improving checkout processes to optimizing landing pages, we ensure every interaction maximizes the chance of conversion.",
          icon: LineChart,
        },
        {
          title: "Impact-Ranked Test Ideas: Continuous Improvement",
          description:
            "Marketing is never static. Trends change, audiences evolve, and platforms update their algorithms. Our approach includes impact-ranked test ideas, meaning we prioritize experiments based on expected impact rather than guesswork.",
          points: [
            {
              text: "Test ad creatives with high engagement potential first.",
            },
            { text: "Optimize headlines and CTAs that influence purchases." },
            {
              text: "Adjust audience segments based on real-time performance data.",
            },
          ],
          icon: CheckCircle,
        },
      ],
      whyChoose: {
        title: "Why This Matters for Your Business",
        points: [
          {
            text: "Maximize ROI by targeting the right audience with high-performing campaigns.",
          },
          {
            text: "Increase visibility across search engines and social platforms.",
          },
          {
            text: "Turn traffic into revenue with CRO and data-driven optimizations.",
          },
          {
            text: "Stay ahead of trends with AI insights and continuous testing.",
          },
          {
            text: "Save time and resources by automating research, targeting, and creative generation.",
          },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "One client in the lifestyle e-commerce space struggled with low engagement and rising ad costs. We implemented AI-powered audience modeling, optimized creatives, and ran impact-ranked A/B tests on ad copy and landing pages. Within 90 days, their Facebook ad ROI increased by 72%, organic traffic from SEO improved by 45%, and conversion rates on key landing pages increased by 38%. This example demonstrates the power of combining strategic planning, AI insights, and continuous testing to deliver measurable growth.",
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Strategy & Audit",
            description:
              "Assess current digital presence, marketing performance, and goals.",
          },
          {
            text: "SEO & Content Optimization",
            description:
              "Improve search visibility with keyword research and content updates.",
          },
          {
            text: "Paid Campaign Setup",
            description:
              "AI-targeted audiences, creative development, and budget planning.",
          },
          {
            text: "CRO & Testing",
            description:
              "Identify bottlenecks and run high-impact experiments.",
          },
          {
            text: "Monitoring & Optimization",
            description: "Continuous performance analysis and improvements.",
          },
        ],
      },
      finalWord: {
        content:
          "Digital marketing is not just about traffic; it’s about turning attention into revenue. With our Digital Marketing & Ads services, you get campaigns that are strategic, data-driven, and consistently optimized to deliver real results. Let us help your brand reach the right audience, convert more customers, and grow sustainably.",
        buttonText: "Let us help your brand reach the right audience",
      },
    },
  },
  {
    title: "Automation & Personalization",
    kicker: "Email, SMS & CRM",
    description:
      "Personalized communication builds loyalty — we help you automate it without losing the human touch. Our services include:",
    points: [
      "AI segmentation & personalization",
      "Cart recovery & win-back",
      "Seamless CRM integration",
    ],
    icon: <Mail size={16} />,
    slug: "email-sms-crm",
    detailPageData: {
      hero: {
        kicker: "Email, SMS & CRM",
        title:
          "Build Stronger Customer Relationships Through Automation & Personalization",
        description:
          "In today’s competitive e-commerce landscape, engaging your customers at the right time with the right message can make all the difference. Our Email, SMS & CRM services focus on automation, personalization, and predictive strategies to turn first-time buyers into loyal, repeat customers. We don’t just send messages — we craft meaningful, targeted communications that increase engagement, conversions, and lifetime value. Every touchpoint, from abandoned cart emails to personalized replenishment reminders, is designed to enhance the customer journey and grow revenue.",
      },
      sections: [
        {
          title: "AI-Powered Customer Segmentation",
          description:
            "Understanding your customers is the first step toward effective communication. We use AI-driven segmentation techniques such as RFM (Recency, Frequency, Monetary) analysis and churn risk predictions to categorize customers based on behavior and purchase patterns. By sending the right message to the right audience, you increase relevance, engagement, and conversions while reducing unsubscribes.",
          points: [
            {
              text: "Identify high-value customers and provide VIP treatment.",
            },
            {
              text: "Target at-risk customers with re-engagement campaigns.",
            },
            { text: "Customize promotions and content for specific groups." },
          ],
          icon: Brain,
        },
        {
          title: "Persona-Based Copywriting & Replenishment Triggers",
          description:
            "Generic messages rarely convert. We create persona-based copy tailored to different customer types, ensuring communications resonate personally. From playful, lifestyle-oriented messaging to professional, product-focused content, each message speaks directly to your audience. In addition, we implement replenishment triggers, automatically notifying customers when it’s time to restock or reorder a product. This not only increases sales but also enhances convenience, keeping your brand top-of-mind.",
          icon: BookMarked,
        },
        {
          title: "Predictive Lifetime Value & CRM Syncing",
          description:
            "Our systems integrate seamlessly with your CRM, ensuring that every email, SMS, or push notification is backed by customer data. Using predictive lifetime value (LTV) modeling, we can prioritize high-value segments, focus marketing efforts efficiently, and forecast future revenue. This creates a unified, intelligent communication system that grows with your business.",
          points: [
            {
              text: "Automated flows based on behavior (purchase history, browsing, engagement).",
            },
            {
              text: "Real-time updates to customer profiles with every interaction.",
            },
            {
              text: "Centralized data for all your marketing and sales channels.",
            },
          ],
          icon: PieChart,
        },
        {
          title: "Abandoned Cart & Win-Back Flows",
          description:
            "A significant portion of potential revenue is lost when customers abandon their carts or stop engaging. We implement automated abandoned cart sequences that gently remind customers to complete their purchase, often with personalized incentives. For customers who haven’t purchased in a while, win-back flows re-engage them with tailored offers, reminders of products they viewed, or updates on new arrivals. These automated flows reduce revenue leakage and strengthen long-term customer loyalty.",
          icon: ShoppingCart,
        },
      ],
      whyChoose: {
        title: "Why This Matters for Your Business",
        points: [
          {
            text: "Increase conversions through targeted, behavior-driven messaging.",
          },
          {
            text: "Boost repeat purchases with personalized replenishment and win-back flows.",
          },
          { text: "Save time by automating email and SMS campaigns." },
          {
            text: "Enhance customer loyalty through relevant, meaningful interactions.",
          },
          {
            text: "Make data-driven decisions with AI segmentation and predictive LTV models.",
          },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "One of our e-commerce clients faced low repeat purchase rates and abandoned carts of up to 30%. We implemented AI-driven segmentation, automated abandoned cart emails, and personalized replenishment triggers. Within three months: Repeat purchase rates increased by 42% Abandoned cart recovery improved by 35% Customer engagement rates for emails and SMS doubled. This case demonstrates the power of combining automation, personalization, and CRM integration to grow revenue and customer satisfaction simultaneously.",
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Customer Analysis & Segmentation",
            description: "Understand behaviors, value, and churn risk.",
          },
          {
            text: "Persona-Based Messaging Setup",
            description: "Craft messages that speak to different segments.",
          },
          {
            text: "CRM Integration",
            description: "Ensure real-time data syncing and automation.",
          },
          {
            text: "Automated Flow Implementation",
            description:
              "Abandoned carts, win-back campaigns, and replenishment triggers.",
          },
          {
            text: "Monitoring & Optimization",
            description:
              "Analyze performance, refine messaging, and improve conversion rates continuously.",
          },
        ],
      },
      finalWord: {
        content:
          "Email, SMS, and CRM automation are no longer optional — they are essential tools to nurture customer relationships and drive sustainable growth. With our services, you get a data-driven, personalized communication system that boosts sales, strengthens loyalty, and keeps your customers engaged. Let us help you turn every customer interaction into an opportunity for growth.",
        buttonText: "Let us help you turn every customer interaction",
      },
    },
  },
  {
    title: "24/7 AI Chat + Human",
    kicker: "Support & Personalization",
    description:
      "Customer experience defines your brand — we make sure it shines. With a mix of AI and human support, we deliver:",
    points: [
      "24/7 AI chatbots with human support",
      "Sentiment-based routing for priority cases",
      "Guided selling with AI recommendations",
    ],
    icon: <Users size={16} />,
    slug: "support-personalization",
    detailPageData: {
      hero: {
        kicker: "Support & Personalization",
        title: "Deliver Exceptional Customer Support Around the Clock",
        description:
          "In today’s competitive e-commerce landscape, providing excellent customer support is no longer optional — it’s a key differentiator. Customers expect fast, accurate, and personalized responses at any time, whether they’re asking about a product, tracking an order, or requesting a refund. Our Support & Personalization services combine AI-powered automation with human oversight to deliver seamless support that enhances customer satisfaction and strengthens loyalty. With our system, your customers never wait in line, and your team can focus on complex tasks rather than repetitive inquiries. This creates a win-win: happier customers and more efficient operations.",
      },
      sections: [
        {
          title: "24/7 AI Chat With Human Oversight",
          description:
            "We use advanced AI chat technology to provide instant support around the clock. Whether your customers are shopping at midnight or during peak hours, AI responds immediately, answering common questions and routing more complex cases to your human support team. This blended approach not only improves the customer experience but also reduces response times and operational stress for your support team.",
          points: [
            { text: "Speed: Instant answers for routine queries." },
            {
              text: "Accuracy: AI handles standard issues, humans manage nuanced cases.",
            },
            {
              text: "Consistency: Customers receive clear, helpful responses every time.",
            },
          ],
          icon: Users,
        },
        {
          title: "Sentiment Routing & Intelligent Prioritization",
          description:
            "Not all customer interactions are the same. Our sentiment routing system uses AI to detect the tone and urgency of messages, automatically prioritizing tickets that require immediate attention. This ensures every customer feels valued and that critical issues are resolved quickly, protecting your brand reputation.",
          points: [
            {
              text: "Frustrated customers reporting a failed delivery are flagged for urgent handling.",
            },
            {
              text: "Routine product questions are routed to AI for instant resolution.",
            },
            {
              text: "High-value customers receive personalized attention based on their purchase history.",
            },
          ],
          icon: Brain,
        },
        {
          title: "Macros for Refunds, Reships, and Common Requests",
          description:
            "Manual handling of refunds, reships, and standard inquiries is time-consuming and prone to errors. We create automated macros to streamline these repetitive tasks. By automating routine tasks, your team can focus on resolving complex issues, while customers enjoy faster, smoother service.",
          points: [
            { text: "Generate refunds or replacement orders instantly." },
            {
              text: "Provide templated yet personalized responses to frequently asked questions.",
            },
            {
              text: "Maintain accurate records in your CRM for accountability and reporting.",
            },
          ],
          icon: Files,
        },
        {
          title: "Quiz-Driven Guided Selling & Personalization",
          description:
            "Beyond support, our platform enhances the shopping experience through quiz-driven guided selling. Customers answer a few simple questions, and the system recommends products tailored to their preferences, previous purchases, and behavior patterns. Personalization not only boosts sales but also fosters loyalty by showing customers that your brand understands their needs.",
          points: [
            { text: "Higher engagement and interaction on your website." },
            {
              text: "Personalized recommendations that increase average order value.",
            },
            {
              text: "Reduced decision fatigue for customers, making the buying process easier and more enjoyable.",
            },
          ],
          icon: LayoutDashboard,
        },
      ],
      whyChoose: {
        title: "Why Support & Personalization Matters",
        points: [
          {
            text: "Increase customer satisfaction: Faster, accurate responses create positive experiences.",
          },
          {
            text: "Boost loyalty and repeat purchases: Personalized interactions build trust.",
          },
          {
            text: "Improve operational efficiency: AI handles routine tasks, freeing your team for high-value work.",
          },
          {
            text: "Enhance brand reputation: Professional, consistent support increases customer confidence.",
          },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "One of our clients in the lifestyle e-commerce sector faced slow response times during high-traffic periods, leading to frustrated customers and lost sales. By integrating AI chat, sentiment routing, and automated macros, we reduced average response times from 24 hours to under 10 minutes. Customers received instant solutions for common requests, while the team focused on complex issues. Within three months, customer satisfaction scores increased by 45%, and repeat purchases grew by 30%.",
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Assessment & Setup",
            description:
              "Evaluate current support workflows and identify automation opportunities.",
          },
          {
            text: "AI Integration",
            description: "Implement 24/7 AI chat and sentiment analysis.",
          },
          {
            text: "Automation & Macros",
            description: "Create templates for refunds, reships, and FAQs.",
          },
          {
            text: "Guided Selling",
            description:
              "Set up quiz-driven product recommendations and personalization flows.",
          },
          {
            text: "Monitoring & Optimization",
            description:
              "Continuously track performance, improve AI responses, and refine personalization strategies.",
          },
        ],
      },
      finalWord: {
        content:
          "Support is more than solving problems — it’s about creating an experience that builds trust and loyalty. Our Support & Personalization services combine technology and human touch to provide seamless, responsive, and meaningful customer interactions. Deliver smarter support, delight your customers, and watch loyalty grow.",
        buttonText: "Deliver smarter support",
      },
    },
  },
  {
    title: "Dashboards, Anomalies & Fraud",
    kicker: "Analytics & Security",
    description:
      "Every decision should be backed by data and protected by security. We offer:",
    points: [
      "Custom dashboards (ads, store & CRM)",
      "AI anomaly detection & fraud prevention",
      "Chargeback reduction strategies",
    ],
    icon: <PieChart size={16} />,
    slug: "analytics-security",
    detailPageData: {
      hero: {
        kicker: "Analytics & Security",
        title: "Insights and Protection for Sustainable Business Growth",
        description:
          "In e-commerce, data is your most powerful asset, and security is your most crucial defense. Understanding how your ads, store, and customer data perform, while safeguarding your business from fraud and anomalies, can be the difference between steady growth and costly setbacks. Our Analytics & Security services provide comprehensive solutions that unify your data, detect potential risks, and protect revenue — all powered by AI and actionable insights. Whether you’re running a single online store or managing multiple sales channels, our systems turn raw data into meaningful intelligence and ensure your operations remain secure and efficient.",
      },
      sections: [
        {
          title: "Unified Dashboards for Complete Visibility",
          description:
            "One of the biggest challenges businesses face is scattered data across platforms — from ad campaigns to e-commerce stores to CRM systems. Our unified dashboards consolidate all critical data in one place, giving you a clear, real-time overview of your performance metrics. With a unified dashboard, you gain full visibility into your business operations, enabling smarter decisions and faster responses to changing market conditions.",
          points: [
            {
              text: "Centralized insights: See store performance, ad ROI, and CRM interactions without switching platforms.",
            },
            {
              text: "Real-time reporting: Access live data to make quick, informed decisions.",
            },
            {
              text: "Customizable KPIs: Track metrics that matter most to your business, including revenue, conversions, CAC, and ROAS.",
            },
          ],
          icon: LayoutDashboard,
        },
        {
          title: "Anomaly Detection & Performance Alerts",
          description:
            "Unexpected shifts in performance — like sudden drops in conversions or spikes in ad costs — can signal problems that need immediate attention. Our AI-powered anomaly detection identifies these irregularities before they escalate into bigger issues. Proactive monitoring ensures your business stays on track and minimizes costly disruptions.",
          points: [
            {
              text: "Detect a sudden increase in Customer Acquisition Cost (CAC) or a drop in Return on Ad Spend (ROAS).",
            },
            {
              text: "Identify unusual patterns in store activity or customer behavior that may indicate operational issues.",
            },
            {
              text: "Receive alerts in real time, allowing you to respond quickly and prevent revenue loss.",
            },
          ],
          icon: Brain,
        },
        {
          title: "Fraud Prevention & AI Risk Scoring",
          description:
            "Fraud and chargebacks are persistent threats in e-commerce. Our AI-driven risk scoring evaluates orders and transactions in real time to detect suspicious behavior. This proactive approach significantly reduces chargebacks, fraudulent returns, and revenue loss — giving you peace of mind while ensuring legitimate customers get smooth service.",
          points: [
            { text: "Monitoring payment patterns for anomalies." },
            { text: "Flagging high-risk transactions before fulfillment." },
            { text: "Reducing chargebacks and protecting profit margins." },
          ],
          icon: SearchCheck,
        },
      ],
      whyChoose: {
        title: "Why Analytics & Security Matter",
        points: [
          {
            text: "Make informed decisions with centralized, real-time dashboards.",
          },
          {
            text: "Respond proactively to performance drops or operational anomalies.",
          },
          { text: "Reduce fraud and chargebacks through AI risk scoring." },
          {
            text: "Optimize ad spend and revenue by identifying trends and inefficiencies.",
          },
          {
            text: "Protect your business reputation with secure and monitored operations.",
          },
        ],
      },
      example: {
        title: "Real-World Example",
        content:
          "A growing e-commerce brand experienced sudden spikes in CAC and a series of chargebacks, which were hurting profitability. By implementing our unified analytics dashboards and AI-driven fraud detection, the team could monitor ad spend in real time, detect anomalies, and flag risky orders before processing. Within two months: Chargebacks decreased by 65%. ROAS stabilized across campaigns. Operational decisions were faster and more accurate due to clear, centralized data. This example shows how combining analytics with AI-powered security can directly impact revenue and operational efficiency.",
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Data Assessment & Integration",
            description:
              "Connect all platforms (ads, store, CRM) into a single view.",
          },
          {
            text: "Dashboard Setup",
            description: "Build custom, real-time reporting for key metrics.",
          },
          {
            text: "Anomaly Detection",
            description:
              "Implement AI tools to monitor trends and detect irregularities.",
          },
          {
            text: "Fraud Prevention",
            description:
              "Apply AI risk scoring to prevent chargebacks and fraudulent orders.",
          },
          {
            text: "Ongoing Monitoring & Optimization",
            description:
              "Continuously refine dashboards, alerts, and security rules for maximum impact.",
          },
        ],
      },
      finalWord: {
        content:
          "Analytics and security are the foundation of a healthy, growing e-commerce business. With our Analytics & Security services, you gain full visibility into your operations, proactive protection against fraud, and actionable insights to drive performance. Turn data into actionable intelligence and protect your revenue with smart analytics and AI-driven security.",
        buttonText: "Turn data into actionable intelligence",
      },
    },
  },
  {
    title: "Identity, Packaging & Content",
    kicker: "Branding & Creative",
    description:
      "Your brand identity is more than a logo — it’s the story customers connect with. We design creative solutions that stand out:",
    points: [
      "Logo systems & style guides",
      "Packaging design with reflects quality",
      "AI concept boards & mockups",
    ],
    icon: <SwatchBook size={16} />,
    slug: "branding-creative",
    detailPageData: {
      hero: {
        kicker: "Branding & Creative",
        title: "Crafting Identities That Leave a Lasting Impression",
        description:
          "Your brand is more than a logo — it’s the story, experience, and trust that your business communicates to the world. Our Branding & Creative services are designed to help businesses define and express their unique identity, create visually compelling packaging, and develop consistent, memorable content that resonates with customers. From startups launching their first product to established businesses looking to refresh their image, we focus on building a brand that not only looks great but also connects emotionally with your audience.",
      },
      sections: [
        {
          title: "Logo Systems That Speak Your Brand Language",
          description:
            "A strong logo is the cornerstone of brand recognition. We design logo systems that reflect your brand’s personality, values, and positioning. Whether you need a single logo or a complete logo system with variations for different platforms, we ensure your visual identity is cohesive, professional, and instantly recognizable.",
          points: [
            {
              text: "Understanding your brand’s mission and target audience.",
            },
            {
              text: "Exploring creative directions with AI concept boards for inspiration.",
            },
            {
              text: "Designing versatile logos that work across digital, print, and packaging applications.",
            },
          ],
          icon: SwatchBook,
        },
        {
          title: "Packaging Design That Sells",
          description:
            "Packaging is more than a protective layer — it’s a marketing tool that influences buying decisions. We design custom packaging solutions that are not only functional but also visually striking. Effective packaging tells your story, differentiates your product from competitors, and enhances the customer experience from unboxing to usage.",
          points: [
            {
              text: "Concept boards and mockups to visualize ideas before production.",
            },
            {
              text: "Integration of brand colors, typography, and messaging.",
            },
            {
              text: "Lifestyle mockups to demonstrate how packaging interacts in real-world settings.",
            },
          ],
          icon: Files,
        },
        {
          title: "Comprehensive Style Guides",
          description:
            "Consistency across all brand touchpoints is essential for trust and professionalism. We develop comprehensive style guides that document your visual and verbal identity, including: Logo usage rules and variations. Brand color palettes and typography. Imagery style, tone of voice, and messaging guidelines. These guides ensure that every piece of content, from social media posts to product packaging, maintains the integrity of your brand and reinforces recognition across channels.",
          icon: BookMarked,
        },
        {
          title: "Content Creation With AI Assistance",
          description:
            "We also provide content production services that align with your brand’s identity. Using AI concept boards, we generate ideas for visuals, graphics, and campaigns. Our team then refines these concepts into polished, high-quality assets that capture attention and drive engagement. By combining creativity with AI insights, we deliver content that is visually appealing, strategic, and results-driven.",
          points: [
            {
              text: "Lifestyle mockups: Show your products in real-life scenarios to connect with your audience.",
            },
            {
              text: "Digital & print-ready content: From social media visuals to brochures, we create assets that are ready to use.",
            },
            {
              text: "Campaign-ready designs: Integrate branding, packaging, and messaging into cohesive marketing campaigns.",
            },
          ],
          icon: Brain,
        },
      ],
      whyChoose: {
        title: "Why Branding & Creative Matters",
        points: [
          {
            text: "Builds recognition: A consistent visual identity makes your brand memorable.",
          },
          {
            text: "Drives sales: Attractive packaging and compelling content influence customer decisions.",
          },
          {
            text: "Maintains professionalism: Style guides ensure every communication is polished and cohesive.",
          },
          {
            text: "Supports marketing efforts: Strong branding amplifies campaigns and social presence.",
          },
          {
            text: "Creates emotional connection: Design and messaging resonate with customers, building loyalty.",
          },
        ],
      },
      process: {
        title: "Our Process",
        steps: [
          {
            text: "Brand Discovery",
            description: "Understand your vision, values, and target audience.",
          },
          {
            text: "Logo & Identity Design",
            description:
              "Create logo systems and visual elements aligned with your brand.",
          },
          {
            text: "Packaging & Mockups",
            description:
              "Develop packaging concepts and lifestyle mockups for visualization.",
          },
          {
            text: "Style Guide Development",
            description:
              "Document brand rules for consistent application across channels.",
          },
          {
            text: "Content Production",
            description:
              "Generate and refine high-quality digital and print assets.",
          },
          {
            text: "Review & Finalization",
            description:
              "Ensure all materials align with your brand strategy and vision.",
          },
        ],
      },
      finalWord: {
        content:
          "Your brand deserves to be memorable, recognizable, and cohesive. With our Branding & Creative services, you get a complete visual identity system, professional packaging, and content that tells your story and engages your audience. Let us help you craft a brand that leaves a lasting impression and drives real business growth.",
        buttonText: "Let us help you craft a brand",
      },
    },
  },
];
export default allServicesData;