require('./db/config')
let autoGetLayanan = false;
let intervalId;
let antilinkEnabled = false;

const { BufferJSON, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
let defaultMarkupPercentage = 0.01;


const admin = require('firebase-admin');

const serviceAccount = require('./db/serviceAccountKey.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '', //ISI LINK DATABASE FIREBASE KAMU
});

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'));
const md5 = require('md5');
const isCreator = [nomerBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const firestore = admin.firestore();
const path = require('path');
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const jsonFilePath = './db/custom_commands.json';
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateUniqueRefID, connect } = require('./lib/myfunc')
module.exports = client = async (client, m, chatUpdate, store, db_respon_list) => {
  try {
      const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = "."
    const hariini = moment.tz('Asia/Jakarta').locale('id').format('dddd,DD MMMM YYYY');
    const productData = './db/datadigi.json';
     const productData2 = './db/datasmm.json'
    const db = admin.firestore();
    const pathUser = './db/user_down.json'
    const afk = require('./lib/afk');
    const _afk = JSON.parse(fs.readFileSync('./db/afk.json'));
      const ms = require('parse-ms');
      const fetch = require('node-fetch');
      const { createCanvas, loadImage } = require("canvas");
      const { prepareWAMessageMedia } = require('@whiskeysockets/baileys');
      const moment2 = require('moment-timezone');
      const QRCode = require('qrcode');
    let localUserData = [];
if (fs.existsSync(pathUser)) {
  const rawData = fs.readFileSync(pathUser, 'utf8');
  localUserData = JSON.parse(rawData);
}
    const isCmd = body.startsWith(prefix)
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ")
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const from = mek.key.remoteJid
    const botNumber = await client.decodeJid(client.user.id)
    const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isGroup = m.key.remoteJid.endsWith('@g.us')
    const isAfkOn = afk.checkAfkUser(m.sender, _afk)
    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    if (time1 < "23:59:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "19:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "18:00:00") {
      var ucapanWaktu1 = 'Sore'
    }
    if (time1 < "15:00:00") {
      var ucapanWaktu1 = 'Siang'
    }
    if (time1 < "10:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "05:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "03:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    const poster = fs.readFileSync('./lib/poster.jpg')
    const content = JSON.stringify(m.message)
   
    const fdocc = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
 
      message: {
        documentMessage: {
          title: `*Selamat ${ucapanWaktu1} ${pushname}*`,
          jpegThumbnail: m,
        }
      }
    }
    
  function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}  
    
   
function wrapText(text, maxLineLength) {
  const lines = [];
  while (text.length > maxLineLength) {
    let spaceIndex = text.lastIndexOf(" ", maxLineLength);
    if (spaceIndex === -1) {
      spaceIndex = maxLineLength; // Jika tidak ada spasi, potong pada batas maksimum
    }
    lines.push(text.substring(0, spaceIndex));
    text = text.substring(spaceIndex).trim(); // Hilangkan spasi yang tidak perlu
  }
  lines.push(text); // Tambahkan sisa teks
  return lines;
}

async function generateInvoiceWithBackground(data, backgroundPath, logoPath = null) {
  const canvas = createCanvas(600, 400); // Ukuran canvas
  const ctx = canvas.getContext("2d");

  // Muat gambar latar belakang
  if (backgroundPath && fs.existsSync(backgroundPath)) {
    const backgroundImage = await loadImage(backgroundPath);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Gambar latar belakang
  } else {
    // Jika tidak ada gambar latar belakang, gunakan warna solid
    ctx.fillStyle = "#FFFFFF"; // Warna default
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

 // Tambahkan logo jika ada
  if (logoPath && fs.existsSync(logoPath)) {
    const logo = await loadImage(logoPath);

    const logoOriginalWidth = logo.width; // Lebar asli logo
    const logoOriginalHeight = logo.height; // Tinggi asli logo

    // Tentukan ukuran maksimal untuk logo
    const maxWidth = 100; // Lebar maksimum untuk logo
    const maxHeight = 100; // Tinggi maksimum untuk logo

    // Hitung skala untuk menjaga rasio aspek
    const widthRatio = maxWidth / logoOriginalWidth;
    const heightRatio = maxHeight / logoOriginalHeight;

    // Pilih skala yang lebih kecil untuk mempertahankan rasio
    const scale = Math.min(widthRatio, heightRatio);

    // Hitung ukuran baru berdasarkan skala
    const logoWidth = logoOriginalWidth * scale;
    const logoHeight = logoOriginalHeight * scale;

    // Gambar logo dengan ukuran proporsional
    ctx.drawImage(logo, 10, 10, logoWidth, logoHeight); // Tempatkan logo di sudut kiri atas
  }

  // Teks invoice dan detail lainnya
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 10px Arial";

  ctx.fillText(`${data.invoice}`, 259, 134); // Lokasi invoice
  ctx.fillText(`${data.product}`, 177, 188); // Produk
  ctx.fillText(`${data.tujuan}`, 177, 228); // Tujuan
  ctx.fillText(`${data.nickname}`, 177, 270); // Nickname
  ctx.fillText(`${data.waktu}`, 86, 134); // Waktu

  // Serial number (SN), dengan pembungkus teks
  ctx.fillStyle = "#FCD201";
  const snLines = wrapText(data.sn, 50); // Maksimal 40 karakter per baris
  let startY = 313; // Titik awal untuk teks SN
  const lineSpacing = 20; // Jarak antar baris untuk SN

  snLines.forEach((line, index) => {
    ctx.fillText(line, 177, startY + (index * lineSpacing)); // Tambahkan teks pada setiap baris
  });

  // Simpan gambar invoice ke direktori
  const outputPath = path.join(__dirname, "db/invoice/", `${data.invoice}.png`);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputPath, buffer);

  return outputPath;
}


    
     async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }
      
    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, '')
      const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' + name + '\n' +
        'ORG:;\n' +
        'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' +
        'END:VCARD'
      return client.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions: mn ? mn : [] }, { quoted: quoted })
    }
    const owned = `${global.nomerOwner}@s.whatsapp.net`
    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const kiw = sender.split("@")[0]
    const isUser = pathUser.includes(m.kiw)
   const mentionByTag = (m && m.mtype === "extendedTextMessage" && m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid) ? m.message.extendedTextMessage.contextInfo.mentionedJid : [];

const Input = Array.isArray(mentionByTag) && mentionByTag.length > 0 ? mentionByTag[0] : (q ? numberQuery : false);


    if (!client.public) {
      if (!m.key.fromMe) return
    }
    if (m.message) {
      console.log(chalk.red(chalk.bgBlack('[ PESAN ] => ')), chalk.white(chalk.bgBlack(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender.split("@")[0]) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat'), chalk.magenta(`\nJam :`) + time1)
    }

    function readCustomCommands() {
      try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        return {};
      }
    }
      
      function generateSignature(key, unique_code, service, amount, valid_time) {
    return md5(key + unique_code + service + amount + valid_time + 'NewTransaction');
}
    function saveCustomCommands(commands) {
      fs.writeFileSync(jsonFilePath, JSON.stringify(commands, null, 2), 'utf8');
    }

    function addCustomCommand(groupID, command, response) {
      const customCommands = readCustomCommands();
      if (!customCommands[groupID]) {
        customCommands[groupID] = {};
      }
      customCommands[groupID][command] = response;
      saveCustomCommands(customCommands);
    }
      // Antilink
const isAntiLink = isGroup ? antilink.includes(from) : false
if (isGroup && isAntiLink && !isOwner && !isAdmins && isBotAdmins){
            if (chath.includes(`https://chat.whatsapp.com`)) {
                await client.sendMessage(from, { delete: m.key })
                m.reply(`🛡 *GROUP LINK DETECTOR* 🛡\n\nBudayakan baca Deskribsi grup ka, mari saling menghargai sesama seller`)
                let number = sender
client.groupParticipantsUpdate(from, [number], "remove")
            }
    }   
// Map untuk alias
const aliasMap = {
	// PRODUK GAMES
  "mla": { category: "Games", brand: "MOBILE LEGENDS", type: "Umum" },
  "wdp": { category: "Games", brand: "MOBILE LEGENDS", type: "Membership" },
  "mld": { category: "Games", brand: "MOBILE LEGENDS", type: "Global" },  
  "ff": { category: "Games", brand: "FREE FIRE", types: ["Umum", "Membership"] },
  "pb": { category: "Games", brand: "POINT BLANK", type: "Umum" },
  "aov": { category: "Games", brand: "ARENA OF VALOR", type: "Umum" },
  "vl": { category: "Games", brand: "Valorant", type: "Umum" },
  "dr": { category: "Games", brand: "DRAGON RAJA - SEA", type: "Umum" },  
  "sm": { category: "Games", brand: "Sausage Man", type: "Umum" },  
  "gi": { category: "Games", brand: "Genshin Impact", type: "Umum" },
  "gib": { category: "Games", brand: "Genshin Impact", type: "Membership" },  
  "8bp": { category: "Games", brand: "8 Ball Pool", type: "Cash" },
  "lol": { category: "Games", brand: "League of Legends Wild Rift", type: "Umum" },
  "coc": { category: "Games", brand: "Clash of Clans", type: "Umum" },  
  "ss": { category: "Games", brand: "Super Sus", type: "Umum" },
  "tof": { category: "Games", brand: "Tower of Fantasy", type: "Umum" },
  "hsr": { category: "Games", brand: "Honkai Star Rail", type: "Umum" },
  "udw": { category: "Games", brand: "Undawn", type: "Umum" },
  "zp": { category: "Games", brand: "Zepeto", type: "Umum" },  
  "ab": { category: "Games", brand: "Arena Breakout", type: "Umum" },  
  "msa": { category: "Games", brand: "Metal Slug Awakening", type: "Umum" },
  "hok": { category: "Games", brand: "Honor of Kings", types: ["Umum", "Membership"] },
  "bs": { category: "Games", brand: "Blood Strike", type: "Umum" },
  "bcm": { category: "Games", brand: "Black Clover M", type: "Umum" },  
  "pgr": { category: "Games", brand: "Punishing Gray Raven", type: "Umum" },
  "pubg": { category: "Games", brand: "PUBG MOBILE", type: "Umum" },
  "pubgg": { category: "Games", brand: "PUBG MOBILE", type: "global" },
 "codm": { category: "Games", brand: "Call of Duty MOBILE", type: "Umum" },
    "lm": { category: "Games", brand: "Lords Mobile", type: "Umum" },
    
    // PRODUK PULSA
 "ptl": { category: "Pulsa", brand: "TELKOMSEL", type: "Umum" },
 "pis": { category: "Pulsa", brand: "INDOSAT", type: "Umum" },
 "pax": { category: "Pulsa", brand: "AXIS", type: "Umum" },
 "psm": { category: "Pulsa", brand: "SMARTFREN", type: "Umum" }, 
 "ptr": { category: "Pulsa", brand: "TRI", type: "Umum" },
 "pxl": { category: "Pulsa", brand: "XL", type: "Umum" }, 
 "pby": { category: "Pulsa", brand: "by.U", type: "Umum" },
   
 // PRODUK DATA
 "tld": { category: "Data", brand: "TELKOMSEL", types: ["Mini", "Cek Paket"] },
 "isd": { category: "Data", brand: "INDOSAT", types: ["Yellow", "Freedom Internet"] },
 "axd": { category: "Data", brand: "Axis", types: ["Mini", "Bronet", "Sulutra"] },
 "sfd": { category: "Data", brand: "SMARTFREN", types: ["Minii", "Nonstopi", "Unlimited Nonstopi", "Kuota"] },
 "trd": { category: "Data", brand: "TRI", types: ["AlwaysOn", "Happy"] },
 "xld": { category: "Data", brand: "XL", types: ["Mini", "Xtra Combo Flex"] },
    
 // PRODUK VOUCHER
 "vgp": { category: "Voucher", brand: "GOOGLE PLAY INDONESIA", type: "Umum" },
 "vgs": { category: "Voucher", brand: "GARENA", type: "Umum" },
 "vrz": { category: "Voucher", brand: "Razer Gold", type: "Umum" },
 "vst": { category: "Voucher", brand: "Steam Wallet (IDR)", type: "Umum" },
 "vup": { category: "Voucher", brand: "Unipin Voucher", type: "Umum" },
    
 // PRODUK E-MONEY
 "gpy": { category: "E-Money", brand: "GO PAY", type: "Customer" },
 "ovo": { category: "E-Money", brand: "OVO", type: "Umum" },
 "dna": { category: "E-Money", brand: "DANA", type: "Umum" },
 "shp": { category: "E-Money", brand: "SHOPEE PAY", type: "Umum" },
    
// PRODUK PLN
 "pln": { category: "PLN", brand: "PLN", type: "Umum" },    
   
// PRODUK TELPON & SMS
 "tlt": { category: "Paket SMS & Telpon", brand: "TELKOMSEL", types: ["Umum", "Telepon Pas"] },  
 "ist": { category: "Paket SMS & Telpon", brand: "INDOSAT", type: "Unlimited" },   
 "trt": { category: "Paket SMS & Telpon", brand: "TRI", type: "Umum" },  
 "axt": { category: "Paket SMS & Telpon", brand: "AXIS", types: ["Umum", "Mabrur"] },
 "xlt": { category: "Paket SMS & Telpon", brand: "XL", types: ["Umum", "Sesama", "Anynet"] },  

 // PRODUK MASA AKTIF
"mtl": { category: "Masa Aktif", brand: "TELKOMSEL", type: "Umum" }, 
"mis": { category: "Masa Aktif", brand: "INDOSAT", type: "Umum" },
"max": { category: "Masa Aktif", brand: "AXIS", type: "Umum" }, 
"mtr": { category: "Masa Aktif", brand: "TRI", type: "Umum" },
"mxl": { category: "Masa Aktif", brand: "XL", type: "Umum" },
  // Tambahkan alias lainnya jika diperlukan
};
      const aliasSMMMap = {
          //LAYANAN INSTARGAM
          "figid": 2,
    		"fignd": 7,
     		"figg": 15,
           "figng": 43,
           "ligg": 22,
           "ligng": 111,
           "rig": 115,
           "sig": 56,
           "vig": 20,
          
           //LAYANAN TIKTOK
           "fptt": 12,
           "idtt": 38,
           "lptt": 13,
           "sftt": 26,
           "sdtt": 29,
           "fptt": 12,
           "vptt": 101,
          
          //LAYANAN FACEBOOK
           "fpfb": 16,
           "fmfb": 47,
           "fbid": 9,
           "lrefb": 33,
           "pflfb": 23,
           "spfb": 53,
          "vrvfb": 140,
          
           //LAYANAN YOUTUBE
           "sngyt": 36,
           "sgyt": 37,
           "lvgyt": 40,
           "cpyt": 96,
           "idyt": 129,
           "jtyt": 35
       
};
    function handleCustomCommands(groupID, command, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const customResponse = customCommands[groupID][command.toUpperCase()];
        if (customResponse) {
          m.reply(customResponse);
        }
      }
    }

    if (isGroup && !isCmd) {
      const groupID = from;
      const customCommand = body.trim().toLowerCase();
      handleCustomCommands(groupID, customCommand, m.reply);
    }

    function listCustomCommands(groupID, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const commands = Object.keys(customCommands[groupID]);
        if (commands.length > 0) {
          let responseText =
            `┣» *🌟 LAYANAN GRUP 🌟*
┣» _Silahkan Ketik Kode Bercetak Tebal Untuk Menampilkan Harga_
Ketik *Produk* Untuk Melihat Semua Layanan
Ketik *Pay* Untuk Melakukan Pembayaran
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`;
          commands.forEach((command, index) => {
            responseText += `┣❏ 🛍️ ${command}\n`;
          });
                   responseText += `*_${namaStore}_*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
_Ketik *Owner* Jika Kamu Mempunyai Masalah & Kendala Pesanan_

_Ketik *Tutorial* Untuk Cek Cara Topup Sendiri Melalui Bot Otomatis, Jadi Kamu Bisa Topup Mandiri 24 Jam Nonstop Tanpa Tunggu Admin On_`
          m.reply(responseText)
        } else {
          m.reply(`┣» *🌟 LAYANAN GRUP 🌟*
Ketik *Produk* Untuk Melihat Semua Layanan Otomatis
Ketik *Pay* Untuk Melakukan Pembayaran
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

┣❏ Tidak Ada List Tersedia

*_${namaStore}_*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
_Ketik *Owner* Jika Kamu Mempunyai Masalah & Kendala Pesanan_

_Ketik *Tutorial* Untuk Cek Cara Topup Sendiri Melalui Bot Otomatis, Jadi Kamu Bisa Topup Mandiri 24 Jam Nonstop Tanpa Tunggu Admin On_`);
        }
      } else {
        m.reply(`┣» *🌟 LAYANAN GRUP 🌟*
Ketik *Produk* Untuk Melihat Semua Layanan Otomatis
Ketik *Pay* Untuk Melakukan Pembayaran
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

┣❏ Tidak Ada List Tersedia

*_${namaStore}_*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
_Ketik *Owner* Jika Kamu Mempunyai Masalah & Kendala Pesanan_

_Ketik *Tutorial* Untuk Cek Cara Topup Sendiri Melalui Bot Otomatis, Jadi Kamu Bisa Topup Mandiri 24 Jam Nonstop Tanpa Tunggu Admin On_`);
      }
    }
//FITUR AFK
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
    if (afk.checkAfkUser(ment, _afk)) {
    let getId2 = afk.getAfkId(ment, _afk)
    let getReason2 = afk.getAfkReason(getId2, _afk)
    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
    let heheh2 = ms(getTimee)
    m.reply(`Jangan tag dia bang, orangnya lagi afk.\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
    }
    }
	if (afk.checkAfkUser(m.sender, _afk)) {
    let getId = afk.getAfkId(m.sender, _afk)
    let getReason = afk.getAfkReason(getId, _afk)
    let getTime = Date.now() - afk.getAfkTime(getId, _afk)
    let heheh = ms(getTime)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./db/afk.json', JSON.stringify(_afk))
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Alasan :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
    }
}    
    switch (command) {
  
      case 'help': {
         
        const capt =
          `━━[ *${namaStore}* ✅ ]━━


『 𝗗𝗔𝗧𝗔 𝗕𝗢𝗧 』

» Bot Name : ${global.botName}
» Owner Name : ${global.ownerName} 

●──────────────
┣» [ *MENU UTAMA* ] ✅
┃» *PRODUK*       
┃» *LIST*    
┃» *ORDER*  
┃» *TPO*   
┃» *DAFTAR*        
┃» *DEPO*
┃» *BUKTI*     
┃» *PROFILE*  
┃» *RIWAYAT*
┃» *CEK*        
┃» *RANK*    
┃» *OWNER*  
┃» *CEK
*
┃» *MLREG*
┃» *CEKFF*  
┃» *CEKPLN*     
●──────────────

●──────────────
┣» [ *MENU OWNER* ] ✅ 
┃» *ADDSALDO*  
┃» *KURANGSALDO*   
┃» *ACCDEPO*      
┃» *UBAHROLE*       
┃» *DAFTARMEMBER*        
┃» *DASHBOARD*   
┃» *GETLAYANAN*  
┃» *PROFIT* 
┃» *DELINV*
●──────────────

●──────────────
┣» [ *MENU GROUP* ] ✅ 
┃» *ADDLIST*      
┃» *DELLIST*      
┃» *PROSES*       
┃» *DONE*        
┃» *LINKGC*   
┃» *HIDETAG*  
┃» *OPEN*  
┃» *CLOSE* 
┃» *JOIN*  
┃» *KICK*    
┃» *ANTILINK*
●──────────────`
        client.sendMessage(m.chat, {
          text: capt,
          contextInfo: {
            externalAdReply: {
              title: `${global.botName}`,
              thumbnailUrl: `${poster1}`,
              sourceUrl: `${linkGC}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, )
      }
      break
         
          
 
            
        

case 'tutorial': {
    const tutorialText = `
*MENU TUTORIAL MENGGUNAKAN BOT TOPUP OTOMATIS ✅*

🟢 _Ketik *CaraOrder* Untuk Melakukan Pembelian Otomatis_

🟢 _Ketik *CaraDepo* Untuk Melakukan Deposit Saldo Otomatis_

*_Note :_* 
_1. Cara Pertama Cocok Untuk Kamu Yang Ingin Melakukan Pemesanan Otomatis Secara Langsung Tanpa Menunggu Admin Aktif_

_2. Cara Kedua Cocok Untuk Kamu Yang Ingin Menyimpan Saldo Dan Ingin Melakukan Pemesanan Berulang Kali_
    `;
    m.reply(tutorialText); // Mengirim pesan ke pengguna
}
break;

case 'caraorder': {
    const orderGuideText = `
*TUTOR ORDER DI BOT TOPUP OTOMATIS* 

CHAT KE NOMER BOT : wa.me/${nomerBot}

ATAU BISA DI GRUP INI

 *CARA PERTAMA* 

1. Ketik \`Daftar\` (Jika Sudah Daftar Tidak Perlu Lagi)

2. Ketik \`Produk\` Untuk Cek Daftar Produk Yang Ingin Dipesan

(Jika Produk Games/Digital)
3. Ketik \`TPO PID TUJUAN\` Untuk Melakukan Pemesanan
 (Contoh : Tpo gpml3 12345678 1234)

  (Jika Produk Sosmed)
Ketik \`TPOS PID JUMLAH TARGET\` Untuk Melakukan Pemesanan
 (Contoh : Tpos 1535 1000 username/link)

4. Scan QRIS Yang Ditampilkan Dan Selesaikan Pembayaran Dan Pesanan Akan Otomatis Diproses Oleh Sistem

Ketik *Owner* Jika Ada Kendala

_Happy Order 🎊_
    `;
    m.reply(orderGuideText); // Mengirim pesan ke pengguna
}
break;
            
case 'caradepo': {
    const depositGuideText = `
*TUTOR DEPOSIT DI BOT TOPUP OTOMATIS*

CHAT KE NOMER BOT : wa.me/${nomerBot}

*CARA PERTAMA*

1. Ketik *Daftar* (Jika Sudah Daftar Tidak Perlu Lagi)

2. Ada 2 Cara Untuk Melakukan Deposit Yaitu Otomatis Dan Manual
   - *Otomatis* Ketik: \`Depo Nominal\`
     _Contoh_: \`Depo 5000\`
     Pajak: \`0,7%\`

   - *Manual* Ketik: \`Depom Nominal\`
     _Contoh_: \`Depom 5000\`
     Pajak: \`Gratis\`

3. Silahkan Ikuti Arahan Yang Tersedia

4. Saldo Deposit Kamu Akan Langsung Masuk Ketika Menyelesaikan Pembayaran

Ketik *Produk* Untuk Cek Daftar Layanan

Ketik *Cara Order* Untuk Order Otomatis Tanpa Deposit

Ketik *Owner* Jika Ada Kendala

_Happy Order 🎊_
    `;
    m.reply(depositGuideText); // Mengirim pesan ke pengguna
}
break;

case 'produk' : {
    const response = `
┏━━『 *${namaStore}* 』━◧
*🌟 PILIH SERVER LAYANAN 🌟*
Silahkan Pilih Layanan Yang Diinginkan:

┣»  *PTD*    [ PRODUK TOPUP DIGITAL ]
┣»  *PTS*    [ PRODUK TOPUP SOSMED ]

Ketik *PTD* Atau *PTS* Untuk Melanjutkan.
    `;
    // Mengirimkan respons
    m.reply(response);
    return;
}         

case 'pts': {
    // Langsung mengembalikan respons format yang diinginkan
    const response = `
┏━━『 *${namaStore}* 』━◧
┣» *🌟 LAYANAN GRUP 🌟*
┣» _Silahkan Ketik *GETS KATEGORI* Untuk Melihat Daftar Harga_
   » Contoh : *GETS FIGND*

┣» [ *MENU INSTAGRAM* ]
┃🛍 *GETS FIGID*  [ Followers Indonesia ]
┃🛍 *GETS FIGND*  [ Followers (No Drop) ]
┃🛍 *GETS FIGG*     [ Follower (Guaranteed) ]
┃🛍 *GETS FIGNG*  [ Followers (Not Guaranteed) ]
┃🛍 *GETS LIGG*     [ Likes (Guaranteed) ]
┃🛍 *GETS LIGNG*  [ Likes (Not Guaranteed) ]
┃🛍 *GETS RIG*       [ Reels ]
┃🛍 *GETS SIG*       [ Saves ]
┃🛍 *GETS VIG*       [ Views ]

┣» [ *MENU TIKTOK* ]
┃🛍 *GETS FPTT*    [ Followers ]
┃🛍 *GETS IDTT*    [ Indonesia ]
┃🛍 *GETS LPTT*    [ Likes ]
┃🛍 *GETS SFTT*    [ Save/Favorite ]
┃🛍 *GETS SDTT*   [ Shares / Downloads ]
┃🛍 *GETS VPTT*   [ Views ]

┣» [ *MENU FACEBOOK* ]
┃🛍 *GETS FPFB*   [ Followers ]
┃🛍 *GETS FMFB*  [ Group Members ]
┃🛍 *GETS FBID*   [ Indonesia ]
┃🛍 *GETS LREFB* [ Likes/Reacts/Emoji ]
┃🛍 *GETS PFLFB* [ Page Followers & Likes ]
┃🛍 *GETS SPFB*   [ Shares ]
┃🛍 *GETS VRVFB* [ Video/Reels Views (Monetizable💲) ]

┣» [ *MENU YOUTUBE* ]
┃🛍 *GETS SNGYT* [ Subscribers (Not Guaranteed) ]
┃🛍 *GETS SGYT*    [ Subscribers (Guaranteed) ]
┃🛍 *GETS LVGYT*  [ Views  (Guaranteed) ]
┃🛍 *GETS CPYT*    [ Comments ]
┃🛍 *GETS IDYT*     [  Indonesia ]
┃🛍 *GETS JTYT*     [ Watch Hours (Jam Tayang) ]`;

    // Mengirimkan respons
    m.reply(response);
    return;
}     

