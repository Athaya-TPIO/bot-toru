const fs = require('fs')
const chalk = require('chalk')

global.owner = ['62895366601524']
global.nomerOwner = '62895366601524'
global.ownerName = 'Athaya'

global.nomerBot = '6281255814815' 
global.botName = 'Torubot'
global.sessionName = 'session' 

namaStore = 'Toru Store' // NAMA STORE KAMU

// PAYDISINI
APIKEY_PAYDISINI = '' // API KEY

username = 'yarulog9zAao' // ISI USERNAME DIGIFLAZZ
apiKey = 'b8da4197-8c99-5f14-bde8-f2c5732c192e'   // ISI APIKEY PRODUCTION DIGIFLAZZ
marginBronze = 0.018000000000000002 // 3%
marginSilver = 0.025 // 2.5%
marginGold = 0.02 // 2%
marginOwner = 0.02 // 3%

//GEMPAYBOOSTER
GB_APIID = '281'
GB_APIKEY = 'eb865cc6e79d2ad3018cba74a37f93036353d2fc5c0bc5237eaccd5f66342cfe'
GB_SECRETKEY = 'Sampit2017'

//PROFIT SOSMED
marginsmmBronze = 0.03 // 3%
marginsmmSilver = 0.025 // 2.5%
marginsmmGold = 0.02 // 2%
marginsmmOwner = 0.03 // 3%

paymentKamu = `Dana | Gopay | Spay
0895366601524
AN Athaya Muluq Priadinata
!TF Dari Bank ke Dana +500
!TF Dari Dana ke Dana +100

Bank Jago
101026730717
AN Athaya Muluo Priadinata

Bank NEO
5859457102500553
Bank BRI
016301143197508
Seabank
901598540500
AN Athaya Muluq Priadinata
`

linkLOGO = './assets/logo.png'
linkQRIS = 'https://8030.us.kg/file/dOPJ8YYhLzvg.jpg'
linkGC = 'https://chat.whatsapp.com/Eu2MtUJaFmJHUSbjng1Oqj'
poster1 = 'https://8030.us.kg/file/J3XgjScqG0GI.jpg'

// Respon Bot
global.mess = {
  wait: "Loading...",
  owner: "Maaf pak, fitur ini khusus Owner",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  group: "Fitur Khusus Group!",
  private: 'Silahkan menggunakan Fitur ini di Private Chat!',
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})