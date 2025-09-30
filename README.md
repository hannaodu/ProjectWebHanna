


🚀 Amplify Deployment Summary

Project: Next.js Portfolio Website  
Deployment Tool:AWS Amplify Hosting  
Infrastructure: AWS CDK (Cloud Development Kit)  

 📋 Key Steps:
1. Repository Setup: GitHub repo with Next.js app in `portfolio/` folder
2. Amplify Connection: Connected Amplify to GitHub repository
3. Build Challenges:
   - Fixed folder structure issues by moving app to root
   - Resolved ESLint errors (apostrophe escaping)
   - Removed CDK infrastructure files conflicting with Next.js build
4.Custom Domain:Configured `hannadulaja.com` with SSL certificates
5. Successful Deployment: Website live at https://hannadulaja.com
   

💡 Lessons Learned:
- Keep frontend and infrastructure code separate to avoid build conflicts
- Amplify automatically handles SSL, CDN, and global deployment
- Custom domains require proper DNS configuration
- Next.js builds require careful file structure management

 🎯 Result:
Successfully deployed a production-ready portfolio website with:**
- ✅ Automatic deployments from GitHub
- ✅ Global CDN distribution  
- ✅ HTTPS/SSL encryption
- ✅ Custom domain support
- ✅ Scalable AWS infrastructure

