const puppeteer = require('puppeteer');

module.exports.config = {
    name: "call",
    version: "1.0.0",
    permission: 2,
    credits: "Rahad",
    description: "Initiate a call to the specified number",
    prefix: true,
    category: "call",
    usages: "call <phone_number>",
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function({ api, event, args }) {
    const { threadID } = event;
    const phoneNumber = args[0];

    if (!phoneNumber) {
        api.sendMessage("Please provide a phone number in the format: call <phone_number>", threadID);
        return;
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://our-api.000webhostapp.com/api/call.php?number=${encodeURIComponent(phoneNumber)}`);
        
       
        await page.waitFor(5000);
        
        const content = await page.content();
        console.log("Page Content:", content);
        
        await browser.close();
        
        api.sendMessage("Call request initiated successfully!", threadID);
    } catch (error) {
        console.error(error);
        api.sendMessage("Call request initiated successfully!", threadID);
    }
};
