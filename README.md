# Vibe Coding Template

A super simple starter pack for non-tech people to start vibe coding in just **5 minutes**. No complex setup, no overwhelming features - just the essentials to get you building and shipping quickly.

## 🚀 5-Minute Setup

1. **Clone & Download template**

   Open `Terminal` app on your computure in the folder where you want to install the project.

   Type in the following command and press enter:

   ```bash
   git clone https://github.com/stnikolaus/vibe-coding-template
   ```

2. **Open project in Cursor**

   1. Open Cursor
   2. Click "File" > "Open Folder..."
   3. Select the folder with your project
   4. Open Terminal in Cursor by pressing Cmd/Ctrl + J
   5. Run the command:
   ```bash
   pnpm install
   ```

3. **Create Supabase Database**
   
   **Step 1**: Go to [supabase.com](https://supabase.com) and create a free account
   
   **Step 2**: Create a new project
   - Click "New Project"
   - Choose your organization
   - Give your project a name (e.g., "my-vibe-app")
   - Set (or generate) a database password (**save this!**)
   - Choose a region close to you
   - Click "Create new project"
   
   **Step 3**: Get your database Postgre URL
   - Open your project
   - Click "Connect" in the top navigation panel
   - Find "Transaction pooler" and copy it
   - It looks like: `postgresql://postgres.xyz:[YOUR-PASSWORD]@aws-0-eu-north-1.pooler.supabase.com:6543/postgres`
   - Update the URL with your password you saved earlier

4. **Setup Database**
   
   Run this command in Cursor Terminal:
   ```bash
   pnpm db:setup
   ```
   Choose "remote Postgres instance" option - click "R" and enter.
   
   When prompted, paste your Supabase Postgre database URL. And click enter.

   Then run:
   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```
   
   This should install your database tables and create the first admin user.

5. **Start Coding**

   Now, you are ready to go!
   
   Run this command in Cursor Terminal to start the app on your computer:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) and you're ready to vibe code! 🎉

## Default Login

After setup, you can log in with:
- **Email**: `test@test.com`
- **Password**: `admin123`


## What You Get

- ✅ **Ready-to-use dashboard** with team management
- ✅ **User authentication** (sign up, login, logout)
- ✅ **Team collaboration** (invite members, manage roles)
- ✅ **Activity tracking** (see what's happening)
- ✅ **Clean, modern UI** that looks professional
- ✅ **No payment complexity** - focus on building features

## Dashboard Overview

Your new app comes with a clean dashboard structure:

- **🏠 Home** - Your main dashboard
- **👥 Team** - Manage team members and invitations
- **⚙️ General** - Update your account info
- **📊 Activity** - See what's been happening
- **🔒 Security** - Change passwords and manage security

## Perfect For

- **Non-technical founders** who want to build something quickly
- **Solo developers** who need a solid foundation
- **Startups** that want to focus on features, not infrastructure
- **Anyone** who wants to start coding without the overwhelm

## Tech Stack (Don't Worry About This)

- **Next.js** - Modern React framework
- **Supabase** - Database and authentication (free tier available)
- **Drizzle** - Simple database management
- **shadcn/ui** - Beautiful, accessible components

## Next Steps

1. **Customize the landing page** - Make it yours
2. **Add your features** - Build what matters to your users
3. **Deploy to Vercel** - One-click deployment
4. **Add payments later** - When you're ready to monetize

## Need Help?

- Check out the code comments - they explain everything
- The structure is simple and easy to understand
- Each file has a clear purpose
- No complex abstractions or over-engineering

## Why "Vibe Coding"?

Because coding should feel good, not overwhelming. This template removes the friction and lets you focus on building something awesome. No more getting stuck on setup - just pure creation vibes! ✨

---

**Ready to start vibe coding?** Clone this repo and you'll be building in 5 minutes! 🚀


## Want to Collect Payments?

If you're ready to monetize your project and need Stripe integration, check out the [Next.js SaaS Starter](https://github.com/nextjs/saas-starter).

Note that this template:

- Requires more technical setup
- Needs a Stripe account
- Has additional complexity

We recommend starting with this simpler template first, then migrating to the SaaS starter when you're ready to handle payments. This lets you focus on building and validating your core features before dealing with payment infrastructure.