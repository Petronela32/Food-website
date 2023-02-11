import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor() { }
  
  getAll():Food[]{
  return [
    {
      id:1,
      name: 'Edible Shels',
      cookTime: '30-40',
      price: 20,
      favorite: true,
      origins: ['greece'],
      stars: 4.8,
      imageUrl: '/assets/images/food-1.jpg',
    },
    {
      id:2,
      name: 'Fries&Chiken',
      cookTime: '20-40',
      price: 15,
      favorite: false,
      origins: ['france'],
      stars: 4,
      imageUrl: '/assets/images/food-2.jpg',
    },
    {
      id:3,
      name: 'Burger',
      cookTime: '5-10',
      price: 25,
      favorite: true,
      origins: ['germany', 'usa'],
      stars: 3.9,
      imageUrl: '/assets/images/food-3.jpg',
    },
    {
      id:4,
      name: 'Meatball',
      cookTime: '45',
      price: 35,
      favorite: false,
      origins: ['turkey'],
      stars: 3,
      imageUrl: '/assets/images/food-4.jpg',
    },
    {
      id:5,
      name: 'Pizza',
      cookTime: '20',
      price: 15,
      favorite: false,
      origins: ['italy'],
      stars: 5,
      imageUrl: '/assets/images/food-5.jpg',
    },
    {
      id:6,
      name: 'Shrimp',
      cookTime: '20',
      price: 35,
      favorite: true,
      origins: ['usa'],
      stars: 4,
      imageUrl: '/assets/images/food-6.jpg',
    },
  ]
}

}
