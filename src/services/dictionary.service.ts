export async function isEnglishWord(word: string) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    return response.ok;
  } catch (error) {
    return false;
  }
}
