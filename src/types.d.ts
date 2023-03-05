export interface MealTypeApi {
  time: string;
  descr: string;
  calories: number;
  date: string;
}

export interface MealOnClientSide extends MealTypeApi {
  calories: string
}