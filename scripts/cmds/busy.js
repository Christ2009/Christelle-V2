if (!global.client.busyList)
	global.client.busyList = {};

module.exports = {
	config: {
		name: "busy",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "bật chế độ không làm phiền, khi bạn được tag bot sẽ thông báo",
			en: "turn on do not disturb mode, when you are tagged bot will notify"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [để trống | <lý do>]: bật chế độ không làm phiền"
				+ "\n   {pn} off: tắt chế độ không làm phiền",
			en: "   {pn} [empty | <reason>]: turn on do not disturb mode"
				+ "\n   {pn} off: turn off do not disturb mode"
		}
	},

	langs: {
		vi: {
			turnedOff: "✅ | Đã tắt chế độ không làm phiền",
			turnedOn: "✅ | Đã bật chế độ không làm phiền",
			turnedOnWithReason: "✅ | Đã bật chế độ không làm phiền với lý do: %1",
			turnedOnWithoutReason: "✅ | Đã bật chế độ không làm phiền",
			alreadyOn: "Hiện tại người dùng %1 đang bận",
			alreadyOnWithReason: "Hiện tại người dùng %1 đang bận với lý do: %2"
		},
		en: {
			turnedOff: "✅ | 𝙇𝙚 𝙢𝙤𝙙𝙚 𝙉𝙚 𝙥𝙖𝙨 𝙙é𝙧𝙖𝙣𝙜𝙚𝙧 𝙖 é𝙩é 𝙙é𝙨𝙖𝙘𝙩𝙞𝙫é 👻",
			turnedOn: "✅ | 𝙇𝙚 𝙢𝙤𝙙𝙚 𝙉𝙚 𝙥𝙖𝙨 𝙙é𝙧𝙖𝙣𝙜𝙚𝙧 𝙖 é𝙩é 𝙖𝙘𝙩𝙞𝙫é 👻",
			turnedOnWithReason: "✅ | 𝙇𝙚 𝙢𝙤𝙙𝙚 𝙉𝙚 𝙥𝙖𝙨 𝙙é𝙧𝙖𝙣𝙜𝙚𝙧 𝙖 é𝙩é 𝙖𝙘𝙩𝙞𝙫é 𝙥𝙤𝙪𝙧 𝙪𝙣𝙚 𝙧𝙖𝙞𝙨𝙤𝙣: %1",
			turnedOnWithoutReason: "✅ | 𝙇𝙚 𝙢𝙤𝙙𝙚 𝙉𝙚 𝙥𝙖𝙨 𝙙é𝙧𝙖𝙣𝙜𝙚𝙧 𝙖 é𝙩é 𝙖𝙘𝙩𝙞𝙫é 👻",
			alreadyOn: "𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 %1 𝙚𝙨𝙩 𝙖𝙘𝙩𝙪𝙚𝙡𝙡𝙚𝙢𝙚𝙣𝙩 𝙤𝙘𝙘𝙪𝙥é 👻",
			alreadyOnWithReason: "𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 %1 𝙚𝙨𝙩 𝙖𝙘𝙩𝙪𝙚𝙡𝙡𝙚𝙢𝙚𝙣𝙩 𝙤𝙘𝙘𝙪𝙥é 𝙖𝙫𝙚𝙘 𝙧𝙖𝙞𝙨𝙤𝙣: %2"
		}
	},

	onStart: async function ({ args, message, event, getLang, usersData }) {
		const { senderID } = event;

		if (args[0] == "off") {
			const { data } = await usersData.get(senderID);
			delete data.busy;
			await usersData.set(senderID, data, "data");
			return message.reply(getLang("turnedOff"));
		}

		const reason = args.join(" ") || "";
		await usersData.set(senderID, reason, "data.busy");
		return message.reply(
			reason ?
				getLang("turnedOnWithReason", reason) :
				getLang("turnedOnWithoutReason")
		);
	},

	onChat: async ({ event, message, getLang }) => {
		const { mentions } = event;

		if (!mentions || Object.keys(mentions).length == 0)
			return;
		const arrayMentions = Object.keys(mentions);

		for (const userID of arrayMentions) {
			const reasonBusy = global.db.allUserData.find(item => item.userID == userID)?.data.busy || false;
			if (reasonBusy !== false) {
				return message.reply(
					reasonBusy ?
						getLang("alreadyOnWithReason", mentions[userID].replace("@", ""), reasonBusy) :
						getLang("alreadyOn", mentions[userID].replace("@", "")));
			}
		}
	}
};
