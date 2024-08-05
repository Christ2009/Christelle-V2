const { findUid } = global.utils;
const moment = require("moment-timezone");

module.exports = {
	config: {
		name: "ban",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			vi: "Cấm thành viên khỏi box chat",
			en: "Ban user from box chat"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [@tag|uid|link fb|reply] [<lý do cấm>|để trống nếu không có lý do]: Cấm thành viên khỏi box chat"
				+ "\n   {pn} check: Kiểm tra thành viên bị cấm và kick thành viên đó ra khỏi box chat"
				+ "\n   {pn} unban [@tag|uid|link fb|reply]: Bỏ cấm thành viên khỏi box chat"
				+ "\n   {pn} list: Xem danh sách thành viên bị cấm",
			en: "   {pn} [@tag|uid|fb link|reply] [<reason>|leave blank if no reason]: Ban user from box chat"
				+ "\n   {pn} check: Check banned members and kick them out of the box chat"
				+ "\n   {pn} unban [@tag|uid|fb link|reply]: Unban user from box chat"
				+ "\n   {pn} list: View the list of banned members"
		}
	},

	langs: {
		vi: {
			notFoundTarget: "⚠️ | Vui lòng tag người cần cấm hoặc nhập uid hoặc link fb hoặc phản hồi tin nhắn của người cần cấm",
			notFoundTargetUnban: "⚠️ | Vui lòng tag người cần bỏ cấm hoặc nhập uid hoặc link fb hoặc phản hồi tin nhắn của người cần bỏ cấm",
			userNotBanned: "⚠️ | Người mang id %1 không bị cấm khỏi box chat này",
			unbannedSuccess: "✅ | Đã bỏ cấm %1 khỏi box chat!",
			cantSelfBan: "⚠️ | Bạn không thể tự cấm chính mình!",
			cantBanAdmin: "❌ | Bạn không thể cấm quản trị viên!",
			existedBan: "❌ | Người này đã bị cấm từ trước!",
			noReason: "Không có lý do",
			bannedSuccess: "✅ | Đã cấm %1 khỏi box chat!",
			needAdmin: "⚠️ | Bot cần quyền quản trị viên để kick thành viên bị cấm",
			noName: "Người dùng facebook",
			noData: "📑 | Không có thành viên nào bị cấm trong box chat này",
			listBanned: "📑 | Danh sách thành viên bị cấm trong box chat này (trang %1/%2)",
			content: "%1/ %2 (%3)\nLý do: %4\nThời gian cấm: %5\n\n",
			needAdminToKick: "⚠️ | Thành viên %1 (%2) bị cấm khỏi box chat, nhưng bot không có quyền quản trị viên để kick thành viên này, vui lòng cấp quyền quản trị viên cho bot để kick thành viên này",
			bannedKick: "⚠️ | %1 đã bị cấm khỏi box chat từ trước!\nUID: %2\nLý do: %3\nThời gian cấm: %4\n\nBot đã tự động kick thành viên này"
		},
		en: {
			notFoundTarget: "⚠️ | 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙚𝙧 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 à 𝙗𝙖𝙣𝙣𝙞𝙧 𝙤𝙪 𝙨𝙖𝙞𝙨𝙞𝙧 𝙪𝙣 𝙡𝙞𝙚𝙣 𝙐𝙄𝘿 𝙤𝙪 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙤𝙪 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 𝙖𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 à 𝙗𝙖𝙣𝙣𝙞𝙧 👻",
			notFoundTargetUnban: "⚠️ | 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙚𝙧 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 à 𝙙é𝙗𝙖𝙣𝙣𝙞𝙧 𝙤𝙪 𝙨𝙖𝙞𝙨𝙞𝙧 𝙪𝙣 𝙡𝙞𝙚𝙣 𝙐𝙄𝘿 𝙤𝙪 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙤𝙪 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 𝙖𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 à 𝙙é𝙗𝙖𝙣𝙣𝙞𝙧.👻",
			userNotBanned: "⚠️ | 𝙇𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙖𝙫𝙚𝙘 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 %1 𝙣'𝙚𝙨𝙩 𝙥𝙖𝙨 𝙗𝙖𝙣𝙣𝙞𝙚 𝙙𝙚 𝙘𝙚𝙩𝙩𝙚 𝙗𝙤î𝙩𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻",
			unbannedSuccess: "✅ | %1 𝙙é𝙗𝙖𝙣𝙣𝙞 𝙙𝙪 𝙘𝙝𝙖𝙩 𝙚𝙣 𝙗𝙤î𝙩𝙚! 👻",
			cantSelfBan: "⚠️ | 𝙏𝙪 𝙣𝙚 𝙥𝙚𝙪𝙭 𝙥𝙖𝙨 𝙩'𝙞𝙣𝙩𝙚𝙧𝙙𝙞𝙧𝙚 👻!",
			cantBanAdmin: "❌ | 𝙑𝙤𝙪𝙨 𝙣𝙚 𝙥𝙤𝙪𝙫𝙚𝙯 𝙥𝙖𝙨 𝙗𝙖𝙣𝙣𝙞𝙧 𝙡'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝘾𝙝𝙧𝙞𝙨_𝙨𝙩𝙖𝙧𝙩! 👻",
			existedBan: "❌ | 𝘾𝙚𝙩𝙩𝙚 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙖 𝙙é𝙟à é𝙩é 𝙗𝙖𝙣𝙣𝙞𝙚 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚! 👻",
			noReason: "𝙎𝙖𝙣𝙨 𝙧𝙖𝙞𝙨𝙤𝙣 👻",
			bannedSuccess: "✅ | %1 𝙗𝙖𝙣𝙣𝙞 𝙙𝙪 𝙘𝙝𝙖𝙩 𝙚𝙣 𝙗𝙤î𝙩𝙚!",
			needAdmin: "⚠️ | 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙖 𝙗𝙚𝙨𝙤𝙞𝙣 𝙙𝙚 𝙡'𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝙡'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝘾𝙝𝙧𝙞𝙨 𝙨𝙩𝙖𝙧𝙩 𝙥𝙤𝙪𝙧 𝙚𝙭𝙥𝙪𝙡𝙨𝙚𝙧 𝙡𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙗𝙖𝙣𝙣𝙞𝙨 👻",
			noName: "𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 👻",
			noData: "📑 | 𝙄𝙡 𝙣'𝙮 𝙖 𝙖𝙪𝙘𝙪𝙣 𝙢𝙚𝙢𝙗𝙧𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙖 𝙗𝙖𝙣𝙣𝙞 𝙙𝙖𝙣𝙨 𝙘𝙚𝙩𝙩𝙚 𝙗𝙤î𝙩𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻",
			listBanned: "📑 | 𝙇𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙦𝙪𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙖 𝙗𝙖𝙣𝙣𝙞𝙨 𝙙𝙚 𝙘𝙚𝙩𝙩𝙚 𝙗𝙤𝙭 𝙘𝙝𝙖𝙩 (𝙥𝙖𝙜𝙚 %1/%2)",
			content: "%1/ %2 (%3)\𝙧𝙖𝙞𝙨𝙤𝙣: %4\nBan time: %5\n\n",
			needAdminToKick: "⚠️ | 𝙇𝙚 𝙢𝙚𝙢𝙗𝙧𝙚 %1 (%2) 𝙖 é𝙩é 𝙗𝙖𝙣𝙣𝙞 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙙𝙪 𝙘𝙝𝙖𝙩 𝙚𝙣 𝙗𝙤î𝙩𝙚, 𝙢𝙖𝙞𝙨 𝙡𝙚 𝙗𝙤𝙩 𝙣𝙚 𝙙𝙞𝙨𝙥𝙤𝙨𝙚 𝙥𝙖𝙨 𝙙𝙚 𝙡'𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝙥𝙤𝙪𝙧 𝙚𝙭𝙥𝙪𝙡𝙨𝙚𝙧 𝙘𝙚 𝙢𝙚𝙢𝙗𝙧𝙚. 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙖𝙘𝙘𝙤𝙧𝙙𝙚𝙧 𝙡'𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙖𝙪 𝙗𝙤𝙩 𝙥𝙤𝙪𝙧 𝙚𝙭𝙥𝙪𝙡𝙨𝙚𝙧 𝙘𝙚 𝙢𝙚𝙢𝙗𝙧𝙚. 👻",
			bannedKick: "⚠️ | %1 𝙖 𝙙é𝙟à é𝙩é 𝙗𝙖𝙣𝙣𝙞 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙙𝙪 𝙘𝙝𝙖𝙩 𝙚𝙣 𝙗𝙤î𝙩𝙚 👻!\nUID: %2\nReason: %3\nBan time: %4\n\n𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙖 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙦𝙪𝙚𝙢𝙚𝙣𝙩 𝙚𝙭𝙥𝙪𝙡𝙨é 𝙘𝙚 𝙢𝙚𝙢𝙗𝙧𝙚 👻"
		}
	},

	onStart: async function ({ message, event, args, threadsData, getLang, usersData, api }) {
		const { members, adminIDs } = await threadsData.get(event.threadID);
		const { senderID } = event;
		let target;
		let reason;

		const dataBanned = await threadsData.get(event.threadID, 'data.banned_ban', []);

		if (args[0] == 'unban') {
			if (!isNaN(args[1]))
				target = args[1];
			else if (args[1]?.startsWith('https'))
				target = await findUid(args[1]);
			else if (Object.keys(event.mentions || {}).length)
				target = Object.keys(event.mentions)[0];
			else if (event.messageReply?.senderID)
				target = event.messageReply.senderID;
			else
				return api.sendMessage(getLang('notFoundTargetUnban'), event.threadID, event.messageID);

			const index = dataBanned.findIndex(item => item.id == target);
			if (index == -1)
				return api.sendMessage(getLang('userNotBanned', target), event.threadID, event.messageID);

			dataBanned.splice(index, 1);
			await threadsData.set(event.threadID, dataBanned, 'data.banned_ban');
			const userName = members[target]?.name || await usersData.getName(target) || getLang('noName');

			return api.sendMessage(getLang('unbannedSuccess', userName), event.threadID, event.messageID);
		}
		else if (args[0] == "check") {
			if (!dataBanned.length)
				return;
			for (const user of dataBanned) {
				if (event.participantIDs.includes(user.id))
					api.removeUserFromGroup(user.id, event.threadID);
			}
		}

		if (event.messageReply?.senderID) {
			target = event.messageReply.senderID;
			reason = args.join(' ');
		}
		else if (Object.keys(event.mentions || {}).length) {
			target = Object.keys(event.mentions)[0];
			reason = args.join(' ').replace(event.mentions[target], '');
		}
		else if (!isNaN(args[0])) {
			target = args[0];
			reason = args.slice(1).join(' ');
		}
		else if (args[0]?.startsWith('https')) {
			target = await findUid(args[0]);
			reason = args.slice(1).join(' ');
		}
		else if (args[0] == 'list') {
			if (!dataBanned.length)
				return message.reply(getLang('noData'));
			const limit = 20;
			const page = parseInt(args[1] || 1) || 1;
			const start = (page - 1) * limit;
			const end = page * limit;
			const data = dataBanned.slice(start, end);
			let msg = '';
			let count = 0;
			for (const user of data) {
				count++;
				const name = members[user.id]?.name || await usersData.getName(user.id) || getLang('noName');
				const time = user.time;
				msg += getLang('content', start + count, name, user.id, user.reason, time);
			}
			return message.reply(getLang('listBanned', page, Math.ceil(dataBanned.length / limit)) + '\n\n' + msg);
		}

		if (!target)
			return message.reply(getLang('notFoundTarget'));
		if (target == senderID)
			return message.reply(getLang('cantSelfBan'));
		if (adminIDs.includes(target))
			return message.reply(getLang('cantBanAdmin'));

		const banned = dataBanned.find(item => item.id == target);
		if (banned)
			return message.reply(getLang('existedBan'));

		const name = members[target]?.name || (await usersData.getName(target)) || getLang('noName');
		const time = moment().tz(global.GoatBot.config.timeZone).format('HH:mm:ss DD/MM/YYYY');
		const data = {
			id: target,
			time,
			reason: reason || getLang('noReason')
		};

		dataBanned.push(data);
		await threadsData.set(event.threadID, dataBanned, 'data.banned_ban');
		message.reply(getLang('bannedSuccess', name), () => {
			if (members.some(item => item.userID == target)) {
				if (adminIDs.includes(api.getCurrentUserID())) {
					if (event.participantIDs.includes(target))
						api.removeUserFromGroup(target, event.threadID);
				}
				else {
					message.send(getLang('needAdmin'), (err, info) => {
						global.GoatBot.onEvent.push({
							messageID: info.messageID,
							onStart: ({ event }) => {
								if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
									const { TARGET_ID } = event.logMessageData;
									if (TARGET_ID == api.getCurrentUserID()) {
										api.removeUserFromGroup(target, event.threadID, () => global.GoatBot.onEvent = global.GoatBot.onEvent.filter(item => item.messageID != info.messageID));
									}
								}
							}
						});
					});
				}
			}
		});
	},

	onEvent: async function ({ event, api, threadsData, getLang, message }) {
		if (event.logMessageType == "log:subscribe") {
			const { threadID } = event;
			const dataBanned = await threadsData.get(threadID, 'data.banned_ban', []);
			const usersAdded = event.logMessageData.addedParticipants;

			for (const user of usersAdded) {
				const { userFbId, fullName } = user;
				const banned = dataBanned.find(item => item.id == userFbId);
				if (banned) {
					const reason = banned.reason || getLang('noReason');
					const time = banned.time;
					return api.removeUserFromGroup(userFbId, threadID, err => {
						if (err)
							return message.send(getLang('needAdminToKick', fullName, userFbId), (err, info) => {
								global.GoatBot.onEvent.push({
									messageID: info.messageID,
									onStart: ({ event }) => {
										if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
											const { TARGET_ID } = event.logMessageData;
											if (TARGET_ID == api.getCurrentUserID()) {
												api.removeUserFromGroup(userFbId, event.threadID, () => global.GoatBot.onEvent = global.GoatBot.onEvent.filter(item => item.messageID != info.messageID));
											}
										}
									}
								});
							});
						else
							message.send(getLang('bannedKick', fullName, userFbId, reason, time));
					});
				}
			}
		}
	}
};
