const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = new Buffer.from('capstoneg6-2020b');
export default {
    encrypt(text) {

        const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

        return {
            // iv: iv.toString('hex'),
            content: encrypted.toString('hex')
        };
    },
    decrypt(hash) {

        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

        return decrpyted.toString();
    }
}
// var encrypted = encrypt(JSON.stringify({test: "this is a test"}))
// console.log("encrypted: ", encrypted)
// console.log("dencrypted: ", JSON.parse(decrypt(encrypted)))
