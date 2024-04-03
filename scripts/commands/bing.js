module.exports.config = {
  name: "bing",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nayan",
  description: "",
  commandCategory: "Image",
  usages: "bing cat",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing cat', event.threadID, event.messageID); 

    const rndm = ['1aMDh8KssNxOR8ig9UxOMc5FTTpihcJ3Dxcpgd4CZwlDH5_zHf2kw4d9Oqf3l4PcRXXtTfnGSihZasvxUHjxACtMitrB61JdX6Su0VpQmk2r-FS1aeEvDuKt7slpeavNxyti3psi6keXS1LoeLG2SCNoYwBaZ3adCM6JnA1NGh0vHU7zSzRepufUr4pzTdYN9SI9Pvh8MCzxZRFADDfavHQ10g__1waaF6O-FSwL5bKOItl9JYRdvwLOmy0X9rD5oRO8eUDjwHDuH1r903oEMS0bGsEcAAPhHRq0oO9-9LwHgG9TFiMpFvqA5y1oIfP8_E9BsHe3lQhkDT_lYiRDxTl5ozogRCthJbpXA_NVxDRLjom02wYkO-8qNLJkz2fAmuHxy0ueAvVzmnEV9Vc6VXu_-f4OFdYpO3mtvkz_h-ZfIA185GgSdC1WSAKzuZzTVJMt9w4DSvIIn5QoY-HnVgPrkLqxQTl6MXH6GRLqITrKi1JJWABzXrQ-3Cz5tkdBGgQDAoJR4FUqTMk6gwL6sR8IwNWWnWq_f3A6qLXvng6DwsjWcMpog7aoDQ-wpPuJoTkTJ8TGxPL408P6ugF3kx2CCjoQn3WIOWEgOQ8bhgDd2FXPXdC0hsdah9iOBeVEUShBg'];  //input cooki here
    var cookie = rndm[Math.floor(Math.random() * rndm.length)];

    const res = await axios.get(`https://bing-api-5dpl.onrender.com/bing-img?key=${key}&cookie=${cookie}&prompt=${encodeURIComponent(prompt)}`);

    console.log(res.data);
    const data = res.data.result;
    const numberSearch = data.length;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
        let path = __dirname + `/cache/${num += 1}.jpg`;
        let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
        imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    await api.sendMessage({
        attachment: imgData,
        body: "Bing Search Result\n\nPrompt: " + prompt + "\n\n#Number of Images: " + numberSearch
    }, event.threadID, event.messageID); 

    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};