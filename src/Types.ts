export type TProduct = {
  id: number;
  item_group: string;
  item_sub_group: string;
  brand: string;
  title: string;
  price: number;
  image_url: string;
  scaled_image: string;
  ean: number;
  features: string[];
  low_carb_diet: boolean;
  product_size: string;
  more_info: string[];
  yeast_free: boolean;
  sugar_free: boolean;
};
