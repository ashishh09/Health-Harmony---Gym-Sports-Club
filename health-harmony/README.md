# Health & Harmony Gym and Sports Club

A premium, modern, fully responsive static website for **Health & Harmony Gym and Sports Club** (हेल्थ ॲंड हार्मनी जिम), located in Chhatrapati Sambhajinagar, Maharashtra.

## 🌟 Highlights

- **Pure Static Architecture**: Built using clean semantic **HTML5**, **CSS3**, and **Vanilla JavaScript** (Zero frameworks, zero backend, zero database).
- **Instant Preview & Hosting**: Runs directly by opening `index.html` in any web browser. Ready for one-click deployment to GitHub Pages, Netlify, or Vercel.
- **Real Authentic Club Photography**: Displays 12 real photographs of the club's gym floor, indoor swimming pool, badminton court, cardio area, turf zone, and reception lounge.
- **WhatsApp Integration**: Generates instant pre-filled WhatsApp enquiries with membership details and visitor queries directly to `+91 85988 59853`.
- **Interactive Lightbox & Gallery**: Filter images by category (Gym, Swimming, Sports, Lifestyle) with keyboard-navigable full-screen lightbox.
- **Performance & Responsive**: 100% responsive across mobile, tablet, and desktop viewports with dark mode athletic aesthetic (`#080808` black with `#C6FF00` neon lime accents).

## 📍 Business Details

- **Name**: Health & Harmony (हेल्थ ॲंड हार्मनी जिम)
- **Category**: Fitness Center / Health & Sports Club
- **Google Rating**: 4.3 ★ (185+ Verified Reviews)
- **Address**: Opposite Kittos Appe, Town Center, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003.
- **Phone / WhatsApp**: +91 85988 59853
- **Closing Time**: 9:30 PM (Daily)

## 📁 Project Structure

```
health-harmony/
│
├── index.html          # Main HTML structure with all semantic sections
├── css/
│   └── style.css       # Clean, modern CSS styling and responsive layout
├── js/
│   └── script.js       # Interactive gallery filter, lightbox, mobile nav, form
├── images/             # Local optimized high-resolution photographs
│   ├── hero.jpg
│   ├── gym.jpg
│   ├── swimming.jpg
│   ├── badminton.jpg
│   ├── squash.jpg
│   ├── sauna.jpg
│   ├── trainer.jpg
│   ├── cardio.jpg
│   ├── reception.jpg
│   ├── exterior.jpg
│   └── gallery/        # Categorized gallery photos
└── README.md
```

## 🚀 How to Run & Deploy

### 1. Run Locally
Simply open `index.html` in any web browser (Google Chrome, Safari, Firefox, Edge). No server installation or node_modules required!

## 🚀 How to Deploy on Vercel

You can deploy this website to Vercel using any of these 3 simple methods:

### Method 1: Import via GitHub (Recommended)
1. Push your project repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Select your GitHub repository.
5. Vercel automatically detects the configuration from `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your website will be live with a free `.vercel.app` domain and automatic HTTPS SSL in under 30 seconds!

### Method 2: Deploy using Vercel CLI
If you have Node.js and the Vercel CLI installed on your machine:
```bash
# In the project directory:
npx vercel
```
Follow the interactive prompts (press Enter to accept default settings).

### Method 3: Deploy as Pure Static Site (Zero Build)
If you prefer deploying the standalone `health-harmony/` static directory:
1. In Vercel, set **Framework Preset** to **Other** (or Static).
2. Set **Root Directory** to `health-harmony` (or leave as root if deploying directly).
3. Leave **Build Command** blank.
4. Click **Deploy**.

---

### Other Hosting Options

- **GitHub Pages**: Go to repo **Settings** > **Pages** > Select branch `main` / root `/` > Save.
- **Netlify**: Drag and drop the `dist/` or `health-harmony/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
