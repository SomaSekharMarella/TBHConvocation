# Quick Setup Guide

## Step 1: Get WalletConnect Project ID

1. Go to [https://cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Sign up / Log in
3. Create a new project
4. Copy your Project ID

## Step 2: Update Configuration

Open `src/config/wagmi.js` and replace `YOUR_PROJECT_ID` with your actual Project ID:

```javascript
projectId: 'your-actual-project-id-here',
```

## Step 3: Install & Run

```bash
npm install
npm run dev
```

## Step 4: Test Wallet Connection

1. Open the app in your browser
2. Click "Connect Wallet to Enter"
3. Connect with MetaMask or any supported wallet
4. The story will unlock after connection

## Troubleshooting

### Wallet not connecting?
- Make sure you have MetaMask or another Web3 wallet installed
- Check that your Project ID is correct
- Try refreshing the page

### Build errors?
- Make sure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Styling issues?
- Ensure Tailwind CSS is properly configured
- Check that `index.css` includes Tailwind directives

## Next Steps

- Add your photos to `public/images/` folder
- Customize colors in `tailwind.config.js`
- Modify story content in `src/content/story.js`

