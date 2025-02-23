
# OpenFolio - A Stunning, Customizable Portfolio Template

![OpenFolio Demo](https://github.com/user-attachments/assets/105f401d-d0ad-4354-a727-30d3dd43debf)

Welcome to **OpenFolio**, an open-source portfolio website template designed from scratch with love and creativity. Initially built for my personal use, I decided to share this sleek, modern, and fully customizable project with the world so anyone—developers, designers, or creatives—can showcase their work in style. Powered by **Next.js**, OpenFolio is fast, SEO-optimized, and packed with features to make your portfolio stand out.

Check out the live demo: [https://openfolio.vercel.app/](https://openfolio.vercel.app/)

---

## Features

- **Beautiful Design**: A clean, modern, and professional layout crafted from scratch to impress visitors.
- **Next.js Powered**: Lightning-fast performance with server-side rendering and static site generation.
- **SEO Optimized**: Built-in meta tags and Open Graph support to boost visibility on search engines and social media.
- **Fully Customizable**: Easily tweak everything—colors, content, sections, and more—via a single `config.ts` file.
- **Responsive**: Looks amazing on all devices, from mobile to desktop.
- **Open Source**: Free for anyone to use, fork, and enhance!

---

## Why Use OpenFolio?

OpenFolio isn’t just another portfolio template—it’s a labor of love designed to help you:
- **Showcase Your Work**: Highlight projects, skills, and achievements with a polished, professional look.
- **Save Time**: Skip the design-from-scratch hassle and start with a ready-made, high-quality base.
- **Stand Out**: Impress potential employers or clients with a unique, eye-catching portfolio.
- **Own It**: Customize every detail to reflect your personal brand.

Whether you’re a developer, designer, or creative professional, OpenFolio adapts to your needs with minimal effort.

---

## Getting Started

Follow these steps to set up and customize OpenFolio for your own portfolio.

### Prerequisites
- **Node.js**: Version 14.x or higher.
- **npm** or **yarn**: For installing dependencies.
- A code editor (e.g., VS Code).

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SMKH-PRO/OpenFolio.git
   cd OpenFolio
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run Locally**: Start the development server:
   Using npm:
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

   Open your browser and visit http://localhost:3000 to see OpenFolio in action!

---

## Customization Guide

OpenFolio is designed to be fully customizable through the config.ts file located at the root of the project (config.ts). This single file controls nearly everything—your personal info, social links, projects, and more. Here’s how to make it your own:

### Step 1: Open config.ts
Open the config.ts file in your code editor. It exports a config object with all the settings.

### Step 2: Edit Your Details
Update these sections to personalize your portfolio:

#### General Info
```typescript
export const config = {
  url: "https://yourwebsite.com", // Your portfolio URL (e.g., your Vercel deployment)
  name: "Your Name", // Your full name
  title: "Your Job Title", // e.g., "Full-Stack Developer"
  description: "A short bio about yourself.", // Brief intro for the homepage
  email: "your.email@example.com", // Your contact email
  githubUsername: "yourusername", // Your GitHub username
  image: "/your-profile-pic.jpg", // Path to your profile picture (place in /public)
};
```

#### Social Links
Customize your social media profiles:
```typescript
socials: [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
  // Add or remove as needed (supported icons: github, linkedin, twitter, etc.)
],
```

#### Projects
Showcase your work by editing the projects array:
```typescript
projects: [
  {
    name: "Project Name",
    description: "A brief description of what it does.",
    url: "https://project-link.com",
    image: "/project-pic.jpg", // Image path (place in /public)
    tags: ["React", "Node.js"], // Tech stack used
  },
  // Add more projects as needed
],
```

#### Skills
Highlight your expertise:
```typescript
skills: ["JavaScript", "TypeScript", "React", "Node.js", "Next.js"],
```

#### Theme Colors
Match the design to your brand:
```typescript
theme: {
  primary: "#4C4CFF", // Main accent color (e.g., buttons, links)
  secondary: "#3A3A3A", // Secondary color (e.g., text, accents)
},
```

### Step 3: Add Images
Place your profile picture and project images in the /public folder.
Reference them in config.ts with relative paths (e.g., /my-pic.jpg).

### Step 4: Update Content
- **Hero Section**: The name, title, and description in config.ts update the homepage automatically.
- **Projects**: Add as many entries as you want in the projects array—they’ll display dynamically.
- **Additional Pages**: If you want to tweak the About or Contact pages, edit the corresponding files in /app (e.g., /app/about/page.tsx).

### Step 5: Test Your Changes
Run the development server (npm run dev or yarn dev) and check http://localhost:3000 to see your customized portfolio.

---

## Deploying Your Portfolio

Ready to go live? Here’s how to deploy OpenFolio:

### Option 1: Vercel (Recommended)
1. Push your customized repo to GitHub.
2. Sign up at Vercel and import your repo.
3. Vercel will detect Next.js and deploy it automatically—grab your live URL (e.g., yourname.vercel.app).

### Option 2: Other Hosting
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the /out folder to a static hosting service like Netlify or GitHub Pages.

---

## Contributing
Want to improve OpenFolio? Contributions are welcome!

1. Fork the repo.
2. Create a branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m "Add cool feature"`.
4. Push to your fork: `git push origin my-feature`.
5. Open a Pull Request—I’d love to see your enhancements!

---

## Benefits of OpenFolio
- **SEO Ready**: Built-in optimization increases your visibility online.
- **Fast & Lightweight**: Next.js ensures quick load times for a smooth user experience.
- **Flexible**: Adapts to any profession or personal style with ease.
- **Community-Driven**: Join others using and improving this template.

---

## License
OpenFolio is licensed under the MIT License. Use, modify, and share it freely!
