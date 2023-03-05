export interface MealTypeApi {
  time: string;
  descr: string;
  calories: number;
  date: string;
}

export interface MealOnClientSide extends MealTypeApi {
  calories: string
}

export interface MealsListApi {
  [id: string]: MealTypeApi;
}

export interface MealType extends MealTypeApi {
  id: string;
}