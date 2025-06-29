# Vibe Coding Template

A super simple starter pack for non-tech people to start vibe coding in just **5 minutes**. No complex setup, no overwhelming features - just the essentials to get you building and shipping quickly.

## 🚀 5-Minute Setup

1. **Clone & Install**
   ```bash
   git clone https://github.com/stnikolaus/vibe-coding-template
   cd vibe-coding-template
   pnpm install
   ```

2. **Create Supabase Database**
   
   **Step 1**: Go to [supabase.com](https://supabase.com) and create a free account
   
   **Step 2**: Create a new project
   - Click "New Project"
   - Choose your organization
   - Give your project a name (e.g., "my-vibe-app")
   - Set a database password (**save this!**)
   - Choose a region close to you
   - Click "Create new project"
   
   **Step 3**: Get your database Postgre URL
   - Open your project
   - Click "Connect" in the top navigation panel
   - Find "Transaction pooler" and copy it
   - It looks like: `postgresql://postgres.xyz:[YOUR-PASSWORD]@aws-0-eu-north-1.pooler.supabase.com:6543/postgres`
   - Update the URL with your password you saved earlier

3. **Setup Database**
   ```bash
   pnpm db:setup
   ```
   When prompted, paste your Supabase database URL.

   Then run:
   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```

4. **Start Coding**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) and you're ready to vibe! 🎉

## What You Get

- ✅ **Ready-to-use dashboard** with team management
- ✅ **User authentication** (sign up, login, logout)
- ✅ **Team collaboration** (invite members, manage roles)
- ✅ **Activity tracking** (see what's happening)
- ✅ **Clean, modern UI** that looks professional
- ✅ **No payment complexity** - focus on building features

## Default Login

After setup, you can log in with:
- **Email**: `test@test.com`
- **Password**: `admin123`

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
