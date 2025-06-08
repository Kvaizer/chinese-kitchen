import salad1 from '../assets/salads1.jpg';
import salad2 from '../assets/salads2.jpg';
import beef1 from '../assets/beef1.jpg';
import beef2 from '../assets/beef2.jpg';
import pork1 from '../assets/pork1.jpg';
import pork2 from '../assets/pork2.jpg';
import pork3 from '../assets/pork3.jpg';
import pork4 from '../assets/pork4.jpg';
import chicken1 from '../assets/chicken1.jpg';
import chicken2 from '../assets/chicken2.jpg';
import fish1 from '../assets/fish1.jpg';
import fish2 from '../assets/fish1.jpg';
import hotVegetables1 from '../assets/hot-vegetables1.jpg';
import hotVegetables2 from '../assets/hot-vegetables2.jpg';
import garnishes from '../assets/garnishes.jpg';
import bar from '../assets/bar.jpg';
import rulesAndFines from "../assets/rules-and-fines.jpg";

type MenuItemT = {
    id: string
    name: string
    imgSrc: string
}

export const db: Array<MenuItemT> = [
    {
        id: "1",
        name: "salads1",
        imgSrc: salad1
    },
    {
        id: "2",
        name: "salads2",
        imgSrc: salad2
    },
    {
        id: "3",
        name: "pork1",
        imgSrc: pork1
    },
    {
        id: "4",
        name: "pork2",
        imgSrc: pork2
    }, 
    {
        id: "5",
        name: "pork3",
        imgSrc: pork3
    },
    {
        id: "6",
        name: "pork4",
        imgSrc: pork4
    },
    {
        id: "7",
        name: "chicken1",
        imgSrc: chicken1
    },
    {
        id: "8",
        name: "chicken2",
        imgSrc: chicken2
    },
    {
        id: "9",
        name: "fish1",
        imgSrc: fish1
    },
    {
        id: "10",
        name: "fish2",
        imgSrc: fish2
    },
    {
        id: "11",
        name: "hotVegetables1",
        imgSrc: hotVegetables1
    },
    {
        id: "12",
        name: "hotVegetables2",
        imgSrc: hotVegetables2
    },
    {
        id: "13",
        name: "beef1",
        imgSrc: beef1
    },
    {
        id: "14",
        name: "beef2",
        imgSrc: beef2
    },
    {
        id: "15",
        name: "garnishes",
        imgSrc: garnishes
    },
    {
        id: "16",
        name: "bar",
        imgSrc: bar
    },
    {
        id: "17",
        name: 'rules-and-fines',
        imgSrc: rulesAndFines
    }
]