case 'psmm': {
    const guideMessage = `
*Contoh Pengisian Target*
Berikut adalah beberapa contoh pengisian pada target pesanan.
Pastikan untuk periksa kembali target pesanan Anda sebelum pesanan dibuat sehingga pesanan dapat diproses.
Jika ada hal yang ingin Anda tanyakan, bisa langsung tanyakan dengan cara masuk ke halaman kontak pada website kami ya.

*Instagram*
- Instagram Followers, Story, Live Video, Profile Visits: Username akun Instagram tanpa tanda @ // Contoh: gempaybooster
- Instagram Likes, Views, Comments, Impressions, Saves: Link postingan akun Instagram // Contoh: https://www.instagram.com/p/BxilTdsseerdewBn_p/
- Instagram TV: Link postingan Instagram TV // Contoh: https://www.instagram.com/tv/CUOfgerkDLoBsqq/
- Instagram Reels: Link postingan Instagram Reels // Contoh: https://www.instagram.com/reel/CUrqMtmfdfdloaI/

*YouTube*
- YouTube Likes, Views, Shares, Comments: Link video YouTube // Contoh: https://www.youtube.com/watch?v=FYJ-mepHTFQ&t=44s
- YouTube Live Stream: Link video live YouTube // Contoh: https://www.youtube.com/watch?v=FYJ-mepHTFQ&t=44s
- YouTube Subscribers: Link channel YouTube // Contoh: https://www.youtube.com/channel/UCXdSM_OE85GPo8rKVyHryYQ

*Facebook*
- Facebook Page Likes, Page Followers: Link halaman atau fanspage Facebook // Contoh: https://www.facebook.com/telkomsel/
- Facebook Post Likes, Post Video: Link postingan Facebook // Contoh: https://www.facebook.com/username/posts/2161457404010124
- Facebook Followers, Friends: Link profile Facebook // Contoh: https://www.facebook.com/gempaybooster
- Facebook Group Members: Link group Facebook // Contoh: https://www.facebook.com/groups/1675298779413438239/

*Twitter*
- Twitter Followers: Username akun Twitter tanpa tanda @ // Contoh: TelkomCare
- Twitter Retweet, Favorite: Link tweet atau postingan Twitter // Contoh: https://twitter.com/TelkomCare/status/1238691324498513920

*TikTok*
- TikTok Followers: Link profile TikTok atau username tanpa tanda @ // Contoh: https://tiktok.com/@username/ atau username
- TikTok Likes / Views: Link video TikTok // Contoh: https://vt.tiktok.com/xxxxx/

*Shopee*
- Shopee Followers: Username akun Shopee // Contoh: gempaybooster
- Shopee Product Likes: Link produk Shopee // Contoh: https://shopee.co.id/Stiker-Keyboard-Arab-Stiker-Keyboard-Arabic-i.8232793.668063715

*Tokopedia*
- Tokopedia Followers: Username akun Tokopedia atau link profile // Contoh: https://www.tokopedia.com/gempaybooster
- Tokopedia Wishlist atau Favorite: Link produk Tokopedia // Contoh: https://www.tokopedia.com/dbeofficial/dbe-dj80-foldable-dj-headphone-with-detachable-microphone-hitam

*Website Traffic*
- Website Traffic: Link website // Contoh: https://gempaybooster.com

Pastikan data yang dimasukkan sudah benar agar pesanan dapat diproses tanpa kendala. Jika ada pertanyaan lebih lanjut, silakan hubungi kami melalui halaman kontak di website.
    `;
    
    m.reply(guideMessage);
}
break;
            
 case 'ptd':          
case 'lpo': {
    // Langsung mengembalikan respons format yang diinginkan
    const response = `
┏━━『 *${namaStore}* 』━◧
┣» *🌟 LAYANAN GRUP 🌟*
┣» _Silahkan Ketik *GET* Sebelum Kode Produk_
   » Contoh : *GET MLA*

┣» [ *MENU GAME* ]
┃🛍️ *GET MLA*        [ MOBILE LEGENDS ]
┃🛍️ *GET MLD*        [ MOBILE LEGENDS GLOBAL ]
┃🛍️ *GET WDP*     [ ML WDP ]
┃🛍️ *GET FF*          [ FREE FIRE ]
┃🛍️ *GET PUBG*    [ PUBG MOBILE ]
┃🛍️ *GET CODM*   [ CALL OF DUTY ]
┃🛍️ *GET GI*          [ GENSHIN IMPACT ]
┃🛍️ *GET GIB*          [ GENSHIN IMPACT BLESSING ]
┃🛍️ *GET HSR*      [ HONKAI STAR RAIL ]
┃🛍️ *GET MSA*      [ METAL SLUG ]
┃🛍️ *GET PB*         [ POINT BLANK ]
┃🛍️ *GET AB*         [ ARENA BREAKOUT ]
┃🛍️ *GET VL*         [ VALORANT ]
┃🛍️ *GET ZP*         [ ZEPETO ]
┃🛍️ *GET AOV*      [ ARENA OF VALOR ]
┃🛍️ *GET HOK*      [ HONOR OF KINGS ]
┃🛍️ *GET BS*       [ BLOOD STRIKE ]

┣» [ *TOKEN LISTRIK* ]
┃🛍️ *GET PLN*    [ TOKEN LISTRIK ]

┣» [ *PULSA REGULER* ]
┃🛍️ *GET PTL*   [ PULSA TSEL]
┃🛍️ *GET PIS*    [ PULSA INDOSAT ]
┃🛍️ *GET PAX*   [ PULSA AXIS ]
┃🛍️ *GET PSM*   [ PULSA SMARTFREN ]
┃🛍️ *GET PTR*   [ PULSA TRI ]
┃🛍️ *GET PXL*   [ PULSA XL ]
┃🛍️ *GET PBY*   [ PULSA by.U ]

┣» [ *PAKET DATA* ]
┃🛍️ *GET TRD*     [ PAKET DATA TRI ]
┃🛍️ *GET XLD*    [ PAKET DATA XL ]
┃🛍️ *GET AXD*   [ PAKET DATA AXIS ]
┃🛍️ *GET ISD*     [ DATA INDOSAT ]

┣» [ *PAKET TELPON & SMS* ]
┃🛍️ *GET TLT*     [ TELP TELKOMSEL ]
┃🛍️ *GET TRT*    [ TELP TRI ]
┃🛍️ *GET IST*     [ TELP INDOSAT ]
┃🛍️ *GET AXT*   [ TELP AXIS ]
┃🛍️ *GET XLT*    [ TELP XL]

┣» [ *MASA AKTIF* ]
┃🛍️ *GET MTL*    [ TELKOMSEL ]
┃🛍️ *GET MAX*   [  AXIS ]
┃🛍️ *GET MIS*     [ INDOSAT ]
┃🛍️ *GET MTR*   [ TRI ]

┣» [ *VOUCHER GAME* ]
┃🛍️ *GET VGP*    [ GOOGLE PLAY ]
┃🛍️ *GET VGS*    [ GARENA ]
┃🛍️ *GET VRZ*    [ RAZER GOLD ]
┃🛍️ *GET VST*    [ STEAM ]
┃🛍️ *GET VUP*    [ UNIPIN ]

┣» [ *TOPUP E-MONEY* ]
┃🛍️ *GET DNA*    [ DANA ]
┃🛍️ *GET GPY*    [ GOPAY ]
┃🛍️ *GET OVO*    [ OVO ]
┃🛍️ *GET SHP*    [ SHOPEE PAY ]
    `;

    // Mengirimkan respons
    m.reply(response);
    return;
}

            
      case 'show':
case 'get': {
  const nomor = sender.split("@")[0];
  console.log('Sender:', sender);
  console.log('User Nomor:', nomor);

  // Ambil data pengguna dari Firestore
  const userRef = db.collection('users').doc(nomor);

  let userDoc;
  try {
    userDoc = await userRef.get();
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
  }

  if (!userDoc.exists) {
    return m.reply('Kamu belum terdaftar. Silakan ketik: *Daftar* untuk bisa mengakses.');
  }

  const userData = userDoc.data();

  // Ambil data produk dari file JSON
  let productData;
  try {
    productData = JSON.parse(fs.readFileSync('./db/datadigi.json', 'utf8'));
  } catch (error) {
    console.error('Error reading product data:', error);
    return m.reply('Terjadi kesalahan saat mengakses data produk. Silakan coba lagi nanti.');
  }

  let aliasKey = args[0] ? args[0].toLowerCase() : null;

  if (!aliasKey || !aliasMap.hasOwnProperty(aliasKey)) {
    return m.reply(`Produk "${aliasKey}" tidak dikenali. Masukkan yang valid.`);
  }

  const { category, brand, type, types } = aliasMap[aliasKey];
  const requestedCategory = category.toUpperCase();
  const requestedBrand = brand.toUpperCase();

  // Filter produk berdasarkan kategori, brand, dan tipe
  let matchingProducts = productData.filter(item =>
    item.brand.toUpperCase() === requestedBrand &&
    item.category.toUpperCase() === requestedCategory &&
    (types ? types.includes(item.type) : item.type.toUpperCase() === type.toUpperCase())
  );

  if (matchingProducts.length === 0) {
    return m.reply(`Tidak ada produk ditemukan untuk Produk "${aliasKey}".`);
  }

  matchingProducts.sort((a, b) => a.price - b.price);

  const configData = require('./db/config.js');
  const defaultMarkupPercentage = configData.defaultMarkupPercentage;

  let formattedResponse = `🛍️ *TOP UP ${requestedCategory} - ${requestedBrand}*\n*Status :* ✅ = Ready\n*Status :* ❌ = Close\n*Order Otomatis Ketik :* TPO PID TUJUAN\n*Order Dengan Saldo Ketik :* TP PID TUJUAN\n▰▰▰▰▰▰▰▰▰▰▰▰▰\n`;

  matchingProducts.forEach(product => {
    const originalPrice = parseFloat(product.price);
    let markupPercentage = defaultMarkupPercentage;

    // Ambil markup berdasarkan role pengguna
    if (userData) {
      switch (userData.role) {
        case "GOLD":
          markupPercentage = marginGold;
          break;
        case "SILVER":
          markupPercentage = marginSilver;
          break;
        case "BRONZE":
          markupPercentage = marginBronze;
          break;
        case "OWNER":
          markupPercentage = marginOwner;
          break;
        default:
          break;
      }
    }

    const increasedPrice = originalPrice * (1 + markupPercentage);
    let adjustedPrice;
    
    // Pembulatan harga berdasarkan role pengguna
    if (userData.role === "BRONZE" || userData.role === "OWNER") {
      adjustedPrice = Math.round(increasedPrice / 100) * 100;
    } else if (userData.role === "SILVER" || userData.role === "GOLD") {
      adjustedPrice = Math.floor(increasedPrice);
    } else {
      adjustedPrice = increasedPrice; // Jika role tidak dikenali, gunakan harga asli tanpa pembulatan
    }

    const statusEmoji = product.seller_product_status && product.buyer_product_status ? '✅' : '❌';

    formattedResponse += `\n🛍️ *${product.product_name}*\n*PID :* *\`${product.buyer_sku_code}\`*\n*Harga :* Rp. ${adjustedPrice.toLocaleString()}\n*Status :* ${statusEmoji}\n▰▰▰▰▰▰▰▰▰▰▰▰▰`;
  });

  m.reply(formattedResponse);
}
break;


case 'gets': {
    const nomor = sender.split("@")[0];
    console.log('Sender:', sender);
    console.log('User Nomor:', nomor);

    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(nomor);

   let userData;

try {
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
        console.log('User tidak ditemukan, membuat data baru...');
        const defaultRole = 'BRONZE';
        const initialSaldo = 0;

        // Data default untuk user baru
        const newUser = {
            nomor: nomor,
            saldo: initialSaldo,
            role: defaultRole,
        };

        try {
            // Simpan data baru ke Firestore
            await userRef.set(newUser);
            userData = newUser; // Gunakan data baru
        } catch (error) {
            console.error('Error creating new user:', error);
            return m.reply('Gagal membuat data pengguna baru. Silakan coba lagi.');
        }
    } else {
        // Jika data pengguna sudah ada, ambil datanya
        userData = userDoc.data();
    }

    console.log('User Data:', userData);
} catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
}

// Program dilanjutkan di sini menggunakan `userData`
console.log('Program dilanjutkan dengan data pengguna:', userData);
// Contoh: Mengakses saldo pengguna
console.log('Saldo pengguna:', userData.saldo);

   

    // Ambil alias dari argumen
    let aliasKey = args[0] ? args[0].toLowerCase() : null;

    // Cek apakah alias valid dan ambil category_id
    const category_id = aliasSMMMap[aliasKey];
    if (category_id === undefined) {
        return m.reply(`Alias "${aliasKey}" tidak dikenali. Silakan gunakan alias yang valid.`);
    }

    // Ambil data layanan SMM dari file JSON
    let smmData;
    try {
        smmData = JSON.parse(fs.readFileSync('./db/datasmm.json', 'utf8'));
    } catch (error) {
        console.error('Error reading SMM data:', error);
        return m.reply('Terjadi kesalahan saat mengakses data layanan SMM. Silakan coba lagi nanti.');
    }
    const categoryName = smmData.find(item => item.category_id === category_id)?.category_name;

    // Filter layanan berdasarkan category_id
    let matchingServices = smmData.filter(service => service.category_id === category_id);

    if (matchingServices.length === 0) {
        return m.reply(`Tidak ada layanan ditemukan untuk kategori SMM yang diminta.`);
    }

    // Ambil markup default dari config
    const configData = require('./db/config.js');
    const defaultMarkupPercentage = configData.defaultMarkupPercentage;

    let formattedResponse = `🛍️ *DAFTAR LAYANAN ${categoryName.toUpperCase()}*\n\n*Order Dengan Saldo Ketik :*\n\`TPS SMM_ID JUMLAH TARGET\`\n*Order Otomatis Ketik :*\n\`TPSO SMM_ID JUMLAH TARGET\`\n*CONTOH :*\n\`TPS 35 1000 USERNAME/LINK\`\n\n*PANDUAN TARGET KETIK :* *PSMM*\n▰▰▰▰▰▰▰▰▰▰▰▰▰\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

 matchingServices.forEach(service => {
    const originalPrice = parseFloat(service.price);
    let markupPercentage = defaultMarkupPercentage;

    // Tentukan markup berdasarkan role pengguna
    if (userData) {
        switch (userData.role) {
            case "GOLD":
                markupPercentage = marginsmmGold;
                break;
            case "SILVER":
                markupPercentage = marginsmmSilver;
                break;
            case "BRONZE":
                markupPercentage = marginsmmBronze;
                break;
            case "OWNER":
                markupPercentage = marginsmmOwner;
                break;
            default:
                break;
        }
    }

    // Hitung harga per satuan dengan markup dan bagi 1000
  // Hitung harga per satuan dengan markup dan bagi 1000
let adjustedPrice = (originalPrice * (1 + markupPercentage) / 1000);

// Bulatkan harga ke dua tempat desimal
adjustedPrice = Math.round(adjustedPrice * 100) / 100;

// Bulatkan harga ke kelipatan 0.1 terdekat
adjustedPrice = Math.ceil(adjustedPrice * 10) / 10;

// Pastikan harga minimal adalah 0.1
if (adjustedPrice < 0.1) {
    adjustedPrice = 0.1;
}

// Assign harga yang sudah disesuaikan
service.adjustedPrice = adjustedPrice;
 });

// Urutkan matchingServices berdasarkan adjustedPrice (harga yang telah disesuaikan)
matchingServices.sort((a, b) => a.adjustedPrice - b.adjustedPrice);

matchingServices.forEach(service => {
    const refillStatusIcon = service.refill ? '✅' : '❌';
    // Format harga per satuan dalam output
    formattedResponse += `\n🛍️ *${service.service_name}*\n*SMM ID :* *\`${service.id}\`*\n*Harga Satuan :* Rp ${service.adjustedPrice.toLocaleString()}\n*Min Order :* ${service.min}\n*Max Order :* ${service.max}\n▰▰▰▰▰▰▰▰▰▰▰▰▰`;
});


m.reply(formattedResponse);
}
break;



    
        
      case 'ket':
case 'detail': {
  // Ambil data produk dari file JSON
  let productData;
  try {
    productData = JSON.parse(fs.readFileSync('./db/datadigi.json', 'utf8'));
  } catch (error) {
    console.error('Error reading product data:', error);
    return m.reply('Terjadi kesalahan saat mengakses data produk. Silakan coba lagi nanti.');
  }

  // Ambil alias key dari argumen
  let aliasKey = args[0] ? args[0].toLowerCase() : null;

  if (!aliasKey || !aliasMap.hasOwnProperty(aliasKey)) {
    return m.reply(`Produk "${aliasKey}" tidak dikenali. Masukkan yang valid.`);
  }

  // Ambil detail kategori, brand, tipe, dan tipe lain dari aliasMap
  const { category, brand, type, types } = aliasMap[aliasKey];
  const requestedCategory = category.toUpperCase();
  const requestedBrand = brand.toUpperCase();

  // Filter produk berdasarkan kategori, brand, dan tipe
  let matchingProducts = productData.filter(item =>
    item.brand.toUpperCase() === requestedBrand &&
    item.category.toUpperCase() === requestedCategory &&
    (types ? types.includes(item.type) : item.type.toUpperCase() === type.toUpperCase())
  );

  if (matchingProducts.length === 0) {
    return m.reply(`Tidak ada produk ditemukan untuk Produk "${aliasKey}".`);
  }

  // Mengurutkan produk berdasarkan harga terendah
  matchingProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  // Markup percentages
  const bronzeMarkup = marginBronze;
  const silverMarkup = marginSilver;
  const goldMarkup = marginGold;

  // Fungsi untuk memformat harga
  const formatSaldo = (amount) => `${amount.toLocaleString()}`;

  // Membuat respons terformat
  let formattedResponse = `──〔 *${requestedBrand}* 〕──\n_Perbandingan Harga Setiap Role Reseller_\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  matchingProducts.forEach(product => {
    const originalPrice = parseFloat(product.price);

    const bronzePrice = originalPrice * (1 + bronzeMarkup);
    const silverPrice = originalPrice * (1 + silverMarkup);
    const goldPrice = originalPrice * (1 + goldMarkup);

    const bronze = Math.round(bronzePrice / 100) * 100;
    const silver = Math.floor(silverPrice);
    const gold = Math.floor(goldPrice);

    formattedResponse += `» *${product.product_name}*\n  - *Bronze*: Rp. ${formatSaldo(bronze)}\n  - *Silver*: Rp. ${formatSaldo(silver)}\n  - *Gold*: Rp. ${formatSaldo(gold)}\n\n`;
  });

  m.reply(formattedResponse);
}
break;





  case 'daftarmember': {
  if (!isOwner) return;

  // Ambil data pengguna dari Firestore
  const usersCollection = db.collection('users');
  const usersSnapshot = await usersCollection.get();

  if (usersSnapshot.empty) {
    m.reply('No users found.');
    return;
  }

  const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
  let totalSaldo = 0;
  let totalMembers = 0;
  let userList = '';

  usersSnapshot.forEach(doc => {
    const user = doc.data();
    totalMembers++;
    if (user.nomor !== global.nomerOwner) {
      totalSaldo += user.saldo;
    }
    userList += `» *Nomer :* ${user.nomor}\n`;
    userList += `» *Saldo :* ${formatSaldo(user.saldo)}\n`;
    userList += `» *Role :* ${user.role}\n\n`;
  });

  const header = `───〔 *Daftar Member* 〕──\n\n` +
                 `*Halo Owner :* ${global.ownerName}\n` +
                 `*Total Saldo Member :* ${formatSaldo(totalSaldo)}\n` +
                 `*Total Member Aktif :* ${totalMembers}\n\n*Daftar Member Aktif :*\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  const response = header + userList;
  m.reply(response);
}
break;



            
case 'infouser': {
  const commandArgs = m.body.slice(9).trim(); // Mengambil argumen setelah 'infouser '

  // Pengecekan apakah nomor pengguna ada
  const rawUserNumber = commandArgs.trim();
  const userNumber = rawUserNumber.startsWith('@') ? rawUserNumber.slice(1) : rawUserNumber;  // Menghapus simbol @ jika ada

  if (!userNumber) {
    m.reply('Format perintah salah. Gunakan format: infouser <nomor_pengguna>');
    return;
  }

  // Ambil data pengguna dari Firestore berdasarkan nomor pengguna
  const usersCollection = db.collection('users');
  const query = usersCollection.where('nomor', '==', userNumber);
  const userSnapshot = await query.get();

  if (userSnapshot.empty) {
    m.reply(`Pengguna dengan nomor ${userNumber} tidak ditemukan.`);
    return;
  }

  // Mendapatkan data pengguna dari snapshot
  let userData = '';
  userSnapshot.forEach(doc => {
    const user = doc.data();
    userData += `───〔 *Info Pengguna* 〕──\n\n`;
    userData += `» *Nomor :* ${user.nomor}\n`;
    userData += `» *Saldo :* Rp. ${user.saldo.toLocaleString()}\n`;
    userData += `» *Role :* ${user.role}`;
  });

  m.reply(userData);
}
break;
case 'deluser': {
  const commandArgs = m.body.slice(8).trim(); // Mengambil argumen setelah 'deluser '

  // Pengecekan apakah nomor pengguna ada
  const rawUserNumber = commandArgs.trim();
  const userNumber = rawUserNumber.startsWith('@') ? rawUserNumber.slice(1) : rawUserNumber;  // Menghapus simbol @ jika ada

  if (!userNumber) {
    m.reply('Format perintah salah. Gunakan format: deluser @tag/nomor');
    return;
  }

  // Ambil data pengguna dari Firestore berdasarkan nomor pengguna
  const usersCollection = db.collection('users');
  const query = usersCollection.where('nomor', '==', userNumber);
  const userSnapshot = await query.get();

  if (userSnapshot.empty) {
    m.reply(`Pengguna dengan nomor ${userNumber} tidak ditemukan.`);
    return;
  }

  // Hapus data pengguna dari Firestore
  const batch = db.batch();
  userSnapshot.forEach(doc => {
    batch.delete(doc.ref);
  });

  try {
    await batch.commit();
    m.reply(`Data pengguna dengan nomor ${userNumber} berhasil dihapus.`);
  } catch (error) {
    console.error('Error deleting user:', error);
    m.reply(`Terjadi kesalahan saat menghapus data pengguna.`);
  }
}
break;


