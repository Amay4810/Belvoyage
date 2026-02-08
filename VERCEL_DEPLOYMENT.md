# How to Deploy BelVoyage to Vercel

You can easily deploy your `BelVoyage` website to Vercel for free. Follow these steps:

## Prerequisites
- You need a [GitHub account](https://github.com/) (which you already have).
- You need a [Vercel account](https://vercel.com/) (you can sign up using your GitHub account).

## Step 1: Push Final Changes to GitHub
Make sure all your latest changes are pushed to your GitHub repository.
*(You have already done this in the previous steps)*.

## Step 2: Import Project to Vercel

1.  **Log in to Vercel**: Go to [https://vercel.com/login](https://vercel.com/login) and log in with GitHub.
2.  **Add New Project**:
    - Click the **"Add New..."** button on your dashboard.
    - Select **"Project"**.
3.  **Import Git Repository**:
    - You should see a list of your GitHub repositories.
    - Find **`Amay4810/Belvoyage`** (or your specific repo name).
    - Click the **"Import"** button next to it.

## Step 3: Configure Project

Vercel usually detects the settings automatically for Vite/React projects, but double-check:

-   **Framework Preset**: Should be `Vite`.
-   **Root Directory**: `./` (default).
-   **Build Command**: `npm run build` (default).
-   **Output Directory**: `dist` (default).
-   **Install Command**: `npm install` (default).

**Environment Variables**:
If you used any environment variables (like for EmailJS), you need to add them here.
-   Click **"Environment Variables"**.
-   Add keys like `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, etc., and their values.

## Step 5: Add Your Custom Domain

Once your site is deployed, you can add your `belvoyage.com` (or any other) domain:

1.  Go to your project dashboard on Vercel.
2.  Click the **Settings** tab at the top.
3.  Click **Domains** in the left sidebar.
4.  Enter your domain name (e.g., `belvoyage.com`) in the input field and click **Add**.
5.  **Configure DNS**:
    -   Vercel will show you the DNS records you need to add.
    -   Log in to where you bought your domain (GoDaddy, Namecheap, Google Domains, etc.).
    -   Add the **A Record** (usually pointing to `76.76.21.21`) and **CNAME Record** (usually `cname.vercel-dns.com`) as shown by Vercel.
6.  Wait for propagation (usually minutes, sometimes up to 24 hours). Vercel will automatically generate an SSL certificate for HTTPS.

---

## Troubleshooting

-   **Build Failures**: If the build fails, check the logs. Common issues are linting errors or missing dependencies.
-   **Rounting Issues (404 on refresh)**: Vercel usually handles this for Vite apps automatically. If you get 404s when refreshing pages like `/about`, you might need to add a `vercel.json` file to your project root with the following content:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

(I haven't added this file yet as it's often not needed for standard Vite deployments on Vercel, but keep it in mind if you face issues).
