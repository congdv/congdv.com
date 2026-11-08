import QRCode from 'qrcode'

const CONNECT_URL = 'https://congdv.com/connect'
const OUTPUT_PATH = 'public/connect-qr.png'
const QR_WIDTH_PX = 1024
const QR_MARGIN_MODULES = 2

await QRCode.toFile(OUTPUT_PATH, CONNECT_URL, {
  width: QR_WIDTH_PX,
  margin: QR_MARGIN_MODULES,
  errorCorrectionLevel: 'M',
  color: { dark: '#2b1f3d', light: '#ffffff' },
})

console.log(`Wrote ${OUTPUT_PATH} -> ${CONNECT_URL}`)