case 'uprole': {
  const nomor = sender.split("@")[0]; // Mengambil nomor pengguna dari pengirim perintah

  // Ambil data pengguna dari Firestore berdasarkan nomor pengguna (nomor)
  const usersCollection = db.collection('users');
  const query = usersCollection.where('nomor', '==', nomor);
  const userSnapshot = await query.get();
    
    // Ambil data pengguna dari Firestore
  const userRef = db.collection('users').doc(nomor);
    
let userDoc;
  try {
    userDoc = await userRef.get();
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
  }
    
if (!userDoc.exists) {
    return m.reply('Kamu belum terdaftar. Silakan ketik: *Daftar* untuk bisa mengakses.');
  }

  // Mendapatkan data pengguna dari snapshot
  let userData;
  userSnapshot.forEach(doc => {
    userData = doc.data();
  });

  // Jika perintah hanya 'uprole', beri informasi biaya upgrade
  const commandArgs = m.body.slice(7).trim(); // Mengambil argumen setelah 'uprole '
  if (!commandArgs) {
   m.reply('✨ Mau lebih banyak keuntungan? Upgrade role sekarang!\n\n⚪ Ketik *Uprole silver* untuk upgrade ke SILVER hanya dengan Rp 30,000\n🟡 Ketik *Uprole gold* untuk upgrade ke GOLD dengan biaya Rp 50,000\n\nDan dapatkan akses ke layanan super cepat, serta tentunya harga yang jauh lebih murah!\n\nJangan lewatkan kesempatan untuk merasakan layanan terbaik dan keuntungan luar biasa. Bergabunglah menjadi reseller Gempay Topup sekarang juga dan jadilah bagian dari pengguna prioritas yang mendapatkan manfaat maksimal dari setiap transaksi! 🌟');
    return;
  }

  // Jika ada argumen, cek untuk upgrade role
  let upgradeCost = 0;
  let newRole = '';

  switch (commandArgs.toLowerCase()) {
    case 'silver':
      upgradeCost = 30000;
      newRole = 'SILVER';
      break;
    case 'gold':
      upgradeCost = 50000;
      newRole = 'GOLD';
      break;
    default:
      m.reply('Perintah tidak valid. Gunakan "Uprole silver" atau "Uprole gold".');
      return;
  }

  // Mendapatkan saldo pengguna
  const currentBalance = userData.saldo;

  // Pengecekan saldo cukup untuk upgrade
  if (currentBalance < upgradeCost) {
    m.reply(`Saldo Anda tidak mencukupi untuk upgrade ke ${newRole}. Biaya upgrade Rp ${upgradeCost.toLocaleString()}.\n\nSilahkan melakukan deposit saldo dengan cara ketik : Depo ${upgradeCost}`);
    return;
  }

  // Update saldo setelah upgrade
  const newBalance = currentBalance - upgradeCost;

  // Update data pengguna di Firestore
  await usersCollection.doc(userSnapshot.docs[0].id).update({
    saldo: newBalance,
    role: newRole
  });

  // Balas dengan konfirmasi upgrade
  m.reply(`Upgrade ke *Role ${newRole}* berhasil, saldo kamu terpotong sebesar *Rp ${upgradeCost.toLocaleString()}*.\n\nSilahkan ketik *Profil* untuk cek role terbaru`);
}
break;






 case 'kurangsaldo': {
  if (!isOwner) return;
  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;  // Menghapus simbol @ jika ada
  const kiw = `${target}@s.whatsapp.net`;

  if (!target) return m.reply('Format Salah, yang benar : \n*Kurangsaldo Nomor Nominal*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');

  const amountToRemove = parseFloat(args[1]);

  if (isNaN(amountToRemove) || amountToRemove <= 0) {
    return m.reply('Nilai saldo invalid');
  }

  try {
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(target);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return m.reply(`${target} belum terdaftar`);
    }

    const targetUser = userDoc.data();
    const sebelum = targetUser.saldo;
    const akhir = sebelum - amountToRemove;

    if (akhir < 0) {
      return m.reply('Saldo tidak mencukupi');
    }

    // Update data pengguna di Firestore
    await userRef.update({ saldo: akhir });

    const formatSaldo = (amount) => `${amount.toLocaleString()}`;
    const hariini = new Date().toLocaleDateString();
    const time1 = new Date().toLocaleTimeString();
    m.reply(`───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terakhir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);

    const capt = `───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terakhir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`;

    // Kirim pesan ke target user
    client.sendMessage(kiw, {
      text: capt,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName}`,
          thumbnailUrl: `${poster1}`,
          sourceUrl: `${linkGC}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    },);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;


case 'addsaldo': {
  if (!isOwner) return;
  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;  // Menghapus simbol @ jika ada
  const kiw = `${target}@s.whatsapp.net`;

  if (!target) return m.reply('Format Salah, yang benar : \n*Addsaldo Nomor Nominal*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');

  const amountToAdd = parseFloat(args[1]);

  if (isNaN(amountToAdd) || amountToAdd <= 0) {
    return m.reply('Nilai saldo invalid');
  }

  try {
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(target);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return m.reply(`${target} belum terdaftar`);
    }

    const targetUser = userDoc.data();
    const sebelum = targetUser.saldo;
    const akhir = sebelum + amountToAdd;

    // Update data pengguna di Firestore
    await userRef.update({ saldo: akhir });

    const formatSaldo = (amount) => `${amount.toLocaleString()}`;
    const hariini = new Date().toLocaleDateString();
    const time1 = new Date().toLocaleTimeString();
    m.reply(`───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);

    const capt = `───〔 *Update Saldo* 〕──\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`;

    // Kirim pesan ke target user
    client.sendMessage(kiw, {
      text: capt,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName}`,
          thumbnailUrl: `${poster1}`,
          sourceUrl: `${linkGC}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, );
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;

            

      case 'regist':
      case 'daftar': {
  const target = sender.split("@")[0];
  let userData = [];
  const db = admin.firestore();
  
  // Mendapatkan data user dari Firestore
  const userRef = db.collection('users').doc(target);
  const doc = await userRef.get();
  
  if (doc.exists) {
    return;
  }

  const defaultRole = 'BRONZE';
  const newUser = {
    nomor: target,
    saldo: 0,
    role: defaultRole,
  };

  // Menyimpan data user ke Firestore
  await userRef.set(newUser);

  return m.reply(`──〔 *REGISTRASI SUKSES* 〕─\n\n*Nomer :* ${target}\n*Saldo Awal :* 0\n*Role :* BRONZE\n\n*_Anda Sudah Bisa Menggunakan Sistem Topup dan Fitur Deposit Saldo Otomatis_*\n\n*_Contoh Penggunaan :_*\n*Order Otomatis Ketik :* TPO PID TUJUAN\n*Deposit Otomatis Ketik :* Depo Nominal`);
}
break;
      case 'ubahrole': {
  if (!isOwner) return;
  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;  // Menghapus simbol @ jika ada
  const kiwi = `${target}@s.whatsapp.net`;

  if (!target) return m.reply('Format Salah, yang benar : \n*Ubahrole Nomor Role*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');

  const newRole = args[1];

  if (!newRole) return;

  if (!['gold', 'silver', 'owner', 'bronze'].includes(newRole.toLowerCase())) {
    return m.reply(`Role ${newRole} belum tersedia\nRole yang tersedia: BRONZE, SILVER, dan GOLD`);
  }

  try {
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(target);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return m.reply(`${target} belum terdaftar`);
    }

    const targetUser = userDoc.data();
    const awal = targetUser.role;

    // Update data pengguna di Firestore
    await userRef.update({ role: newRole.toUpperCase() });

    m.reply(`───〔 *UPDATE ROLE* 〕──\n\nRole Awal : ${awal}\nRole Baru : ${newRole.toUpperCase()}`);

    const capt = `───〔 *UPDATE ROLE* 〕──\n\nRole Awal : ${awal}\nRole Baru : ${newRole.toUpperCase()}`;

    // Kirim pesan ke target user
    client.sendMessage(kiwi, {
      text: capt,
    });
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;


      case 'profile':
      case 'profil':
case 'saldo': {
  const userNomor = sender.split("@")[0];

  // Ambil data pengguna dari Firestore
  const userRef = db.collection('users').doc(userNomor);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    return m.reply('Silahkan daftar dahulu');
  }

  const userProfile = userDoc.data();

  if (userProfile) {
    const { nomor, saldo, role } = userProfile;
    const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
    const profileMessage = `───〔 *Profile* 〕──\n\n*Username*: ${pushname}\n*Nomor:* ${nomor}\n*Saldo:* ${formatSaldo(saldo)}\n*Role:* ${role}`;
    m.reply(profileMessage);
  }
}
break;

case 'tf': {
  const senderNomor = sender.split("@")[0];

  if (args.length < 2) {
    return m.reply('Format Salah, yang benar : \n*Tf @tag/nomor nominal*\n\nNomor Awali 62...\nNominal Hanya Angka Tanpa Simbol');
  }

  const rawTarget = args[0];
  const target = rawTarget.startsWith('@') ? rawTarget.slice(1) : rawTarget;
  const amountToTransfer = parseFloat(args[1]);

  if (isNaN(amountToTransfer) || amountToTransfer <= 0) {
    return m.reply('Nilai transfer invalid');
  }

  try {
    // Ambil data pengguna pengirim dari Firestore
    const senderRef = db.collection('users').doc(senderNomor);
    const senderDoc = await senderRef.get();

    if (!senderDoc.exists) {
      return m.reply('Anda belum terdaftar');
    }

    const senderUser = senderDoc.data();
    const saldoPengirim = senderUser.saldo;

    if (saldoPengirim < amountToTransfer) {
      return m.reply('Saldo tidak mencukupi untuk melakukan transfer');
    }

    // Ambil data pengguna penerima dari Firestore
    const targetRef = db.collection('users').doc(target);
    const targetDoc = await targetRef.get();

    if (!targetDoc.exists) {
      return m.reply(`Nomor tujuan ${target} belum terdaftar`);
    }

    const targetUser = targetDoc.data();
    const saldoPenerima = targetUser.saldo;
    const saldoPengirimAkhir = saldoPengirim - amountToTransfer;
    const saldoPenerimaAkhir = saldoPenerima + amountToTransfer;

    // Update data pengguna pengirim dan penerima di Firestore
    await senderRef.update({ saldo: saldoPengirimAkhir });
    await targetRef.update({ saldo: saldoPenerimaAkhir });

    const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
    const hariini = new Date().toLocaleDateString();
    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss');

    m.reply(`──〔 *Transfer Saldo Berhasil* 〕──\n\n*Dari Nomor :* ${senderNomor}\n*Ke Nomor :* ${target}\n*Jumlah Transfer :* Rp. ${formatSaldo(amountToTransfer)}\n*Saldo Sekarang :* Rp. ${formatSaldo(saldoPengirimAkhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);

    const capt = `───〔 *Saldo Masuk* 〕──\n\n*Dari Nomor :* ${senderNomor}\n*Jumlah :* Rp. ${formatSaldo(amountToTransfer)}\n*Saldo Sekarang :* Rp. ${formatSaldo(saldoPenerimaAkhir)}\n*Waktu :* ${hariini}, ${time1} WIB`;

    // Kirim pesan ke target user
    const kiw = `${target}@s.whatsapp.net`;
    client.sendMessage(kiw, {
      text: capt,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName}`,
          thumbnailUrl: `${poster1}`,
          sourceUrl: `${linkGC}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break;

 
case 'rank': {
  const transactionsData = JSON.parse(fs.readFileSync('./db/trx.json', 'utf8'));

  // Create a map to store product sales data
  const productSales = new Map();

  // Populate the productSales map
  transactionsData.forEach((trx) => {
    const productName = trx.item;
    const quantity = trx.quantity || 1; // Assuming quantity is 1 if not specified
    const totalAmount = trx.harga * quantity;

    if (!productSales.has(productName)) {
      productSales.set(productName, { quantity: 0, totalAmount: 0 });
    }

    productSales.get(productName).quantity += quantity;
    productSales.get(productName).totalAmount += totalAmount;
  });

  // Sort products by total quantity sold
  const rankedProducts = [...productSales.entries()]
    .sort((a, b) => b[1].quantity - a[1].quantity);

  // Create the response message
  let responseMessage = `◧━━ *🛍️${namaStore}🛍️* ━━◧\n🏆 *RANKING PRODUK*\n▰▰▰▰▰▰▰▰▰▰▰▰▰\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`;

  rankedProducts.forEach((entry, index) => {
    const productName = entry[0];
    const quantity = entry[1].quantity;
    const totalAmount = entry[1].totalAmount;

    responseMessage += `\n*#Rank ${index + 1}*\nProduk: ${productName}\nJumlah Dibeli: ${quantity}\nTotal: Rp ${totalAmount.toLocaleString()}\n`;
  });

  m.reply(responseMessage);
  break;
}
            
            

case 'depom': {
  const paymentDepo = paymentKamu;
  const randomId = Math.floor(10000000 + Math.random() * 90000000);
  const depoCommand = m.text.split(' ');
  const isValidInput = depoCommand.length > 1 && /^\d+$/.test(depoCommand[1]);

  if (!isValidInput) {
      m.reply(`Format Salah atau Nominal Harus Angka\nFormat benar : \`\`\`Depo [Nominal]\`\`\`\n\`\`\`Contoh : Depo 1000\`\`\``);
      return;
  }

  const minimalNominal = 1000;
  const nominal = parseInt(depoCommand[1]);

  if (nominal < minimalNominal) {
      m.reply(`Nominal harus minimal ${minimalNominal}\nFormat benar : \`\`\`Depo [Nominal]\`\`\`\n\`\`\`Contoh : Depo 1000\`\`\``);
      return;
  }

  const biayaLayanan = nominal * 0.007;
  const saldoDiterima = nominal - biayaLayanan;
  const memberNumber = m.sender.split('@')[0];

  const depoData = {
      id: randomId,
      member: memberNumber,
      nominal: nominal,
      biayaLayanan: biayaLayanan,
      saldoDiterima: saldoDiterima,
      tanggal: new Date().toISOString(),
  };

  // Path file riwayat depo yang sudah ada
  const filePath = path.join(__dirname, 'db', 'riwayatdepo.json');

  let riwayatDepo = [];

  // Baca data yang sudah ada jika file riwayatdepo.json ada
  if (fs.existsSync(filePath)) {
      const existingData = fs.readFileSync(filePath, 'utf8');
      riwayatDepo = JSON.parse(existingData);
  }

  // Tambahkan data baru ke riwayat
  riwayatDepo.push(depoData);

  // Tulis kembali data ke file riwayatdepo.json
  fs.writeFileSync(filePath, JSON.stringify(riwayatDepo, null, 2));

  const formattedNominal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(nominal);
  const formattedBiayaLayanan = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(biayaLayanan);
  const formattedSaldoDiterima = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(saldoDiterima);

  let depositInfo = `[ *INFORMASI DEPOSIT* ]\n\n`;
  depositInfo += `*» ID :* ${randomId}\n`;
  depositInfo += `*» Member :* ${memberNumber}\n`;
  depositInfo += `*» Jumlah Bayar :* ${formattedNominal}\n`;
  depositInfo += `*» PAYMENT :*\n${paymentDepo}\n\n`;

  depositInfo += `_Silahkan transfer ke pembayaran yang disediakan dan kirimkan bukti transfer ke Admin dengan cara ketik *BUKTI ID*_\n*ID = ID DEPOSIT KAMU YA*\n\n`;
  depositInfo += `*_${namaStore}_*`;

  client.sendMessage(m.chat, { image: { url: linkQRIS }, caption: depositInfo }, { quoted: m });

  break;
}
            
 case 'pay':           
 case 'payment': {
    const capt = `${paymentKamu}`;
    client.sendMessage(m.chat, { image: { url: linkQRIS }, caption: capt }, { quoted: m });
    break;
 }
            
  case 'deposit':            
case 'depo': {
const _0x160cf5=_0x3984;(function(_0x23f3b1,_0x423be0){const _0x173edc=_0x3984,_0x12ecb7=_0x23f3b1();while(!![]){try{const _0x39abb5=parseInt(_0x173edc(0xa1))/0x1+-parseInt(_0x173edc(0x92))/0x2*(-parseInt(_0x173edc(0x76))/0x3)+-parseInt(_0x173edc(0x8e))/0x4*(parseInt(_0x173edc(0x85))/0x5)+-parseInt(_0x173edc(0x97))/0x6+-parseInt(_0x173edc(0x7e))/0x7*(parseInt(_0x173edc(0xa2))/0x8)+-parseInt(_0x173edc(0xb5))/0x9+parseInt(_0x173edc(0xaa))/0xa;if(_0x39abb5===_0x423be0)break;else _0x12ecb7['push'](_0x12ecb7['shift']());}catch(_0x58c79a){_0x12ecb7['push'](_0x12ecb7['shift']());}}}(_0x3040,0x4f67f));const nomor=sender['split']('@')[0x0],userRef=db[_0x160cf5(0xab)]('users')['doc'](nomor),userDoc=await userRef[_0x160cf5(0x9f)]();if(!userDoc['exists'])return m['reply'](_0x160cf5(0x84));const ref_id=generateUniqueRefID(),apiUrl=_0x160cf5(0xa6),jumlah=parseInt(args[0x0]);function _0x3984(_0x211f64,_0x5d1ba3){const _0x304073=_0x3040();return _0x3984=function(_0x3984fa,_0x3b8ebc){_0x3984fa=_0x3984fa-0x70;let _0x2e5af5=_0x304073[_0x3984fa];return _0x2e5af5;},_0x3984(_0x211f64,_0x5d1ba3);}if(!jumlah||isNaN(jumlah)||jumlah<=0x63)return m[_0x160cf5(0x71)](_0x160cf5(0x87));function _0x3040(){const _0x1c26e3=['POST','\x0a*»\x20Nomer\x20User\x20:*\x20','data','──〔\x20*DEPOSIT\x20GAGAL*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','Terjadi\x20kesalahan\x20pada\x20server.','Pembayaran\x20pertama','empty','*\x0a*»\x20Jam\x20:','4733883uPrBbU','pending','reply','status','\x0a*»\x20Waktu\x20:*\x20','fillStyle','toString','15xolccN','\x20WIB*\x0a\x0a*Status\x20:\x20','toBuffer','application/x-www-form-urlencoded','\x0a\x0a*Status\x20:\x20TIME\x20OUT*\x0a\x0aSesi\x20deposit\x20expired,\x20silahkan\x20deposit\x20ulang','#0B1D33','balance','Status\x20request\x20failed\x20with\x20status\x20','1040263eILnSh','botName','StatusTransaction','fillRect','NewTransaction','#0060D4','Kamu\x20belum\x20terdaftar,\x20silahkan\x20ketik\x20*Daftar*','5rgfTnj','chat','Format\x20yang\x20benar\x20adalah:\x20*Depo\x20Nominal*\x0aContoh:\x20*Depo\x2010000*\x0a\x0aMinimum\x20deposit\x20adalah\x20100.\x20\x0aNilai\x20deposit\x20tidak\x20boleh\x20mengandung\x20titik\x20atau\x20koma,\x20hanya\x20angka.','nomor','toLocaleString','\x0a*»\x20Jumlah\x20Diterima\x20:*\x20Rp\x20','deposits','addColorStop','Success','270888QQDYiv','createLinearGradient','floor','update','216016TcPUOA','getImageData','toCanvas','getTime','Maaf,\x20kamu\x20sudah\x20memiliki\x20deposit\x20yang\x20sedang\x20diproses...','2795070CFkdQM','──〔\x20*DEPOSIT\x20SUKSES\x20!*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','doc','Gagal\x20membuat\x20transaksi:\x20','sendMessage','delete','error','#FFFFFF','get','new','529650lfUTkx','8CyfFBi','log','\x0a*»\x20Username\x20Deposit\x20:*\x20','success','https://paydisini.co.id/api/','where','*\x0a\x0aSaldo\x20sebesar\x20*','json','4637200bWkTwY','collection','Invalid\x20status\x20response:'];_0x3040=function(){return _0x1c26e3;};return _0x3040();}const formatSaldo=_0x4c6655=>''+_0x4c6655[_0x160cf5(0x89)](),apiKey=''+APIKEY_PAYDISINI,service='11',valid_time='300',signatureString=''+apiKey+ref_id+service+jumlah+valid_time+_0x160cf5(0x82),signature=md5(signatureString),requestData={'key':apiKey,'request':_0x160cf5(0xa0),'unique_code':ref_id,'service':service,'amount':jumlah,'note':_0x160cf5(0xb2),'valid_time':valid_time,'type_fee':'1','signature':signature},pendingDeposits=await db[_0x160cf5(0xab)](_0x160cf5(0x8b))[_0x160cf5(0xa7)](_0x160cf5(0x88),'==',nomor)['where'](_0x160cf5(0x72),'==',_0x160cf5(0x70))[_0x160cf5(0x9f)]();if(!pendingDeposits[_0x160cf5(0xb3)])return m[_0x160cf5(0x71)](_0x160cf5(0x96));const depoRef=db[_0x160cf5(0xab)](_0x160cf5(0x8b))[_0x160cf5(0x99)](ref_id);await depoRef['set']({'nomor':nomor,'amount_requested':jumlah,'status':_0x160cf5(0x70)});async function processDeposit(){const _0x1a3388=_0x160cf5;try{const _0x4d2378=await fetch(apiUrl,{'method':'POST','headers':{'Content-Type':_0x1a3388(0x79)},'body':new URLSearchParams(requestData)['toString']()}),_0x22ed50=await _0x4d2378[_0x1a3388(0xa9)]();if(_0x22ed50[_0x1a3388(0xa5)]){const _0x164cd1=_0x22ed50[_0x1a3388(0xaf)]['qr_content'],_0x1d635b=0x1f4,_0x270a5c=createCanvas(_0x1d635b,_0x1d635b),_0x468233=_0x270a5c['getContext']('2d');await QRCode[_0x1a3388(0x94)](_0x270a5c,_0x164cd1,{'errorCorrectionLevel':'H','margin':0x1,'width':_0x1d635b});const _0x24911e=_0x468233[_0x1a3388(0x93)](0x0,0x0,_0x1d635b,_0x1d635b),_0x21ba31=_0x24911e[_0x1a3388(0xaf)]['length'],_0x3214d9=_0x468233[_0x1a3388(0x8f)](0x0,0x0,_0x1d635b,_0x1d635b);_0x3214d9[_0x1a3388(0x8c)](0x0,_0x1a3388(0x7b)),_0x3214d9['addColorStop'](0x1,_0x1a3388(0x83)),_0x468233[_0x1a3388(0x74)]=_0x1a3388(0x9e),_0x468233[_0x1a3388(0x81)](0x0,0x0,_0x1d635b,_0x1d635b);for(let _0x414b21=0x0;_0x414b21<_0x21ba31;_0x414b21+=0x4){if(_0x24911e[_0x1a3388(0xaf)][_0x414b21]<0x80){const _0x14dddd=_0x414b21/0x4%_0x1d635b,_0x333cfc=Math[_0x1a3388(0x90)](_0x414b21/0x4/_0x1d635b);_0x468233[_0x1a3388(0x74)]=_0x3214d9,_0x468233[_0x1a3388(0x81)](_0x14dddd,_0x333cfc,0x1,0x1);}}const _0x5a4f8f=_0x270a5c[_0x1a3388(0x78)](),_0x4ac290='──〔\x20*DETAIL\x20DEPOSIT*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20'+ref_id+_0x1a3388(0xa4)+pushname+'\x0a*»\x20Jumlah\x20Bayar\x20:*\x20Rp\x20'+formatSaldo(_0x22ed50[_0x1a3388(0xaf)]['amount'])+_0x1a3388(0x8a)+formatSaldo(_0x22ed50[_0x1a3388(0xaf)][_0x1a3388(0x7c)])+'\x0a\x0a*Status\x20:\x20Belum\x20Dibayar*\x0a\x0aKamu\x20bisa\x20scan\x20QRIS\x20tersebut\x20melalui\x20*BANK*\x20dan\x20e-Wallet\x20seperti\x20*Dana,\x20Ovo,\x20Gopay,\x20Shopeepay,\x20dll*\x0a\x0a*_Note\x20:_*\x20Deposit\x20di\x20cek\x20otomatis\x20dan\x20akan\x20langsung\x20masuk\x20ke\x20saldo\x20kamu,\x20batas\x20waktu\x20transfer\x20adalah\x205\x20menit\x20sejak\x20deposit\x20dibuat';client[_0x1a3388(0x9b)](m[_0x1a3388(0x86)],{'image':_0x5a4f8f,'caption':_0x4ac290},{'quoted':m});let _0x5a4fe9=_0x22ed50[_0x1a3388(0xaf)]['status'];const _0x5973ef=new Date()[_0x1a3388(0x95)]();while(_0x5a4fe9!==_0x1a3388(0x8d)){await sleep(0x3e8);const _0xb9249f=''+apiKey+ref_id+_0x1a3388(0x80),_0x5ea7b9=md5(_0xb9249f),_0x2dff29={'key':apiKey,'request':'status','unique_code':ref_id,'signature':_0x5ea7b9},_0x3a209a=await fetch(apiUrl,{'method':_0x1a3388(0xad),'headers':{'Content-Type':'application/x-www-form-urlencoded'},'body':new URLSearchParams(_0x2dff29)[_0x1a3388(0x75)]()});if(!_0x3a209a['ok']){console['error'](_0x1a3388(0x7d)+_0x3a209a[_0x1a3388(0x72)]),m[_0x1a3388(0x71)]('Terjadi\x20kesalahan\x20saat\x20memeriksa\x20status\x20deposit.'),await depoRef[_0x1a3388(0x9c)]();break;}const _0x588c71=await _0x3a209a[_0x1a3388(0xa9)]();if(!_0x588c71[_0x1a3388(0xaf)]){console[_0x1a3388(0x9d)](_0x1a3388(0xac),_0x588c71),m['reply'](_0x1a3388(0xb1)),await depoRef[_0x1a3388(0x9c)]();break;}_0x5a4fe9=_0x588c71[_0x1a3388(0xaf)][_0x1a3388(0x72)],console[_0x1a3388(0xa3)](_0x5a4fe9);const _0x4fb15a=new Date()['getTime'](),_0x1e2428=(_0x4fb15a-_0x5973ef)/0x3e8;if(_0x1e2428>=0x12c){m[_0x1a3388(0x71)](_0x1a3388(0xb0)+ref_id+_0x1a3388(0xa4)+pushname+'\x0a*»\x20Jumlah\x20Deposit\x20:*\x20'+formatSaldo(_0x588c71[_0x1a3388(0xaf)]['balance'])+_0x1a3388(0x7a)),await depoRef['delete']();break;}if(_0x5a4fe9===_0x1a3388(0x8d)){const _0x5ae8c0=parseInt(_0x588c71[_0x1a3388(0xaf)][_0x1a3388(0x7c)]),_0x54cd92=_0x1a3388(0x98)+ref_id+_0x1a3388(0xae)+nomor+_0x1a3388(0x73)+hariini+_0x1a3388(0xb4)+time1+_0x1a3388(0x77)+_0x588c71[_0x1a3388(0xaf)][_0x1a3388(0x72)]+_0x1a3388(0xa8)+formatSaldo(_0x588c71[_0x1a3388(0xaf)]['balance'])+'*\x20telah\x20ditambah\x20ke\x20akun\x20kamu\x0a\x0a©\x20_'+global[_0x1a3388(0x7f)]+'_';m[_0x1a3388(0x71)](_0x54cd92);const _0x3d4122=await userRef[_0x1a3388(0x9f)](),_0x5cf4f4=parseInt(_0x3d4122[_0x1a3388(0xaf)]()['saldo'])+_0x5ae8c0;await userRef[_0x1a3388(0x91)]({'saldo':_0x5cf4f4}),await depoRef[_0x1a3388(0x9c)]();break;}}}else m[_0x1a3388(0x71)](_0x1a3388(0x9a)+_0x22ed50['msg']),await depoRef[_0x1a3388(0x9c)]();}catch(_0x2d6189){console[_0x1a3388(0x9d)](_0x2d6189),m[_0x1a3388(0x71)](_0x1a3388(0xb1)),await depoRef['delete']();}}processDeposit();
}
break;







    


















case 'bukti': {
    const commandParts = m.text.split(' ');
    const idDeposit = commandParts[1];

    // Memastikan ID deposit diberikan
    if (!idDeposit) {
        m.reply('Anda harus memberikan ID deposit untuk mengirim bukti.\nFormat: `Bukti IDdeposit`');
        return;
    }

    const depositPath = path.join(__dirname, 'db', 'riwayatdepo.json');

    if (!fs.existsSync(depositPath)) {
        m.reply('Tidak ada riwayat deposit.');
        return;
    }

    // Membaca data dari file riwayatdepo.json
    const riwayatDepo = JSON.parse(fs.readFileSync(depositPath, 'utf8'));
    const deposit = riwayatDepo.find(item => item.id === parseInt(idDeposit));

    if (!deposit) {
        m.reply('ID deposit tidak ditemukan. Pastikan ID yang Anda masukkan sudah benar.');
        return;
    }

    // Memeriksa apakah pesan berisi gambar
    const isImage = m.mtype === 'imageMessage';
    const isQuotedImage = m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;

    if (!isImage && !isQuotedImage) {
        m.reply('Silakan kirim gambar dengan caption *#bukti* atau tag gambar yang sudah dikirim dengan caption *#bukti*.');
        return;
    }

    // Mengunduh dan menyimpan gambar
    const media = isImage ? m : m.message.extendedTextMessage.contextInfo.quotedMessage;
    const buktiPath = path.join(__dirname, 'db', 'bukti_transfer', `${idDeposit}`);
     const buktiimage = `${buktiPath}.jpg`;

    await client.downloadAndSaveMediaMessage(media, buktiPath).catch(err => {
        console.error('Gagal mendownload media:', err);
        m.reply('Terjadi kesalahan saat mendownload bukti transfer. Silakan coba lagi.');
        return;
    });


    // Mengirim gambar bukti ke owner
    const caption_bukti = `
*INFO-DEPOSIT*
*ID Deposit:* ${deposit.id}
*Nomor Member:* ${deposit.member}
*Nominal:* Rp${deposit.nominal}
*Hari:* ${hariini}
*Jam:* ${time1} WIB

Mohon periksa dan konfirmasi.
`;

    const bukti_bayar = {
        image: fs.readFileSync(buktiimage),
        caption: caption_bukti,
    };

    const ownerChat = 'owner-chat-id';  // Ganti dengan ID chat owner
    await client.sendMessage(owned, bukti_bayar);

    // Memberi tahu pengguna bahwa bukti telah diterima
    m.reply('Terima kasih bukti transfer telah diterima. Mohon tunggu konfirmasi dari admin.');

    // Menghapus gambar setelah dikirim untuk keamanan
    fs.unlinkSync(buktiimage);

    break;
}

case 'accdepo': {
    if (!isOwner) return;
    const commandParts = m.text.split(' ');
    const idDeposit = parseInt(commandParts[1]);
    const decision = commandParts[2];

    if (isNaN(idDeposit)) {
        m.reply('ID deposit harus berupa angka.');
        return;
    }

    const depositPath = path.join(__dirname, 'db', 'riwayatdepo.json');

    if (!fs.existsSync(depositPath)) {
        m.reply('Tidak ada data deposit.');
        return;
    }

    let riwayatDepo = JSON.parse(fs.readFileSync(depositPath, 'utf8'));
    const depositIndex = riwayatDepo.findIndex(item => item.id === idDeposit);

    if (depositIndex === -1) {
        m.reply('ID deposit tidak ditemukan.');
        return;
    }

    const deposit = riwayatDepo[depositIndex];
    const userNumber = deposit.member + '@s.whatsapp.net';

    // Jika keputusan adalah "n", kirim pesan bahwa deposit ditolak
    if (decision === 'n') {
        client.sendMessage(userNumber, { text: `Maaf deposit dengan ID ${idDeposit} ditolak. Bukti transfer tidak valid. Silakan coba lagi.` });

        // Hapus data deposit dan bukti transfer
        riwayatDepo.splice(depositIndex, 1);
        fs.writeFileSync(depositPath, JSON.stringify(riwayatDepo, null, 2));

        const buktiPath = path.join(__dirname, 'db', 'bukti_transfer', `${idDeposit}.jpg`);
        if (fs.existsSync(buktiPath)) {
            fs.unlinkSync(buktiPath);
        }

        m.reply(`Data deposit dengan ID ${idDeposit} telah ditolak.`);
        return;
    }

    // Jika keputusan adalah "y", tambahkan saldo ke akun pengguna
    if (decision === 'y') {
        const nominal = deposit.nominal;

        // Update saldo pengguna
        const userRef = db.collection('users').doc(deposit.member);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            m.reply(`Pengguna dengan nomor ${deposit.member} tidak ditemukan.`);
            return;
        }

        const targetUser = userDoc.data();
        const saldoSebelum = targetUser.saldo;
        const saldoSesudah = saldoSebelum + nominal;

        // Update saldo pengguna di Firestore
        await userRef.update({ saldo: saldoSesudah });

        // Kirim pesan ke pengguna tentang saldo yang ditambahkan
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        const message = `Terimakasih... Saldo Anda telah diperbarui.\n*Saldo Terkini:* ${formatSaldo(saldoSesudah)}\n*Waktu:* ${new Date().toLocaleString()}`;

        client.sendMessage(userNumber, { text: message });

        // Hapus data deposit dan bukti transfer
        riwayatDepo.splice(depositIndex, 1);
        fs.writeFileSync(depositPath, JSON.stringify(riwayatDepo, null, 2));

        const buktiPath = path.join(__dirname, 'db', 'bukti_transfer', `${idDeposit}.jpg`);
        if (fs.existsSync(buktiPath)) {
            fs.unlinkSync(buktiPath);
        }

        m.reply(`Data deposit dengan ID ${idDeposit} telah berhasil. Saldo pengguna telah diperbarui.`);
        return;
    }

    m.reply('Format perintah salah. Gunakan: `accdepo IDdeposit y` untuk menyetujui atau `accdepo IDdeposit n` untuk menolak.');
    break;
}


            
         
      case 'tp':
