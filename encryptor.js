class CustomEncryptor {
    constructor() {
        this.secretKey = "Pizdessannaxuyhuyyechasansekretkeyimni";
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            + "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя"
            + "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω"
            + "ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىي"
            + "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    }

    encrypt(data) {
        let encrypted = '';
        for (let i = 0; i < data.length; i++) {
            let charCode = data.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length);
            encrypted += this.alphabet[charCode % this.alphabet.length];
        }
        return encrypted;
    }

    decrypt(encryptedData) {
        let decrypted = '';
        for (let i = 0; i < encryptedData.length; i++) {
            let charCode = this.alphabet.indexOf(encryptedData[i]);
            let originalChar = String.fromCharCode(charCode ^ this.secretKey.charCodeAt(i % this.secretKey.length));
            decrypted += originalChar;
        }
        return decrypted;
    }

    // ✅ `verify` methodini qo‘shamiz
    verify(originalData, hashedData) {
        const decrypted = this.decrypt(hashedData);
        return decrypted === originalData; // Tekshirish
    }
}

module.exports = CustomEncryptor;
