# LA CAMILLE - Shopify Store Setup Guide (A to Z)

Complete guide to setting up your luxury Egyptian lingerie and pajamas Shopify store with the custom La Camille theme.

---

## TABLE OF CONTENTS

1. [Initial Setup](#1-initial-setup)
2. [Theme Installation](#2-theme-installation)
3. [Store Configuration](#3-store-configuration)
4. [Product Setup](#4-product-setup)
5. [Collection Creation](#5-collection-creation)
6. [Navigation Setup](#6-navigation-setup)
7. [Payment & Shipping](#7-payment--shipping)
8. [Domain & Launch](#8-domain--launch)
9. [Customization Tips](#9-customization-tips)
10. [Maintenance](#10-maintenance)

---

## 1. INITIAL SETUP

### Step 1: Create Your Shopify Account

1. Go to **[shopify.com](https://www.shopify.com)**
2. Click **"Start free trial"**
3. Enter your email address
4. Create a password
5. Enter your store name: **"La Camille"** (or variations if taken)
6. Answer the questions about your business:
   - **What will you sell?** → Apparel/Clothing
   - **Industry?** → Fashion & Apparel
   - **Revenue goal?** → Select your target
7. Click **"Create my store"**

### Step 2: Complete Your Store Details

1. Enter your personal information:
   - Full name
   - Address (Egypt or your business location)
   - Phone number
   - Business name (if registered)
2. Choose your **store purpose**: Selling online
3. Set your **time zone**: Egypt (GMT+2) or your location

---

## 2. THEME INSTALLATION

### Option A: Using the La Camille Theme Files

1. **Navigate to Themes**:
   - From your Shopify admin, go to **Online Store** → **Themes**

2. **Upload the Theme**:
   - You need to create a ZIP file first:
     - Put all theme files in a folder
     - Compress/ZIP the entire folder
     - Click **"Upload theme"** button
     - Select the ZIP file
     - Click **"Upload"**

3. **Publish the Theme**:
   - Once uploaded, click **"Publish"** on the La Camille theme
   - Click **"View your store"** to see the live site

### Option B: Using Shopify CLI (Advanced)

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme folder
cd la-camille-theme

# Login to Shopify
shopify login

# Push theme to your store
shopify theme push --theme=La Camille
```

---

## 3. STORE CONFIGURATION

### Step 1: Basic Settings

1. **General Settings**:
   - Go to **Settings** → **General**
   - **Store name**: La Camille
   - **Store email**: Your business email
   - **Store address**: Your business address

2. **Store Currency**:
   - Scroll to **Standards and formats**
   - **Store currency**: Select **EGP** (Egyptian Pound) or your preferred currency
   - **Currency format**: EGP {{amount}}

3. **Units of Measurement**:
   - **Weight**: kg
   - **Volume**: ml
   - **Dimensions**: cm

### Step 2: Online Store Settings

1. **Domain**:
   - Go to **Online Store** → **Domains**
   - Your default domain: `your-store.myshopify.com`

2. **Theme Customization**:
   - Go to **Online Store** → **Themes**
   - Click **"Customize"** on La Camille theme
   - Configure theme settings (colors, fonts, etc.)

---

## 4. PRODUCT SETUP

### Step 1: Create Product Categories

For La Camille, create these product types:

**Main Categories:**
- Lingerie
  - Bras
  - Panties
  - Bodysuits
  - Sleep Bras
- Pajamas
  - Sleep Sets
  - Nightgowns
  - Robes
  - Loungewear

### Step 2: Add Your First Product

1. **Navigate to Products**:
   - Go to **Products** → **Add product**

2. **Product Details**:
   ```
   Title: Silk Lace Sleep Set - Champagne
   Description: [Write a compelling product description]
   Product type: Pajamas / Sleep Sets
   Vendor: La Camille
   Tags: New, Silk, Luxury, Sleep Set
   ```

3. **Media (Images)**:
   - **Image requirements**:
     - Minimum 800x800px (square)
     - Recommended: 2048x2048px
     - PNG or JPG format
     - White or neutral background works best
   - **Upload multiple images** (main + angles + details)
   - **Add alt text** for SEO

4. **Pricing**:
   - **Price**: Your selling price (e.g., 2,500 EGP)
   - **Compare at price**: Original price if on sale (optional)
   - **Cost per item**: Your wholesale cost (for profit tracking)
   - **Charge tax**: Enable if applicable

5. **Inventory**:
   - **SKU**: Unique identifier (e.g., LC-SLK-CHP-001)
   - **Barcode** (if applicable)
   - **Inventory policy**: Continue selling when out of stock
   - **Quantity**: Stock available

6. **Shipping**:
   - **Requires shipping**: Yes
   - **Weight**: Product weight in kg
   - **Country of origin**: Egypt

7. **Variants** (Size & Color):

   For each size/color combination:
   - Size: XS, S, M, L, XL
   - Color: Champagne, Blush, Cream, etc.

   **Example variant structure**:
   ```
   Option 1: Size (S, M, L, XL)
   Option 2: Color (Champagne, Blush, Cream)

   Variant 1: S / Champagne - 2,500 EGP
   Variant 2: S / Blush - 2,500 EGP
   Variant 3: M / Champagne - 2,500 EGP
   ... and so on
   ```

8. **SEO**:
   - **Page title**: Optimized title
   - **Meta description**: 160-char description for Google
   - **URL handle**: auto-generated from title

9. **Save Product**

### Step 3: Bulk Import (If you have many products)

1. **Use CSV Import**:
   - Download Shopify's CSV template
   - Fill in product details
   - Go to **Products** → **Import**
   - Upload CSV file

---

## 5. COLLECTION CREATION

### Step 1: Create Collections

**Automated Collections:**

1. **Lingerie Collection**:
   - Go to **Products** → **Collections**
   - Click **"Create collection"**
   - Collection type: **Automated**
   - Title: **Lingerie**
   - Conditions: **Product type is equal to Lingerie**
   - Save

2. **Pajamas Collection**:
   - Create another automated collection
   - Title: **Pajamas**
   - Conditions: **Product type is equal to Pajamas**
   - Save

**Manual Collections:**

1. **New Arrivals**:
   - Collection type: **Manual**
   - Title: **New Arrivals**
   - Add products manually
   - Sort: **Manually**

2. **Best Sellers**:
   - Collection type: **Manual**
   - Title: **Best Sellers**
   - Add top products

3. **Sale Items**:
   - Collection type: **Automated**
   - Title: **Sale**
   - Conditions: **Compare at price is greater than 0**

---

## 6. NAVIGATION SETUP

### Step 1: Create Main Menu

1. **Go to Navigation**:
   - **Online Store** → **Navigation**
   - Click **"Main menu"**

2. **Add Menu Items**:

   ```
   Menu Structure:
   ├── Home
   ├── Shop ▼
   │   ├── All Products
   │   ├── Lingerie
   │   ├── Pajamas
   │   └── New Arrivals
   ├── Collections ▼
   │   ├── Best Sellers
   │   └── Sale
   ├── About Us
   ├── Contact
   └── Account
   ```

3. **Add Each Item**:
   - Click **"Add menu item"**
   - **Name**: Display text
   - **Link**: Select destination

   Example:
   - **Name**: Lingerie
   - **Link**: Collections → Lingerie

### Step 2: Create Footer Menu

1. Click **"Footer"** menu
2. Add links:

   ```
   ├── Customer Care
   │   ├── Shipping Info
   │   ├── Returns
   │   ├── Size Guide
   │   └── FAQ
   ├── About
   │   ├── Our Story
   │   ├── Sustainability
   │   └── Contact
   └── Legal
       ├── Privacy Policy
       └── Terms of Service
   ```

---

## 7. PAYMENT & SHIPPING

### Step 1: Payment Setup

1. **Go to Payments**:
   - **Settings** → **Payments**

2. **Activate Payment Providers**:

   **For Egypt:**
   - **PayMob** - Popular in Egypt
   - **Fawry** - Egyptian payment network
   - **Cash on Delivery** - Essential for Egypt
   - **Shopify Payments** (if available)

   **International:**
   - **Shopify Payments** (Credit cards)
   - **PayPal**
   - **Apple Pay / Google Pay**

3. **Capture payments**: Automatically

### Step 2: Shipping Setup

1. **Go to Shipping**:
   - **Settings** → **Shipping and delivery**

2. **Shipping Zones**:

   **Egypt Zone:**
   - Click **"Create shipping zone"**
   - Name: **Egypt**
   - Countries: Egypt
   - Add shipping rates:
     - **Standard**: 50 EGP (5-7 business days)
     - **Express**: 100 EGP (2-3 business days)
     - **Free shipping**: Orders over 2,000 EGP

   **International Zone:**
   - Create zone for other countries
   - Rates based on carrier calculated rates

3. **Package Settings**:
   - Default package weight: 0.5 kg
   - Package dimensions: Set your box sizes

---

## 8. DOMAIN & LAUNCH

### Step 1: Get a Custom Domain

1. **Buy a Domain**:
   - Go to **Online Store** → **Domains**
   - Click **"Buy new domain"**
   - Search: **lacamille.com** (or .com.eg)
   - Purchase if available (~$15/year)

2. **Connect Domain**:
   - If bought elsewhere (GoDaddy, Namecheap):
     - Go to your domain provider
     - Update DNS records:
       ```
       A record: @ → 23.227.38.32
       CNAME: www → shops.myshopify.com
       ```

### Step 2: Remove Password Protection

1. **Go to Preferences**:
   - **Online Store** → **Preferences**

2. **Password Protection**:
   - Uncheck **"Enable password"**
   - Click **"Save"**

### Step 3: Test Your Store

**Pre-Launch Checklist:**

- [ ] All products uploaded with correct prices
- [ ] Product images look good
- [ ] Navigation works properly
- [ ] Payment test transaction completed
- [ ] Shipping rates configured
- [ ] Mobile view tested
- [ ] Contact form works
- [ ] Legal pages created (Privacy, Terms)
- [ ] Social media links added
- [ ] Logo and branding consistent

---

## 9. CUSTOMIZATION TIPS

### Theme Customization

1. **Colors**:
   - Go to **Online Store** → **Themes** → **Customize**
   - **Theme settings** → **Colors**
   - Adjust soft neutrals if desired

2. **Typography**:
   - **Theme settings** → **Typography**
   - Select heading and body fonts

3. **Homepage Sections**:
   - Customize hero parallax section
   - Update storytelling images
   - Configure collections displayed

4. **Logo**:
   - Upload your La Camille logo
   - Recommended size: 300x100px
   - Transparent PNG format

### Additional Pages to Create

1. **About Us Page**:
   - Tell your Egyptian heritage story
   - Showcase craftsmanship
   - Add team photos

2. **Contact Page**:
   - Add contact form
   - Email address
   - Social media links
   - Business address

3. **Size Guide**:
   - Create detailed size charts
   - Include measurements
   - Add how-to-measure guide

4. **FAQ Page**:
   - Shipping questions
   - Return policy
   - Product care instructions

---

## 10. MAINTENANCE

### Daily Tasks

- Check new orders
- Process shipments
- Respond to customer emails

### Weekly Tasks

- Update inventory
- Add new products
- Review analytics

### Monthly Tasks

- Analyze sales data
- Update best sellers
- Review and optimize SEO
- Check slow-moving products

### Marketing Recommendations

1. **Social Media**:
   - Instagram: Post product photos daily
   - Facebook: Create business page
   - TikTok: Behind-the-scenes content

2. **Email Marketing**:
   - Collect customer emails
   - Send newsletters with new arrivals
   - Abandoned cart recovery

3. **Instagram Shop**:
   - Connect Instagram catalog
   - Tag products in posts
   - Enable Instagram shopping

4. **SEO**:
   - Use descriptive product titles
   - Write unique descriptions
   - Add alt text to images
   - Start a blog for content marketing

---

## SUPPORT & RESOURCES

**Shopify Help Center**: [help.shopify.com](https://help.shopify.com)

**Shopify Community**: [community.shopify.com](https://community.shopify.com)

**Theme Support**:
- Check theme documentation
- Contact developer for customizations

---

## QUICK REFERENCE

**Admin Dashboard**: `your-store.myshopify.com/admin`
**Theme Editor**: Online Store → Themes → Customize
**Product Manager**: Products → All products
**Order Manager**: Orders
**Analytics**: Analytics → Dashboard

---

## NEED HELP?

1. Shopify 24/7 Support: Available in your admin panel
2. Hire a Shopify Expert: [experts.shopify.com](https://experts.shopify.com)
3. Shopify Academy: Free courses at [learn.shopify.com](https://learn.shopify.com)

---

**Congratulations!** Your La Camille store is now ready to launch. Remember to start with quality products, excellent customer service, and gradually build your brand presence.

Good luck with your luxury Egyptian lingerie brand! 🇪🇬✨