case 'order': {

  const nomor = sender.split("@")[0];
  const userDoc = await firestore.collection('users').doc(nomor).get();
  const userProfile = userDoc.data();
const userData = userDoc.data();
    
    // Menambahkan pemeriksaan format perintah di awal
  if (args.length < 2) {
    return m.reply(`Format Salah\n\nPetunjuk Penggunaan:\n\nUntuk produk Free Fire : \nFormat Order : *TP PID ID*\nContoh : *TP GPFF5 12345678*\n\nUntuk produk Mobile Legends : \nFormat Order : *TP PID ID SERVER*\nContoh : *TP GPML5 12345678 1234*\n\nUntuk produk lainnya: \nFormat Order : *TP PID TUJUAN*\nContoh : *TP TSEL5 085237859745*`);
  }
    
  if (!userProfile) {
    return m.reply(`Kamu belum terdaftar, silahkan ketik : *Daftar* untuk bisa mengakses.`);
  }

  // Cek waktu pemesanan terakhir
  const lastOrderTime = userProfile.lastOrderTime ? userProfile.lastOrderTime.toDate() : null;
  const currentTime = new Date();
  
  if (lastOrderTime && (currentTime - lastOrderTime) < 5000) { // 5000 ms = 5 detik
    return m.reply(`Harap tunggu 5 detik sebelum melakukan pemesanan lagi.`);
  }

  // Update waktu pemesanan terakhir
  userProfile.lastOrderTime = currentTime;
  await firestore.collection('users').doc(nomor).set(userProfile);

  const buyer_sku_code = args[0];
  const lowerCaseSkuCode = buyer_sku_code.toLowerCase();
  const isMobileLegends = lowerCaseSkuCode.includes("ml") || lowerCaseSkuCode.includes("wdp") || lowerCaseSkuCode.includes("wp"); // Cek apakah produk ML
  const isFreeFire = buyer_sku_code.toLowerCase().includes("ff"); // Cek apakah produk FF

  let customer_no; // Menyimpan tujuan, ID, atau ZoneID
  let customer_no2;
  let nickname; // Untuk menyimpan nickname ML/FF jika ada

  if (isMobileLegends) {
    // Untuk ML, format "TP KODEPRODUK ID ZONEID"
    if (args.length < 2) {
      return m.reply(`Format Salah\nFormat yang benar untuk produk FF adalah : \nOrder Otomatis : *TPO PID ID SERVER*\nOrder Dengan Saldo : *TP PID ID SERVER*`);
    }
      
    if (args.length < 3) {
     return m.reply(`Format Salah\nFormat yang benar untuk produk FF adalah : \nOrder Otomatis : *TPO PID ID SERVER*\nOrder Dengan Saldo : *TP PID ID SERVER*`);
    }

    const id = args[1];
    const zone_id = args[2];
    customer_no = `${id}${zone_id}`;
    const { stalkml } = require("./lib/stalk-mlreg.js");

    const nicknameCheck = await stalkml(id, zone_id);

    if (nicknameCheck.status !== 200) { // Jika ID atau ZoneID tidak ditemukan
      return m.reply(`ID atau Server yang kamu masukkan tidak ditemukan. Coba lagi.`);
    }

    nickname = nicknameCheck.nickname; // Simpan nickname ML
  } else if (isFreeFire) {
    // Untuk FF, format "TP KODEPRODUK ID"
    if (args.length < 2) {
      return m.reply(`Format Salah\nFormat yang benar untuk produk FF adalah : \nOrder Otomatis : *TPO PID ID*\nOrder Dengan Saldo : *TP PID ID*`);
    }

    const id = args[1];
    customer_no = id;
    customer_no2 = id;

    const { stalkff } = require("./lib/stalk-ff.js");

    const nicknameCheck = await stalkff(id);

    if (nicknameCheck.status !== 200) { // Jika ID FF tidak ditemukan
      return m.reply(`ID Free Fire yang kamu masukkan tidak ditemukan. Coba lagi.`);
    }

    nickname = nicknameCheck.nickname; // Simpan nickname FF
  } else {
    // Untuk produk non-ML dan non-FF, format "TP KODEPRODUK TUJUAN"
    if (args.length < 2) {
      return m.reply(`Format Salah\nFormat yang benar adalah : \nOrder Otomatis : *TPO PID TUJUAN*\nOrder Dengan Saldo : *TP PID TUJUAN*`);
    }

    customer_no = args[1]; // Tujuan untuk produk non-ML dan non-FF
  }
     
  if (args.length < 1) {
    return m.reply(`Format Salah\nFormat yang benar adalah : \`\`\`TP KODEPRODUK TUJUAN\`\`\`\nContoh : TP PLN20 265382928`);
  }

  const productData = JSON.parse(fs.readFileSync("./db/datadigi.json", "utf8"));
  const product = productData.find(
    (prod) => prod.buyer_sku_code.toLowerCase() === buyer_sku_code.toLowerCase()
  );

  if (!product) {
    return m.reply(`Layanan ${buyer_sku_code} tidak ditemukan.`);
  }

  const originalPrice = parseFloat(product.price);
  let markupPercentage = defaultMarkupPercentage; // Marginal default

  // Hitung harga berdasarkan peran pengguna
  const userRole = userProfile.role;
  if (userRole) {
    if (userRole === "GOLD") {
      markupPercentage = marginGold;
    } else if (userRole === "SILVER") {
      markupPercentage = marginSilver;
    } else if (userRole === "BRONZE") {
      markupPercentage = marginBronze;
    } else if (userRole === "OWNER") {
      markupPercentage = marginOwner; // Tidak ada markup untuk owner
    }
  }

  const increasedPrice = originalPrice * (1 + markupPercentage);
    let adjustedPrice;
    
    // Pembulatan harga berdasarkan role pengguna
    if (userProfile.role === "BRONZE" || userProfile.role === "OWNER") {
      adjustedPrice = Math.round(increasedPrice / 100) * 100;
    } else if (userProfile.role === "SILVER" || userProfile.role === "GOLD") {
      adjustedPrice = Math.floor(increasedPrice);
    } else {
      adjustedPrice = increasedPrice; // Jika role tidak dikenali, gunakan harga asli tanpa pembulatan
    }

  if (userProfile.saldo < adjustedPrice) {
    return m.reply(`Maaf saldo kamu tidak cukup untuk melakukan transaksi ${product.product_name}.\n\nSilahkan melakukan deposit saldo dengan cara ketik : Depo Nominal`);
  }

  userProfile.saldo -= adjustedPrice; // Kurangi saldo pengguna
  await firestore.collection("users").doc(nomor).set(Object.assign({}, userProfile));

  const ref_id = generateUniqueRefID();
  const signature = crypto.createHash("md5").update(username + apiKey + ref_id).digest("hex");
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      buyer_sku_code: buyer_sku_code,
      customer_no: customer_no, // Sesuai dengan apakah ML, FF, atau produk lainnya
      ref_id: ref_id,
      sign: signature,
    }),
  };

  const response = await fetch("https://api.digiflazz.com/v1/transaction", config);
  const data = await response.json();

  m.reply(`*_Pesanan Kamu Sedang Diproses Otomatis Oleh Sistem, Harap Menunggu..._*`);

  let dataStatus = data.data.status;

  while (dataStatus !== "Sukses") {
    await sleep(1000);
    const retryResponse = await fetch("https://api.digiflazz.com/v1/transaction", config);
    const retryData = await retryResponse.json();
    dataStatus = retryData.data.status;

    if (dataStatus === "Gagal") {
      let capt;

      if (isMobileLegends && nickname) { // Respons untuk ML
        capt = `❌〔 *TRANSAKSI GAGAL* 〕❌\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n*» Alasan : ${retryData.data.message}*\n\n*_PESANAN GAGAL HARAP HUBUNGI ADMIN_*\n\n*${namaStore}*`;
      } else if (isFreeFire && nickname) { // Respons untuk FF
        capt = `❌〔 *TRANSAKSI GAGAL* 〕❌\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n*» Alasan : ${retryData.data.message}*\n\n*_PESANAN GAGAL HARAP HUBUNGI ADMIN_*\n\n*${namaStore}*`;
      } else { // Respons untuk produk non-ML dan non-FF
       capt = `❌〔 *TRANSAKSI GAGAL* 〕❌\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n*» Alasan : ${retryData.data.message}*\n\n*_PESANAN GAGAL HARAP HUBUNGI ADMIN_*\n\n*${namaStore}*`;
      }
	
      m.reply(capt);
      userProfile.saldo += adjustedPrice; // Kembalikan saldo jika transaksi gagal
      await firestore.collection("users").doc(nomor).set(Object.assign({}, userProfile));

      // Simpan riwayat transaksi
      let transactions = [];
      if (fs.existsSync("./db/trx.json")) {
        const rawData = fs.readFileSync("./db/trx.json", "utf8");
        transactions = JSON.parse(rawData);
      }

      const newTransaction = {
        nomor: nomor,
        status: retryData.data.status,
        invoice: retryData.data.ref_id,
        item: product.product_name,
        rc: retryData.data.rc,
        tujuan: customer_no,
        harga: adjustedPrice,
        harga_pokok: originalPrice,
        waktu: `${time1} | ${hariini}`,
      };

      transactions.push(newTransaction);

      fs.writeFileSync(
        "./db/trx.json",
        JSON.stringify(transactions, null, 2)
      );

       const toOwn = `*TRANSAKSI GAGAL ⚠️*\n\n*» Nama :* ${pushname}\n*» Nomor :* ${m.sender.split("@")[0]}\n» *Produk :* ${product.product_name}\n» *Tujuan : ${customer_no}*\n\n_Harap Periksa Masalah Pada Pembelian_`; 
        
        // Mengirim pesan kepada pemilik tanpa delay
client.sendMessage(owned, {
  text: toOwn,
});
      break;
    } else if (dataStatus === "Sukses") {
      // Contoh data invoice
      const data = {
        invoice: retryData.data.ref_id,
        product: product.product_name,
        tujuan: customer_no,
        nickname: nickname,  
        harga: adjustedPrice,
        waktu: `${hariini}`,
        sn: retryData.data.sn,
      };

      const backgroundPath = path.join(__dirname, "assets", "BG.png"); // Path ke latar belakang
      const logoPath = `${linkLOGO}`; // Path ke logo

      generateInvoiceWithBackground(data, backgroundPath, logoPath).then((invoicePath) => {
        if (fs.existsSync(invoicePath)) {
          let capt;
          if (isMobileLegends && nickname) { // Respons untuk ML
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else if (isFreeFire && nickname) { // Respons untuk FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else { // Respons untuk produk non-ML dan non-FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          }
          // Kirim gambar invoice dengan latar belakang
          const imageMessage = {
            image: { url: invoicePath },
            caption: capt,
            quoted: m  
          };

          client.sendMessage(m.chat, imageMessage).then(() => {
      // Hapus file invoice setelah berhasil terkirim
      fs.unlinkSync(invoicePath);
    }).catch((err) => {
      console.error("Gagal mengirim gambar:", err);
    });
        } else {
          let capt;
          if (isMobileLegends && nickname) { // Respons untuk ML
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else if (isFreeFire && nickname) { // Respons untuk FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Nickname*: ${nickname}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          } else { // Respons untuk produk non-ML dan non-FF
            capt = `✅〔 *TRANSAKSI SUKSES* 〕✅\n*${product.product_name}*\n\n*» Invoice* : ${retryData.data.ref_id}\n*» Tujuan* : ${customer_no}\n*» Waktu* : ${hariini}\n*» Jam* : ${time1} WIB\n\n──〔 *Serial Number* 〕──\n${retryData.data.sn}\n\n*${namaStore}*`;
          }
          m.reply(capt);
        }
      });

      let transactions = [];
      if (fs.existsSync("./db/trx.json")) {
        const rawData = fs.readFileSync("./db/trx.json", "utf8");
        transactions = JSON.parse(rawData);
      }
      const newTransaction = {
        nomor: nomor,
        status: retryData.data.status,
        invoice: retryData.data.ref_id,
        item: product.product_name,
        rc: retryData.data.rc,
        tujuan: customer_no,
        harga: adjustedPrice,
        harga_pokok: originalPrice,
        waktu: `${time1} | ${hariini}`,
      };
      transactions.push(newTransaction);
      fs.writeFileSync(
        "./db/trx.json",
        JSON.stringify(transactions, null, 2)
      );
      const toUser = `Kamu telah melakukan Pembelian *${product.product_name}*\n\n*» Jam* : ${time1} WIB\n*» Harga :* Rp ${adjustedPrice.toLocaleString()}\n*» Sisa Saldo :* Rp ${userProfile.saldo.toLocaleString()}\n\n*${namaStore}*`;
const profit = adjustedPrice - originalPrice; // Menghitung keuntungan
const toOwn = `*Report Transaksi*\n\n*» Nama :* ${pushname}\n*» Nomor :* ${m.sender.split("@")[0]}\n*» Harga Jual :* ${adjustedPrice}\n*» Harga Pokok :* ${originalPrice}\n*» Keuntungan :* ${profit}\n*» Jam:* ${time1} WIB\n» *Produk :* ${product.product_name}\n» *Tujuan : ${customer_no}*`;

// Mengirim pesan kepada user dengan delay 5 detik
setTimeout(() => {
  client.sendMessage(sender, {
    text: toUser,
  });
}, 5000);

// Mengirim pesan kepada pemilik tanpa delay
client.sendMessage(owned, {
  text: toOwn,
});
      break;
    }
  }
}
break;


case 'tpo': {
  const _0x582ab9=_0x1b8d;(function(_0x172206,_0x144593){const _0x4cdab3=_0x1b8d,_0x235c38=_0x172206();while(!![]){try{const _0x436d3e=-parseInt(_0x4cdab3(0x1a1))/0x1+-parseInt(_0x4cdab3(0x175))/0x2+-parseInt(_0x4cdab3(0x155))/0x3+-parseInt(_0x4cdab3(0x147))/0x4+parseInt(_0x4cdab3(0x170))/0x5*(-parseInt(_0x4cdab3(0x17f))/0x6)+-parseInt(_0x4cdab3(0x133))/0x7+parseInt(_0x4cdab3(0x131))/0x8*(parseInt(_0x4cdab3(0x15d))/0x9);if(_0x436d3e===_0x144593)break;else _0x235c38['push'](_0x235c38['shift']());}catch(_0x1dafbf){_0x235c38['push'](_0x235c38['shift']());}}}(_0x2d80,0x6662b));const nomor=sender[_0x582ab9(0x135)]('@')[0x0],formatSaldo=_0xf7dea3=>_0x582ab9(0x168)+_0xf7dea3[_0x582ab9(0x13a)](),buyer_sku_code=args[0x0];if(!buyer_sku_code)return m[_0x582ab9(0x19f)](_0x582ab9(0x176));const lowerCaseSkuCode=buyer_sku_code[_0x582ab9(0x165)](),isMobileLegends=lowerCaseSkuCode['includes']('ml')||lowerCaseSkuCode[_0x582ab9(0x1a5)](_0x582ab9(0x1a0))||lowerCaseSkuCode['includes']('wp'),isFreeFire=lowerCaseSkuCode['includes']('ff');let customer_no,nickname;const userDoc=await firestore['collection'](_0x582ab9(0x192))[_0x582ab9(0x145)](nomor)['get'](),userProfile=userDoc[_0x582ab9(0x137)]();if(isMobileLegends&&args['length']<0x3)return m[_0x582ab9(0x19f)](_0x582ab9(0x173));else{if(isFreeFire&&args[_0x582ab9(0x1aa)]<0x2)return m[_0x582ab9(0x19f)](_0x582ab9(0x184));else{if(!isMobileLegends&&!isFreeFire&&args[_0x582ab9(0x1aa)]<0x2)return m[_0x582ab9(0x19f)](_0x582ab9(0x153));}}if(!userProfile)return m['reply'](_0x582ab9(0x146));if(isMobileLegends){if(args['length']<0x3)return m[_0x582ab9(0x19f)](_0x582ab9(0x138));const id=args[0x1],zone_id=args[0x2];customer_no=''+id+zone_id;const {stalkml}=require('./lib/stalk-mlreg.js'),nicknameCheck=await stalkml(id,zone_id);if(nicknameCheck[_0x582ab9(0x154)]!==0xc8)return m['reply']('ID\x20atau\x20Server\x20yang\x20kamu\x20masukkan\x20tidak\x20ditemukan.\x20Coba\x20lagi.');nickname=nicknameCheck[_0x582ab9(0x156)];}else{if(isFreeFire){if(args['length']<0x2)return m[_0x582ab9(0x19f)]('Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20FF\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*```TPO\x20PID\x20ID```*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*```TP\x20PID\x20ID```*');const id=args[0x1];customer_no=id;const {stalkff}=require(_0x582ab9(0x139)),nicknameCheck=await stalkff(id);if(nicknameCheck[_0x582ab9(0x154)]!==0xc8)return m[_0x582ab9(0x19f)](_0x582ab9(0x159));nickname=nicknameCheck[_0x582ab9(0x156)];}else{if(args[_0x582ab9(0x1aa)]<0x2)return m['reply'](_0x582ab9(0x152));customer_no=args[0x1];}}function _0x2d80(){const _0x44d1ab=['*\x0a\x0a*»\x20Invoice*\x20:\x20','utf8','15800808ytnYNt','\x0a*»\x20Tujuan*\x20:\x20','2614892caeCmQ','\x0a\x0a*Status\x20:\x20Belum\x20Dibayar*\x0a\x0aKamu\x20bisa\x20scan\x20QRIS\x20tersebut\x20melalui\x20*BANK*\x20dan\x20e-Wallet\x20seperti\x20*Dana,\x20Ovo,\x20Gopay,\x20Shopeepay,\x20dll*\x0a\x0a*_Note\x20:_*\x20Pesanan\x20kamu\x20akan\x20diproses\x20otomatis\x20setelah\x20pembayaran\x20selesai,\x20batas\x20waktu\x20transfer\x20adalah\x205\x20menit\x20sejak\x20deposit\x20dibuat','split','stringify','data','Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20ML\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*```TPO\x20PID\x20ID\x20SERVER```*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*```TP\x20PID\x20ID\x20SERVER```*','./lib/stalk-ff.js','toLocaleString','Pembayaran\x20produk','qr_content','ref_id','\x0a*»\x20Nomor\x20:*\x20','hex','toBuffer','catch','\x0a*»\x20Produk\x20:*\x20','*\x20telah\x20dikembalikan\x20ke\x20saldo\x20akun,\x20cek\x20sisa\x20saldo\x20kamu\x20dengan\x20ketik\x20*```Profil/Saldo```*\x0a\x0aSilahkan\x20ulangi\x20pembelian\x20beberapa\x20saat\x20lagi\x20atau\x20jika\x20masih\x20gagal\x20silahkan\x20lapor\x20kepada\x20Admin','role','doc','Kamu\x20belum\x20terdaftar,\x20silahkan\x20ketik\x20:\x20*Daftar*\x20untuk\x20bisa\x20mengakses.','1555792pUnwac','application/json','\x20|\x20','Terjadi\x20kesalahan\x20saat\x20memproses\x20pembayaran.','https://paydisini.co.id/api/','writeFileSync','NewTransaction','new','sender','existsSync','❌〔\x20*TRANSAKSI\x20GAGAL*\x20〕❌\x0a*','Format\x20Salah\x0aFormat\x20yang\x20benar\x20adalah\x20:\x20```TP\x20KODEPRODUK\x20TUJUAN```\x0aContoh\x20:\x20TP\x20PLN20\x20265382928','Format\x20Salah\x0aFormat\x20yang\x20benar\x20adalah\x20:\x20TPO\x20PID\x20TUJUAN\x0aContoh\x20:\x20TPO\x20TSEL5\x20085237859745','status','516756XjhxlP','nickname','product_name','sendMessage','ID\x20Free\x20Fire\x20yang\x20kamu\x20masukkan\x20tidak\x20ditemukan.\x20Coba\x20lagi.','readFileSync','https://api.digiflazz.com/v1/transaction','\x0a*»\x20Harga\x20Jual\x20:*\x20','9kikFqQ','unlinkSync','Error\x20during\x20payment\x20processing:','\x0a\x0a*Status\x20:\x20TIME\x20OUT*\x0a\x0aSesi\x20pembayaran\x20expired,\x20silahkan\x20coba\x20lagi.','\x0a*»\x20Keuntungan\x20:*\x20','\x0a*»\x20Harga\x20:*\x20Rp\x20','✅〔\x20*TRANSAKSI\x20SUKSES*\x20〕✅\x0a*','#0B1D33','toLowerCase','POST','push','Rp.\x20','Layanan\x20','then','Status\x20request\x20failed\x20with\x20status\x20','getImageData','\x0a*»\x20Nickname*:\x20','Sukses','./db/datadigi.json','540535CFMbOG','\x0a»\x20*Tujuan\x20:\x20','saldo','Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20ML\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*TPO\x20PID\x20ID\x20SERVER*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*TP\x20PID\x20ID\x20SERVER*','OWNER','552832zaqMoF','Format\x20Salah\x0a\x0aPetunjuk\x20Penggunaan:\x0a\x0aUntuk\x20produk\x20Free\x20Fire\x20:\x20\x0aFormat\x20Order\x20:\x20*TPO\x20PID\x20ID*\x0aContoh\x20:\x20*TPO\x20GPFF5\x2012345678*\x0a\x0aUntuk\x20produk\x20Mobile\x20Legends\x20:\x20\x0aFormat\x20Order\x20:\x20*TPO\x20PID\x20ID\x20SERVER*\x0aContoh\x20:\x20*TPO\x20GPML5\x2012345678\x201234*\x0a\x0aUntuk\x20produk\x20lainnya:\x20\x0aFormat\x20Order\x20:\x20*TPO\x20PID\x20TUJUAN*\x0aContoh\x20:\x20*TPO\x20TSEL5\x20085237859745*','toCanvas','getTime','assets','\x20WIB\x0a\x0a──〔\x20*Serial\x20Number*\x20〕──\x0a','fillStyle','md5','#0060D4','fillRect','6JbENgA','collection','\x20WIB\x0a\x0a*»\x20Alasan\x20:\x20','BRONZE','application/x-www-form-urlencoded','Format\x20Salah\x0aFormat\x20yang\x20benar\x20untuk\x20produk\x20FF\x20adalah\x20:\x20\x0aOrder\x20Otomatis\x20:\x20*TPO\x20PID\x20ID*\x0aOrder\x20Dengan\x20Saldo\x20:\x20*TP\x20PID\x20ID*','*\x0a\x0a*_PESANAN\x20GAGAL\x20HARAP\x20HUBUNGI\x20ADMIN_*\x0a\x0a*','createLinearGradient','set','*\x0a\x0a_Harap\x20Periksa\x20Masalah\x20Pada\x20Pembelian_','Terjadi\x20kesalahan\x20pada\x20server.','createHash','StatusTransaction','Terjadi\x20kesalahan\x20saat\x20membuat\x20pembayaran:\x20','price','\x0a*»\x20Jam*\x20:\x20','GOLD','error','\x0a\x0a*','users','\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20','floor','Gagal','buyer_sku_code','success','BG.png','300','assign','*TRANSAKSI\x20GAGAL\x20⚠️*\x0a\x0a*»\x20Nama\x20:*\x20','Success','getContext','\x0a*»\x20Jam:*\x20','reply','wdp','236451GMOdcv','./db/trx.json','\x20tidak\x20ditemukan.','message','includes','chat','*_✅\x20Pembayaran\x20berhasil.\x20Pesanan\x20sedang\x20diproses..._*','update','\x0a*»\x20Waktu*\x20:\x20','length','\x0a»\x20*Harga\x20Pokok\x20:*\x20','json','Gagal\x20mengirim\x20gambar:','addColorStop','\x0a*»\x20Nickname\x20:*\x20','amount','*Report\x20Transaksi*\x0a\x0a*»\x20Nama\x20:*\x20','SILVER','parse','\x20WIB\x0a»\x20*Produk\x20:*\x20'];_0x2d80=function(){return _0x44d1ab;};return _0x2d80();}const productData=JSON[_0x582ab9(0x12d)](fs[_0x582ab9(0x15a)](_0x582ab9(0x16f),'utf8')),product=productData['find'](_0x1a7ade=>_0x1a7ade[_0x582ab9(0x196)]['toLowerCase']()===buyer_sku_code[_0x582ab9(0x165)]());if(!product)return m[_0x582ab9(0x19f)](_0x582ab9(0x169)+buyer_sku_code+_0x582ab9(0x1a3));const originalPrice=parseFloat(product[_0x582ab9(0x18d)]);let markupPercentage=defaultMarkupPercentage;const userRole=userProfile[_0x582ab9(0x144)];function _0x1b8d(_0x57a59d,_0x1d8cde){const _0x2d8072=_0x2d80();return _0x1b8d=function(_0x1b8de2,_0x2e40d0){_0x1b8de2=_0x1b8de2-0x126;let _0x377e2e=_0x2d8072[_0x1b8de2];return _0x377e2e;},_0x1b8d(_0x57a59d,_0x1d8cde);}if(userRole){if(userRole===_0x582ab9(0x18f))markupPercentage=marginGold;else{if(userRole===_0x582ab9(0x12c))markupPercentage=marginSilver;else{if(userRole===_0x582ab9(0x182))markupPercentage=marginBronze;else userRole==='OWNER'&&(markupPercentage=marginOwner);}}}const increasedPrice=originalPrice*(0x1+markupPercentage);let adjustedPrice;if(userProfile[_0x582ab9(0x144)]===_0x582ab9(0x182)||userProfile[_0x582ab9(0x144)]===_0x582ab9(0x174))adjustedPrice=Math['round'](increasedPrice/0x64)*0x64;else userProfile['role']===_0x582ab9(0x12c)||userProfile[_0x582ab9(0x144)]===_0x582ab9(0x18f)?adjustedPrice=Math[_0x582ab9(0x194)](increasedPrice):adjustedPrice=increasedPrice;const ref_id=generateUniqueRefID(),apiKeyPG=''+APIKEY_PAYDISINI,service='11',valid_time=_0x582ab9(0x199),signatureString=''+apiKeyPG+ref_id+service+adjustedPrice+valid_time+_0x582ab9(0x14d),signaturepg=md5(signatureString),requestData={'key':apiKeyPG,'request':_0x582ab9(0x14e),'unique_code':ref_id,'service':service,'amount':adjustedPrice,'note':_0x582ab9(0x13b),'valid_time':valid_time,'type_fee':'1','signature':signaturepg},apiUrl=_0x582ab9(0x14b);async function processOrder(){const _0x1c533f=_0x582ab9;try{const _0x3a03c9=await fetch(apiUrl,{'method':_0x1c533f(0x166),'headers':{'Content-Type':_0x1c533f(0x183)},'body':new URLSearchParams(requestData)['toString']()}),_0x42c912=await _0x3a03c9[_0x1c533f(0x126)]();if(_0x42c912[_0x1c533f(0x197)]){const _0x1ee895=_0x42c912['data'][_0x1c533f(0x13c)],_0x34f6ab=0x1f4,_0x56c39f=createCanvas(_0x34f6ab,_0x34f6ab),_0x3689f9=_0x56c39f[_0x1c533f(0x19d)]('2d');await QRCode[_0x1c533f(0x177)](_0x56c39f,_0x1ee895,{'errorCorrectionLevel':'H','margin':0x1,'width':_0x34f6ab});const _0x4faa52=_0x3689f9[_0x1c533f(0x16c)](0x0,0x0,_0x34f6ab,_0x34f6ab),_0x448ffc=_0x4faa52[_0x1c533f(0x137)][_0x1c533f(0x1aa)],_0x3e24d4=_0x3689f9[_0x1c533f(0x186)](0x0,0x0,_0x34f6ab,_0x34f6ab);_0x3e24d4[_0x1c533f(0x128)](0x0,_0x1c533f(0x164)),_0x3e24d4[_0x1c533f(0x128)](0x1,_0x1c533f(0x17d)),_0x3689f9[_0x1c533f(0x17b)]='#FFFFFF',_0x3689f9[_0x1c533f(0x17e)](0x0,0x0,_0x34f6ab,_0x34f6ab);for(let _0x5296e0=0x0;_0x5296e0<_0x448ffc;_0x5296e0+=0x4){if(_0x4faa52[_0x1c533f(0x137)][_0x5296e0]<0x80){const _0x8e5716=_0x5296e0/0x4%_0x34f6ab,_0x2b7614=Math[_0x1c533f(0x194)](_0x5296e0/0x4/_0x34f6ab);_0x3689f9[_0x1c533f(0x17b)]=_0x3e24d4,_0x3689f9[_0x1c533f(0x17e)](_0x8e5716,_0x2b7614,0x1,0x1);}}const _0x390a39=_0x56c39f[_0x1c533f(0x140)](),_0x2e50b1='──〔\x20*DETAIL\x20PESANAN*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20'+ref_id+_0x1c533f(0x142)+product[_0x1c533f(0x157)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x1c533f(0x129)+nickname+_0x1c533f(0x193)+formatSaldo(_0x42c912[_0x1c533f(0x137)][_0x1c533f(0x12a)])+_0x1c533f(0x134);client[_0x1c533f(0x158)](m[_0x1c533f(0x1a6)],{'image':_0x390a39,'caption':_0x2e50b1},{'quoted':m});let _0xa09500=_0x42c912[_0x1c533f(0x137)][_0x1c533f(0x154)];const _0x33bc22=new Date()[_0x1c533f(0x178)]();while(_0xa09500!==_0x1c533f(0x19c)){await sleep(0x3e8);const _0x1f75db=''+apiKeyPG+ref_id+_0x1c533f(0x18b),_0x31cc8f=md5(_0x1f75db),_0x5dd351={'key':apiKeyPG,'request':_0x1c533f(0x154),'unique_code':ref_id,'signature':_0x31cc8f},_0x38e679=await fetch(apiUrl,{'method':_0x1c533f(0x166),'headers':{'Content-Type':_0x1c533f(0x183)},'body':new URLSearchParams(_0x5dd351)['toString']()});if(!_0x38e679['ok']){console[_0x1c533f(0x190)](_0x1c533f(0x16b)+_0x38e679[_0x1c533f(0x154)]),m[_0x1c533f(0x19f)]('Terjadi\x20kesalahan\x20saat\x20memeriksa\x20status\x20pembayaran.');break;}const _0x2bf5b4=await _0x38e679[_0x1c533f(0x126)]();if(!_0x2bf5b4[_0x1c533f(0x137)]){console[_0x1c533f(0x190)]('Invalid\x20status\x20response:',_0x2bf5b4),m[_0x1c533f(0x19f)](_0x1c533f(0x189));break;}_0xa09500=_0x2bf5b4[_0x1c533f(0x137)][_0x1c533f(0x154)];const _0x1eb188=new Date()['getTime'](),_0x66d8dc=(_0x1eb188-_0x33bc22)/0x3e8;if(_0x66d8dc>=0x12c){m[_0x1c533f(0x19f)]('──〔\x20*PEMBAYARAN\x20GAGAL*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20'+ref_id+_0x1c533f(0x142)+product['product_name']+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x1c533f(0x129)+nickname+'\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20'+formatSaldo(_0x42c912[_0x1c533f(0x137)][_0x1c533f(0x12a)])+_0x1c533f(0x160));break;}if(_0xa09500===_0x1c533f(0x19c)){m[_0x1c533f(0x19f)](_0x1c533f(0x1a7));const _0x9829b5=crypto[_0x1c533f(0x18a)](_0x1c533f(0x17c))[_0x1c533f(0x1a8)](username+apiKey+ref_id)['digest'](_0x1c533f(0x13f)),_0x5aaf35={'method':'POST','headers':{'Content-Type':_0x1c533f(0x148)},'body':JSON[_0x1c533f(0x136)]({'username':username,'buyer_sku_code':buyer_sku_code,'customer_no':customer_no,'ref_id':ref_id,'sign':_0x9829b5})},_0x375c3a=await fetch(_0x1c533f(0x15b),_0x5aaf35),_0x52c0aa=await _0x375c3a[_0x1c533f(0x126)]();let _0x360a2c=_0x52c0aa[_0x1c533f(0x137)]['status'];while(_0x360a2c!==_0x1c533f(0x16e)){await sleep(0x3e8);const _0x3ccdb3=await fetch(_0x1c533f(0x15b),_0x5aaf35),_0x1b0aaf=await _0x3ccdb3[_0x1c533f(0x126)]();_0x360a2c=_0x1b0aaf['data'][_0x1c533f(0x154)];if(_0x360a2c===_0x1c533f(0x195)){let _0x1dce85;if(isMobileLegends&&nickname)_0x1dce85=_0x1c533f(0x151)+product[_0x1c533f(0x157)]+_0x1c533f(0x12f)+_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x13d)]+_0x1c533f(0x132)+customer_no+'\x0a*»\x20Nickname*:\x20'+nickname+_0x1c533f(0x162)+adjustedPrice[_0x1c533f(0x13a)]()+_0x1c533f(0x1a9)+hariini+_0x1c533f(0x18e)+time1+_0x1c533f(0x181)+_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x1a4)]+_0x1c533f(0x185)+namaStore+'*';else isFreeFire&&nickname?_0x1dce85='❌〔\x20*TRANSAKSI\x20GAGAL*\x20〕❌\x0a*'+product[_0x1c533f(0x157)]+_0x1c533f(0x12f)+_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x13d)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x1c533f(0x16d)+nickname+'\x0a*»\x20Harga\x20:*\x20Rp\x20'+adjustedPrice[_0x1c533f(0x13a)]()+'\x0a*»\x20Waktu*\x20:\x20'+hariini+_0x1c533f(0x18e)+time1+_0x1c533f(0x181)+_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x1a4)]+_0x1c533f(0x185)+namaStore+'*':_0x1dce85=_0x1c533f(0x151)+product[_0x1c533f(0x157)]+_0x1c533f(0x12f)+_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x13d)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+'\x0a*»\x20Harga\x20:*\x20Rp\x20'+adjustedPrice['toLocaleString']()+'\x0a*»\x20Waktu*\x20:\x20'+hariini+_0x1c533f(0x18e)+time1+_0x1c533f(0x181)+_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x1a4)]+_0x1c533f(0x185)+namaStore+'*';m[_0x1c533f(0x19f)](_0x1dce85),userProfile[_0x1c533f(0x172)]+=adjustedPrice,await firestore[_0x1c533f(0x180)](_0x1c533f(0x192))[_0x1c533f(0x145)](nomor)[_0x1c533f(0x187)](Object[_0x1c533f(0x19a)]({},userProfile));const _0xe29746='Pembelian\x20gagal\x20dan\x20Saldo\x20kamu\x20sebesar\x20*Rp\x20'+adjustedPrice[_0x1c533f(0x13a)]()+_0x1c533f(0x143);setTimeout(()=>{const _0x3db645=_0x1c533f;m[_0x3db645(0x19f)](_0xe29746);},0xbb8);let _0x1495e1=[];if(fs[_0x1c533f(0x150)](_0x1c533f(0x1a2))){const _0x22caaf=fs[_0x1c533f(0x15a)](_0x1c533f(0x1a2),'utf8');_0x1495e1=JSON[_0x1c533f(0x12d)](_0x22caaf);}const _0x4090a6={'nomor':nomor,'status':_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x154)],'invoice':_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x13d)],'item':product['product_name'],'rc':_0x1b0aaf['data']['rc'],'tujuan':customer_no,'harga':adjustedPrice,'harga_pokok':originalPrice,'waktu':time1+'\x20|\x20'+hariini};_0x1495e1[_0x1c533f(0x167)](_0x4090a6),fs[_0x1c533f(0x14c)]('./db/trx.json',JSON[_0x1c533f(0x136)](_0x1495e1,null,0x2));const _0x34f699=_0x1c533f(0x19b)+pushname+_0x1c533f(0x13e)+m[_0x1c533f(0x14f)][_0x1c533f(0x135)]('@')[0x0]+'\x0a»\x20*Produk\x20:*\x20'+product[_0x1c533f(0x157)]+_0x1c533f(0x171)+customer_no+_0x1c533f(0x188);client[_0x1c533f(0x158)](owned,{'text':_0x34f699});break;}else{if(_0x360a2c===_0x1c533f(0x16e)){const _0x5208ee={'invoice':_0x1b0aaf[_0x1c533f(0x137)]['ref_id'],'product':product[_0x1c533f(0x157)],'tujuan':customer_no,'nickname':nickname,'harga':adjustedPrice,'waktu':''+hariini,'sn':_0x1b0aaf[_0x1c533f(0x137)]['sn']},_0x4816fa=path['join'](__dirname,_0x1c533f(0x179),_0x1c533f(0x198)),_0x3ecc6c=''+linkLOGO;generateInvoiceWithBackground(_0x5208ee,_0x4816fa,_0x3ecc6c)[_0x1c533f(0x16a)](_0x475b16=>{const _0x4aadce=_0x1c533f;if(fs['existsSync'](_0x475b16)){let _0x34b302;if(isMobileLegends&&nickname)_0x34b302='✅〔\x20*TRANSAKSI\x20SUKSES*\x20〕✅\x0a*'+product[_0x4aadce(0x157)]+'*\x0a\x0a*»\x20Invoice*\x20:\x20'+_0x1b0aaf[_0x4aadce(0x137)][_0x4aadce(0x13d)]+_0x4aadce(0x132)+customer_no+_0x4aadce(0x16d)+nickname+'\x0a*»\x20Harga\x20:*\x20Rp\x20'+adjustedPrice[_0x4aadce(0x13a)]()+'\x0a*»\x20Waktu*\x20:\x20'+hariini+'\x0a*»\x20Jam*\x20:\x20'+time1+_0x4aadce(0x17a)+_0x1b0aaf[_0x4aadce(0x137)]['sn']+'\x0a\x0a*'+namaStore+'*';else isFreeFire&&nickname?_0x34b302=_0x4aadce(0x163)+product[_0x4aadce(0x157)]+'*\x0a\x0a*»\x20Invoice*\x20:\x20'+_0x1b0aaf['data'][_0x4aadce(0x13d)]+'\x0a*»\x20Tujuan*\x20:\x20'+customer_no+_0x4aadce(0x16d)+nickname+_0x4aadce(0x162)+adjustedPrice[_0x4aadce(0x13a)]()+_0x4aadce(0x1a9)+hariini+'\x0a*»\x20Jam*\x20:\x20'+time1+_0x4aadce(0x17a)+_0x1b0aaf[_0x4aadce(0x137)]['sn']+_0x4aadce(0x191)+namaStore+'*':_0x34b302=_0x4aadce(0x163)+product[_0x4aadce(0x157)]+'*\x0a\x0a*»\x20Invoice*\x20:\x20'+_0x1b0aaf[_0x4aadce(0x137)]['ref_id']+_0x4aadce(0x132)+customer_no+_0x4aadce(0x162)+adjustedPrice[_0x4aadce(0x13a)]()+_0x4aadce(0x1a9)+hariini+_0x4aadce(0x18e)+time1+_0x4aadce(0x17a)+_0x1b0aaf[_0x4aadce(0x137)]['sn']+'\x0a\x0a*'+namaStore+'*';const _0x222355={'caption':_0x34b302,'image':{'url':_0x475b16}};client[_0x4aadce(0x158)](m['chat'],_0x222355)[_0x4aadce(0x16a)](()=>{const _0x2e40dd=_0x4aadce;fs[_0x2e40dd(0x15e)](_0x475b16);})[_0x4aadce(0x141)](_0x19afad=>{const _0x11b536=_0x4aadce;console['error'](_0x11b536(0x127),_0x19afad);});}else{let _0x430098;if(isMobileLegends&&nickname)_0x430098=_0x4aadce(0x163)+product[_0x4aadce(0x157)]+_0x4aadce(0x12f)+_0x1b0aaf[_0x4aadce(0x137)][_0x4aadce(0x13d)]+_0x4aadce(0x132)+customer_no+'\x0a*»\x20Nickname*:\x20'+nickname+_0x4aadce(0x162)+adjustedPrice[_0x4aadce(0x13a)]()+_0x4aadce(0x1a9)+hariini+_0x4aadce(0x18e)+time1+'\x20WIB\x0a\x0a──〔\x20*Serial\x20Number*\x20〕──\x0a'+_0x1b0aaf[_0x4aadce(0x137)]['sn']+_0x4aadce(0x191)+namaStore+'*';else isFreeFire&&nickname?_0x430098=_0x4aadce(0x163)+product[_0x4aadce(0x157)]+_0x4aadce(0x12f)+_0x1b0aaf[_0x4aadce(0x137)][_0x4aadce(0x13d)]+_0x4aadce(0x132)+customer_no+_0x4aadce(0x16d)+nickname+_0x4aadce(0x162)+adjustedPrice['toLocaleString']()+_0x4aadce(0x1a9)+hariini+_0x4aadce(0x18e)+time1+_0x4aadce(0x17a)+_0x1b0aaf['data']['sn']+_0x4aadce(0x191)+namaStore+'*':_0x430098='✅〔\x20*TRANSAKSI\x20SUKSES*\x20〕✅\x0a*'+product[_0x4aadce(0x157)]+_0x4aadce(0x12f)+_0x1b0aaf[_0x4aadce(0x137)][_0x4aadce(0x13d)]+_0x4aadce(0x132)+customer_no+_0x4aadce(0x162)+adjustedPrice[_0x4aadce(0x13a)]()+_0x4aadce(0x1a9)+hariini+'\x0a*»\x20Jam*\x20:\x20'+time1+_0x4aadce(0x17a)+_0x1b0aaf[_0x4aadce(0x137)]['sn']+_0x4aadce(0x191)+namaStore+'*';m[_0x4aadce(0x19f)](_0x430098);}});let _0x1361c2=[];if(fs[_0x1c533f(0x150)]('./db/trx.json')){const _0xf5bf25=fs['readFileSync'](_0x1c533f(0x1a2),_0x1c533f(0x130));_0x1361c2=JSON[_0x1c533f(0x12d)](_0xf5bf25);}const _0x132e21={'nomor':nomor,'status':_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x154)],'invoice':_0x1b0aaf[_0x1c533f(0x137)][_0x1c533f(0x13d)],'item':product['product_name'],'rc':_0x1b0aaf[_0x1c533f(0x137)]['rc'],'tujuan':customer_no,'harga':adjustedPrice,'harga_pokok':originalPrice,'waktu':time1+_0x1c533f(0x149)+hariini};_0x1361c2['push'](_0x132e21),fs[_0x1c533f(0x14c)](_0x1c533f(0x1a2),JSON[_0x1c533f(0x136)](_0x1361c2,null,0x2));const _0x495a88=adjustedPrice-originalPrice,_0x10e26e=_0x1c533f(0x12b)+pushname+_0x1c533f(0x13e)+m[_0x1c533f(0x14f)][_0x1c533f(0x135)]('@')[0x0]+_0x1c533f(0x15c)+adjustedPrice+_0x1c533f(0x1ab)+originalPrice+_0x1c533f(0x161)+_0x495a88+_0x1c533f(0x19e)+time1+_0x1c533f(0x12e)+product[_0x1c533f(0x157)]+_0x1c533f(0x171)+customer_no+'*';client[_0x1c533f(0x158)](owned,{'text':_0x10e26e});break;}}}}}}else m[_0x1c533f(0x19f)](_0x1c533f(0x18c)+_0x42c912[_0x1c533f(0x1a4)]);}catch(_0x45dde8){console[_0x1c533f(0x190)](_0x1c533f(0x15f),_0x45dde8),m[_0x1c533f(0x19f)](_0x1c533f(0x14a));}}processOrder();
  break;
}


