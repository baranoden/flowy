export const parser = (text: string) => {
  if (text) {
    const info = localStorage.getItem(text);
    const parsed = info ? JSON.parse(info) : "Empty";
    return parsed;
  }
};
