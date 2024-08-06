const fs = require("fs-extra");

module.exports = {
	config: {
		name: "getfbstate",
		aliases: ["getstate", "getcookie"],
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Lấy fbstate hiện tại",
			en: "Get current fbstate"
		},
		category: "owner",
		guide: {
			en: "   {pn}: get fbstate (appState)\n"
				+ "   {pn} [cookies|cookie|c]: get fbstate with cookies format\n"
				+ "   {pn} [string|str|s]: get fbstate with string format\n",
			vi: "   {pn}: get fbstate (appState)\n"
				+ "   {pn} [cookies|cookie|c]: get fbstate dạng cookies\n"
				+ "   {pn} [string|str|s]: get fbstate dạng string\n"
		}
	},

	langs: {
		vi: {
			success: "Đã gửi fbstate đến bạn, vui lòng kiểm tra tin nhắn riêng của bot"
		},
		en: {
			success: "𝙑𝙤𝙪𝙨 𝙖 𝙚𝙣𝙫𝙤𝙮é 𝙛𝙗𝙨𝙩𝙖𝙩𝙚, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙫é𝙧𝙞𝙛𝙞𝙚𝙧 𝙡𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙧𝙞𝙫é 𝙙𝙪 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻"
		}
	},

	onStart: async function ({ message, api, event, args, getLang }) {
		let fbstate;
		let fileName;

		if (["cookie", "cookies", "c"].includes(args[0])) {
			fbstate = JSON.stringify(api.getAppState().map(e => ({
				name: e.key,
				value: e.value
			})), null, 2);
			fileName = "cookies.json";
		}
		else if (["string", "str", "s"].includes(args[0])) {
			fbstate = api.getAppState().map(e => `${e.key}=${e.value}`).join("; ");
			fileName = "cookiesString.txt";
		}
		else {
			fbstate = JSON.stringify(api.getAppState(), null, 2);
			fileName = "appState.json";
		}

		const pathSave = `${__dirname}/tmp/${fileName}`;
		fs.writeFileSync(pathSave, fbstate);

		if (event.senderID != event.threadID)
			message.reply(getLang("success"));

		api.sendMessage({
			body: fbstate,
			attachment: fs.createReadStream(pathSave)
		}, event.senderID, () => fs.unlinkSync(pathSave));
	}
};