case 'tps': {
    const nomor = sender.split("@")[0];
    console.log('Sender:', sender);
    console.log('User Nomor:', nomor);

    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(nomor);
    
   let userData;

try {
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
        console.log('User tidak ditemukan, membuat data baru...');
        const defaultRole = 'BRONZE';
        const initialSaldo = 0;

        // Data default untuk user baru
        const newUser = {
            nomor: nomor,
            saldo: initialSaldo,
            role: defaultRole,
        };

        try {
            // Simpan data baru ke Firestore
            await userRef.set(newUser);
            userData = newUser; // Gunakan data baru
        } catch (error) {
            console.error('Error creating new user:', error);
            return m.reply('Gagal membuat data pengguna baru. Silakan coba lagi.');
        }
    } else {
        // Jika data pengguna sudah ada, ambil datanya
        userData = userDoc.data();
    }

    console.log('User Data:', userData);
} catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
}

// Program dilanjutkan di sini menggunakan `userData`
console.log('Program dilanjutkan dengan data pengguna:', userData);
// Contoh: Mengakses saldo pengguna
console.log('Saldo pengguna:', userData.saldo);
    const currentBalance = userData.saldo; // Ambil saldo pengguna
    const userRole = userData.role; // Ambil role pengguna

    // Ambil argumen dari perintah
    const args = m.body.split(" "); // Pastikan untuk mendapatkan argumen dari body pesan
    const smmId = parseInt(args[1]); // SMM ID
    const quantity = parseInt(args[2]); // Jumlah
    const targetLink = args[3]; // Target link dari argumen ketiga

    // Validasi argumen
    if (!smmId || isNaN(quantity) || quantity <= 0 || !targetLink) {
        return m.reply('Format perintah salah. Contoh: *Tps SMM_ID JUMLAH TARGET*');
    }

    // Ambil data layanan SMM
    let smmData;
    try {
        smmData = JSON.parse(fs.readFileSync('./db/datasmm.json', 'utf8'));
    } catch (error) {
        console.error('Error reading SMM data:', error);
        return m.reply('Terjadi kesalahan saat mengakses data layanan SMM. Silakan coba lagi nanti.');
    }

    // Cari layanan berdasarkan SMM ID
    const service = smmData.find(item => item.id === smmId);
    if (!service) {
        return m.reply(`Layanan dengan SMM ID ${smmId} tidak ditemukan.`);
    }

    // Hitung harga per follower berdasarkan role
    const originalPrice = parseFloat(service.price);
    let markupPercentage = defaultMarkupPercentage; // Markup default

    // Ambil markup berdasarkan role pengguna
    switch (userRole) {
        case "GOLD":
            markupPercentage = marginsmmGold;
            break;
        case "SILVER":
            markupPercentage = marginsmmSilver;
            break;
        case "BRONZE":
            markupPercentage = marginsmmBronze;
            break;
        case "OWNER":
            markupPercentage = marginsmmOwner;
            break;
        default:
            break;
    }

// Hitung harga per satuan dengan markup dan bagi 1000
let adjustedPrice = (originalPrice * (1 + markupPercentage) / 1000);

// Bulatkan harga ke dua tempat desimal
adjustedPrice = Math.round(adjustedPrice * 100) / 100;

// Bulatkan harga ke kelipatan 0.1 terdekat
adjustedPrice = Math.ceil(adjustedPrice * 10) / 10;

// Pastikan harga minimal adalah 0.1
if (adjustedPrice < 0.1) {
    adjustedPrice = 0.1;
}

// Assign harga yang sudah disesuaikan
service.adjustedPrice = adjustedPrice;


    const pricePerFollower = service.adjustedPrice;
    const totalCost = pricePerFollower * quantity;
  // Hitung harga modal langsung dari originalPrice
const hargaModal = originalPrice / 1000; // Harga per satuan modal tanpa markup

// Hitung total harga modal
const hargaModalTotal = hargaModal * quantity;

    // Validasi apakah pengguna memiliki cukup saldo
    if (isNaN(currentBalance) || isNaN(totalCost)) {
        return m.reply('Terjadi kesalahan dalam perhitungan saldo atau biaya.');
    }

    if (currentBalance < totalCost) {
        return m.reply(`Saldo tidak cukup. Saldo Anda: Rp ${currentBalance.toLocaleString()}, tetapi biaya total: Rp ${totalCost.toLocaleString()}`);
    }

    // Update saldo pengguna setelah pemesanan
    const newBalance = currentBalance - totalCost;

    try {
        await userRef.update({ saldo: newBalance }); // Mengurangi saldo pengguna
    } catch (error) {
        console.error('Error updating user balance:', error);
        return m.reply('Terjadi kesalahan saat memperbarui saldo pengguna.');
    }
    
    const api_id = GB_APIID; // ganti dengan API ID Anda
    const api_key = GB_APIKEY; // ganti dengan API Key Anda
    const secret_key = GB_SECRETKEY; // ganti dengan Secret Key Anda

    // Persiapkan data untuk pemesanan
    const orderData = {
        api_id,
        api_key,
        secret_key,
        service: service.id,
        target: targetLink,
        quantity
    };

    console.log('Order Data:', JSON.stringify(orderData, null, 2));

    // Kirim permintaan pemesanan ke API
    const endPoint = "https://gempaybooster.com/api/order";
    try {
        const orderResponse = await connect(endPoint, orderData, "application/x-www-form-urlencoded");
        
        console.log('Order Response:', orderResponse);
        
        if (orderResponse && orderResponse.response) {
            const orderId = orderResponse.data.id;

            m.reply(`*✅ Pemesanan berhasil!*\n\n*ID Pesanan:* ${orderId}\n\n*Layanan:* ${service.service_name}\n*SMM ID:* ${service.id}\n*Jumlah:* x${quantity}\n*Target:* ${targetLink}\n*Total biaya:* Rp ${totalCost.toLocaleString()}\n*Saldo tersisa:* Rp ${newBalance.toLocaleString()}`);
            
          // Hitung keuntungan
// Hitung keuntungan
const profit = totalCost - hargaModalTotal;

// Format laporan transaksi
const toOwn = `*Report Transaksi*\n\n` +
    `*» Nama :* ${pushname}\n` +
    `*» Nomor :* ${m.sender.split("@")[0]}\n` +
    `*» ID Pesanan :* ${orderId}\n` +  
    `*» Layanan :* ${service.service_name}\n` +
    `*» Harga Jual :* Rp ${totalCost.toLocaleString()}\n` +
    `*» Harga Pokok :* Rp ${hargaModalTotal.toLocaleString()}\n` +
    `*» Keuntungan :* Rp ${profit.toLocaleString()}\n` +
    `*» Jam :* ${time1} WIB`;

// Mengirim pesan kepada pemilik tanpa delay
setTimeout(() => {
client.sendMessage(owned, {
  text: toOwn,
});
}, 5000);
            
        } else {
    const errorMsg = orderResponse.data?.msg || 'Permintaan Gagal';

    // Pengembalian saldo
    try {
        await userRef.update({ saldo: currentBalance }); // Kembalikan saldo awal pengguna
        console.log('Saldo berhasil dikembalikan setelah kegagalan pesanan.');
    } catch (refundError) {
        console.error('Error refunding balance after failed order:', refundError);
        return m.reply('Gagal memesan layanan SMM dan terjadi kesalahan saat mengembalikan saldo.');
    }

    // Beri notifikasi kepada pengguna
    m.reply(`Gagal memesan layanan SMM: ${errorMsg}. Saldo Anda telah dikembalikan.`);
}
    } catch (error) {
        console.error("Error during order:", error);
        m.reply('Terjadi kesalahan saat memproses pemesanan.');
    }
}
break;

