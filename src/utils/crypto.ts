import { DataDTO } from "../dto/dataDto";
import { AES, enc } from "crypto-js";

export async function encryptData(data: DataDTO) {
  const encrypted = AES.encrypt(
    JSON.stringify(data),
    import.meta.env.VITE_CRYPTO_KEY
  ).toString();
  localStorage.setItem("myGameData", encrypted);
}

export async function decryptData() {
  const encrypted = localStorage.getItem("myGameData");

  if (encrypted) {
    const decrypted = AES.decrypt(
      encrypted,
      import.meta.env.VITE_CRYPTO_KEY
    ).toString(enc.Utf8);
    try {
      const data = JSON.parse(decrypted);
      console.log("data=", data);
      return data;
    } catch (error) {
      console.log("error=", error);
    }
  }
  return null;
}
