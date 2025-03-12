const CustomEncryptor = require("./encryptor");

const encryptor = new CustomEncryptor();

const hashedPassword = encryptor.encrypt("mongodb://SupperAdminBek:Azamjonazooz12%40bro@91.222.239.5:27017/Backery?authSource=admin&directConnection=true");
console.log("Stored Hash:", hashedPassword);

const isValid = encryptor.verify("mongodb://SupperAdminBek:Azamjonazooz12%40bro@91.222.239.5:27017/Backery?authSource=admin&directConnection=true", hashedPassword);
console.log("Password Correct?", isValid);