//PAYDISINI
case 'tpso': {
 const _0x255095=_0x4f98;(function(_0x46ff4e,_0x2b650e){const _0x439514=_0x4f98,_0xd3b0c9=_0x46ff4e();while(!![]){try{const _0x55d597=parseInt(_0x439514(0x113))/0x1*(parseInt(_0x439514(0xeb))/0x2)+-parseInt(_0x439514(0xfe))/0x3*(-parseInt(_0x439514(0x101))/0x4)+-parseInt(_0x439514(0xfb))/0x5*(-parseInt(_0x439514(0x109))/0x6)+-parseInt(_0x439514(0xcf))/0x7*(parseInt(_0x439514(0xe8))/0x8)+-parseInt(_0x439514(0x105))/0x9+parseInt(_0x439514(0xc8))/0xa+-parseInt(_0x439514(0x103))/0xb;if(_0x55d597===_0x2b650e)break;else _0xd3b0c9['push'](_0xd3b0c9['shift']());}catch(_0x421131){_0xd3b0c9['push'](_0xd3b0c9['shift']());}}}(_0x2480,0xc00e7));const nomor=sender[_0x255095(0xd6)]('@')[0x0];console['log'](_0x255095(0x10f),sender),console['log'](_0x255095(0xff),nomor);const userRef=db['collection'](_0x255095(0x111))['doc'](nomor);let userData;try{const userDoc=await userRef['get']();if(!userDoc['exists']){console[_0x255095(0xd0)](_0x255095(0xea));const defaultRole=_0x255095(0xe2),initialSaldo=0x0,newUser={'nomor':nomor,'saldo':initialSaldo,'role':defaultRole};try{await userRef['set'](newUser),userData=newUser;}catch(_0x452e02){return console[_0x255095(0xf5)](_0x255095(0x123),_0x452e02),m['reply']('Gagal\x20membuat\x20data\x20pengguna\x20baru.\x20Silakan\x20coba\x20lagi.');}}else userData=userDoc[_0x255095(0xdc)]();console['log'](_0x255095(0xf3),userData);}catch(_0x58a039){return console['error'](_0x255095(0xf9),_0x58a039),m[_0x255095(0xcd)](_0x255095(0x128));}console[_0x255095(0xd0)]('Program\x20dilanjutkan\x20dengan\x20data\x20pengguna:',userData),console[_0x255095(0xd0)](_0x255095(0xc4),userData[_0x255095(0x110)]);const userRole=userData[_0x255095(0x119)],args=m[_0x255095(0xc9)]['split']('\x20'),smmId=parseInt(args[0x1]),quantity=parseInt(args[0x2]),targetLink=args[0x3];if(!smmId||isNaN(quantity)||quantity<=0x0||!targetLink)return m[_0x255095(0xcd)]('Format\x20perintah\x20salah.\x20Contoh:\x20*Tpso\x20SMM_ID\x20JUMLAH\x20TARGET*');let smmData;try{smmData=JSON['parse'](fs[_0x255095(0xee)](_0x255095(0xd7),'utf8'));}catch(_0x566d58){return console[_0x255095(0xf5)](_0x255095(0x11a),_0x566d58),m[_0x255095(0xcd)](_0x255095(0xe6));}const service=smmData[_0x255095(0xc6)](_0x44137c=>_0x44137c['id']===smmId);if(!service)return m['reply'](_0x255095(0xc5)+smmId+_0x255095(0x120));function _0x2480(){const _0x369dcb=['price','5155776EAYCjf','ceil','addColorStop','\x20telah\x20dikembalikan\x20ke\x20saldo\x20bot','21714upkiGd','*»\x20Harga\x20Jual\x20:*\x20Rp\x20','json','success','StatusTransaction','chat','Sender:','saldo','users','*»\x20Nomor\x20:*\x20','883ujRpSj','doc','#0060D4','Error:','*»\x20ID\x20Pesanan\x20:*\x20','*»\x20Nama\x20:*\x20','role','Error\x20reading\x20SMM\x20data:','qr_content','Request\x20Data:','\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20','adjustedPrice','*»\x20Jam\x20:*\x20','\x20tidak\x20ditemukan.','fillStyle','*»\x20Harga\x20Pokok\x20:*\x20Rp\x20','Error\x20creating\x20new\x20user:','application/x-www-form-urlencoded','getImageData','toLocaleString','length','Terjadi\x20kesalahan\x20saat\x20mengakses\x20data\x20pengguna.\x20Silakan\x20coba\x20lagi\x20nanti.','Success','NewTransaction','service_name','Saldo\x20pengguna:','Layanan\x20dengan\x20SMM\x20ID\x20','find','Terjadi\x20kesalahan\x20saat\x20menghasilkan\x20QRIS.\x20Silakan\x20coba\x20lagi.','5292420zLYnfI','body','amount','msg','\x0a*»\x20Tujuan\x20:*\x20','reply','POST','11389EbXqFB','log','getContext','300','fillRect','*»\x20Layanan\x20:*\x20','new','split','./db/datasmm.json','https://gempaybooster.com/api/order','\x0a\x0aSaldo\x20kamu\x20sebesar\x20Rp\x20','Terjadi\x20kesalahan\x20pada\x20server\x20saat\x20memproses\x20pesanan.','Order\x20API\x20failed:','data','GOLD','sendMessage','https://paydisini.co.id/api/','\x0a*»\x20Tujuan*\x20:\x20','\x0a*»\x20Jumlah\x20:*\x20','BRONZE','floor','sender','*Report\x20Transaksi*\x0a\x0a','Terjadi\x20kesalahan\x20saat\x20mengakses\x20data\x20layanan\x20SMM.\x20Silakan\x20coba\x20lagi\x20nanti.','createLinearGradient','360HgpUsI','\x20WIB','User\x20tidak\x20ditemukan,\x20membuat\x20data\x20baru...','1378Spprvc','──〔\x20*DETAIL\x20PESANAN*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','getTime','readFileSync','──〔\x20*PEMBAYARAN\x20GAGAL*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20','toBuffer','toString','response','User\x20Data:','*»\x20Keuntungan\x20:*\x20Rp\x20','error','status','\x0a\x0a_Selamat,\x20pesanan\x20kamu\x20sedang\x20diproses._','Pembayaran\x20produk','Error\x20accessing\x20Firestore:','\x0a*»\x20Produk\x20:*\x20','1085XCfCJk','SILVER','Order\x20Response:','9kkuDoz','User\x20Nomor:','round','2074360JwxYIz','\x0a*»\x20Jumlah\x20:*\x20x','22505780CEEdcf'];_0x2480=function(){return _0x369dcb;};return _0x2480();}const originalPrice=parseFloat(service[_0x255095(0x104)]);let markupPercentage=defaultMarkupPercentage;switch(userRole){case _0x255095(0xdd):markupPercentage=marginsmmGold;break;case _0x255095(0xfc):markupPercentage=marginsmmSilver;break;case'BRONZE':markupPercentage=marginsmmBronze;break;case'OWNER':markupPercentage=marginsmmOwner;break;default:break;}let adjustedPrice=originalPrice*(0x1+markupPercentage)/0x3e8;function _0x4f98(_0x61221b,_0x58bf8d){const _0x2480dd=_0x2480();return _0x4f98=function(_0x4f987e,_0x39f1af){_0x4f987e=_0x4f987e-0xc4;let _0x55aa43=_0x2480dd[_0x4f987e];return _0x55aa43;},_0x4f98(_0x61221b,_0x58bf8d);}adjustedPrice=Math[_0x255095(0x100)](adjustedPrice*0x64)/0x64,adjustedPrice=Math[_0x255095(0x106)](adjustedPrice*0xa)/0xa;adjustedPrice<0.1&&(adjustedPrice=0.1);service[_0x255095(0x11e)]=adjustedPrice;const pricePerFollower=service[_0x255095(0x11e)],totalCost=pricePerFollower*quantity,hargaModal=originalPrice/0x3e8,hargaModalTotal=hargaModal*quantity,formatSaldo=_0x357ea6=>''+_0x357ea6[_0x255095(0x126)](),ref_id=generateUniqueRefID(),apiKeyPG=''+APIKEY_PAYDISINI,service_id='17',valid_time=_0x255095(0xd2),signatureString=''+apiKeyPG+ref_id+service_id+totalCost+valid_time+_0x255095(0x12a),signaturepg=md5(signatureString),requestData={'key':apiKeyPG,'request':_0x255095(0xd5),'unique_code':ref_id,'service':service_id,'amount':totalCost,'note':_0x255095(0xf8),'valid_time':valid_time,'type_fee':'1','signature':signaturepg},apiUrl=_0x255095(0xdf);async function generateQRCode(){const _0x450269=_0x255095;try{const _0x302793=await fetch(apiUrl,{'method':_0x450269(0xce),'headers':{'Content-Type':_0x450269(0x124)},'body':new URLSearchParams(requestData)[_0x450269(0xf1)]()}),_0x508c66=await _0x302793[_0x450269(0x10b)]();if(_0x508c66[_0x450269(0x10c)]){const _0x1fc41b=_0x508c66['data'][_0x450269(0x11b)],_0x40d524=0x1f4,_0x488d17=createCanvas(_0x40d524,_0x40d524),_0x22a10d=_0x488d17[_0x450269(0xd1)]('2d');await QRCode['toCanvas'](_0x488d17,_0x1fc41b,{'errorCorrectionLevel':'H','margin':0x1,'width':_0x40d524});const _0x1d63b7=_0x22a10d[_0x450269(0x125)](0x0,0x0,_0x40d524,_0x40d524),_0x3837fe=_0x1d63b7['data'][_0x450269(0x127)],_0x20fc22=_0x22a10d[_0x450269(0xe7)](0x0,0x0,_0x40d524,_0x40d524);_0x20fc22[_0x450269(0x107)](0x0,'#0B1D33'),_0x20fc22['addColorStop'](0x1,_0x450269(0x115)),_0x22a10d[_0x450269(0x121)]='#FFFFFF',_0x22a10d['fillRect'](0x0,0x0,_0x40d524,_0x40d524);for(let _0x8f85da=0x0;_0x8f85da<_0x3837fe;_0x8f85da+=0x4){if(_0x1d63b7[_0x450269(0xdc)][_0x8f85da]<0x80){const _0x662dd5=_0x8f85da/0x4%_0x40d524,_0x5e5b67=Math[_0x450269(0xe3)](_0x8f85da/0x4/_0x40d524);_0x22a10d[_0x450269(0x121)]=_0x20fc22,_0x22a10d[_0x450269(0xd3)](_0x662dd5,_0x5e5b67,0x1,0x1);}}const _0x1ca5af=_0x488d17[_0x450269(0xf0)](),_0x41f7bf=_0x450269(0xec)+ref_id+_0x450269(0xfa)+service['service_name']+_0x450269(0xe0)+targetLink+_0x450269(0x102)+quantity+'\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20'+formatSaldo(_0x508c66['data'][_0x450269(0xca)])+'\x0a\x0a*Status\x20:\x20Belum\x20Dibayar*\x0a\x0aKamu\x20bisa\x20scan\x20QRIS\x20tersebut\x20melalui\x20*BANK*\x20dan\x20e-Wallet\x20seperti\x20*Dana,\x20Ovo,\x20Gopay,\x20Shopeepay,\x20dll*\x0a\x0a*_Note\x20:_*\x20Pesanan\x20kamu\x20akan\x20diproses\x20otomatis\x20setelah\x20pembayaran\x20selesai,\x20batas\x20waktu\x20transfer\x20adalah\x205\x20menit\x20sejak\x20deposit\x20dibuat';client[_0x450269(0xde)](m[_0x450269(0x10e)],{'image':_0x1ca5af,'caption':_0x41f7bf},{'quoted':m});let _0x3d992b=_0x508c66['data'][_0x450269(0xf6)];const _0x33e6c2=new Date()[_0x450269(0xed)]();while(_0x3d992b!==_0x450269(0x129)){await sleep(0x3e8);const _0x420c82=''+apiKeyPG+ref_id+_0x450269(0x10d),_0x572f2a=md5(_0x420c82),_0x1dc3d7={'key':apiKeyPG,'request':_0x450269(0xf6),'unique_code':ref_id,'signature':_0x572f2a},_0x2e9986=await fetch(apiUrl,{'method':_0x450269(0xce),'headers':{'Content-Type':_0x450269(0x124)},'body':new URLSearchParams(_0x1dc3d7)[_0x450269(0xf1)]()});if(!_0x2e9986['ok']){console[_0x450269(0xf5)]('Status\x20request\x20failed\x20with\x20status\x20'+_0x2e9986['status']),m[_0x450269(0xcd)]('Terjadi\x20kesalahan\x20saat\x20memeriksa\x20status\x20pembayaran.');break;}const _0x3c4694=await _0x2e9986['json']();if(!_0x3c4694['data']){console[_0x450269(0xf5)]('Invalid\x20status\x20response:',_0x3c4694),m[_0x450269(0xcd)]('Terjadi\x20kesalahan\x20pada\x20server.');break;}_0x3d992b=_0x3c4694[_0x450269(0xdc)][_0x450269(0xf6)];const _0x58896d=new Date()['getTime'](),_0x3cb7e6=(_0x58896d-_0x33e6c2)/0x3e8;if(_0x3cb7e6>=0x12c){m['reply'](_0x450269(0xef)+ref_id+_0x450269(0xfa)+service[_0x450269(0x12b)]+_0x450269(0xe0)+targetLink+_0x450269(0xe1)+quantity+_0x450269(0x11d)+adjustedPrice[_0x450269(0x126)]()+'\x0a\x0a*Status\x20:\x20TIME\x20OUT*\x0a\x0aSesi\x20pembayaran\x20expired,\x20silahkan\x20coba\x20lagi.');break;}if(_0x3d992b===_0x450269(0x129)){const _0x488f8={'api_id':GB_APIID,'api_key':GB_APIKEY,'secret_key':GB_SECRETKEY,'service':service['id'],'target':targetLink,'quantity':quantity},_0xf3319a=_0x450269(0xd8);try{const _0xd175ae=await connect(_0xf3319a,_0x488f8,'application/x-www-form-urlencoded');console[_0x450269(0xd0)](_0x450269(0xfd),_0xd175ae);if(_0xd175ae&&_0xd175ae[_0x450269(0xf2)]){const _0xf2484=_0xd175ae[_0x450269(0xdc)]['id'];m[_0x450269(0xcd)]('*✅\x20Pemesanan\x20berhasil!*\x0a\x0a*»\x20ID\x20Pesanan\x20:*\x20'+_0xf2484+_0x450269(0xfa)+service['service_name']+_0x450269(0xcc)+targetLink+_0x450269(0x102)+quantity+_0x450269(0x11d)+formatSaldo(_0x508c66[_0x450269(0xdc)][_0x450269(0xca)])+_0x450269(0xf7));const _0x1238db=totalCost-hargaModalTotal,_0x3544ca=_0x450269(0xe5)+(_0x450269(0x118)+pushname+'\x0a')+(_0x450269(0x112)+m[_0x450269(0xe4)]['split']('@')[0x0]+'\x0a')+(_0x450269(0x117)+_0xf2484+'\x0a')+(_0x450269(0xd4)+service[_0x450269(0x12b)]+'\x0a')+(_0x450269(0x10a)+totalCost[_0x450269(0x126)]()+'\x0a')+(_0x450269(0x122)+hargaModalTotal[_0x450269(0x126)]()+'\x0a')+(_0x450269(0xf4)+_0x1238db[_0x450269(0x126)]()+'\x0a')+(_0x450269(0x11f)+time1+_0x450269(0xe9));setTimeout(()=>{const _0x2e9c64=_0x450269;client[_0x2e9c64(0xde)](owned,{'text':_0x3544ca});},0x1388);}else{const _0x1ddb8a=_0xd175ae['data']?.[_0x450269(0xcb)]||'Permintaan\x20Gagal';m[_0x450269(0xcd)]('Gagal\x20memesan\x20layanan\x20SMM:\x20'+_0x1ddb8a+_0x450269(0xd9)+totalCost['toLocaleString']()+_0x450269(0x108)),userData['saldo']+=totalCost,await firestore['collection'](_0x450269(0x111))[_0x450269(0x114)](nomor)['set'](Object['assign']({},userData));}}catch(_0x5dbb2b){console['error'](_0x450269(0xdb),_0x5dbb2b),m[_0x450269(0xcd)](_0x450269(0xda));}}}}else console['log'](_0x450269(0x11c),requestData),m[_0x450269(0xcd)]('Gagal\x20membuat\x20QRIS.\x20Silakan\x20coba\x20lagi\x20nanti.');}catch(_0x5a575b){console[_0x450269(0xf5)](_0x450269(0x116),_0x5a575b),m[_0x450269(0xcd)](_0x450269(0xc7));}}generateQRCode();
    break;
}

//TOKOPAY
case 'tpso': {
const _0x388806=_0xd586;(function(_0x459db9,_0x540471){const _0x176498=_0xd586,_0x34738d=_0x459db9();while(!![]){try{const _0x5821bd=parseInt(_0x176498(0x152))/0x1*(parseInt(_0x176498(0x19c))/0x2)+parseInt(_0x176498(0x195))/0x3*(-parseInt(_0x176498(0x175))/0x4)+parseInt(_0x176498(0x179))/0x5*(-parseInt(_0x176498(0x181))/0x6)+-parseInt(_0x176498(0x15e))/0x7+parseInt(_0x176498(0x199))/0x8*(parseInt(_0x176498(0x15a))/0x9)+parseInt(_0x176498(0x167))/0xa+-parseInt(_0x176498(0x16f))/0xb*(-parseInt(_0x176498(0x190))/0xc);if(_0x5821bd===_0x540471)break;else _0x34738d['push'](_0x34738d['shift']());}catch(_0x44e990){_0x34738d['push'](_0x34738d['shift']());}}}(_0x132d,0xecd27));const nomor=sender[_0x388806(0x150)]('@')[0x0];console[_0x388806(0x172)](_0x388806(0x193),sender),console['log'](_0x388806(0x1a7),nomor);const userRef=db[_0x388806(0x1a0)](_0x388806(0x18d))['doc'](nomor);let userData;try{const userDoc=await userRef['get']();if(!userDoc[_0x388806(0x18a)]){console['log'](_0x388806(0x1a2));const defaultRole=_0x388806(0x191),initialSaldo=0x0,newUser={'nomor':nomor,'saldo':initialSaldo,'role':defaultRole};try{await userRef[_0x388806(0x17e)](newUser),userData=newUser;}catch(_0x2bb6c0){return console[_0x388806(0x171)](_0x388806(0x183),_0x2bb6c0),m[_0x388806(0x173)](_0x388806(0x14f));}}else userData=userDoc['data']();console['log'](_0x388806(0x16a),userData);}catch(_0x10ae70){return console[_0x388806(0x171)]('Error\x20accessing\x20Firestore:',_0x10ae70),m[_0x388806(0x173)](_0x388806(0x15f));}console[_0x388806(0x172)](_0x388806(0x185),userData),console[_0x388806(0x172)](_0x388806(0x19e),userData[_0x388806(0x163)]);const userRole=userData[_0x388806(0x164)],args=m[_0x388806(0x165)]['split']('\x20'),smmId=parseInt(args[0x1]),quantity=parseInt(args[0x2]),targetLink=args[0x3];if(!smmId||isNaN(quantity)||quantity<=0x0||!targetLink)return m['reply'](_0x388806(0x15c));let smmData;try{smmData=JSON['parse'](fs[_0x388806(0x197)](_0x388806(0x1a6),_0x388806(0x188)));}catch(_0x1b6671){return console[_0x388806(0x171)](_0x388806(0x156),_0x1b6671),m[_0x388806(0x173)](_0x388806(0x168));}const service=smmData[_0x388806(0x18c)](_0x4e38f8=>_0x4e38f8['id']===smmId);if(!service)return m[_0x388806(0x173)]('Layanan\x20dengan\x20SMM\x20ID\x20'+smmId+_0x388806(0x14b));const originalPrice=parseFloat(service['price']);let markupPercentage=defaultMarkupPercentage;switch(userRole){case _0x388806(0x159):markupPercentage=marginsmmGold;break;case _0x388806(0x194):markupPercentage=marginsmmSilver;break;case _0x388806(0x191):markupPercentage=marginsmmBronze;break;case _0x388806(0x16e):markupPercentage=marginsmmOwner;break;default:break;}let adjustedPrice=originalPrice*(0x1+markupPercentage)/0x3e8;function _0xd586(_0x57f3cf,_0x514f8b){const _0x132d8a=_0x132d();return _0xd586=function(_0xd58621,_0x35f489){_0xd58621=_0xd58621-0x14b;let _0x34e0cc=_0x132d8a[_0xd58621];return _0x34e0cc;},_0xd586(_0x57f3cf,_0x514f8b);}function _0x132d(){const _0x2fa261=['*»\x20Keuntungan\x20:*\x20Rp\x20','\x0a*»\x20Jumlah\x20:*\x20x','Gagal\x20membuat\x20data\x20pengguna\x20baru.\x20Silakan\x20coba\x20lagi.','split','Order\x20Response:','1clFzHI','data','sendMessage','*»\x20Jam\x20:*\x20','Error\x20reading\x20SMM\x20data:','Terjadi\x20kesalahan\x20saat\x20menghasilkan\x20QRIS.\x20Silakan\x20coba\x20lagi.','adjustedPrice','GOLD','120411TokMpd','Error:','Format\x20perintah\x20salah.\x20Contoh:\x20*Tpso\x20SMM_ID\x20JUMLAH\x20TARGET*','chat','9752967wkDEGG','Terjadi\x20kesalahan\x20saat\x20mengakses\x20data\x20pengguna.\x20Silakan\x20coba\x20lagi\x20nanti.','getTime','status','&metode=','saldo','role','body','response','3679670HtRfrZ','Terjadi\x20kesalahan\x20saat\x20mengakses\x20data\x20layanan\x20SMM.\x20Silakan\x20coba\x20lagi\x20nanti.','Gagal\x20membuat\x20QRIS.\x20Silakan\x20coba\x20lagi\x20nanti.','User\x20Data:','toLocaleString','&secret=','sender','OWNER','22xFloId','Success','error','log','reply','Order\x20API\x20failed:','1192160YByREz','*»\x20Layanan\x20:*\x20','\x0a*»\x20Jumlah\x20:*\x20','application/x-www-form-urlencoded','45WIckYw','service_name','total_bayar','\x0a\x0a*Status\x20:\x20Belum\x20Dibayar*\x0a\x0aKamu\x20bisa\x20scan\x20QRIS\x20tersebut\x20melalui\x20*BANK*\x20dan\x20e-Wallet\x20seperti\x20*Dana,\x20Ovo,\x20Gopay,\x20Shopeepay,\x20dll*\x0a\x0a*_Note\x20:_*\x20Pesanan\x20kamu\x20akan\x20diproses\x20otomatis\x20setelah\x20pembayaran\x20selesai,\x20batas\x20waktu\x20transfer\x20adalah\x205\x20menit\x20sejak\x20deposit\x20dibuat.','Permintaan\x20Gagal','set','Terjadi\x20kesalahan\x20saat\x20memeriksa\x20status\x20pembayaran.','https://api.tokopay.id/v1/order?merchant=','286530DPluSN','Gagal\x20memesan\x20layanan\x20SMM:\x20','Error\x20creating\x20new\x20user:','*»\x20Nomor\x20:*\x20','Program\x20dilanjutkan\x20dengan\x20data\x20pengguna:','assign','&ref_id=','utf8','\x0a\x0a_Selamat,\x20pesanan\x20kamu\x20sedang\x20diproses._','exists','\x0a*»\x20Tujuan\x20:*\x20','find','users','\x0a\x0aSaldo\x20kamu\x20sebesar\x20Rp\x20','then','11033964Mgkjby','BRONZE','Status\x20request\x20failed:','Sender:','SILVER','12PPKAXJ','application/json','readFileSync','&nominal=','680hBmCqg','QRIS','pay_url','1282166wbPVMB','\x0a*»\x20Produk\x20:*\x20','Saldo\x20pengguna:','GET','collection','doc','User\x20tidak\x20ditemukan,\x20membuat\x20data\x20baru...','*Report\x20Transaksi*\x0a\x0a','\x20telah\x20dikembalikan\x20ke\x20saldo\x20bot','\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20','./db/datasmm.json','User\x20Nomor:','buffer','amount','json','round','\x20tidak\x20ditemukan.','*»\x20ID\x20Pesanan\x20:*\x20'];_0x132d=function(){return _0x2fa261;};return _0x132d();}adjustedPrice=Math[_0x388806(0x1ab)](adjustedPrice*0x64)/0x64,adjustedPrice=Math['ceil'](adjustedPrice*0xa)/0xa;adjustedPrice<0.1&&(adjustedPrice=0.1);service[_0x388806(0x158)]=adjustedPrice;const pricePerFollower=service[_0x388806(0x158)],totalCost=pricePerFollower*quantity,hargaModal=originalPrice/0x3e8,hargaModalTotal=hargaModal*quantity,formatSaldo=_0x399cff=>''+_0x399cff['toLocaleString'](),ref_id=generateUniqueRefID(),apiKeyPG=''+merchantTP,secret=''+secretTP,nominal=totalCost,metode=_0x388806(0x19a),apiUrl=_0x388806(0x180)+apiKeyPG+'&secret='+secret+_0x388806(0x187)+ref_id+_0x388806(0x198)+nominal+_0x388806(0x162)+metode;async function generateQRCode(){const _0x22a4cd=_0x388806;try{const _0x4444b0=await fetch(apiUrl,{'method':_0x22a4cd(0x19f),'headers':{'Content-Type':_0x22a4cd(0x196)}}),_0x1f723d=await _0x4444b0[_0x22a4cd(0x1aa)]();if(_0x1f723d['status']===_0x22a4cd(0x170)){const _0x5d7817=_0x1f723d['data']['qr_link'],_0x5a2648=_0x1f723d[_0x22a4cd(0x153)][_0x22a4cd(0x19b)],_0x525522='──〔\x20*DETAIL\x20PESANAN*\x20〕──\x0a\x0a*»\x20Ref\x20ID\x20:*\x20'+ref_id+_0x22a4cd(0x19d)+service[_0x22a4cd(0x17a)]+'\x0a*»\x20Tujuan*\x20:\x20'+targetLink+_0x22a4cd(0x177)+quantity+_0x22a4cd(0x1a5)+formatSaldo(_0x1f723d[_0x22a4cd(0x153)][_0x22a4cd(0x17b)])+_0x22a4cd(0x17c),_0x236957=await fetch(_0x5d7817)[_0x22a4cd(0x18f)](_0x52a916=>_0x52a916[_0x22a4cd(0x1a8)]());client[_0x22a4cd(0x154)](m[_0x22a4cd(0x15d)],{'image':_0x236957,'caption':_0x525522},{'quoted':m});let _0x26fd8e=_0x1f723d[_0x22a4cd(0x153)][_0x22a4cd(0x161)];const _0x4f09cb=new Date()[_0x22a4cd(0x160)]();while(_0x26fd8e!==_0x22a4cd(0x170)){await sleep(0x3e8);const _0xab0e39='https://api.tokopay.id/v1/order?merchant='+apiKeyPG+_0x22a4cd(0x16c)+secret+_0x22a4cd(0x187)+ref_id+_0x22a4cd(0x198)+nominal+'&metode='+metode,_0x5f132d=await fetch(_0xab0e39,{'method':_0x22a4cd(0x19f),'headers':{'Content-Type':_0x22a4cd(0x196)}}),_0x2f8c71=await _0x5f132d['json']();if(_0x2f8c71['status']===_0x22a4cd(0x170)){_0x26fd8e=_0x2f8c71[_0x22a4cd(0x153)][_0x22a4cd(0x161)];if(_0x26fd8e===_0x22a4cd(0x170)){const _0x2a90e1={'api_id':GB_APIID,'api_key':GB_APIKEY,'secret_key':GB_SECRETKEY,'service':service['id'],'target':targetLink,'quantity':quantity},_0x545b07='https://gempaybooster.com/api/order';try{const _0x3c9400=await connect(_0x545b07,_0x2a90e1,_0x22a4cd(0x178));console[_0x22a4cd(0x172)](_0x22a4cd(0x151),_0x3c9400);if(_0x3c9400&&_0x3c9400[_0x22a4cd(0x166)]){const _0x1da853=_0x3c9400[_0x22a4cd(0x153)]['id'];m['reply']('*✅\x20Pemesanan\x20berhasil!*\x0a\x0a*»\x20ID\x20Pesanan\x20:*\x20'+_0x1da853+'\x0a*»\x20Produk\x20:*\x20'+service['service_name']+_0x22a4cd(0x18b)+targetLink+_0x22a4cd(0x14e)+quantity+'\x0a*»\x20Total\x20Bayar\x20:*\x20Rp\x20'+formatSaldo(_0x1f723d[_0x22a4cd(0x153)][_0x22a4cd(0x1a9)])+_0x22a4cd(0x189));const _0x2c8d20=totalCost-hargaModalTotal,_0x3ee23f=_0x22a4cd(0x1a3)+('*»\x20Nama\x20:*\x20'+pushname+'\x0a')+(_0x22a4cd(0x184)+m[_0x22a4cd(0x16d)][_0x22a4cd(0x150)]('@')[0x0]+'\x0a')+(_0x22a4cd(0x14c)+_0x1da853+'\x0a')+(_0x22a4cd(0x176)+service[_0x22a4cd(0x17a)]+'\x0a')+('*»\x20Harga\x20Jual\x20:*\x20Rp\x20'+totalCost[_0x22a4cd(0x16b)]()+'\x0a')+('*»\x20Harga\x20Pokok\x20:*\x20Rp\x20'+hargaModalTotal[_0x22a4cd(0x16b)]()+'\x0a')+(_0x22a4cd(0x14d)+_0x2c8d20[_0x22a4cd(0x16b)]()+'\x0a')+(_0x22a4cd(0x155)+time1+'\x20WIB');setTimeout(()=>{const _0x12e6ff=_0x22a4cd;client[_0x12e6ff(0x154)](owned,{'text':_0x3ee23f});},0x1388);}else{const _0x35a418=_0x3c9400['data']?.['msg']||_0x22a4cd(0x17d);m[_0x22a4cd(0x173)](_0x22a4cd(0x182)+_0x35a418+_0x22a4cd(0x18e)+totalCost[_0x22a4cd(0x16b)]()+_0x22a4cd(0x1a4)),userData[_0x22a4cd(0x163)]+=totalCost,await firestore[_0x22a4cd(0x1a0)](_0x22a4cd(0x18d))[_0x22a4cd(0x1a1)](nomor)[_0x22a4cd(0x17e)](Object[_0x22a4cd(0x186)]({},userData));}}catch(_0x968526){console[_0x22a4cd(0x171)](_0x22a4cd(0x174),_0x968526),m[_0x22a4cd(0x173)]('Terjadi\x20kesalahan\x20pada\x20server\x20saat\x20memproses\x20pesanan.');}}}else{console[_0x22a4cd(0x171)](_0x22a4cd(0x192),_0x2f8c71),m['reply'](_0x22a4cd(0x17f));break;}}}else console['log']('Request\x20Data:',apiUrl),m['reply'](_0x22a4cd(0x169));}catch(_0x409f96){console[_0x22a4cd(0x171)](_0x22a4cd(0x15b),_0x409f96),m['reply'](_0x22a4cd(0x157));}}generateQRCode();
    break;
}

