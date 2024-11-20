export default async function Delay(count: number) {
  return new Promise((resolve) => setTimeout(() => resolve(''), count));
}
