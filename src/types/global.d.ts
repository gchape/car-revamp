export {};

declare global {
  type Service = {
    title: string;
    src: string;
    description: string[];
    prices: {
      car: "სედანი" | "ჯიპი";
      price: number;
    }[];
  };
}