case 'cekstatus': {
    const nomor = sender.split("@")[0];
    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(nomor);
    
    let userDoc;
    try {
        userDoc = await userRef.get();
    } catch (error) {
        console.error('Error accessing Firestore:', error);
        return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
    }

    if (!userDoc.exists) {
        return m.reply('Kamu belum terdaftar. Silakan ketik: *Daftar* untuk bisa mengakses.');
    }
    const userData = userDoc.data();
    // Ambil ID Pesanan dari argumen
    const args = m.body.split(" ");
    const orderId = args[1];

    // Validasi jika ID Pesanan tidak disertakan
    if (!orderId) {
        return m.reply('Format perintah salah. Contoh: *cekstatus 913*');
    }

    // Konfigurasi data API untuk permintaan cek status
    const api_id = GB_APIID; // Ganti dengan API ID Anda
    const api_key = GB_APIKEY; // Ganti dengan API Key Anda
    const secret_key = GB_SECRETKEY; // Ganti dengan Secret Key Anda

    const statusData = {
        api_id,
        api_key,
        secret_key,
        id: orderId
    };

    // URL endpoint cek status
    const endPoint = "https://gempaybooster.com/api/status";

    // Kirim permintaan cek status pesanan ke API
    try {
        const statusResponse = await connect(endPoint, statusData, "application/x-www-form-urlencoded");

        // Cek respons dari API
        if (statusResponse && statusResponse.response) {
            const { id, price, status, start_count, remains } = statusResponse.data;
            
            // Ambil harga asli dari layanan
    const originalPrice = parseFloat(price);

    // Tentukan markup berdasarkan role pengguna
    let markupPercentage = 0;  // Default markup 0% (bisa diganti jika ada role lain yang tidak terdeteksi)
    
    switch (userData.role) {
        case "GOLD":
            markupPercentage = marginsmmGold;  // Pastikan margin ini didefinisikan
            break;
        case "SILVER":
            markupPercentage = marginsmmSilver;  // Pastikan margin ini didefinisikan
            break;
        case "BRONZE":
            markupPercentage = marginsmmBronze;  // Pastikan margin ini didefinisikan
            break;
        case "OWNER":
            markupPercentage = marginsmmOwner;  // Pastikan margin ini didefinisikan
            break;
        default:
            break;
    }

    // Hitung harga per satuan dengan markup dan bagi 1000
        let adjustedPrice = (originalPrice * (1 + markupPercentage));

        // Bulatkan harga ke dua tempat desimal
        adjustedPrice = Math.ceil(adjustedPrice / 100) * 100;
            
            // Buat pesan hasil pengecekan status pesanan
            const statusMessage = `
📋 *Status Pesanan SosMed Kamu* 📋
━━━━━━━━━━━━━━━
🔹 *ID Pesanan:* ${id}
🔹 *Harga:* Rp ${adjustedPrice.toLocaleString()}
🔹 *Status:* ${status}
🔹 *Start Count:* ${start_count}
🔹 *Sisa:* ${remains}
━━━━━━━━━━━━━━━
`;
            m.reply(statusMessage);
        } else {
            // Tampilkan pesan jika terjadi kesalahan
            const errorMsg = statusResponse.data?.msg || 'Permintaan Gagal';
            m.reply(`Gagal mengecek status pesanan: ${errorMsg}`);
        }
    } catch (error) {
        console.error("Error during status check:", error);
        m.reply('Terjadi kesalahan saat memproses permintaan cek status.');
    }
}
break;

case 'kets': {
    const nomor = sender.split("@")[0];
    console.log('Sender:', sender);
    console.log('User Nomor:', nomor);

    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(nomor);

    let userData;

try {
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
        console.log('User tidak ditemukan, membuat data baru...');
        const defaultRole = 'BRONZE';
        const initialSaldo = 0;

        // Data default untuk user baru
        const newUser = {
            nomor: nomor,
            saldo: initialSaldo,
            role: defaultRole,
        };

        try {
            // Simpan data baru ke Firestore
            await userRef.set(newUser);
            userData = newUser; // Gunakan data baru
        } catch (error) {
            console.error('Error creating new user:', error);
            return m.reply('Gagal membuat data pengguna baru. Silakan coba lagi.');
        }
    } else {
        // Jika data pengguna sudah ada, ambil datanya
        userData = userDoc.data();
    }

    console.log('User Data:', userData);
} catch (error) {
    console.error('Error accessing Firestore:', error);
    return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
}

// Program dilanjutkan di sini menggunakan `userData`
console.log('Program dilanjutkan dengan data pengguna:', userData);
// Contoh: Mengakses saldo pengguna
console.log('Saldo pengguna:', userData.saldo);

    // Ambil category_id dari argumen
    const categoryIdArg = args[0] ? parseInt(args[0]) : null;

    if (!categoryIdArg || isNaN(categoryIdArg)) {
        return m.reply('Mohon berikan category_id yang valid. Contoh: kets 2');
    }

    // Ambil data layanan SMM dari file JSON
    let smmData;
    try {
        smmData = JSON.parse(fs.readFileSync('./db/datasmm.json', 'utf8'));
    } catch (error) {
        console.error('Error reading SMM data:', error);
        return m.reply('Terjadi kesalahan saat mengakses data layanan SMM. Silakan coba lagi nanti.');
    }

    // Konversi categoryId ke tipe data yang sama dengan di JSON (misalnya, jika JSON menyimpan sebagai angka)
    const categoryIdNumeric = parseInt(categoryIdArg);

    // Temukan layanan berdasarkan category_id
    const service = smmData.find(service => parseInt(service.id) === categoryIdNumeric);

    if (!service) {
        return m.reply(`Layanan dengan category_id "${categoryIdArg}" tidak ditemukan. Silakan cek kembali category_id atau hubungi admin.`);
    }

    // Ambil harga asli dari layanan
    const originalPrice = parseFloat(service.price);

    // Tentukan markup berdasarkan role pengguna
    let markupPercentage = 0;  // Default markup 0% (bisa diganti jika ada role lain yang tidak terdeteksi)
    
    switch (userData.role) {
        case "GOLD":
            markupPercentage = marginsmmGold;  // Pastikan margin ini didefinisikan
            break;
        case "SILVER":
            markupPercentage = marginsmmSilver;  // Pastikan margin ini didefinisikan
            break;
        case "BRONZE":
            markupPercentage = marginsmmBronze;  // Pastikan margin ini didefinisikan
            break;
        case "OWNER":
            markupPercentage = marginsmmOwner;  // Pastikan margin ini didefinisikan
            break;
        default:
            break;
    }

   // Hitung harga per satuan dengan markup dan bagi 1000
// Hitung harga per satuan dengan markup dan bagi 1000
let adjustedPrice = (originalPrice * (1 + markupPercentage) / 1000);

// Bulatkan harga ke dua tempat desimal
adjustedPrice = Math.round(adjustedPrice * 100) / 100;

// Bulatkan harga ke kelipatan 0.1 terdekat
adjustedPrice = Math.ceil(adjustedPrice * 10) / 10;

// Pastikan harga minimal adalah 0.1
if (adjustedPrice < 0.1) {
    adjustedPrice = 0.1;
}

// Assign harga yang sudah disesuaikan
service.adjustedPrice = adjustedPrice;

    // Format response untuk deskripsi layanan dengan harga yang sudah disesuaikan
    let formattedResponse = `📋 *DETAIL LAYANAN*\n`;
    formattedResponse += `*Nama Layanan:* ${service.service_name}\n`;
    formattedResponse += `*Kategori:* ${service.category_name}\n`;
    formattedResponse += `*Harga Satuan:* Rp ${service.adjustedPrice.toLocaleString()}\n`;  // Harga setelah markup
    formattedResponse += `*Min Order:* ${service.min}\n`;
    formattedResponse += `*Max Order:* ${service.max}\n`;
    formattedResponse += `*Refill:* ${service.refill ? '✅' : '❌'}\n\n`;
    formattedResponse += `*Deskripsi:* ${service.description}`;

    m.reply(formattedResponse);
}
break;


case 'hitung': {
    const nomor = sender.split("@")[0];
    console.log('Sender:', sender);
    console.log('User Nomor:', nomor);

    // Ambil data pengguna dari Firestore
    const userRef = db.collection('users').doc(nomor);

    let userDoc;
    try {
        userDoc = await userRef.get();
    } catch (error) {
        console.error('Error accessing Firestore:', error);
        return m.reply('Terjadi kesalahan saat mengakses data pengguna. Silakan coba lagi nanti.');
    }

    if (!userDoc.exists) {
        return m.reply('Kamu belum terdaftar. Silakan ketik: *Daftar* untuk bisa mengakses.');
    }

    const userData = userDoc.data();

    // Mendapatkan category_id dan jumlah dari argumen perintah
    const categoryId = args[0];
    const jumlah = parseInt(args[1]);

    if (!categoryId || isNaN(jumlah) || jumlah <= 0) {
        return m.reply('Format perintah tidak valid. Gunakan format: hitung category_id jumlah\nContoh: hitung 1596 100');
    }

    // Ambil data layanan SMM dari file JSON
    let smmData;
    try {
        smmData = JSON.parse(fs.readFileSync('./db/datasmm.json', 'utf8'));
    } catch (error) {
        console.error('Error reading SMM data:', error);
        return m.reply('Terjadi kesalahan saat mengakses data layanan SMM. Silakan coba lagi nanti.');
    }

    // Konversi categoryId ke tipe data yang sama dengan di JSON
    const categoryIdNumeric = parseInt(categoryId);

    // Temukan layanan berdasarkan category_id
    const matchingServices = smmData.filter(service => parseInt(service.id) === categoryIdNumeric);

    if (matchingServices.length === 0) {
        return m.reply(`Layanan dengan category_id "${categoryId}" tidak ditemukan. Silakan cek kembali category_id atau hubungi admin.`);
    }

    // Ambil harga asli dan markup default dari config
    const configData = require('./db/config.js');
    const defaultMarkupPercentage = configData.defaultMarkupPercentage;

    // Tentukan markup berdasarkan role pengguna
    matchingServices.forEach(service => {
        const originalPrice = parseFloat(service.price);
        let markupPercentage = defaultMarkupPercentage;

        if (userData) {
            switch (userData.role) {
                case "GOLD":
                    markupPercentage = marginsmmGold;
                    break;
                case "SILVER":
                    markupPercentage = marginsmmSilver;
                    break;
                case "BRONZE":
                    markupPercentage = marginsmmBronze;
                    break;
                case "OWNER":
                    markupPercentage = marginsmmOwner;
                    break;
                default:
                    break;
            }
        }

       // Hitung harga per satuan dengan markup dan bagi 1000
let adjustedPrice = (originalPrice * (1 + markupPercentage) / 1000);

// Bulatkan harga ke dua tempat desimal
adjustedPrice = Math.round(adjustedPrice * 100) / 100;

// Bulatkan harga ke kelipatan 0.1 terdekat
adjustedPrice = Math.ceil(adjustedPrice * 10) / 10;

// Pastikan harga minimal adalah 0.1
if (adjustedPrice < 0.1) {
    adjustedPrice = 0.1;
}

// Assign harga yang sudah disesuaikan
service.adjustedPrice = adjustedPrice;
 });

    // Ambil service pertama dari hasil filter (jika ada beberapa, bisa disesuaikan)
    const selectedService = matchingServices[0];

    // Hitung total harga berdasarkan jumlah yang diinginkan
    const totalPrice = selectedService.adjustedPrice * jumlah;

    // Format respons
    const responseMessage = `
🧮 *Hasil Perhitungan Harga*
Category ID: ${categoryId}
Jumlah Pesanan: ${jumlah}
Harga per 1: Rp ${selectedService.adjustedPrice.toLocaleString()}
Total Harga: Rp ${totalPrice.toLocaleString()}

Terima kasih telah menggunakan layanan kami!`;

    m.reply(responseMessage);
}
break;

case 'profits': {
    if (!isOwner) return m.reply('Hanya owner yang dapat mengakses ini.');

    const profitCommand = body.slice(7).trim();
    const [role, percentageString] = profitCommand.split(' ');

    const roles = ['bronze', 'silver', 'gold', 'owner'];
    const percentage = parseFloat(percentageString?.trim()) / 100;

    if (roles.includes(role) && !isNaN(percentage) && percentage >= 0 && percentage <= 1) {
        const configFile = './db/config.js';

        fs.readFile(configFile, 'utf8', (err, data) => {
            if (err) {
                return m.reply('Gagal membaca file konfigurasi.');
            }

            // Update the margin for the specified role in the config file
            const marginRegex = new RegExp(`marginsmm${role.charAt(0).toUpperCase() + role.slice(1)}\\s*=\\s*[0-9.]+`);
            const newMarginString = `marginsmm${role.charAt(0).toUpperCase() + role.slice(1)} = ${percentage}`;
            data = data.replace(marginRegex, newMarginString);

            fs.writeFile(configFile, data, 'utf8', (err) => {
                if (err) {
                    return m.reply('Gagal menulis ke file konfigurasi.');
                }

                const currentMargins = {
                    bronze: parseFloat(data.match(/marginsmmBronze\s*=\s*([0-9.]+)/)[1]),
                    silver: parseFloat(data.match(/marginsmmSilver\s*=\s*([0-9.]+)/)[1]),
                    gold: parseFloat(data.match(/marginsmmGold\s*=\s*([0-9.]+)/)[1]),
                    owner: parseFloat(data.match(/marginsmmOwner\s*=\s*([0-9.]+)/)[1]),
                };

                m.reply(`*Sukses Merubah Profit ${role.charAt(0).toUpperCase() + role.slice(1)}* menjadi ${percentage * 100}%\n\nProfit Sekarang:\n` +
                    `- Bronze: ${currentMargins.bronze * 100}%\n` +
                    `- Silver: ${currentMargins.silver * 100}%\n` +
                    `- Gold: ${currentMargins.gold * 100}%\n` +
                    `- Owner: ${currentMargins.owner * 100}%`);
            });
        });
    } else {
        const data = fs.readFileSync('./db/config.js', 'utf8');

        const currentMargins = {
            bronze: parseFloat(data.match(/marginsmmBronze\s*=\s*([0-9.]+)/)[1]),
            silver: parseFloat(data.match(/marginsmmSilver\s*=\s*([0-9.]+)/)[1]),
            gold: parseFloat(data.match(/marginsmmGold\s*=\s*([0-9.]+)/)[1]),
            owner: parseFloat(data.match(/marginsmmOwner\s*=\s*([0-9.]+)/)[1]),
        };

        m.reply(`Format perintah salah atau nilai tidak valid. Gunakan format: "profit role persentase".\nContoh: "profit bronze 3"\n\nProfit Saat Ini:\n` +
            `- Bronze: ${currentMargins.bronze * 100}%\n` +
            `- Silver: ${currentMargins.silver * 100}%\n` +
            `- Gold: ${currentMargins.gold * 100}%\n` +
            `- Owner: ${currentMargins.owner * 100}%`);
    }
}
break;

case 'profilsmm': {
    if (!isOwner) return; // Hanya pemilik yang bisa mengakses

    // Data autentikasi untuk API GempayBooster
    const endPoint = "https://gempaybooster.com/api/profile";
    const postData = {
        api_id: GB_APIID,        // Ganti dengan API ID Anda
        api_key: GB_APIKEY,      // Ganti dengan API Key Anda
        secret_key: GB_SECRETKEY // Ganti dengan Secret Key Anda
    };

    // Mengirim request ke API untuk mendapatkan detail profil
    connect(endPoint, postData, "application/x-www-form-urlencoded")
        .then((apiResponse) => {
            if (apiResponse && apiResponse.response) {
                // Jika berhasil mendapatkan data profil
                const profile = apiResponse.data;
                const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
                const profileInfo = `───〔 *PROFIL GEMPAYBOOSTER* 〕───\n\n` +
                                    `» *Username* : ${profile.username}\n` +
                                    `» *Saldo* : ${formatSaldo(profile.balance)}`;

                m.reply(profileInfo); // Mengirimkan informasi profil ke pengguna
            } else {
                console.log("Failed to get profile data."); // Log kesalahan jika gagal
                m.reply("Gagal mendapatkan data profil. Silakan coba lagi.");
            }
        })
        .catch((error) => {
            console.error("Error:", error); // Tangani kesalahan
            m.reply("Terjadi kesalahan saat menghubungi API. Cek koneksi atau coba lagi nanti.");
        });
}
break;



                 



                 







            
            
            
case 'inv': {
  // Data contoh untuk invoice
  const testData = {
    invoice: "12345",
    product: "Sample Product",
    tujuan: "123456789",
    harga: 50000,
    waktu: "12:00 WIB | 01-01-2023",
    sn: "2694-1454-2414-8989-7678/ERINA-DAMAYANTI/KMR-5/R1M/900/33.7"  
  };

  const backgroundPath = path.join(__dirname, "assets", "BG.png"); // Path ke latar belakang
  const logoPath = `${linkLOGO}`; // Path ke logo

  generateInvoiceWithBackground(testData, backgroundPath, logoPath).then((invoicePath) => {
    if (fs.existsSync(invoicePath)) {
      // Kirim gambar invoice untuk pengujian
      const imageMessage = {
        caption: "Ini adalah contoh gambar invoice",
        image: { url: invoicePath },
      };

      client.sendMessage(sender, imageMessage); // Kirim gambar invoice untuk pengujian
    } else {
      m.reply("Gambar invoice tidak ditemukan.");
    }
  });

  break;
}




      case 'cek': {
  if (args.length < 1) {
    m.reply(`Format Salah\nFormat yang benar adalah : \`\`\`cek [Nomor Invoice]\`\`\``);
    return;
  }

  const nomorInvoice = args[0];
  const transactionsData = JSON.parse(fs.readFileSync('./db/trx.json', 'utf8'));
  const transaction = transactionsData.find((trx) => trx.invoice === nomorInvoice);

  if (!transaction) {
    m.reply(`Transaksi dengan Nomor Invoice ${nomorInvoice} tidak ditemukan`);
    return;
  }

  const statusMessage = transaction.status === 'Sukses' ?
    `✅ *TRANSAKSI BERHASIL*\n` :
    `❌ *TRANSAKSI GAGAL*\n`;

  const responseMessage = `${statusMessage}Invoice: ${transaction.invoice}\nItem: ${transaction.item}\nStatus: ${transaction.status}\nRC: ${transaction.rc}\nTujuan: ${transaction.tujuan}\nHarga: Rp ${transaction.harga.toLocaleString()}\nWaktu: ${transaction.waktu}`;

  m.reply(responseMessage);
  break;
}
   
   
case 'riwayat': {
    if (!isOwner) return;
  const inputDate = m.text.split(' ')[1]; // Ambil tanggal dari perintah, misal "29,02,2024"
  const selectedDate = moment(inputDate, 'DD,MM,YYYY').locale('id');

  if (!selectedDate.isValid()) {
    m.reply('Format tanggal tidak valid. Gunakan format DD,MM,YYYY (contoh: 29,02,2024)');
    return;
  }

  const formattedDate = selectedDate.format('dddd,DD MMMM YYYY');
  const transactionsData = JSON.parse(fs.readFileSync('./db/trx.json', 'utf8'));
  const selectedTransactions = transactionsData.filter((trx) => trx.waktu.includes(formattedDate));

  if (selectedTransactions.length === 0) {
    m.reply(`Tidak ada riwayat transaksi pada tanggal ${formattedDate}.`);
    return;
  }

  const successTransactions = selectedTransactions.filter((trx) => trx.status === 'Sukses');
  const failedTransactions = selectedTransactions.filter((trx) => trx.status === 'Gagal');

  // Hitung jumlah transaksi sukses, jumlah transaksi gagal, total modal, dan total keuntungan
  const totalSuccess = successTransactions.length;
  const totalFailed = failedTransactions.length;
  const totalModal = successTransactions.reduce((acc, trx) => acc + trx.harga_pokok, 0);
  const totalKeuntungan = successTransactions.reduce((acc, trx) => acc + (trx.harga - trx.harga_pokok), 0);

  // Buat pesan respon
  let responseMessage = `◧━━ *${namaStore}* ━━◧\n📅 *RIWAYAT TRANSAKSI TANGGAL ${formattedDate}*\n`;

  if (totalSuccess > 0) {
    responseMessage += '\n✅ *TRANSAKSI SUKSES*\n';
    successTransactions.forEach((trx) => {
      responseMessage += `\nInvoice: ${trx.invoice}\nItem: ${trx.item}\nTujuan: ${trx.tujuan}\nHarga: Rp ${trx.harga.toLocaleString()}\nHarga Pokok: Rp ${trx.harga_pokok.toLocaleString()}\n`;
    });
  }

  if (totalFailed > 0) {
    responseMessage += '\n❌ *TRANSAKSI GAGAL*\n';
    failedTransactions.forEach((trx) => {
      responseMessage += `\nInvoice: ${trx.invoice}\nItem: ${trx.item}\nTujuan: ${trx.tujuan}\nHarga: Rp ${trx.harga.toLocaleString()}\nHarga Pokok: Rp ${trx.harga_pokok.toLocaleString()}\n`;
    });
  }

  responseMessage += `\n✅ *JUMLAH TRANSAKSI SUKSES*: ${totalSuccess}`;
  responseMessage += `\n❌ *JUMLAH TRANSAKSI GAGAL*: ${totalFailed}`;
  responseMessage += `\n💰 *TOTAL MODAL*: Rp ${totalModal.toLocaleString()}`;
  responseMessage += `\n📈 *TOTAL KEUNTUNGAN*: Rp ${totalKeuntungan.toLocaleString()}`;

  m.reply(responseMessage);
  break;
}



