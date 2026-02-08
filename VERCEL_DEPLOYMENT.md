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

## Step 4: Deploy

1.  Click **"Deploy"**.
2.  Vercel will start building your project. You can watch the logs.
3.  Wait for a minute or two.
4.  **Success!** You will see a "Congratulations!" screen with a preview of your live site.
5.  Click the screenshot to visit your live URL (e.g., `belvoyage.vercel.app`).

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
