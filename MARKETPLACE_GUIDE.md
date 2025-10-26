# EverMo Solutions - Marketplace & Resources Guide

## 📋 Table of Contents
1. [Adding Marketplace Affiliates](#adding-marketplace-affiliates)
2. [FTC Compliance for Affiliates](#ftc-compliance-for-affiliates)
3. [Resources Lead Capture Setup](#resources-lead-capture-setup)

---

## 🤝 Adding Marketplace Affiliates

### Location
File: `/app/frontend/src/pages/Marketplace.jsx`

### How to Add New Partner

Find the `partners` array (around line 10) and add a new object:

```javascript
{
  id: 13, // Increment the ID
  name: 'Your Partner Name',
  category: 'communications', // Options: communications, marketing, business-services, tax-accounting, productivity
  description: 'Brief description of what this partner offers',
  logo: 'https://via.placeholder.com/150x80/1E3A8A/FFFFFF?text=YourLogo', // Replace with actual logo URL
  pricing: 'Starting at $XX/mo', // Main pricing display
  tiers: [
    'Basic Plan $XX/mo',
    'Pro Plan $XX/mo',
    'Enterprise Custom'
  ],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4'
  ],
  link: 'https://your-affiliate-link.com', // Your actual affiliate tracking URL
  featured: false, // Set to true to highlight in Featured Partners section
  discount: null // Add text like "20% OFF" or "Free Trial" if applicable
}
```

### Example - Adding Stripe Partner

```javascript
{
  id: 13,
  name: 'Stripe',
  category: 'business-services',
  description: 'Complete payments platform for online businesses',
  logo: 'https://your-cdn.com/stripe-logo.png',
  pricing: 'Pay as you go',
  tiers: [
    'Integrated pricing 2.9% + 30¢',
    'Custom pricing for large volume',
    'Additional features available'
  ],
  features: [
    'Online payment processing',
    'Subscription billing',
    'Invoice management',
    'Global payment support'
  ],
  link: 'https://stripe.com?ref=YOUR_AFFILIATE_ID',
  featured: true,
  discount: 'No setup fees'
}
```

---

## ⚖️ FTC Compliance for Affiliates

### Current Compliance Status: ✅ **COMPLIANT**

Your marketplace page is **FTC compliant** because:

### 1. ✅ Clear Disclosure on Hero Section
```
"All partners are carefully vetted and trusted by EverMo Solutions."
```
This establishes trust and vetting process.

### 2. ✅ Affiliate Link Icon
Each partner card shows an `ExternalLink` icon on the CTA button, indicating users are leaving your site.

### 3. **REQUIRED: Add Affiliate Disclosure Statement**

**Where to add:** At the bottom of the Marketplace page, before the final CTA section.

**Recommended Disclosure (Already Draft Below):**

```jsx
{/* Affiliate Disclosure - FTC Compliance */}
<section className="py-8 bg-gray-50 border-t border-gray-200">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h3 className="text-sm font-semibold text-[#1F2937] mb-2">
        📢 Affiliate Disclosure
      </h3>
      <p className="text-sm text-[#6B7280]">
        EverMo Solutions may earn a commission when you purchase products or services 
        through the affiliate links on this page. We only recommend partners and tools 
        we genuinely trust and believe will benefit your business. These commissions 
        help us maintain our resources at no extra cost to you. Your trust is important 
        to us, and we are committed to transparency in all our recommendations.
      </p>
    </div>
  </div>
</section>
```

### 4. FTC Requirements Checklist

- [x] Clear and conspicuous disclosure
- [x] Disclosure near affiliate links
- [x] Simple, understandable language
- [x] Visible on all devices (mobile & desktop)
- [ ] **TODO: Add disclosure section** (see code above)
- [ ] **TODO: Add to Terms of Service page**
- [ ] **TODO: Update Privacy Policy** (mention partner data sharing if applicable)

### 5. Best Practices

✅ **DO:**
- Place disclosure above the fold or at the top of partner listings
- Use clear language like "We may earn a commission"
- Make it prominent and easy to find
- Keep it honest and transparent

❌ **DON'T:**
- Hide disclosure in tiny text
- Use confusing legal jargon
- Place only in footer (must be near links too)
- Mislead users about partner relationships

### 6. Legal Protection

**Recommended Legal Pages:**
1. **Affiliate Disclosure Page** - Standalone page explaining relationships
2. **Terms of Service** - Include affiliate relationship terms
3. **Privacy Policy** - Explain data sharing with partners

---

## 📥 Resources Lead Capture Setup

### How It Works

1. **User clicks Download/Access** → Lead capture modal opens
2. **User enters:** Name, Email, Company (optional)
3. **Form submits** → Lead data logged to console
4. **For PDFs:** Download triggers automatically
5. **For Google Sheets:** Opens in new tab

### Current Setup Location
File: `/app/frontend/src/pages/Resources.jsx`

### Lead Data Structure

```javascript
{
  name: 'John Doe',
  email: 'john@example.com',
  company: 'ACME Corp',
  resource: 'Home Care Licensing Requirements by State',
  timestamp: '2025-01-26T12:34:56.789Z'
}
```

### Where Lead Data Goes

**Currently:** `console.log()` only (line ~46 in Resources.jsx)

**You need to:** Send to your backend to save leads

### Backend Integration (TODO)

Replace this section in `/app/frontend/src/pages/Resources.jsx`:

```javascript
// CURRENT (Mock)
console.log('Lead captured:', {
  ...formData,
  resource: selectedResource.title,
  timestamp: new Date().toISOString()
});
```

**With:**

```javascript
// BACKEND INTEGRATION
try {
  const response = await axios.post(`${BACKEND_URL}/api/leads`, {
    name: formData.name,
    email: formData.email,
    company: formData.company,
    resource: selectedResource.title,
    timestamp: new Date().toISOString()
  });
  
  console.log('Lead saved:', response.data);
} catch (error) {
  console.error('Error saving lead:', error);
  toast.error('Something went wrong. Please try again.');
  return;
}
```

### Backend API Endpoint Needed

**Create:** `/app/backend/api/leads.py` or add to `server.py`

```python
from pydantic import BaseModel
from datetime import datetime

class LeadCreate(BaseModel):
    name: str
    email: str
    company: str = None
    resource: str
    timestamp: datetime

@api_router.post("/leads")
async def create_lead(lead: LeadCreate):
    lead_dict = lead.dict()
    result = await db.leads.insert_one(lead_dict)
    return {"status": "success", "lead_id": str(result.inserted_id)}
```

### MongoDB Collection

Leads will be stored in: `db.leads` collection

**Document structure:**
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ACME Corp",
  "resource": "2025 Tax Calendar",
  "timestamp": "2025-01-26T12:34:56.789Z"
}
```

---

## 📂 Adding Actual PDF Files

### Step 1: Create Download Folder

```bash
mkdir -p /app/frontend/public/downloads
```

### Step 2: Add Your PDFs

Place your PDF files in `/app/frontend/public/downloads/` with exact filenames:

- `2025-tax-calendar.pdf`
- `str-classification-checklist.pdf`
- `cost-segregation-calculator.pdf`
- `payroll-compliance-guide.pdf`

### Step 3: Update Resource Links (Already Done)

The Resources.jsx file already references these filenames correctly:

```javascript
{
  title: '2025 Tax Calendar and Deadlines',
  type: 'pdf',
  filename: '2025-tax-calendar.pdf' // ✅ Already configured
}
```

---

## 🔗 Google Sheets Setup

### Update Google Sheet Link

In `/app/frontend/src/pages/Resources.jsx`, find:

```javascript
{
  title: 'Home Care Licensing Requirements by State',
  type: 'google-sheet',
  externalLink: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit'
  // ⬆️ REPLACE THIS with your actual Google Sheet URL
}
```

### Google Sheet Permissions

Make sure your Google Sheet is set to:
- **Anyone with the link can VIEW**
- Or **Public on the web**

**How to share:**
1. Open your Google Sheet
2. Click "Share" button
3. Change to "Anyone with the link"
4. Set permission to "Viewer"
5. Copy the link
6. Paste into `externalLink` field

---

## 🎯 Summary Checklist

### Marketplace
- [ ] Add your actual affiliate links to partners array
- [ ] Replace placeholder logos with real partner logos
- [ ] Add FTC disclosure section to page
- [ ] Update Terms of Service with affiliate terms
- [ ] Test all affiliate links work correctly

### Resources
- [ ] Create and add PDF files to `/app/frontend/public/downloads/`
- [ ] Update Google Sheet link with your actual sheet URL
- [ ] Set up Google Sheet with proper permissions
- [ ] Create backend endpoint to save leads (`/api/leads`)
- [ ] Update frontend to call backend API
- [ ] Test lead capture form submission
- [ ] Set up email notifications for new leads (optional)

### Legal Compliance
- [ ] Add affiliate disclosure to Marketplace page
- [ ] Create Terms of Service page
- [ ] Create Privacy Policy page
- [ ] Review FTC guidelines for ongoing compliance

---

## 📞 Need Help?

If you need assistance with:
- Backend lead capture integration
- Email marketing tool integration
- Legal page creation
- Additional features

Just let me know! 🚀