case 'getlayanan': {
    if (!isOwner) return;

    const layananList = {
        'digiflazz': {
            endPoint: "https://api.digiflazz.com/v1/price-list",
            cmd: 'prepaid',
            data: {
                cmd: 'prepaid',
                username,
                sign: crypto.createHash('md5').update(username + apiKey + 'prepaid').digest('hex')
            },
            fileName: productData
        },
        'gempaySMM': {
            endPoint: "https://gempaybooster.com/api/services",
            data: {
                api_id: GB_APIID,
                api_key: GB_APIKEY,
                secret_key: GB_SECRETKEY
            },
            fileName: productData2
        }
    };

    // Fungsi untuk mengakses API berdasarkan layanan
    const getServiceData = async (layanan) => {
        const { endPoint, data, fileName } = layananList[layanan];

        try {
            let apiResponse;
            if (layanan === 'digiflazz' || layanan === 'gempaySMM') {
                // Koneksi dengan menggunakan fungsi connect
                apiResponse = await connect(endPoint, data, layanan === 'gempaySMM' ? "application/x-www-form-urlencoded" : undefined);
            } else {
                // Menggunakan curl untuk layanan yang membutuhkan perintah POST
                const curlCommand = `curl -X POST ${endPoint} -d "${Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&')}"`;
                const { exec } = require('child_process');
                apiResponse = await new Promise((resolve, reject) => {
                    exec(curlCommand, (error, stdout) => {
                        if (error) reject(error);
                        try {
                            resolve(JSON.parse(stdout));
                        } catch (parseError) {
                            reject(parseError);
                        }
                    });
                });
            }

            if (apiResponse && apiResponse.data) {
                fs.writeFileSync(fileName, JSON.stringify(apiResponse.data, null, 2));
                m.reply(`Layanan ${layanan} berhasil di-update`);
            } else {
                const errorMsg = apiResponse.msg || "Permintaan tidak sesuai atau data kosong";
                m.reply(`Gagal mengambil data layanan dari ${layanan}: ${errorMsg}`);
            }
        } catch (error) {
            console.error(`Error saat mengakses API ${layanan}:`, error);
            m.reply(`Gagal mengambil data layanan dari ${layanan}`);
        }
    };

    // Panggil getServiceData untuk setiap layanan yang diinginkan
    await getServiceData('digiflazz');
    await getServiceData('gempaySMM');
}
break;
            
      
        




      
      case 'dashboard': {
        if (!isOwner) return
        const combinedString = username + apiKey + "depo";
        const signature = crypto.createHash('md5').update(combinedString).digest('hex');
        const endPoint = "https://api.digiflazz.com/v1/cek-saldo";
        const postData = {
          cmd: "deposit",
          username: username,
          sign: signature,
        };
        connect(endPoint, postData)
          .then((apiResponse) => {
            if (apiResponse && apiResponse.data) {
              const profile = apiResponse.data;
              const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
              const ngen = `───〔 *PROFIE* 〕──\n\n» *Username* : ${username}\n» *Nama Bot* : ${botName}\n» *Saldo* : ${formatSaldo(profile.deposit)}\n» *Status* : Aktif`
              m.reply(ngen)
            } else {
              console.log("Failed to get API data.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            console.log("Failed to make API request.");
          });
      }
      break
      case 'list': {
        if (isGroup) {
          const groupID = from; // Use the group ID as a unique identifier
          listCustomCommands(groupID, m.reply);
        } else {
          m.reply("Command ini hanya bisa digunakan di Group");
        }
      }
      break
      case 'hidetag':
      case 'h': {
        if (!m.isGroup) return
        if (!isAdmins) return
        client.sendMessage(m.chat, {
          text: text ? text : '',
          mentions: participants.map(a => a.id)
        }, {
          quoted: m
        })
      }
      break
      case 'join': {
        if (!isOwner) return
        if (!text) return m.reply(`Link Groupnya Mana?`)
        var ini_urrrl = text.split('https://chat.whatsapp.com/')[1]
        var data = await client.groupAcceptInvite(ini_urrrl).then((res) => m.reply(`Berhasil Join ke grup...`)).catch((err) => m.reply(`Eror.. Munkin bot telah di kick Dari grup tersebut`))
      }
      break
      case 'getip': {
        if (!isOwner) return
        var http = require('http')
        http.get({
          'host': 'api.ipify.org',
          'port': 80,
          'path': '/'
        }, function(resp) {
          resp.on('data', function(ip) {
            m.reply("IP : " + ip);
          })
        })
      }
      break
      case 'kick': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`${users} telah di kick...`)).catch((err) => m.reply('hmmm gagal kick dia'))
      }
      break
            
    case 'del': {
    if (!m.isGroup) return; // Pastikan pesan diterima dari grup
    if (!isAdmins && !isOwner) return; // Hanya admin atau owner yang bisa menghapus pesan
    if (!m.quoted) return; // Pastikan ada pesan yang dibalas

    let target = m.quoted.sender; // Ambil pengirim pesan yang dibalas

    // Hapus pesan yang dibalas
    await client.deleteMessage(m.chat, {
        id: m.quoted.id,
        remoteJid: target,
        fromMe: false
    });

    m.reply('Pesan berhasil dihapus.');
}
break;

      
      case 'linkgroup':
      case 'linkgrup':
      case 'linkgc': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let response = await client.groupInviteCode(m.chat)
        client.sendText(m.chat, `『 *INFO LINK GROUP 』*\n\n» *Nama Grup :* ${groupMetadata.subject}\n» *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n» *ID Grup:* ${groupMetadata.id}\n» *Link Grup :* https://chat.whatsapp.com/${response}\n» *Member :* ${groupMetadata.participants.length}\n`, m, {
          detectLink: true
        })
      }
      break
      case 'updatelist': {
    if (!m.isGroup) return;
    if (!isAdmins) return;

    const groupID = from;
    const updateListCommand = body.slice(10).trim();
    const delimiterIndex = updateListCommand.indexOf('||');

    if (delimiterIndex !== -1) {
        const updateCommand = updateListCommand.slice(0, delimiterIndex).trim().toUpperCase();
        const newResponse = updateListCommand.slice(delimiterIndex + 2).trim();

        if (updateCommand && newResponse) {
            const customCommands = readCustomCommands();

            if (customCommands[groupID] && customCommands[groupID][updateCommand]) {
                customCommands[groupID][updateCommand] = newResponse;
                saveCustomCommands(customCommands);

                m.reply(`Sukses Update List Message\nKata Kunci: *${updateCommand}*`);
            } else {
                m.reply(`Kata kunci *${updateCommand}* tidak ditemukan`);
            }
        } else {
            m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
        }
    } else {
        m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
    }
}
break;


case 'profit': {
    if (!isOwner) return m.reply('Hanya owner yang dapat mengakses ini.');

    const profitCommand = body.slice(7).trim();
    const [role, percentageString] = profitCommand.split(' ');

    const roles = ['bronze', 'silver', 'gold', 'owner'];
    const percentage = parseFloat(percentageString?.trim()) / 100;

    if (roles.includes(role) && !isNaN(percentage) && percentage >= 0 && percentage <= 1) {
        const configFile = './db/config.js';

        fs.readFile(configFile, 'utf8', (err, data) => {
            if (err) {
                return m.reply('Gagal membaca file konfigurasi.');
            }

            // Update the margin for the specified role in the config file
            const marginRegex = new RegExp(`margin${role.charAt(0).toUpperCase() + role.slice(1)}\\s*=\\s*[0-9.]+`);
            const newMarginString = `margin${role.charAt(0).toUpperCase() + role.slice(1)} = ${percentage}`;
            data = data.replace(marginRegex, newMarginString);

            fs.writeFile(configFile, data, 'utf8', (err) => {
                if (err) {
                    return m.reply('Gagal menulis ke file konfigurasi.');
                }

                const currentMargins = {
                    bronze: parseFloat(data.match(/marginBronze\s*=\s*([0-9.]+)/)[1]),
                    silver: parseFloat(data.match(/marginSilver\s*=\s*([0-9.]+)/)[1]),
                    gold: parseFloat(data.match(/marginGold\s*=\s*([0-9.]+)/)[1]),
                    owner: parseFloat(data.match(/marginOwner\s*=\s*([0-9.]+)/)[1]),
                };

                m.reply(`*Sukses Merubah Profit ${role.charAt(0).toUpperCase() + role.slice(1)}* menjadi ${percentage * 100}%\n\nProfit Sekarang:\n` +
                    `- Bronze: ${currentMargins.bronze * 100}%\n` +
                    `- Silver: ${currentMargins.silver * 100}%\n` +
                    `- Gold: ${currentMargins.gold * 100}%\n` +
                    `- Owner: ${currentMargins.owner * 100}%`);
            });
        });
    } else {
        const data = fs.readFileSync('./db/config.js', 'utf8');

        const currentMargins = {
            bronze: parseFloat(data.match(/marginBronze\s*=\s*([0-9.]+)/)[1]),
            silver: parseFloat(data.match(/marginSilver\s*=\s*([0-9.]+)/)[1]),
            gold: parseFloat(data.match(/marginGold\s*=\s*([0-9.]+)/)[1]),
            owner: parseFloat(data.match(/marginOwner\s*=\s*([0-9.]+)/)[1]),
        };

        m.reply(`Format perintah salah atau nilai tidak valid. Gunakan format: "profit role persentase".\nContoh: "profit bronze 3"\n\nProfit Saat Ini:\n` +
            `- Bronze: ${currentMargins.bronze * 100}%\n` +
            `- Silver: ${currentMargins.silver * 100}%\n` +
            `- Gold: ${currentMargins.gold * 100}%\n` +
            `- Owner: ${currentMargins.owner * 100}%`);
    }
}
break;














  case 'addlist': {
        if (!m.isGroup) return
        if (!isAdmins) return
        const groupID = from;
        const addlistCommand = body.slice(8).trim();
        const delimiterIndex = addlistCommand.indexOf('||');
        if (delimiterIndex !== -1) {
          const customCommand = addlistCommand.slice(0, delimiterIndex).trim().toUpperCase();
          const customResponse = addlistCommand.slice(delimiterIndex + 2).trim();
          if (customCommand && customResponse) {
            addCustomCommand(groupID, customCommand, customResponse);
            m.reply(`Sukses Set List Message\nKata Kunci : *${customCommand}*`);
          } else {
            m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
          }
        } else {
          m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
        }
      }
      break;

      case 'dellist':
      case 'hapuslist': {
        if (!isAdmins) return
          
        const groupID = from;

        const dellistCommand = body.slice(8).trim().toUpperCase();
        const customCommands = readCustomCommands();
        if (customCommands[groupID] && customCommands[groupID][dellistCommand]) {
          delete customCommands[groupID][dellistCommand];
          saveCustomCommands(customCommands);
          m.reply(`Sukses Delete List Message\nKata Kunci : *${dellistCommand}*`);
        } else {
          m.reply(`Gunakan dengan cara *${command} key*\n\nContoh: \`\`\`${command} tes\`\`\``);
        }
      }
      break;
      case 'close': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya = `───〔 *GROUP CLOSE* 〕──

*Group Telah Di Tutup Oleh* @${sender.split("@")[0]}

\`\`\`📆${hariini}
⏰${time1} WIB\`\`\`

اَلْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ 

_Terimakasih atas orderan hari ini, semoga besok lebih lebih laris untuk kita semua aamiin... ✨_`
        await client.groupSettingUpdate(m.chat, 'announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
      case 'open': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya =
          `───〔 *GROUP OPEN* 〕──

*Group Telah Di Buka Oleh* @${sender.split("@")[0]}

\`\`\`📆${hariini}
⏰${time1} WIB\`\`\`

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

_Open guys, jangan lupa awali hari dengan senyuman semoga dilancarkan urusan ✨_`
        await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
            

case 'proses':
case 'p': {
    if (!m.quoted || !m.quoted.sender || !isOwner) return;
    
    const users = m.quoted.sender;
    const owned = `${global.nomerOwner}@s.whatsapp.net`;
    const menuInfo =
        `「 *TRANSAKSI PENDING* 」\n\n` +
        `⛅ HARI      : ${hariini}\n` +
        `⌚ JAM       : ${time1}\n` +
        `✨ STATUS : PENDING\n\n` +
        `*PESANAN @${users.split("@")[0]} SEDANG DIPROSES*`;
    
    client.sendMessage(from, { text: menuInfo, contextInfo: { mentionedJid: [users, owned], forwardingScore: 9999, isForwarded: true } }, );
}
break;

case 'done':       
case 'd': {
    if (!m.quoted || !m.quoted.sender || !isOwner) return;
    
    const users = m.quoted.sender;
    const owned = `${global.nomerOwner}@s.whatsapp.net`;
    const menuInfo =
        `「 *TRANSAKSI SUKSES* 」\n\n` +
        `⛅ HARI      : ${hariini}\n` +
        `⌚ JAM       : ${time1}\n` +
        `✨ STATUS : SUKSES\n\n` +
        `*PESANAN @${users.split("@")[0]} TELAH BERHASIL*`;
    
    client.sendMessage(from, { text: menuInfo, contextInfo: { mentionedJid: [users, owned], forwardingScore: 9999, isForwarded: true } }, );
}
break;
       
    
    case 'owner': {
    var owner_Nya = `${global.nomerOwner}@s.whatsapp.net`;

    // Sending the contact
    sendContact(from, owner_Nya, global.ownerName, m);

    // Adding a delay before sending the response message
    setTimeout(() => {
        // Adding respon pesan setelah mengirim kontak owner
        var responseMessage = "*_Itu Kak Kontak Admin Saya, Jika Mau Order Apapun Silahkan Hubungi Dia ya._*\n\n*Admin Juga Menyediakan Jasa Pembuatan Bot Dan Website Topup Otomatis Bagi Kamu Yang Mau Mulai Berbisnis 🤝*";
        client.sendText(from, responseMessage);
    }, 1000); // Adjust the delay time as needed

    break;
}
            
case 'afk': {
    if (!m.isGroup) return m.reply("FITUR UNTUK GRUB")
    if (!isOwner) return m.reply("Fitur Ini Khusus Owner!");
    
	const cooldowns = new Map();              
    const now = Date.now();
    const cooldownTime = 5000; // Batas waktu antara eksekusi perintah AFK dalam milidetik (misalnya, 5 detik)

    if (cooldowns.has(m.sender)) {
        const lastExecutionTime = cooldowns.get(m.sender);
        const remainingTime = lastExecutionTime + cooldownTime - now;
        if (remainingTime > 0) {
            return m.reply(`Tunggu beberapa saat sebelum menggunakan perintah AFK lagi. (Sisa Waktu: ${msToDate(remainingTime)})`);
        }
    }

    let reason = text ? text : 'Nothing.';
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m);
    cooldowns.set(m.sender, now); // Catat waktu terakhir pengguna menjalankan perintah AFK
break;
};            
        
     case 'cekff':{
	if (!q) return m.reply(`🔍CEK NICK FREE FIRE\nContoh: cekff 12345678`)
	const id = text.split(' ')[0]
    if (!id) return m.reply('ID wajib di isi');
	const { stalkff } = require('./lib/stalk-ff.js');
	stalkff(id).then(i=>{
        //console.log(i)
		if (i.status !== 200) return m.reply(i.msg)
		m.reply(`*CEK NICK FREE FIRE*

*ID*: ${id}
*Nickname:* ${i.nickname}`)
	})
break;
}
case 'cekml':{
	if (!q) return m.reply(`🔍CEK NICK MOBILE LEGENDS\nContoh: cekml 1234578 1234`)
	const id = text.split(' ')[0]
	const zon = text.split(' ')[1]
	if (!id) return m.reply('ID wajib di isi');
	if (!zon) return m.reply('ZoneID wajib di isi');
    const { stalkml } = require('./lib/stalk-ml.js');
	stalkml(id, zon).then(i=>{
        //console.log(i)
		if (i.status !== 200) return m.reply(i.msg)
		m.reply(`*CEK NICK MOBILE LEGENDS*
		
ID: ${id} (${zon})
Nickname: ${i.nickname}`)
	})
break;
}
            
            
          case 'mlreg':{
    if (!text) {
        return m.reply(`*MOBILE LEGENDS VALIDASI ID V2.0*\n\nGunakan dengan cara :\n> ${prefix + command} ID SERVER\n\nContoh :\n> ${prefix + command} 640015932 10164`);
    }
    const fetch = require('node-fetch');
    const url = 'https://order-sg.codashop.com/validate';
    const userId = args[0];
    const zoneId = args[1];
    const country = "SG";

    if (!userId || !zoneId) {
        return m.reply(`Format Salah!\n\nSilakan gunakan dengan cara :\n\n> ${prefix + command} userId zoneId\n\nContoh :\n> ${prefix + command} 640015932 10164`);
    }

    const params = new URLSearchParams();
    params.append('country', country)
    params.append('userId', userId);
    params.append('voucherTypeName', "MOBILE_LEGENDS")
    params.append('zoneId', zoneId);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: params
        });
        const data = await response.json();
        console.log(data);
        if (data.success === false) { 
            return m.reply(`Maaf, ID tidak valid`);
        } else {
            const encodedUsername = data.result.username;
            const decodedUsername = decodeURIComponent(encodedUsername);
            const regionCountry = data.result.create_role_country.toUpperCase();
            const regionLogin = data.result.this_login_country.toUpperCase();
            
            const message = ` *DETAIL AKUN MOBILE LEGENDS*\n\n Username: ${decodedUsername}\n Region Akun: ${regionCountry}\n Region Login: ${regionLogin}`;
            client.sendMessage(m.chat, { text: message }, { quoted: m });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return m.reply('Maaf terjadi kesalahan, silahkan cek Console untuk informasi lebih lanjut');
    }
    break;
}

case "cekpln": {
    if (!text) return m.reply(`!Silahkan isi dengan nomer meter\n\nContoh : cekpln 14331231507`)
        let data = {
          commands: 'pln-subscribe',
    customer_no: text,
        }
        fetch('https://api.digiflazz.com/v1/transaction', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
            const pesan = `*──••• 「 CEK DATA PLN 」 •••──*

Nama : ${res.data.name}
Nomor Meter: ${res.data.meter_no}
Subscribe: ${res.data.subscriber_id}
Daya : ${res.data.segment_power}`            
            client.sendMessage(m.chat,{text:pesan})
          })
break;
}    
            case 'antilink': {
  if (!isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply("Jadikan saya Admin dulu ya :)");
  
  const action = args[0]; // 'on' untuk mengaktifkan atau 'off' untuk menonaktifkan
  
  if (action === 'on') {
    antilink.push(from);
    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2));
    m.reply(`✅ Sukses mengaktifkan fitur antilink di group *${groupMetadata.subject}*`);
  } else if (action === 'off') {
    const index = antilink.indexOf(from);
    if (index !== -1) {
      antilink.splice(index, 1);
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2));
      m.reply(`✅ Sukses menonaktifkan fitur antilink di group *${groupMetadata.subject}*`);
    } else {
      m.reply(`Fitur antilink tidak aktif di group *${groupMetadata.subject}*.`);
    }
  } else {
    m.reply('Gunakan "on" untuk mengaktifkan atau "off" untuk menonaktifkan fitur antilink.');
  };
break;
};           
            case "depodigi": {
const _0x1fd07d=_0x13f2;(function(_0x54b75a,_0x190412){const _0x3009fb=_0x13f2,_0x3c2d53=_0x54b75a();while(!![]){try{const _0x3796b1=parseInt(_0x3009fb(0x1b3))/0x1+-parseInt(_0x3009fb(0x1b0))/0x2*(parseInt(_0x3009fb(0x1a1))/0x3)+parseInt(_0x3009fb(0x1a0))/0x4*(parseInt(_0x3009fb(0x198))/0x5)+parseInt(_0x3009fb(0x197))/0x6*(-parseInt(_0x3009fb(0x1b1))/0x7)+parseInt(_0x3009fb(0x196))/0x8*(-parseInt(_0x3009fb(0x1b5))/0x9)+parseInt(_0x3009fb(0x1bc))/0xa+-parseInt(_0x3009fb(0x1a3))/0xb*(-parseInt(_0x3009fb(0x199))/0xc);if(_0x3796b1===_0x190412)break;else _0x3c2d53['push'](_0x3c2d53['shift']());}catch(_0x6ad3b){_0x3c2d53['push'](_0x3c2d53['shift']());}}}(_0x55a3,0x8421c));if(!isCreator)throw mess[_0x1fd07d(0x1bb)];if(!text)return m.reply(_0x1fd07d(0x1b6)+(prefix+command)+_0x1fd07d(0x1bd)+(prefix+command)+_0x1fd07d(0x1a7));const nominal=parseInt(text[_0x1fd07d(0x19a)]('/')[0x0]),nama=text[_0x1fd07d(0x19a)]('/')[0x1],bankCode=text[_0x1fd07d(0x19a)]('/')[0x2];function _0x55a3(){const _0x3e846a=['catch','\x20200000/Tomi\x20Heneldra/BCA\x0a\x0a\x0aInformasi\x20Kode\x20Bank\x20:\x0a-\x20BCA\x0a-\x20MANDIRI\x0a-\x20BRI','json','_Maaf\x20ada\x20gangguan_','\x0a\x0aatas\x20nama\x20*Digiflazz\x20Interkoneksi\x20Indonesia*\x0a\x0aTotal\x20Deposit\x20:\x20Rp\x20','amount','sendText','log','\x0aCatatan\x20:\x20','notes','64164VbcODN','133735lhuRkT','reply','386595qpAzDZ','*_Kode\x20Bank\x20Tidak\x20Valid_*','9zyQCdb','DEPOSIT\x20SALDO\x20DIGIFLAZZ\x0a\x0a\x0aSilahkan\x20gunakan\x20dengan\x20cara\x20:\x0a','deposit','message','6042888890','data','owner','8475940VxkQfh','\x20[Nominal]/[Nama\x20Rekening]/[Kode\x20Bank]\x0a\x0aContoh\x20:\x20','POST','7142608Lxmcqa','312LNNdoL','5mVImqm','56496lHlXPN','split','\x20:\x20','application/json','then','toUpperCase','*_Harap\x20Isi\x20Kode\x20Bank\x20:\x20BCA/MANDIRI/BRI_*','2019476KbmZpP','36ncBCeB','1550009910111','2508bCLSgg','stringify','https://api.digiflazz.com/v1/deposit'];_0x55a3=function(){return _0x3e846a;};return _0x55a3();}if(!nominal)return m[_0x1fd07d(0x1b2)]('*_Harap\x20Isi\x20Nominal\x20Deposit\x20Kamu_*');if(!nama)return m[_0x1fd07d(0x1b2)]('*_Harap\x20Isi\x20Nama\x20Rekening\x20Kamu_*');if(!bankCode)return m['reply'](_0x1fd07d(0x19f));const bankMappings={'BCA':_0x1fd07d(0x1b9),'MANDIRI':_0x1fd07d(0x1a2),'BRI':'213501000291307'},signa=md5(username+apiKey+_0x1fd07d(0x1b7)),bankRekening=bankMappings[bankCode['toUpperCase']()];if(!bankRekening)return m['reply'](_0x1fd07d(0x1b4));const data={'username':username,'amount':nominal,'Bank':bankCode,'owner_name':nama,'sign':signa};function _0x13f2(_0x334f80,_0xaa82d2){const _0x55a3f3=_0x55a3();return _0x13f2=function(_0x13f2d5,_0x1361e3){_0x13f2d5=_0x13f2d5-0x195;let _0x1f6b61=_0x55a3f3[_0x13f2d5];return _0x1f6b61;},_0x13f2(_0x334f80,_0xaa82d2);}fetch(_0x1fd07d(0x1a5),{'method':_0x1fd07d(0x195),'body':JSON[_0x1fd07d(0x1a4)](data),'headers':{'Content-Type':_0x1fd07d(0x19c)}})[_0x1fd07d(0x19d)](_0x141e5b=>_0x141e5b[_0x1fd07d(0x1a8)]())[_0x1fd07d(0x19d)](_0x79bff3=>{const _0x160750=_0x1fd07d;console[_0x160750(0x1ad)](_0x79bff3);if(_0x79bff3['data']['rc']===0x40)return m['reply'](_0x79bff3[_0x160750(0x1ba)][_0x160750(0x1b8)]);const _0x20e8f4='Silahkan\x20Lakukan\x20pembayaran\x20ke\x20Rekening\x20Digiflazz\x20Sesuai\x20Bank\x20Tujuan\x20:\x0a\x0aRekening\x20Bank:\x20'+bankCode[_0x160750(0x19e)]()+_0x160750(0x19b)+bankRekening+_0x160750(0x1aa)+_0x79bff3['data'][_0x160750(0x1ab)]+_0x160750(0x1ae)+_0x79bff3['data'][_0x160750(0x1af)];client[_0x160750(0x1ac)](m['chat'],_0x20e8f4,m);})[_0x1fd07d(0x1a6)](_0x2ce0c2=>{const _0xa5a2da=_0x1fd07d;m[_0xa5a2da(0x1b2)](_0xa5a2da(0x1a9));});
break;
};
      default:
    }
  } catch (err) {
    m.reply(util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})